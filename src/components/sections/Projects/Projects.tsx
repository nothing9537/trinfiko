import ProjectCard from 'components/Cards/ProjectCard'
import React from 'react'
import Header from './Header'
import { ProjectsWrapper, Wrapper } from './Styles'

export default function Projects() {
	return (
		<Wrapper>
			<Header />
			<ProjectsWrapper>
				<ProjectCard
					title='Web-решения'
					subtitle='Деловой центр «Юпитер»'
					description='Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
				/>
			</ProjectsWrapper>
		</Wrapper>
	)
}
