
var init_stock_lookup;


init_stock_lookup = function(){

    $('#stock-lookup-form').on('ajax:before',  function(event, data, status,  xhr ){
        show_spinner();
    });


    $('#stock-lookup-form').on('ajax:after',  function(event, data, status,  xhr ){
        hide_spinner();
    });


    $('#stock-lookup-form').on('ajax:success', function(event, data, status,  xhr ){
        
        $('#stock-lookup').html(data);
        
        init_stock_lookup();
    });

    $('#stock-lookup-form').on('ajax:error ', function(event, xhr, status, error){
        hide_spinner();
        $('#stock-lookup-results').html(' ');
        $('#stock-lookup-errors').html('Stock was not found.');
        
    });
    
    
}

$(document).on('turbolinks:load', function(){ 
    init_stock_lookup();
})