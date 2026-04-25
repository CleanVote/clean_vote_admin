import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../../../openbudget_uz_raqamlar.json';

const Earnings = () => {
  const { t } = useTranslation();
  return (
    <Stack component={Paper} p={2.5} alignItems="center" spacing={2.25} height={100}>
      <Stack
        alignItems="center"
        justifyContent="center"
        height={56}
        width={56}
        bgcolor="info.main"
        borderRadius="50%"
      >
        <IconifyIcon icon="ic:round-bar-chart" fontSize="h2.fontSize" color="primary.main" />
      </Stack>
      <div>
        <Typography variant="body2" color="text.disabled">
          {t('earnings')}
        </Typography>
        <Typography mt={0.25} variant="h3">
          $
          {
            budgetData.makroiqtisodiy_korsatkichlar.yaim_hajmi_mln_aholi.find(
              (y: { yil: number; jon_boshiga_yaim_usd: number }) => y.yil === 2025,
            )?.jon_boshiga_yaim_usd
          }
        </Typography>
      </div>
    </Stack>
  );
};

export default Earnings;
 
