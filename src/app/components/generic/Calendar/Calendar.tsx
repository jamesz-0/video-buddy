/**
 * This whole thing is just a react calendar but with react prop and style overrides.
 * The Calendar component is meant to be this app's reusable calendar component.
 */

import {
  Calendar as ReactCalendar,
  CalendarProps as ReactCalendarProps,
} from 'react-calendar'
export * from 'react-calendar/dist/esm/shared/types.js'
import 'react-calendar/dist/Calendar.css'
import './Calendar.css'

export type CalendarProps = ReactCalendarProps

export const Calendar = ({ ...props }: CalendarProps) => (
  <ReactCalendar view="month" showFixedNumberOfWeeks={true} {...props} />
)
