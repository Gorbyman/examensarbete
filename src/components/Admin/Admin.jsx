<Fragment>
  <Container fluid={true} className="admin-area">
    <Row>
			<Col className="mt-4" xs={{ size: 6, offset: 3 }}>
				<Link tabIndex="-1" className="start-link" to="/" >
					<h4 tabIndex="1" className="btn-start text-center">Till Startsida</h4>
				</Link>
			</Col>
      <Col className="mt-3 overlay" xs={{ size: 10, offset: 1 }}>
      <h1 className="text-center">Uppdatera frågor</h1>
			<p className="text-center">Fyll i samtliga fält och välj vilket nummer frågan ska ha.</p>
				<Col xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }} className="mt-4">
					<Form>
						<FormGroup>
							<Label className="form-label" for="numberSelect">Fråga <span className="small">(välj vilket nummer frågan ska ha)</span>:</Label>
							<Input tabIndex="2" type="select" name="select" id="numberSelect" value={this.selectedNumber} onChange={(e) => this.numberChange({ value: e.target.value })}>
								{this.numberArr.map((number, i) => 
									<option defaultValue={this.selectedNumber} key={i}>{number}</option>
								)}
							</Input>
						</FormGroup>
						<FormGroup>
							<Label className="form-label" for="questionText">Frågans innehåll <span className="small">(här fyller du i frågan)</span>:</Label>
							<Input tabIndex="3" type="textarea" name="text" id="questionText" value={this.questionText} onChange={e => this.questionTextChange(e)} />
							{this.questError && 
								<p className="error mt-1 text-center">Du måste fylla i en fråga</p>
							}
						</FormGroup>
						<FormGroup>
							<Label className="form-label" for="tipText">Tips till användaren <span className="small">(visas i sammanställningen)</span>:</Label>
							<Input tabIndex="4" type="textarea" name="text" id="tipText" value={this.tipText} onChange={e => this.tipTextChange(e)} />
							{this.tipError && 
								<p className="error mt-1 text-center">Du måste fylla i ett tips</p>
							}
						</FormGroup>
						<FormGroup>
							<Label className="form-label" for="weightSelect">Miljöpåverkan <span className="small">(användaren kommer inte se detta)</span>:</Label>
							<Input tabIndex="5" type="select" name="select" id="weightSelect" onChange={(e) => this.weightChange({ value: e.target.value })}>
								{this.weightArr.map((weight, i) => 
									<option key={i} value={weight}>										 
										{weight === 'light' ? 'Liten' : (weight === 'medium' ? 'Mellan' : 'Stor')}
									</option>
								)}
							</Input>
						</FormGroup>
						<FormGroup>
							<Label className="form-label" for="correctAnswerSelect">Rätt svar <span className="small">(användaren kommer inte se detta)</span>:</Label>
							<Input tabIndex="6" type="select" name="select" id="correctAnswerSelect" onChange={(e) => this.answerChange({ value: e.target.value })}>
								<option value='yes'>Ja</option>
								<option value='no'>Nej</option>
							</Input>
						</FormGroup>
						{this.updateSuccess && 
							<h4 className="btn-added float-left mt-3">Tillagd</h4>
						}
						<h4 tabIndex="7" className="btn-submit float-right mt-3" onKeyPress={e => this.keyPress(e)} onClick={e => this.submitQuest(e)}>Lägg till</h4>
					</Form>
				</Col>
      </Col>
    </Row>
  </Container>
</Fragment>