import { Icons } from 'assets/icons'
import { CloseProjectModalContext } from 'context/closeProjectModal'
import React, { useContext } from 'react'
import { Banner, Container, Header, ModalText, Text, Wrapper } from './Styles'

export default function XBRL() {

	const { setActive } = useContext(CloseProjectModalContext)

	return (
		<Container>
			<Header>
				<Text>XBRL</Text>
				<Icons.Close onClick={() => setActive(false)} />
			</Header>
			<Wrapper className='customScroll'>
				<Banner>
					<img src="/static/images/project-modal-image.png" alt="Project" />
				</Banner>
				<ModalText>
					<p>
						Доверьте создание и настройку XBRL модуля нашей команде. <br />
						Благодаря электронному формату автоматически создается, валидируется и обрабатывается отчетность. Обеспечивается единый смысл значения передаваемых бизнес-фактов. Используя модуль XBRL обеспечивается выполнение следующих требований:
					</p>
					<ul>
						<li>хранение версий подгруженных финальных таксономий;</li>
						<li>сверку актуальной финальной таксономии с предыдущей версией и предоставление результатов сверки</li>
						<li>получение списков отчетов по входной точке; показателей по отчету</li>
						<li>подгрузку и агрегацию данных из различных источников через интерфейсы ручного ввода</li>
						<li>работа с данными нескольких юридических лиц одновременно: валидация, консолидация и хранение показателей </li>
						<li>формирование пользовательских отчетов с результатами проведенной валидации загруженных данных</li>
						<li>формирование и выгрузка отчетов в формате XBRL по занесенным показателям</li>
						<li>визуализация и печать сформированных отчетов</li>
					</ul>
					<p>
						XBRL уже позволяет множеству компаний создавать глобальную финансовую отчетность быстро и комфортно, мы с удовольствием настроим для Вас это решение.
					</p>
				</ModalText>
			</Wrapper>
		</Container>
	)
}
