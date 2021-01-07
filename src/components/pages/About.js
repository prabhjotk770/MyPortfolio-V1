import React, { useState } from 'react';
import { Fade } from 'react-reveal';

import { MDBRow, MDBCol } from 'mdbreact';

import './About.css';
import About_icon from './AboutIcon';
const About = () => {
	const [skills] = useState([
		{
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
			name: 'React',
		},
		{
			url: 'https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png',
			name: 'Javascript',
		},
		{ url: 'https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png', name: 'HTML5' },
		{ url: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png', name: 'CSS' },
		{ url: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png', name: 'Redux' },
		{ url: 'https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png', name: 'NodeJS' },
		{ url: 'https://img.icons8.com/ios/452/sql.png', name: 'SQL' },
		{
			url:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png',
			name: 'C++',
		},
	]);

	const [tools] = useState([
		{
			url:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png',
			name: 'VScode',
		},
		{ url: 'https://image.flaticon.com/icons/png/512/25/25231.png', name: 'Github' },
		{ url: 'https://img.icons8.com/color/452/npm.png', name: 'NPM' },
		{ url: 'https://i.stack.imgur.com/dMXbE.png', name: 'Bootstrap' },
		{ url: 'https://material-ui.com/static/logo.png', name: 'Material UI' },
		{ url: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png', name: 'Firebase' },
		{
			url: 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775',
			name: 'MongoDB',
		},
		{ url: 'https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png', name: 'Express' },
	]);
	return (
		<div>
			<MDBRow className="about">
				<MDBCol>
					<Fade>
						<div className="about_desc">
							<h2>ABOUT</h2>
							<hr style={{ backgroundColor: '#e91e63', height: '4px', width: '70px' }} />
							<div className="desc">
								<p style={{ textAlign: 'center' }}>
									I am a full stack developer from India. I design and code beautifully simple things,
									and I love new technologies. I have a passion for making creative and dynamic user
									interfaces. I prefer to keep learning and continue challenging myself.
								</p>
							</div>
						</div>
					</Fade>
				</MDBCol>
				<MDBCol>
					<Fade>
						<div className="about_desc">
							<img
								src="https://cdn.nohat.cc/thumb/f/720/comvecteezy227854.jpg"
								class="card"
								alt="aboutimage"
								className="aboutimage"
							/>
						</div>
					</Fade>
				</MDBCol>
			</MDBRow>

			<Fade left>
				<div className="icon_col" style={{ alignItems: 'center' }}>
					<div className="icon_row">
						<div className="icon_box">
							<About_icon icon={skills} title="SKILLS" />
						</div>
					</div>
				</div>
			</Fade>
			<Fade right>
				<div className="icon_col" style={{ alignItems: 'center' }}>
					<div className="icon_row">
						<div className="icon_box">
							<About_icon icon={tools} title="TOOLS" />
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default About;
