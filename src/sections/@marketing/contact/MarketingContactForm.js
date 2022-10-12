import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SendEmail } from '../../../API';

// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  Typography,
  ToggleButton,
  FormHelperText,
  Slider as MUISlider,
} from '@mui/material';
// utils

import { Link } from '@mui/material';

import Routes from '../../../routes';


// ----------------------------------------------------------------------

const SERVICES = ['Франшиза', 'Инвестиции', 'Другое'];

const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Выберите один из предложенных вариантов'),
  email: Yup.string().required('Укажите e-mail').email('Это слабо похоже на e-mail'),
  city: Yup.string().required('Укажите город'),
  budget: Yup.string().required('Укажите примерную сумму'),
});

// ----------------------------------------------------------------------

export default function MarketingContactForm() {

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      services: [],
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      city: '',
      experience: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    SendEmail(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => {
            // Using with lodash https://lodash.com/docs/4.17.15#xor
            // const onSelected = (service) => xor(field.value, [service]);

            const onSelected = (service) =>
              field.value.includes(service)
                ? field.value.filter((value) => value !== service)
                : [...field.value, service];

            return (
              <div>
                <Stack direction="row" flexWrap="wrap">
                  {SERVICES.map((service) => (
                    <ToggleButton
                      {...field}
                      key={service}
                      color="standard"
                      selected={field.value.includes(service)}
                      onChange={() => field.onChange(onSelected(service))}
                      sx={{
                        py: 0.5,
                        px: 2,
                        m: 0.5,
                        typography: 'body2',
                        '&.Mui-selected': {
                          bgcolor: 'text.primary',
                          color: (theme) =>
                            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                          '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        },
                      }}
                    >
                      {service}
                    </ToggleButton>
                  ))}
                </Stack>

                {error && (
                  <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                    {error?.message}
                  </FormHelperText>
                )}
              </div>
            );
          }}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Имя"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Фамилия"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Телефон"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="В каком городе России планируете открытие"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="experience"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Есть ли у вас управленческий опыт"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Controller
          name="budget"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Сколько средств готовы вложить (в рублях)"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={4}
              label="Почему вам интересно развивать франшизу ШАУROOM"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ pb: 2.5 }}
            />
          )}
        />

        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Отправить запрос
        </LoadingButton>
        <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          Соглашаюсь с
          <Link color="text.primary" target="_blank" href={Routes.privacy}>
            {''} Политикой обработки персональных данных
          </Link>
        </Typography>
      </Stack>
    </form>
  );
}
