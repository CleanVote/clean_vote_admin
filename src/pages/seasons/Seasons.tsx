import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconifyIcon from 'components/base/IconifyIcon';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../openbudget.json';

interface SeasonStats {
  initiatives_submitted: number;
  initiatives_approved_for_voting: number;
  initiatives_rejected: number;
  approval_rate_percent: number;
  total_votes_cast: number;
  winning_projects_count: number;
  win_rate_percent: number;
  allocated_budget_usd_approx: number;
}

interface Season {
  season_number: number | string | null;
  initiative_type: string;
  timeline?: Record<string, string>;
  statistics: SeasonStats;
  status?: string;
  description?: string;
}

interface YearData {
  year: number;
  seasons: Season[];
}

const typeLabel: Record<string, string> = {
  tashabbusli_budjet: 'Tashabbusli Budjet',
  mening_yolim: "Mening Yo'lim",
  mening_bogim: "Mening Bog'im",
  mening_bogcham: "Mening Bog'cham",
  jihozlash: 'Jihozlash',
};

const typeColor: Record<string, 'primary' | 'secondary' | 'success' | 'warning' | 'info'> = {
  tashabbusli_budjet: 'primary',
  mening_yolim: 'success',
  mening_bogim: 'success',
  mening_bogcham: 'secondary',
  jihozlash: 'warning',
};

const Seasons = () => {
  const { t } = useTranslation();
  const seasons = budgetData.seasons_data as YearData[];

  return (
    <Box p={1}>
      <Typography variant="h3" fontWeight={700} mb={1}>
        {t('seasons')}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        2021-2026 yillardagi barcha mavsumlar statistikasi
      </Typography>

      {seasons.map((yearData) => (
        <Accordion key={yearData.year} defaultExpanded={yearData.year === 2026} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<IconifyIcon icon="ic:outline-expand-more" />}>
            <Typography variant="h6" fontWeight={600}>
              {yearData.year}-yil — {yearData.seasons.length} ta mavsum
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            {yearData.seasons.map((season, idx) => (
              <Box key={idx} p={2} borderTop="1px solid" borderColor="divider">
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <Chip
                    label={typeLabel[season.initiative_type] ?? season.initiative_type}
                    color={typeColor[season.initiative_type] ?? 'default'}
                    size="small"
                  />
                  {season.season_number && (
                    <Typography variant="caption" color="text.secondary">
                      Mavsum #{season.season_number}
                    </Typography>
                  )}
                  {season.status === 'active' && <Chip label="Faol" color="warning" size="small" />}
                  {season.status === 'completed' && (
                    <Chip label="Tugallangan" color="success" size="small" />
                  )}
                </Box>

                {/* Timeline */}
                {season.timeline && (
                  <Box mb={2}>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      Vaqt jadvali:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1} mt={0.5}>
                      {season.timeline.submission_start && (
                        <Typography variant="caption">
                          📅 Taklif: {season.timeline.submission_start} –{' '}
                          {season.timeline.submission_end}
                        </Typography>
                      )}
                      {season.timeline.voting_start && (
                        <Typography variant="caption">
                          🗳️ Ovoz: {season.timeline.voting_start} – {season.timeline.voting_end}
                        </Typography>
                      )}
                      {season.timeline.results_announced && (
                        <Typography variant="caption">
                          🏆 Natijalar: {season.timeline.results_announced}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}

                {/* Stats Table */}
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Ko'rsatkich</TableCell>
                        <TableCell align="right">Qiymat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {season.statistics.initiatives_submitted != null && (
                        <TableRow>
                          <TableCell>Yuborilgan tashabbuslar</TableCell>
                          <TableCell align="right">
                            {season.statistics.initiatives_submitted.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      )}
                      {season.statistics.initiatives_approved_for_voting != null && (
                        <TableRow>
                          <TableCell>Ovozlashuvga qabul qilingan</TableCell>
                          <TableCell align="right">
                            {season.statistics.initiatives_approved_for_voting.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      )}
                      {season.statistics.approval_rate_percent != null && (
                        <TableRow>
                          <TableCell>Tasdiqlash foizi</TableCell>
                          <TableCell align="right">
                            {season.statistics.approval_rate_percent}%
                          </TableCell>
                        </TableRow>
                      )}
                      {season.statistics.total_votes_cast != null && (
                        <TableRow>
                          <TableCell>Jami ovozlar</TableCell>
                          <TableCell align="right">
                            {season.statistics.total_votes_cast.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      )}
                      {season.statistics.winning_projects_count != null && (
                        <TableRow>
                          <TableCell>G'olib loyihalar</TableCell>
                          <TableCell align="right">
                            {season.statistics.winning_projects_count.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      )}
                      {season.statistics.win_rate_percent != null && (
                        <TableRow>
                          <TableCell>G'alaba foizi</TableCell>
                          <TableCell align="right">{season.statistics.win_rate_percent}%</TableCell>
                        </TableRow>
                      )}
                      {season.statistics.allocated_budget_usd_approx != null && (
                        <TableRow>
                          <TableCell>Ajratilgan byudjet (USD)</TableCell>
                          <TableCell align="right">
                            ${season.statistics.allocated_budget_usd_approx.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Seasons;
