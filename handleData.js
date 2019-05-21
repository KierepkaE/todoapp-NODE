const fs = require("fs");
const colors = require("colors");
const handleData = (type, title) => {
  // type - number (1- add; 2- remove; 3 - list)
  // title (string || null)
  // data = data.toString()
  const data = fs.readFileSync("datadb.json", "utf8");
  let tasks = JSON.parse(data);

  if (type === 1 || type === 2) {
    isExisted = tasks.find(task => task.title === title) ? true : false;
    if (type === 1 && isExisted) {
      return console.log("already got this task.".red.bgGreen);
    } else if (type === 2 && !isExisted) {
      return console.log("i can't remove task that doesn't exist.".red.bgGreen);
    }
  }
  let dataJSON = "";

  switch (type) {
    case 1:
      //rebuilding tasks array (updating id)
      tasks = tasks.map((task, index) => ({
        id: index + 1,
        title: task.title
      }));
      const id = tasks.length + 1;
      tasks.push({ id, title });
      dataJSON = JSON.stringify(tasks);
      fs.writeFileSync("datadb.json", dataJSON);
      console.log(`adding . . . ${title}`.white.bgBlue);
      break;
    case 2:
      const index = tasks.findIndex(task => task.title === title);
      tasks.splice(index, 1);
      //rebuilding tasks array (updating id)
      tasks = tasks.map((task, index) => ({
        id: index + 1,
        title: task.title
      }));

      dataJSON = JSON.stringify(tasks);
      fs.writeFile("datadb.json", dataJSON, "utf8", err => {
        if (err) throw err;
        console.log(`removing your task . . . ${title}`.white.bgBlue);
      });

      break;
    case 3:
      console.log(
        tasks.length > 1
          ? `You have ${tasks.length} tasks to do.Your list: `.yellow
          : `You have ${tasks.length} task to do.Your list: `.yellow
      );
      if (tasks.length > 0) {
        tasks.forEach((task, index) => {
          if (index % 2 === 0) return console.log(task.title.magenta);
          return console.log(task.title.green);
        });
      }
  }
};

module.exports = handleData;
