import { Route, Routes } from 'react-router-dom'
import Form from '../src/components/form/Form'
import DataDisplay from './components/dataDisplay/DataDisplay'
import Login from './pages/Login'
import NameEntry from './pages/NameEntry'


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', minHeight: '100vh' }}>
      <h1 style={{ margin: '50px' }}>First Full Stack Application</h1>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path ='/nameentry' element={<NameEntry />}/>
      </Routes>
    </div>
  )
}

export default App
