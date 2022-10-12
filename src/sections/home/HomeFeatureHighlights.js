import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
// theme
import cssStyles from '../../utils/cssStyles';
// routes
import { SvgIconStyle } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  {
    title: 'Узнаваемый бренд',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/brand.svg" />
    ),
  },
  {
    title: 'Авторская рецептура',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/cheff.svg" />
    ),
  },
  {
    title: 'Дизайн-проект заведения',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/design-project.svg" />
    ),
  },
  {
    title: 'Гео-исследования',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/map.svg" />
    ),
  },
  {
    title: 'Маркетинговые исследования',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/marketing_research.svg" />
    ),
  },
  {
    title: 'IT-решения',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/code.svg" />
    ),
  },
  {
    title: 'Обучение персонала', icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/training-cooking.svg" />
    ),
  },
  {
    title: 'Стажировка франчайзи',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/career.svg" />
    ),
  },
  {
    title: 'Бизнес-план',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/plan.svg" />
    ),
  },
  {
    title: 'Единая рекламная кампания',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/adv.svg" />
    ),
  },
  {
    title: 'Доступ к Базе знаний',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/database.svg" />
    ),
  },
  {
    title: 'Сопровождение и поддержка',
    icon: (
      <SvgIconStyle src="http://shauroom-test.ru/img/icon/partner.svg" />
    ),
  },
];

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgGradient({
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {
  return (
    <MotionViewport>
      <RootStyle>
        <Container>
          <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>


              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mt: 0, mb: 5 }}>
                  Предоставим все, что нужно для быстрого старта
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  {`Благодаря нашему опыту вы экономите: финансы, время и силы`}
                </Typography>
              </m.div>

              {/* <m.div variants={varFade().inUp}>
                <Button
                  size="large"
                  variant="contained"
                  target="_blank"
                  rel="noopener"
                  href={Routes.buyNow}
                  sx={{
                    mt: 5,
                    display: {
                      xs: 'none',
                      md: 'inline-flex',
                    },
                  }}
                >
                  Получить пакет документов
                </Button>
              </m.div> */}
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 3,
                  rowGap: 6,
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
                }}
              >
                {FEATURE_HIGHLIGHTS.map((feature) => (
                  <m.div key={feature.title} variants={varFade({ distance: 40 }).inUp}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        '& > svg': { width: 32, height: 32 },
                      }}
                    >
                      {feature.icon}
                      <Typography
                        variant="subtitle2"
                        component="h5"
                        sx={{ mt: 2, fontWeight: 'fontWeightMedium' }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                  </m.div>
                ))}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                display: { md: 'none' },
              }}
            >
              {/* <Button
                size="large"
                variant="contained"
                target="_blank"
                rel="noopener"
                href={Routes.buyNow}
                sx={{ mt: 5 }}
              >
                Purchase Now
              </Button> */}
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </MotionViewport>
  );
}
