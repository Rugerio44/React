import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "../user/UserList";
import { useParams } from "react-router-dom";
import { getProfile } from "../../helpers/getProfile";

export const Following = () => {

  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState([]);
  const [userProfile, setUserProfile] = useState({}); // Add userProfile state
  const { userId } = useParams();

  useEffect(() => {
    getUsers(1);
    getProfile(auth, setUserProfile); // Use the imported helper function
  }, []);

  const getUsers = async (page) => {
    setLoading(true);

    
    
    //Peticion para sacar los usuarios
    const request = await fetch(Global.url + "follow/following/"+ userId + "/" + page, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
    });

    const data = await request.json();
    
    

    let clearUsers = [];
    //Recorrer y limpiar follows
    data.follows.forEach(follow => {
      clearUsers = [...clearUsers, follow.followed]
    });
    data.users = clearUsers;

    if (data.users && data.status === "success") {
      let newUsers = data.users;

      if (users.length >= 1) {
        newUsers = [...users, ...data.users];
      }
      
      

      setUsers(newUsers);
      setFollowing(data.user_following);
      setLoading(false);

      if (users.length >= (data.total - data.users.length  )) {
        setHasMoreUsers(false);
      }
    }
  };

  const nextPage = () => {
    const next = page + 1;
    setPage(next);
    getUsers(next);
    console.log(following);
    
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Personas que sigue {userProfile.name}</h1> {/* Display user name */}
      </header>

      <UserList
        users={users}
        loading={loading}
        hasMoreUsers={hasMoreUsers}
        auth={auth}
        nextPage={nextPage}
        following={following}
        showButtons={false} 
      />
    </>
  );
};