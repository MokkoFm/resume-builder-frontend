import { Certification } from '@/entities/resume'
import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

type Props = {
  certifications: Certification[]
}

const ResumeCertifications = (props: Props) => {
  const { certifications } = props

  if (!certifications.length) {
    return null
  }

  return (
    <Box my={2}>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        Certifications
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {certifications.map(cert => (
          <Box key={cert.name}>
            <Typography variant="subtitle1">
              {cert.name}, {format(cert.date, 'dd.MM.yyyy')}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ResumeCertifications
