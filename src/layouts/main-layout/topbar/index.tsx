import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import ProfileMenu from './ProfileMenu';
import LanguageSelect from './LanguageSelect';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const { t } = useTranslation();
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack
      height={90}
      alignItems="center"
      justifyContent="space-between"
      bgcolor="transparent"
      zIndex={1200}
    >
      <Stack spacing={{ xs: 1.5, sm: 2 }} alignItems="center">
        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ lineHeight: 0, display: { xs: 'none', sm: 'block', lg: 'none' } }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
            CLEAN VOTE
          </Typography>
        </ButtonBase>

        <Toolbar sx={{ display: { xm: 'block', lg: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="ic:baseline-menu" />
          </IconButton>
        </Toolbar>

        <Toolbar sx={{ display: { xm: 'block', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="search">
            <IconifyIcon icon="bx:search" />
          </IconButton>
        </Toolbar>

        <TextField
          variant="filled"
          placeholder={t('search')}
          sx={{ width: 320, display: { xs: 'none', md: 'flex' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="bx:search" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={{ xs: 1.5, sm: 2 }} alignItems="center">
        <LanguageSelect />
        <IconButton size="large">
          <Badge color="error" variant="dot">
            <IconifyIcon icon="ic:baseline-notifications-none" />
          </Badge>
        </IconButton>
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default Topbar;
 
