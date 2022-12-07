import React from 'react'
import { Container, Job } from './Styles'

interface Props {
	job: string;
}

export default function VacansyCard({ job }: Props) {
	return (
		<Container>
			<Job>{job}</Job>
		</Container>
	)
}
