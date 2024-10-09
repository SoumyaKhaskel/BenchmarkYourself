import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Home from "./Pages/Home/home"
import MemoryGame from "./Pages/Games/MemoryGame/MemoryGame"
import ReactionaTime from "./Pages/Games/ReactionTime/ReactionTime"
import TypeSpeed from "./Pages/Games/TypingSpeed/TypeSpeed"
import WordGame from './Pages/Games/WordGame/WordGame';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/memorygame" element={<MemoryGame/>}/>
          <Route path="/reactiontime" element={<ReactionaTime/>}/>
          <Route path='/typespeed' element={<TypeSpeed/>}/>
          <Route path='/WordGame' element={<WordGame/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;