import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard';
import { documentInternationalization } from '@sanity/document-internationalization';
import { media } from 'sanity-plugin-media';
import { dataset, projectId } from './config';
import { customFields } from './schemas/customFields';

export default defineConfig({
  name: 'default',
  title: 'blog.dunggramer.com',

  projectId,
  dataset,

  plugins: [
    deskTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'vi', title: 'Vietnamese' },
      ],
      schemaTypes: ['post', 'url', 'series', 'legal', 'about', 'author', 'snippet', 'til'],
    }),
    media(),
    visionTool(),
    codeInput(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],

  schema: {
    types: [...schemaTypes, ...customFields],
  },
});
