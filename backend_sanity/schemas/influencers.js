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
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "bio"
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
            name: 'imageTitle',
            title: 'Image 1 Title',
            type: 'string'
        },
        {
            name: 'imageDescription',
            title: 'Image 1 Description',
            type: 'text'
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
            name: 'imageTitle2',
            title: 'Image 2 Title',
            type: 'string'
        },
        {
            name: 'imageDescription2',
            title: 'Image 2 Description',
            type: 'text'
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
            name: 'imageTitle3',
            title: 'Image 3 Title',
            type: 'string'
        },
        {
            name: 'imageDescription3',
            title: 'Image 3 Description',
            type: 'text'
        },
        {
            name: 'imageUrl4',
            title: 'ImageUrl 4',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageTitle4',
            title: 'Image 4 Title',
            type: 'string'
        },
        {
            name: 'imageDescription4',
            title: 'Image 4 Description',
            type: 'text'
        },
        {
            name: 'imageUrl5',
            title: 'ImageUrl 5',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageTitle5',
            title: 'Image 5 Title',
            type: 'string'
        },
        {
            name: 'imageDescription5',
            title: 'Image 5 Description',
            type: 'text'
        },
        {
            name: 'imageUrl6',
            title: 'ImageUrl 6',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageTitle6',
            title: 'Image 6 Title',
            type: 'string'
        },
        {
            name: 'imageDescription6',
            title: 'Image 6 Description',
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
            name: 'imdbLink',
            title: 'IMDB Link',
            type: 'string',
        },
        {
            name: 'meetGreet',
            title: 'Meet and Greet Link',
            type: 'string'
        },
        {
            name: "meetGreetEmoji",
            title: "Meet Greet Emoji",
            type: "string",
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
