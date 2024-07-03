import { Box, Button, Collapse, Divider, TextField } from '@mui/material'
import { Experience } from '@/entities/resume'
import { Resume, Template } from '@/shared/types'
import { Section } from '../index'

type Props = {
  experiences: Experience[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  activeSection: Section
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>
  isNewResume: boolean
}

const ResumeExperienceInput = (props: Props) => {
  const { experiences, setResume, activeSection, setActiveSection, isNewResume } = props

  const handleExperienceChange = (property: string, value: string, index: number) => {
    const updatedExperience = { ...experiences[index], [property]: value }
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = updatedExperience
    setResume(prev => ({ ...prev, experiences: updatedExperiences }))
  }

  const isActive = activeSection === 'experience'

  const onSectionNameClick = () => {
    setActiveSection('experience')
    if (isNewResume && !experiences.length) {
      setResume(prev => ({
        ...prev,
        experiences: [
          {
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            description: ''
          }
        ]
      }))
    }
  }

  return (
    <Box>
      <Button variant="text" onClick={onSectionNameClick}>
        Experience
      </Button>
      <Collapse in={isActive}>
        {experiences.map((experience, index) => (
          <Box key={index} mt={2}>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField
                label="Title"
                value={experience.title}
                fullWidth
                sx={{ mr: 2 }}
                onChange={e => {
                  handleExperienceChange('title', e.target.value, index)
                }}
              />
              <TextField
                label="Company"
                value={experience.company}
                onChange={e => handleExperienceChange('company', e.target.value, index)}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField
                label="Location"
                value={experience.location}
                onChange={e => handleExperienceChange('location', e.target.value, index)}
              />
              <TextField
                label="Start Date"
                value={experience.startDate}
                onChange={e => handleExperienceChange('startDate', e.target.value, index)}
              />
              <TextField
                label="End Date"
                value={experience.endDate}
                onChange={e => handleExperienceChange('endDate', e.target.value, index)}
              />
            </Box>
            <Box mt={2}>
              <TextField
                label="Description"
                value={experience.description}
                multiline
                rows={3}
                fullWidth
                onChange={e => {
                  handleExperienceChange('description', e.target.value, index)
                }}
              />
            </Box>
            {index < experiences.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Collapse>
    </Box>
  )
}

export default ResumeExperienceInput
