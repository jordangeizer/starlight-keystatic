import { fields } from '@keystatic/core';
import { inline } from '@keystatic/core/content-components';

export default {
  Badge: inline({
    label: 'Badge',
    description:
      'Use the <Badge> component to display small pieces of information, such as status or labels.',
    schema: {
      text: fields.text({ label: 'Text' }),
      variant: fields.select({
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
          {
            label: 'Success',
            value: 'success',
          },
        ],
      }),
      size: fields.select({
        label: 'Size',
        defaultValue: 'small',
        options: [
          {
            label: 'Small',
            value: 'small',
          },
          {
            label: 'Medium',
            value: 'medium',
          },
          {
            label: 'Large',
            value: 'large',
          },
        ],
      }),
    },
  }),
};
