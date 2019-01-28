import './Summary.scss';
@inject('userStore') @observer export default class Summary extends Component {
  
  async start(){
  }

  sendResult(){
    let tips = [];
    for(let obj of this.props.userStore.tipArr){
      tips.push(obj.tip);
    }
    fetch('/api/result',
    {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ tips: tips, name: this.props.userStore.currentUserName, mail: this.props.userStore.currentUserMail }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .catch((err) => {
      console.log('error', err);
    });
  }

}