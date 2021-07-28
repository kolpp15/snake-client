// STORES THE ACTIVE TCP CONNECTION OBJECT
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // callbacks handleUserInput
  return stdin;
};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    // console.log('move up'); TESTING BEFORE CONNECTION.WRITE. IT PRINTS MOVE UP IN COMMAND
    connection.write('Move: up');
  }

  if (key === 'a') {
    // console.log('move left');
    connection.write('Move: left');
  }

  if (key === 's') {
    // console.log('move down');
    connection.write('Move: down');
  }

  if (key === 'd') {
    // console.log('move right');
    connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: hahahahahahahahahaha');
  }
  if (key === '2') {
    connection.write('Say: ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️');
  }
  if (key === '3') {
    connection.write('Say: bye~~~~~!!!');
  }
};


module.exports = { setupInput };