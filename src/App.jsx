import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css';
import AddZodiac from './pages/AddZodiac/AddZodiac'

function App() {
  const [zodiacs, setZodiacs] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        React Zodiacs CRUD
        <nav>
          <NavLink to='/'>Zodiac List</NavLink>
          <NavLink className='m-left' to='/add'>Add Zodiac</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
	        <Route path='/add' element={<AddZodiac />} />
				</Routes>
      </main>
    </div>
  );
}

export default App;
