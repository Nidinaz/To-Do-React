import './App.css';
import Header1 from './Header1';
import Checkbuttons from './Checkbuttons';



function App() {

  return (

    <div id='mainpage'>
      <Header1></Header1>
      <h1>Today's <br></br> List_</h1>
      <div id='Listing'>
        <div id='Columnright'>

        </div>
        <div id='Columnleft'></div>
      </div>
      <Checkbuttons></Checkbuttons>
    </div>
  )
};

export default App;
