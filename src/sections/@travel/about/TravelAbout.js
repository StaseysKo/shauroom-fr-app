// @mui
import { Grid, Container, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// _data
import _mock from '../../../../_data/mock';
// components
import { CountUpNumber } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'за прошлый год', nameTwo: '+112% годовой прирост', number: 36, million: 'млн' },
  { name: 'средняя рентабельность', nameTwo: 'по всей сети', number: 27, percent: '%' },
  { name: 'средняя окупаемость вложений', nameTwo: 'по всей сети', number: 22, mounth: 'мес' },
  { name: 'среднее время', nameTwo: 'на открытие', number: 62, days: 'дня' },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Франшиза <br />работающая на тебя
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'text.secondary' }}>
            Строим международный технологический бренд в сфере общественного питания и масштабируем его через франчайзинг на честных условиях
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: { xs: 8, md: 0 },
          mb: { xs: 8, md: 15 },
          textAlign: 'center',
          display: 'grid',
          rowGap: 5,
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUpNumber
                start={value.number / 5}
                end={value.number}
                formattingFn={(value) => fShortenNumber(value)}
              />
              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                {value.percent}
              </Typography>

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                {value.million}
              </Typography>

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                {value.mounth}
              </Typography>

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                {value.days}
              </Typography>

            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
              <br></br>
              {value.nameTwo}

            </Typography>
          </div>
        ))}
      </Box>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{
          py: { xs: 8, md: 0 },
        }}
      >
        <Grid item xs={12} md={9} sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'text.secondary' }}>
            Рынок общественного питания переполнен компаниями, которые делают однотипный продукт,
            не вызывающий никаких эмоций. Мы делаем сильный и по-настоящему уникальный продукт
            совершенно другого уровня, и хотим рассказать о нем на международном рынке.
            За четыре года мы проработали и отточили в этом бизнесе даже самые маленькие детали
            и знаем все о его особенностях.  Мы помешаны на цифрах и объективном
            управлении  и ищем единомышленников для создания глобального бренда.
          </Typography>
        </Grid>
      </Grid>
    </Container >
  );
}
