import React, {useState} from 'react';
import './App.css';
import data from './data.json';

//components
import Header from './Header'; 
import ToDoList from './ToDoList';
import NewListItem from './NewListItem';
import ClearButton from './ClearButton';
import Counter from './Counter';

function App() {
  const initialListState = JSON.parse(window.localStorage.getItem("TO DO LIST")) ?? data; 
  const initializedCounter = JSON.parse(localStorage.getItem('COUNTER')) ?? 0; 
  const [ toDoList, setToDoList ] = useState(initialListState);
  const [ completedTaskCount, setCompletedTaskCount] = useState(initializedCounter);

  function handleToggle(id) {
    console.log('this works', id, typeof id);
    const mapped = toDoList.map(task => {
      return id === task.id.toString() ? { ...task, complete: !task.complete } : task; 
    });
    setAndSaveState(mapped);
  }

  function addListItem(name) {  
    const newItem = {
      id: toDoList.length + 1,
      task: name,
      complete: false,
    };
    const newToDoList = [ ...toDoList, newItem ];
    setAndSaveState(newToDoList);
  };

  function setAndSaveState(newState) {
      window.localStorage.setItem("TO DO LIST", JSON.stringify(newState))
      setToDoList(newState); 
  }

  function clearCompletedTasks() {
    let filteredTasks = toDoList.filter( task => task.complete === false );
    let completedTasks = toDoList.length - filteredTasks.length; 
    incrementCompletedTaskCount(completedTasks);
    setAndSaveState(filteredTasks);
  }

  function incrementCompletedTaskCount(number) { 
    let counter = completedTaskCount + number;
    setCompletedTaskCount(counter);
    localStorage.setItem('COUNTER', JSON.stringify(counter));

  }

  return (
    <div className='App'>
      <Header />
      <Counter completedTaskCount={ completedTaskCount }/>
      <ToDoList toDoList = {toDoList} handleToggle={ handleToggle }/>
      <br></br>
      <NewListItem addListItem={ addListItem } />
      <ClearButton clearCompletedTasks= { clearCompletedTasks }/>
    </div>
  );
}

export default App;
