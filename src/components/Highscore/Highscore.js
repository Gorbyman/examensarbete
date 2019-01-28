import './Highscore.scss';
@inject ('userStore') @observer export default class Highscore extends Component {
  
  @observable userScores = [];

  async start(){
    let res = await fetch('/api/getScores')
    this.userScores = await res.json();
  }

}