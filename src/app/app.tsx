import { Home } from '@mui/icons-material'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
