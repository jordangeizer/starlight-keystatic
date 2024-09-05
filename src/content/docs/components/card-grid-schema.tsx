import { fields } from '@keystatic/core';
import { repeating } from '@keystatic/core/content-components';

export default {
  CardGrid: repeating({
    label: 'Card Grid',
    description:
      'Wrap multiple cards in the <CardGrid> component to display cards side-by-side when there’s enough space.',
    children: ['Card', 'LinkCard'],
    schema: {
      stagger: fields.checkbox({
        label: 'Stagger',
        description:
          'Shifts the second column of cards vertically and add visual interest.',
      }),
    },
  }),
};
