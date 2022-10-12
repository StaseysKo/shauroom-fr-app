import PropTypes from 'prop-types';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Grid, Card, Box } from '@mui/material';

// components
import { Iconify, TextMaxLine, SvgIconStyle } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

import { MotionViewport, varFade } from '../../../components/animate';

import { m } from 'framer-motion';

// ----------------------------------------------------------------------


const VISIONS = [
  {
    number: '100',
    name: 'Пунктов',
    description: 'контроля внутренних процессов заведения от УК',
  },
  {
    number: '36',
    name: 'Критерия',
    description: 'встроено в систему контроля от Тайных агентов, проверки проходят раз в неделю в каждом заведении',
  },
  {
    number: '243',
    name: 'Стандарта',
    description: 'собранно в единой базе знаний'
  },
];


const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <RootStyle>
      <Container>
        {/* <Stack
          spacing={3}
          sx={{
            maxWidth: 466,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Mission</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
          </Typography>
        </Stack> */}

        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
          alignItems={{ md: 'center' }}
        >
          <Grid item xs={12} md={4}>
            <MotionViewport
              sx={{
                pt: { md: 10 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                  Контроль качества
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.secondary', mb: 0 }}>
                  Единая система контроля качества помогает поддерживать высокий уровень продукта. <br></br>Мы тщательно следим за тем, чтобы наш продукт был одинаково вкусным и безопасным в каждом заведении сети.
                </Typography>
              </m.div>

              {/* <m.div variants={varFade().inUp}>
                <NextLink href={Routes.career.about} passHref>
                  <Button
                    color="inherit"
                    size="large"
                    variant="outlined"
                    endIcon={<Iconify icon={chevronRight} sx={{ width: 16, height: 16 }} />}
                  >
                    Записаться на экскурсию
                  </Button>
                </NextLink>
              </m.div> */}
            </MotionViewport>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Stack
              sx={{
                position: 'relative',
              }}
              alignItems={{ md: 'flex-end' }}
            >
              {VISIONS.map((vision, index) => {
                const { number, name, description } = vision;
                const firstVision = index === 0;
                const secondVision = index === 1;
                const thirdVision = index === 2;

                return (
                  <Card
                    key={name}
                    sx={{
                      p: 4,
                      mt: 4,
                      width: { md: 'calc(50% - 16px)' },
                      ...(firstVision && {
                        top: { md: 0 },
                        left: { md: 0 },
                        bottom: { md: 0 },
                        my: { md: 'auto' },
                        boxShadow: { md: 0 },
                        maxHeight: { md: 304 },
                        display: { md: 'flex' },
                        position: { md: 'absolute' },
                        flexDirection: { md: 'column' },
                        justifyContent: { md: 'center' },
                      }),
                      ...(secondVision && {
                        boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                      }),
                      ...(thirdVision && {
                        boxShadow: { md: 0 },
                      }),
                    }}
                  >
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                    >
                      {number}
                    </Typography>

                    <Typography variant="h4" paragraph>
                      {name}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                  </Card>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    icon: PropTypes.any,
    name: PropTypes.string,
    path: PropTypes.string,
    text: PropTypes.string,
  }),
};

function ServiceItem({ service, index }) {
  const { name, icon, text, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 0 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        }),
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
        ...(index === 3 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z4 }),
        }),
      }}
    >
      {/* <Image alt={icon} src={icon} sx={{ width: 88, height: 88, mx: 'auto' }} /> */}
      <SvgIconStyle
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </TextMaxLine>
      </Stack>

      <NextLink href={path} passHref>
        <IconButtonAnimate color="primary">
          <Iconify icon={directionStraightRight} />
        </IconButtonAnimate>
      </NextLink>
    </Card>
  );
}
