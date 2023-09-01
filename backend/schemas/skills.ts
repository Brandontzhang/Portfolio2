import skillLevel from "./skillLevel";

export default{
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'skilllevel',
            title: 'Skill Level',
            type: 'reference',
            to: [{ type: 'skillLevel' }],
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}