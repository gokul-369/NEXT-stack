"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import { userInfo } from "@/interfaces/userInfo";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userData, setUserData] = useState<userInfo>();
  useEffect(() => {
    getUser();
  }, []);
  const router = useRouter();
  const getUser = async () => {
    const res = await axios.get("/api/users/userprofile");
    if (res.data.status === 401) {
      router.push("/public/login");
    } else if (res.data.status === 200) {
      setUserData(res.data.data);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>profileu</div>
      <span>{userData?.userName}</span>
    </div>
  );
}
