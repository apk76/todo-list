import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
