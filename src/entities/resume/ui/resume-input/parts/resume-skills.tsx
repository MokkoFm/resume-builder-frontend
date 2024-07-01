import { Box, Button, Collapse, TextField } from '@mui/material'
import { Skill } from '@/entities/resume'
import { Resume } from '@/shared/types'
import { Section } from '..'

type Props = {
  skills: Skill[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  activeSection: Section
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>
  isNewResume: boolean
}

const ResumeSkillsInput = (props: Props) => {
  const { skills, setResume, activeSection, setActiveSection, isNewResume } = props

  const handleSkillNameChange = (value: string, index: number) => {
    const updatedSkill = { ...skills[index], name: value }
    const updatedSkills = [...skills]
    updatedSkills[index] = updatedSkill
    setResume(prev => ({ ...prev, skills: updatedSkills }))
  }

  const isActive = activeSection === 'skills'

  const onSectionNameClick = () => {
    setActiveSection('skills')
    if (isNewResume && !skills.length) {
      setResume(prev => ({
        ...prev,
        skills: [
          {
            name: '',
            score: 0
          }
        ]
      }))
    }
  }
  return (
    <Box>
      <Button variant="text" onClick={onSectionNameClick}>
        Skills
      </Button>
      <Collapse in={isActive}>
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
