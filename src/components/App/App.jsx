<Router>
  {/* MobX observable style needs spread wrapping */}
  <div className="App d-flex flex-column" style={{ ...this.style }}>
    <Container fluid={true} tag="main" className="flex-grow-1">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/highscore" component={Highscore} />
        {/* 404 */}
        <Route>
          <h1>This is not the site you are looking for</h1>
          <p>Use the force to find the right site, or type a correct URL</p>
        </Route>
      </Switch>
    </Container>
  </div>

</Router>
