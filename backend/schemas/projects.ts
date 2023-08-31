export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'type',
            title: 'title',
            type: 'string'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type:'skills'}]
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
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