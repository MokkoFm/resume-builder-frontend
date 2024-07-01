import { Box, Button, Collapse, TextField } from '@mui/material'
import { Certification } from '@/entities/resume'
import { Resume } from '@/shared/types'
import { Section } from '../index'

type Props = {
  certifications: Certification[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  activeSection: Section
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>
  isNewResume: boolean
}

const ResumeCertificatesInput = (props: Props) => {
  const { certifications, setResume, activeSection, setActiveSection, isNewResume } = props

  const handleCertificateChange = (property: string, value: string, index: number) => {
    const updatedCertificate = { ...certifications[index], [property]: value }
    const updatedCertificates = [...certifications]
    updatedCertificates[index] = updatedCertificate
    setResume(prev => ({ ...prev, certifications: updatedCertificates }))
  }

  const isActive = activeSection === 'certifications'

  const onSectionNameClick = () => {
    setActiveSection('certifications')
    if (isNewResume && !certifications.length) {
      setResume(prev => ({
        ...prev,
        certifications: [
          {
            name: '',
            date: ''
          }
        ]
      }))
    }
  }

  return (
    <Box>
      <Button variant="text" onClick={onSectionNameClick}>
        Certificates
      </Button>
      <Collapse in={isActive}>
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
