import { Icons } from 'assets/icons';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import Input from 'components/UI/Input';
import Textarea from 'components/UI/Textarea';
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import Modal from '../Modal'
import { Body, Container, Header, LabelFile, Limit, Resume, ResumeRow, Row, SubmitRow, Text } from './Styles';

interface Props {
	isActive: boolean;
	setActive: React.SetStateAction<any>
}

export default function VacansyModal({ isActive, setActive }: Props) {

	const { register, handleSubmit, control, reset, formState: { isValid } } = useForm({
		mode: "all",
		defaultValues: {
			name: '',
			surname: '',
			email: '',
			phone: '',
			message: ''
		}
	})

	async function onSubmit(data: { name: string, surname: string, email: string, phone: string, message: string }) {
		console.log(data);
		reset()
	}

	function setProps(name: string, onChange: () => any, value: any) {
		return { name, onChange, value }
	}

	return (
		<Modal isActive={isActive} setActive={setActive}>
			<Container>
				<Header>
					<Text>Присоединиться к команде</Text>
					<Icons.Close onClick={() => setActive(false)} />
				</Header>
				<Body onSubmit={handleSubmit(onSubmit)}>
					<Row>
						<Controller
							control={control}
							name='name'
							render={({
								field: { name, onChange, value }
							}) => (
								<Input
									{...setProps(name, onChange, value)}
									placeholder='Имя'
								/>
							)}
						/>
						<Controller
							control={control}
							name='surname'
							render={({
								field: { name, onChange, value }
							}) => (
								<Input
									{...setProps(name, onChange, value)}
									placeholder='Фамилия'
								/>
							)}
						/>
					</Row>
					<Row>
						<Controller
							control={control}
							name='phone'
							render={({
								field: { name, onChange, value }
							}) => (
								<Input
									{...setProps(name, onChange, value)}
									placeholder='Телефон'
									mask='+7 (999) 999-99-99'
								/>
							)}
						/>
						<Controller
							control={control}
							name='email'
							render={({
								field: { name, onChange, value }
							}) => (
								<Input
									{...setProps(name, onChange, value)}
									placeholder='Email'
									type='email'
								/>
							)}
						/>
					</Row>
					<Controller
						control={control}
						name='message'
						render={({
							field: { name, onChange, value }
						}) => (
							<Textarea
								{...setProps(name, onChange, value)}
								placeholder='Сообщение'
								spellCheck={false}
							/>
						)}
					/>
					<Resume>
						<ResumeRow>
							<Icons.Document />
							<LabelFile htmlFor='resume-file'>
								<Input id='resume-file' type='file' />
								Прикрепить резюме
							</LabelFile>
						</ResumeRow>
						<Limit>не более 10 мб</Limit>
					</Resume>
					<hr />
					<SubmitRow>
						<Checkbox label={<div>Я даю согласие на обработку персональных данных согласно <a href="">политики конфиденциальности</a></div>} />
						<Button height='6.6rem' variant='solid' padding='2rem 12rem'>
							Отправить
						</Button>
					</SubmitRow>
				</Body>
			</Container>
		</Modal>
	)
}