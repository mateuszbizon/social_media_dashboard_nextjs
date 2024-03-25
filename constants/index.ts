import { SocialDataType } from "@/types";

export const socialData: SocialDataType[] = [
	{
		socialMedia: "facebook",
		username: "@nathanf",
		icon: "/images/icon-facebook.svg",
		altIcon: "facebook icon",
		isIncreasing: true,
		followers: "1987",
		followersType: "followers",
		views: {
			viewsAmount: "87",
			viewsType: "Page Views",
			viewsProcent: "3",
			isIncreasing: true
		},
		likes: {
			likesAmount: "52",
			likesProcent: "2",
			isIncreasing: false,
		},
	},
	{
		socialMedia: "twitter",
		username: "@nathanf",
		icon: "/images/icon-twitter.svg",
		altIcon: "twitter icon",
		isIncreasing: true,
		followers: "1044",
		followersType: "followers",
		views: {
			viewsAmount: "117",
			viewsType: "Retweets",
			viewsProcent: "303",
			isIncreasing: true
		},
		likes: {
			likesAmount: "507",
			likesProcent: "553",
			isIncreasing: true,
		},
	},
	{
		socialMedia: "instagram",
		username: "@realnathanf",
		icon: "/images/icon-instagram.svg",
		altIcon: "instagram icon",
		isIncreasing: true,
		followers: "11k",
		followersType: "followers",
		views: {
			viewsAmount: "52k",
			viewsType: "Profile Views",
			viewsProcent: "1375",
			isIncreasing: true
		},
		likes: {
			likesAmount: "5462",
			likesProcent: "2257",
			isIncreasing: true,
		},
	},
	{
		socialMedia: "youtube",
		username: "Nathan F.",
		icon: "/images/icon-youtube.svg",
		altIcon: "youtube icon",
		isIncreasing: false,
		followers: "8239",
		followersType: "subscribers",
		views: {
			viewsAmount: "1407",
			viewsType: "Total Views",
			viewsProcent: "12",
			isIncreasing: false,
		},
		likes: {
			likesAmount: "107",
			likesProcent: "19",
			isIncreasing: false,
		},
	},
];
