import { Template } from '@/shared/types'
import { Box, Button, Collapse, FormControlLabel, Switch, TextField } from '@mui/material'
import { Section } from '../index'

type Props = {
  selectedTemplate: Template
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template>>
  activeSection: Section
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>
}

const TemplateSettings = (props: Props) => {
  const { selectedTemplate, setSelectedTemplate, activeSection, setActiveSection } = props
  const templateConfig = selectedTemplate.config

  const handleTemplateConfigChange = (key: string, value: string | number | boolean) => {
    const splitKey = key.split('.')
    if (splitKey.length === 1) {
      setSelectedTemplate({
        ...selectedTemplate,
        config: {
          ...selectedTemplate.config,
          [key]: value
        }
      })
      return
    } else {
      const [firstKey, secondKey] = splitKey
      setSelectedTemplate({
        ...selectedTemplate,
        config: {
          ...selectedTemplate.config,
          [firstKey]: {
            // @ts-ignore
            ...selectedTemplate.config[firstKey],
            [secondKey]: value
          }
        }
      })
    }
  }
  const isActive = activeSection === 'template-settings'
  return (
    <Box>
      <Button variant="text" onClick={() => setActiveSection('template-settings')}>
        Template details
      </Button>
      <Collapse in={isActive}>
        <Box display="flex" justifyContent="space-between" my={2}>
          <TextField
            fullWidth
            label="Title"
            type="number"
            value={selectedTemplate.config.fontSize.title}
            onChange={e => handleTemplateConfigChange('fontSize.title', parseInt(e.target.value))}
            sx={{ mr: 1 }}
          />
          <TextField
            fullWidth
            label="Subtitle"
            type="number"
            value={templateConfig.fontSize.subtitle}
            onChange={e =>
              handleTemplateConfigChange('fontSize.subtitle', parseInt(e.target.value))
            }
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            fullWidth
            label="Heading"
            type="number"
            value={templateConfig.fontSize.heading}
            onChange={e => handleTemplateConfigChange('fontSize.heading', parseInt(e.target.value))}
            sx={{ mr: 1 }}
          />
          <TextField
            fullWidth
            label="Body"
            type="number"
            value={templateConfig.fontSize.body}
            onChange={e => handleTemplateConfigChange('fontSize.body', parseInt(e.target.value))}
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            fullWidth
            label="Horizontal margin"
            type="number"
            value={templateConfig.margins.horizontal}
            onChange={e =>
              handleTemplateConfigChange('margins.horizontal', parseInt(e.target.value))
            }
            sx={{ mr: 1 }}
          />
          <TextField
            fullWidth
            label="Vertical margin"
            type="number"
            value={templateConfig.margins.vertical}
            onChange={e => handleTemplateConfigChange('margins.vertical', parseInt(e.target.value))}
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            fullWidth
            label="Primary color"
            value={templateConfig.colorSchema.primaryColor}
            onChange={e => handleTemplateConfigChange('colorSchema.primaryColor', e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            fullWidth
            label="Secondary color"
            value={templateConfig.colorSchema.secondaryColor}
            onChange={e => handleTemplateConfigChange('colorSchema.secondaryColor', e.target.value)}
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            fullWidth
            label="Watermark URL"
            value={templateConfig.watermark.url}
            onChange={e => handleTemplateConfigChange('watermark.url', e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            fullWidth
            label="Header image URL"
            value={templateConfig.headerImage}
            onChange={e => handleTemplateConfigChange('headerImage', e.target.value)}
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.header}
                onChange={e => handleTemplateConfigChange('sections.header', e.target.checked)}
              />
            }
            label="Header"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.personalDetails}
                onChange={e =>
                  handleTemplateConfigChange('sections.personalDetails', e.target.checked)
                }
              />
            }
            label="Personal details"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.about}
                onChange={e => handleTemplateConfigChange('sections.about', e.target.checked)}
              />
            }
            label="About"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.experience}
                onChange={e => handleTemplateConfigChange('sections.experience', e.target.checked)}
              />
            }
            label="Experience"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.education}
                onChange={e => handleTemplateConfigChange('sections.education', e.target.checked)}
              />
            }
            label="Education"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.skills}
                onChange={e => handleTemplateConfigChange('sections.skills', e.target.checked)}
              />
            }
            label="Skills"
          />

          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.certifications}
                onChange={e =>
                  handleTemplateConfigChange('sections.certifications', e.target.checked)
                }
              />
            }
            label="Certifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sections.references}
                onChange={e => handleTemplateConfigChange('sections.references', e.target.checked)}
              />
            }
            label="References"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sidebar.hasSidebar}
                onChange={e => handleTemplateConfigChange('sidebar.hasSidebar', e.target.checked)}
              />
            }
            label="Sidebar"
          />
          <TextField
            fullWidth
            label="Sidebar width"
            type="number"
            value={templateConfig.sidebar.width}
            onChange={e => handleTemplateConfigChange('sidebar.width', parseInt(e.target.value))}
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            fullWidth
            label="Sidebar background color"
            value={templateConfig.sidebar.backgroundColor}
            onChange={e => handleTemplateConfigChange('sidebar.backgroundColor', e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            fullWidth
            label="Sidebar text color"
            value={templateConfig.sidebar.textColor}
            onChange={e => handleTemplateConfigChange('sidebar.textColor', e.target.value)}
            sx={{ ml: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sidebar.personalDetails}
                onChange={e =>
                  handleTemplateConfigChange('sidebar.personalDetails', e.target.checked)
                }
              />
            }
            label="Personal details"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sidebar.skills}
                onChange={e =>
                  handleTemplateConfigChange('sidebar.skills', e.target.checked)
                }
              />
            }
            label="Skills"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sidebar.certifications}
                onChange={e =>
                  handleTemplateConfigChange('sidebar.certifications', e.target.checked)
                }
              />
            }
            label="Certifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={templateConfig.sidebar.references}
                onChange={e =>
                  handleTemplateConfigChange('sidebar.references', e.target.checked)
                }
              />
            }
            label="References"
          />
        </Box>
      </Collapse>
    </Box>
  )
}

export default TemplateSettings
