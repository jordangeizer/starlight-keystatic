import { fields } from '@keystatic/core';
import { inline } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  Icon: inline({
    label: 'Icon',
    description:
      'Starlight provides a set of common icons that you can display in your content using the <Icon> component.',
    schema: {
      name: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
      color: fields.text({ label: 'Icon color' }),
      size: fields.text({ label: 'Icon size' }),
    },
  }),
};
