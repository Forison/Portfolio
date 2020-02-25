import React, { useState } from 'react';
import boostrapImage from '../skills/bootstrap.png';
import css from '../skills/css.png';
import htmll from '../skills/html1.png';
import javs from '../skills/javascript.png';
import rails from '../skills/rails.png';
import reactt from '../skills/react.png';
import ruby from '../skills/ruby.png';
import wpacks from '../skills/webpack.png';
import tdd from '../skills/tdd.png';
import Carousel from 'react-bootstrap/Carousel';


export default function Carousell() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};
	return (
		<Carousel>
			<Carousel.Item>
				<a href="https://github.com/Forison/youtube/blob/master/assets/css/style.css" target="_blank">
					<img
						className="d-block w-100 sector"
						src={css}
						alt="css developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Css</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/youtube/blob/master/index.html" target="_blank">
					<img
						className="d-block w-100 sector"
						src={htmll}
						alt="html developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Html</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/Using-Bootstrap" target="_blank">
					<img
						className="d-block w-100 sector"
						src={boostrapImage}
						alt="bootstrap developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Bootstrap</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/weatherApp" target="_blank">
					<img
						className="d-block w-100 sector"
						src={javs}
						alt="javascript developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Javascript developer</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/weatherApp" target="_blank">
					<img
						className="d-block w-100 sector"
						src={wpacks}
						alt="webpack developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Webpack developer</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/calculator" target="_blank">
					<img
						className="d-block w-100 sector"
						src={reactt}
						alt="react developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>React developer</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/tic-tac-toe" target="_blank">
					<img
						className="d-block w-100 sector"
						src={ruby}
						alt="ruby developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Ruby developer</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/social-network" target="_blank">
					<img
						className="d-block w-100 sector"
						src={rails}
						alt="rails developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Ruby on rails developer</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/social-network/tree/master/spec/models" target="_blank">
					<img
						className="d-block w-100 sector"
						src={tdd}
						alt="test driven devepment"
					/>
				</a>
				<Carousel.Caption>
					<h3>Test Driven developement development with Rspec</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
