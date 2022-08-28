import React from 'react';
import SkillsIcon from './SkillsIcon';

const Skills = ({ userState, setUserState }) => {
	const skills = {
		core: [
			{
				name: 'C',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg',
			},
			{
				name: 'C++',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg',
			},
			{
				name: 'C#',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg',
			},
			{
				name: 'Coffeescript',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/coffeescript.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/coffeescript-colored.svg',
			},
			{
				name: 'dart',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg',
			},
			{
				name: 'go',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg',
			},
			{
				name: 'java',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg',
			},
			{
				name: 'javascript',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
			},
			{
				name: 'kotlin',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg',
			},
			{
				name: 'perl',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/perl.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/perl-colored.svg',
			},
			{
				name: 'php',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg',
			},
			{
				name: 'python',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
			},
			{
				name: 'ruby',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg',
			},
			{
				name: 'rust',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg',
			},
			{
				name: 'swift',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg',
			},
			{
				name: 'typescript',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
			},
		],
		frontend: [
			{
				name: 'html5',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
			},
			{
				name: 'react',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
			},
			{
				name: 'nextjs',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg',
			},
			{
				name: 'vuejs',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg',
			},
			{
				name: 'nuxtjs',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg',
			},
			{
				name: 'gatsby',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg',
			},
			{
				name: 'angularjs',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg',
			},
			{
				name: 'jquery',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg',
			},
			{
				name: 'css3',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
			},
			{
				name: 'sass',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
			},
			{
				name: 'tailwindcss',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
			},
			{
				name: 'bootstrap',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg',
			},
			{
				name: 'materialui',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg',
			},
			{
				name: 'redux',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg',
			},
			{
				name: 'webpack',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg',
			},
			{
				name: 'babel',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg',
			},
			{
				name: 'svelte',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg',
			},
		],
		backend: [
			{
				name: 'nodejs',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
			},
			{
				name: 'express',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg',
			},
			{
				name: 'fastapi',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg',
			},
			{
				name: 'graphql',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg',
			},
			{
				name: 'oracle',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/oracle.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/oracle-colored.svg',
			},
			{
				name: 'nestjs',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg',
			},
			{
				name: 'mongodb',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
			},
			{
				name: 'mysql',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
			},
			{
				name: 'postgresql',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
			},
			{
				name: 'firebase',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg',
			},
			{
				name: 'appwrite',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/appwrite.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/appwrite-colored.svg',
			},
			{
				name: 'heroku',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg',
			},
			{
				name: 'flask',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored.svg',
			},
			{
				name: 'supabase',
				link: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase.svg',
				activeLink:
					'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg',
			},
		],
	};

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

	const whenClick = (skill) => {
		let flag = false;

		obj.skills.forEach((s) => {
			if (s.name === skill.name) {
				console.log('found the element');
				flag = true;
				const index = obj.skills.findIndex(
					(element) => element.name === skill.name
				);
				obj.skills.splice(index, 1);
				return;
			}
		});

		!flag && obj.skills.push(skill);

		setUserState(obj);
		console.log(userState);
	};

	return (
		<div className='form noScrollbar flex flex-col gap-1 pb-12'>
			<div className='p-4 sticky top-0 bg-darkBlue text-bluishWhite border-b border-lightBlue/10 gap-2'>
				<div className='text-2xl'>Your Skills</div>
				<div>Yes!! You are allowed to show off just a tad bit 🎉</div>
			</div>
			<div className='skills_input flex flex-col gap-4 items-start p-4'>
				<div className='flex flex-col'>
					<div className='label'>Core Skills: </div>
					<div className='flex flex-wrap'>
						{skills.core?.map((skill, index) => (
							<SkillsIcon
								skill={skill}
								key={index}
								whenClick={whenClick}
							/>
						))}
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='label'>Frontend Skills: </div>
					<div className='flex flex-wrap'>
						{skills.frontend?.map((skill, index) => (
							<SkillsIcon
								skill={skill}
								key={index}
								whenClick={whenClick}
							/>
						))}
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='label'>Backend Skills: </div>
					<div className='flex flex-wrap'>
						{skills.backend?.map((skill, index) => (
							<SkillsIcon
								skill={skill}
								key={index}
								whenClick={whenClick}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
