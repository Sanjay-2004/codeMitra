import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
export default function Calendar() {
    const handleDateClick = (arg) => {
        alert(arg.dateStr)
      }
    return (
        <div className="p-12 bg-stone-950 text-secondary">
            <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: 'event 1', date: '2024-09-30' },
            { title: 'event 2', date: '2024-08-31' }
        ]}
        />
        </div>
        
    )
}