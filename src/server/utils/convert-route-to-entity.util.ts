const mapping: Record<string, string> = {
  organizations: 'organization',
  users: 'user',
  workflows: 'workflow',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
