import React from 'react';
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

	return (
		<Carousel>
			<Carousel.Item>
				<a href="https://github.com/Forison/youtube/blob/master/assets/css/style.css"
					target="_blank"
					rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
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
				<a href="https://github.com/Forison/youtube/blob/master/index.html" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
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
				<a href="https://github.com/Forison/Using-Bootstrap" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
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
				<a href="https://github.com/Forison/weatherApp" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
						src={javs}
						alt="javascript developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Javascript</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/weatherApp" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
						src={wpacks}
						alt="webpack developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Webpack</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/calculator" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
						src={reactt}
						alt="react developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>React</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/tic-tac-toe" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
						src={ruby}
						alt="ruby developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Ruby</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/social-network" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
						src={rails}
						alt="rails developer"
					/>
				</a>
				<Carousel.Caption>
					<h3>Ruby on rails</h3>
					<p>Click on image to be directed to project associated with skill</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href="https://github.com/Forison/social-network/tree/master/spec/models" target="_blank" rel="noopener noreferrer">
					<img
						className="d-block w-100 showcase"
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
