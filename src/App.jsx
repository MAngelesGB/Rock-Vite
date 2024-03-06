import { useState } from 'react'
import './App.css'
import {Song} from './rockSongs'

let array = [
  {title: "Wish you were here", artist: "Pink Floyd", album: "Wish you were here", listened: true},
  {title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", listened: false},
  {title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", listened: true},
  {title: "Comfortably Numb", artist: "Pink Floyd", album: "The Wall", listened: false},
  {title: "Hotel California", artist: "Eagles", album: "Hotel California", listened: true},
]

function App() {
  const [ischecked, setIsChecked] = useState(false)
  return (
    <>
      <header className="App-header"> 
        <h1> Rock Songs </h1>  
        <input onClick={() => setIsChecked(!ischecked)} type="checkbox" /> Listened
      </header>
      {
        ischecked ? array.filter((song) => song.listened).map((song) => {
          return <Song title={song.title} artist={song.artist} album={song.album} listened={song.listened} />
        }) : array.filter((song) => !song.listened).map((song) => {
          return <Song title={song.title} artist={song.artist} album={song.album} listened={song.listened} />
        }) 
      }
    </>
  )
}

export default App
