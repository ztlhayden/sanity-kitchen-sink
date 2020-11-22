export default {
  widgets: [
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
                  buildHookId: '5fba8407ef271faceef5df51',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5jz99hjq',
                  apiId: '3e347f51-679c-4145-8d78-874edf79565b'
                },
                {
                  buildHookId: '5fba8408649aedb03e75eefc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o5vt2vf8',
                  apiId: 'c317f6ee-3036-4335-94fd-bac27165148c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ztlhayden/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o5vt2vf8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
