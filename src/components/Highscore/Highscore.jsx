<Fragment>
  <Container fluid={true} className="highscore-area">
    <Row>
      <Col className="mt-5 overlay" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
      <h1 className="text-center mb-4">Miljöhjältar</h1>
      {this.userScores.map((user, i) =>
        <div key={i}>
          <h4>{i+1}. {user.username} <span className="float-right">{user.points} poäng</span></h4>
          <hr/>
        </div>
      )}
      {this.props.userStore.totalScore && 
        <h4 className="mt-4">Din poäng: {this.props.userStore.score} av {this.props.userStore.totalScore}</h4>
      }
        <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }} className="mt-4">
          <Link className="d-lg-none start-link-lg mt-4" to="/" >
            <h4 tabIndex="4" className="btn-start text-center">Startsida</h4>
          </Link>
        </Col>
      </Col>
      <Link to="/" >
        <h4 tabIndex="4" className="d-none d-lg-block btn-md-start text-center">Startsida</h4>
      </Link>
    </Row>
  </Container>
</Fragment>