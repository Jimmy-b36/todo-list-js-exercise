// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description = "No description") {
  const task = {
    title,
    complete: false,
    description,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    completeTask: function () {
      this.complete = true;
    },
  };
  return task;
}

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
// task 0
const task2 = newTask("Do Laundry", "😨"); // task 1

task1.logState(); //Clean Cat Litter has not been completed
task1.completeTask("Clean Cat Litter");
task1.logState();
task2.logState();
