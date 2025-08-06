import { createContext, useReducer, useMemo } from "react";

export const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
              completedDate: !task.completed
                ? new Date().toISOString().slice(0, 16).replace("T", ", ")
                : undefined,
            }
          : task
      );
    default:
      return state;
  }
};

const calculateDurationInHours = (start, end) => {
  if (!start || !end) return 0;
  const startDate = new Date(`2000-01-01T${start}`);
  const endDate = new Date(`2000-01-01T${end}`);
  const diffMs = endDate - startDate;
  return diffMs > 0 ? diffMs / (1000 * 60 * 60) : 0; // Convert ms to hours
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (title, description, taskDueDate, startTime, endTime) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      taskDueDate,
      startTime,
      endTime,
      completed: false,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const getTasksByFilter = (filterType) => {
    const today = new Date().toISOString().slice(0, 10);
    switch (filterType) {
      case "Pending":
        return tasks.filter(task => !task.completed);
      case "Completed":
        return tasks.filter(task => task.completed);
      case "Due Today":
        return tasks.filter(task => task.taskDueDate === today && !task.completed);
      case "All":
      default:
        return tasks;
    }
  };

  const getTodayTasks = () => {
    const today = new Date().toISOString().slice(0, 10);
    return tasks.filter(task => task.taskDueDate === today);
  };

  const getSeriousnessPercentage = () => {
    let total = 0;
    let completed = 0;

    tasks.forEach(task => {
      const hours = calculateDurationInHours(task.startTime, task.endTime);
      total += hours;
      if (task.completed) completed += hours;
    });

    if (total === 0) return 0;
    return Math.min(Math.round((completed / total) * 100), 100);
  };

  const contextValue = useMemo(() => ({
    tasks,
    addTask,
    toggleTask,
    getTasksByFilter,
    getTodayTasks,
    getSeriousnessPercentage
  }), [tasks]);

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
