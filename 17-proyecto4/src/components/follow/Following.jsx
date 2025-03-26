import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "../user/UserList";
import { useParams } from "react-router-dom";

export const Following = () => {

  const { auth } = useAuth();
  const [users, setUsers] = useState([]); 
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [loading, setLoading] = useState(true); 

  const params = useParams();

  useEffect(() => {  
    getUsers(page);
  },[]);

  const getUsers = async (page) => {
    setLoading(true);

    const userId = params.userId;

    //Peticion para sacar los usuarios 
    const request = await fetch(Global.url + "follow/following/" + userId + "/" + page, {
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
      const followingIds = followData.follows ? followData.follows.map(follow => follow.followed._id) : [];
      const updatedUsers = data.follows ? data.follows.map(user => ({
        ...user,
        following: followingIds.includes(user._id)
      })) : [];
      setUsers(prevUsers => [...prevUsers, ...updatedUsers]); 
      if (users.length >= (data.total - (data.follows ? data.follows.length : 0))) {
        setHasMoreUsers(false);
      }
      
    } else {
      setHasMoreUsers(false);
    }
    setLoading(false);    
  };

  

  const followUser = async (userId) => {
    try {
      const request = await fetch(Global.url + "follow/save", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({ followed: userId })
      });

      const data = await request.json();

      if (data.status === "success") {
        setUsers(users.map(user => user._id === userId ? { ...user, following: true } : user));
        
      } else {
        console.error("Failed to follow user:", data.message);
      }
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const request = await fetch(Global.url + "follow/unfollow/" + userId, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });

      const data = await request.json();

      if (data.status === "success") {
        setUsers(users.map(user => user._id === userId ? { ...user, following: false } : user));
        
      } else {
        console.error("Failed to unfollow user:", data.message);
      }
    } catch (error) {
      console.error("Error unfollowing user:", error);
    }
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
        <h1 className="content__title">Usuarios que Sigue "Nombre Usuario" </h1>
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
