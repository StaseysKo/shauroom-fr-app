import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Paper, Container, Typography } from '@mui/material';
// hooks
import { useResponsive } from '../../../hooks';
// components
import { varFade, Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

MarketingLandingCaseStudies.propTypes = {
  caseStudies: PropTypes.array.isRequired,
};

export default function MarketingLandingCaseStudies({ caseStudies }) {
  const isDesktop = useResponsive('up', 'md');

  const getData = (index) => {
    const item = caseStudies[index];
    return {
      slug: item.slug,
      title: item.frontmatter,
      coverImg: item.frontmatter,
      category: item.frontmatter,
      description: item.frontmatter,
    };
  };

  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            mb: { xs: 0, md: 10 },
            textAlign: 'center',
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mt: 3, mb: 3 }}>
              Бренд, атмосфера, продукт
            </Typography>
          </m.div>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{
              py: { xs: 3, md: 0 },
            }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: 'text.secondary' }}>
                Вы можете попробовать сами, с нуля построить бизнес в сфере общественного питания, потратить деньги и время на создание главных атрибутов, столкнуться с проблемами которые мы уже решили, с задачами, которые мы уже оптимизировали или просто развивайте вместе с нами:
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3} alignItems="center" sx={{ py: { xs: 0, md: 0 } }}>
          {/* Item 1 */}
          <Grid item xs={12} sm={6} md={2}>
            <SmallItem {...getData(0)} isDesktop={isDesktop} />
          </Grid>

          {!isDesktop && (
            <Grid item xs={12} sm={6} md={2}>
              <SmallItemTwo {...getData(5)} isDesktop={isDesktop} />
            </Grid>
          )}

          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={3}>
              {/* Item 2 */}
              <Grid item xs={12} sm={6} md={9}>
                <LargeItem {...getData(1)} />
                {/* <SmallItem {...getData(1)} isSquare isDesktop={isDesktop} /> */}
              </Grid>

              {/* Item 3 */}
              <Grid item xs={0} sm={6} md={3}>
                <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
                  <SmallItemThree {...getData(2)} isSquare isDesktop={isDesktop} />
                </Stack>
              </Grid>

              {/* Item 4 */}
              <Grid item xs={0} sm={6} md={3}>
                <SmallItemFour {...getData(3)} isSquare isDesktop={isDesktop} />
              </Grid>

              {/* Item 5 */}
              <Grid item xs={12} sm={6} md={9}>
                <LargeItemSecond {...getData(4)} />
                {/* <SmallItem {...getData(4)} isSquare isDesktop={isDesktop} /> */}
              </Grid>


              {/* Item 3 */}
              <Grid item xs={0} sm={6} md={3}>
                <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
                  <SmallItemSix {...getData(2)} isSquare isDesktop={isDesktop} />
                </Stack>
              </Grid>

              {/* Item 4 */}
              <Grid item xs={0} sm={6} md={3}>
                <SmallItemSeven {...getData(3)} isSquare isDesktop={isDesktop} />
              </Grid>


              <Grid item xs={12} sm={6} md={9}>
                <LargeItemThree {...getData(1)} />
                {/* <SmallItem {...getData(1)} isSquare isDesktop={isDesktop} /> */}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <SmallItemFive {...getData(3)} />
              </Grid>
            </Grid>
          </Grid>

          {/* Item 6 */}
          {isDesktop && (
            <Grid item xs={12} sm={6} md={2}>
              <SmallItemTwo {...getData(5)} isDesktop={isDesktop} />
            </Grid>
          )}
        </Grid>

        {/* <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
          <NextLink href={Routes.marketing.caseStudies} passHref>
            <Button size="large" endIcon={<Iconify icon={directionStraightRight} />}>
              View all
            </Button>
          </NextLink>
        </Stack> */}
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

LargeItem.propTypes = {
  category: PropTypes.string,
  coverImg: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
};

function LargeItem({ slug, coverImg, title, category, description }) {
  return (
    <Paper sx={{ borderRadius: 2, boxShadow: (theme) => theme.customShadows.z24 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 0.75 }}>
            <Image alt="cover" src='http://shauroom-test.ru/img/alya.jpeg' ratio="3/4" sx={{ borderRadius: 2 }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            alignItems="flex-end"
            justifyContent="space-between"
            sx={{ p: 3, pt: 5, height: 1 }}
          >
            <div>
              <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
                Бренд, которому доверяют
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Построить узнаваемый бренд - это сложная задача, выстроить долговечные отношения с гостями - задача еще сложнее, но мы довольно хорошо справляемся!
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

// ----------------------------------------------------------------------

LargeItemSecond.propTypes = {
  category: PropTypes.string,
  coverImg: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
};

function LargeItemSecond({ slug, coverImg, title, category, description }) {
  return (
    <Paper sx={{ borderRadius: 2, boxShadow: (theme) => theme.customShadows.z24 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 0.75 }}>
            <Image alt="cover" src='http://shauroom-test.ru/img/giros.jpeg' ratio="3/4" sx={{ borderRadius: 2 }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            alignItems="flex-end"
            justifyContent="space-between"
            sx={{ p: 3, pt: 5, height: 1 }}
          >
            <div>
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                {category}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
                Атмосферу, за которой возвращаются
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Мы тщательно следим за эргономикой и общей атмосферой, чтобы всем нашим гостям было комфортно во всех заведениях сети.
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

// ----------------------------------------------------------------------

LargeItemThree.propTypes = {
  category: PropTypes.string,
  coverImg: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
};

function LargeItemThree({ slug, coverImg, title, category, description }) {
  return (
    <Paper sx={{ borderRadius: 2, boxShadow: (theme) => theme.customShadows.z24 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 0.75 }}>
            <Image alt="cover" src='http://shauroom-test.ru/img/meat.jpeg' ratio="3/4" sx={{ borderRadius: 2 }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            alignItems="flex-end"
            justifyContent="space-between"
            sx={{ p: 3, pt: 5, height: 1 }}
          >
            <div>
              <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
                Продукт,который любят
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Уникальность, качество, стандартизированность - вот почему наш продукт один из лучших на рынке.
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

// ----------------------------------------------------------------------

SmallItem.propTypes = {
  category: PropTypes.string,
  coverImg: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  isSquare: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

function SmallItem({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div>
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/nuggets.jpg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </m.div>
    </Paper>
  );
}

function SmallItemTwo({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div>
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/french-fries-2.jpg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </m.div>
    </Paper>
  );
}

function SmallItemThree({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div>
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/cheesecake-2.jpg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </m.div>
    </Paper>
  );
}

function SmallItemFour({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div>
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/cheesecake-1.jpeg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </m.div>
    </Paper>
  );
}


function SmallItemFive({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div >
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/roomster.jpeg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </m.div>
    </Paper>
  );
}


function SmallItemSix({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div>
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/cheesecake-2.jpg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'none' },
          }}
        />
      </m.div>
    </Paper>
  );
}

function SmallItemSeven({ slug, coverImg, title, category, isSquare, isDesktop }) {
  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          {category}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>

      <m.div>
        <Image
          alt="cover"
          src='http://shauroom-test.ru/img/cheesecake-2.jpg'
          ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          sx={{
            display: { xs: 'none', sm: 'none' },
          }}
        />
      </m.div>
    </Paper>
  );
}