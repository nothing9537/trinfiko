import { TextareaProps } from 'interfaces/Textarea'
import React from 'react'
import { TextareaBlock } from './Styles'

export default function Textarea({ ...props }: TextareaProps) {
	return (
		<TextareaBlock 
			{...props}
		/>
	)
}
