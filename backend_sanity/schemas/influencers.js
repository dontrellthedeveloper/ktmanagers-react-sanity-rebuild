export default {
    name: 'influencer',
    title: 'Influencer',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        // {
        //     name: 'description',
        //     title: 'Description',
        //     type: 'string',
        // },
        // {
        //     name: 'projectLink',
        //     title: 'Project Link',
        //     type: 'string',
        // },
        // {
        //     name: 'codeLink',
        //     title: 'Code Link',
        //     type: 'string',
        // },
        {
            name: 'imageUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        // {
        //     name: 'tags',
        //     title: 'Tags',
        //     type:'array',
        //     of: [
        //         {
        //             name:'tag',
        //             title:'Tag',
        //             type:'string'
        //         }
        //     ]
        // },

    ],
};