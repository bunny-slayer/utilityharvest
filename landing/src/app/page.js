"use client"
import Image from "next/image";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Content from "../components/Content";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Content />
      <CTA />
      <Footer />
    </div>
  );
}
