import './App.css';
import Users from './Components/Users';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <AddUser/>
      <Users/>
    </div>
  );
}

export default App;
