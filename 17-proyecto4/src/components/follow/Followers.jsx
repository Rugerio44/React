import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "../user/UserList";
import { useParams } from "react-router-dom";
import { getProfile } from "../../helpers/getProfile";

export const Followers = () => {
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
    const request = await fetch(Global.url + "follow/followers/"+ userId + "/" + page, {
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
      clearUsers = [...clearUsers, follow.user]
    });
    data.users = clearUsers;
    
    

    if (data.users && data.status === "success") {
      let newUsers = data.users;

      if (users.length >= 1) {
        newUsers = [...users, ...data.users];
      }

      setUsers(newUsers);
      setFollowing(data.Usersfollowing);
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

  const follow = async (userId) => {

    const request = await fetch(Global.url + "follow/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ followed: userId }),
    });
    const data = await request.json();

    if (data.status === "success") {
      setFollowing([...following, userId]);
    }

  };

  const unfollow = async (userId) => {
    const request = await fetch(Global.url + "follow/unfollow/" + userId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }, 
    });
    const data = await request.json();
    if (data.status == "success") {
      let filterFollowings = following.filter(followingUserId => userId !== followingUserId);
      setFollowing(filterFollowings);
    }
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Personas que siguen a {userProfile.name}</h1> {/* Display user name */}
      </header>

      <UserList
        users={users}
        loading={loading}
        hasMoreUsers={hasMoreUsers}
        auth={auth}
        follow={follow}
        unfollow={unfollow}
        nextPage={nextPage}
        following={following}
        showButtons={false} 
      />
    </>
  );
};