$(document).ready(function() {
    $(window).scroll(function() {
        this.scrollY > 20 ? $(".navbar1").addClass("sticky") : $(".navbar1").removeClass("sticky");
    });


    $("#bt1").click(function() {
        $("#mean").val("Word: Abysmal\nMeaning: Extremely bad.\nUsage: Madhav's quality of work is abysmal. \nSource: The Times Of India (22/06/2021, Chennai Edition).");
    });

    $("#bt2").click(function() {
        $("#mean").val("Word: Hermit\nMeaning: A person living in solitude as a religious discipline.\nUsage: The cave was inhabited by a hermit.\nSource: Deccan Chronicle (22/06/2021, Chennai Edition).");
    });

    $("#bt3").click(function() {
        $("#mean").val("Word: Prune\nMeaning:To reduce the extent of something by removing superfluous or unwanted parts.\nUsage: The workforce was pruned.\nSource: Times of India(21/06/2021,Chennai Edition).");
    });

    $("#bt4").click(function() {
        $("#mean").val("Word: Anonymizers\nMeaning: People who offer their services to anonymise others over internet\nUsage: We tried tracking the mail but hit a anonymizer on the other end.\nSource: The hacker news(June 17, 2021).");
    });


    $("#bt5").click(function() {
        $("#mean").val("Word: Arcane\nMeaning: Requiring secret or mysterious knowledge\nUsage: The teacher had an arcane way of teaching mathematics.");
    });

    $("#bt6").click(function() {
        $("#mean").val("Word: Laconic\nMeaning: Brief and to the point\nUsage: She had a laconic wit.");
    });

    $("#bt7").click(function() {
        $("#mean").val("Word: Respite\nMeaning: A respite is a break from something that's difficult or unpleasant.\nUsage: If you're cramming for exams, take an occasional walk to give yourself a respite from the intensity.");
    });

    $("#bt8").click(function() {
        $("#mean").val("Word: Encroach\nMeaning: To intrude on person's territory, personal life, rights etc.\nUsage: The suburbs encroach further into the rural area ever year.");
    });

    $("#bt9").click(function() {
        $("#mean").val("Word: Quire\nMeaning: A set of 24 or sometimes 25 sheets of paper of the same size and stock; one twentieth of a ream.\nSentence: It was common Anglo-Saxon practice to form a quire from four sheets of parchment - folded to make eight leaves.");
    });

    $("#bt0").click(function() {
        $("#mean").val("Word: Hellacious\nMeaning: very great, bad, or overwhelming.\nUsage: There was this hellacious hailstorm.");
    });
    var s = 1;
    var sr = "";

    $(".rbtn").click(function() {
        if (s < 13) {
            s += 1;
            sr = s + ".jpeg";
            $(".slide").css("background-image", "url(" + sr + ")");
        }
        if (s == 13) {
            $(".rbtn").css("opacity", "0.4");
        } else {
            $(".rbtn").css("opacity", "1");
        }
        if (s > 1) {
            $(".lbtn").css("opacity", "1");
        }

    });

    $(".lbtn").click(function() {
        if (s > 1) {
            s -= 1;
            sr = s + ".jpeg";
            $(".slide").css("background-image", "url(" + sr + ")");
        }
        if (s == 1) {
            $(".lbtn").css("opacity", "0.4");
        } else {
            $(".lbtn").css("opacity", "1");
        }
        if (s < 13) {
            $(".rbtn").css("opacity", "1");
        }

    });




    // RESET function

    $("#reset").click(function() {
        $(".cell").val("");
    });




    // REVEAL function
    $("#rev").click(function() {
        var ans = "BOSSSARSMILLONCALKICKUGLYLAGCUREHAILSATRHVIEOFATERIND";
        let inp = confirm("Reveal the answers?");
        var i = 0;
        if (inp) {
            for (let x = 1; x <= 9; x++) {
                for (let y = 1; y <= 9; y++) {
                    if (!$("#c" + x + y).hasClass("dis")) {
                        $("#c" + x + y).val(ans[i++]);
                    }
                }
            }
        }
    });

    // CHECK function
    $("#ch").click(function() {
        var ans = "BOSSSARSMILLONCALKICKUGLYLAGCUREHAILSATRHVIEOFATERIND";
        var dup = "";
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                if (!$("#c" + x + y).hasClass("dis")) {
                    dup += $("#c" + x + y).val();
                }
            }
        }
        if (dup == ans) {
            alert("Bravo! You solved the crossword puzzle.");
        } else {
            alert("Oops! Try again.");
        }
    });


});
