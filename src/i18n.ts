import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      dashboard: 'Bosh sahifa',
      search: 'Qidirish',
      // Sidebar
      seasons: 'Mavsumlar',
      categories: 'Kategoriyalar',
      organizations: 'Tashkilotlar',
      // Dashboard analytics cards
      totalVotes: 'Jami berilgan ovozlar',
      totalProjects: "Jami g'olib loyihalar",
      totalBudget: 'Jami ajratilgan byudjet',
      totalSeasons: "O'tkazilgan mavsumlar",
      totalSubmissions: 'Jami yuborilgan tashabbuslar',
      approvalRate: 'Tasdiqlash darajasi',
      uniqueVoters: 'Noyob ovoz beruvchilar',
      completedProjects: 'Bajarilgan loyihalar',
      // Common
      submitted: 'Yuborilgan',
      approved: 'Tasdiqlangan',
      rejected: 'Rad etilgan',
      winners: "G'oliblar",
      votes: 'Ovozlar',
      budget: 'Byudjet',
      percent: 'Foiz',
      year: 'Yil',
      season: 'Mavsum',
      region: 'Viloyat',
    },
  },
  ru: {
    translation: {
      dashboard: 'Главная',
      search: 'Поиск',
      seasons: 'Сезоны',
      categories: 'Категории',
      organizations: 'Организации',
      totalVotes: 'Всего голосов',
      totalProjects: 'Победившие проекты',
      totalBudget: 'Выделенный бюджет',
      totalSeasons: 'Проведено сезонов',
      totalSubmissions: 'Подано инициатив',
      approvalRate: 'Процент одобрения',
      uniqueVoters: 'Уникальных избирателей',
      completedProjects: 'Завершённых проектов',
      submitted: 'Подано',
      approved: 'Одобрено',
      rejected: 'Отклонено',
      winners: 'Победители',
      votes: 'Голоса',
      budget: 'Бюджет',
      percent: 'Процент',
      year: 'Год',
      season: 'Сезон',
      region: 'Регион',
    },
  },
  en: {
    translation: {
      dashboard: 'Dashboard',
      search: 'Search',
      seasons: 'Seasons',
      categories: 'Categories',
      organizations: 'Organizations',
      totalVotes: 'Total Votes Cast',
      totalProjects: 'Winning Projects',
      totalBudget: 'Total Budget Allocated',
      totalSeasons: 'Seasons Conducted',
      totalSubmissions: 'Total Submissions',
      approvalRate: 'Approval Rate',
      uniqueVoters: 'Unique Voters',
      completedProjects: 'Completed Projects',
      submitted: 'Submitted',
      approved: 'Approved',
      rejected: 'Rejected',
      winners: 'Winners',
      votes: 'Votes',
      budget: 'Budget',
      percent: 'Percent',
      year: 'Year',
      season: 'Season',
      region: 'Region',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'uz',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
 
