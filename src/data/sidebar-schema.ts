import { singleton, fields } from '@keystatic/core';

export const sidebarSchema = {
  sidebar: singleton({
    label: 'Sidebar',
    path: 'src/data/sidebar',
    format: {
      data: 'json',
    },
    schema: {
      sections: fields.array(
        fields.object({
          label: fields.text({ label: 'Label' }),
          kind: fields.conditional(
            fields.select({
              label: 'Kind',
              options: [
                { label: 'Items', value: 'items' },
                { label: 'Autogenerate', value: 'autogenerate' },
              ],
              defaultValue: 'items',
            }),
            {
              items: fields.array(
                fields.object({
                  label: fields.text({ label: 'Label' }),
                  link: fields.text({ label: 'Link' }),
                }),
                {
                  label: 'Items',
                  itemLabel: data => data.fields.label.value,
                }
              ),
              autogenerate: fields.object({
                directory: fields.text({ label: 'Directory' }),
              }),
            }
          ),
        }),
        { label: 'Links', itemLabel: data => data.fields.label.value }
      ),
    },
  }),
};
