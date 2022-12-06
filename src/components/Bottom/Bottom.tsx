import React from 'react'
import { Container, Phone, Text } from './Styles'

export default function Bottom() {
	return (
		<Container>
			<Text>
				© {new Date().getFullYear()} «ТРИНФИКО ИТ»
			</Text>
			<Phone>
				+7 495 725-25-00
			</Phone>
		</Container>
	)
}
