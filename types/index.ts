export type SocialDataType = {
    socialMedia: string;
    username: string;
    icon: string;
    altIcon: string;
    isIncreasing: boolean;
    followers: string;
    followersToday: string;
    followersType: string;
    views: {
        viewsType: string;
        viewsAmount: string;
        viewsProcent: string;
        isIncreasing: boolean;
    }
    likes: {
        likesAmount: string;
        likesProcent: string;
        isIncreasing: boolean;
    }
}