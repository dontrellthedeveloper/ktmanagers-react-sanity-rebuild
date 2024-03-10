export default {
    name: 'campaign',
    title: 'Campaign',
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
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "descriptionMarkdown"
        },
        {
            name: 'buttontxt',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Button Link',
            type: 'string',
        }

    ],
};