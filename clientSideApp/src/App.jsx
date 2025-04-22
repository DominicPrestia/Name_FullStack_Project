import Form from '../src/components/form/Form'
import DataDisplay from './components/dataDisplay/DataDisplay'

function App() {

  return (
    <div style={{display:'flex',flexDirection:'column', gap:'20px', alignItems:'center', minHeight:'100vh'}}>
      <h1 style={{margin:'50px'}}>First Full Stack Application</h1>
      <Form/>
      <DataDisplay/>
    </div>
  )
}

export default App
