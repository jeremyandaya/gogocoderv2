// var jsdrop1 = false;
var positions;

$(function() {
    $("#sortable1").sortable({
      connectWith: ".connectedSortable",
      	update: function(event, ui) {
              //create the array that hold the positions...
              var order = []; 
                //loop trought each li...
               $('#sortable1 li').each( function(e) {

               //add each li position to the array...     
               // the +1 is for make it start from 1 instead of 0
              order.push( $(this).attr('id')  + '=' + ( $(this).index() + 1 ) );
              });
              // join the array as single variable...
              positions = order.join(';')
               //use the variable as you need!
              console.log(positions);
             // $.cookie( LI_POSITION , positions , { expires: 10 });
            }
    }).disableSelection();
});

// $(document).ready(function() {

//     $("#a-drag").draggable({ containment: 'document' });

//     $("#a-drop").droppable({ hoverClass: 'border', tolerance: 'intersect', accept: '#lightblue-drag',
//         out: function() {
//             jsdrop1 = false;
//         },
//         drop: function() {
//             jsdrop1 = true;
//         }
//     });
// });

// $(function() {
//     //coockie name
//      var LI_POSITION = 'li_position';
//        $('ul#sortable1').sortable({
//          //observe the update event...
//             update: function(event, ui) {
//               //create the array that hold the positions...
//               var order = []; 
//                 //loop trought each li...
//                $('#sortable1 li').each( function(e) {

//                //add each li position to the array...     
//                // the +1 is for make it start from 1 instead of 0
//               order.push( $(this).attr('id')  + '=' + ( $(this).index() + 1 ) );
//               });
//               // join the array as single variable...
//               var positions = order.join(';')
//                //use the variable as you need!
//               alert( positions );
//              // $.cookie( LI_POSITION , positions , { expires: 10 });
//             }
//         });
//      });​

    

function js1Submit() {
    if (positions == "b-drag=1;a-drag=2;c-drag=3;e-drag=4;d-drag=5") {
        console.log('success');
        // document.getElementById("js-message").innerHTML = "SUCCESS!";
        $('#myModal').modal('show');
    } else {
        console.log('fail');
        // document.getElementById("js-message").innerHTML = "FAILED!";
        $('#myModal2').modal('show');
    }  
};








