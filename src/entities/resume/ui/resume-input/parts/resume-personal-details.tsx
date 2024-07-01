import { Resume } from '@/shared/types'
import { Box, TextField, Collapse, Button } from '@mui/material'
import { useState } from 'react'

type Props = {
  title: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  linkedin: string
  description: string
  setResume: React.Dispatch<React.SetStateAction<Resume>>
}

const ResumePersonalDetailsInput = (props: Props) => {
  const { title, firstName, lastName, email, phoneNumber, linkedin, description, setResume } = props

  const [open, setOpen] = useState(true)

  const handlePersonalDetailsChange = (property: string, value: string) => {
    setResume(prev => ({ ...prev, [property]: value }))
  }

  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Personal details
      </Button>
      <Collapse in={open}>
        <Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <TextField
              label="Title"
              value={title}
              onChange={e => handlePersonalDetailsChange('title', e.target.value)}
            />
            <TextField
              label="First Name"
              value={firstName}
              onChange={e => handlePersonalDetailsChange('firstName', e.target.value)}
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={e => handlePersonalDetailsChange('lastName', e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <TextField
              label="Email"
              value={email}
              onChange={e => handlePersonalDetailsChange('email', e.target.value)}
            />
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={e => handlePersonalDetailsChange('phoneNumber', e.target.value)}
            />
            <TextField
              label="LinkedIn"
              value={linkedin}
              onChange={e => handlePersonalDetailsChange('linkedin', e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Description"
              value={description}
              multiline
              rows={3}
              fullWidth
              onChange={e => handlePersonalDetailsChange('description', e.target.value)}
            />
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}

export default ResumePersonalDetailsInput
