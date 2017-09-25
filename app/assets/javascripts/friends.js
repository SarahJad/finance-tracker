
var init_friend_lookup;


init_friend_lookup = function(){

    $('#friend-lookup-form').on('ajax:before',  function(event, data, status,  xhr ){
        show_spinner();
    });


    $('#friend-lookup-form').on('ajax:after',  function(event, data, status,  xhr ){
        hide_spinner();
    });


    $('#friend-lookup-form').on('ajax:success', function(event, data, status,  xhr ){
        
        $('#friend-lookup').html(data);
        
        init_friend_lookup();
    });

    $('#friend-lookup-form').on('ajax:error ', function(event, xhr, status, error){
        hide_spinner();
        $('#friend-lookup-results').html(' ');
        $('#friend-lookup-errors').html('Person was not found.');
        
    });
    
    
}

$(document).on('turbolinks:load', function(){ 
    init_friend_lookup();
})