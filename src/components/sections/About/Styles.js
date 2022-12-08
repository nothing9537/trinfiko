import styled from "styled-components";

export const Wrapper = styled.section`
	height: 67rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

`

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`

export const Text = styled.div`
	max-width: 82rem;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`

export const Title = styled.h1`
	${props => props.theme.fonts.MullerBol62};
	color: ${props => props.theme.colors.white.white100};
`

export const Description = styled.h2`
	${props => props.theme.fonts.MullerRegular52};
	color: ${props => props.theme.colors.white.white100};
	font-weight: 500;
	font-size: 3rem;
	line-height: 162%;
`