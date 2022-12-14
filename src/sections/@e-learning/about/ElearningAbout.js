// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Stack } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Сумма инвестиций',
    number: 'от ₽5 млн ',
    description:
      'На аренду, ремонт, оборудование и операционный убыток',
  },
  {
    name: 'Паушальный взнос',
    number: '₽450.000',
    description:
      'Единоразовый платеж за право использования товарного знака',
  },
  {
    name: 'Роялти от выручки',
    number: '3%',
    description:
      'Ежемесячная выплата от выручки за использование патента',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function ElearningAbout() {
  return (
    <RootStyle>
      <Container>
        {/* <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              Nullam accumsan lorem in dui.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Effective Forms Advertising Internet Web Site
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Over 92% of computers are infected with Adware and spyware. Such software is rarely
              accompanied by uninstall utility and even when it is it almost always leaves broken
              Windows
            </Typography>
          </Grid>
        </Grid> */}

        <Grid
          container
          spacing={8}
          direction={{ md: 'row-reverse' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            pt: { xs: 8, md: 10 },
          }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Image
              alt="about"
              src="http://shauroom-test.ru/img/shauroom.jpg"
              ratio="3/4"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Stack spacing={{ xs: 5, md: 10 }}>
              {SUMMARY.map((value) => (
                <Box key={value.name}>
                  <Typography variant="h4" sx={{ color: 'text.disabled', opacity: 0.48 }}>
                    {value.name}
                  </Typography>

                  <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                    {value.number}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
