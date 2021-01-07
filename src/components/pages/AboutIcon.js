import React from 'react';
import { Fade } from 'react-reveal';

import './About.css';
const About_icon = (props) => {
	return (
		<div>
			<Fade left>
				<div style={{ padding: '20px', margin: '50px', alignItems: 'center' }}>
					<h3 style={{ textAlign: 'center', paddingBottom: '50px' }}>{props.title}</h3>
					{props.icon.map((a, i) => (
						<img style={{}} key={i} src={a.url} alt={a.name} height="60" width="70" title={a.name} />
					))}
				</div>
			</Fade>
		</div>
	);
};

export default About_icon;
