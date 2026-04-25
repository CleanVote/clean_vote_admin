import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'react-i18next';
import budgetData from '../../../openbudget.json';

const cats = budgetData.categories_breakdown;

type CategoryKey = keyof typeof cats;

const categoryList: { key: CategoryKey; icon: string }[] = [
  { key: 'infrastructure', icon: '🏗️' },
  { key: 'education', icon: '🏫' },
  { key: 'healthcare', icon: '🏥' },
  { key: 'green_spaces', icon: '🌳' },
  { key: 'culture_sports', icon: '🎭' },
];

const formatUZS = (n: number) => {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(0)} Mlrd so'm`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)} Mln so'm`;
  return `${n.toLocaleString()} so'm`;
};

const Categories = () => {
  const { t } = useTranslation();

  return (
    <Box p={1}>
      <Typography variant="h3" fontWeight={700} mb={1}>
        {t('categories')}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Loyiha yo'nalishlari va ularning o'rtacha qiymatlari
      </Typography>

      {/* Overview cards */}
      <Grid container spacing={2.5} mb={4}>
        {categoryList.map(({ key, icon }) => {
          const cat = cats[key] as {
            name_uz: string;
            percentage_of_all_projects: number;
            avg_implementation_time_months: number;
          };
          return (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" mb={0.5}>
                  {icon} {cat.name_uz}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1.5}>
                  Jami loyihalarning {cat.percentage_of_all_projects}% ni tashkil etadi
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={cat.percentage_of_all_projects}
                  sx={{ mb: 1, height: 8, borderRadius: 4 }}
                />
                <Typography variant="caption" color="text.disabled">
                  O'rtacha ijro muddati: {cat.avg_implementation_time_months} oy
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* Subcategories detail tables */}
      {categoryList.map(({ key, icon }) => {
        const cat = cats[key] as {
          name_uz: string;
          subcategories: { id: string; name_uz: string; avg_cost_uzs: number }[];
        };
        return (
          <Box key={key} mb={4}>
            <Typography variant="h6" fontWeight={600} mb={1.5}>
              {icon} {cat.name_uz} — Pastki kategoriyalar
            </Typography>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Kategoriya nomi</TableCell>
                    <TableCell align="right">O'rtacha loyiha qiymati</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cat.subcategories.map((sub) => (
                    <TableRow key={sub.id}>
                      <TableCell>{sub.name_uz}</TableCell>
                      <TableCell align="right">{formatUZS(sub.avg_cost_uzs)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;
 
