class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.filter = "all";
  }

  save = () => {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  };

  addTask = (text = "") => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    this.tasks = [...this.tasks, newTask]; // spread
    this.save();
    this.render();
  };

  toggleTask = (id) => {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.save();
    this.render();
  };

  deleteTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.save();
    this.render();
  };

  getFilteredTasks = () => {
    return this.filter === "completed"
      ? this.tasks.filter(t => t.completed)
      : this.tasks;
  };

  render = () => {
    const list = document.getElementById("taskList");

    list.innerHTML = this.getFilteredTasks()
      .map(({ id, text, completed }) => `
        <li class="${completed ? "completed" : ""}">
          <span onclick="app.toggleTask(${id})">${text}</span>
          <button onclick="app.deleteTask(${id})">X</button>
        </li>
      `)
      .join("");
  };
}

// Instance
const app = new TaskManager();

// Events
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  app.addTask(input.value);
  input.value = "";
});

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    app.filter = e.target.dataset.filter;
    app.render();
  });
});

// Initial render
app.render();