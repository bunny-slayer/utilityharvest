"use client"
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Content from "../components/Content";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Content />
      <CTA />
      <Footer />
    </div>
  );
}
