// factory functuion
/* function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw ' + radius + ' radius');
        }
    }

} 
const circle = createCircle(1);
//circle.draw();
*/

//constructor function
/* function Circle(radius){
    this.rad = radius,
    this.draw = function(){
        console.log('draw ' + this.rad + ' radius');
    }
}

const circle2 = new Circle(1);
circle2.draw(); */

//string code?
/* const Circle1 = new Function('radius', `

his.rad = radius,
    this.draw = function(){
        console.log('draw ' + this.rad + ' radius');
    }
`);

const circle3 = new Circle1(3);
circle3.draw(); */



// values vs refferences in primitives vs objects
/* let x = 10;
let y = x;
x = 20;
console.log('x =', x, ' y =', y);

let a = {value: 10};
let b = a;
a.value = 20;
console.log('a =', a.value, ' b =', b.value); */

/* let num = 10;
function increase(x){ return ++x };
let newNum = increase(num);
console.log(newNum); */

/* let number = 10;
function increase(number){ number++ };
increase(number);
console.log(number); */

/* let obj = {value: 10};
function increase(obj){ obj.value++ };
increase(obj);
console.log(obj.value); */


//adding and accessing properties dynamically
/* function Circle(radius){
    this.rad = radius,
    this.draw = function(){
        console.log('draw ' + this.rad + ' radius');
    }
}

const circle3 = new Circle(1);
circle3.draw();

circle3.location = {x: 1};
circle3['location'] = {x: 2};

console.log(circle3.location.x);


for (let key in circle3){
    console.log(key, circle3[key]);
}
for (let key in circle3){
    if (typeof circle3[key] !== 'function')
    console.log(key, circle3[key]);
} */

//privat vs public properties and methods
function Circle(radius){
    this.rad = radius;
    //this.defLocation = {x:0, y:0};
    let defLocation = {x:0, y:0};
    let computeOptimalLocation = function(factor){
        console.log(defLocation.x + factor, defLocation.y + factor);
    }
    this.draw = function(){
        this.computeOptimalLocation(factor);
        console.log('draw ' + this.rad + ' radius');
    }
}

const circle4 = new Circle(10);
//console.log(circle4.defLocation);
//circle4.computeOptimalLocation(1);
