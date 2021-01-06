document.addEventListener('DOMContentLoaded', function() {
  
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      
      plugins: ['interaction','dayGrid','timeGrid','list'],/*Si no pongo la carpeta interaction,list ni timegrid
      no va a funcionar los botones de mes semana y dia
      */
      
      header: {
        left:'prev,next today',
        center:'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
        
      },
      events: [
        {
          title: 'Vacuna Cancer de pulmon',
          start: '2020-06-15'
        },
        {
            title:'Vacuna tuberculosis',
            start: '2020-06-02',
            end: '2020-06-04'
        },
        {
          title:'Vacuna Dengue',
          start: '2020-07-24'
        },
        {
          title:'Vacuna Gripe estacional',
          start: '2020-08-01'  
        }
      ]
    });
    /*Establezco que el calendario se ponga en español*/  
    calendar.setOption("locale","Es");
    
    calendar.render();
  });