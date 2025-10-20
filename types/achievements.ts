export interface Achievement {
    id: string;
    event_name: string;
    location_of_event: string;
    description_of_event: string;
    images: string[];
    date: string;
    link: string;
    teams: {
        team_name: string;
        image: string;
        members: {
            name: string;
            role: string;
            image: string;
            socials: {
                github?: string;
                linkedin?: string;
                twitter?: string;
                website?: string;
                instagram?: string;
                facebook?: string;
                youtube?: string;
            }
        }[];
        position: string;
    }[];
    tags: string[];

}