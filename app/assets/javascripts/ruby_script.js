$(document).ready(function() {
  // var answer = ['a','b','c','d'].join('');
  var answer2 = ['a','b'].join('');
  var answer3 = ['a','b','c','d','e'].join('');
  var answer4 = ['a','b','c','d'].join('');
  var answer6 = ['a','b'].join('');
  var answer7 = ['a','b','c','d'].join('');
  var answer11 = ['a','b','c','d','e'].join('');
  var answer13 = ['a','b'].join('');
  var finalcheck = false;

   function coordinates(event,ui) {
    console.log(ui.position);
   }

   // $('#gameContainer1').sortable({
   //  axis : 'x',
   //  stop : function (event, ui) {
   //    if ($(this).sortable("toArray").join('') === answer) {
   //      document.getElementById("gameContainer1-red").className = "gameContainer1-green";
   //      $(this).sortable("disable");
   //    }
   //  },
   //  sort : coordinates
   // });

   $('#gameContainer2').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer2) {
        document.getElementById("gameContainer2-red").className = "gameContainer2-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });

   $('#gameContainer3').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer3) {
        document.getElementById("gameContainer3-red").className = "gameContainer3-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });

   $('#gameContainer4').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer4) {
        document.getElementById("gameContainer4-red").className = "gameContainer4-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });

   $('#gameContainer6').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer6) {
        document.getElementById("gameContainer6-red").className = "gameContainer6-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });

   $('#gameContainer7').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer7) {
        document.getElementById("gameContainer7-red").className = "gameContainer7-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });

   $('#gameContainer11').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer11) {
        document.getElementById("gameContainer11-red").className = "gameContainer11-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });

   $('#gameContainer13').sortable({
    axis : 'x',
    stop : function (event, ui) {
      if ($(this).sortable("toArray").join('') === answer13) {
        document.getElementById("gameContainer13-red").className = "gameContainer13-green";
        $(this).sortable("disable");
      }
    },
    sort : coordinates
   });
   
}); // end ready




















