import { useState,useEffect } from 'react';
import './App.css';
import Poke from './components/Poke';
import SearcBox from './components/SearcBox';
import {getPokesByType} from './services/getPokesByType'

function App() {

  const [data, setData] = useState([])
  const [queryTerm, setQueryTerm] = useState('')
  const [showNPokes, setShowNPokes] = useState(10)

  useEffect(() => {
    if (queryTerm){
      const func = async () => { 
      const res = await getPokesByType(queryTerm)
      setData(res.pokemon)
    }
    func()
  
  }

  },[queryTerm])

  const list = data.map((value) => <div key={value.pokemon.name}><Poke  url={value.pokemon.url}/></div>)
  const items = list.slice(0,showNPokes)
  const handleSearch = (query) => {
    setQueryTerm(query)
  }
  const handleSelect = (showN) => {
    setShowNPokes(showN)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Type Pokemon Searcher!</h1>
        <SearcBox onChange={handleSelect} onSearch={handleSearch}/>
        <div className="Poke-container">{items}</div>
      </header>
    </div>
  );
}

export default App;
