// urls.js

const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
const urls = {
  PHOTO_API:
    `https://api.unsplash.com/photos/random/?count=10&client_id=${apiKey}`,
  USER_API: "https://api.unsplash.com/photos",
  TEST_API: "https://jsonplaceholder.typicode.com/posts/",
  // Add more URLs as needed
  
};

export default urls;
