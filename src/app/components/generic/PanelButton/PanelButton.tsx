'use client'

import React from 'react'
import classNames from 'classnames'
import { Panel, PanelProps } from 'app/components/generic/Panel'
import './PanelButton.css'

export type PanelButton = PanelProps

export const PanelButton: React.FC<PanelButton> = ({ className, ...props }) => (
  <Panel
    tag="button"
    className={classNames('PanelButton', className)}
    {...props}
  />
)
