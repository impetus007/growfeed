import Button from "@/components/Button";
import Navbar from "@/components/navbar/Navbar";
import GridForm from "@/components/newsFeed/GridForm";
import NewsFeed from "@/components/newsFeed/NewsFeed";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const getServerSideProps = async () => {
  const url =
    "https://api.unsplash.com/photos/random/?count=10&client_id=--TZamvuQbEjSVtUV_n4zFN6DH8-jdC-xdVlZmmZgxY";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

// export const getServerSideProps = async () => {
//   const url = `${process.env.JSON_API}`;
//    const response = await fetch(url);
//    const data = await response.json();
//   //   setData(hasData);
//   //   setLoading(false);

//   return {
//     props: {
//       data,
//     },
//   };
// };

const index = ({ data }) => {
  //   console.log(data);
  const [hasData, setData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [view, setView] = useState("Grid");

  const handleView = () => {
    setView((prevView) => (prevView === "Grid" ? "List" : "Grid"));
  };

  const handleScrollCount = async () => {
    console.log("Scroll Height", document.documentElement.scrollHeight);
    console.log("innerHeight", window.innerHeight);
    console.log("scrollTop", document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        const url =
          "https://api.unsplash.com/photos/random/?count=10&client_id=--TZamvuQbEjSVtUV_n4zFN6DH8-jdC-xdVlZmmZgxY";
        const response = await fetch(url);
        const newData = await response.json();
        setData((prev) => [...prev, ...newData]);
        setScrollCount((prev) => prev + 1);
        // getImage();
        setLoading(false);
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

  return (
    <div>
      <Navbar />
      <div>
        <Button onClick={handleView} value={view} />
      </div>
      {loading && <div>Loading...</div>}
      <Wrapper>
        {hasData.map((item, key) => {
          return view === "List" ? (
            <GridForm />
          ) : (
            <NewsFeed
              key={item.id}
              userid={item.user.username}
              userName={item.user.name}
              imageSrc={item.urls.raw}
              profile={item.user.profile_image.medium}
            />
          );
        })}
      </Wrapper>
    </div>
  );
};

export default index;

{
  /* <div key={item.key}>
            <Image src={`${item.urls.raw}`} height={600} width={450}></Image>
          </div> */
}
