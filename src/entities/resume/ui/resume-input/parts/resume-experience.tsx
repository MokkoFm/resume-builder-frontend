import { Box, Button, Collapse, Divider, TextField } from '@mui/material'
import { Experience } from '@/entities/resume'
import { useState } from 'react'
import { Resume } from '@/shared/types'

type Props = {
  experiences: Experience[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
}

const ResumeExperienceInput = (props: Props) => {
  const { experiences, setResume } = props
  const [open, setOpen] = useState(false)

  const handleExperienceChange = (property: string, value: string, index: number) => {
    const updatedExperience = { ...experiences[index], [property]: value }
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = updatedExperience
    setResume(prev => ({ ...prev, experiences: updatedExperiences }))
  }

  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Experience
      </Button>
      <Collapse in={open}>
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
              <TextField label="Company" value={experience.company} />
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
              <TextField label="End Date" value={experience.endDate} />
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
