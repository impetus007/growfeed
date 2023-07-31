import urls from "@/constant/urls/url";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../Button";
import ErrorPage from "../error/ErrorPage";
import Loader from "../Loader/Loader";
import NewsFeed from "../newsFeed/NewsFeed";
import styles from "./Userdata.module.css";

const UserGrid = ({ userName }) => {
  const [userPhotos, setUserPhotos] = useState();
  const [page, setPage] = useState(1);
  const [view, setView] = useState("List");
  const [Load, setLoad] = useState("Load Images");
  //   console.log("this is photo side", photos);

  console.log(userName);

  const handleView = () => {
    if (view === "List") {
      setView("Grid");
    } else {
      setView("List");
    }
  };

  setInterval(() => {}, 5000);

  const handleLoad = () => {
    if (Load === "Load Images") {
      setLoad("Loading");
    } else {
      setLoad("Load Images");
    }
  };

  const handleScrollCount = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // dispatch(fetch_news_feed());
        console.log("me calling or not");
        setPage((prev) => prev + 1);
        console.log(page);

        const url = `https://api.unsplash.com/users/${userName}/photos?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&page=${page}`;
        console.log("i m clicked");
        try {
          const response = await fetch(url);
          const newData = await response.json();
          setUserPhotos((prev) => [...prev, ...newData]);
          console.log(userPhotos);
        } catch (err) {
          return <ErrorPage />;
        }

        // state.data = [...state.data, ...state.data];
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCount);
    return () => {
      window.removeEventListener("scroll", handleScrollCount);
    };
  }, [Load, view]);

  const getUserPhoto = async () => {
    const url = `https://api.unsplash.com/users/${userName}/photos/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
    const res = await fetch(url);
    console.log(res.status);
    const data = await res.json();
    console.log("this is usergrid data", data);
    setUserPhotos(data);
  };

  useEffect(() => {
    getUserPhoto();
  }, [view, Load]);

  // console.log("this is photos", userPhotos);

  return (
    <>
      <Button value={view} onClick={handleView} />
      <br></br>
      <div className={styles.userGrid}>
        {view === "Grid" &&
          userPhotos?.map((item, key) => {
            return (
              <div className={styles.userGrid_div} key={key}>
                <Image
                  src={item?.urls.raw}
                  height={600}
                  width={400}
                  alt="Image"
                />
                <p>
                  {item?.description ||
                    item?.alt_description ||
                    "Oops No Description"}
                </p>
              </div>
            );
          })}
      </div>
      <div>
        {view === "List" &&
          userPhotos?.map((item, key) => {
            return (
              <NewsFeed
                key={item.id}
                userid={item.user.username}
                userName={item.user.name}
                imageSrc={item.urls.raw}
                profile={item.user.profile_image.medium}
              />
            );
          })}
      </div>
      <Button value={Load} onClick={handleLoad} />
    </>
  );
};

export default UserGrid;



