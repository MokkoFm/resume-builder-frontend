import { Experience } from '@/entities/resume'
import { TemplateConfig } from '@/entities/template'
import { Box, Typography } from '@mui/material'

type Props = {
  experiences: Experience[]
  templateConfig: TemplateConfig
}

const ResumeExperience = (props: Props) => {
  const { experiences, templateConfig } = props

  if (!experiences.length) {
    return null
  }

  const { fontSize } = templateConfig
  return (
    <Box my={1}>
      <Typography variant="h6" fontSize={fontSize.heading} fontWeight={600}>
        Experience
      </Typography>
      {experiences.map(experience => {
        const startDate = experience.startDate
        const endDate = experience.endDate ? experience.endDate : 'Present'
        return (
          <Box key={`${experience.company}-${experience.startDate}`} my={2}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="subtitle1" fontSize={fontSize.body}>
                  {experience.company}, {experience.title}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" fontSize={fontSize.body}>
                  {startDate} - {endDate}
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle2" fontSize={fontSize.body}>
              {experience.description}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default ResumeExperience
