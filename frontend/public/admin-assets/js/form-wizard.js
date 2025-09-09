
(function () {
    "use strict";
	$(".next").click(function () {
        let $activeTab = $(".nav-tabs .active").closest("li"); 
        let $nextTab = $activeTab.next("li").find("a");

        if ($nextTab.length) {
            console.log("Next Tab Found:", $nextTab.attr("href")); // Debugging
            $nextTab.tab("show"); // Bootstrap's built-in tab function
        } else {
            console.log("No Next Tab");
        }
    });

    $(".previous").click(function () {
        let $activeTab = $(".nav-tabs .active").closest("li"); 
        let $prevTab = $activeTab.prev("li").find("a");

        if ($prevTab.length) {
            console.log("Previous Tab Found:", $prevTab.attr("href")); // Debugging
            $prevTab.tab("show"); // Bootstrap's built-in tab function
        } else {
            console.log("No Previous Tab");
        }
    });
})();