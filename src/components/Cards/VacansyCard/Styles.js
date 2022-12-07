import styled from "styled-components";

export const Container = styled.div`
	max-width: 47rem;
	width: 100%;
	background: ${props => props.theme.colors.white.white100};
	border-radius: 1.5rem;
	padding: 4rem;
`

export const Job = styled.p`
	color: ${props => props.theme.colors.darkBlue};
	font-weight: 400;
	font-size: 0.83vw;
	line-height: 155%;
	text-decoration-line: underline;
`