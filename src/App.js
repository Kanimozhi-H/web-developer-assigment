
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='body'>
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
