const colors = require("colors");
const handleData = require("./handleData.js");
const handleCommand = ({ add, remove, list }) => {
  if (add) {
    if (typeof add !== "string") {
      return console.log("add your task (as a text)!".red.bgGreen);
    } else if (add.length <= 7) {
      return console.log(
        "your task have to be at least 7 letters long!".red.bgGreen
      );
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length <= 7) {
      return console.log(
        "please type your task (text only) and remeber that your task have to be at least 7 letters long!"
          .red.bgGreen
      );
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log(
      "you should use one of the three options: --list, --add, --remove"
    );
  }
};
module.exports = handleCommand;
