"use client";

import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <WhatWeBuild />
      <WhoWeWorkWith />
    </>
  );
}
