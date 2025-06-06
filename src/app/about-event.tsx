"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";
import Image from "next/image";
import Pic1 from "../../public/block.png";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      {/* @ts-expect-error typing issue in material-tailwind */}
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
      </Typography>
      {/* @ts-expect-error typing issue in material-tailwind */}

      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      {/* @ts-expect-error typing issue in material-tailwind */}
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to the Mine-AI 2025, where the future unfolds! Whether
        you&apos;re a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2 relative">
          <Image
            src={Pic1}
            alt="banner-img-insta"
            className="absolute md:w-[450px] 10 animate-[pulse_3s_ease-in-out_infinite] md:opacity-100 opacity-30 -z-[0]  transform -rotate-12 md:right-[25rem]"
          />
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
