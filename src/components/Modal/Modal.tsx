import Portal from 'components/Portal'
import React from 'react'
import { ModalContent, StyledModal } from './Styles'

interface Props {
  children: any;
  isActive: boolean;
  setActive: React.SetStateAction<any>;
  style?: any;
  isContentChildren?: boolean;
}

export default function Modal({ children, isActive, setActive, style, isContentChildren = true }: Props) {

  const modalClasses = [
    // "hideScroll"
  ]
  const modalContentClasses = [
    // "customScroll"
  ]

  if (isActive) {
    modalClasses.push("active")
    modalContentClasses.push("active")
  }

  return (
    <Portal className="modal-portal">
      <StyledModal
        className={modalClasses.join(" ")}
        onClick={() => setActive(false)}
      >
        {!isContentChildren && children}
        <ModalContent
          style={style}
          className={modalContentClasses.join(" ")}
          onClick={(e) => e.stopPropagation()}
        >
          {isContentChildren && children}
        </ModalContent>
      </StyledModal>
    </Portal>
  )
}
