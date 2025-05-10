
$("button").on("click", function(){

    $(".bmi-result").css("background-color", "#e4efe7");

    var weight = $("#weight").val();
    var height = $("#height").val();

    height = height / 100;

    var bmi = weight / (height * height);

    if ( bmi < 18.5 ) {
        if ( bmi < 16) {
            $(".result-category").text("Severe Thinness");
            $(".result-number").text(bmi.toFixed(2));
            $(".bmi-result").css("background-color", "#dc381f");
        }
        else if ( bmi >= 16 && bmi < 17 ) {
            $(".result-category").text("Moderate Thinness");
            $(".result-number").text(bmi.toFixed(2));
            $(".bmi-result").css("background-color", "#a1aeb1");
        }
        else if ( bmi >= 17 && bmi < 18.5 ) {
            $(".result-category").text("Mild Thinness");
            $(".result-number").text(bmi.toFixed(2));
            $(".bmi-result").css("background-color", "#fff44f");
        }
        $(".card-underweight").fadeOut().fadeIn().fadeOut().fadeIn();
    }
    else if ( bmi >= 18.5 && bmi < 25 ) {
        $(".result-category").text("Normal");
        $(".result-number").text(bmi.toFixed(2));
        $(".bmi-result").css("background-color", "#98ff98");
        $(".card-normal").fadeOut().fadeIn().fadeOut().fadeIn();
    }
    else if ( bmi >= 25 && bmi <30 ) {
        $(".result-category").text("Overweight");
        $(".result-number").text(bmi.toFixed(2));
        $(".bmi-result").css("background-color", "#676765");
        $(".card-overweight").fadeOut().fadeIn().fadeOut().fadeIn();
    }
    else if ( bmi >= 30 ) {
        if ( bmi >= 30 && bmi < 35 ) {
            $(".result-category").text("Obese Class I");
            $(".result-number").text(bmi.toFixed(2));
            $(".bmi-result").css("background-color", "#dc381f");
        }
        else if ( bmi >= 35 && bmi < 40 ) {
            $(".result-category").text("Obese Class II");
            $(".result-number").text(bmi.toFixed(2));
            $(".bmi-result").css("background-color", "#dc381f");
        }
        else if ( bmi >= 40 ) {
            $(".result-category").text("Obese Class III");
            $(".result-number").text(bmi.toFixed(2));
            $(".bmi-result").css("background-color", "#dc381f");
        }
        $(".card-obesity").fadeOut().fadeIn().fadeOut().fadeIn();
    }

    
});

