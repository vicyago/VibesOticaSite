$(document).ready(function (e) {
    var scroll_offset = 120;
    $(window).scroll(function () {
        var $this = $(window);
        if ($(".sticky-btn").length) {
            if ($this.scrollTop() > scroll_offset) {
                $(".sticky-btn").addClass("revealed");
            } else {
                $(".sticky-btn").removeClass("revealed");
            }
        }
    });
});

/*
*************************************************

---   nav   --->   js
   
*************************************************
*/

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
};