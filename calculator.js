const result = document.getElementById("result");
const normalButtons = document.querySelector(".buttons.normal");
const scientificButtons = document.querySelector(".buttons.scientific");
const modeSelect = document.getElementById("mode");

let currentInput = "0";

modeSelect.addEventListener("change", () => {
  if (modeSelect.value === "scientific") {
    normalButtons.style.display = "none";
    scientificButtons.style.display = "grid";
  } else {
    scientificButtons.style.display = "none";
    normalButtons.style.display = "grid";
  }
});

function handleClick(btn) {
  const value = btn.textContent;

  if (value === "C") {
    currentInput = "0";
  } 
  else if (value === "=") {
  try {
    currentInput = currentInput
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/−/g, "-")
      .replace(/\^/g, "")
      .replace(/π/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log")
      .replace(/√/g, "Math.sqrt");

    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }


  } 
  else {
    if (currentInput === "0" || currentInput === "Error") {
      currentInput = value;
    } else {
      currentInput += value;
    }
  }

  result.value = currentInput;
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => handleClick(btn));
});