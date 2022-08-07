export default {
    name: 'team',
    title: 'Manager',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Handle',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            name: 'instagramLink',
            title: 'Instagram Link',
            type: 'string',
        },
        {
            name: 'facebookLink',
            title: 'Facebook Link',
            type: 'string',
        },
        {
            name: 'twitterLink',
            title: 'Twitter Link',
            type: 'string',
        },
        {
            name: 'youtubeLink',
            title: 'Youtube Link',
            type: 'string',
        },
        {
            name: 'tiktokLink',
            title: 'Tiktok Link',
            type: 'string',
        },
        {
            name: 'imageUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageUrl2',
            title: 'ImageUrl 2',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageUrl3',
            title: 'ImageUrl 3',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'About 1',
            name: 'about1',
            type: 'text'
        },
        {
            title: 'About 2',
            name: 'about2',
            type: 'text'
        },
        {
            name: 'companyGoalName',
            title: 'Company Goal Name',
            type: 'string',
        },
        {
            title: 'Company Goal Description',
            name: 'companyGoalDescription',
            type: 'text'
        },
        {
            name: 'companyGoalName2',
            title: 'Company Goal Name 2',
            type: 'string',
        },
        {
            title: 'Company Goal Description 2',
            name: 'companyGoalDescription2',
            type: 'text'
        },
        {
            name: 'companyGoalName3',
            title: 'Company Goal Name 3',
            type: 'string',
        },
        {
            title: 'Company Goal Description 3',
            name: 'companyGoalDescription3',
            type: 'text'
        },

        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
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