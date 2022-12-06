import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/theme'

export default function MainProvider({ children }: any) {
	return (
		<ThemeProvider theme={Theme}>
			{children}
		</ThemeProvider>
	)
}
