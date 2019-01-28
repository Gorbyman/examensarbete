import './Admin.scss';
@observer export default class Admin extends Component {
  
  @observable numberArr = [];
  @observable weightArr = ['light', 'medium', 'heavy'];
  @observable questionText = '';
  @observable questError = false;
  @observable tipText = '';
  @observable tipError = false;
  @observable numberSelected = 1;
  @observable weightSelected = 'light';
  @observable answerSelected = 'yes';
  @observable selectedNumber = 1;
  @observable updateSuccess = false;
  @observable maxCharacters = 65;

  async start(){
    this.numberArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  }

  numberChange(e){
    this.numberSelected = e.value;
    this.selectedNumber = this.numberSelected;
  }

  weightChange(e){
    this.weightSelected = e.value;
  }

  answerChange(e){
    this.answerSelected = e.value;
  }

  questionTextChange(e){
    this.questionText = e.currentTarget.value;
    this.questError = false;
  }

  tipTextChange(e){
    this.tipText = e.currentTarget.value;
    this.tipError = false;
  }

  keyPress(e){
    if (e.charCode === 32 || 13){
      this.submitQuest();
    }
  }

  submitQuest(e){
    if(this.selectedNumber < 20){
      this.selectedNumber++;
    }
    if(!this.questionText){
      this.questError = true;
      return;
    };
    if(!this.tipText){
      this.tipError = true;
      return;
    };

    fetch(`/api/updateQuestion/${this.numberSelected}`, {
      method: 'PUT',
      body: JSON.stringify({
        text: this.questionText,
        weight: this.weightSelected,
        correctAnswer: this.answerSelected,
        tip: this.tipText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      })
    this.updateSuccess = true;
    setTimeout(() => {
      this.updateSuccess = false;
    }, 2000)
  }

}