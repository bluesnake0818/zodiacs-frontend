import { useState, useEffect } from 'react'
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'
import './App.css';
import AddZodiac from './pages/AddZodiac/AddZodiac'
import ZodiacList from './pages/ZodiacList/ZodiacList'
import EditZodiac from './pages/EditZodiac/EditZodiac'
import * as zodiacService from './services/zodiacs'

function App() {
  const [zodiacs, setZodiacs] = useState([])
  const navigate = useNavigate()

  // const handleAddZodiac = async newZodiacData => {
  //   const newZodiac = await zodiacService.create(newZodiacData)
  //   setZodiacs([...zodiacs, newZodiacData])
  //   navigate('/')
  // }

  const handleDeleteZodiac = id => {
    zodiacService.deleteOne(id)
    .then(deletedZodiac => setZodiacs(zodiacs.filter(zodiac => zodiac._id !== deletedZodiac._id)))

  }

   const handleAddZodiac = newZodiacData => {
    zodiacService.create(newZodiacData)
    .then(newZodiac => setZodiacs([...zodiacs, newZodiac]))
    navigate('/')
  }

  const handleUpdateZodiac = updatedZodiacData => {
    zodiacService.update(updatedZodiacData)
    .then(updatedZodiac => {
      const newZodiacsArray = zodiacs.map(zodiac => 
        zodiac._id === updatedZodiacData._id ? updatedZodiacData : zodiac
      )
      setZodiacs(newZodiacsArray)
      navigate('/')
    })
  }

  useEffect(() => {
    zodiacService.getAll()
    .then(allZodiacs => setZodiacs(allZodiacs))
  }, [])

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
	        <Route path='/add' element={<AddZodiac handleAddZodiac={handleAddZodiac}/>} />
          <Route path='/' element={<ZodiacList zodiacs={zodiacs} handleDeleteZodiac={handleDeleteZodiac}/>}/>
          <Route path='/edit' element={<EditZodiac handleUpdateZodiac={handleUpdateZodiac}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
