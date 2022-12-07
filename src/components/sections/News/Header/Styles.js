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