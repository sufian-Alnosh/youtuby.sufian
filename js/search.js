$(document).ready(function () {
    $("#filter-search-icon").click(function () { 
        $('.filter-culomn').slideToggle("slow");
        
    });

    $("input:checkbox").click(function(){
        var $box = $(this);

        if ($box.is(":checked")) {
        var $group = "input:checkbox[name='" + $box.attr("name")+"']";
        $($group).prop("checked", false);
        $box.prop("checked", true);
        }
    });
});