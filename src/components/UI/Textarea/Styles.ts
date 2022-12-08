import styled from "styled-components";

export const TextareaBlock = styled.textarea`
	background: transparent;
	border: 1px solid #CFCFCF;
	height: 15rem;
	width: 100%;
	padding: 1.5rem;
	color: ${props => props.theme.colors.darkBlue};
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.8rem;
	outline: none;
	resize: vertical;
`