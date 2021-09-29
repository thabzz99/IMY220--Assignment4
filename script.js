
$(document).ready(function () {
    $("b:contains('Name:')~button:contains('Edit')").on('click', function () {
        
        let tempName=$("b:contains('Name:')~span");
        $("b:contains('Name:')").remove();
       
        $(this).parent().children("span").remove();
        $(this).parent().append('<input type="text" id="fname" name="fname" placeholder=" " class="form-control col-9"><br><br>');
        $('input').attr("placeholder",tempName.text())
        $(this).parent().children('button').html("Update");

        $("button:contains('Update')").click(function(){
            var newName = $("#fname").val();
            
            $(this).parent().children("input").remove();
            $(this).parents('div.details').append('<b>Name:</b>');
            $(this).parents('div.details').append(' ',newName);
            $(this).parent().children("br").remove();
            $("button:contains('Update')").html('Edit');
        });
       
    });

    $("b:contains('Surname:')~button").on('click', function () {
        let tempSurname=$("b:contains('Surname:')~span");
        $("b:contains('Surname:')").remove();
       
        $(this).parent().children("span").remove();
        $(this).parent().append('<input type="text" id="surname" name="surname" placeholder=" " class="form-control col-9"><br><br>');
        $('input').attr("placeholder",tempSurname.text())
        $(this).parent().children('button').html("Update");

        $("button:contains('Update')").click(function(){
            var newSurname = $("#surname").val();
            
            $(this).parent().children("input").remove();
            $(this).parents('div.details').append('<b>Surname:</b>');
            $(this).parents('div.details').append(' ',newSurname);
            $(this).parent().children("br").remove();
            $("button:contains('Update')").html('Edit');
        });
       
    });

    $("b:contains('Email:')~button").on('click', function () {
        let tempEmail=$("b:contains('Email:')~span");
        $("b:contains('Email:')").remove();
       
        $(this).parent().children("span").remove();
        $(this).parent().append('<input type="email" id="email" name="email" placeholder=" " class="form-control col-9"><br><br>');
        $('input').attr("placeholder",tempEmail.text())
        $(this).parent().children('button').html("Update");

        $("button:contains('Update')").click(function(){
            var newEmail = $("#email").val();
            
            $(this).parent().children("input").remove();
            $(this).parents('div.details').append('<b>Email:</b>');
            $(this).parents('div.details').append(' ',newEmail);
            $(this).parent().children("br").remove();
            $("button:contains('Update')").html('Edit');
        });
       
    });

    $("b:contains('Birth date:')~button").on('click', function () {
        let tempBday=$("b:contains('Birth date:')~span");
        $("b:contains('Birth date:')").remove();
       
        $(this).parent().children("span").remove();
        $(this).parent().append('<input type="date" id="date" name="date" placeholder=" " class="form-control col-9"><br><br>');
        $('input').attr("placeholder",tempBday.text())
        $(this).parent().children('button').html("Update");

        $("button:contains('Update')").click(function(){
            var newDate = $("#date").val();
            
            $(this).parent().children("input").remove();
            $(this).parents('div.details').append('<b>Birth date:</b>');
            $(this).parents('div.details').append(' ',newDate);
            $(this).parent().children("br").remove();
            $("button:contains('Update')").html('Edit');
        });
       
    });


});