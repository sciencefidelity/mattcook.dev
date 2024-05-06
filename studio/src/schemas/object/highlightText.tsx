import React from 'react'
import {defineField} from 'sanity'

const HighlightIcon = () => (
  <span style={{ fontWeight: 'bold' }}>H</span>
)

const HighlightDecorator = (props: any) => {
  return <span style={{ color: 'blue' }}>{props.children}</span>
}

export const highlightText = defineField({
  name: 'highlightText',
  title: 'Highlight Text',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [],
      styles: [],
      marks: {
        annotations: [],
        decorators: [
          {
            title: "Highlight",
            value: 'highlight',
            icon: HighlightIcon,
            component: HighlightDecorator
          }
        ]
      }
    }
  ]
})
