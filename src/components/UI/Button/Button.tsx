import { IButton } from 'interfaces/Buttons'
import React from 'react'
import { ButtonBlock } from './Styles'

export default function Button({ children, height, variant, ...props }: IButton) {
	return (
		<ButtonBlock height={height} {...props} variant={variant}>
			{children}
		</ButtonBlock>
	)
}
