import Button from "@/components/Button";
import ErrorPage from "@/components/error/ErrorPage";
import Navbar from "@/components/navbar/Navbar";
import UserData from "@/components/user/UserData";
import UserGrid from "@/components/user/UserGrid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSwr from "swr";

const UserInfoPage = () => {
  const [userInfo, setUserInfo] = useState();

  const router = useRouter();

  // console.log(userInfo);


  useEffect(() => {
    const userid = router.query.userid;
    async function getdata(userid) {
      const url = `https://api.unsplash.com/users/${userid}?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
      try {
        const data = await fetch(url);
        console.log("url is", url);
        setUserInfo(await data.json());
      } catch (err) {
        console.log(err);
        return <ErrorPage />;
      }
    }
    getdata(userid);
  }, [router.query.userid]);
  return (
    <>
      <Navbar />
      <UserData
        profile={userInfo?.profile_image.large}
        firstName={userInfo?.first_name}
        userName={userInfo?.username}
        bio={userInfo?.bio}
      />
      <div>
        <UserGrid photos={userInfo?.photos} userName={userInfo?.username} />
      </div>
    </>
  );
};

export default UserInfoPage;
