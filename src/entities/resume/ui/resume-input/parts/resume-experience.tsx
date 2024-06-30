import { Box, Button, Collapse, Divider, TextField } from '@mui/material'
import { Experience } from '@/entities/resume'
import { useState } from 'react'

type Props = {
  experiences: Experience[]
}

const ResumeExperienceInput = (props: Props) => {
  const { experiences } = props
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Experience
      </Button>
      <Collapse in={open}>
        {experiences.map((experience, index) => (
          <Box key={`${experience.company}-${experience.startDate}`} mt={2}>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField label="Title" value={experience.title} fullWidth sx={{ mr: 2 }} />
              <TextField label="Company" value={experience.company} />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField label="Location" value={experience.location} />
              <TextField label="Start Date" value={experience.startDate} />
              <TextField label="End Date" value={experience.endDate} />
            </Box>
            <Box mt={2}>
              <TextField
                label="Description"
                value={experience.description}
                multiline
                rows={3}
                fullWidth
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
