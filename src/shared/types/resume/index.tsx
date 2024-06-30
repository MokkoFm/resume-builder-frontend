import { Experience, Education, Certification, Reference, Skill } from '@/entities/resume'

export interface Resume {
  id: string
  title: string
  updatedAt: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  experiences: Experience[]
  education: Education[]
  certifications: Certification[]
  description: string
  references: Reference[]
  linkedin: string
  skills: Skill[]
}
