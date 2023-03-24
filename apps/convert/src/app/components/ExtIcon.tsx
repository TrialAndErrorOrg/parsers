import React from 'react'
import { defaultStyles, FileIcon } from 'react-file-icon'

/* eslint-disable-next-line */
export interface ExtIconProps {}

export const WordIcon = () => <FileIcon extension="docx" {...defaultStyles.docx} />

export const JATSIcon = () => (
  <FileIcon
    extension="jats"
    color="whitesmoke"
    labelColor="green"
    radius={4}
    labelUppercase
    labelTextColor="whitesmoke"
    type="spreadsheet"
  />
)

export const TexIcon = () => (
  <FileIcon
    extension="tex"
    color="whitesmoke"
    labelColor="teal"
    radius={4}
    labelUppercase
    labelTextColor="whitesmoke"
    type="code"
  />
)

export const GenericIcon = ({ type }: { type: string }) => {
  switch (type.replace(/[./-]/g, '')) {
    case 'tex':
      return <TexIcon />
    case 'jats':
      return <JATSIcon />
    case 'docx':
    case 'word':
      return <WordIcon />
    default:
      return (
        <FileIcon
          extension={type}
          color="whitesmoke"
          labelColor="grey"
          radius={4}
          labelUppercase
          labelTextColor="whitesmoke"
          type="code"
        />
      )
  }
}
