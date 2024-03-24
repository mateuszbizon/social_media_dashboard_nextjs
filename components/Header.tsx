import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";

function Header() {
	return (
		<header className='bg-main-background-color px-6 py-7 pb-10 flex flex-col gap-y-5'>
			<div>
				<h1 className='text-main-color font-bold text-2xl mb-1'>
					Social Media Dashboard
				</h1>
				<p className='text-secondary-color font-bold'>
					Total followers: 23, 004
				</p>
			</div>
			<div className='w-full h-[1px] bg-secondary-color'></div>
			<div className='flex justify-between items-center'>
				<span className='text-secondary-color font-bold'>Dark Mode</span>
				<ToggleThemeButton />
			</div>
		</header>
	);
}

export default Header;
