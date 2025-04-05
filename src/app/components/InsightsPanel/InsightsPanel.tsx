'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils/index'
import { Panel, PanelProps } from 'app/components/Panel'
import { InsightsData, InsightsDataObj } from 'app/components/Insights'

export interface InsightsPanelProps extends PanelProps, PropsWithClassName {
  insightsData: InsightsDataObj
}

export const InsightsPanel: React.FC<InsightsPanelProps> = ({
  insightsData,
  className,
  ...props
}) => (
  <Panel className={`InsightsPanel flex flex-col ${className}`} {...props}>
    <h1 className="text-lg font-bold mb-2">Insights</h1>
    <InsightsData
      className="flex-grow flex flex-col justify-center"
      insightsData={insightsData}
    />
  </Panel>
)
