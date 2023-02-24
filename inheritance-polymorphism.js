//1. Create a class called "Shape" whose constructor takes one parameter:- colour
// Assign "colour" to the instance of Shape with a default value of "Transparent". 
//Add a "type" property to "this" with a default value of "Shape"
//2. Add a method to "Shape" called "describe" that will log out the following to the console:"A ${this.colour} ${this.type}"

class Shape{
    constructor(colour){
        this.colour = 'transparent';
        this.type = 'Shape';
    }
    describe(){
        console.log(`A ${this.colour} ${this.type}`);
    }
}
const shape = new Shape('red');
shape.describe()

// 3. Create a class called "Square" whose constructor takes 2 parameters (Square has to extend Shape):
//- colour
//- sideLength
//Call the super constructor with "colour"
//Assign "sideLength" to the instance of "Square"
//Assign "Square" to the "type" property
//4. Add an "area" method to "Square" that will calculate and return the total area of the square.
//(Area of a square is: sideLength * sideLength)

class Square extends Shape{
    constructor(colour, sidelength){
        super(colour);
        this.sidelength = sidelength;
        this.type = 'Square';
    }
    area(){
        return this.sidelength*this.sidelength;
    }
}
const sq = new Square('blue',10);
console.log(sq.area())

//5. Create a class called "Rectangle" whose constructor takes 3 parameters (Rectangle has to extend Shape):
//- colour
//- width
//- height
//Call the super constructor with "colour"
//Assign all of these to the instance of "Rectangle"
//Assign "Rectangle" to the "type" property
//6. Add an "area" method to "Rectangle" that will calculate and return the total area of the square.
//(Area of a rectangle is: width * height)
class Rectangle extends Shape{
    constructor(colour, width, height){
        super(colour);
        this.width = width;
        this.height = height;
        this.type = 'Rectangle'
    }
    area(){
        return this.width*this.height;
    }
}
const rect = new Rectangle('purple',20,30);
console.log(rect.area())

// 7. Run the following code and explain it in as much technical detail as you can:

const square = new Square("blue", 5);
// Here, a new object called 'square' is created and passed with parameters 'blue' and '5'.
// This creates an instance of the 'Square' class and assign its properties say 'colour' as 'blue' and 'sidelength' as 5

const rectangle = new Rectangle("red", 5, 6);
// Here, a new object called 'rectangle' is created and passed with parameters 'red', 5 and 6.
// This creates an instance of the 'Rectangle' class and assigns its properties say 'colour' as 'red', width as 5 and height as 6.

console.log( square.area() ); // 25
// This statement calls the method called 'area' of the 'square' object which returns the square of its sidelength

console.log( rectangle.area() ); // 30
// This statement calls the method call 'area' of the 'rectangle' object which returns twice the product of its width and height

for ( const shape of [square, rectangle] ) shape.describe();
// this calls the describe method of both 'square' and 'rectangle' object which prints the statement as
// 'A transparent square' and 'A transparent rectangle' since the colour of the super class is called in each of its constructor.
