import React from 'react'
import { Wrapper } from './Styles'

export default function Layout({ children }: any) {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}
