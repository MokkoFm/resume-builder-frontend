import { ResumeCard } from '@/entities/resume'
import { Resume } from '@/shared/types'
import { StyledCardWrapper } from '@/shared/ui/card-wrapper'
import { Box, Typography } from '@mui/material'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

const Resumes = (props: Props) => {
  const { resumes, setResumes } = props
  if (!resumes.length) {
    return (
      <Box py={3}>
        <Typography variant="h4">Resumes</Typography>
        <Typography variant="subtitle1">Here you can see a list of your resumes</Typography>
        <StyledCardWrapper>
          <Typography variant="h6" fontSize={12} textAlign={'center'} fontWeight={600}>
            Add Resume
          </Typography>
        </StyledCardWrapper>
      </Box>
    )
  }

  return resumes.map(resume => (
    <ResumeCard key={resume.id} resume={resume} resumes={resumes} setResumes={setResumes} />
  ))
}

export default Resumes
