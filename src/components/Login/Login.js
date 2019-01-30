import './Login.scss';
@inject('userStore') @observer export default class Login extends Component {
  
  @observable username = '';
  @observable email = '';
  @observable validEmail = true;

  async start(){
  }

  usernameChange(e) {
    this.username = e.currentTarget.value;
  }

  emailChange(e) {
    this.email = e.currentTarget.value;
    this.validateEmail();
  }

  validateEmail() {
    // eslint-disable-next-line
    return this.validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
  }

  addUser(username, email) {
    fetch('/api/addUser',
      {
        credentials: 'include',
        method: 'POST',
        body:JSON.stringify({username: username, email: email}),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res=>res.json())
      .then(res => {
        if (res.admin) {
          this.props.history.push(`/admin`);
          return;
        }
        if (res.success) {
          this.props.userStore.setUserInfo(username, email);
          this.props.history.push(`/quiz`);
        }
        else {
          this.props.userStore.unregisteredUser();
          this.props.history.push(`/quiz`);
        }
      })
      .catch((err) => {
        console.log('error', err);
      });

  }

  keyPress(e) {
    if (e.charCode === 32 || 13){
      this.newQuiz();
    }
  }

  newQuiz(e) {
    if(!this.username || !this.email){
      return;
    }
    this.addUser(this.username, this.email);
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    this.username = '';
    this.email = '';
  }

}