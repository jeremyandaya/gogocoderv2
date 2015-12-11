var answer1, answer2, answer3, answer4, answer5, answer6, answer7 = '';
var answer1a = ['a','b'].join('');
var answer2a = ['a','b','c','d','e'].join('');
var answer3a = ['a','b','c','d'].join('');
var answer4a = ['a','b'].join('');
var answer5a = ['a','b','c','d'].join('');
var answer6a = ['a','b','c','d','e'].join('');
var answer7a = ['a','b'].join('');


$(document).ready(function() {
  
    function coordinates(event,ui) {
        console.log(ui.position);
    }

    $('#sortable-ruby-1').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer1 = $(this).sortable("toArray").join('');
          console.log(answer1);
      },
      sort : coordinates
    });

    $('#sortable-ruby-2').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer2 = $(this).sortable("toArray").join('');
          console.log(answer2);
      },
      sort : coordinates
    });

    $('#sortable-ruby-3').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer3 = $(this).sortable("toArray").join('');
          console.log(answer3);
      },
      sort : coordinates
    });

    $('#sortable-ruby-4').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer4 = $(this).sortable("toArray").join('');
          console.log(answer4);
      },
      sort : coordinates
    });

    $('#sortable-ruby-5').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer5 = $(this).sortable("toArray").join('');
          console.log(answer5);
      },
      sort : coordinates
    });

    $('#sortable-ruby-6').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer6 = $(this).sortable("toArray").join('');
          console.log(answer6);
      },
      sort : coordinates
    });

    $('#sortable-ruby-7').sortable({
        axis : 'x',
        stop : function (event, ui) {
          window.answer7 = $(this).sortable("toArray").join('');
          console.log(answer7);
      },
      sort : coordinates
    });

}); // end ready

function ruby_submit() {
    if (answer1 === answer1a && answer2 === answer2a && answer3 === answer3a && answer4 === answer4a && answer5 === answer5a && answer6 === answer6a && answer7 === answer7a) {
        console.log('success');
        $('#myModal').modal('show');
    } else {
        console.log('fail');
        $('#myModal2').modal('show');
    }  
};




















