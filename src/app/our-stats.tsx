"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";
import Image from "next/image";
import Pic1 from "../../public/block.png";
import { Parallax } from "react-scroll-parallax";

const STATS = [
  {
    count: "1,500+",
    title: "Participants",
  },
  {
    count: "50",
    title: "Speakers",
  },
  {
    count: "20+",
    title: "Workshops",
  },
  {
    count: "3",
    title: "Days",
  },
];

export function OurStats() {
  return (
    <section className="bg-white relative shadow-xl">
      <Image
        src={Pic1}
        alt="banner-img-insta"
        className="absolute md:w-[150px] w-[100px] top-[10rem] left-4 md:mx-10 animate-[pulse_3s_ease-in-out_infinite] md:opacity-100 opacity-30 -z-[0]  transform -rotate-12 md:top-[25rem]"
      />
      <div className="container  mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
        <div>
          {/* @ts-expect-error typing issue in material-tailwind */}

          <Typography variant="h6" color="orange" className="mb-6 font-medium">
            Our Stats
          </Typography>
          {/* @ts-expect-error typing issue in material-tailwind */}

          <Typography
            className="text-5xl font-bold leading-tight lg:w-3/4"
            color="blue-gray"
          >
            Conference Highlights
          </Typography>
          {/* @ts-expect-error typing issue in material-tailwind */}

          <Typography
            variant="lead"
            className="mt-3 w-full !text-gray-500 lg:w-9/12"
          >
            This three-day extravaganza brings together the brightest minds,
            leading innovators, and top companies in the field of Artificial
            Intelligence.
          </Typography>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 gap-x-28">
            {STATS.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStats;
