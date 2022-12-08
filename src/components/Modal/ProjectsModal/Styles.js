import { Pag, ProgressBar } from "components/PaginationBlock/Styles";
import styled from "styled-components";

export const Wrapper = styled.div`
	width: 97rem;
	height: 76.7rem;
	background: ${props => props.theme.colors.white.white100};
	border-radius: 2rem;
	padding: 6rem 4rem 5rem 7rem;
	margin: 0 !important;
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