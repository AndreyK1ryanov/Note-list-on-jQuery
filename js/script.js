$(document).ready(function(){
//All variables
let timeData = new Date().getHours();
let $newRec = $('button#plus-button');
let $delRec = $('button#del-button');
let $listBody = $('ul#list-body');
let counterCheckbox;


//Header script - start
if (timeData >= 5 && timeData < 12){
    $('div#header').append('<h1>Good Morning! (0_-)</h1>');
}else if (timeData >= 12 && timeData < 18){
    $('div#header').append('<h1>Good Day! (^_^)</h1>');
}else if (timeData >= 18 && timeData < 21){
    $('div#header').append('<h1>Good Evening! (-_-)</h1>');
}else if (timeData >= 21 || timeData < 5){
    $('div#header').append('<h1>Good Night! (Z_Z)</h1>');
}
//Header script - finish


//Plus button script - start
$newRec.on('click', function(){
    $(this).removeClass('col-4 offset-4').addClass('col-2 offset-3').text('+');
        $listBody.append('<li class="row rec col-12"><div class="enter-block offset-1 col-10"><textarea></textarea></div><div class="control-block col-1"><button class="imp-btn btn-dark">!</button><input class="checkbox" type="checkbox"></div></li>'); 
        $delRec.css({'display': 'block'})
        
        //Impotant button script - start
        let $impButton = $('button.imp-btn');
        $impButton.on('click', function() {
                $(this).parents('li.rec').find('textarea').addClass('impotant');
        })     
        //Impotant button script - finish
})
//Plus button script - finish


//Delete button script - start
$delRec.on('click', function() {
    counterCheckbox =  $('li.rec').find('input:checkbox:checked').length;
    if(counterCheckbox == 0){
        alert('Please select a note to delete')
    }else{
        let quest = confirm('Are you sure want to delete these notes? ('+ counterCheckbox +')')
    if(quest){
        $('li.rec').each(function(){
            $(this).find('input:checkbox:checked').addClass('remove');
                if($('.checkbox').hasClass('remove')){
                    $(this).remove()
                }
        })
    }else{};
    } 
})
//Delete button script - finish


})
