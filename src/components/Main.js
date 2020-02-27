import React, { Component } from 'react';
import Carousel from './Carousel';
import coders from '../skills/coders.png';
import recom from '../skills/recom.png';
import privateEvent from '../skills/pe.png';
import axios from 'axios';

export class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sender: '',
			message: '',
			responseFrom: '',
			sent: null,
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
	handleEmailChange = (e) => {
		this.setState({
			sender: e.target.value
		})
	}
	handleMessageChange = (e) => {
		this.setState({
			message: e.target.value
		});
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ isLoading: true })
		const { sender, message } = this.state;
		const response = await axios.post('https://myestateapi.herokuapp.com/alerts', { sender, message });
		if (response.status === 201) {
			this.setState({
				sent: true,
				responseFrom: "message is sent",
			});
			setTimeout(() => {
				window.location.reload();
			}, 2000)
		} else {
			this.setState({
				sent: false,
				responseFrom: "oops message not sent",
			});
		}
	}
	render() {
		const { show, responseFrom, isLoading } = this.state;
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-4 col-lg-5 left">
						<h1 className="text-center mt-4 header">Hi, I am Addo.<br /> A passionate fullstack web developer.</h1>
						<div className="sub">
							<p>I am currently working as a technical support engineer and a mentor at <a href="https://support.microverse.org/en/articles/2476189-what-is-the-microverse-full-time-program">microverseInc.</a></p>
							<p>I enjoy building responsive web applications for clients and people all over the world.</p>
							<p>Follow my work, words and photos below :</p>
							<div className="d-flex justify-content-around mx-auto">
								<a href="https://github.com/Forison" target="_blank" rel="noopener noreferrer" className="contact p-1">
									Github
									</a>
								<a href="https://www.linkedin.com/in/forison/" target="_blank" rel="noopener noreferrer" className="contact p-1">
									LinkedIn
									</a>
								<a href="https://twitter.com/addo_forison" target="_blank" rel="noopener noreferrer" className="contact p-1">
									Twitter
									</a>
								<a href="https://www.hackernoon.com/implementing-singly-linked-list-with-ruby-om2df3ya6" target="_blank" rel="noopener noreferrer" className="contact p-1">
									Hackernoon
									</a>
								<a href="https://medium.com/@forison/basic-positioning-of-elements-on-a-web-page-3d6be729a75a" target="_blank" rel="noopener noreferrer" className="contact p-1">
									Medium
									</a>
							</div>
						</div>
						{show ?
							(<div className="position-absolute bg-light p-2 send shadow-lg send-wrap">
								<form className="form mt-5" onSubmit={this.handleSubmit}>
									<div className="form-group">
										<input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="name@example.com" />
									</div>
									<div className="form-group">
										<textarea onChange={this.handleMessageChange} className="form-control" placeholder="enter message here" rows="3"></textarea>
									</div>
									<div className="row justify-content-center mt-2">
										<button type="submit" className="btn btn-success say-hello mt-3" disable={isLoading}>
											Send
					          </button>
										<button className="btn btn-red say-hello mt-3" onClick={this.displayModal}>
											Cancel
					          </button>
									</div>
									{!responseFrom.includes('oops') ?
										(<span className="text-success">{responseFrom}</span>)
										:
										(<span className="text-danger">{responseFrom}</span>)
									}
								</form>
							</div>)
							:
							(<div>
								<div className="row justify-content-center">
									<button
										type="submit"
										className="btn btn-primary say-hello mt-1"
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
									<div className="row justify-content-center p-1">
										<a href="https://forison.github.io/Using-Bootstrap/" className="view"> View App on desktop and mobile</a>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-6">
									<embed src="https://guarded-harbor-05894.herokuapp.com/" className="sector" />
									<div className="row justify-content-center p-1">
										<a href="https://guarded-harbor-05894.herokuapp.com/" className="view"> View App on desktop and mobile</a>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-9 mx-auto">
									<img src={privateEvent} className="img-fluid sector" alt="private event page" />
									<div className="row justify-content-center p-1">
										<a href="https://nosebook.herokuapp.com/" className="view"> View App on desktop </a>
									</div>
								</div>
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
