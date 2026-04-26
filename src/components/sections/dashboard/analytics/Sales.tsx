import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../../../openbudget_uz_raqamlar.json';

const Sales = () => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ px: 2.5, py: 1.5, height: 100 }}>
      <Typography variant="body2" color="text.disabled">
        {t('sales')}
      </Typography>
      <Typography variant="h3">
        {budgetData.daromadlar_tuzilmasi['2025_yil_1chorak'].soliq_turlari.qqs_trln} Trln
      </Typography>
      <Typography variant="caption" color="text.disabled" fontWeight={400}>
        <Typography variant="body2" component="span" color="success.main" fontWeight={700}>
          +23%
        </Typography>{' '}
        {t('sinceLastMonth')}
      </Typography>
    </Paper>
  );
};

export default Sales;
