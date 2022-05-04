export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6272a0abd946901eb4b0ddf6',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-sample-studio',
                  apiId: 'd760f489-cf2c-422a-93ce-14ba5b68a6ea'
                },
                {
                  buildHookId: '6272a0abd719921173bf5ef6',
                  title: 'Portfolio Website',
                  name: 'gatsby-sanity-sample',
                  apiId: '2c9fe2a1-6b54-43a1-9cb6-fb80dcc17ba8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slaterduskinwilson/gatsby-sanity-sample',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-sanity-sample.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
