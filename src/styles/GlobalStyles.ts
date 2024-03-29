import { createGlobalStyle } from "styled-components";
import '../assets/fonts/fonts.css'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		/* color: white; */
  }

	html, body {
    /* font-size: 1vh; */
		font-size: 10px;
    font-family: 'Muller', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;

		@media (min-width: 1921px) {
			font-size: 1vh !important;
		}
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

	ul {
		list-style: none;
	}

	img, svg {
		user-select: none;
	}

  input {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

	.App {
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		background-image: url('/static/images/bg/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		scroll-behavior: smooth;
	}

	.hideScroll {
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}

	.customScroll {
		overflow-y: auto;
		overflow-x: hidden;
		scrollbar-width: thin;

		&::-webkit-scrollbar-track {
			/* box-shadow: inset 0 0 5px grey;  */
			/* border-radius: 10px; */
			background: #fff;
		}

		&::-webkit-scrollbar {
			width: 1rem;
			border: .1rem solid transparent;
		}
		&::-webkit-scrollbar-thumb {
			background: ${props => props.theme.colors.darkBlue} !important;
			/* border-radius: .5rem !important; */
		}
	}
`