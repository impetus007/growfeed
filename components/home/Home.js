import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { fetch_news_feed } from "@/redux/slices/feedSlice";
import Feed from "../Feed";
import urls from "@/constant/urls/url";
import NewsFeed from "../newsFeed/NewsFeed";
import Loader from "../Loader/Loader";

const Home = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [hasData, setHasData] = useState();
  const [loader, setloader] = useState(false);
  //   let hasData = useSelector((state) => state.feed.data);

  // console.log("it is has data", hasData);
  // console.log("state", state);
  // Handle button click request
  const handleButtonRequest = () => {
    setFlag(true);
    dispatch(fetch_news_feed());
  };

  const handleScrollCount = async () => {
    // console.log("Scroll Height", document.documentElement.scrollHeight);
    // console.log("innerHeight", window.innerHeight);
    // console.log("scrollTop", document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // dispatch(fetch_news_feed());

        setloader(true);
        const url = urls.PHOTO_API;
        console.log("i m clicked");
        const response = await fetch(url);
        const newData = await response.json();
        setHasData((prev) => [...prev, ...newData]);
        setloader(false);

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
  }, []);

  useEffect(() => {
    setHasData(state.feed.data);
  }, [state.feed.data]);

  if (state.feed.isLoading) {
    return (
      <h3>
        <Loader />
      </h3>
    );
  }

  return (
    <div className="main_image">
      {!flag && (
        <>
          <Image
            src="./images/feedImage.svg"
            alt="Image Loading..."
            height={300}
            width={300}
          ></Image>
          <h1>Lot of work today.</h1>
          <p>Now time to watch some feed hehehe.</p>
          <Button onClick={handleButtonRequest} value="Groww Feed" />
        </>
      )}
      {hasData?.map((item, key) => {
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
      {loader && <Loader />}
    </div>
  );
};

export default Home;
