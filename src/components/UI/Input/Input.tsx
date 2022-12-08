import { InputProps } from 'interfaces/Input'
import React from 'react'
import { InputBlock } from './Styles'

export default function Input({ mask = '', maskChar = '', ...props }: InputProps) {
	return (
		<InputBlock
			mask={mask}
			maskChar={maskChar} 
			{...props}
		/>
	)
}
