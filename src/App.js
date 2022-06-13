// import Profile from './SalvadorContainer/Home/Profile'
import Header from './components/oscanisms/Header'
import MainMenu from './components/oscanisms/MainMenu'
import MainContainer from './components/oscanisms/MainContainer'
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

// const App = () => (
//   <h1>
//     hello
//   </h1>
// )

export default App;
