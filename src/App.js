import logo from './logo.svg';
import './App.css';
import pic from "./images/nature.jpg"

function App() {
  return (
   <>
    <div className="App">  
      <div className='form'>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" required></input><br />
          <input type="password" placeholder='password'  required></input><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
       
      </div>
   </>
  );
}

export default App;


//what is react ?
//elements and components
//  <h1>,<div>,<img> = elements
//  position properties:
//    relative
//absolute
//sticky
//fixed
//static  = default