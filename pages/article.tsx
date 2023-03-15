import Head from "next/head";

import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Article({content}: any) {
  console.log(content)
  return (
    <>
      <Head>
        <title>Seun | DevCareer | Blog</title>
        <meta name="description" content="blog devcareer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col overflow-auto scrollbar-hide mt-4">
        <div className="flex flex-col flex-grow scrollbar-hide">
          <Content cards={content} />
          <Footer />
        </div>
      </div>
    </>
  );
}
