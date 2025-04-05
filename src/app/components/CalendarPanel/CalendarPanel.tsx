'use client'

import React from 'react'
import { Panel, PanelProps } from 'app/components/Panel'
import { Calendar, Value } from 'app/components/Calendar'

export interface setValueFunction {
  (value: Value): void
}

export interface CalendarPanelProps extends PanelProps {
  value: Value
  setValue: setValueFunction
}

export const CalendarPanel: React.FC<CalendarPanelProps> = ({
  className,
  value,
  setValue,
  ...props
}) => {
  return (
    <Panel className={`CalendarPanel ${className}`} {...props}>
      <h1 className="text-lg font-bold">Calendar</h1>
      <Calendar
        onViewChange={(e) => {
          console.log(e)
        }}
        onChange={(value) => {
          if (value) {
            setValue(value)
            alert(value)
          }
        }}
        value={value}
      />
    </Panel>
  )
}
