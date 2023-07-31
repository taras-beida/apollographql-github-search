import { FC, ReactNode } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

interface Props {
  title: string
  content: string
  cancelButton: ReactNode
  confirmButton: ReactNode
  isOpen: boolean
  onCancel: () => void
}

const AppDialog: FC<Props> = ({
  title,
  content,
  cancelButton,
  confirmButton,
  isOpen,
  onCancel,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {cancelButton}
        {confirmButton}
      </DialogActions>
    </Dialog>
  )
}

export default AppDialog
