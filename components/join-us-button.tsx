import React from 'react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/config/site';

type JoinUsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const JoinUsButton: React.FC<JoinUsButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "group relative isolate flex items-center justify-center gap-3 px-6 py-3",
        "font-mono text-sm uppercase tracking-widest text-white/90 transition-all duration-500 ease-out",
        
        // Shape & Border: Sharp, cinematic, subtle border
        "border border-white/15 bg-white/5 backdrop-blur-sm",
        
        // Hover State: Accent color glow, slight lift
        "hover:border-accent/40 hover:bg-accent/5 hover:text-white hover:shadow-[0_0_30px_-15px_var(--accent)]",
        
        // Custom cursor class from original
        "cursor-target",
        className
      )}
      {...props}
    >
      {/* Animated Shine/Gradient Background on Hover */}
      <span className="absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-accent/10 via-transparent to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0" />
      </span>

      {/* Icon - Rocket from Original Design */}
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-accent transition-all duration-500 group-hover:rotate-60 group-hover:scale-110 group-hover:text-white" 
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          fill="currentColor"
        ></path>
      </svg>
      
      {/* Text */}
      <span className="relative z-10">{SITE_CONFIG.cta.joinUs}</span>
      
      {/* Corner accents for "technical" feel */}
      <span className="absolute left-0 top-0 h-[1px] w-2 bg-white/20 transition-all duration-300 group-hover:w-full group-hover:bg-accent/50" />
      <span className="absolute bottom-0 right-0 h-[1px] w-2 bg-white/20 transition-all duration-300 group-hover:w-full group-hover:bg-accent/50" />
    </button>
  );
};

/* 
// legacy 
// This was the broadcast-style button with the heavy gradient.
// Styles have been converted to Tailwind for reference.

export const LegacyJoinUsButton: React.FC<JoinUsButtonProps> = (props) => {
  return (
    <button 
      className={cn(
        "group inline-flex items-center gap-[3px] px-[1.3em] py-[0.6em] pl-[0.9em]",
        "font-medium text-[17px] tracking-[0.05em] text-white",
        "bg-gradient-to-r from-[#21398d] to-[#67bed9]",
        "border-none cursor-pointer cursor-target transition-transform duration-500",
        // Hover transform for text handled normally, specific svg transform below
      )} 
      {...props}
    >
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
            "mr-[3px] rotate-30 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
            "group-hover:translate-x-[5px] group-hover:rotate-90"
        )}
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[7px]">
        Join Us
      </span>
    </button>
  );
};
*/
