import { Education } from '@/entities/resume/types'
import { TemplateConfig } from '@/entities/template'
import { Box, Typography } from '@mui/material'

type Props = {
  education: Education[]
  templateConfig: TemplateConfig
}

const ResumeEducation = (props: Props) => {
  const { education, templateConfig } = props

  if (!education.length) {
    return null
  }

  const { fontSize } = templateConfig
  return (
    <Box my={1}>
      <Typography variant="h6" fontSize={fontSize.heading} fontWeight={600}>
        Education
      </Typography>
      {education.map(education => {
        const startDate = education.startDate
        const endDate = education.endDate ? education.endDate : 'Present'
        const educationPlace = education.school ?? education.university
        return (
          <Box key={`${education.major}-${education.startDate}`} my={2}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="subtitle1" fontSize={fontSize.body}>
                  {educationPlace}, {education.degree}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" fontSize={fontSize.body}>
                  {startDate} - {endDate}
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle2" fontSize={fontSize.body}>
              {education.description}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default ResumeEducation
