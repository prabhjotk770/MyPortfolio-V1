import React from 'react';
import Img from '../../assets/home.png';

import { scroller } from 'react-scroll';

const Home = () => {
	const ScrollToElement = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 500,
			smooth: true,
			offset: -80,
		});
	};
	return (
		<div style={{ width: '100%', height: '100%', marginTop: '50px' }}>
			<div className="container homewrapper">
				<div className="imagewrapper">
					<img src={Img} class="card" alt=".." className="imagehome" />
				</div>

				<div className="content-wrapper">
					<div className="container homeContentContainer">
						<div className="hometitle">
							<h1 className="title_h1" contenteditable data-heading="Frozen">
								Hey, My name is Prabhjot Kaur
							</h1>
							<div>
								<h6 style={{ marginTop: '3em', fontFamily: 'sans-serif' }}>
									{' '}
									I am currently in my final year pursuing Master's of Computer Application.
								</h6>
							</div>
							<div style={{ marginTop: '3em' }}>
								<p className="moreAbout">Wanna know more about me?</p>
								<div style={{ display: 'flex' }}>
									<button
										onClick={() => ScrollToElement('about')}
										type="button"
										className="button-three"
										style={{ backgroundColor: '#FF1F5A' }}
									>
										Click Here!
									</button>

									<a
										href="https://drive.google.com/file/d/1lOiIUSM1Fk4rIvnmu-RZEH7JEhBh4w1z/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button
											type="button"
											className="button-three"
											style={{ backgroundColor: '#FF1F5A', marginLeft: '2em' }}
										>
											Resume
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
