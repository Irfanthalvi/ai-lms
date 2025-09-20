"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="w-full bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Why leading enterprises choose <span className="text-primary">AiELM</span>
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-background/80">
          Reimagine corporate training—not just completed, but optimized. AiELM isn’t just a learning
          management system; it’s your operational efficiency engine.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1 */}
          <Card className="bg-accent text-foreground shadow-md rounded-xl overflow-hidden h-[320px] flex flex-col">
            <Image
              src="/verified-learning.jpg"
              alt="Verified Learning"
              width={400}
              height={250}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-background mb-2">Verified Learning</h3>
              <p className="text-sm line-clamp-2 text-background">
                Biometrics and identity checks ensure training credibility.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-accent text-foreground shadow-md rounded-xl overflow-hidden h-[320px] flex flex-col">
            <Image
              src="/ai-content.jpg"
              alt="AI-Driven Content"
              width={400}
              height={250}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2 text-background">AI-Driven Content</h3>
              <p className="text-sm line-clamp-2 text-background">
                Adaptive, personalized learning paths are customized for every role.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-accent text-foreground shadow-md rounded-xl overflow-hidden h-[320px] flex flex-col">
            <Image
              src="/real-time.jpg"
              alt="Real-Time Insights"
              width={400}
              height={250}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2 text-background">Real-Time Insights</h3>
              <p className="text-sm line-clamp-2 text-background">
                Accelerate insights across workforce impact, not just completion.
              </p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="bg-accent text-foreground shadow-md rounded-xl overflow-hidden h-[320px] flex flex-col">
            <Image
              src="/compliance.jpg"
              alt="Compliance Made Easy"
              width={400}
              height={250}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2 text-background">Compliance Made Easy</h3>
              <p className="text-sm line-clamp-2 text-background">
                Automated regulatory updates — always audit-ready.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Extra Section (cards ke baad) */}
 <div className="mt-20 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
  {/* Left side → Heading only */}
  <div className="flex flex-col text-left w-fit">
    <h3 className="text-2xl md:text-3xl font-bold">
      Scale your workforce learning with intelligence
    </h3>
  </div>

  {/* Right side → Paragraph + Button */}
  <div className="flex flex-col text-left w-fit">
    <p className="text-base text-background/70 max-w-lg mb-4">
      AiELM empowers enterprises to move beyond just training. 
      It transforms skills into measurable outcomes that drive performance.
    </p>
    <button className="bg-primary-foreground text-secondary px-6 py-2 rounded-lg font-medium hover:bg-primary/90 w-fit">
      Explore More
    </button>
  </div>
</div>

      </div>
    </section>
  );
};

export default Section1;
