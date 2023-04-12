// Take Input Screen Element
let screen = document.getElementById("screen");

// Take Input Buttons Element
buttons = document.querySelectorAll("button");
let screenValue = "";
let div, modulus;
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    screenValue = screen.value;
    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "X") {
      if (screenValue) {
        let opraters = ["+", "-", "*", "/", "%"];
        if (
          !opraters.includes(String(screen.value).slice(-1)) ||
          !opraters.includes("*")
        ) {
          buttonText = "*";
          screenValue += buttonText;
          screen.value = screenValue;
        }
      }
    } else if (buttonText == "=") {
      screen.value = eval(screen.value);
    } else if (buttonText == "<-") {
      screenValue = String(screen.value).slice(0, -1);
      screen.value = screenValue;
    } else {
      let opraters = ["+", "-", "*", "/", "%", "."];
      if (screenValue) {
        if (
          !opraters.includes(String(screen.value).slice(-1)) ||
          !opraters.includes(buttonText)
        ) {
          screenValue += buttonText;
          screen.value = screenValue;
        }
      } else if (!opraters.includes(buttonText)) {
        screenValue += buttonText;
        screen.value = screenValue;
      }
    }
  });
}
