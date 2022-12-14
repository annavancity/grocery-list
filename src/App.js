import './App.css';
import image from './grocery.jpg';
import { GroceryList } from './GroceryList';
import man from './man.jpg';

function App() {
  return (
    <div className='app'>
      <img src={image} width="200px" alt="shopping" />
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <img src={man} width="200px" alt="man" />
    </div>
  );
}

export default App;
