
if ($('.calendar').length > 0) {  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".calendar").forEach(calendarEl => {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
        initialView: 'dayGridMonth', 
        events: [
          {
            title: 'Francis Harris',
            className: 'badge bg-success-transparent',
            backgroundColor: '#D9F1E0',
            icon: 'k',
            textColor: "#111827",		
            start: new Date($.now() - 168000000).toJSON().slice(0, 10),
            end: new Date($.now() - 168000000).toJSON().slice(0, 10),
          },
          {
              title: 'Reuben Keen',	
              className: 'badge badge-secondary-transparent',
              backgroundColor: '#EDF2F4' ,
              textColor: "#0C4B5E",				  
              start: new Date($.now() + 338000000).toJSON().slice(0, 10)
          },
          {
              title: 'William Jones',
              className: 'badge badge-purple-transparent',
              backgroundColor: '#F7EEF9',		
              textColor: "#AB47BC",		  
              start: new Date($.now() - 338000000).toJSON().slice(0, 10) 
          },
          {
              title: 'William Ward',
              className: 'badge badge-dark-transparent',
              backgroundColor: '#E8E9EA',		
              textColor: "#212529",				  
              start: new Date($.now() + 68000000).toJSON().slice(0, 10) 
          },
          {
              title: 'Jay Beckman',
              className: 'badge badge-danger-transparent',
              backgroundColor: '#FAE7E7',	
              textColor: "#E70D0D",				  
              start: new Date($.now() + 88000000).toJSON().slice(0, 10) 
          },
        ],
        eventClick: function(info) {
          // Open modal
          $('#event_modal').modal('show');
        },
            editable: true,
            drop: function (info) {
              // If the event is dropped, do something here (optional)
              console.log('Event dropped');
          },
          eventReceive: function(info) {
              // When event is dropped on calendar
              console.log('Event added', info.event.title);
          }
        });

        // Attach the instance to the element (without JSON.stringify)
        calendarEl.fcInstance = calendar;

        calendar.render();
    });

    // 🔹 Ensure Calendar Resizes When Switching Tabs
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener('shown.bs.tab', function () {
            document.querySelectorAll(".calendar").forEach(calendarEl => {
                if (calendarEl.fcInstance) {
                    setTimeout(() => {
                        calendarEl.fcInstance.updateSize();
                    }, 10); // Delay to allow layout adjustments
                }
            });
        });
    });
});

}



