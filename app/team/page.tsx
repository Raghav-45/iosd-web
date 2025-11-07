'use client'

import React from 'react'
import TargetCursor from '@/components/TargetCursor'
import DomeGallery from '@/components/DomeGallery'
import MatrixText from '@/components/kokonutui/matrix-text'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

const Team = () => {
  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Custom cursor for the entire page */}
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />
      
      {/* Header Section */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <MatrixText text="Meet Our Team" />
            <div className="cursor-target inline-block">
              <AnimatedGradientText className="text-xl md:text-2xl font-semibold">
                The brilliant minds behind IOSD
              </AnimatedGradientText>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full h-screen">
        <DomeGallery 
          fit={0.5}
          fitBasis="auto"
          minRadius={600}
          maxRadius={Infinity}
          padFactor={0.25}
          overlayBlurColor="#060010"
          maxVerticalRotationDeg={5}
          dragSensitivity={20}
          enlargeTransitionMs={300}
          segments={35}
          dragDampening={2}
          openedImageWidth="500px"
          openedImageHeight="500px"
          imageBorderRadius="30px"
          openedImageBorderRadius="30px"
          grayscale={true}
          autoRotate={true}
          autoRotateSpeed={9}
        />
      </div>

      {/* Interactive Info Cards - Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-40 pointer-events-none">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Core Team', value: '25+', emoji: '👥' },
              { label: 'Contributors', value: '100+', emoji: '🚀' },
              { label: 'Projects', value: '50+', emoji: '💻' },
              { label: 'Events', value: '200+', emoji: '🎯' },
            ].map((stat, index) => (
              <div
                key={index}
                className="cursor-target pointer-events-auto bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 z-40 flex flex-col gap-4">
        <button 
          className="cursor-target group bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-full hover:scale-110 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          aria-label="View all members"
        >
          <svg className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        <button 
          className="cursor-target group bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-full hover:scale-110 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          aria-label="Filter by role"
        >
          <svg className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
        <button 
          className="cursor-target group bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-full hover:scale-110 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          aria-label="Grid view"
        >
          <svg className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </button>
      </div>

      {/* Instructions hint - fades out after 5 seconds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-pulse">
        <div className="cursor-target bg-card/90 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            🖱️ Drag to rotate • Click to view details
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team