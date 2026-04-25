import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CountryMenu from './CountryMenu';
import { useTranslation } from 'react-i18next';

const Balance = () => {
  const { t } = useTranslation();
  return (
    <Stack
      component={Paper}
      alignItems="center"
      justifyContent="space-between"
      p={2.5}
      height={100}
    >
      <div>
        <Typography variant="body2" color="text.disabled">
          {t('yourBalance')}
        </Typography>
        <Typography mt={0.25} variant="h3">
          $1,000
        </Typography>
      </div>
      <CountryMenu />
    </Stack>
  );
};

export default Balance;
