
class UserStore {
  @observable isLoggedIn = false;
  @observable tipArr = [];
  @observable currentUserName = '';
  @observable currentUserMail = '';
  @observable averageScore = '';
  @observable score = '';
  @observable totalScore = '';

  addTip(tip){
    this.tipArr.push(tip);
  }

  setUserInfo(name, mail){
    console.log(name, mail);
    this.currentUserName = name.name || name;
    this.currentUserMail = mail || name.mail;
    this.isLoggedIn = true;
    console.log(this.currentUserName, this.currentUserMail, this.isLoggedIn);
  }

  unregisteredUser(){
    this.isLoggedIn = true;
  }

  setScore(averageScore, score, totalScore){
    this.averageScore = averageScore;
    this.score = score
    this.totalScore = totalScore;
  }

}

export const userStore = new UserStore();