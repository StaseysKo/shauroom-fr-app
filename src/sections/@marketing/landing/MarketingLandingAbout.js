import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Line } from 'react-chartjs-2';

import { Iconify } from '../../../components';

import PropTypes from 'prop-types';

import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Box, Divider } from '@mui/material';
// utils
import { varFade, Image } from '../../../components';



import Chart from 'chart.js/auto';



// ----------------------------------------------------------------------

const data = {
  labels: ['2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Выручка сети',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#93BB3D',
      borderColor: '#fff',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#93BB3D',
      pointBackgroundColor: '#93BB3D',
      pointBorderWidth: 5,
      pointHoverRadius: 12,
      pointHoverBackgroundColor: '#93BB3D',
      pointHoverBorderColor: '#93BB3D',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2392000, 16640000, 27288291, 36328147, 39759856]
    }
  ]
};

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: 0,
    paddingTop: theme.spacing(10),
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Генерала Буткова, 16а', '₽17 863 551', "+31%", <Iconify icon='fluent:money-24-regular' sx={{ width: 30, height: 30 }} />),
  createData('Ленинский проспект, 18', '₽8 251 250', "+21%", <Iconify icon='la:user-secret' sx={{ width: 30, height: 30 }} />),
  createData('Карамзина, 42', '₽6 938 612', <Iconify icon='lucide:baby' sx={{ width: 30, height: 30 }} />, '-'),
  createData('Горького, 104б', '₽3 643 776', '-36%', '-',),
  createData('Красная, 115', '₽3 062 667', <Iconify icon='lucide:baby' sx={{ width: 30, height: 30 }} />, '-'),
];



// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  displayName: 'BarExample'
  return (
    <RootStyle>
      <Container>
        <Image
          alt="langding about"
          src='http://shauroom-test.ru/img/karamzina.jpg'
          ratio="16/9"
          sx={{
            borderRadius: 1.5,
            mb: { xs: 5, md: 10 },
          }}
        />

        <Grid
          container
          rowSpacing={{ xs: 5, md: 0 }}
          columnSpacing={{ md: 3 }}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              О нас
            </Typography>

            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              ШАУROOM - ЭТО
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Сеть заведений в стиле fast casual в Калининграде.
              ШАУROOM - это не просто шаурма.
              Мы создаем полезный продукт с уникальным вкусом!
              Приоритет компании - работать на
              качество и дарить радость гостям!
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={5}>
              <LineItem
                total="5"
                label="заведений"
                text="3 новых заведения открылось в 2021 году"
              />
              <LineItem
                total="36"
                label="млн руб. выручка сети за 2021 год"
                text="годовой прирост +112% "
              />
              <LineItem
                total="4"
                label="года на рынке"
                text="первое заведение окупилось за 10 месяцев работы"
              />
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            mb: { xs: 1, md: 10 },
            textAlign: 'center',
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mt: 13, mb: 3 }}>
              Честность  в основе бизнеса
            </Typography>
          </m.div>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{
              py: { xs: 4, md: 0 },
            }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: 'text.secondary' }}>
                Мы строим бизнес на тотальной открытости, у нас прозрачно все, с самого начала мы публикуем в открытом виде данные о каждом нашем заведении. Нам просто нечего скрывать.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <TableContainer  /*component={Paper}*/>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Юнит</TableCell>
                <TableCell align="left">Продажи&nbsp;(2022 год)</TableCell>
                <TableCell align="left">Год к году&nbsp;(%)</TableCell>
                <TableCell align="left">Достижения</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  hover={true}
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left"><b>{row.calories}</b></TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            mb: { xs: 0, md: 10 },
            textAlign: 'center',
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mt: 13, mb: 3 }}>
              График роста продаж
            </Typography>
          </m.div>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{
              py: { xs: 4, md: 0 },
            }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: 'text.secondary' }}>
                Компания более 3-х лет подряд показывает рост Х2 год к году. <br />Результат правильной работы Управляющей компании и верного вектора развития
                - к 2030 году мы планируем более 100 заведений по России и за Рубежом.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid>
            <Container>
              <div>
                <Line
                  data={data}
                />
              </div>
            </Container>
          </Grid>
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

LineItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  total: PropTypes.string,
};

function LineItem({ total, label, text }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem sx={{ ml: 3, mr: 5 }} />}
    >
      <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
        <Stack direction="row">
          <Typography variant="h2">{total}</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main' }}>
            +
          </Typography>
        </Stack>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {text}
      </Typography>
    </Stack>
  );
}



