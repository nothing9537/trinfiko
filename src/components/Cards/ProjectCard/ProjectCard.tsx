import { Icons } from 'assets/icons';
import React from 'react'
import { Container, Subtitle, Title, Titles, Description, Footer } from './Styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	subtitle: string;
	description: string;
}

export default function ProjectCard({ title, subtitle, description, ...props }: Props) {
	return (
		<Container {...props}>
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
