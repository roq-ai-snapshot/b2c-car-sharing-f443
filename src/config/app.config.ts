interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Operations Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage bookings.',
    'Read car information.',
    'Read company information.',
    'Edit personal information.',
  ],
  ownerAbilities: ['Manage company information', 'Manage car fleet', 'Manage bookings', 'Manage operations'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/b2c63023-7f63-4e65-b2cb-556d3ed533aa',
};
