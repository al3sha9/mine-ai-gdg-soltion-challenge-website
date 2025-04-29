"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full text-white bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source src="/mine.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 h-full w-full " />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography 
            variant="h3" 
            color="white" 
            className="mb-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            17 May | NIC ISLAMABAD
          </Typography>
          <Typography 
            variant="h1" 
            color="white" 
            className="lg:max-w-3xl font-minecraft"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Mine-AI X Google Google Solution Challenge 2025
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Join us for the most anticipated event of the year
          </Typography>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
