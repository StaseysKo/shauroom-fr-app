// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Ресторанное оборудование',
    description: 'Готовим на профессиональном оборудовании',
    icon: 'http://shauroom-test.ru/img/icon/oven.svg',
  },
  {
    title: 'Квалифицированные сотрудники',
    description: 'Обучаем всех сотрудников и следим за проф. пригодностью',
    icon: 'http://shauroom-test.ru/img/icon/co-worker.svg',
  },
  {
    title: 'Строгий отбор поставщиков',
    description: 'Уникальные условия только для нашей сети',
    icon: 'http://shauroom-test.ru/img/icon/logistic.svg',
  },
  {
    title: 'Единая система стандартов',
    description: 'Готовим строго соблюдая разработанные стандарты ',
    icon: 'http://shauroom-test.ru/img/icon/standards.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h2"
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          Принципы в основе развития
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 8,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgIconStyle
                src={value.icon}
                sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
              />
              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
