import React from 'react'
import { Item, Pag, ProgressBar } from './Styles'

interface Props {
	paginationClassName?: string;
	items: any[];
	currentSlide: number
}

export default function PaginationBlock({ paginationClassName, items, currentSlide }: Props) {
	return (
		<ProgressBar>
			<Pag className={paginationClassName}></Pag>
			{items.map((_, index) =>
				<Item className={currentSlide === index + 1 ? 'active' : ''} />
			)}
		</ProgressBar>
	)
}
