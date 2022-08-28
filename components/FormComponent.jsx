import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { FiChevronRight } from 'react-icons/fi';
import Socials from './Socials';

const FormComponent = ({ userState, setUserState }) => {
	const [activeTab, setActiveTab] = useState('Social');
	const tabs = ['About Me', 'Skills', 'Social'];

	return (
		<div className='formComponent basis-1/2 border-r  border-darkBlue/10 h-full'>
			<div className='flex p-2 border-b border-darkBlue/10'>
				{tabs.map((item, index) => (
					<div
						key={index}
						className={`tab ${item === activeTab ? 'active' : ''}`}
						onClick={() => setActiveTab(item)}>
						<div>{item}</div>
						<FiChevronRight
							className={item === activeTab ? 'icon down' : 'icon'}
						/>
					</div>
				))}
			</div>

			{activeTab === 'About Me' ? (
				<AboutMe
					userState={userState}
					setUserState={setUserState}
				/>
			) : activeTab === 'Skills' ? (
				<Skills
					userState={userState}
					setUserState={setUserState}
				/>
			) : (
				<Socials
					userState={userState}
					setUserState={setUserState}
				/>
			)}
		</div>
	);
};

export default FormComponent;
