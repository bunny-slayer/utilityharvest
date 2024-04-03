"use client";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Content from "../components/Content";
import Header from "../components/Header";
import Faqs from "../components/Faq";
import Video from "../components/Video";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Video />
      {/* Center align the video with Tailwind CSS and add padding */}
      <div className="flex justify-center px-4 pb-6 sm:pb-10">
        <iframe 
          className="align-center"
          width="840" 
          height="472.5" 
          src="https://www.youtube.com/embed/yeBDepGE4V0?si=p-SxhBMVy-m0IHV3" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
      </div>
      <Content />
      <Faqs />
      <CTA />
      <Footer />
    </div>
  );
}
