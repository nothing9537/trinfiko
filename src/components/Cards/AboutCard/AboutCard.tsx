import React from 'react'
import { Container, Description, Title } from './Styles'

interface Props {
	title: string;
	description: string;
	url: string
}

export default function AboutCard({ title, description, url }: Props) {
	return (
		<Container url={url}>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Container>
	)
}
