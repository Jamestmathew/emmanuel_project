'use client'

import Footer from "@/components/footers/Footer";
import MainHeader from "@/components/headers/MainHeader";
import Image from "next/image";
import Head from 'next/head';
import Banner from "@/components/home/Banner";
import Partner from "@/components/home/Partner";
import Different from "@/components/home/Different";
import Help from "@/components/home/Help";
import Cause from "@/components/home/Cause";
import Action from "@/components/home/Action";
import Team from "@/components/home/Team";
import Community from "@/components/home/Community";
import Testimoney from "@/components/home/Testimoney";
import CauseTwo from "@/components/home/CauseTwo";
import DifferentTwo from "@/components/home/DifferentTwo";
import Blog from "@/components/home/Blog";
import { useEffect } from "react";
import $ from 'jquery';


export default function Home() {
  useEffect(() => {
    $(document).ready(() => {
      // Your jQuery initialization code
      // scripts.init(); // Example custom scripts
    });
    return () => {};
  }, []);
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.$) {
  //     // console.log('jQuery is ready!', window.$);
  //     // window.$('body').css('background', '#f0f0f0');
  //   } else {
  //     console.warn('jQuery is not available yet');
  //   }
  // }, []);
  return (
    <div className="page-wrapper">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainHeader />
      <Banner />
      {/* <Partner /> */}
      <Different />
      <Help />
      {/* <Cause /> */}
      <Action />
      {/* <Team /> */}
      {/* <Community /> */}
      {/* <Testimoney /> */}
      {/* <CauseTwo /> */}
      {/* <DifferentTwo /> */}
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}
