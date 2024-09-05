import { fields } from '@keystatic/core';
import { repeating, wrapper } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  Tabs: repeating({
    label: 'Tabs',
    description:
      'You can display a tabbed interface using the <Tabs> and <TabItem> components.',
    children: ['TabItem'],
    schema: {
      syncKey: fields.text({
        label: 'Sync key',
        description:
          'Keep multiple tab groups synchronized by adding the syncKey attribute.',
      }),
    },
  }),
  TabItem: wrapper({
    label: 'Tab',
    schema: {
      label: fields.text({ label: 'Label', validation: { isRequired: true } }),
      icon: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
    },
  }),
};
