import styled from "styled-components";

export const StyledModal = styled.div`
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.white.white100};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
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
    transform: scale(.5);
    transition: .4s all;
    &.active {
        z-index: 100;
        max-height: 100vh;
        /* width: fit-content; */
        /* height: fit-content; */
        overflow-y: scroll;
        transform: scale(1); 
    }
`
