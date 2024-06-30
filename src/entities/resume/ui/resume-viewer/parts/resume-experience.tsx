import { Experience } from '@/entities/resume'
import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

type Props = {
  experiences: Experience[]
}

const ResumeExperience = (props: Props) => {
  const { experiences } = props
  return (
    <Box my={2}>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        Experience
      </Typography>
      {experiences.map(experience => {
        const startDate = format(experience.startDate, 'dd.MM.yyyy')
        const endDate = experience.endDate ? format(experience.endDate, 'dd.MM.yyyy') : 'Present'
        return (
          <Box key={`${experience.company}-${experience.startDate}`} my={3}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="subtitle1">
                  {experience.company}, {experience.title}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">
                  {startDate} - {endDate}
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle2">{experience.description}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default ResumeExperience
