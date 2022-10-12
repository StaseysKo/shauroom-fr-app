import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';
// layouts
import Layout from '../src/layouts';
// components
import { Page, Image } from '../src/components';
import { MotionContainer, varBounce } from '../src/components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(15, 2.5),
}));

// ----------------------------------------------------------------------

export default function PageNotFound() {
  return (
    <MotionContainer>
      <Page title="404 - Страница не найдена">
        <RootStyle>
          <Stack alignItems="center" sx={{ maxWidth: 480 }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                Такой страницы нет...
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Проверьте, возможно вы ошиблись в URL
            </Typography>

            <m.div variants={varBounce().in}>
              <Image
                alt="404"
                src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_404.svg"
                sx={{ maxWidth: 320, my: { xs: 6, sm: 8 } }}
              />
            </m.div>

            <NextLink href="/" passHref>
              <Button size="large" variant="contained">
                Главная
              </Button>
            </NextLink>
          </Stack>
        </RootStyle>
      </Page>
    </MotionContainer>
  );
}

// ----------------------------------------------------------------------

PageNotFound.getLayout = function getLayout(page) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};
