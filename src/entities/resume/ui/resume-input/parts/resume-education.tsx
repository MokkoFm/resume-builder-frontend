import { Education } from '@/entities/resume'
import { Box, Button, Collapse, TextField, Divider } from '@mui/material'
import { useState } from 'react'

type Props = {
  education: Education[]
}

const ResumeEducationInput = (props: Props) => {
  const { education } = props

  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Education
      </Button>
      <Collapse in={open}>
        {education.map((ed, index) => (
          <Box key={index} mt={2}>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField label="Degree" value={ed.degree} sx={{ mr: 2 }} />
              <TextField label="School" value={ed.school} sx={{ mr: 2 }} />
              <TextField label="University" value={ed.university} />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField label="Location" value={ed.location} />
              <TextField label="Start Date" value={ed.startDate} />
              <TextField label="End Date" value={ed.endDate} />
            </Box>
            <Box mt={2}>
              <TextField label="Description" value={ed.description} multiline rows={3} fullWidth />
            </Box>
            {index < education.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Collapse>
    </Box>
  )
}

export default ResumeEducationInput
