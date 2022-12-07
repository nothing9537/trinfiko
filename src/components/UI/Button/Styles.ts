import { IButton } from './../../../interfaces/Buttons';
import styled from "styled-components";

export const ButtonBlock = styled.button<IButton>`
	letter-spacing: 0.05em;
	background: transparent;
	text-transform: uppercase;
	width: fit-content;
	height: ${props => props.height ? props.height : '6.6rem'};
	padding: ${props => props.padding ? props.padding : '7.2rem'};
	border-radius: .5rem;
	color: ${props => props.theme.colors.white.white100};
	border: .1rem solid ${props => props.theme.colors.white.white100};
	font-style: normal;
	font-weight: 700;
	font-size: 1.8rem;
	line-height: 2rem;
	border-radius: .5rem;
	&:hover {
		opacity: .6;
	}
`