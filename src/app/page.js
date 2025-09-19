import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="bg-primary-foreground min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Tagline */}
      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm mb-4">
        World’s Best, AI-First Learning Platform
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-5xl font-bold text-background max-w-5xl leading-tight mb-6">
        Optimizing Workforce Efficiency <br /> with Intelligent Learning
      </h1>

      {/* Video Section in Card */}
      <Card className="w-full max-w-4xl rounded-2xl shadow-xl">
        <CardContent className="p-0">
          <video
            className="w-full h-auto rounded-2xl"
            controls
            poster="/thumbnail.jpg"
          >
            <source src="/team-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>

      {/* Example Button */}
      <Button className="mt-6">Get Started</Button>
    </div>
  );
};

export default Page;
