import styled from "styled-components";
export const Label = styled.label`
	color: ${props => props.theme.colors.darkBlue};
	font-weight: 500;
	font-size: 1.6rem;
	display: grid;
	grid-template-columns: 2rem 1fr;
	width: 100%;
	line-height: 2.2rem;
	position: relative;
	transition: .5s all;
	gap: 1.5rem;
	cursor: pointer;
	user-select: none;
	&::before {
		transition: .15s;
		/* margin-right: 1.5rem; */
		width: 2rem;
		height: 2rem;
		border: 1px solid #CFCFCF;
		background: transparent;
		background-repeat: no-repeat;
		background-position: center;
		content: "";
	}
	&::after {
		transition: .4s all;
		opacity: 0;
		position: absolute;
		width: 1rem;
		height: 1rem;
		content: '';
		left: .5rem;
		top: .5rem;
		background: ${props => props.theme.colors.darkBlue};
	}
`

export const Container = styled.div`
	width: 100%;
	cursor: pointer;
	input:checked + label::after {
		opacity: 1;
	}	
	input {
		transition: .15s;
		display: none;
	}
`