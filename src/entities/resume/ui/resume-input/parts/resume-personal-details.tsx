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
}

const ResumePersonalDetailsInput = (props: Props) => {
  const { title, firstName, lastName, email, phoneNumber, linkedin, description } = props

  const [open, setOpen] = useState(true)
  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Personal details
      </Button>
      <Collapse in={open}>
        <Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <TextField label="Title" value={title} />
            <TextField label="First Name" value={firstName} />
            <TextField label="Last Name" value={lastName} />
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <TextField label="Email" value={email} />
            <TextField label="Phone Number" value={phoneNumber} />
            <TextField label="LinkedIn" value={linkedin} />
          </Box>
          <Box mt={2}>
            <TextField label="Description" value={description} multiline rows={3} fullWidth />
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}

export default ResumePersonalDetailsInput
