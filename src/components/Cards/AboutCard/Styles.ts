import styled from "styled-components";

interface Props {
	url: string
}

export const Container = styled.div<Props>`
	height: fit-content;
	max-width: 55rem;
	width: 100%;
	background: ${props => props.theme.gradients.default};
	background-image: url(${props => props.url});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-radius: 2rem;
	padding: 4rem 4rem 4rem 5rem;
`

export const Title = styled.h4`
	${props => props.theme.fonts.MullerBold24}
	font-weight: 700;
	font-size: 2.35rem;
	color: ${props => props.theme.colors.darkBlue};
`

export const Description = styled.p`
	width: 100%;
	${props => props.theme.fonts.MullerRegular18}
	color: ${props => props.theme.colors.darkBlue};

`