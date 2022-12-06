import styled from "styled-components";

export const Container = styled.header`
	height: 13rem;
	width: 100%;
	z-index: 2;
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 14.6rem;
	img {
		width: 21.5rem;
		height: 3.6rem;
		transition: all .3s;
		&:hover {
			opacity: .5;
		}
	}
`