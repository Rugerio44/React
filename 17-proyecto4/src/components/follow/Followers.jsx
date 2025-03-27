import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "../user/UserList";

export const Followers = () => {

  const { auth } = useAuth();
  const [users, setUsers] = useState([]); 
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {  
    getUsers(page); 
  },[]);

  const getUsers = async (page) => {
    setLoading(true);

    //Peticion para sacar los usuarios 
    const request = await fetch(Global.url + "user/list/" + page, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    });

    const data = await request.json();

    //Peticion para sacar los usuarios que sigo
    const followRequest = await fetch(Global.url + "follow/following", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    });

    const followData = await followRequest.json();

    //Crear un estado para poder listar 
    if (data.status === "success" && followData.status === "success") {
      const followingIds = followData.follows.map(follow => follow.followed._id);
      const updatedUsers = data.users.map(user => ({
        ...user,
        following: followingIds.includes(user._id)
      }));
      setUsers(prevUsers => [...prevUsers, ...updatedUsers]); 
      if (users.length >= (data.total - data.users.length)) {
        setHasMoreUsers(false);
      } 
      
    } else {
      setHasMoreUsers(false);
    }
    setLoading(false);    
  };

  //Next page 
  const nextPage = async () => {
    const newPage = page + 1;
    setPage(newPage);
    getUsers(newPage);
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
        followUser={followUser}
        unfollowUser={unfollowUser}
        nextPage={nextPage}
      />
    </>
  );
};
