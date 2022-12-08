import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
`

export const Video = styled.video`
	min-height: 100vh;
	min-width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
`

export const Wrapper = styled.div`
	max-width: 131rem;
	width: 100%;
	z-index: 3;
	display: flex;
	flex-direction: column;
	gap: 5rem;
	left: 16%;
	position: relative;
	top: 20.2rem; 
`

export const Title = styled.h1`
	${props => props.theme.fonts.MullerBold90};
	color: ${props => props.theme.colors.white.white70};
`

export const SubTitle = styled.h2`
	color: ${props => props.theme.colors.white.white100};
	${props => props.theme.fonts.MullerBold90};
	line-height: 114%;
	font-weight: 500;
	font-size: 7.5rem;
`