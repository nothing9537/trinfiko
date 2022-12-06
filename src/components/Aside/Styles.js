import styled from "styled-components";

export const Container = styled.nav`
	position: fixed;
	top: 0;
	z-index: 2;
	left: 0;
	height: 100%;
	width: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-right: .1rem solid ${props => props.theme.colors.white.white10};
`

export const Nav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	position: relative;
`

export const Item = styled.li`
	${props => props.theme.fonts.MullerBold16};
	color: ${props => props.theme.colors.white.white50};
	letter-spacing: 0.05em;
	text-transform: uppercase;
	transition: all .15s;
	a {
		transition: all .15s;
		color: ${props => props.theme.colors.white.white50};
	}
	position: relative;
	&:hover {
		color: ${props => props.theme.colors.white.white100};
		a {
			color: ${props => props.theme.colors.white.white100};
		}
		&::before {
			content: " ";
			width: 2rem;
			height: .1rem;
			position: absolute;
			background: ${props => props.theme.colors.blue};
			left: -3.5rem;
			top: 50%;
		}
	}
`