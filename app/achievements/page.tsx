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
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
                    },
                    {
                        name: "Bob Smith",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
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
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
                    },
                    {
                        name: "Bob Smith",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
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
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
                    },
                    {
                        name: "Bob Smith",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
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
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
                    },
                    {
                        name: "Dana White",
                        role: "Contributor",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
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
            "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
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
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
                    },
                    {
                        name: "Frank Miller",
                        role: "Member",
                        image: "https://jaladh-singhal.github.io/gsoc20/images/gsoc_logo.png"
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
        <div className='min-h-screen w-full flex flex-col items-center justify-start gap-12 py-16 px-6 bg-transparent'>
            <div className="flex flex-col items-center gap-4 text-center">
                <MatrixText text='Achievements' />
                <div className="w-24 h-1 bg-blue-500/30 rounded-full mt-[-8px]" />
            </div>
            <div className="w-full max-w-5xl">
                <AchievementCards cards={filteredAchievements} />
            </div>
        </div>
    )
}

export default page