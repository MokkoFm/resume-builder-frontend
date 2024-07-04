import { useNavigate, useParams } from 'react-router-dom'
import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Typography } from '@mui/material'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { Resume, Template } from '@/shared/types'
import { useState } from 'react'

type Params = {
  id: string
}

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const ResumeEditorPage = (props: Props) => {
  const { resumes, setResumes, templates, setTemplates } = props
  const { id } = useParams<Params>()
  const navigate = useNavigate()
  const resumeId = id || ''

  const { resume, setResume } = useResume(resumeId, resumes)
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0])

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
        <Typography variant="h6">Unfortunately, a resume doesn't exist</Typography>
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
          defaultActiveSection="personal-details"
          type="resume"
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
