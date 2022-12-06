import { Icons } from 'assets/icons';
import React from 'react'
import { Container, Subtitle, Title, Titles, Description, Footer } from './Styles';

interface Props {
	title: string;
	subtitle: string;
	description: string;
}

export default function ProjectCard({ title, subtitle, description }: Props) {
	return (
		<Container>
			<Titles>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</Titles>
			<Description>{description}</Description>
			<Footer>
				<Icons.Arrow />
			</Footer>
		</Container>
	)
}
