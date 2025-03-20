import { cookies } from 'next/headers';

export function getTheme() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get('theme');
  return themeCookie?.value || 'system';
}