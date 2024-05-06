import React from 'react'
import {defineField} from 'sanity'

const DateIcon = () => (
  <span style={{ fontWeight: 'bold' }}>D</span>
)

const DateDecorator = () => {
  return `${new Date().getFullYear()}`
}

export const currentDate = defineField({
  name: 'currentDate',
  title: 'Current Date',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [],
      styles: [],
      marks: {
        annotations: [],
        decorators: []
      }
    }
  ]
})
