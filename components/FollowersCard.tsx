import React from "react";
import Image from "next/image";
import { SocialDataType } from "@/types";

type FollowersCardProps = {
	socialData: SocialDataType;
};

function FollowersCard({ socialData }: FollowersCardProps) {
	return (
		<div className='card-width bg-card-background-color rounded-lg'>
			<div className='w-full h-1 bg-twitter-color rounded-t-lg'></div>
			<div className='flex flex-col gap-4 py-7'>
				<div className='flex gap-3 justify-center items-center'>
					<Image
						src={socialData.icon}
						width={20}
						height={20}
						alt={socialData.altIcon}
					/>
					<span>{socialData.username}</span>
				</div>
				<div className='flex flex-col gap-2 items-center'>
					<span className='text-main-color font-bold text-5xl'>
						{socialData.followers}
					</span>
					<span className='text-secondary-color uppercase'>
						{socialData.followersType}
					</span>
				</div>
				<div className='flex justify-center items-center gap-2'>
					<Image
						src={
							socialData.isIncreasing
								? "/images/icon-up.svg"
								: "/images/icon-down.svg"
						}
						width={12}
						height={12}
						alt={socialData.isIncreasing ? "arrow up icon" : "arrow down icon"}
					/>
					<span
						className={
							socialData.isIncreasing ? "text-lime-green" : "text-bright-red"
						}>
						{socialData.followersToday} Today
					</span>
				</div>
			</div>
		</div>
	);
}

export default FollowersCard;
