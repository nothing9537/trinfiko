import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

`

export const Title = styled.h1`
	${props => props.theme.fonts.MullerBol62};
	color: ${props => props.theme.colors.white.white100};
`

export const NavigationButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`

export const NavigationButton = styled.button<React.HTMLAttributes<HTMLButtonElement>>`
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