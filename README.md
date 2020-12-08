## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) Advanced React Calculator

Remember the calculator we made during the in-class lab? Well, let's take it to the next level! 

Let's try building an app like the one that comes default on your Mac.

<img src="https://res.cloudinary.com/briezh/image/upload/v1556236421/Screen_Shot_2019-04-25_at_4.53.21_PM_iokcbb.png" alt="Mac Calc App" height="250px" width="150px" />

## Prerequisites

You will need to know the following concepts before attempting this challenge:

* ES6 Arrow Functions
* React events (such as onClick)
* React State

## Steps and Set Up

* `Fork` and `Clone` this repository
* Run `npm install` to install dependencies
* Run `npm start` to see your basic create-react-app boilerplate
* Implement the requirements below AND one of the bonuses (or more if you have time!)
* Push the code back up to your fork
* Make a pull request against the base fork 
* 🎉 Celebrate 🎉

## Requirements and Planning Process

You will need to implement the following:

* AC (Clear) button (clear the state)
* 4 main operators `+ - / *` (store operator in state)
* 0-9 buttons (store numerical value in state)
* Equals button (evaluate the answer based on your current state)
* Error messages if the user makes a mistake (such as trying to use two operators)
* A display that shows the current number or current state
   * You can implement it to match the Mac built-in behavior showing the current value only no operator 
   * Alternatively you can show the whole equation if you'd like (as on a graphing calculator)
* Basic styling to match the Mac built-in app 
    * Orange operator buttons
    * Dark gray display
    * Light gray number buttons
    
**Avoid some potential pitfalls**

* Ensure you can use numbers with multiple digits (e.g., can you add `10 + 20`?)
   * Make sure you are concatenating each number pressed until you get an operator
* Don't accept `0` as a first number (e.g., `002` should not be allowed)
   * Possible exception - if you implement floating point numbers as part of the bonus, you may have a `0` preceeding the decimal point. Still, while `0.1` is valid, `0000.1` is not, so be sure to only add the `0` in front if the `.` is pressed first!

## Bonus

Choose any of the following:

* Alter your app's logic for the `-` operator to allow negative numbers to be input
* Implement the +/- button that switches a number from negative to positive or vice versa
* Implement the `%` button either...
    * As a true modulus operator
    * As a percent button, like it is on the Mac program (just divides current number by 100)
* Implement the floating point `.` button in order to support decimals. 
    * Don't allow more than one decimal per number!
