import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';
import { useTranslation } from 'react-i18next';

interface Language {
  id: number;
  code: string;
  lang: string;
  flag: string;
}

const languages: Language[] = [
  {
    id: 1,
    code: 'uz',
    lang: "O'zbekcha",
    flag: 'twemoji:flag-uzbekistan',
  },
  {
    id: 2,
    code: 'ru',
    lang: 'Русский',
    flag: 'twemoji:flag-russia',
  },
  {
    id: 3,
    code: 'en',
    lang: 'English',
    flag: 'twemoji:flag-united-kingdom',
  },
];

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    languages.find((l) => l.code === i18n.language) || languages[0],
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleFlagButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFlagMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageItemClick = (langItem: Language) => {
    i18n.changeLanguage(langItem.code);
    setLanguage(langItem);
    handleFlagMenuClose();
  };

  return (
    <>
      <IconButton onClick={handleFlagButtonClick} size="large">
        <IconifyIcon icon={language.flag} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleFlagMenuClose}
        onClick={handleFlagMenuClose}
        sx={{
          mt: 1.5,
          '& .MuiList-root': {
            width: 230,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((langItem) => {
          return (
            <MenuItem
              key={langItem.id}
              sx={{ bgcolor: langItem.id === language.id ? 'info.dark' : null }}
              onClick={() => handleLanguageItemClick(langItem)}
            >
              <ListItemIcon sx={{ mr: 2, fontSize: 'h3.fontSize' }}>
                <IconifyIcon icon={langItem.flag} />
              </ListItemIcon>
              <ListItemText>
                <Typography>{langItem.lang}</Typography>
              </ListItemText>
              <ListItemText>
                <Typography textAlign="right">{langItem.code}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageSelect;
