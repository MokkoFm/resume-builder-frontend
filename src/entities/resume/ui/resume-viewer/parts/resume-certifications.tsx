import { Certification } from '@/entities/resume'
import { TemplateConfig } from '@/entities/template'
import { Box, Typography } from '@mui/material'

type Props = {
  certifications: Certification[]
  templateConfig: TemplateConfig
}

const ResumeCertifications = (props: Props) => {
  const { certifications, templateConfig } = props

  if (!certifications.length) {
    return null
  }

  const { fontSize } = templateConfig

  return (
    <Box my={2}>
      <Typography variant="h6" fontSize={fontSize.heading} fontWeight={600}>
        Certifications
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {certifications.map(cert => (
          <Box key={cert.name}>
            <Typography variant="subtitle1" fontSize={fontSize.body}>
              {cert.name}, {cert.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ResumeCertifications
