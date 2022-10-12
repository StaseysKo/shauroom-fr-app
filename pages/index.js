// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
import { useState, useRef } from 'react';

import Slider from 'react-slick';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../src/config';
// _data
import { _pricingHome, _brands } from '../_data/mock';

import { getAllPosts } from '../src/utils/get-mardown/marketing/posts';

import { fShortenNumber } from '../src/utils/formatNumber';

import PropTypes from 'prop-types';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';

import { m } from 'framer-motion';

import { varFade } from '../src/components';
// sections
import { TravelAbout } from '../src/sections/@travel';
import {
  HomeFeatureHighlights,
} from '../src/sections/home';
import {
  MarketingLandingAbout,
  MarketingServicesInclude,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
  MarketingAboutCoreValues,
  MarketingAboutStory,
  MarketingContactInfo,
  MarketingContactForm
} from '../src/sections/@marketing';

import _mock from '../_data/mock';

import { Image, CountUpNumber } from '../src/components';

import { CarouselDots, CarouselArrows } from '../src/components';

import {
  ElearningAbout,
} from '../src/sections/@e-learning';



// ----------------------------------------------------------------------


const SUMMARY = [
  { name: 'Средний foodcost', nameTwo: '+56% годовой прирост', number: 37, million: 'млн' },
  { name: 'Ужарка мяса', nameTwo: 'по всей сети', number: 13, percent: '%' },
  { name: 'Средний laborcost', nameTwo: 'по всей сети', number: 14, mounth: 'мес' },
  { name: 'Средний papercost', nameTwo: 'на открытие', number: 3, days: 'дня' },
];

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const IMAGESTWO = [...Array(5)].map((_, index) => _mock.image.institution(index + 2));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

HomePage.propTypes = {
  caseStudies: PropTypes.array,
  posts: PropTypes.array.isRequired,
  gallery: PropTypes.array.isRequired,
};

export default function HomePage({ posts, gallery }) {

  const carouselRef = useRef(null);

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    ...CarouselDots({ sx: { my: 3 } }),
  };

  const [setOpenLightbox] = useState(false);
  const [setSelectedImage] = useState(0);

  const handleOpenLightbox = (url) => {
    const selectedImage = gallery.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };
  return (
    <Page title="Франшиза ШАУROOM">
      <RootStyle>

        <TravelAbout />

        <MarketingLandingAbout />

        <MarketingLandingCaseStudies caseStudies='shauroom.com/' />

        <MarketingAboutCoreValues />

        <MarketingLandingServices />

        <HomeFeatureHighlights />

        <MarketingServicesInclude />

        <Container>
          <Box
            sx={{
              mb: { xs: 0, md: 10 },
              textAlign: 'center',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 3, mb: 3 }}>
                Операционная рентабельность
              </Typography>
            </m.div>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              sx={{
                py: { xs: 5, md: 0 },
              }}
            >
              <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Большинство новых заведений в сфере общественного питания закрываются в первых год работы. Это факт, причинами которого служит работа “на глаз”, отсутсвие сквозного анализа продаж и не понимание технической части продукта. Вся наша линейка продуктов проработана и прибыльна
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            {IMAGES.map((img, index) => (
              <Grid
                key={img}
                item
                xs={12}
                sm={6}
                md={index === 0 ? 6 : 2}
                sx={{
                  ...((index === 1 || index === 2 || index === 3) && {
                    display: { xs: 'none', sm: 'block' },
                  }),
                }}
              >
                <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: { xs: 8, md: 10 },
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
                    %
                  </Typography>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {value.name}
                </Typography>
              </div>
            ))}
          </Box>
        </Container>


        <Container>
          <Box
            sx={{
              mb: { xs: 0, md: 10 },
              textAlign: 'center',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 12, mb: 3 }}>
                Таким будет ваше заведение
              </Typography>
            </m.div>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              sx={{
                py: { xs: 2, md: 0 },
              }}
            >
              <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Атмосфера напрямую влияет на показатель возвращаемости, мы не экономим на интерьере и эргономике, мы стремимся предоставить нашим гостям лучший опыт
                </Typography>
              </Grid>
            </Grid>
          </Box>

        </Container>

        <Container sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                mt: -5,
                '&.left': { left: -16 },
                '&.right': { right: -16 },
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {IMAGESTWO.map((img) => (
                <Box key={img} sx={{ px: 1 }}>
                  <Image alt={img} src={img} ratio="1/1" sx={{ borderRadius: 2 }} />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Container>

        {/* <BlogMarketingFeaturedPosts posts={posts.slice(-5)} /> */}

        <MarketingAboutStory />

        <Container>
          <Box
            sx={{
              mb: { xs: -12, md: -8 },
              textAlign: 'center',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 10, mb: 3 }}>
                Условия открытия
              </Typography>
            </m.div>
          </Box>

        </Container>

        <ElearningAbout />
        <div id="anchor" className="element">
        </div>
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Grid
            container
            spacing={{ xs: 8, md: 3 }}
            justifyContent="space-between"
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid item xs={12} md={6} lg={5}>
              <MarketingContactInfo />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h2" sx={{ mb: 5 }}>
                Заявка на сотрудничество
              </Typography>
              <MarketingContactForm />
            </Grid>
          </Grid>
        </Container>

        {/* <MarketingFaqs /> */}

        {/* <HomeForDesigner />

        <PricingHome plans={_pricingHome} />

        <HomeCombination />

        <HomeAdvertisement /> */}
      </RootStyle>
    </Page>
  );
}

PhotoItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  photo: PropTypes.string,
};

function PhotoItem({ photo, onOpenLightbox }) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout simpleFooter>{page}</Layout>;
};



// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}



