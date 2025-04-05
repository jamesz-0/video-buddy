'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils/index'
import { Panel, PanelProps } from 'app/components/generic/Panel'
import { InsightsContent } from 'app/components/specific/Insights/InsightsContent'
import { InsightsDataObj } from './types'

export interface InsightsPanelProps extends PanelProps, PropsWithClassName {
  insightsData: InsightsDataObj
}

export const InsightsPanel: React.FC<InsightsPanelProps> = ({
  insightsData,
  className,
  ...props
}) => (
  <Panel
    className={classNames('InsightsPanel', 'flex', 'flex-col', className)}
    {...props}
  >
    <h1 className="text-lg font-bold mb-2">Insights</h1>
    <InsightsContent
      className="flex-grow flex flex-col justify-center"
      insightsData={insightsData}
    />
  </Panel>
)
