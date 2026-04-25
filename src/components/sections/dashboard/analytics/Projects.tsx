import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../../../openbudget_uz_raqamlar.json';

const Projects = () => {
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
        <IconifyIcon icon="ic:baseline-file-copy" fontSize="h3.fontSize" color="primary.main" />
      </Stack>
      <div>
        <Typography variant="body2" color="text.disabled" noWrap>
          {t('totalProjects')}
        </Typography>
        <Typography mt={0.25} variant="h3">
          {budgetData.iqtisodiy_korsatkichlar_2025_yarim_yillik.asosiy_kapital_investitsiya_trln}{' '}
          Trln
        </Typography>
      </div>
    </Stack>
  );
};

export default Projects;
