const parseArgs = require("minimist");
const colors = require("colors");
const command = parseArgs(process.argv.slice(2, 3));
delete command._;

const handleCommand = ({ add, remove, list }) => {
  if (add) {
    if (typeof add !== "string") {
      return console.log("add your task (as a text)!".red);
    } else if (add.length <= 7) {
      return console.log("your task have to be at least 7 letters long!".red);
    }
    // handleData();
  } else if (remove) {
    if (typeof remove !== "string" || remove.length <= 7) {
      return console.log(
        "please type your task (text only) and remeber that your task have to be at least 7 letters long!"
          .red
      );
    }
    // handleData()
  } else if (list || list === "") {
    console.log("list");
  } else {
    console.log(
      "you should use one of the three options: --list, --add, --remove"
    );
  }
};

const handleData = () => {};

handleCommand(command);
