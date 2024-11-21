import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      ) : (
        <p>No tasks available. Start adding some!</p>
      )}
    </div>
  );
};

export default TaskList;
