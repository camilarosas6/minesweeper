// Inicializar la terminal usando xterm.js
const { Terminal } = require("xterm");
const term = new Terminal();

term.open(document.getElementById("terminal"));
term.write("Welcome to the terminal!\r\n");

// Captures commands
term.onKey(({ key, domEvent }) => {
  const char = domEvent.key;

  if (char === "Enter") {
    term.write("\r\n> "); // Prints prompt
  } else {
    term.write(key); // Writes text
  }
});