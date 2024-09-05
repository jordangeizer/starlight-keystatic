import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  LinkButton: wrapper({
    label: 'Link button',
    description:
      'Use the <LinkButton> component for visually distinct call-to-action links.',
    schema: {
      href: fields.url({
        label: 'Link',
        description: 'Should start with https://',
      }),
      variant: fields.select({
        label: 'Variant',
        defaultValue: 'primary',
        options: [
          {
            label: 'Primary',
            value: 'primary',
          },
          {
            label: 'Secondary',
            value: 'secondary',
          },
          {
            label: 'Minimal',
            value: 'minimal',
          },
        ],
      }),
      icon: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
      iconPlacement: fields.select({
        label: 'Icon placement',
        defaultValue: 'end',
        options: [
          {
            label: 'Start',
            value: 'start',
          },
          {
            label: 'End',
            value: 'end',
          },
        ],
      }),
    },
  }),
};
