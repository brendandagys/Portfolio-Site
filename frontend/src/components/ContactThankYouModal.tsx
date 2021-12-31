import { Box, Typography, Modal } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

type MyModalProps = {
  open: boolean
  handleClose: () => void
}

const MyModal = ({ open, handleClose }: MyModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} style={{ textAlign: 'center' }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Thank you!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            I appreciate your interest and will return your message soon!
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default MyModal
