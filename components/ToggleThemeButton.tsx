"use client"

import React, { useState } from "react";

function ToggleThemeButton() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	function handleSetIsDarkMode() {
		setIsDarkMode(prev => !prev);
	}
    
    return (
		<button
			className='w-11 h-6 bg-toggle-theme-btn rounded-full relative'
			onClick={handleSetIsDarkMode}>
			<div
				className={
					!isDarkMode ? "toggle-theme-btn-light" : "toggle-theme-btn-dark"
				}></div>
		</button>
	);
}

export default ToggleThemeButton;
