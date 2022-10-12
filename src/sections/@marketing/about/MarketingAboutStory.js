// @mui
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Stack, Typography, Container } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: '1 этап',
    title: 'Подписание договора',
    description:
      'Обсуждаем все нюансы и при необходимости вносим правки',
  },
  {
    year: '2 этап',
    title: 'Поиск помещения и заключение договора аренды',
    description:
      'Проводим маркетинговые и геоисследования, ищем подходящее помещение и заключаем договор аренды с собственником',
  },
  {
    year: '3 этап',
    title: 'Создание и передача дизайн-проекта',
    description:
      'Специально для найденного помещения разрабатываем дизайн-проект',
  },
  {
    year: '4 этап',
    title: 'Ремонт помещения',
    description:
      'В соответствии с разработанным дизайн-проектом производим ремонт помещения',
  },
  {
    year: '5 этап',
    title: 'Закупка оборудования',
    description:
      'Предоставляем контакты проверенных поставщиков с лояльными ценами и скидками только для наших франчайзи',
  },
  {
    year: '6 этап',
    title: 'Обучение франчайзи',
    description:
      'Франчайзи должен пройти обучение в выбранном УК заведении, понять работу бизнеса изнутри',
  },
  {
    year: '7 этап',
    title: 'Поиск и обучение сотрудников',
    description:
      'Мы помогаем в поиске персонала, выбираем самых квалифицированных и обучаем всем необходимым азам',
  },
  {
    year: '8 этап',
    title: 'Маркетинг',
    description:
      'Создаем рекламную кампанию специально для вашего заведения, ищем заведения-партнёров, разрабатываем маркетинговую стратегрию',
  },
  {
    year: '9 этап',
    title: 'Финальная подготовка',
    description:
      'Проверяем готовность помещения и компетенции сотрудников после обучения. Указываем на узкие места и точки роста бизнес-процессов, помогаем устранить все неполадки, если таковые найдутся',
  },
  {
    year: '10 этап',
    title: 'Открытие заведения',
    description:
      'Старт работы вашего заведения',
  },
];

const COLORS = ['primary', 'primary', 'primary', 'primary', 'primary', 'primary', 'primary', 'primary', 'primary', 'primary'];

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            textAlign: 'center',
            mx: 'auto',
            mb: { xs: 8, md: 15 },
          }}
        >
          <Typography variant="h2">Этапы открытия</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Среднее время необходимое на открытие - 60 дней
          </Typography>
        </Stack>

        <Timeline position={isDesktop ? 'alternate' : 'right'}>
          {CORE_VALUES.map((value, index) => {
            const { title, description, year } = value;
            return (
              <TimelineItem
                key={title}
                sx={{
                  '&:before': {
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                    {year}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </RootStyle>
  );
}
