import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";

function Header() {
	return (
		<header className='bg-main-background-color dark:bg-dark-main-background-color main-x-padding py-7 pb-10 flex flex-col md:flex-row md:justify-between gap-y-5'>
			<div>
				<h1 className='text-main-color dark:text-dark-main-color font-bold text-xl lg:text-3xl mb-1'>
					Social Media Dashboard
				</h1>
				<p className='text-secondary-color dark:text-dark-secondary-color font-bold'>
					Total followers: 23, 004
				</p>
			</div>
			<div className='w-full md:hidden h-[1px] bg-secondary-color dark:bg-dark-secondary-color'></div>
			<div className='flex justify-between items-center md:gap-3'>
				<span className='text-secondary-color dark:text-dark-secondary-color font-bold'>Dark Mode</span>
				<ToggleThemeButton />
			</div>
		</header>
	);
}

export default Header;
