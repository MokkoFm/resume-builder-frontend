import { Box, Button, Collapse, TextField, Divider } from '@mui/material'
import { useState } from 'react'
import { Certification } from '@/entities/resume'
import { Resume } from '@/shared/types'

type Props = {
  certifications: Certification[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
}

const ResumeCertificatesInput = (props: Props) => {
  const { certifications, setResume } = props

  const [open, setOpen] = useState(false)

  const handleCertificateChange = (property: string, value: string, index: number) => {
    const updatedCertificate = { ...certifications[index], [property]: value }
    const updatedCertificates = [...certifications]
    updatedCertificates[index] = updatedCertificate
    setResume(prev => ({ ...prev, certifications: updatedCertificates }))
  }

  return (
    <Box>
      <Button variant="text" onClick={() => setOpen(!open)}>
        Certificates
      </Button>
      <Collapse in={open}>
        {certifications.map((certification, index) => (
          <Box key={index} mt={2} display="flex" justifyContent="space-between">
            <TextField
              label="Certificate"
              value={certification.name}
              fullWidth
              sx={{ mr: 1 }}
              onChange={e => handleCertificateChange('name', e.target.value, index)}
            />
            <TextField
              label="Date"
              value={certification.date}
              fullWidth
              sx={{ ml: 1 }}
              onChange={e => handleCertificateChange('date', e.target.value, index)}
            />
          </Box>
        ))}
      </Collapse>
    </Box>
  )
}

export default ResumeCertificatesInput
