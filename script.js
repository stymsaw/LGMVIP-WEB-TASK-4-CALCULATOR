const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    // if clicked on C button setting the display text to empty string.
    if (item.id == "clear") {
      display.innerText = "";
    } 
    // using the substr function for deleting the last digit of the number
    else if (item.id == "backspace") {
      let string = display.innerText;
      display.innerText = string.substr(0, string.length - 1);
    } 
    //  using eval function for the expression
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } 
    // setting warning in case if user try to evaluate empty string
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 
    //  else concatining the string in the innerHTML text
    else {
      display.innerText += item.id;
    }
  };
});