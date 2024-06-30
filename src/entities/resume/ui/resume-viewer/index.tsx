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

type Props = {
  resume: Resume
}

export const ResumeViewer = ({ resume }: Props) => {
  const {
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
            downloadPDF('resume', fullName)
          }}
        >
          <Download />
        </Button>
      </Box>
      <Paper
        id="resume"
        elevation={0}
        sx={{
          padding: 2,
          mx: 8,
          my: 4,
          minHeight: 'calc(100vh - 96px)',
          width: '600px'
        }}
      >
        <ResumeHeader
          fullName={fullName}
          title={title}
          email={email}
          phoneNumber={phoneNumber}
          linkedin={linkedin}
        />
        <Divider />
        <ResumeAbout description={description} />
        <Divider />
        <ResumeExperience experiences={experiences} />
        <Divider />
        <ResumeEducation education={education} />
        <Divider />
        <ResumeSkills skills={skills} />
        <Divider />
        <ResumeCertifications certifications={certifications} />
        <Divider />
      </Paper>
    </Box>
  )
}
