import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import moment from 'moment'
import './scheduler.css'

export default function Scheduler() {
  const test = [
    { title: 'Ashley Simons Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T09:00:00`, end: `${moment().format('YYYY-MM-DD')}T09:15:00+00:00` }
  ]

  return (
    <div className="main">
      <FullCalendar
          
          plugins={[ dayGridPlugin, timeGridPlugin ]}
          allDaySlot={false}
          timeZone='UTC'
          initialView='timeGridWeek'
          slotMinTime="09:00:00"
          dayHeaderFormat={{ weekday: 'long' }}
          headerToolbar={{
              left: 'prev,next today',
              center: 'timeGridWeek,dayGridMonth',
              right: ''
            }
          }
          dayMaxEvents={true}
          weekends={true}
          events={[
            { title: 'Ashley Simons Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T09:00:00`, end: `${moment().format('YYYY-MM-DD')}T09:15:00` },
            { title: 'Andrew Peters Veelo Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T09:15:00`, end: `${moment().format('YYYY-MM-DD')}T09:30:00` },
            { title: 'Ashley Booravoola Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T09:30:00`, end: `${moment().format('YYYY-MM-DD')}T09:45:00` },
            { title: 'Peter Meyers Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T09:45:00`, end: `${moment().format('YYYY-MM-DD')}T10:00:00` },
            { title: 'Ashley Booravoola Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T11:15:00`, end: `${moment().format('YYYY-MM-DD')}T11:30:00` },
            { title: 'Ashley Booravoola Cardiac Surgery', start: `${moment().format('YYYY-MM-DD')}T11:56:00`, end: `${moment().format('YYYY-MM-DD')}T12:30:00` },
          ]}
        />
    </div>
  );
}
