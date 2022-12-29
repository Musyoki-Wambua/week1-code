document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-elements");

    // Attach an event listener to the form's submit event
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      data();
    });
  // Define the data function
  const data = () => {
    // Get the value of the marks input element and parse it as a float
    let marks = parseFloat(document.getElementById("marks").value);
    let grade = "";

    // Determine the grade based on the value of marks
    if (marks > 79 && marks <= 100) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 49 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks < 49) {
      grade = "D";
    } else if (marks >= 0 && marks < 40) {
      grade = "E";
    } else {
      // Marks are outside the range of 0 to 100
      result.innerHTML = "Input Valid Score!";
      return;
    }

    // Set the innerHTML of the result element to the calculated grade
    result.innerHTML = `Your Grade is ${grade}`;
  };

  const resetButton = document.getElementById('reset-button');
  // Attach an event listener to the reset button's click event
  resetButton.addEventListener('click', () => {
    // Reset the form
    form.reset();
    // Clear the result
    result.innerHTML = "Result: ";
  });



});
