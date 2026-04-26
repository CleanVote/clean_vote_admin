import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../openbudget.json';

const orgs = budgetData.participating_organizations;

const Organizations = () => {
  const { t } = useTranslation();

  return (
    <Box p={1}>
      <Typography variant="h3" fontWeight={700} mb={1}>
        {t('organizations')}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        OpenBudget.uz tizimida ishtirok etuvchi tashkilotlar
      </Typography>

      {/* Government */}
      <Typography variant="h5" fontWeight={600} mb={2}>
        🏛️ Davlat tashkilotlari
      </Typography>
      <Grid container spacing={2} mb={4}>
        {orgs.government_bodies.map(
          (
            org: {
              name: string;
              role: string;
              responsibilities: string[];
              contact?: { phone?: string; email?: string; address?: string };
              estimated_count?: number;
              count?: number;
              levels?: string[];
            },
            i: number,
          ) => (
            <Grid item xs={12} md={6} key={i}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                  {org.name}
                </Typography>
                <Chip label={org.role} size="small" color="primary" sx={{ mb: 1.5 }} />
                <Typography variant="caption" color="text.secondary" display="block" mb={1}>
                  Vazifalari:
                </Typography>
                <Stack spacing={0.5} mb={1.5}>
                  {org.responsibilities.map((r: string, ri: number) => (
                    <Typography key={ri} variant="body2">
                      • {r}
                    </Typography>
                  ))}
                </Stack>
                {org.contact && (
                  <>
                    <Divider sx={{ my: 1 }} />
                    <Stack spacing={0.5}>
                      {org.contact.phone && (
                        <Typography variant="caption">📞 {org.contact.phone}</Typography>
                      )}
                      {org.contact.email && (
                        <Typography variant="caption">✉️ {org.contact.email}</Typography>
                      )}
                      {org.contact.address && (
                        <Typography variant="caption">📍 {org.contact.address}</Typography>
                      )}
                    </Stack>
                  </>
                )}
                {org.count != null && (
                  <Typography variant="caption" color="text.secondary">
                    Soni: {org.count}
                  </Typography>
                )}
                {org.estimated_count != null && (
                  <Typography variant="caption" color="text.secondary">
                    Taxminiy soni: ~{org.estimated_count.toLocaleString()}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ),
        )}
      </Grid>

      {/* Civil Society */}
      <Typography variant="h5" fontWeight={600} mb={2}>
        🤝 Fuqarolik jamiyati
      </Typography>
      <Grid container spacing={2} mb={4}>
        {orgs.civil_society.map(
          (org: { type: string; estimated_participation: number; roles: string[] }, i: number) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                  {org.type}
                </Typography>
                <Typography variant="body2" color="success.main" fontWeight={600} mb={1.5}>
                  ~{org.estimated_participation.toLocaleString()} ishtirokchi
                </Typography>
                <Stack spacing={0.5}>
                  {org.roles.map((r: string, ri: number) => (
                    <Typography key={ri} variant="body2">
                      • {r}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ),
        )}
      </Grid>

      {/* Private Sector */}
      <Typography variant="h5" fontWeight={600} mb={2}>
        🏢 Xususiy sektor
      </Typography>
      <Grid container spacing={2}>
        {orgs.private_sector.map(
          (
            org: { type: string; role: string; selection_process?: string; engagement?: string },
            i: number,
          ) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                  {org.type}
                </Typography>
                <Chip label={org.role} size="small" color="secondary" sx={{ mb: 1.5 }} />
                {org.selection_process && (
                  <Typography variant="body2" color="text.secondary">
                    Tanlov: {org.selection_process}
                  </Typography>
                )}
                {org.engagement && (
                  <Typography variant="body2" color="text.secondary">
                    Ishtirok: {org.engagement}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
};

export default Organizations;
