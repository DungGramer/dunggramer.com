import { codeInput } from '@sanity/code-input';
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard';
import { documentInternationalization } from '@sanity/document-internationalization';
import { RobotIcon, RocketIcon } from '@sanity/icons';
import { visionTool } from '@sanity/vision';
import { Config, defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { media } from 'sanity-plugin-media';
import { deskTool } from 'sanity/desk';
import { dataset, projectId } from './environment';
import { schemaTypes } from './schemas';
import { customFields } from './schemas/customFields';

const types = [...schemaTypes, ...customFields];

const config: Config = {
  title: 'blog.dunggramer.com',

  projectId,
  dataset,
  schema: {
    types,
  },

  plugins: [
    deskTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'vi', title: 'Vietnamese' },
      ],
      bulkPublish: true,
      schemaTypes: ['post', 'url', 'series', 'legal', 'about', 'author', 'snippet', 'til'],
      // schemaTypes: ['post', 'url']
    }),
    media(),
    unsplashImageAsset(),
    visionTool(),
    codeInput(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],
};

export default defineConfig([
  {
    ...config,
    basePath: '/production',
    dataset: 'production',
    name: 'production-workspace',
    title: 'Production',
    icon: RocketIcon,
  },
  {
    ...config,
    basePath: '/development',
    dataset: 'development',
    name: 'development-workspace',
    title: 'Development',
    icon: RobotIcon,
  },
]);
