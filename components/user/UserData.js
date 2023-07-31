import Image from "next/image";
import React, { useState } from "react";
import styles from "./Userdata.module.css";
import { Avatar } from "@/constant/Avatars/Avatar";
import Button from "../Button";
import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";

const UserData = ({ profile, firstName, userName, bio }) => {
  const [followFlag, setFollowFlag] = useState(false);

  const index = Math.floor(Math.random() * 5);

  const handleFollow = () => {
    setFollowFlag(!followFlag);
  };

  return (
    <div>
      <div className={styles.userInfo}>
        <div className={styles.userInfo_left}>
          <Image
            className={styles.userinfo_image}
            src={profile}
            height={128}
            width={128}
            alt="Image is Loading"
          />
        </div>
        <div className={styles.userInfo_right}>
          <div>
            <div className={styles.social_names}>
              <h1>{firstName}</h1>
              <IoMdMail />
              <LuPhoneCall />
              <BsInstagram />
            </div>

            <p>"{bio}"</p>
            <h5> ~ {userName}</h5>
          </div>
          <div>
            {followFlag && (
              <>
                <button onClick={handleFollow} className={styles.user_button}>
                  Following
                </button>
              </>
            )}
            {!followFlag && (
              <>
                <button onClick={handleFollow} className={styles.user_button}>
                  Follow
                </button>
              </>
            )}

            <button className={styles.user_button}>Donate</button>
          </div>
        </div>
      </div>
      <div className="userPhotos"></div>
    </div>
  );
};

export default UserData;
