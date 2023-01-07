// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Labelator.io documentation',
  tagline: 'Label your data, build and deploy your ML model and run it with human supervision',
  url: 'https://docs.labelator.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],



  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api_swagger.yaml',
            route: '/api/',
          },
          {
            spec: 'static/serving_api_swagger.yaml',
            route: '/serving-api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Labelator.io documentation',
        logo: {
          alt: '',
          src: 'img/logo192.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: '/category/integrations',
            position: 'left',
            label: 'Integrations',
          },
          
          {
            
            to:"/api",
            position: 'left',
            label: 'Labelator.io API',
          },
          {
            
            to:"/serving-api",
            position: 'left',
            label: 'Model inference API',
          },
          // {
          //   type: 'doc',
          //   docId: 'legal/privacy_policy',
          //   position: 'left',
          //   label: 'Legal',
          // },
          //{to: '/blog', label: 'Blog', position: 'left'},
       
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://labelatorio.slack.com/join/shared_invite/zt-1dpn10chj-1EMqk3lhY1xkkygiJ4rGaQ#/shared-invite/email',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/labelator_io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/blip-solutions',
              },
            ],
          },
         
          {
            title: 'Legal',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Privacy policy',
                to: '/docs/legal/privacy-policy',
              },
              {
                label: 'Terms of service',
                to: '/docs/legal/terms-of-service',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blip.solutions.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
