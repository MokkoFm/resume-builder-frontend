import { Box, Button, Collapse, TextField, Divider } from '@mui/material'
import { useState } from 'react'
import { Skill } from '@/entities/resume'
import { Resume } from '@/shared/types'

type Props = {
  skills: Skill[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
}

const ResumeSkillsInput = (props: Props) => {
  const { skills, setResume } = props

  const [open, setOpen] = useState(false)

  const handleSkillNameChange = (value: string, index: number) => {
    const updatedSkill = { ...skills[index], name: value }
    const updatedSkills = [...skills]
    updatedSkills[index] = updatedSkill
    setResume(prev => ({ ...prev, skills: updatedSkills }))
  }
  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Skills
      </Button>
      <Collapse in={open}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {skills.map((skill, index) => (
            <Box key={index} mt={2}>
              <TextField
                label="Skill"
                value={skill.name}
                fullWidth
                onChange={e => handleSkillNameChange(e.target.value, index)}
              />
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}

export default ResumeSkillsInput
