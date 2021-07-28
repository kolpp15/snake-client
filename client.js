const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542 // PORT number here,
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: SBH");

    // for (let i = 0; i < 100; i++) {
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //     conn.write("Move: left");
    //   }, 500 * i);
    // }
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };