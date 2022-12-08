import styled from "styled-components"

export const ProgressBar = styled.div`
	width: 100%;
	position: absolute;
	bottom: -6rem;
	display: flex;
`

export const Item = styled.button`
	width: 100%;
	background: rgba(255, 255, 255, .2);
	height: .2rem;
	&.active {
		background: white;
	}
`

export const Pag = styled.div`
	color: ${props => props.theme.colors.white.white100};
	font-weight: 400;
	font-size: 1rem;
	line-height: 2rem;
	letter-spacing: 0.27em;
	position: absolute;
	top: -3rem;
`