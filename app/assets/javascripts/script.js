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
            drop5 = false;
        },
        drop: function() {
            drop5 = true;
        }
    });

    $("#title1-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#title1-drag',
        out: function() {
            drop6 = false;
        },
        drop: function() {
            drop6 = true;
        }
    });

    $("#title2-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#title2-drag',
        out: function() {
            drop7 = false;
        },
        drop: function() {
            drop7 = true;
        }
    });

    $("#title-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#title-drag',
        out: function() {
            drop8 = false;
        },
        drop: function() {
            drop8 = true;
        }
    });

    $("#body1-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#body1-drag',
        out: function() {
            drop9 = false;
        },
        drop: function() {
            drop9 = true;
        }
    });

    $("#body2-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#body2-drag',
        out: function() {
            drop10 = false;
        },
        drop: function() {
            drop10 = true;
        }
    });

    $("#div1-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#div1-drag',
        out: function() {
            drop11 = false;
        },
        drop: function() {
            drop11 = true;
        }
    });

    $("#div2-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#div2-drag',
        out: function() {
            drop12 = false;
        },
        drop: function() {
            drop12 = true;
        }
    });

    $("#content-drop").droppable({ hoverClass: 'border', tolerance: 'fit', accept: '#content-drag',
        out: function() {
            drop13 = false;
        },
        drop: function() {
            drop13 = true;
        }
    });
    
});

function myFunction() {
    if (drop1 == true && drop2 == true && drop3 == true && drop4 == true && drop5 == true && drop6 == true && drop7 == true && drop8 == true && drop9 == true && drop10 == true && drop11 == true && drop12 == true && drop13 == true) {
        console.log('success');
        document.getElementById("message").innerHTML = "SUCCESS!";
        $('#myModal').modal('show');
    } else {
        console.log('fail');
        document.getElementById("message").innerHTML = "FAILED!";
        $('#myModal2').modal('show');
    }  
};

























