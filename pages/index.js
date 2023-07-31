import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_news_feed } from "@/redux/slices/feedSlice";
import Home from "@/components/home/Home";

const index = ({ data }) => {
  //  const [datafetching, setDataFetching] = useState(false);
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log("state", state);

  // const handleButtonRequest = () => {
  //   setDataFetching(true);
  //   dispatch(fetch_news_feed());
  // };



  // console.log(data);
  console.log(data);
  return (
    <div>
      <Navbar />
      <Home />
      {/* 
      {!datafetching && (
        <div className="main_image">
          <Image
            src="./images/feedImage.svg"
            alt="Image Loading..."
            height={500}
            width={500}
          ></Image>
          <h1>Lot of work today.</h1>
          <p>Now time to watch some feed hehehe.</p>
          <button onClick={handleButtonRequest}>fetch news feed</button>
        </div>
      )} */}
      {/* {state.feed.data &&
        state.feed.data.map((item, key) => {
          return <p key={key}>{item.title}</p>;
        })} */}
    </div>
  );
};

export default index;
