import React, { useId } from 'react'
import { Container, Label } from './Styles'

interface Props extends React.HTMLAttributes<HTMLLabelElement | HTMLInputElement> {
	label: string | React.ReactElement;
}

export default function Checkbox({ label, ...props }: Props) {

	const checkboxId = useId()

	return (
		<Container>
			<input type='checkbox' id={checkboxId} {...props} />
			<Label htmlFor={checkboxId} {...props} >
				{label}
			</Label>
		</Container>
	)
}
