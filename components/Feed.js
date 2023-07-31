// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetch_news_feed } from "@/redux/slices/feedSlice";

// const Feed = () => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   dispatch(fetch_news_feed());

//   if (state.feed.isLoading) {
//     return <h3>Loading...</h3>;
//   }
//   console.log("state", state);

//   return (
//     <div>
//       {state.feed.data &&
//         state.feed.data.map((item, key) => {
//           return <p key={key}>{item.title}</p>;
//         })}
//     </div>
//   );
// };

// export default Feed;
