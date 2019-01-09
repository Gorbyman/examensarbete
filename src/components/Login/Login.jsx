<Fragment>
  <div className="body-area">
  <Row>
      <Col className="mt-5 overlay msg-area" sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }}>
        <h1>Hur klimatsmart är du?</h1>
        <p>Testa ditt avtryck på miljön få tips om förändringar som kan minska påverkan på miljön!</p>
        <Form className="loginForm px-5" onSubmit={this.onSubmit}>
          <FormGroup className="mt-4">
            <Label for="username" className="sr-only">Användarnamn</Label>
            <Input tabIndex="1" type="text" id="username" placeholder="Användarnamn" value={this.username} onChange={e => this.usernameChange(e)} />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="sr-only">Email</Label>
            <Input tabIndex="2" type="email" id="email" placeholder="Email" value={this.password} onChange={e => this.emailChange(e)} />
          </FormGroup>
          <div className="text-center mb-3">
            <Button tabIndex="3" className="btn-start">Starta</Button>{' '}
            {!this.validEmail &&
            < Alert className="my-3 alert-color">
              Var vänlig kontrollera email
            </Alert>
          }
          </div>
        </Form>
      </Col>
    </Row>
  </div>
</Fragment>