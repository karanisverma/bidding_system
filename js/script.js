$('.ownerLogin').click(function() {
    $('#owner').fadeIn();
});
$('.owner_back').click(function() {
    $('#owner').fadeOut();
});

$('.buyerLogin').click(function() {
    $('#buyer').fadeIn();
});
$('.buyer_back').click(function() {
    $('#buyer').fadeOut();
});
$('.set_back').click(function() {
    $('#set_submission').fadeOut();
});
$('.unhappy_back').click(function() {
    $("#unsubmission_file").fadeOut();
});
$('.happy_back').click(function() {
    $('#submitted_successfully_fil').fadeOut();
});
var propertyType;
$('.property_form').click(function() {
    propertyType = this.src;
    var innerHtml = "<img src=" + propertyType + " class='script_img'>"
    $("#imagePlaceHolder").html(innerHtml);
    console.log("clicked element =>", this.src);
    $('#property_formation').fadeIn();
});

$('.property_back').click(function() {
    $('#property_formation').fadeOut();
});
$(".bidding_back").click(function() {
    $('#bidder_bid3_file').fadeOut();
});
$(".bidding_back2").click(function() {
    $('#bidder_biding').fadeOut();
});
$('#confirm_bid').click(function() {
    console.log("confirm_bid is clicked ");
    $("#bidlist").fadeIn();
})

$('.confirm_back').click(function() {
    $('#bidlist').fadeOut();
});

$("#updated_bid").click(function(e) {
    e.preventDefault();
    if ($(".updated_bid")[0].checkValidity()) {
        $("#negotiate_modal").modal('toggle');
        $("#message_screen").fadeIn();
    } else {
        $(".updated_bid").css("border", "3px solid red");
    }
});

$('.update_back').click(function() {
    $('#message_screen').fadeOut();
});

$("#bid_button").click(function(e) {
    e.preventDefault();
    console.log("asdfasdlfjkasdflkj")
    if (!$("#bid_input")[0].checkValidity()) {
        $("#bid_input").css("border", "3px solid red");
    } else {
        $('#myModal2').modal();
        $("#bid_input").css("border", "3px solid transparent");
        var bid_input = $("#bid_input").val();
        $('#bid_conform_text').text(bid_input);
    }
});

$("#bid_button2").click(function(e) {
    e.preventDefault();
    if (!$(".buyer_input2")[0].checkValidity()) {
        $(".buyer_input2").css("border", "3px solid red");
    } else {
        $('#myModal22').modal();
        $(".buyer_input2").css("border", "3px solid transparent");
        var bid_input = $(".buyer_input2").val();
        $('#bid_conform_text2').text(bid_input);
    }
});


$('.update_back').click(function() {
    $('#message_screen').fadeOut();
});

$("#bidding_detail").click(function(e) {
    e.preventDefault();
    console.log("bidding  detail clicked");
    if (!$(".input_form")[0].checkValidity()) {
        $("#input0").css("border", "3px solid red");
    } else {
        $("#input0").css("border", "3px solid transparent");
        var bid = $("#input0").val();
    }
    if (!$(".input_form")[1].checkValidity()) {
        $("#input1").css("border", "3px solid red");
    } else {
        $("#input1").css("border", "3px solid transparent");
        var area = $("#input1").val();
    }
    if (!$(".input_form")[2].checkValidity()) {
        $("#input2").css("border", "3px solid red");
    } else {
        $("#input2").css("border", "3px solid transparent");
        var location = $("#input2").val();
    }
    if (location && area && bid) {
        console.log("Details => ", location, area, bid);
        $('#modal_bid').text(bid);
        $("#modal_area").text(area);
        $("#modal_location").text(location);
    }
    if ($(".input_form")[0].checkValidity() && $(".input_form")[1].checkValidity() && $(".input_form")[2].checkValidity())
        $("#detail_confirm_modal").modal();
});



$("#bidder_bid2").click(function() {
    $("#bidder_biding").fadeIn();
});

$("#submission").click(function() {
    $("#set_submission").fadeIn();
});
$("#submission2").click(function() {
    $("#set_submission").fadeIn();
});
$("#submitted_successfully").click(function() {
    $("#submitted_successfully_fil").fadeIn();
});

$("#unsubmission").click(function() {
    $("#unsubmission_file").fadeIn();
});

$("#bidder_bid3").click(function() {
    $("#bidder_bid3_file").fadeIn();
});
//for button

$(".button").on("click", function() {
    $(".alert").removeClass("in").fadeIn();
    $(".alert").delay(1200).addClass("in").fadeOut(2000);
});
$(".button1").on("click", function() {
    $(".alert1").removeClass("in").fadeIn();
    $(".alert1").delay(1200).addClass("in").fadeOut(2000);
    $("#submitted_successfully_fil").fadeOut();
    $("#set_submission").fadeOut();
    $("#bidder_biding").fadeOut();
    $("#bidder_bid3_file").fadeOut();
});
$(".button2").on("click", function(e) {
    e.preventDefault();
    console.log("button2 got clicked");
    if ($('.updated_bid')[1].checkValidity()) {
        $(".alert2").removeClass("in").fadeIn();
        $(".alert2").delay(1200).addClass("in").fadeOut(2000);
        $('.updated_bid').css("border", "3px solid transparent")
    } else {
        $('.updated_bid').css("border", "3px solid red")
    }
});
