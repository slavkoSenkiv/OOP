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


class Admin extends User {
    deleteUser(user){
        console.log('deleteing user', user.email);
        users = users.filter(u => u.email != user.email);
    }
}

const user1 = new User('slav@gmail', 'Slav');
const user2 = new User('pit@gmail', 'Pit');
const admin = new Admin('admin@gmail', 'Den')

/* console.log(user1.name, user2.name);
console.log(user1.score);
user1.login().updateScore().updateScore().updateScore().logout();
console.log(user1.score);
 */

let users = [user1, user2, admin];

/* console.log('users', users.forEach(user=>user.name));
admin.deleteUser(user2);
console.log('users', users.forEach(user=>user.name)); */