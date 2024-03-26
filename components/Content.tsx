import React from "react";
import FollowersCard from "./FollowersCard";
import { socialData } from "@/constants";
import ViewsCard from "./ViewsCard";
import LikesCard from "./LikesCard";

function Content() {
	return (
		<main className='absolute top-[170px] md:top-[110px] w-full flex flex-col gap-10 main-x-padding dark:bg-dark-secondary-background-color'>
			<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
				{socialData.map(social => {
					return <FollowersCard key={social.socialMedia} socialData={social} />;
				})}
			</div>
			<div>
				<p className='text-secondary-color dark:text-dark-main-color text-2xl mb-5 font-bold'>
					Overview - Today
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-x-5'>
					{socialData.map((social, index) => {
						const isElementEven = (index + 1) % 2 == 0 ? true : false;

						return (
							<div
								key={social.socialMedia}
								className='flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-5'>
								{isElementEven ? (
									<>
										<LikesCard socialData={social} />
										<ViewsCard socialData={social} />
									</>
								) : (
									<>
										<ViewsCard socialData={social} />
										<LikesCard socialData={social} />
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}

export default Content;
