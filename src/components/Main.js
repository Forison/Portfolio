import React, { Component } from 'react';
import Carousel from './Carousel';
import coders from '../skills/coders.png';
import recom from '../skills/recom.png';
import privateEvent from '../skills/pe.png';


export class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: false,
			show: false
		}
	}
	displayModal = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
			show: !prevState.show
		}));
	}
	render() {
		const { show } = this.state;
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-4 col-lg-5 left">
						<h1 className="text-center mt-4 header">Hi, I am Addo.<br /> I am a passionate fullstack web developer.</h1>
						<div className="sub">
							<p>I am currently working as a technical support engineer and a mentor at <a href="#">microverseInc.</a></p>
							<p>I enjoy building responsive web applications for clients and people all over the world.</p>
							<p>Follow my work, words and photos below :</p>
							<div className="d-flex justify-content-around">
								<a href="https://github.com/Forison" target="_blank" rel="noopener noreferrer" >Github</a>
								<a href="https://www.linkedin.com/in/forison/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
								<a href="https://twitter.com/addo_forison" target="_blank" rel="noopener noreferrer" >Twitter</a>
								<a href="https://www.hackernoon.com/implementing-singly-linked-list-with-ruby-om2df3ya6" target="_blank" rel="noopener noreferrer" >Hackernoon</a>
								<a href="https://medium.com/@forison/basic-positioning-of-elements-on-a-web-page-3d6be729a75a" target="_blank" rel="noopener noreferrer" >Medium</a>
							</div>
							<br />

						</div>
						{show ?
							(<div className="position-absolute bg-light p-2 send shadow-lg send-wrap">
								<form className="form mt-5">
									<div class="form-group">
										<input type="email" class="form-control" placeholder="name@example.com" />
									</div>
									<div class="form-group">
										<textarea class="form-control" placeholder="enter message here" rows="3"></textarea>
									</div>
									<div class="row justify-content-center mt-2">
										<button type="submit" class="btn btn-success say-hello mt-3" onClick={this.displayModal}>
											Send
					          </button>
										<button type="submit" class="btn btn-red say-hello mt-3" onClick={this.displayModal}>
											Cancel
					          </button>
									</div>
								</form>
							</div>)
							:
							(<div>
								<div class="row justify-content-center mt-2">
									<button
										type="submit"
										class="btn btn-primary say-hello mt-1"
										onClick={this.displayModal}>
										Say hello
									</button>
								</div>
							</div>
							)
						}
					</div>
					<div className="col-12 col-sm-12 col-md-8 col-lg-7 overflow-auto right p-0">
						<div className="skills">
							<h2 className="p-3"> Skills</h2>
							<div className="row mx-auto">
								<div className="col-12 col-sm-6 col-md-4 col-lg-12">
									<div >
										<Carousel />
									</div>
									<div className="clearFix"></div>
								</div>

							</div>
						</div>
						<div className="project">
							<h2 className="p-3">Recent works</h2>
							<div className="row mx-auto">
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<embed src="https://forison.github.io/Using-Bootstrap/" className="sector" />
									<a href="https://forison.github.io/Using-Bootstrap/" className="view"> View on desktop and mobile</a>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<embed src="https://guarded-harbor-05894.herokuapp.com/" className="sector" />
									<a href="https://guarded-harbor-05894.herokuapp.com/" className="view"> View on desktop and mobile</a>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<embed src="https://raw.githack.com/Forison/battleShip/battleship/dist/index.html" className="sector" />
									<a href="https://raw.githack.com/Forison/battleShip/battleship/dist/index.html" className="view"> View on desktop</a>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<embed src="https://forison.github.io/custom-grid-based-framework/" className="sector" />
									<a href="https://forison.github.io/custom-grid-based-framework/" className="view"> View on desktop and mobile</a>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<embed src="https://raw.githack.com/Forison/Js-to-do-list/homepage/dist/index.html" className="sector" />
									<a href="https://raw.githack.com/Forison/Js-to-do-list/homepage/dist/index.html" className="view"> View on desktop</a>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<img src={privateEvent} className="img-fluid" />
									<a href="https://eventiaproject.herokuapp.com/login" className="view"> View on desktop and mobile</a>
								</div>
								<p className="text-center p-3 mt-3">
									Click on tile to be directed to view project.
								</p>
							</div>
						</div>
						<div className="pre-footer">
							<h2 className="p-3"> Collaboration</h2>
							<p className="text-center p-3 mt-3">
								I'm proud to have collaborated(done mainly on github) with some awesome developers from different parts of the world on projects and  on solving data structures challenges.
								<br />Developers from :</p>
							<div className="d-flex justify-content-around">
								<a href="https://raw.githack.com/Forison/Js-to-do-list/homepage/dist/index.html" rel="noopener noreferrer" target="_blank">Belarus</a>
								<a href="https://bookstore-ad1.herokuapp.com/" rel="noopener noreferrer" target="_blank">India</a>
								<a href="https://github.com/Forison/tic-tac-toe" rel="noopener noreferrer" target="_blank">Liberia</a>
								<a href="https://eventiaproject.herokuapp.com/" rel="noopener noreferrer" target="_blank">Spain</a>
								<a href="https://forison.github.io/custom-grid-based-framework/" rel="noopener noreferrer" target="_blank">Nigeria</a>
							</div>
							<br />
						</div>
						<div className="my-footer">
							<h2 className="p-3"> Testimonies</h2>
							<div className="row mx-auto">
								<div className="col-12 col-sm-12 col-md-12 col-lg-12">
									<div className="testimony-wrapper">
										<img src={recom} alt="coders io ranking" className="img-fluid" />
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-12">
									<div className="testimony-wrapper">
										<img src={coders} alt="coders io ranking" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main;
