import { Hero } from "@/components/home/Hero";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { TaglineBanner } from "@/components/home/TaglineBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What We Build */}
      <WhatWeBuild />

      {/* 3. Company Tagline */}
      <TaglineBanner />

      {/* 4. Why Families Choose Us */}
      <WhyChooseUs />

      {/* 5. How It Works */}
      <Process />

      {/* 6. Featured Projects */}
      <FeaturedProjects />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Frequently Asked Questions */}
      <FAQ />

      {/* 9. Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
