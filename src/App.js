import './App.css';
import Header from './Header/Header';
import ToDoItem from './ToDoItem/ToDoItem';



function App() {

  return (

    <div id='mainpage'>
      <Header></Header>
      <h1>Today's <br></br> List_</h1>
      <div id='main-Container'>
      <div id='Listing'>
        {/* <div id='Columnright'> */}
          <ToDoItem checked={true} value="glfas"></ToDoItem>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
        {/* </div> */}
        {/* <div id='Columnleft'></div> */}
      </div>
    </div>

    </div>
  )
};

export default App;
