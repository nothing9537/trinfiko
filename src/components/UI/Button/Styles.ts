import { IButton } from './../../../interfaces/Buttons';
import styled, { css } from "styled-components";

export const ButtonBlock = styled.button<IButton>`
	letter-spacing: 0.05em;
	background: transparent;
	text-transform: uppercase;
	width: fit-content;
	white-space: nowrap;
	height: ${props => props.height ? props.height : '6.6rem'};
	padding: ${props => props.padding ? props.padding : '7.2rem'};
	border-radius: .5rem;
	color: ${props => props.theme.colors.white.white100};
	line-height: 2rem;
	border-radius: .5rem;
	${props => props.variant === 'transparent' && css`
		border: .1rem solid ${props => props.theme.colors.white.white100};
		color: ${props => props.theme.colors.white.white100};
		background: transparent;
		font-style: normal;
		font-weight: 700;
		font-size: 1.8rem;
		&:hover {
			opacity: .6;
		}
	`}

	${props => props.variant === 'solid' && css`
		font-weight: 600;
		background: ${props => props.theme.colors.darkBlue};
		&:hover {
			opacity: .7;
		}
	`}
`