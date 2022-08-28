import React, { useEffect, useState } from 'react';

const AboutMe = ({ userState, setUserState }) => {
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
		<div className='form about noScrollbar flex flex-col gap-1 pb-24'>
			<div className='p-4 sticky top-0 bg-darkBlue text-bluishWhite border-b border-lightBlue/10 gap-2'>
				<div className='text-2xl'>About You</div>
				<div>Introduce yourself for your visitors 🎉</div>
			</div>
			<div className='text_input'>
				<div className='label'>Your Name: </div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					value={userState.introduction.name}
					placeholder='Type Your Name'
					onChange={(event) => {
						obj.introduction.name = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>Subtitle: </div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='Give yourself a tagline'
					onChange={(event) => {
						obj.introduction.subtitle = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>Give a Long Description: </div>
				<textarea
					type='text'
					name=''
					id=''
					placeholder='Describe yourself'
					onChange={(event) => {
						obj.introduction.description = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>You Are Currently Based At:</div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='Place ?'
					onChange={(event) => {
						obj.introduction.based = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>Your Portfolio:</div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='Text'
					onChange={(event) => {
						obj.introduction.portfolioText = event.target.value;
						setUserState(obj);
					}}
				/>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='Link'
					onChange={(event) => {
						obj.introduction.portfolioLink = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>Contact You at:</div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='Email'
					onChange={(event) => {
						obj.introduction.email = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>You Are Currently Learning:</div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='What are you learning right now?'
					onChange={(event) => {
						obj.introduction.currentlylearing = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
			<div className='text_input'>
				<div className='label'>Anything else?</div>
				<input
					className='shadowOnFocus'
					type='text'
					name=''
					id=''
					placeholder='Spill It !!'
					onChange={(event) => {
						obj.introduction.anythisElse = event.target.value;
						setUserState(obj);
					}}
				/>
			</div>
		</div>
	);
};

export default AboutMe;
