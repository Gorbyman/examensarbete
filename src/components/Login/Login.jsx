<Fragment>
  <Container fluid={true} className="body-area">
    <Row>
      <Col className="mt-5 overlay" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <h1 className="mt-2">Hur klimatsmart är du?</h1>
        <Col sm={{ size: 10, offset: 1 }}>
          <h4 className="mt-4">Testa ditt avtryck på miljön och få tips om förändringar som kan minska påverkan på miljön!</h4>
          <p className="mt-3">Testet består av 20 frågor som sedan sammanställs för att visa vilket ekologiskt avtryck du gör genom dina val. Välj det svaret som är närmast ditt beteende och så ärligt som möjligt. Sedan får du reda på resultatet och eventuella möjligheter till förbättring. Dessa kan du även välja att få mailade till dig. Du kan göra frågorna flera gånger om du vill men endast ditt första resultat kommer att sparas. För att se alla härliga miljöhjältar, klicka på länken!</p>
        </Col>
        <Col sm={{ size: 10, offset: 1}} lg={{ size: 8, offset: 2 }}>
          <Form className="loginForm px-2" onSubmit={this.onSubmit}>
            <FormGroup className="mt-4">
              <Label for="username" className="sr-only">Användarnamn</Label>
              <Input tabIndex="1" type="text" id="username" placeholder="Användarnamn" value={this.username} onChange={e => this.usernameChange(e)} />
            </FormGroup>
            <FormGroup>
              <Label for="email" className="sr-only">Email</Label>
              {!this.validEmail ?
              <Input tabIndex="2" type="email" id="email" className="email-error" placeholder="Email" value={this.password} onChange={e => this.emailChange(e)} />
              :
              <Input tabIndex="2" type="email" id="email" placeholder="Email" value={this.password} onChange={e => this.emailChange(e)} />
              }
              {!this.validEmail &&
              <p className="text-center small my-1 py-1 small-error">
                Var vänlig kontrollera email
              </p>
              }
            </FormGroup>
          </Form>
        </Col>
        <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
          {!this.username || !this.email ?
            <h4 className="text-center mb-3 btn-not-ready">Fyll i uppgifterna</h4>
            :
            <h4 tabIndex="3" className="text-center mb-3 btn-start" onKeyPress={e => this.keyPress(e)} onClick={e => this.newQuiz(e)}>Starta</h4>
          }
          <Link className="d-lg-none highscore-link-lg" to="/highscore" >
            <h4 tabIndex="4" className="btn-highscore text-center">Miljöhjältar</h4>
          </Link>
        </Col>
      </Col>
      <Link to="/highscore" >
        <h4 tabIndex="4" className="d-none d-lg-block btn-md-highscore text-center">Miljöhjältar</h4>
      </Link>
    </Row>
  </Container>
</Fragment>