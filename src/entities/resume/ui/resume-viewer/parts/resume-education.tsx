import { Education } from '@/entities/resume/types'
import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

type Props = {
  education: Education[]
}

const ResumeEducation = (props: Props) => {
  const { education } = props
  return (
    <Box my={2}>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        Education
      </Typography>
      {education.map(education => {
        const startDate = format(education.startDate, 'dd.MM.yyyy')
        const endDate = education.endDate ? format(education.endDate, 'dd.MM.yyyy') : 'Present'
        const educationPlace = education.school ?? education.university
        return (
          <Box key={`${education.major}-${education.startDate}`} my={3}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="subtitle1">
                  {educationPlace}, {education.degree}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">
                  {startDate} - {endDate}
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle2">{education.description}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default ResumeEducation
