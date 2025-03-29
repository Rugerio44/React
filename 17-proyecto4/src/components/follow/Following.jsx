import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "../user/UserList";
import { getProfile } from "../../helpers/getProfile";

export const Following = () => {
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState([]); 
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getUsers(1);
    getProfile(auth, setUserProfile); 
  }, []);

  const getUsers = async (page) => {
    setLoading(true);

    //Peticion para sacar los usuarios
    const request = await fetch(Global.url + "user/list/" + page, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
    });

    const data = await request.json();

    if (data.users && data.status === "success") {
      // Filtrar usuarios que ya sigues
      const cleanUsers = data.users.filter(user => data.Usersfollowing.includes(user._id));

      let newUsers = cleanUsers;

      if (users.length >= 1) {
        newUsers = [...users, ...cleanUsers];
      }

      setUsers(newUsers);
      setFollowing(data.Usersfollowing);
      setLoading(false);

      if (users.length >= (data.total - cleanUsers.length)) {
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
        <h1 className="content__title">Personas que sigue {userProfile.name}  </h1>
      </header>

      <UserList
        users={users}
        loading={loading}
        hasMoreUsers={hasMoreUsers}
        auth={auth}
        follow={follow}
        unfollow={unfollow}
        nextPage={nextPage}
        following={following} // Pass following as a prop
        showButtons={true} // Show buttons
      />
    </>
  );
};