
$( "span" )
    .mouseup(function() {
        import { Spinner } from "spin.js"
        var opts = {
          lines: 15, // The number of lines to draw
          length: 7, // The length of each line
          width: 2, // The line thickness
          radius: 23, // The radius of the inner circle
          scale: 1.05, // Scales overall size of the spinner
          corners: 1, // Corner roundness (0..1)
          color: '#ffffff', // CSS color or array of colors
          fadeColor: 'transparent', // CSS color or array of colors
          speed: 1.7, // Rounds per second
          rotate: 0, // The rotation offset
          animation: 'spinner-line-fade-more', // The CSS animation name for the lines
          direction: 1, // 1: clockwise, -1: counterclockwise
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          className: 'spinner', // The CSS class to assign to the spinner
          top: '51%', // Top position relative to parent
          left: '50%', // Left position relative to parent
          shadow: '0 0 1px transparent', // Box-shadow for the lines
          position: 'absolute' // Element positioning
        };

        var spinner = new Spinner(opts).spin();
        $(this).parent().appendChild(spinner.el);
        $(this).hide();
        var name = $(this).text();
        var username = $(this).data('username');
        var link = $('body').css('background-image');
        link = link.replace('url(','').replace(')','');
        $.ajax({
            context: this,
            type: "POST",
            url: 'yo',
            data: {
                username: username,
                link: link
            },
            success: function(response) {

                spinner.stop();
                $(this).text('Sent Yo!');
                $(this).show();

                var me = $(this);
                setTimeout(
                    function(){
                        me.text(name);
                    },
                    2000
                );

            },
            error: function(error) {

                spinner.stop();
                console.log(error);

                $(this).text('Failed üÅE');
                $(this).show();

                var me = $(this);
                setTimeout(
                    function(){
                        me.text(name);
                    },
                    2000
                );
            }
        });
    });