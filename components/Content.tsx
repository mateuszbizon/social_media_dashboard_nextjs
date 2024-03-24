import React from "react";
import FollowersCard from "./FollowersCard";
import { socialData } from "@/constants";

function Content() {
	return (
		<main className='absolute top-[170px] w-full flex flex-col gap-10'>
			<div className='flex flex-col items-center gap-5'>
				{socialData.map(social => {
					return <FollowersCard key={social.socialMedia} socialData={social} />;
				})}
			</div>
		</main>
	);
}

export default Content;
