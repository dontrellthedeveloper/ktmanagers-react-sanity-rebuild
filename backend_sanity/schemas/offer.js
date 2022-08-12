export default {
    name: 'offer',
    title: 'Offer Page',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Handle',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            hidden: true,
        },
        {
            name: 'title',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'Sub Heading',
            type: 'string',
        },
        {
            title: 'Offer Description',
            name: 'offerDescription1',
            type: 'text'
        },
        {
            title: 'Offer Description 2',
            name: 'offerDescription2',
            type: 'text'
        },
        {
            title: 'Offer Description 3',
            name: 'offerDescription3',
            type: 'text'
        },
        {
            title: 'Offer Description 4',
            name: 'offerDescription4',
            type: 'text'
        },
        {
            title: 'Offer Description 5',
            name: 'offerDescription5',
            type: 'text'
        },
        {
            title: 'Offer Description 6',
            name: 'offerDescription6',
            type: 'text'
        },
        {
            title: 'Offer Description 7',
            name: 'offerDescription7',
            type: 'text'
        },
        {
            title: 'Offer Description 8',
            name: 'offerDescription8',
            type: 'text'
        },
        {
            title: 'Offer Description 9',
            name: 'offerDescription9',
            type: 'text'
        },
        {
            title: 'Offer Description 10',
            name: 'offerDescription10',
            type: 'text'
        }

    ],
};