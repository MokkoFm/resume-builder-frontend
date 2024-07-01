import { Resume } from '@/shared/types'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import {
  ResumeHeader,
  ResumeAbout,
  ResumeExperience,
  ResumeEducation,
  ResumeSkills,
  ResumeCertifications
} from './parts'
import downloadPDF from '@/features/download-pdf'
import { Download } from '@mui/icons-material'
import ResumeDocument from '../resume-document'

type Props = {
  resume: Resume
}

export const ResumeViewer = ({ resume }: Props) => {
  const {
    id,
    title,
    firstName,
    lastName,
    email,
    phoneNumber,
    experiences,
    education,
    certifications,
    description,
    references,
    linkedin,
    skills
  } = resume
  const fullName = `${firstName} ${lastName}`

  return (
    <Box display="flex" justifyContent="center" alignItems="start">
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            downloadPDF(`resume-${id}`, fullName)
          }}
        >
          <Download />
        </Button>
      </Box>
      <ResumeDocument resume={resume} />
    </Box>
  )
}
