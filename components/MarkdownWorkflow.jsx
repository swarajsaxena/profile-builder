import React, { useState } from 'react'
import MdCode from './MdCode'
import { FiChevronRight } from 'react-icons/fi'
import Preview from './Preview'

const MarkdownWorkflow = ({ userState, setUserState }) => {
	const [activeTab, setActiveTab] = useState('Markdown Preview')
	const tabs = ['Markdown Preview', 'Markdown Code']
	return (
		<div className='markdownWorkflow basis-1/2 flex-1'>
			<div className='flex border-b border-darkBlue/10 p-2'>
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

			{activeTab === 'Markdown Preview' ? (
				<Preview userState={userState} setUserState={setUserState} />
			) : activeTab === 'Markdown Code' ? (
				<MdCode />
			) : (
				<></>
			)}
		</div>
	)
}

export default MarkdownWorkflow
