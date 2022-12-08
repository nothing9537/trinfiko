import ReactInputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

export const InputBlock = styled(ReactInputMask)`
	background: transparent;
	border: 1px solid #CFCFCF;
	height: 5.8rem;
	width: 100%;
	padding: 1.5rem;
	color: ${props => props.theme.colors.darkBlue};
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.8rem;
	${props => props.type === 'file' && css`
		display: none;
	`}
`