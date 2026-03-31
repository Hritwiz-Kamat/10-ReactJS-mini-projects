import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  /*
  Below is a way to load something using a fetch request. However, it loads the data when we hit the URL
  */
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Hritwiz-Kamat")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching GitHub data:", err);
  //       });
  //   }, []);

  /*
    Below method send a fetch request when the mouse hovers over 'Github'
    */
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-orange-500 text-white p-4 text-3xl">
      Github Followers: {data["followers"]}
      <img src={data["avatar_url"]} width="300" alt="Github Profile Pic" />
    </div>
  );
}

export default Github;

export const githubIndoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Hritwiz-Kamat");
  return response.json();
};
