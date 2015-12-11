var cssdrop1, cssdrop2, cssdrop3, cssdrop4, cssdrop5 = false;

$(document).ready(function() {

    // $("#doctype-drag, #html2-drag, #head1-drag").draggable({ containment: 'document', snap: "#doctype-drop, #head1-drop, #html2-drop" });
    $("#lightblue-drag, #couriernew-drag, #inline-drag, #absolute-drag, #3px-drag").draggable({ containment: 'document', snap: "#lightblue-drop, #couriernew-drop, #inline-drop, #absolute-drop, #3px-drop", snapMode: "inner" });

    $("#lightblue-drop").droppable({ hoverClass: 'border', tolerance: 'intersect', accept: '#lightblue-drag',
        out: function() {
            cssdrop1 = false;
        },
        drop: function() {
            cssdrop1 = true;
        }
    });

    $("#couriernew-drop").droppable({ hoverClass: 'border', tolerance: 'intersect', accept: '#couriernew-drag',
        out: function() {
            cssdrop2 = false;
        },
        drop: function() {
            cssdrop2 = true;
        }
    });

    $("#inline-drop").droppable({ hoverClass: 'border', tolerance: 'intersect', accept: '#inline-drag',
        out: function() {
            cssdrop3 = false;
        },
        drop: function() {
            cssdrop3 = true;
        }
    });

    $("#absolute-drop").droppable({ hoverClass: 'border', tolerance: 'intersect', accept: '#absolute-drag',
        out: function() {
            cssdrop4 = false;
        },
        drop: function() {
            cssdrop4 = true;
        }
    });

    $("#3px-drop").droppable({ hoverClass: 'border', tolerance: 'intersect', accept: '#3px-drag',
        out: function() {
            cssdrop5 = false;
        },
        drop: function() {
            cssdrop5 = true;
        }
    });

    
    
});

function css1Submit() {
    if (cssdrop1 == true && cssdrop2 == true && cssdrop3 == true && cssdrop4 == true && cssdrop5 == true) {
        console.log('success');
        //document.getElementById("message").innerHTML = "SUCCESS!";
        $('#myModal').modal('show');
    } else {
        console.log('fail');
        //document.getElementById("message").innerHTML = "FAILED!";
        $('#myModal2').modal('show');
    }  
};






