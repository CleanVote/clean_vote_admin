import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../openbudget.json';

const agg = budgetData.aggregate_statistics_2021_2026;
const impl = agg.implementation_status;

interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}

const StatCard = ({ label, value, sub, color = 'primary.main' }: StatCardProps) => (
  <Paper sx={{ p: 3, height: '100%' }}>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {label}
    </Typography>
    <Typography variant="h3" color={color} fontWeight={700}>
      {value}
    </Typography>
    {sub && (
      <Typography variant="caption" color="text.secondary">
        {sub}
      </Typography>
    )}
  </Paper>
);

const Dashboard = () => {
  const { t } = useTranslation();

  const formatMillions = (n: number) => {
    if (n >= 1_000_000_000_000) return `${(n / 1_000_000_000_000).toFixed(1)} Trln`;
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)} Mlrd`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} Mln`;
    return n.toLocaleString();
  };

  return (
    <Box>
      {/* Header */}
      <Box mb={3}>
        <Typography variant="h3" fontWeight={700}>
          Ochiq Budjet — Admin Panel
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          openbudget.uz • +998(71) 203-50-50
        </Typography>
      </Box>

      {/* Main KPI Cards */}
      <Grid container spacing={2.5} mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label={t('totalVotes')}
            value={`${(agg.total_votes_cast / 1_000_000).toFixed(0)} Mln`}
            sub="2021-2026 yillar umumiy"
            color="primary.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label={t('totalProjects')}
            value={agg.total_winning_projects.toLocaleString()}
            sub={`${agg.total_seasons} ta mavsum davomida`}
            color="success.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label={t('totalBudget')}
            value={`$${(agg.total_allocated_budget_usd_approx / 1_000_000_000).toFixed(2)} Mlrd`}
            sub={formatMillions(agg.total_allocated_budget_uzs) + " so'm"}
            color="warning.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label={t('totalSubmissions')}
            value={`${(agg.total_initiatives_submitted / 1000).toFixed(0)}K`}
            sub={`${agg.overall_approval_rate_percent}% tasdiqlangan`}
            color="secondary.main"
          />
        </Grid>
      </Grid>

      {/* Secondary Row */}
      <Grid container spacing={2.5} mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label={t('uniqueVoters')}
            value={`${(agg.estimated_unique_voters / 1_000_000).toFixed(0)} Mln`}
            sub="Taxminiy noyob ovoz beruvchilar"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label="Ishtirokchi viloyatlar"
            value={agg.participating_regions}
            sub={`${agg.participating_districts_estimated} tuman`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label="Ishtirokchi mahallalar"
            value={`~${(agg.participating_mahallas_estimated / 1000).toFixed(0)}K`}
            sub="Taxminiy mahallalar soni"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label={t('totalSeasons')}
            value={agg.total_seasons}
            sub="Jami o'tkazilgan mavsumlar"
          />
        </Grid>
      </Grid>

      {/* Implementation Status + Platform Info */}
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} mb={2.5}>
              Loyihalar ijrosi holati
            </Typography>
            <Stack direction="column" spacing={1.5}>
              {[
                {
                  emoji: '✅',
                  label: 'Bajarilgan',
                  count: impl.completed.count,
                  pct: impl.completed.percent,
                  bg: '#e8f5e9',
                  color: '#2e7d32',
                  border: '#4caf50',
                },
                {
                  emoji: '🔄',
                  label: 'Jarayonda',
                  count: impl.in_progress.count,
                  pct: impl.in_progress.percent,
                  bg: '#fff8e1',
                  color: '#f57f17',
                  border: '#ffb300',
                },
                {
                  emoji: '📋',
                  label: 'Rejalashtirilmoqda',
                  count: impl.planning.count,
                  pct: impl.planning.percent,
                  bg: '#e3f2fd',
                  color: '#1565c0',
                  border: '#42a5f5',
                },
                {
                  emoji: '🚫',
                  label: 'Rad etildi (tanlovdan keyin)',
                  count: impl.rejected_post_selection.count,
                  pct: impl.rejected_post_selection.percent,
                  bg: '#fce4ec',
                  color: '#c62828',
                  border: '#ef5350',
                },
                {
                  emoji: '⏳',
                  label: 'Boshlanmadi',
                  count: impl.not_started.count,
                  pct: impl.not_started.percent,
                  bg: '#f3e5f5',
                  color: '#6a1b9a',
                  border: '#ab47bc',
                },
              ].map((row) => (
                <Box
                  key={row.label}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    bgcolor: row.bg,
                    borderLeft: `4px solid ${row.border}`,
                    borderRadius: 1.5,
                    px: 2,
                    py: 1.25,
                  }}
                >
                  <Typography variant="body2" fontWeight={500} color={row.color}>
                    {row.emoji} {row.label}
                  </Typography>
                  <Typography variant="body2" fontWeight={700} color={row.color}>
                    {row.count.toLocaleString()}{' '}
                    <Typography
                      component="span"
                      variant="caption"
                      fontWeight={600}
                      color={row.color}
                    >
                      ({row.pct}%)
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} mb={2.5}>
              Asosiy loyiha yo'nalishlari
            </Typography>
            <TableContainer>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Yo'nalish</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>
                      Ulushi
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      O'rtacha muddat
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      icon: '🏗️',
                      name: 'Infratuzilma',
                      pct: 42,
                      months: 7,
                      color: '#4318FF', // purple
                    },
                    {
                      icon: '🏫',
                      name: "Ta'lim",
                      pct: 28,
                      months: 6,
                      color: '#4481EB', // pure blue
                    },
                    {
                      icon: '🏥',
                      name: "Sog'liqni saqlash",
                      pct: 15,
                      months: 8,
                      color: '#05CD99', // green
                    },
                    {
                      icon: '🌳',
                      name: 'Yashil hududlar',
                      pct: 10,
                      months: 4,
                      color: '#FFCE20', // yellow
                    },
                    {
                      icon: '🎭',
                      name: 'Madaniyat va sport',
                      pct: 5,
                      months: 5,
                      color: '#EE5D50', // red
                    },
                  ].map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td': { border: 0 } }}>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography fontSize="1.25rem">{row.icon}</Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {row.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          display="inline-flex"
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            bgcolor: `${row.color}18`,
                            color: row.color,
                            borderRadius: 2,
                            px: 1.5,
                            py: 0.25,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                          }}
                        >
                          {row.pct}%
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" color="text.secondary">
                          {row.months} oy
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
