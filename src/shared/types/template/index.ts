import { TemplateConfig } from "@/entities/template"

export interface Template {
    id: string
    title: string
    updatedAt: string
    config: TemplateConfig
  }
  