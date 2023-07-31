import React, { useState } from "react";
import Image from "next/image";
import styles from "./NewsFeed.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineComment } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const NewsFeed = ({ imageSrc, likes, userName, profile, item, userid }) => {
  const [like, setLike] = useState(false);
  const router = useRouter();
  const handleRoute = () => {
    router.push(`/users/${userid}`);
  };

  // User liked or not
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={styles.newsFeed}>
      <div className={styles.feed_wrapper}>
        <Image
          src={imageSrc}
          alt="Loading Image"
          className={styles.newsFeed_image}
          height={600}
          width={460}
        />
        <div className={styles.newsFeed_footer}>
          <div onClick={handleRoute} className={styles.left}>
            <Image
              className={styles.profile_image}
              src={profile}
              height={60}
              width={60}
            />
            <div>{userName}</div>
          </div>
          <div className={styles.input_area}>
            <div>
              <AiOutlineComment className={styles.icon} />
            </div>
            <input type="text" placeholder="Leave a comment" />
            <div>
              <IoIosSend className={styles.icon} />
            </div>
          </div>

          <div onClick={handleLike}>
            {like && <FcLike className={styles.icon} />}
            {!like && <FcLikePlaceholder className={styles.icon} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
