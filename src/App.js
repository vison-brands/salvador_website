// import Profile from './SalvadorContainer/Home/Profile'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import MainContainer from './components/MainContainer'
import './App.css';

function App() {
  return (
    <div className="App flex justify-center">
    <main className="main-container">
      <Header/>
      <div className="content-container">
        <MainMenu />
        <MainContainer />
      </div>
    </main> 
    </div>
  );
}

export default App;
