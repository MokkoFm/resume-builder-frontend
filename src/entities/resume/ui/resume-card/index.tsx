import { Resume } from '@/shared/types'
import { Box, Button, Typography } from '@mui/material'
import { EditButton } from '@/shared/ui/edit-button'
import { deleteResume } from '@/features/delete-resume'

type Props = {
  resume: Resume
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

export const ResumeCard = ({ resume, resumes, setResumes }: Props) => {
  const { title, firstName, lastName } = resume
  const fullName = `${firstName} ${lastName}`

  return (
    <Box
      width="180px"
      minHeight="200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        border: 'solid 1px black'
      }}
      margin={2}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h6">{fullName}</Typography>
      <EditButton path={`resumes/${resume.id}/edit`} buttonText="Edit resume" variant="contained" />
      <Button
        variant="text"
        color="primary"
        onClick={() => deleteResume({ resume, resumes, setResumes })}
      >
        Delete
      </Button>
    </Box>
  )
}
