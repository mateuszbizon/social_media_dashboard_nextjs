"use client"

import React, { useEffect, useState } from "react";

function ToggleThemeButton() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	function handleSetIsDarkMode() {
		setIsDarkMode(prev => !prev);
	}

	useEffect(() => {
		const theme = localStorage.getItem("theme");

		if (theme === "dark") {
			setIsDarkMode(true);
		}
	}, [])

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark")
			return;
		}

		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light")
	}, [isDarkMode])
    
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
