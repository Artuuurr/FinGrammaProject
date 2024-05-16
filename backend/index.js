const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.dc5xvg1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
	.then(()=> console.log('DB ok'))
	.catch(err=> console.log('DB error', err))

const PORT = process.env.PORT || 3001

const app = express()

const whyCards = [
	{
		imgRoute: '/images/check.svg',
		title: 'Основам и определениям',
		text: 'Получите четкое понимание того, что такое финансовая грамотность и почему она является краеугольным камнем успеха в любой сфере жизни.',
	},
	{
		imgRoute: '/images/users.svg',
		title: 'Пониманию сути денег',
		text: 'Изучите историческое и современное значение денег, их свойства и роль в экономике.',
	},
	{
		imgRoute: '/images/edit.svg',
		title: 'Планированию своих финансов',
		text: 'Научитесь эффективно планировать свой бюджет и вести финансовый учет.',
	},
	{
		imgRoute: '/images/briefcase.svg',
		title: 'Понимать финансовую систему',
		text: 'Изучите, как устроена глобальная финансовая система, каковы функции и роль различных финансовых организаций, и как это влияет на вашу личную финансовую жизнь.',
	},
	{
		imgRoute: '/images/bullseye.svg',
		title: 'Инвестированию и накоплению',
		text: 'Освоите базовые принципы инвестирования и накопления. Узнаете, как разумно вкладывать средства и строить свой капитал.',
	},
	{
		imgRoute: '/images/human.svg',
		title: 'Развитию финансового мышления',
		text: 'Преобразите свой подход к деньгам, улучшите свое финансовое мышление для более эффективного управления личными финансами.',
	},
]

const suitsCards = [
	{
		imgRoute: '/images/icon-list.svg',
		textBold: 'Вы хотите наладить личные финансы',
		text: ' и стремитесь к более эффективному управлению своими доходами и расходами.',
	},
	{
		imgRoute: '/images/icon-analyst.svg',
		textBold: 'Вы планируете начать инвестировать',
		text: ' и хотите изучить основы управления своими инвестициями.',
	},
	{
		imgRoute: '/images/icon-handshake.svg',
		textBold: 'Вы бизнесмен или руководитель',
		text: ', поэтому нуждаетесь в глубоком понимании финансов для лучшего управления бизнесом.',
	},
	{
		imgRoute: '/images/icon-tribune.svg',
		textBold: 'Вы стремитесь к финансовой независимости',
		text: ', хотите научиться создавать и увеличивать свои сбережения для будущих целей.',
	},
	{
		imgRoute: '/images/icon-dreaming.svg',
		textBold: 'Вы заинтересованы в развитии финансового мышления',
		text: ', желаете улучшить свое критическое мышление в финансовой сфере.',
	},
	{
		imgRoute: '/images/icon-joy.svg',
		textBold: 'Вы ищете уверенность в финансовых решениях',
		text: ', хотите научиться принимать их обдуманно и взвешенно.',
	},
]

const findCards = [
	{
		imgRoute: '/images/53.webp',
		title: 'Что такое финансовая грамотность',
		text: 'Определение финансовой грамотности, ее важность и влияние на личную и профессиональную жизнь.',
	},
	{
		imgRoute: '/images/22.webp',
		title: 'Сущность товара и денег',
		text: 'История и эволюция денег, понимание их как товара и функции в современной экономике.',
	},
	{
		imgRoute: '/images/1.webp',
		title: 'Личное финансовое планирование',
		text: 'Методы и стратегии для управления личными финансами, включая планирование бюджета и сбережений.',
	},
	{
		imgRoute: '/images/6.webp',
		title: 'Финансовые организации и их роль',
		text: 'Разбор структуры и функций финансовых организаций, включая централизованные и децентрализованные системы.',
	},
	{
		imgRoute: '/images/44.webp',
		title: 'Психология денег',
		text: 'Как отношение к деньгам влияет на финансовое поведение и как развить здоровые финансовые привычки.',
	},
	{
		imgRoute: '/images/2.webp',
		title: 'Инструменты финансового анализа',
		text: 'Основные инструменты и методы для анализа финансовой информации и принятия обоснованных финансовых решений.',
	},
]

const getCards = [
	{
		imgRoute: '/images/what-after-diploma.webp',
		title: 'Онлайн-сертификат',
		text: 'Об участии в онлайн-программе с подписью и печатью ООО 4брэйн.',
	},
	{
		imgRoute: '/images/what-after-summary.webp',
		title: 'Дополнительные материалы',
		text: 'Сохраняйте ссылки на статьи, названия книг и другие полезные ресурсы.',
	},
	{
		imgRoute: '/images/what-after-statistics.webp',
		title: 'Статистика',
		text: 'Информация о вашем прогрессе на программе и в отдельных упражнениях.',
	}
]

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`)
})

app.get('/api/whyCards', (req, res) => {
	res.json({ whyCards })
})

app.get('/api/suitsCards', (req, res) => {
	res.json({ suitsCards })
})

app.get('/api/findCards', (req, res) => {
	res.json({ findCards })
})

app.get('/api/getCards', (req, res) => {
	res.json({ getCards })
})
