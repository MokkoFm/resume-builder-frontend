import { HomePage } from '@/pages/home'
import { ResumeViewerPage } from '@/pages/resume-viewer'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume/:resumeId" element={<ResumeViewerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
