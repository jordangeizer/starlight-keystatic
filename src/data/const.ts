import { Icons } from 'node_modules/@astrojs/starlight/components/Icons';

export const iconsList = [
  { label: 'No icon', value: '' },
  ...Object.keys(Icons).map(icon => ({
    label: icon,
    value: icon,
  })),
];
