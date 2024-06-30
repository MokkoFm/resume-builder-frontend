import { Skill } from '@/entities/resume'
import { Box, Typography } from '@mui/material'

type Props = {
  skills: Skill[]
}

const ResumeSkills = (props: Props) => {
  const { skills } = props

  if (!skills.length) {
    return null
  }

  return (
    <Box my={2}>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {skills.map(skill => (
          <Box key={skill.name} my={1} mr={2}>
            <Typography variant="subtitle1">{skill.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ResumeSkills
