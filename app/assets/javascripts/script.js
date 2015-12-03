var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8, drop9, drop10, drop11, drop12, drop13 = false;

$(document).ready(function() {

    // $("#doctype-drag, #html2-drag, #head1-drag").draggable({ containment: 'document', snap: "#doctype-drop, #head1-drop, #html2-drop" });
    $("#doctype-drag, #html1-drag, #html2-drag, #head1-drag, #head2-drag, #title1-drag, #title2-drag, #title-drag, #body1-drag, #body2-drag, #div1-drag, #div2-drag, #content-drag").draggable({ containment: 'document' });

    $("#doctype-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#doctype-drag',
        out: function() {
            drop1 = false;
        },
        drop: function() {
            drop1 = true;
        }
    });

    $("#html1-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#html1-drag',
        out: function() {
            drop2 = false;
        },
        drop: function() {
            drop2 = true;
        }
    });

    $("#html2-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#html2-drag',
        out: function() {
            drop3 = false;
        },
        drop: function() {
            drop3 = true;
        }
    });

    $("#head1-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#head1-drag',
        out: function() {
            drop4 = false;
        },
        drop: function() {
            drop4 = true;
        }
    });

    $("#head2-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#head2-drag',
        out: function() {
            drop4 = false;
        },
        drop: function() {
            drop4 = true;
        }
    });
    
});

function myFunction() {
    if (drop1 == true && drop2 == true && drop3 == true && drop4 == true) {
        console.log('success');
        document.getElementById("message").innerHTML = "SUCCESS!";
    } else {
        console.log('fail');
        document.getElementById("message").innerHTML = "FAILED!";
    }  
};
