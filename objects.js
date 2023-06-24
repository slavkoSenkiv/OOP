class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

const user1 = new User('slav@gmail', 'Slav');
const user2 = new User('pit@gmail', 'Pit');

console.log(user1.name, user2.name);
user1.login();
user2.logout();