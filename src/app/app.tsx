import { HomePage } from '@/pages/home'
import { ResumeViewerPage } from '@/pages/resume-viewer'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutWrapper } from '@/shared/ui/layout-wrapper'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LayoutWrapper element={<HomePage />} />} />
        <Route
          path="/resume/:resumeId"
          element={<LayoutWrapper element={<ResumeViewerPage />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
