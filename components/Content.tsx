import React from "react";
import FollowersCard from "./FollowersCard";
import { socialData } from "@/constants";
import ViewsCard from "./ViewsCard";
import LikesCard from "./LikesCard";

function Content() {
	return (
		<main className='absolute top-[170px] w-full flex flex-col gap-10'>
			<div className='flex flex-col items-center gap-5'>
				{socialData.map(social => {
					return <FollowersCard key={social.socialMedia} socialData={social} />;
				})}
			</div>
			<div className='px-3'>
				<p className='text-secondary-color text-2xl mb-5 font-bold'>
					Overview - Today
				</p>
				<div className='flex flex-col items-center gap-3'>
					{socialData.map(social => {
						return (
							<div key={social.username}>
								<ViewsCard socialData={social} />
								<LikesCard socialData={social} />
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}

export default Content;
