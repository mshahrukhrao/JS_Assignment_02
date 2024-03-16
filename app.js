function checkCharacterType(char) {
    // Check if the input is a digit
    if (!isNaN(parseInt(char))) {
        console.log("The input '" + char + "' is a number.");
    }
    // Check if the input is an uppercase letter
    else if (char >= 'A' && char <= 'Z') {
        console.log("The input '" + char + "' is an uppercase letter.");
    }
    // Check if the input is a lowercase letter
    else if (char >= 'a' && char <= 'z') {
        console.log("The input '" + char + "' is a lowercase letter.");
    }
    else {
        console.log("The input '" + char + "' is not a number or letter.");
    }
}

// Take input from the user
var inputChar = prompt("Enter a character:");

// Call the function to check the type of character
checkCharacterType(inputChar);

