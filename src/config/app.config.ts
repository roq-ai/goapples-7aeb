interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Program Manager'],
  customerRoles: [],
  tenantRoles: ['Program Manager', 'Video Editor', 'Graphic Designer', 'Content Reviewer'],
  tenantName: 'Organization',
  applicationName: 'GoApples',
  addOns: ['file'],
};
