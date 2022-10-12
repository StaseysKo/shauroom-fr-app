// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: '500 человек',
    description: 'Ежедневно посещают одну точку ШАУROOM',
    icon: 'http://shauroom-test.ru/img/icon/people.svg',
  },
  {
    title: ' 10 000 шаверм',
    description: 'Хот-догов и закусок продаёт одна точка за месяц',
    icon: 'http://shauroom-test.ru/img/icon/shawarma.svg',
  },
  {
    title: '350 рублей',
    description: 'Средний чек при покупке шаурмы',
    icon: 'http://shauroom-test.ru/img/icon/bill.svg',
  },
  {
    title: '3 000 стаканов',
    description: 'Кофе ежемесячно выпивают посетители одной точки',
    icon: 'http://shauroom-test.ru/img/icon/glass.svg',
  },
  {
    title: '>10 тонн',
    description: 'Курицы съедают наши гости за месяц  ',
    icon: 'http://shauroom-test.ru/img/icon/chiken.svg',
  },
  {
    title: '50 литров',
    description: 'Соуса варим ежемесячно',
    icon: 'http://shauroom-test.ru/img/icon/sauce.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 1480,
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Проверенная бизнес-модель</Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 8, md: 10 },
            columnGap: 10,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgIconStyle
                src={value.icon}
                color="info"
                sx={{ width: 64, height: 64, mx: 'auto', bgcolor: 'primary.main' }}
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
