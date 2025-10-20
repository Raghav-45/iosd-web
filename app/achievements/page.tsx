import MatrixText from '@/components/kokonutui/matrix-text'
import { AchievementCards } from '@/components/achievements/AchievementCards'
import { Achievement } from '@/types/achievements'
import React from 'react'

const achievements: Achievement[] = [
    {
        id: "1",
        event_name: "Hacktoberfest 2023",
        location_of_event: "Online",
        description_of_event: "Participated in Hacktoberfest 2023, contributing to open source projects and earning a limited edition Hacktoberfest T-shirt.",
        images: [
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
        ],
        date: "2023-10-31",
        link: "https://hacktoberfest.digitalocean.com/",
        teams: [
            {
                team_name: "Open Source Contributors",
                image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                members: [
                    {
                        name: "Alice Johnson",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/alicejohnson",
                            twitter: "https://twitter.com/alicejohnson",
                            linkedin: "https://linkedin.com/in/alicejohnson"
                        }
                    },
                    {
                        name: "Bob Smith",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/bobsmith",
                            twitter: "https://twitter.com/bobsmith",
                            linkedin: "https://linkedin.com/in/bobsmith"
                        }
                    }
                ],
                position: "Participant"
            },
            {
                team_name: "Open Source Contributors",
                image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                members: [
                    {
                        name: "Alice Johnson",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/alicejohnson",
                            twitter: "https://twitter.com/alicejohnson",
                            linkedin: "https://linkedin.com/in/alicejohnson"
                        }
                    },
                    {
                        name: "Bob Smith",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/bobsmith",
                            twitter: "https://twitter.com/bobsmith",
                            linkedin: "https://linkedin.com/in/bobsmith"
                        }
                    }
                ],
                position: "Participant"
            },
            {
                team_name: "Open Source Contributors",
                image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                members: [
                    {
                        name: "Alice Johnson",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/alicejohnson",
                            twitter: "https://twitter.com/alicejohnson",
                            linkedin: "https://linkedin.com/in/alicejohnson"
                        }
                    },
                    {
                        name: "Bob Smith",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/bobsmith",
                            twitter: "https://twitter.com/bobsmith",
                            linkedin: "https://linkedin.com/in/bobsmith"
                        }
                    }
                ],
                position: "Participant"
            },
        ],
        tags: ["Hacktoberfest", "Open Source", "2023"]
    },
    {
        id: "2",
        event_name: "Google Summer of Code 2023",
        location_of_event: "Online",
        description_of_event: "Successfully completed Google Summer of Code 2023, contributing to the XYZ open source project.",
        images: [
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
        ],
        date: "2023-08-15",
        link: "https://summerofcode.withgoogle.com/",

        teams: [
            {
                team_name: "XYZ Project Contributors",
                image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                members: [
                    {
                        name: "Charlie Brown",
                        role: "Mentor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/charliebrown",
                            twitter: "https://twitter.com/charliebrown",
                            linkedin: "https://linkedin.com/in/charliebrown"
                        }
                    },
                    {
                        name: "Dana White",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/danawhite",
                            twitter: "https://twitter.com/danawhite",
                            linkedin: "https://linkedin.com/in/danawhite"
                        }
                    }
                ],
                position: "Contributor"
            }
        ],
        tags: ["GSoC", "Open Source", "2023"]

    },
    {
        id: "3",
        event_name: "IEEE Xtreme 17.0",
        location_of_event: "Online",
        description_of_event: "Participated in IEEE Xtreme 17.0, a 24-hour coding competitikldnffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffl sdjklllllllllllllll jskdlnf vj rlwefkdnvreilkjfsviheorkfeojlkferhiglkejkfnfkldfl;jdfnlksdj;fjsdfjdslfjksd;lkf sdlkflkjd fjdslkj fdslkjfljk dslkj dson organized by IEEE.",
        images: [
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
        ],
        date: "2023-10-21",
        link: "https://ieeextreme.org/",

        teams: [
            {
                team_name: "Code Warriors",
                image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                members: [
                    {
                        name: "Eve Adams",
                        role: "Team Leader",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/eveadams",
                            twitter: "https://twitter.com/eveadams",
                            linkedin: "https://linkedin.com/in/eveadams"
                        }
                    },
                    {
                        name: "Frank Miller",
                        role: "Member",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png",
                        socials: {
                            github: "https://github.com/frankmiller",
                            twitter: "https://twitter.com/frankmiller",
                            linkedin: "https://linkedin.com/in/frankmiller"
                        }
                    }

                ],
                position: "Top 10%"
            }
        ],
        tags: ["IEEE Xtreme", "Coding Competition", "2023"]
    }
]

interface PageProps {
    searchParams: Promise<{
        tag?: string;
        location?: string;
    }>
}

const page = async ({ searchParams }: PageProps) => {
    const { tag, location } = await searchParams;

    console.log("Search Params:", { tag, location });
    let filteredAchievements = achievements;

    if (tag) {
        filteredAchievements = filteredAchievements.filter(achievement =>
            achievement.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
        );
    }
    if (location) {
        filteredAchievements = filteredAchievements.filter(achievement =>
            achievement.location_of_event.toLowerCase() === location.toLowerCase()
        );
    }

    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-start gap-8 py-8 px-4'>
            <MatrixText text='Achievements'/>
            <AchievementCards cards={filteredAchievements} />

        </div>
    )
}

export default page