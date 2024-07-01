import { ResumeCard } from '@/entities/resume'
import { Resume } from '@/shared/types'
import { StyledCardWrapper } from '@/shared/ui/card-wrapper'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

const Resumes = (props: Props) => {
  const { resumes, setResumes } = props

  const navigate = useNavigate()

  const resumesList = resumes.map(resume => (
    <ResumeCard key={resume.id} resume={resume} resumes={resumes} setResumes={setResumes} />
  ))

  return (
    <Box display="flex">
      {resumesList}
      <StyledCardWrapper>
        <Button
          variant="text"
          onClick={() =>
            navigate('/resumes/2/create', {
              state: {
                resumes
              }
            })
          }
        >
          Add Resume
        </Button>
      </StyledCardWrapper>
    </Box>
  )
}

export default Resumes
