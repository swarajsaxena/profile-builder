/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const SkillsIcon = ({ skill, whenClick }) => {
	const [active, setActive] = useState(false);
	const [tooltip, setTooltip] = useState(false);
	return (
		<div
			onClick={() => {
				setActive(!active);
				if (whenClick) whenClick(skill);
			}}
			className={`relative p-2 rounded-md cursor-pointer hover:scale-125 transition-all`}
			onMouseEnter={() => setTooltip(true)}
			onMouseLeave={() => setTooltip(false)}>
			<img
				src={active ? skill?.activeLink : skill?.link}
				width='40'
				height='40'
				alt={skill?.name}
			/>
			{tooltip && (
				<div className='absolute left-1/2 bottom-[-1.5rem] translate-x-[-50%] px-2 py-1 rounded-md bg-darkBlue text-white z-50 text-xs'>
					{skill?.name}
				</div>
			)}
		</div>
	);
};

export default SkillsIcon;
