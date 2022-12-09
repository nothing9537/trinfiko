import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 19rem;
`

export const Contacts = styled.div`

`

export const Title = styled.h2`
	margin-bottom: 3rem;
	font-size: 6.2rem;
	line-height: 7.2rem;
	color: ${props => props.theme.colors.white.white100};
`

export const Description = styled.p`
	font-size: 2.4rem;
	line-height: 155%;
	font-weight: 500;
	color: ${props => props.theme.colors.white.white100};
	margin-bottom: 11rem;

`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	margin-bottom: 4.3rem;
`

export const InfoTitle = styled.span`
	color: #122D59;
	font-size: 1.2rem;
	line-height: 2rem;
	font-weight: 700;
	display: block;
	background: ${props => props.theme.colors.white.white100};
	width: fit-content;
	padding: .1rem 1rem;
`

export const InfoDescription = styled.p`
	font-weight: 500;
	font-size: 2.4rem;
	line-height: 3.2rem;
	color: ${props => props.theme.colors.white.white100};
`

export const MapWrapper = styled.div`
	max-width: 90rem;
	width: 100%;
	overflow: hidden;
	height: 64rem;
	border-radius: 1.5rem;
`