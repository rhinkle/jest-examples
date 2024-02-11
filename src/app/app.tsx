// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import './app.module.css';
import Header from 'src/components/header/header';
import { TodoSection } from './fragments/todo';

export function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4 border-2 border-solid border-gray-700 rounded-md">
        <TodoSection />
      </div>
    </div>
  );
}

export default App;
