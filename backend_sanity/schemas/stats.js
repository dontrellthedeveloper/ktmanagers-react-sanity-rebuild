export default {
    name: 'stats',
    title: 'Stats',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        // {
        //     title: "Icon",
        //     name: "icon",
        //     type: "iconPicker",
        //     options: {
        //         filter: ['FaBeer', 'FaDocker', /^arrow/i],
        //     }
        // },
        {
            name: 'stats',
            title: 'Number of Followers/Subscribers',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            // hidden: true,
        }
    ],
};