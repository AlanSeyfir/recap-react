import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export const App = () => {
  // console.log(tasks);

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};
