import styled from "styled-components";

export const Container = styled.div`
	border-radius: 1.5rem;
	height: fit-content;
	padding: 4rem;
	background: ${props => props.theme.colors.white.white100};
	max-width: 48rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	cursor: pointer;
`

export const Titles = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

export const Title = styled.h5`
	background: ${props => props.theme.colors.darkBlue};
	${props => props.theme.fonts.MullerBold12};
	padding: .1rem .8rem;
	width: fit-content;
	color: ${props => props.theme.colors.white.white100};
`

export const Subtitle = styled.h3`
	color: ${props => props.theme.colors.darkBlue};
	${props => props.theme.fonts.MullerBold24};
	text-decoration-line: underline;
`

export const Description = styled.p`
	${props => props.theme.fonts.MullerRegular18};
	color: ${props => props.theme.colors.darkBlue};
`

export const Footer = styled.div`
	margin-top: 11rem;
	display: flex;
	justify-content: flex-end;
	svg {
		width: 5rem;
		height: 1.6rem;
	}
`