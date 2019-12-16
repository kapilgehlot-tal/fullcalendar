import MomentTimeZonePlugin from 'fullcalendar-custom/moment-timezone'
import { testTimeZoneImpl } from './timeZoneImpl'

describe('moment-timezone', function() {
  testTimeZoneImpl(MomentTimeZonePlugin)
})
