import { Route, Routes } from 'react-router-dom'

import MeetJoin from './components/MeetJoin'
import SelectMic from './components/SelectMic'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MeetJoin />} />
      <Route path='SelectMic' element={<SelectMic/>} />
    </Routes>
  )
}

export default App
