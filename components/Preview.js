/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import SkillsIcon from './SkillsIcon';

const Preview = ({ userState }) => {
	return (
		<div className='p-4'>
			{userState.introduction.name && (
				<div className='header'>
					Hi👋, My Name Is {userState.introduction.name}
				</div>
			)}
			{userState.introduction.subtitle && (
				<div className='tagline'>{userState.introduction.subtitle}</div>
			)}
			{userState.introduction.description && (
				<div>{userState.introduction.description}</div>
			)}
			<ul className='list-disc ml-4'>
				{userState.introduction.based && (
					<li>i am based in {userState.introduction.based}</li>
				)}
				{userState.introduction.email && (
					<li>You can contact me at {userState.introduction.email}</li>
				)}
				{userState.introduction.portfioLink && (
					<li>
						here is my Personal Portfolio{' '}
						<span className='link'>
							{userState.introduction.portfolioText
								? userState.introduction.portfolioText
								: userState.introduction.portfolioLink}
						</span>
					</li>
				)}
				{userState.introduction.currentlylearing && (
					<li>
						I am currently learing {userState.introduction.currentlylearing}
					</li>
				)}
				{userState.introduction.anythisElse && (
					<li>{userState.introduction.anythisElse}</li>
				)}
			</ul>
			{userState.skills && userState.skills.length > 0 && (
				<>
					<div className='text-lg font-medium'>Skills</div>
					<div className='flex flex-wrap gap-2'>
						{userState.skills &&
							userState.skills.map((skill, index) => (
								<img
									src={skill.activeLink}
									alt={skill.name}
									key={index}
									width='36px'
								/>
							))}
					</div>
				</>
			)}
			{userState.socials.github === '' &&
			userState.socials.instagram === '' &&
			userState.socials.twitter === '' &&
			userState.socials.hashnode === '' &&
			userState.socials.medium === '' &&
			userState.socials.devTo === '' &&
			userState.socials.linkedin === '' &&
			userState.socials.polywork === '' &&
			userState.socials.behance === '' ? (
				<></>
			) : (
				<div className='text-lg font-medium'>Socials</div>
			)}
			<div className='flex flex-wrap gap-2'>
				{userState.socials.github && (
					<a
						href={'https://www.github.com/' + userState.socials.github}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.instagram && (
					<a
						href={'https://www.instagram.com/' + userState.socials.github}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.twitter && (
					<a
						href={'https://www.twitter.com/' + userState.socials.twitter}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.hashnode && (
					<a
						href={'https:/' + userState.socials.hashnode + '.hashnode.dev/'}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/hashnode.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.medium && (
					<a
						href={'https://www.medium.com/' + userState.socials.medium}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.devTo && (
					<a
						href={'https://www.dev.to/' + userState.socials.devTo}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/devdotto.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.linkedin && (
					<a
						href={'https://www.linkedin.com/in/' + userState.socials.linkedin}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.polywork && (
					<a
						href={'https://www.polywork.com/in/' + userState.socials.polywork}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/polywork.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
				{userState.socials.behance && (
					<a
						href={'https://www.behance.com/in/' + userState.socials.behance}
						target='_blank'
						rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/behance.svg'
							width={36}
							alt=''
						/>
					</a>
				)}
			</div>
		</div>
	);
};

export default Preview;
