import styled from "styled-components";

export const Container = styled.footer`
	max-width: ${props => props.theme.consts.layoutWidth};
	width: 100%;
	z-index: 3;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	bottom: 5rem;
	left: 16%;
`

export const Phone = styled.span`
	letter-spacing: 0.27em;
	color: ${props => props.theme.colors.white.white100};
	font-weight: 700;
	font-size: 1.2rem;
`

export const Text = styled.span`
	color: ${props => props.theme.colors.white.white100};
`