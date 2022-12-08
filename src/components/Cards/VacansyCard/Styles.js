import styled from "styled-components";

export const Container = styled.div`
	max-width: 47rem;
	cursor: pointer;
	width: 100%;
	background: ${props => props.theme.colors.white.white100};
	border-radius: 1.5rem;
	padding: 4rem;
`

export const Job = styled.p`
	color: ${props => props.theme.colors.darkBlue};
	font-weight: 700;
	font-size: 2.7rem;
	line-height: 133%;
	text-decoration-line: underline;
`