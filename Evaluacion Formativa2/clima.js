$(document).ready(function(){
    $("#clima").click(function(){
        $.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Punta%20Arenas?unitGroup=metric&key=X9LMSEH7VBFLWJ7L65WCK6E3H&contentType=json&days=10",
            function(data){
                $.each(data.days,function(i,item){
                    $('days').append("<tr><td>"+item.datetime + "<tr><td>" + item.tempmax + "<tr><td>" + item.tempmin + "<tr><td>" +item.preciptype)
                }
            )
            });
    });
});
