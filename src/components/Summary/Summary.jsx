<Fragment>
{/* ska bara visas om frågorna är på max.length*/}
  <Container fluid={true} className="summary-area">
    <Row>
      <Col className="my-5 overlay" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
				<h1>Sammanfattning:</h1>
				<h2 className="mt-3 mb-3">Din poäng: {this.props.userStore.score} av {this.props.userStore.totalScore}!</h2>
				{this.props.userStore.tipArr.length === 0 ?
					<h2>Du är sannerligen en äkta miljöhjälte som alltid gör gynnsamma val för vår miljö!</h2>
					:
					(this.props.userStore.tipArr.length === 1 ?
						<Fragment>
							<h2>Du gör många medvetna val där du tänker mycket på miljön! Här är ett tips för dig: </h2>
						</Fragment>
						:
						<Fragment>
							{this.props.userStore.score > this.props.totalScore * 0.4 ?
								<h2>Du gör flera val som är gynnsamma för miljön, här är några tips för att kunna göra ännu mer: </h2>
							:
								<h2>Du kan göra betydligt mer för att förbättra ditt ekologiska avtryck, här kommer några tips: </h2>
							}
						</Fragment>
					)
				}
				{this.props.userStore.tipArr.map((tipArr, i) =>
					<p key={i}>{tipArr.tip}</p>
				)}
				{this.props.userStore.tipArr.length > 0 ?
					<h4 tabIndex="1" className="btn-mail text-center mt-4" onClick={e => this.sendResult(e)}>Maila tips till mig</h4>
				:
					''
				}
				<Link className="highscore-link" to="/highscore" >
					<h4 tabIndex="2" className="btn-highscore text-center mt-3">Miljöhjältar</h4>
				</Link>
      </Col>
    </Row>
  </Container>
</Fragment>