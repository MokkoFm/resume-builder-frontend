import { Education } from '@/entities/resume'
import { Resume, Template } from '@/shared/types'
import { Box, Button, Collapse, TextField, Divider } from '@mui/material'
import { Section } from '../index'

type Props = {
  education: Education[]
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  activeSection: Section
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>
  isNewResume: boolean
}

const ResumeEducationInput = (props: Props) => {
  const { education, setResume, activeSection, setActiveSection, isNewResume } = props

  const handleEductionChange = (property: string, value: string, index: number) => {
    const updatedEducation = { ...education[index], [property]: value }
    const updatedEducations = [...education]
    updatedEducations[index] = updatedEducation
    setResume(prev => ({ ...prev, education: updatedEducations }))
  }

  const isActive = activeSection === 'education'

  const onSectionNameClick = () => {
    setActiveSection('education')
    if (isNewResume && !education.length) {
      setResume(prev => ({
        ...prev,
        education: [
          {
            degree: '',
            major: '',
            school: '',
            university: '',
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
        Education
      </Button>
      <Collapse in={isActive}>
        {education.map((ed, index) => (
          <Box key={index} mt={2}>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField
                label="Degree"
                value={ed.degree}
                sx={{ mr: 2 }}
                onChange={e => handleEductionChange('degree', e.target.value, index)}
              />
              <TextField
                label="School"
                value={ed.school}
                sx={{ mr: 2 }}
                onChange={e => handleEductionChange('school', e.target.value, index)}
              />
              <TextField
                label="University"
                value={ed.university}
                onChange={e => handleEductionChange('university', e.target.value, index)}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField
                label="Location"
                value={ed.location}
                onChange={e => handleEductionChange('location', e.target.value, index)}
              />
              <TextField
                label="Start Date"
                value={ed.startDate}
                onChange={e => handleEductionChange('startDate', e.target.value, index)}
              />
              <TextField
                label="End Date"
                value={ed.endDate}
                onChange={e => handleEductionChange('endDate', e.target.value, index)}
              />
            </Box>
            <Box mt={2}>
              <TextField
                label="Description"
                value={ed.description}
                multiline
                rows={3}
                fullWidth
                onChange={e => handleEductionChange('description', e.target.value, index)}
              />
            </Box>
            {index < education.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Collapse>
    </Box>
  )
}

export default ResumeEducationInput
