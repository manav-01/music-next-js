"use client";
import React from "react";
import testimonals from "@/data/musicSchoolTestimonial.json";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function musicSchoolTestimonials() {
  return (
    <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidde">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl ">
          <InfiniteMovingCards
            items={testimonals}
            direction="right"
            speed="slow"
            className="text-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default musicSchoolTestimonials;
