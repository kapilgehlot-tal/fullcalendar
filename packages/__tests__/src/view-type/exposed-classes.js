import { DayGridView, DayGrid } from 'fullcalendar-custom/daygrid'
import { ListView } from 'fullcalendar-custom/list'
import { TimeGridView, TimeGrid } from 'fullcalendar-custom/timegrid'

describe('internal View/Grid classes', function() {

  it('are exposed', function() {

    expect(typeof TimeGridView).toBe('function')
    expect(typeof DayGridView).toBe('function')
    expect(typeof ListView).toBe('function')

    expect(typeof DayGrid).toBe('function')
    expect(typeof TimeGrid).toBe('function')
  })

})
