import { Template } from '@/shared/types'

type Props = {
  template: Template
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const saveEditedTemplate = (props: Props) => {
  const { template, templates, setTemplates } = props
  const updatedTemplates = templates.map(t => (t.id === template.id ? template : t))
  setTemplates(updatedTemplates)
  return updatedTemplates
}
