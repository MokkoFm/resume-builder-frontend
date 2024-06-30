import {
  PersonalDetails,
  Experience,
  Education,
  Certification,
  Reference,
  Skill
} from '@/entities/resume'

export interface Resume {
  id: string
  title: string
  personalDetails: PersonalDetails
  experiences: Experience[]
  education: Education[]
  certifications: Certification[]
  description: string
  reference: Reference[]
  linkedin: string
  skills: Skill[]
  updatedAt: string
}
