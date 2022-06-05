// import Profile from './SalvadorContainer/Home/Profile'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import MainContainer from './components/MainContainer'
import './App.css';

function App() {
  return (
    <div className="App px-14"> 
      <Header/>
      <main class="flex-auto grid grid-cols-12">
        <MainMenu />
        <MainContainer />
      </main>
    </div>
  );
}

export default App;
