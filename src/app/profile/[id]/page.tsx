"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile({ params }: any) {
  const [user, setUser] = useState({ userName: "" });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get("/api/users/userprofile", {
      params: { id: params.id },
    });
    setUser(res.data.data);
  };
  return <div>profile of {user?.userName}</div>;
}
