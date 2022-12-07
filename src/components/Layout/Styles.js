import styled from "styled-components";

export const Wrapper = styled.main`
	max-width: ${props => props.theme.consts.layoutWidth};
	width: 100%;
	left: 16%;
	margin-top: 30rem;
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	gap: 40rem;
`