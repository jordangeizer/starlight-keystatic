import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  Card: wrapper({
    label: 'Card',
    description:
      'You can display content in a box matching Starlight’s styles using the <Card> component.',
    schema: {
      title: fields.text({ label: 'Title' }),
      icon: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
    },
  }),
};
