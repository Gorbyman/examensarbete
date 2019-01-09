import './Login.scss';
@observer export default class Login extends Component {
  
  @observable username = '';
  @observable email = '';
  @observable validEmail = true;

  async start(){
  }

  usernameChange(e) {
    this.username = e.currentTarget.value;
    console.log(this.username);
  }

  emailChange(e) {
    this.email = e.currentTarget.value;
    this.validateEmail();
    console.log(this.validEmail);
  }

  validateEmail() {
    return this.validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
  }

  user(username, email) {
    fetch('/api/newusers',
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ username, email }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      // .then(res => {
      //   if (res.success) {
      //     //this.props.userStore.setUserAndIsLoggedIn({ user: res.user, isLoggedIn: true });
      //     //this.props.applicationStateStore.setSystemInfo();
      //     //this.props.userStore.fetchContact();
      //   } else {
      //     if(res.userResult){
      //       this.usernameExist = true;
      //     }
      //     else {
      //       this.emailExist = true;
      //     }
      //   }
      // })
        .catch((err) => {
        console.log('error', err);
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.user(this.username, this.email);
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    this.username = '';
    this.email = '';
  }

}