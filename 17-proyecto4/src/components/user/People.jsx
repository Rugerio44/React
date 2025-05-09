import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "./UserList";

export const People = () => {
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState([]); // Initialize following state

  useEffect(() => {
    getUsers(1);
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
        <h1 className="content__title">Gente</h1>
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
