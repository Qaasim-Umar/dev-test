import Image from "next/image";
import React from "react";
import { likes, tags,summaryCard } from "../../utils/content";
import BookIcon from "../vectors/BookIcon";
import BookMarkIcon from "../vectors/BookmarkIcon";
import CommentIcon from "../vectors/CommentIcon";
import PlusIcon from "../vectors/PlusIcon";
import ShareIcon from "../vectors/ShareIcon";
import TwitterIcon from "../vectors/TwitterIcon";

import { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/home.md';

type ContentType = {
  posts: {
    // id: string;
    articleTitle: string;
    author: string;
    image: string;
   articleDescription: string;
    content: string;
  };
};


const Content = (props: ContentType) => {
  let {posts} = attributes;
  console.log(props);
  if (props.posts) {
    const { articleTitle, author, image,content, articleDescription} = props.posts;
    
    return (
      <div className="flex-1">
        <div className="space-y-8 lg:max-w-[75%] 2xl:max-w-[60%] mx-auto w-full">
          <span className="relative w-full h-[30vh] lg:h-[75vh] 2xl:h-[65vh] block">
            <Image src={image} alt="content-img" fill />
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold lg:max-w-[70%] text-center mx-auto lg:leading-[3.5rem]">
            {articleTitle}
          </h1>
          <div className="flex flex-col items-center justify-center lg:flex-row gap-x-3 gap-y-4 lg:gap-y-0">
            <div className="flex items-center gap-x-3">
              <span className="relative w-12 h-12">
                <Image
                  src="/img/profile-logo.webp"
                  alt="profile-logo"
                  fill
                  className="rounded-full"
                />
              </span>
              <span className="text-lg font-medium">{author}</span>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="h-1 w-1 bg-[#8b8b8b] rounded-full hidden lg:block"></span>
              <span className="text-lg text-[#374151]">December 06, 2022</span>
              <span className="h-1 w-1 bg-[#8b8b8b] rounded-full"></span>
              <div className="flex items-center gap-x-2">
                <BookIcon />
                <span className="text-lg text-[#374151]">14 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 lg:max-w-[75%] 2xl:max-w-[55%] mx-auto w-full mt-8 lg:grid lg:grid-cols-[0.8fr_0.2fr]">
          <article className="flex flex-col flex-1 py-8 overflow-auto gap-y-10 scrollbar-hide lg:h-screen">
            {content}
          </article>
          <div className="flex flex-col-reverse px-4 lg:flex-col gap-y-4">
            <div className="flex flex-wrap lg:grid lg:grid-cols-2 justify-evenly gap-y-4">
              {likes.map((like, i) => (
                <div
                  key={like.emoji + like.count}
                  className="flex items-center hover:bg-[#e8e8e8] cursor-pointer px-4 py-1 gap-x-2 rounded-full"
                >
                  {/* <span className="text-2xl font-medium">{like.emoji}</span> */}
                  {/* <span className="font-semibold">{like.count}</span> */}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center lg:flex-col lg:justify-start gap-y-2">
              <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
                <CommentIcon />
              </span>
              <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
                <BookMarkIcon />
              </span>
              <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
                <TwitterIcon color="#374151" />
              </span>
              <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
                <ShareIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 2xl:mx-auto 2xl:max-w-[80%] 2xl:px-8 w-full px-4 py-8">
          <h4 className="font-semibold text-[#6b7280] uppercase text-center">
            More articles
          </h4>
          <div className="flex flex-col mb-8 lg:flex-row gap-y-6 lg:gap-y-0 gap-x-8">
            {posts.slice(0,3).map((post : any, i : any) => (
              <div
                className="flex flex-col px-4 py-3 border rounded-md gap-y-2"
                key={post.articleTitle + i}
              >
                <div className="flex items-center gap-x-2">
                  <span className="relative w-8 h-8 rounded-full">
                    <Image
                      src="/img/profile-logo.webp"
                      alt="user-img"
                      fill
                      className="object-cover rounded-full"
                    />
                  </span>
                  <span className="font-bold">{post.author}</span>
                </div>
                <span className="relative h-[15rem] w-full rounded-">
                  <Image
                    src={post.image}
                    alt="article-img"
                    fill
                    className="object-cover rounded-sm"
                  />
                </span>
                <h2 className="text-2xl font-bold">{post.articleTitle}</h2>
                <p className="text-[#374151]">{post.articleDescription}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-full max-w-2xl p-4 mx-auto my-8 border rounded-md gap-y-2 lg:gap-y-0 lg:flex-row lg:justify-between">
            <span className="text-xl font-bold">Comments</span>
            <span className="font-medium text-[#2962ff] flex border border-[#2962ff] py-2 px-1 pr-2 rounded-md">
              <PlusIcon color="#2962ff" />
              Write a comment
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" md:max-w-[77%]">
        <div className="md:w-[70%] mx-auto ">
          <p className="text-[20px] w-[320px] mb-8 rounded-md p-2 bg-[#ffc116] mx-auto flex justify-center">
            {" "}
            Loading...
          </p>
        </div>
      </div>
    );
  }
};

export default Content;
