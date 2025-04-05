'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils/index'
import { Panel, PanelProps } from 'app/components/generic/Panel'
import { ImageWithPlaceholder } from 'app/components/generic/ImageWithPlaceholder'
import {
  AgendaTodayTable,
  AgendaTodayDataType,
} from 'app/components/specific/AgendaToday/AgendaTodayTable'

export interface AgendaTodayPanelProps extends PanelProps, PropsWithClassName {
  agendaTodayData: AgendaTodayDataType
}

export const AgendaTodayPanel: React.FC<AgendaTodayPanelProps> = ({
  agendaTodayData,
  className,
  ...props
}) => (
  <Panel
    className={classNames('AgendaTodayPanel', 'flex', 'flex-col', className)}
    {...props}
  >
    <div className="flex-1 text-center">
      <h1 className="text-lg font-bold">Good morning, John!</h1>
      <ImageWithPlaceholder
        className="inline-block"
        alt="sample profile"
        size={128}
        src="/sample-profile.jpg"
      />
    </div>
    <h2 className="flex-none text-lg font-bold">Your agenda today:</h2>
    <AgendaTodayTable
      className="flex-none"
      agendaTodayTableData={agendaTodayData}
    />
  </Panel>
)
