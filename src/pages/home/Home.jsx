import React, { useEffect, useState } from "react";
import "./home.css";
import { Posts }from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar"
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";
import CarouselComp from "../../components/carousel/Carousel";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("api/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search]);

  return (
    <>
      <CarouselComp/>
      <div className="home">
        <Posts posts={posts}/>
        {/* <Sidebar/> */}
      </div>
    </>
  );
};
