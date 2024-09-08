import { collection, config, fields, singleton } from '@keystatic/core';
import asideSchema from 'src/content/docs/components/aside-schema';
import badgeSchema from 'src/content/docs/components/badge-schema';
import cardGridSchema from 'src/content/docs/components/card-grid-schema';
import cardSchema from 'src/content/docs/components/card-schema';
import fileTreeSchema from 'src/content/docs/components/file-tree-schema';
import iconSchema from 'src/content/docs/components/icon-schema';
import linkButtonSchema from 'src/content/docs/components/link-button-schema';
import linkCardSchema from 'src/content/docs/components/link-card-schema';
import stepsSchema from 'src/content/docs/components/steps-schema';
import tabsSchema from 'src/content/docs/components/tabs-schema';
import { frontmatterSchema } from 'src/content/docs/frontmatter-schema';
import { sidebarSchema } from 'src/data/sidebar-schema';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Starlight',
    },
  },
  collections: {
    components: collection({
      label: 'Components',
      path: 'src/content/docs/components/**',
      slugField: 'title',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      schema: {
        ...frontmatterSchema,
        content: fields.mdx({
          label: 'Content',
          components: {
            ...asideSchema,
            ...badgeSchema,
            ...cardSchema,
            ...fileTreeSchema,
            ...iconSchema,
            ...linkButtonSchema,
            ...linkCardSchema,
            ...stepsSchema,
            ...tabsSchema,
            ...cardGridSchema,
          },
        }),
      },
    }),
  },
  singletons: {
    // ...sidebarSchema,
  },
});
