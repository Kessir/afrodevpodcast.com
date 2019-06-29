// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss');

const postcssPlugins = [
  tailwind('./tailwind.config.js'),
];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'African Developers Podcast',
  siteDescription: 'African Developers Podcast, a podcast where African software developers share their stories. Hosted by Kessir Adjaho',
  siteUrl: "https://afrodevpodcast.com",
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'episodes/**/*.md',
        typeName: 'Episode',
        remark: {},
        route: '/episodes/:slug'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-32598219-8'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options:{}
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
