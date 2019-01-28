<Router>
    <Container fluid={true} tag="main" className="flex-grow-1 app-area">
      <Row>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/highscore" component={Highscore} />
          <Route path="/summary" component={Summary} />
          <Route path="/admin" component={Admin} />
          {/* 404 */}
          <Route>
            <h1>This is not the site you are looking for</h1>
            <p>Use the force to find the right site, or type a correct URL</p>
          </Route>
        </Switch>
      </Row>
    </Container>
</Router>
