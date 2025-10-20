"use client";

import { Achievement } from "@/types/achievements";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, stagger } from "motion/react";
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon, FacebookIcon, GithubIcon, Globe2Icon, InstagramIcon, LinkedinIcon, MapPinIcon, TrophyIcon, TwitterIcon, XIcon, YoutubeIcon } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AchievementCard } from "./AchievementCard";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Separator } from "../ui/separator";
import { LinkPreview } from "../ui/link-preview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export const AchievementCards = ({
  cards,
}: {
  cards: Achievement[];
}) => {

  const [hovered, setHovered] = useState<number | null>(null);


  const [active, setActive] = useState<Achievement | boolean | null>(null);
  const [showTeams, setShowTeams] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function handleTagClick(tag: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('tag', tag);
    return () => {
      router.push(url.toString());
      setActive(null);
      setHovered(null);
    }
  }

  function handleLocationClick(location: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('location', location);
    return () => {
      router.push(url.toString());
      setActive(null);
      setHovered(null);
    }
  }

  useEffect(() => {

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
        setHovered(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }



    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // @ts-expect-error type error
  useOutsideClick(ref, () => { setActive(null); setHovered(null) });

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-secondary text-secondary-foreground rounded-full p-2"
              onClick={() => setActive(null)}
            >
              <XIcon className="size-4" />
            </motion.button>
            {!showTeams ? (
              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div
                  layoutId={`image-${active.id}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Carousel className="w-full sm:rounded-tr-lg sm:rounded-tl-lg ">
                    <CarouselContent>
                      {active.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            width={200}
                            height={200}
                            src={image}
                            alt={active.event_name}
                            className="w-full h-64 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                      <CarouselNext variant={"ghost"} size={"icon"}>
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="size-6 text-neutral-700 dark:text-neutral-300" />                      
                      </CarouselNext>
                    <CarouselPrevious variant={"ghost"} size={"icon"}>
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="size-6 rotate-180 text-neutral-700 dark:text-neutral-300" />
                    </CarouselPrevious>
                  </Carousel>
                  
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.id}-${id}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                      >
                        {active.event_name}
                      </motion.h3>
                      <motion.p
                        layoutId={`location-${active.id}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 md:text-base flex items-center justify-between w-full gap-4 mt-2 text-xs"
                      >
                        <span className="flex items-center text-wrap hover:underline cursor-pointer" onClick={handleLocationClick(active.location_of_event)}>
                          <MapPinIcon className="size-4 mr-1" /> {active.location_of_event}
                        </span>
                        <span className="flex items-center shrink-0">
                          <CalendarDaysIcon className="size-4 mr-1" /> {format(new Date(active.date), "do MMM yyyy")}

                        </span>
                      </motion.p>
                    </div>

                    <LinkPreview
                      url={active.link}

                    >
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-2 text-sm rounded-full font-bold bg-green-500 text-white"
                      >
                        <Globe2Icon className="size-6" />
                      </motion.div>
                    </LinkPreview>
                  </div>
                  <div className="pt-2 relative px-4">
                    <motion.p
                      layoutId={`tags-${active.id}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base flex items-center justify-start my-2 md:mb-2 mb-4"
                    >
                      Tags: {active.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 dark:bg-neutral-800 text-xs md:text-sm lg:text-base rounded-full px-2 ml-2 cursor-pointer py-1 line-clamp-1 w-full text-center" onClick={handleTagClick(tag)}>
                          {tag}
                        </span>
                      ))}

                    </motion.p>
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] max-h-[100px]"
                    >
                      {active.description_of_event}
                    </motion.div>

                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => {
                        setShowTeams(true)
                      }}
                      className="group cursor-pointer w-full relative overflow-hidden inline-flex items-center justify-center h-11 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-600 dark:to-pink-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-rose-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/30 hover:from-rose-600 hover:to-pink-600 dark:hover:from-rose-500 dark:hover:to-pink-500 shrink-0 mt-2 mb-4"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%]"
                        whileHover={{
                          x: ["-200%", "200%"],
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: 0,
                        }}
                      />
                      Show Teams
                    </motion.div>



                  </div>
                </div>
              </motion.div>) : (
              <motion.div
                layoutId={`card-${active.id}-${id}-teams`}
                variants={{
                  open: {
                    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
                  },
                  closed: {
                    transition: { delayChildren: stagger(0.05, { from: "last" }) },
                  },
                }}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden p-6"
              >


                <div className="flex flex-col gap-4 max-h-[90%] overflow-y-auto">
                  <motion.h2
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-2xl font-semibold text-center text-neutral-700 dark:text-neutral-200"
                  >
                    Our Teams
                  </motion.h2>

                  <Separator className="mb-2" />

                  {active.teams.map((team, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-100 dark:bg-neutral-900">

                      <img src={team.image} alt={team.team_name} className="size-32 aspect-square object-cover rounded-full mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-2 text-center">Name: {team.team_name}</h3>
                      <p className="text-muted-foreground text-center flex items-center justify-center">
                        <span>
                          <TrophyIcon className="size-4 mr-1 inline-block" />
                        </span>
                        {team.position}</p>

                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-center">Members</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {team.members.map((member, mIndex) => (
                            <div
                              key={mIndex}
                              className="flex flex-col items-center bg-gray-200 dark:bg-neutral-800 p-4 rounded-lg"
                            >
                              <img src={member.image} alt={member.name} className="size-24 aspect-square object-cover rounded-full mb-2" />
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                              {member.socials && <div className="flex items-center space-x-2 mt-2 text-muted-foreground">
                                {member.socials.github && (
                                  <LinkPreview
                                    url={member.socials.github}
                                  >
                                    <GithubIcon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
                                  </LinkPreview>
                                )}
                                {member.socials.linkedin && (
                                  <LinkPreview
                                    url={member.socials.linkedin}
                                  >
                                    <LinkedinIcon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
                                  </LinkPreview>
                                )}
                                {member.socials.website && (
                                  <LinkPreview
                                    url={member.socials.website}
                                  >
                                    <Globe2Icon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
                                  </LinkPreview>
                                )}
                                {member.socials.twitter && (
                                  <LinkPreview
                                    url={member.socials.twitter}
                                  >
                                    <TwitterIcon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
                                  </LinkPreview>

                                )}

                                {member.socials.instagram && (
                                  <LinkPreview
                                    url={member.socials.instagram}
                                  >
                                    <InstagramIcon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />

                                  </LinkPreview>
                                )}
                                {member.socials.facebook && (
                                  <LinkPreview

                                    url={member.socials.facebook}
                                  >
                                    <FacebookIcon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
                                  </LinkPreview>
                                )}

                                {member.socials.youtube && (
                                  <LinkPreview
                                    url={member.socials.youtube}
                                  >
                                    <YoutubeIcon className="size-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
                                  </LinkPreview>
                                )}
                              </div>}

                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator className="my-2" />
                    </div>



                  ))}
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => {
                    setShowTeams(false)
                  }}
                  className="group cursor-pointer w-full relative overflow-hidden inline-flex items-center justify-center h-11 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-600 dark:to-pink-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-rose-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/30 hover:from-rose-600 hover:to-pink-600 dark:hover:from-rose-500 dark:hover:to-pink-500 shrink-0 mt-2"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%]"
                    whileHover={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: 0,
                    }}
                  />
                  Show Event Details
                </motion.div>
              </motion.div>
            )
            }

          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <AchievementCard
            key={card.id}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            setActive={setActive}
          />
        ))}
      </div>
    </>
  );
};
