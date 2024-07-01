import { useNavigate, useParams } from 'react-router-dom'
import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Typography } from '@mui/material'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { Resume, Template } from '@/shared/types'
import { useState } from 'react'

type Params = {
  resumeId: string
}

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const ResumeEditorPage = (props: Props) => {
  const { resumes, setResumes, templates, setTemplates } = props
  const { resumeId } = useParams<Params>()
  const navigate = useNavigate()
  const id = resumeId || ''

  const { resume, setResume } = useResume(id, resumes)
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
          resumes={resumes}
          setResumes={setResumes}
          templates={templates}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
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
