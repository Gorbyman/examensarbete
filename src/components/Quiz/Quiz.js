import './Quiz.scss';
@inject('userStore') @observer export default class Quiz extends Component {

  @observable currentQst = '';
  @observable currentQstNr = 0;
  
  async start() {
    let res = await fetch('/api/getQuestions')
    this.quizObj = await res.json();
    this.currentQst = this.quizObj[this.currentQstNr];
  }

  keyPressYes(e){
    if (e.charCode === 32 || 13){
      this.questAnswered(e);
    }
  }

  keyPressNo(e){
    if (e.charCode === 32 || 13){
      this.questAnswered(e);
    }
  }

  questAnswered(e) {
    if((e.target.className.includes('btn-no') && (this.currentQst.correctAnswer === 'yes')) ||
    (e.target.className.includes('btn-yes') && (this.currentQst.correctAnswer === 'no'))
    ){
      this.props.userStore.addTip(this.currentQst);
    }
    if(this.currentQstNr < (this.quizObj.length -1)){
      this.currentQstNr ++;
      this.currentQst = this.quizObj[this.currentQstNr];
    }
    else {
      this.props.history.push({
        pathname: '/summary',
      })
      this.countScore();
    }
  }

  countScore(){
    let score = 0;
    let lightPoint = 10;
    let mediumPoint = 30;
    let heavyPoint = 50;
    let averageScore = mediumPoint * this.quizObj.length;
    for(let points of this.quizObj){
      if(points.weight === 'light'){
        score += lightPoint;
      }
      else if(points.weight === 'medium'){
        score += mediumPoint;
      }
      else{
        score += heavyPoint;
      }
    }
    let totalScore = score;
    for(let tip of this.props.userStore.tipArr){
      if(tip.weight === 'light'){
        score -= lightPoint;
      }
      else if(tip.weight === 'medium'){
        score -= mediumPoint;
      }
      else{
        score -= heavyPoint;
      }
    }
    this.props.userStore.setScore(averageScore, score, totalScore);
    score = parseInt(score, 10);
    if(this.props.userStore.currentUserMail){
    fetch(`/api/users/${this.props.userStore.currentUserMail}`, {
      method: 'PUT',
      body: JSON.stringify({
        score: score
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      })
    };
  }

}