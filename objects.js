const userOne = {
    mail: 'slav.senkiv@gmail.com',
    name: 'slav',
    login(){
        console.log(this.mail, 'has logged in');
    },
    logout(){
        console.log(this.mail, 'has logged out');
    }
}

console.log(userOne.mail);
console.log(userOne.name);
userOne.login();
userOne.logout();

userOne.name = 'Pit';
console.log(userOne.name);
const prop = 'name'
console.log(userOne[prop]);