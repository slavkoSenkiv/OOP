class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

const user1 = new User('slav@gmail', 'Slav');
const user2 = new User('pit@gmail', 'Pit');

console.log(user1.name, user2.name);
console.log(user1.score);
user1.login().updateScore().updateScore().updateScore().logout();
console.log(user1.score);