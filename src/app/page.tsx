"use client";
// components
import { CustomNavbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Portfolio() {
  return (
    <ParallaxProvider>
      <CustomNavbar />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </ParallaxProvider>
  );
}
