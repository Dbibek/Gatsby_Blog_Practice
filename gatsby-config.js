module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
  siteMetadata: {
    title: `Gatsby Practice Bibek!`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Bibek Dhakal`,
  },
  plugins: [
    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN

      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us4.list-manage.com/subscribe/post?u=5f53e9e0425e25be4ef97729a&amp;id=f7a1734428" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate',
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
   
    `gatsby-plugin-sharp`,
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
         
            {
              resolve: `gatsby-transformer-sharp`
            },
        
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxwidth: 750,
              linkImagesToOriginal: false

            }
          }
        ]
      }
    }
    
     
    // },'gatsby-transformer-remark'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
