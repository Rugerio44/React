import { Global } from "./Global";

export const getProfile = async (auth, setUserProfile) => {
  const request = await fetch(Global.url + "user/profile/" + auth._id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  const data = await request.json();
  if (data.status === "success") {
    setUserProfile(data.user);
  }
};
