import { HomePage } from '@/pages/home'
import { ResumeEditorPage } from '@/pages/resume-viewer'
import { CreateResumePage } from '@/pages/create-resume'
import { FC, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutWrapper } from '@/shared/ui/layout-wrapper'
import { Resume, Template } from '@/shared/types'
import { DEFAULT_TEMPLATE, MOCK_CANDIDATE_PROFILE } from '@/shared/config'

const App: FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([MOCK_CANDIDATE_PROFILE])
  const [templates, setTemplates] = useState<Template[]>([DEFAULT_TEMPLATE])
  return (
    <BrowserRouter basename="/resume-builder-frontend">
      <Routes>
        <Route
          index
          path="/"
          element={
            <LayoutWrapper
              element={
                <HomePage
                  resumes={resumes}
                  setResumes={setResumes}
                  templates={templates}
                  setTemplates={setTemplates}
                />
              }
            />
          }
        />
        <Route
          path="/resumes/:resumeId/create"
          element={
            <LayoutWrapper
              element={
                <CreateResumePage
                  resumes={resumes}
                  setResumes={setResumes}
                  templates={templates}
                  setTemplates={setTemplates}
                />
              }
            />
          }
        />
        <Route
          path="/resumes/:resumeId/edit"
          element={
            <LayoutWrapper
              element={
                <ResumeEditorPage
                  resumes={resumes}
                  setResumes={setResumes}
                  templates={templates}
                  setTemplates={setTemplates}
                />
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
