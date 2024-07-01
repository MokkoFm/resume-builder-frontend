import { HomePage } from '@/pages/home'
import { ResumeViewerPage } from '@/pages/resume-viewer'
import { CreateResumePage } from '@/pages/create-resume'
import { FC, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutWrapper } from '@/shared/ui/layout-wrapper'
import { Resume } from '@/shared/types'
import { MOCK_CANDIDATE_PROFILE } from '@/shared/config'

const App: FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([MOCK_CANDIDATE_PROFILE])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <LayoutWrapper element={<HomePage resumes={resumes} setResumes={setResumes} />} />
          }
        />
        <Route
          path="/resumes/:resumeId/create"
          element={
            <LayoutWrapper
              element={<CreateResumePage resumes={resumes} setResumes={setResumes} />}
            />
          }
        />
        <Route
          path="/resumes/:resumeId/edit"
          element={
            <LayoutWrapper
              element={<ResumeViewerPage resumes={resumes} setResumes={setResumes} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
