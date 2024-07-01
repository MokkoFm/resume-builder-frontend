import { Resume, Template } from '@/shared/types'
import { Box, Divider, Typography } from '@mui/material'
import Resumes from './resumes'
import Templates from './templates'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const HomePage = (props: Props) => {
  const { resumes, setResumes, templates, setTemplates } = props
  return (
    <Box>
      <Box py={5}>
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="subtitle1">Welcome to the dashboard</Typography>
      </Box>
      <Resumes resumes={resumes} setResumes={setResumes} />
      <Divider sx={{ my: 2 }} />
      <Templates templates={templates} setTemplates={setTemplates} />
    </Box>
  )
}
