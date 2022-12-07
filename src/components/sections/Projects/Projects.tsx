import ProjectCard from 'components/Cards/ProjectCard'
import React from 'react'
import Header from './Header'
import { ProjectsWrapper, Wrapper } from './Styles'

export default function Projects() {

	const items = [
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 1',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 2',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 3',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 4',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 4',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 5',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
	]

	return (
		<Wrapper id='projects-section'>
			<Header />
			<ProjectsWrapper className='customScroll'>
				{items.map((item, index) =>
					<ProjectCard
						title={item.title}
						subtitle={item.subTitle}
						description={item.description}
					/>
				)}
			</ProjectsWrapper>
		</Wrapper>
	)
}
