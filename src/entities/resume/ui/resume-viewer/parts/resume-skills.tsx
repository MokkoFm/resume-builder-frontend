import { Skill } from '@/entities/resume'
import { TemplateConfig } from '@/entities/template'
import { Box, Typography } from '@mui/material'

type Props = {
  skills: Skill[]
  templateConfig: TemplateConfig
}

const ResumeSkills = (props: Props) => {
  const { skills, templateConfig } = props

  if (!skills.length) {
    return null
  }

  const { fontSize } = templateConfig
  return (
    <Box my={1}>
      <Typography variant="h6" fontSize={fontSize.heading} fontWeight={600}>
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {skills.map(skill => (
          <Box key={skill.name} my={1} mr={2}>
            <Typography variant="subtitle1" fontSize={fontSize.body}>
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ResumeSkills
