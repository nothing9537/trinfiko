import styled from "styled-components";

export const Container = styled.button`
	border-radius: 50%;
	background: transparent;
	width: 6.5rem;
	height: 6.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: .1rem solid ${props => props.theme.colors.white.white100};
	svg {
		path {
			fill: ${props => props.theme.colors.white.white100};
		}
	}
`