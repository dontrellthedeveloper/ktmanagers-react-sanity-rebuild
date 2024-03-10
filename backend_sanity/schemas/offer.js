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
            name: 'subTitleB',
            title: 'Sub Heading 2',
            type: 'string',
        },
        {
            title: 'Offer Description',
            name: 'offerDescription1',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "consultationDescription"
        },
        {
            name: 'bookingLink',
            title: 'Booking Service Link',
            type: 'string',
        },
        {
            name: 'bookingLinkTitle',
            title: 'Booking Link Title',
            type: 'string',
        },
        {
            name: 'subTitleBB',
            title: 'Sub Heading',
            type: 'string',
        },
        {
            name: 'subTitle2B',
            title: 'Sub Heading 2',
            type: 'string',
        },
        {
            title: 'Offer Description',
            name: 'offerDescription1B',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "consultationDescriptionB"
        },
        {
            name: 'bookingLinkB',
            title: 'Booking Service Link',
            type: 'string',
        },
        {
            name: 'bookingLinkTitleB',
            title: 'Booking Link Title',
            type: 'string',
        },
        {
            name: 'title2',
            title: 'Heading 2',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle2',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subTitleB2',
            title: 'Sub Heading 2',
            type: 'string',
        },
        {
            title: 'Offer Description 2',
            name: 'offerDescription2',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "multiInfluencerDescription"
        },
        {
            name: 'moreInfoTitle1',
            title: 'More Info Heading 1',
            type: 'string',
        },
        {
            name: 'moreInfoDescription1',
            title: 'More Info Description 1',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "moreInfoDescriptionBox1"
        },
        {
            name: 'moreInfoLink1',
            title: 'More Info Link 1',
            type: 'string'
        },
        {
            name: 'moreInfoTitle2',
            title: 'More Info Heading 2',
            type: 'string',
        },
        {
            name: 'moreInfoDescription2',
            title: 'More Info Description 2',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "moreInfoDescriptionBox2"
        },
        {
            name: 'moreInfoLink2',
            title: 'More Info Link 2',
            type: 'string'
        },
        {
            name: 'moreInfoTitle3',
            title: 'More Info Heading 3',
            type: 'string',
        },
        {
            name: 'moreInfoDescription3',
            title: 'More Info Description 3',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "moreInfoDescriptionBox3"
        },
        {
            name: 'moreInfoLink3',
            title: 'More Info Link 3',
            type: 'string'
        },
        {
            name: 'moreInfoTitle4',
            title: 'More Info Heading 4',
            type: 'string',
            hidden: true
        },
        {
            name: 'moreInfoDescription4',
            title: 'More Info Description 4',
            type: 'text',
            hidden: true
        },
        {
            name: 'moreInfoLink4',
            title: 'More Info Link 4',
            type: 'string',
            hidden: true
        },
        {
            name: 'title3',
            title: 'Heading 3',
            type: 'string',
        },
        {
            name: 'subTitle3',
            title: 'Sub Heading 3',
            type: 'string',
        },
        {
            title: 'Offer Description 3',
            name: 'offerDescription3',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "prMarketingDescription"
        },
        {
            name: 'moreInfo2Title1',
            title: 'More Info 2 Heading 1',
            type: 'string',
        },
        {
            name: 'moreInfo2Description1',
            title: 'More Info 2 Description 1',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "moreInfo2DescriptionBox1"
        },
        {
            name: 'moreInfo2Link1',
            title: 'More Info 2 Link 1',
            type: 'string'
        },
        {
            name: 'moreInfo2Title2',
            title: 'More Info 2 Heading 2',
            type: 'string',
        },
        {
            name: 'moreInfo2Description2',
            title: 'More Info 2 Description 2',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "moreInfo2DescriptionBox2"
        },
        {
            name: 'moreInfo2Link2',
            title: 'More Info 2 Link 2',
            type: 'string'
        },
        {
            name: 'moreInfo2Title3',
            title: 'More Info 2 Heading 3',
            type: 'string',
        },
        {
            name: 'moreInfo2Description3',
            title: 'More Info 2 Description 3',
            type: 'text',
            hidden: true
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "moreInfo2DescriptionBox3"
        },
        {
            name: 'moreInfo2Link3',
            title: 'More Info 2 Link 3',
            type: 'string'
        },
        {
            name: 'moreInfo2Title4',
            title: 'More Info 2 Heading 4',
            type: 'string',
            hidden: true
        },
        {
            name: 'moreInfo2Description4',
            title: 'More Info 2 Description 4',
            type: 'text',
            hidden: true
        },
        {
            name: 'moreInfo2Link4',
            title: 'More Info 2 Link 4',
            type: 'string',
            hidden: true
        },
        {
            name: 'title4',
            title: 'Heading 4',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle4',
            title: 'Sub Heading 4',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 4',
            name: 'offerDescription4',
            type: 'text',
            hidden: true
        },
        {
            name: 'title5',
            title: 'Heading 5',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle5',
            title: 'Sub Heading 5',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 5',
            name: 'offerDescription5',
            type: 'text',
            hidden: true
        },
        {
            name: 'title6',
            title: 'Heading 6',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle6',
            title: 'Sub Heading 6',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 6',
            name: 'offerDescription6',
            type: 'text',
            hidden: true
        },
        {
            name: 'title7',
            title: 'Heading 7',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle7',
            title: 'Sub Heading 7',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 7',
            name: 'offerDescription7',
            type: 'text',
            hidden: true
        },
        {
            name: 'title8',
            title: 'Heading 8',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle8',
            title: 'Sub Heading 8',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 8',
            name: 'offerDescription8',
            type: 'text',
            hidden: true
        },
        {
            name: 'title9',
            title: 'Heading 9',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle9',
            title: 'Sub Heading 9',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 9',
            name: 'offerDescription9',
            type: 'text',
            hidden: true
        },
        {
            name: 'title10',
            title: 'Heading 10',
            type: 'string',
            hidden: true
        },
        {
            name: 'subTitle10',
            title: 'Sub Heading 10',
            type: 'string',
            hidden: true
        },
        {
            title: 'Offer Description 10',
            name: 'offerDescription10',
            type: 'text',
            hidden: true
        }

    ],
};