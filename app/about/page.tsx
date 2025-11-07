"use client";

import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const AboutPage = () => {
  const stats = [
    { value: "500+", label: "Members" },
    { value: "100+", label: "Events" },
    { value: "50+", label: "Projects" },
    { value: "10+", label: "Years" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We foster a culture of creativity and innovation, encouraging members to think outside the box.",
      icon: "💡",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative learning to achieve greater heights.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from coding to community building.",
      icon: "🏆",
    },
    {
      title: "Learning",
      description: "Continuous learning and knowledge sharing are at the core of our community.",
      icon: "📚",
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        staticity={50}
        color="#ffffff"
      />

      <div className="relative z-10 container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-5xl md:text-7xl font-bold"
          >
            About IOSD MAIT
          </TextAnimate>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The International Organisation of Software Developers (IOSD) at MAIT is a vibrant community 
              of tech enthusiasts, developers, and innovators. We are dedicated to fostering a culture of 
              learning, collaboration, and innovation in the field of software development.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <BorderBeam size={250} duration={12} delay={index * 2} />
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Mission Section */}
        <section className="space-y-8">
          <div className="text-center">
            <AnimatedGradientText className="text-4xl md:text-5xl font-bold">
              Our Mission
            </AnimatedGradientText>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl bg-card border backdrop-blur-sm">
              <BorderBeam size={300} duration={15} />
              <p className="text-lg text-center leading-relaxed">
                Our mission is to empower students with the skills, knowledge, and opportunities 
                they need to excel in the ever-evolving world of technology. We aim to bridge the 
                gap between academic learning and industry requirements by organizing workshops, 
                hackathons, and collaborative projects that foster innovation and practical learning.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-12">
          <div className="text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-4xl md:text-5xl font-bold"
            >
              Our Core Values
            </TextAnimate>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="text-5xl">{value.icon}</div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="space-y-8">
          <div className="text-center">
            <AnimatedGradientText className="text-4xl md:text-5xl font-bold">
              What We Do
            </AnimatedGradientText>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Workshops & Seminars", emoji: "🎓" },
              { title: "Hackathons", emoji: "💻" },
              { title: "Open Source Contributions", emoji: "🌐" },
              { title: "Tech Talks", emoji: "🎤" },
              { title: "Project Collaborations", emoji: "🚀" },
              { title: "Mentorship Programs", emoji: "👨‍🏫" },
            ].map((activity, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-card border backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl">{activity.emoji}</div>
                  <h3 className="text-lg font-semibold">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;