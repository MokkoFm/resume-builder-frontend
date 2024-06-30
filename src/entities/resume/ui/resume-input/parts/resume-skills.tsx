import { Box, Button, Collapse, TextField, Divider } from '@mui/material'
import { useState } from 'react'
import { Skill } from '@/entities/resume'

type Props = {
  skills: Skill[]
}

const ResumeSkillsInput = (props: Props) => {
  const { skills } = props

  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Skills
      </Button>
      <Collapse in={open}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {skills.map(skill => (
            <Box key={skill.name} mt={2}>
              <TextField label="Skill" value={skill.name} fullWidth />
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}

export default ResumeSkillsInput
