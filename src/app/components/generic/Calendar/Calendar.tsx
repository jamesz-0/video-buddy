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
