import Image from "next/image";
import Link from "next/link";
// import { posts } from "../utils/content";
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import fs from "fs";
import matter from "gray-matter";

const postComponent = () => {
  let {posts} = attributes;

  const current = new Date();
   const date =`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
<>
    <Head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Head>

    <div className="py-8">
    &apos;
      <aside className="hidden md:block w-[30%] float-right mr-10 py-12 pl-8 md:border-opacity-1 md:border-l-[1px] h-[168rem] md:border-l-neutral-400">
        <div className="text-lg font-semibold text-gray">
          <p>
            {" "}
            We&apos;re a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </div>

        <div className=" bg-[#05b993] relative w-[80%]  p-4 font-semibold rounded-md h-auto my-8">
         <div className="space-y-5  mb-5">
          <p>Write on Devcareer</p>
          <p> Express yourself</p>
          <p>Grow your readership</p>
          </div>

          <button className="  mb-5">
            <a
              href=""
              className="  hover:bg-grey bg-black rounded-md text-white px-6 py-2"
            >
              {" "}
              Lorem{" "}
            </a>
          </button>
        </div>
      </aside>
      <div className="justify-center max-w-full flex-col gap-6 mx-auto md:flex-row  md:w-[80%] md:max-w-5xl ">
        {posts.map((post : any , i : any) => (
          <div
            className="relative z-10 flex flex-col gap-1 p-5 px-6  md:p-0  md:py-6   border-b-[1px] border-b-neutral-400"
            key={i}
          >
            <img
              src={post.image}
              alt="logo"
              className="rounded-lg object-cover  lg:w-[670px]  lg:h-[320px]  h-46 w-[90%] z-10"
            />

            <div className="max-w-2xl md:justify-center flex flex-col">
              <h1 className="my-1 font-bold text-xl text-gray-700">
                {post.articleTitle}
              </h1>
              <p className="mb-2 max-h-[95px] overflow-hidden text-gray-700">{post.Content}</p>
<div className="flex justify-between pr-7 text-black">
              <small className="mb-2 text-gray-700"> Author : {post.author}</small>
              <small className="mb-2 text-gray-700"> Post Date : {date}</small>
              </div>
              <a href={`/articles/${post.articleTitle}`}
                className="text-indigo-500 transition border-b-2 w-20 border-b-gray-500"
              >
                Read more
              </a>
            </div>
            {/* <hr className="mt-9" /> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


export default postComponent;


