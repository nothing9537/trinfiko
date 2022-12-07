import { Icons } from 'assets/icons';
import React from 'react'
import { Container, Date, Titles, Description, Footer, Title } from './Styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	date: string;
	title: string;
	description: string;
}

export default function NewsCard({ date, title, description, ...props }: Props) {
	return (
		<Container {...props}>
			<Titles>
				<Date>{date}</Date>
				<Title>{title}</Title>
			</Titles>
			<Description>{description}</Description>
			<Footer>
				<Icons.Arrow />
			</Footer>
		</Container>
	)
}
