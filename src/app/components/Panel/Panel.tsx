'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithChildren, DynamicTagProps } from 'app/utils/index'

export interface PanelProps
  extends React.HTMLAttributes<HTMLElement | SVGElement>,
    PropsWithChildren,
    DynamicTagProps {}

export const Panel: React.FC<PanelProps> = ({
  className,
  children,
  tag,
  ...props
}) => {
  const Tag = tag ? tag : 'div'
  return (
    <Tag
      className={`Panel bg-white p-6 border-2 border-gray-200 ${classNames(className)}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
