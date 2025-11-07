"use client";

import React, { useState } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import MatrixText from "@/components/kokonutui/matrix-text";

interface Alumnus {
  id: string;
  name: string;
  batch: string;
  currentRole: string;
  company: string;
  image?: string;
  linkedIn?: string;
  github?: string;
  twitter?: string;
  achievements: string[];
}

const AlumniPage = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>("all");

  const alumni: Alumnus[] = [
    {
      id: "1",
      name: "Rahul Sharma",
      batch: "2018-2022",
      currentRole: "Senior Software Engineer",
      company: "Google",
      achievements: [
        "Led development of critical microservices",
        "Contributed to open source projects",
        "Mentored 10+ junior developers",
      ],
      linkedIn: "#",
      github: "#",
    },
    {
      id: "2",
      name: "Priya Malhotra",
      batch: "2017-2021",
      currentRole: "Full Stack Developer",
      company: "Microsoft",
      achievements: [
        "Built scalable web applications",
        "Speaker at multiple tech conferences",
        "AWS Certified Solutions Architect",
      ],
      linkedIn: "#",
      github: "#",
    },
    {
      id: "3",
      name: "Arjun Singh",
      batch: "2019-2023",
      currentRole: "Machine Learning Engineer",
      company: "Amazon",
      achievements: [
        "Published research papers on AI",
        "Kaggle Competition Winner",
        "Developed ML models for production",
      ],
      linkedIn: "#",
      github: "#",
    },
    {
      id: "4",
      name: "Sneha Patel",
      batch: "2016-2020",
      currentRole: "Tech Lead",
      company: "Flipkart",
      achievements: [
        "Led team of 15 developers",
        "Optimized application performance by 40%",
        "Implemented CI/CD pipelines",
      ],
      linkedIn: "#",
      github: "#",
    },
    {
      id: "5",
      name: "Vikram Mehta",
      batch: "2018-2022",
      currentRole: "DevOps Engineer",
      company: "Netflix",
      achievements: [
        "Automated deployment processes",
        "Reduced infrastructure costs by 30%",
        "Kubernetes Expert",
      ],
      linkedIn: "#",
      github: "#",
    },
    {
      id: "6",
      name: "Ananya Gupta",
      batch: "2017-2021",
      currentRole: "Product Manager",
      company: "Adobe",
      achievements: [
        "Launched 3 successful products",
        "Led cross-functional teams",
        "User-centric design advocate",
      ],
      linkedIn: "#",
      github: "#",
    },
  ];

  const batches = ["all", ...Array.from(new Set(alumni.map(a => a.batch)))];

  const filteredAlumni = selectedBatch === "all" 
    ? alumni 
    : alumni.filter(a => a.batch === selectedBatch);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={30}
        color="#ffffff"
      />

      <div className="relative z-10 container mx-auto px-4 py-16 space-y-12">
        {/* Header */}
        <section className="text-center space-y-6">
          <MatrixText text="Our Alumni" />
          <TextAnimate
            animation="fadeIn"
            by="word"
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Celebrating the success stories of our talented alumni who are making waves in the tech industry
          </TextAnimate>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "200+", label: "Alumni" },
            { value: "50+", label: "Companies" },
            { value: "15+", label: "Countries" },
            { value: "100%", label: "Placed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card border backdrop-blur-sm text-center space-y-2"
            >
              <BorderBeam size={200} duration={10} delay={index * 2} />
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Batch Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {batches.map((batch) => (
            <Button
              key={batch}
              onClick={() => setSelectedBatch(batch)}
              variant={selectedBatch === batch ? "default" : "outline"}
              className="capitalize"
            >
              {batch === "all" ? "All Batches" : batch}
            </Button>
          ))}
        </div>

        {/* Alumni Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumnus, index) => (
            <div
              key={alumnus.id}
              className="group relative overflow-hidden rounded-2xl bg-card border backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <BorderBeam size={250} duration={12} delay={index * 1.5} />
              
              <div className="p-6 space-y-4">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-4xl font-bold text-white">
                  {alumnus.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Name and Batch */}
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {alumnus.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{alumnus.batch}</p>
                </div>

                {/* Current Role */}
                <div className="text-center space-y-1">
                  <p className="font-semibold">{alumnus.currentRole}</p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <span>🏢</span>
                    {alumnus.company}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Key Achievements:</p>
                  <ul className="space-y-1">
                    {alumnus.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4 border-t">
                  {alumnus.linkedIn && (
                    <a href={alumnus.linkedIn} className="hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {alumnus.github && (
                    <a href={alumnus.github} className="hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="relative max-w-4xl mx-auto mt-20">
          <div className="relative p-12 rounded-2xl bg-card border backdrop-blur-sm text-center space-y-6">
            <BorderBeam size={300} duration={15} />
            <AnimatedGradientText className="text-3xl md:text-4xl font-bold">
              Join Our Alumni Network
            </AnimatedGradientText>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay connected with fellow alumni, share your journey, and mentor the next generation of developers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                Update Your Profile
              </Button>
              <Button size="lg" variant="outline">
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlumniPage;