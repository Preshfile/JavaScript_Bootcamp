Welcome to My Levenshtein

Task
The task of this project is to create a function called my_spaceship that takes a string as input and returns the final position and direction of a spaceship that follows a series of commands. The spaceship is initially located at (0, 0), facing up.

Description
The my_spaceship function works by taking a string input and processing it character by character. The string is first converted to uppercase. The function then initializes an array called rotation that contains the possible directions the spaceship can be facing: "up", "down", "left", and "right". The function also sets the starting direction to "up" (which is the third index in the rotation array) and initializes the x and y coordinates to 0.

The function then loops through each character in the input string, checking if the character is a valid command ("R", "L", or "A"). If the character is not a valid command, the function outputs "invalid" to the console. If the character is a valid command, the function updates the direction and/or position of the spaceship based on the current direction and the command.

After processing all the characters in the input string, the function outputs a string containing the final x and y coordinates of the spaceship and its direction.

Installation
This project does not require any installation. Simply copy and paste the my_spaceship function into your JavaScript code to use it.

Usage
To use the my_spaceship function, simply call it with a string argument containing the commands for the spaceship. For example:

console.log(my_spaceship("RARALAL"));

This will output the final position and direction of the spaceship after following the commands "RARALAL". The output will be in the format {x: 0, y: -2, direction: 'down'}.

The Core Team
Authored by Precious Oranye.

