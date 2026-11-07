import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'News & Community Stories',
  type: 'document',
  fieldsets: [
    {
      name: 'advanced',
      title: '⚙️ Advanced & Search Engine (SEO) Settings',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    // ----------------------------------------------------
    // PRIMARY CONTENT FIELDS
    // ----------------------------------------------------
    defineField({
      name: 'title',
      title: 'Story / Article Title',
      type: 'string',
      description: 'The main headline of your story or announcement.',
      validation: (Rule) => Rule.required().min(5).max(140),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Click "Generate" to automatically create the web link from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Select the focus category for this article.',
      initialValue: 'Community Support',
      options: {
        list: [
          { title: 'Education and Empowerment', value: 'Education and Empowerment' },
          { title: 'Community Support', value: 'Community Support' },
          { title: 'Organization Updates', value: 'Organization Updates' },
          { title: 'Children and Families', value: 'Children and Families' },
          { title: 'Elderly Care', value: 'Elderly Care' },
          { title: 'Relief & Food Distribution', value: 'Relief & Food Distribution' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Photo',
      type: 'image',
      description: 'The primary photo for this story.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Photo Description (Alt Text)',
          type: 'string',
          description: 'A brief description of what is in the photo for accessibility and search engines.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary / Preview',
      type: 'text',
      rows: 3,
      description: 'A 1-2 sentence overview of the article shown in listings.',
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'body',
      title: 'Story Body',
      type: 'array',
      description: 'The full text of the article. Format with headings, quotes, bullet points, and inline photos.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal Paragraph', value: 'normal' },
            { title: 'Heading 2 (Major Section)', value: 'h2' },
            { title: 'Heading 3 (Sub-section)', value: 'h3' },
            { title: 'Quote / Highlight', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet Points', value: 'bullet' },
            { title: 'Numbered List', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External or Internal Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Destination URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),

    // ----------------------------------------------------
    // AUTHOR & PUBLISHING METADATA
    // ----------------------------------------------------
    defineField({
      name: 'author',
      title: 'Author / Contributor',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Author Name',
          type: 'string',
          initialValue: 'Initiative for the Needy',
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          initialValue: 'Community Outreach Team',
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readMinutes',
      title: 'Estimated Read Time (Minutes)',
      type: 'number',
      initialValue: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Highlight as Featured Story?',
      type: 'boolean',
      initialValue: false,
    }),

    // ----------------------------------------------------
    // ADVANCED / SEO SETTINGS
    // ----------------------------------------------------
    defineField({
      name: 'seoTitle',
      title: 'Search Result Title (Optional)',
      type: 'string',
      fieldset: 'advanced',
      description: 'Custom search engine title. If left blank, the main story title is used.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Search Meta Description (Optional)',
      type: 'text',
      rows: 2,
      fieldset: 'advanced',
      description: 'Custom description for Google results. If left blank, the summary is used.',
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword (Optional)',
      type: 'string',
      fieldset: 'advanced',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL (Optional)',
      type: 'url',
      fieldset: 'advanced',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({ title, author, category, media, date }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'Draft';
      return {
        title: title || 'Untitled Story',
        subtitle: `${category || 'News'} • by ${author || 'Initiative for the Needy'} (${formattedDate})`,
        media,
      };
    },
  },
});
