import styled from "styled-components";

export const StyledModal = styled.div`
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(9, 32, 58, .7);
    transform: translate3d(0, 0, 0) !important;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    pointer-events: none;
    &.active {
        z-index: 100;
        pointer-events: all;
        opacity: 1;
    }
`

export const ModalContent = styled.div`
    z-index: 100;
    position: relative;
    top: -10rem;
    transition: .4s all;
    &.active {
        top: 10rem;
        z-index: 100;
        max-height: fit-content;
        /* overflow-y: scroll; */
        transform: scale(1); 
    }
`
