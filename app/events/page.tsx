"use client";

import React, { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import MatrixText from "@/components/kokonutui/matrix-text";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "workshop" | "hackathon" | "seminar" | "competition";
  status: "upcoming" | "ongoing" | "completed";
  image?: string;
  registrationLink?: string;
}

const EventsPage = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "ongoing" | "completed">("all");

  const events: Event[] = [
    {
      id: "1",
      title: "Web Development Bootcamp",
      date: "2025-11-15",
      time: "10:00 AM - 4:00 PM",
      location: "Seminar Hall, MAIT",
      description: "Intensive hands-on workshop covering modern web development with React, Next.js, and TypeScript.",
      type: "workshop",
      status: "upcoming",
      registrationLink: "#",
    },
    {
      id: "2",
      title: "HackIOSD 2025",
      date: "2025-11-20",
      time: "9:00 AM - 9:00 PM",
      location: "Main Campus",
      description: "24-hour hackathon bringing together innovative minds to build cutting-edge solutions.",
      type: "hackathon",
      status: "upcoming",
    },
    {
      id: "3",
      title: "AI/ML Workshop Series",
      date: "2025-11-08",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab",
      description: "Learn the fundamentals of Machine Learning and build your first AI model.",
      type: "workshop",
      status: "ongoing",
    },
    {
      id: "4",
      title: "Tech Talk: Future of Cloud Computing",
      date: "2025-10-28",
      time: "3:00 PM - 5:00 PM",
      location: "Auditorium",
      description: "Industry experts share insights on cloud technologies and career opportunities.",
      type: "seminar",
      status: "completed",
    },
    {
      id: "5",
      title: "Code Sprint Competition",
      date: "2025-10-15",
      time: "11:00 AM - 3:00 PM",
      location: "Virtual",
      description: "Competitive coding event testing algorithmic thinking and problem-solving skills.",
      type: "competition",
      status: "completed",
    },
    {
      id: "6",
      title: "Open Source Contribution Workshop",
      date: "2025-11-25",
      time: "1:00 PM - 4:00 PM",
      location: "Online",
      description: "Learn how to contribute to open source projects and build your developer portfolio.",
      type: "workshop",
      status: "upcoming",
    },
  ];

  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.status === filter);

  const getTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "workshop": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "hackathon": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "seminar": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "competition": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
    }
  };

  const getStatusBadge = (status: Event["status"]) => {
    switch (status) {
      case "upcoming": return "bg-yellow-500/20 text-yellow-500";
      case "ongoing": return "bg-green-500/20 text-green-500 animate-pulse";
      case "completed": return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Header */}
        <section className="text-center space-y-6">
          <MatrixText text="Events" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting workshops, hackathons, and tech talks designed to enhance your skills and connect with like-minded developers.
          </p>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {["all", "upcoming", "ongoing", "completed"].map((status) => (
            <Button
              key={status}
              onClick={() => setFilter(status as typeof filter)}
              variant={filter === status ? "default" : "outline"}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-card border backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <BorderBeam size={250} duration={12} delay={index * 1.5} />
              <Meteors number={10} />
              
              <div className="p-6 space-y-4">
                {/* Status and Type Badges */}
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(event.status)}`}>
                    {event.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Date, Time, Location */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏰</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Registration Button */}
                {event.status === "upcoming" && event.registrationLink && (
                  <Button className="w-full" variant="outline">
                    Register Now
                  </Button>
                )}
                {event.status === "ongoing" && (
                  <Button className="w-full" variant="default">
                    Join Now
                  </Button>
                )}
                {event.status === "completed" && (
                  <Button className="w-full" variant="ghost" disabled>
                    Event Concluded
                  </Button>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">
              No {filter !== "all" && filter} events found.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <section className="relative max-w-4xl mx-auto mt-20">
          <div className="relative p-12 rounded-2xl bg-card border backdrop-blur-sm text-center space-y-6">
            <BorderBeam size={300} duration={15} />
            <AnimatedGradientText className="text-3xl md:text-4xl font-bold">
              Want to organize an event?
            </AnimatedGradientText>
            <p className="text-muted-foreground text-lg">
              We&apos;re always looking for passionate individuals to help organize and conduct events. 
              Get in touch with us to discuss your ideas!
            </p>
            <Button size="lg" className="mt-4">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;