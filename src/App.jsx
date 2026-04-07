import React, { useState } from "react";
import FilterButton from "./components/FilterButton";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "قراءة كتاب الإنجاز قبل نهاية الشهر", completed: false },
    { id: 2, name: "إنهاء كورس رياكت", completed: false },
  ]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  function handleCheck(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
    alert("تم إنجاز المهمة بنجاح!" + id);
  }
  const taskItems = tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      onDelete={handleDelete}
      handleCheck={handleCheck}
    />
  ));
  return (
    <div className="max-w-120 mx-auto mt-20 p-4 border rounded-lg bg-white text-center shadow">
      <h1 className="text-5xl font-semibold mb-0">مهامي</h1>
      <hr className="mb-4 mt-0" />
      <div className="flex justify-center gap-2 mt-4 mb-6">
        <Link to="/notDone">
          <FilterButton name="غير منجز" />
        </Link>
        <Link to="/done">
          <FilterButton name=" منجز" />
        </Link>
        <Link to="/">
          <FilterButton name="الكل" />
        </Link>
      </div>

      <Routes>
        <Route path="/" element={taskItems} />
        <Route
          path="/notDone"
          element={<h1 className="text-center">غير منجز</h1>}
        />
        <Route path="/done" element={<h1 className="text-center">منجز</h1>} />
        <Route
          path="*"
          element={<h1 className="text-center">Page Not Found</h1>}
        />
      </Routes>
      <AddTask onAdd={addTask} />
    </div>
  );
};

export default App;
