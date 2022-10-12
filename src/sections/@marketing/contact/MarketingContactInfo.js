// icons
import mobileIcon from '@iconify/icons-carbon/mobile';
import emailIcon from '@iconify/icons-carbon/email';
import timeIcon from '@iconify/icons-carbon/time';
// @mui
import { Typography, Stack, Link } from '@mui/material';
// components
import { Iconify, TextIconLabel, Image } from '../../../components';

// ----------------------------------------------------------------------

export default function MarketingContactInfo() {
  return (
    <Stack spacing={3}>
      <Image
        alt="marketing-contact"
        src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_contact.svg"
        sx={{
          maxWidth: 380,
          display: { xs: 'none', md: 'block' },
        }}
      />


      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={mobileIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Позвоните нам</Typography>
            <Typography variant="body2">+7(950) 676-67-39</Typography>
          </Stack>
        }
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={emailIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Напишите нам</Typography>
            <Link color="inherit" variant="body2" href="mailto:hello@example.com">
              fr@shauroom.com
            </Link>
          </Stack>
        }
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={timeIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Рабочее время</Typography>
            <Typography variant="body2">Пн-Пт: 09:00 — 21:00</Typography>
          </Stack>
        }
      />
    </Stack>
  );
}
