$( "#myName" ).hover(
        function() {
          $( "#popup" ).css("display", "inline-block");
        }, function() {
          $( "#popup" ).css("display", "none");
        }
      );