"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const [userData, setUserData] = useState({
    userName: "",
  });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get("/api/auth/userprofile");
    setUserData(res.data.data);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>profileu</div>
      <span>{userData?.userName}</span>
    </div>
  );
}
