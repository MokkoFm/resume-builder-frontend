import { Box, Button, Collapse, TextField, Divider } from '@mui/material'
import { useState } from 'react'
import { Certification } from '@/entities/resume'

type Props = {
  certificates: Certification[]
}

const ResumeCertificatesInput = (props: Props) => {
  const { certificates } = props

  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Certificates
      </Button>
      <Collapse in={open}>
        {certificates.map(certificate => (
          <Box key={certificate.name} mt={2} display="flex" justifyContent="space-between">
            <TextField label="Certificate" value={certificate.name} fullWidth sx={{ mr: 1 }} />
            <TextField label="Date" value={certificate.date} fullWidth sx={{ ml: 1 }} />
          </Box>
        ))}
      </Collapse>
    </Box>
  )
}

export default ResumeCertificatesInput
