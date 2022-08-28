/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiHashnode, SiMedium, SiPolywork } from 'react-icons/si';
import { AiOutlineBehance } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';

const Socials = ({ userState, setUserState }) => {
	let obj = {
		introduction: {
			name: userState.introduction.name,
			subtitle: userState.introduction.subtitle,
			description: userState.introduction.description,
			email: userState.introduction.email,
			based: userState.introduction.based,
			portfolioLink: userState.introduction.portfolioLink,
			portfolioText: userState.introduction.portfolioText,
			currentlylearing: userState.introduction.currentlylearing,
			anythisElse: userState.introduction.anythisElse,
		},
		skills: userState.skills,
		socials: {
			github: userState.socials.github,
			instagram: userState.socials.instagram,
			twitter: userState.socials.twitter,
			hashnode: userState.socials.hashnode,
			medium: userState.socials.medium,
			devTo: userState.socials.devTo,
			linkedin: userState.socials.linkedin,
			polywork: userState.socials.polywork,
			behance: userState.socials.behance,
		},
	};
	return (
		<div className='form socials noScrollbar flex flex-col gap-1 pb-24'>
			<div className='p-4 bg-darkBlue text-bluishWhite border-b border-lightBlue/10 gap-2'>
				<div className='text-2xl'>Your Socials</div>
				<div>Allow others to connect to you 📞</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Github</div>
					<FiGithub size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://www.github.com/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.github}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.github = event.target.value;
							setUserState(obj);
							console.log(event.target.value);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Instagram</div>
					<FiInstagram size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://www.instagram.com/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.instagram}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.instagram = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Twitter</div>
					<FiTwitter size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://www.twitter.com/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.twitter}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.twitter = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Hashnode</div>
					<SiHashnode size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.hashnode}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.hashnode = event.target.value;
							setUserState(obj);
						}}
					/>
					<div className='ml-auto'>.hashnode.dev</div>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Medium</div>
					<SiMedium size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://medium.com/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.medium}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.medium = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Dev.to</div>
					<FaDev size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://dev.to/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.devTo}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.devTo = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Linkedin</div>
					<FiLinkedin size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://linkedin.com/in/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.linkedin}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.linkedin = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Polywork</div>
					<SiPolywork size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://polywork.com/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.polywork}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.polywork = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
			<div className='text_input'>
				<div className='label flex items-center gap-2'>
					<div>Behance</div>
					<AiOutlineBehance size={20} />
				</div>
				<div
					className='inputBox'
					tabIndex='0'>
					<div>https://behance.com/</div>
					<input
						className='shadowOnFocus'
						type='text'
						name=''
						id=''
						value={obj.socials.behance}
						placeholder='your_initials'
						onChange={(event) => {
							obj.socials.behance = event.target.value;
							setUserState(obj);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Socials;
