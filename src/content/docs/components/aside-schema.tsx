import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';

export default {
  Aside: wrapper({
    label: 'Aside',
    description:
      'Useful for displaying secondary information alongside a page’s main content.',
    schema: {
      title: fields.text({ label: 'Title' }),
      type: fields.select({
        label: 'Type',
        defaultValue: 'note',
        options: [
          {
            label: 'Note',
            value: 'note',
          },
          {
            label: 'Tip',
            value: 'tip',
          },
          {
            label: 'Caution',
            value: 'caution',
          },
          {
            label: 'Danger',
            value: 'danger',
          },
        ],
      }),
    },
  }),
};
