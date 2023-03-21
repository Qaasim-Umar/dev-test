import Image from "next/image";
import Link from "next/link";
// import { posts } from "../utils/content";
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
// import fs from "fs";
// import matter from "gray-matter";

const postComponent = () => {
  let {posts} = attributes;
  return (
<>
    <Head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Head>

    <div className="py-8">
    &apos;
      <aside className="hidden md:block w-[20%] h-[78rem] float-right mr-10  ml-12 py-12 pl-4 md:border-opacity-1 md:border-l-[1px] md:border-l-neutral-300">
        <div className="text-lg font-semibold text-gray">
          <p>
            {" "}
            We&apos;re a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </div>

        <div className=" bg-yellow relative  p-4 space-y-3 font-semibold rounded-md h-[200px] my-8">
          <p>Write on Devcareer</p>
          <p> Express yourself</p>
          <p>Grow your readership</p>

          <span className=" absolute bottom-6">
            <a
              href=""
              className="  hover:bg-grey bg-black rounded-xl text-white px-6 py-2 my-4"
            >
              {" "}
              Cumin...{" "}
            </a>
          </span>
        </div>
      </aside>
      <div className="justify-center max-w-full flex-col gap-6 mx-auto md:flex-row md:w-[80%] md:max-w-5xl ">
        {posts.map((post : any , i : any) => (
          <div
            className="relative z-10 flex flex-col gap-1 p-5 px-6 md:flex-row-reverse md:p-0  md:py-6   md:border-b-[1px] md:border-b-neutral-300"
            key={i}
          >
            <Image
              src={post.image}
              alt="logo"
              width="270"
              height="300"
              className="rounded-lg md:w-[170px] w-[170px] z-10"
            />

            <div className="max-w-2xl md:justify-center flex flex-col">
              <h1 className="my-1 text-xl font-bold text-gray-700">
                {posts.articleTitle}
              </h1>
              <p className="mb-2 text-gray-700">{post.articleDescription}</p>

              <small className="mb-2 text-gray-700"> Author : {post.author}</small>
              <small className="mb-2 text-gray-700"> Author : {post.date}</small>
              <a href={`/articles/${post.id}`}
                className="text-indigo-500 transition border-b-2 w-20 border-b-gray-500"
              >
                Read more
              </a>
            </div>
            <hr className="mt-9" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


export default postComponent;


