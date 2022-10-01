import { ReactNode, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import './styles.css'
interface ModalProps {
  isOpen: boolean
  setIsOpen: () => void
  children: ReactNode
}

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
      className="mobileModal"
    >
      {children}
    </ReactModal>
  )
}
