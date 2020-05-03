import config from './config';

export const dashboardRoutes = {
  name: 'Home',
  to: '/admin',
  exact: true,
  icon: 'chart-pie',
};

export const logsRoutes = {
  name: 'Logs',
  to: '/admin/logs',
  exact: true,
  icon: 'stream',
};

export const settingsRoutes = {
  name: 'Settings',
  to: '/admin/settings',
  exact: true,
  icon: 'cog',
};

export const documentationRoutes = {
  name: 'Documentation',
  to: '/admin/documentation',
  exact: true,
  icon: 'book',
};

export const changelogRoutes = {
  name: 'Changelog',
  to: '/admin/changelog',
  exact: true,
  icon: 'code-branch',
  badge: {
    text: `v${config.version}`,
    color: 'soft-primary',
  },
};

export default [dashboardRoutes, logsRoutes, settingsRoutes, documentationRoutes, changelogRoutes];
