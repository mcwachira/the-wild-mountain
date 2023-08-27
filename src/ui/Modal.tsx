import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import {useOutsideClick} from '../hooks/useOutsideClick.ts'



const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;


// interface ModalProps{
//     children?:React.ReactNode,
//     onClose:() => void
// }
//
//
//
// const Modal = ({children, onClose}:ModalProps) => {
//
//     const  [openModal, setOpenModal] = useState<boolean>(false);
//     return  createPortal(
//
//
//         <Overlay>
//             <StyledModal>
//
//                 <Button onClick={onClose}>
//
//                     <HiXMark/>
//
//                 </Button>
//                 <div>
//
//                     {children}
//                 </div>
//             </StyledModal>
//         </Overlay>,
//         document.body
//
//     )
// }
// export default Modal



//
// const ModalContext = createContext<ContextTypes>();
// function Modal ({children}:ModalProps) {
//
//     const  [openName, setOpenName] = useState<string>("");
//
//     const close = () => setOpenName("")
//     const open = () => setOpenName
//
//
//     return (
//         <ModalContext.Provider value={{ openName, close, open }}>
//             {children}
//         </ModalContext.Provider>
//     );
// }
//
//     function Open({children, opens:opensWindowName}:OpenProps) {
//
//     const {open} = useContext(ModalContext);
//
//     return cloneElement(children, {onClick:() => open(opensWindowName)})
//
//     }
//
//
//
//     function Window({children, name}:WindowProps){
//
//     const {openName, close} = useContext(ModalContext)
//         console.log(openName)
//
//         if(name !== openName) return null;
//
//     return  createPortal(
//
//
//         <Overlay>
//             <StyledModal>
//
//                 <Button onClick={close}>
//
//                     <HiXMark/>
//
//                 </Button>
//                 <div>
//
//                     {cloneElement(children, {onCloseModal:close})}
//
//
//                 </div>
//             </StyledModal>
//         </Overlay>,
//         document.body
//
//     )
// }
//
// Modal.Window = Window
//     Modal.Open = Open
// export default Modal


interface ModalProps{
    children?:React.ReactNode,


}


interface OpenProps {
    children?:React.ReactNode,
    opens:string

}

interface WindowProps {
    children?:React.ReactElement,
    name:string,

}

interface ContextTypes{
  openName:string,
    open:(name:string) => React.Dispatch<React.SetStateAction<string>>,
    close:() => void,



}

const ModalContext = createContext<ContextTypes>();

function Modal({children}:ModalProps) {
    const  [openName, setOpenName] = useState<string>("");


    const close = () => setOpenName("");
    const open = setOpenName;


    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({children, opens:opensWindowName}:OpenProps) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({children, name}:WindowProps){
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={close}>
                    <HiXMark />
                </Button>

                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </StyledModal>
        </Overlay>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;