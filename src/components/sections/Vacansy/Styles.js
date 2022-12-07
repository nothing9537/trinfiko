import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 7rem;
`

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 2rem;
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8rem;
`

export const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(10rem, 32.5rem));
	gap: 5rem;
`

export const Item = styled.p`
	${props => props.theme.fonts.MullerRegular18};
	color: ${props => props.theme.colors.white.white100};
	font-weight: 400;
	font-size: .83vw;
	line-height: 155%;
`

export const VacansyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	max-width: 50rem;
	width: 100%;
	max-height: 40rem;
	height: 100%;
	overflow-y: scroll;
`