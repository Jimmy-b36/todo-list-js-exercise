// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
class Task {
  constructor(title, description = "No description entered") {
    this.title = title;
    this.complete = false;
    this.description = description;
  }
  logState() {
    console.log(
      `${this.title} has${this.complete ? " " : " not "}been completed`
    );
  }
  completeTask() {
    this.complete = true;
  }
}

const task1 = new Task(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
// task 0
const task2 = new Task("Do Laundry", "😨"); // task 1
console.log(task1);
task1.logState(); //Clean Cat Litter has not been completed
task1.completeTask("Clean Cat Litter");
task1.logState();
task2.logState();
