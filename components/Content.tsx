import React from "react";
import FollowersCard from "./FollowersCard";
import { socialData } from "@/constants";
import ViewsCard from "./ViewsCard";
import LikesCard from "./LikesCard";

function Content() {
	return (
		<main className='absolute top-[170px] w-full flex flex-col gap-10 px-6'>
			<div className='flex flex-col gap-5'>
				{socialData.map(social => {
					return <FollowersCard key={social.socialMedia} socialData={social} />;
				})}
			</div>
			<div>
				<p className='text-secondary-color text-2xl mb-5 font-bold'>
					Overview - Today
				</p>
				<div className='flex flex-col gap-3'>
					{socialData.map(social => {
						return (
							<div key={social.socialMedia} className='flex flex-col gap-3'>
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
