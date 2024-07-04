import { Template } from '@/shared/types'

type Props = {
  template: Template
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const deleteTemplate = (props: Props) => {
  const { template, templates, setTemplates } = props
  const updatedTemplates = templates.filter(t => t.id !== template.id)
  setTemplates(updatedTemplates)
  return updatedTemplates
}
