import { useState } from 'react';
import './index.css'
import hero from "./assets/hero.png";
import hero_bg from "./assets/hero-bg.png";
import Search from './components/Search';

function App() {
 const [searchTerm, setSearchTerm] = useState('I AM BATMAN');

  return (
    <main className='h-screen w-screen'>
     <div className='pattern' />

     <div className='wrapper '>
      <header>
        <img src={hero} alt='Hero Banner'/>
        <h1>Find <span className='text-gradient'>Movies</span> You Will Enjoy Without the Hassle</h1>
      </header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     </div>
    
    
    </main>
  )
}

export default App
