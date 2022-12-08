import React from 'react'
import { Container } from './Styles'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children?: any
}

export default function NavigationButton({ children, ...props }: Props) {
	return (
		<Container {...props}>
			{children}
		</Container>
	)
}
