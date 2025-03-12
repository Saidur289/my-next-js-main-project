
import { defineField, defineType } from "sanity";


// export const startup = defineType({
//     name: 'startup',
//     title: 'Startup',
//     type: 'object',
    
//     fields: [
//         defineField({
//             name: 'title',
//             type: 'string',
//             title: 'Title', 
//         }),
//         defineField({
//             name: 'slug',
//             title: 'Slug',
//             type: 'slug',
//             options: {
//                 source: 'title',
//             }
//         }),
//         defineField({
//             name: 'title',
//             type: 'string',
//         }),
//         defineField({
//             name: 'author',
//             type: 'reference',
//             to: [{ type: 'author' }],
//         }),
//         defineField({
//             name: 'views',
//             type: 'number',
//         }),
//         defineField({
//             name: 'description',
//             type: 'text',
//         }),
//         defineField({
//             name: 'category',
//             type: 'string',
//             validation: (Rule) => Rule.min(1).max(20).required().error('Please enter a category')
//         }),
//         defineField({
//             name: 'image',
//             type: 'url',
//             validation: (Rule) => Rule.required(),
//         }),
//         defineField({
//             name: 'pitch',
//             type: 'markdown',
//         }),
//     ],
   

// })
export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    
    fields: [
        defineField({
            name: 'title',
            title: 'Title', // Title যোগ করা হয়েছে
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }], // অ্যারের মধ্যে রাখতে হবে
        }),
        defineField({
            name: 'views',
            title: 'Views',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error('Please enter a category')
        }),
        defineField({
            name: 'image',
            title: 'Image URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pitch',
            title: 'Pitch',
            type: 'markdown', // Markdown Plugin না থাকলে 'text' রাখুন
        }),
    ],
});