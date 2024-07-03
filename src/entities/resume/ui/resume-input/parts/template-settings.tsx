import { Template } from '@/shared/types'
import { Box, Button, Collapse, TextField } from '@mui/material'
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

  const handleTemplateConfigChange = (key: string, value: string | number) => {
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
        <Box display="flex" justifyContent="space-between" my={1}>
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
        <Box display="flex" justifyContent="space-between" mb={1}>
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
        <Box display="flex" justifyContent="space-between" mb={1}>
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
        <Box display="flex" justifyContent="space-between" mb={1}>
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
        <Box display="flex" justifyContent="space-between" mb={1}>
          <TextField
            fullWidth
            label="URL"
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
      </Collapse>
    </Box>
  )
}

export default TemplateSettings
