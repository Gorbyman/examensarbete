<Fragment>
	{this.currentQst ?
	<Container fluid={true}>
		<Row className="quiz-area">
			<Col className="qst-area" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }}>
				<div className="image-area" style={{backgroundImage: `url(${this.currentQst.imgPath})`
					? `url(${this.currentQst.imgPath})` :  `url("/images/quiz-images/default.jpg")`
				}}>
					<div className="overlay">
					{/* <img className="image-area" src={this.currentQst.imgPath ? this.currentQst.imgPath :  "/images/quiz-images/default.jpg" } alt="" /> */}
						<h4 className="card-title text-center">Fråga {this.currentQst.number} av {this.quizObj.length}</h4>
						<div className="text-overlay text-center">
							<p className="card-text" >{this.currentQst.text}</p>
						</div>
						<div className="btn-area">
							<h4><span tabIndex="1" className="btn-yes text-center" value="yes" onKeyPress={e => 		this.keyPressYes(e)} onClick={e => this.questAnswered(e)}>Ja</span>
							<span tabIndex="2" className="btn-no text-center" value="no" onKeyPress={e => this.keyPressNo(e)} onClick={e => this.questAnswered(e)}>Nej</span></h4>
						</div>
					</div>
				</div>
				{/* <Card className="card-area">
					<CardImg className="card-image" top width="100%" src={this.currentQst.imgPath ? this.currentQst.imgPath :  "/images/quiz-images/default.jpg" } alt="" />
					<CardBody>
						<CardTitle className="card-title text-center">Fråga {this.currentQst.number} av {this.quizObj.length}</CardTitle>
						<CardText className="card-text" >{this.currentQst.text}</CardText>
							<h4><span tabIndex="1" className="btn-yes text-center" value="yes" onKeyPress={e => this.keyPressYes(e)} onClick={e => this.questAnswered(e)}>Ja</span>
							<span tabIndex="2" className="btn-no text-center" value="no" onKeyPress={e => this.keyPressNo(e)} onClick={e => this.questAnswered(e)}>Nej</span></h4>
					</CardBody>
				</Card> */}
			</Col>
			<Col className="background"></Col>
		</Row>
	</Container>
	:
	''}
</Fragment>