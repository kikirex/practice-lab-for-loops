let customerAge = 10; 

// Using ternary operator to determine ticket eligibility
let ticketMessage = (customerAge <= 12) ? "Children's discount applied!" : "Regular ticket price applies.";
console.log(ticketMessage);

let foodOption = prompt("Please enter a food option (rice, beans, yam, spaghetti):").toLowerCase();
let price;
let welcomeMessage = "Welcome to FreshBite Restaurant!";
let thanksMessage = "Thank you for your order!";

switch (foodOption) {
    case "rice":
        console.log(welcomeMessage);
        console.log("price =  ₦3500");
        console.log("selected Meal: rice");
        console.log(thanksMessage);
        break;
    case "beans":
        console.log(welcomeMessage);
       console.log("Selected Meal price =  ₦2500");
        console.log("selected Meal: beans");
       console.log(thanksMessage);
        break;
    case "yam":
        console.log(welcomeMessage);
       console.log("Selected Meal price =  ₦3000");
        console.log("selected Meal: yam");
        break;
    case "spaghetti":
        console.log(welcomeMessage);
       console.log("Selected Meal price =  ₦4000");
        console.log("selected Meal: spaghetti");
        console.log(thanksMessage);
        break;
    default:
        console.log("Sorry, this meal is unavailable.");
}


let studentName = prompt("Enter the student's name:");
let examScore = Number(prompt("Enter the student's examination score (0-100):"));
let attendancePercentage = Number(prompt("Enter the student's attendance percentage (0-100):"));

// Validate inputs
if ((examScore) || examScore < 0 || examScore > 100) {
    console.log("Invalid examination score. Please enter a value between 0 and 100.");
} else if ((attendancePercentage) || attendancePercentage < 0 || attendancePercentage > 100) {
    console.log("Invalid attendance percentage. Please enter a value between 0 and 100.");
} else {
    // Check scholarship eligibility
    if (examScore >= 80 && attendancePercentage >= 90) {
        console.log(`Congratulations! ${studentName} qualifies for a scholarship.`);
    } else {
        console.log(`${studentName} does not qualify for a scholarship.`);
    }
}



// Javascript Home Assignment: Decision-Making Programmes1

// Task 1: Movie Ticket Eligibility (Ternary Operator)
// A cinema wants a programme that determines whether a customer qualifies for a discounted movie ticket.

// Customers aged 12 or below qualify for a children's discount.

// Instructions:

// Create a variable called customerAge.


// Assign an age to the variable.


// Use a ternary operator to determine whether the customer qualifies for a discount.


// Store the result in ticketMessage.


// Display either "Children's discount applied!" or "Regular ticket price applies."


// Bonus: Use prompt() to collect the customer's age and validate it before applying the ternary operator.

// Task 2: Restaurant Food Ordering System (Switch Statement)

// A restaurant wants a programme that allows customers to select meals from its menu.

// Food option

// Price


// "rice"

//  ₦3,500

 
// "beans"

//  ₦2,500

 
// "yam"

//  ₦3,000

 
// "spaghetti"

//  ₦4,000

 
// Instructions:

// Use prompt() to ask the customer to enter a food option.


// Use a switch statement to determine the selected meal's price.


// Display the selected meal and its price.


// If the customer enters an option not on the menu, display "Sorry, this meal is unavailable."


// Use break appropriately after each case.


// Sample output:

// Welcome to FreshBite Restaurant!
// Selected Meal: Rice
// Price: ₦3500
// Thank you for your order!
// Bonus: Use .toLowerCase() to ensure that inputs such as "Rice" and "RICE" are accepted.

// Task 3: Student Scholarship Checker (Combining Conditions)

// A school offers scholarships based on examination performance and attendance.

// A student qualifies for a scholarship if:

// Their examination score is at least 80.


// Their attendance percentage is at least 90.


// Instructions:

// Use prompt() to collect the student's name, examination score and attendance percentage.


// Convert the score and attendance values to numbers.


// Use logical operators and if...else to check whether the student meets both requirements.


// Display "Congratulations! You qualify for a scholarship." if both conditions are met.


// Otherwise, display "You do not qualify for a scholarship."


// Validate both numeric inputs to ensure they are between 0 and 100, and reject empty or invalid entries.




// In addition to completing the programming tasks, all students are expected to carefully read and revise their JavaScript class notes, paying particular attention to the topics covered so far.