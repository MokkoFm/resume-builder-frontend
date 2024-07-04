import { useNavigate, useParams } from 'react-router-dom'
import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Typography } from '@mui/material'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { Resume, Template } from '@/shared/types'
import { useState } from 'react'
import { MOCK_CANDIDATE_PROFILE } from '@/shared/config'

type Params = {
  id: string
}

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const TemplateEditorPage = (props: Props) => {
  const { resumes, setResumes, templates, setTemplates } = props
  const { id } = useParams<Params>()
  const navigate = useNavigate()
  const templateId = id || ''

  const currentTemplate = templates.find(template => template.id === templateId) || templates[0]

  const [resume, setResume] = useState<Resume>(MOCK_CANDIDATE_PROFILE)
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(currentTemplate)

  if (!resume) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Typography variant="h6">Unfortunately, a template doesn't exist</Typography>
      </Box>
    )
  }

  return (
    <Box display="flex" justifyContent="space-between" height="100vh">
      <Box width="50%">
        <Box mt={2}>
          <BackButton onBack={() => navigate('/')} />
        </Box>
        <ResumeInput
          resume={resume}
          setResume={setResume}
          isNewResume={false}
          isNewTemplate={false}
          resumes={resumes}
          setResumes={setResumes}
          templates={templates}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          setTemplates={setTemplates}
          defaultActiveSection="template-settings"
          type="template"
        />
      </Box>
      <Box
        width="50%"
        sx={{
          backgroundColor: '#80808070',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0
        }}
      >
        <ResumeViewer resume={resume} selectedTemplate={selectedTemplate} />
      </Box>
    </Box>
  )
}
