import { IButton } from 'interfaces/Buttons'
import React from 'react'
import { ButtonBlock } from './Styles'

export default function Button({ children, height, ...props }: IButton) {
	return (
		<ButtonBlock height={height} {...props}>
			{children}
		</ButtonBlock>
	)
}
