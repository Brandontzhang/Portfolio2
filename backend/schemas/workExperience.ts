export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'current',
            title: 'Current?',
            type: 'boolean'
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}