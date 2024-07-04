import { HomePage } from '@/pages/home'
import { ResumeEditorPage } from '@/pages/resume-viewer'
import { CreateResumePage } from '@/pages/create-resume'
import { FC, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutWrapper } from '@/shared/ui/layout-wrapper'
import { Resume, Template } from '@/shared/types'
import { DEFAULT_TEMPLATE, MOCK_CANDIDATE_PROFILE } from '@/shared/config'
import { CreateTemplatePage } from '@/pages/create-template'
import { TemplateEditorPage } from '@/pages/template-editor/ui'

const App: FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([MOCK_CANDIDATE_PROFILE])
  const [templates, setTemplates] = useState<Template[]>([DEFAULT_TEMPLATE])
  return (
    <BrowserRouter>
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
          path="/resumes/:id/create"
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
          path="/resumes/:id/edit"
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
        <Route
          path="/templates/:id/create"
          element={
            <LayoutWrapper
              element={
                <CreateTemplatePage
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
          path="/templates/:id/edit"
          element={
            <LayoutWrapper
              element={
                <TemplateEditorPage
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
