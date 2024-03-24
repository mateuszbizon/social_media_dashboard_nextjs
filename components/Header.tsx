import React from "react";

function Header() {
	return (
		<header className='bg-main-background-color px-6 py-7 flex flex-col gap-y-5'>
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
				<button className='w-11 h-6 bg-toggle-theme-btn rounded-full relative'>
					<div className='absolute top-[50%] right-0.5 bg-slate-50 w-5 h-5 rounded-full translate-y-[-50%]'></div>
				</button>
			</div>
		</header>
	);
}

export default Header;
