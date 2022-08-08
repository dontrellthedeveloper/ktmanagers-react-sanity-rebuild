export default {
    name: 'influencer',
    title: 'Influencers',
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
            name: 'tags',
            title: 'Tags',
            type:'array',
            hidden: true,
            of: [
                {
                    name:'tag',
                    title:'Tag',
                    type:'string'
                }
            ]
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        }

    ],
};