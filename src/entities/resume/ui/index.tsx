import { Resume } from '../model/resume'
import { Box, Button, Typography } from '@mui/material'

type Props = {
  resume: Resume
}

export const ResumeViewer = ({ resume }: Props) => {
  const {
    personalDetails,
    experiences,
    education,
    certifications,
    description,
    reference,
    linkedin,
    skills
  } = resume
  return (
    <Box
      sx={{
        height: 150,
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        gap: 2,
        border: 'solid 1px black'
      }}
    >
      <Typography variant="h6" fontSize={12} textAlign={'center'} fontWeight={600}>
        Resume
      </Typography>
    </Box>
  )
}
