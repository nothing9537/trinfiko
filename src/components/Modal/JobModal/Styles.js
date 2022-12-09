import { Pag, ProgressBar } from "components/PaginationBlock/Styles"
import styled from "styled-components"

export const Wrapper = styled.div`
	width: 97rem;
	height: 76.7rem;
	background: ${props => props.theme.colors.white.white100};
	border-radius: 2rem;
	padding: 6rem 4rem 5rem 7rem;
	margin: 0 !important;
`

export const Header = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 6rem;
	svg {
		cursor: pointer;
		&:hover {
			opacity: .5;
		}
	}
`

export const TitleDescription = styled.h3`
	font-weight: 700;
	font-size: 2rem;
	line-height: 155%;
	color: ${props => props.theme.colors.darkBlue};
	margin-bottom: 2rem;
`

export const Description = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 155%;
	color: ${props => props.theme.colors.darkBlue};
	margin-bottom: 5rem;
`

export const Text = styled.h4`
	color: ${props => props.theme.colors.darkBlue};
	font-size: 2.1875vw;
	font-weight: 600;
	line-height: 111%;
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	justify-items: center;
	align-content: center;
	position: relative;
	z-index: 1000;
	width: 100%;
	height: 100%;
	.mySwiper {
		display: flex;
		align-items: center;
		gap: 4rem;
		max-width: 97rem;
		transform: translate3d(0, 0, 0) !important;
	}
	.modal-prev, .modal-next {
		z-index: 10000;
		position: fixed;
		top: 50%;
	}

	.modal-prev {
		left: 15%;
	}

	.modal-next {
		right: 15%;
	}
	${ProgressBar} {
		width: 130rem;
		bottom: 4rem;
		${Pag} {
			width: 1rem;
			height: 1rem;
			background: red;
		}
	}
`