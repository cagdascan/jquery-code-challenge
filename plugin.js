(function($){
  //sample data
  var data = [{"title":"event 1", "date":"2014/09/25"},
              {"title":"event 2", "date":"2014/09/26","enddate":"2014/09/30"},
              {"title":"event 3", "date":"2014/09/27"},
              {"title":"event 4", "date":"2014/09/30"}];
  // 
  $.fn.theCalendar = function ()  {
    var calTemplate = '<div class="cal-container">' +
      '<div class="cal-grid">'+
        '<div class="days-of-the-week"></div>'+
          '<div class="header-day">Pazartesi</div>'+
          '<div class="header-day">Sali</div>'+
          '<div class="header-day">Carsamba</div>'+
          '<div class="header-day">Persembe</div>'+
          '<div class="header-day">Cuma</div>'+
          '<div class="header-day">Cumartesi</div>'+
          '<div class="header-day">Pazar</div>'+
        '<div class="days">'+
          '<div class="day day-1"><span class="day-number">1</span></div>'+  
          '<div class="day day-2"><span class="day-number">2</span></div>'+  
          '<div class="day day-3"><span class="day-number">3</span></div>'+  
          '<div class="day day-4"><span class="day-number">4</span></div>'+  
          '<div class="day day-5"><span class="day-number">5</span></div>'+  
          '<div class="day day-6"><span class="day-number">6</span></div>'+  
          '<div class="day day-7"><span class="day-number">7</span></div>'+  
          '<div class="day day-8"><span class="day-number">8</span></div>'+  
          '<div class="day day-9"><span class="day-number">9</span></div>'+  
          '<div class="day day-10"><span class="day-number">10</span></div>'+  
          '<div class="day day-11"><span class="day-number">11</span></div>'+  
          '<div class="day day-12"><span class="day-number">12</span></div>'+  
          '<div class="day day-13"><span class="day-number">13</span></div>'+  
          '<div class="day day-14"><span class="day-number">14</span></div>'+  
          '<div class="day day-15"><span class="day-number">15</span></div>'+  
          '<div class="day day-16"><span class="day-number">16</span></div>'+  
          '<div class="day day-17"><span class="day-number">17</span></div>'+  
          '<div class="day day-18"><span class="day-number">18</span></div>'+  
          '<div class="day day-19"><span class="day-number">19</span></div> '+ 
          '<div class="day day-20"><span class="day-number">20</span></div>'+  
          '<div class="day day-21"><span class="day-number">21</span></div>'+  
          '<div class="day day-22"><span class="day-number">22</span></div>'+  
          '<div class="day day-23"><span class="day-number">23</span></div>'+  
          '<div class="day day-24"><span class="day-number">24</span></div>'+  
          '<div class="day day-25"><span class="day-number">25</span></div>'+  
          '<div class="day day-26"><span class="day-number">26</span></div>'+  
          '<div class="day day-27"><span class="day-number">27</span></div>'+  
          '<div class="day day-28"><span class="day-number">28</span></div>'+  
          '<div class="day day-29"><span class="day-number">29</span></div>'+  
          '<div class="day day-30"><span class="day-number">30</span></div>'+  
          '<div class="day"><span class="day-number"></span></div>'+  
          '<div class="day"><span class="day-number"></span></div>'+  
          '<div class="day"><span class="day-number"></span></div>'+  
          '<div class="day"><span class="day-number"></span></div>'+  
          '<div class="day"><span class="day-number"></span></div>'+  
        '</div>'+
      '</div>'+
    '</div>';

    this.element = 'div.cal';
    $(this.element).html(calTemplate);

    for (var i = 0; i < data.length; i ++) {
      var date = new Date(data[i].date);
      var day = date.getDate();
      var cl = '.day-' + day;
      var eventName = data[i].title;
      var duration = 1;
      var size, eventEl;   
      var margin = 20;   
      if (data[i].enddate !== undefined) {
        var enddate = new Date(data[i].enddate);
        duration = enddate.getDate() - day + 1;

        if (duration > 1 && ((day % 7  > enddate % 7 ) || (day % 7 === 0))) {

          if (day % 7 === 0) {
            size = 1 * 100;
          } else {
            size = (7 - (day % 7) + 1)*100;
          }
          margin = i * margin;
          eventEl = '<div class="event" style="width:' +
            size +'%; margin-top:' + margin + 'px;">' + eventName + '</div>';
          $(cl).prepend(eventEl);

          cl = '.day-' + (day + (7 - (day % 7) + 1));

          if (day % 7 === 0) {
            size = (duration - 1) * 100;
          } else {
            size = (duration - (7 - (day % 7) + 1)) * 100;
          }

          eventEl = '<div class="event" style="width:' +
            size +'%; margin-top:' + margin + 'px;">' + eventName + '</div>';
          $(cl).prepend(eventEl);

        } else {
          size = duration * 100;
          eventEl = '<div class="event" style="width:' +
            size +'%; margin-top:' + margin + 'px;">' + eventName + '</div>';
          $(cl).prepend(eventEl);
        }
      } else {
        margin = i * margin;
        eventEl = '<div class="event" style="margin-top:' + margin + 'px;">' + eventName + '</div>';
        $(cl).prepend(eventEl);
      }
    }
  };
})(jQuery);
