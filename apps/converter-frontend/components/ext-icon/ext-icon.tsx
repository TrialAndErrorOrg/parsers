import React from 'react'
import { defaultStyles, FileIcon } from 'react-file-icon'

/* eslint-disable-next-line */
export interface ExtIconProps {}

export const WordIcon = () => (
  <FileIcon extension="docx" {...defaultStyles.docx} />
)

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
