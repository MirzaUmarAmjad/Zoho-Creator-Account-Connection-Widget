var data = [
    {
        state: "lapse",
        title: "DOQs",
        dot_date: "Connection in progress. Start date: November 22,2021",
        dot_state_type: "close",
        details: [
            {
                state: "off",
                id: "12345678",
                date: "Expired November 12,2021",
                resolve: true
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            
        ]
    },
    {
        state: "expiring",
        title: "DOQs",
        dot_date: "Connection in progress. Start date: November 22,2021",
        dot_state_type: "close",
        details: [
            {
                state: "off",
                id: "12345678",
                date: "Expired November 12,2021",
                resolve: true
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            
        ]
    },
    {
        state: "actived",
        title: "DOQs",
        dot_date: "Connection in progress. Start date: November 22,2021",
        dot_state_type: "check",
        details: [
            {
                state: "off",
                id: "12345678",
                date: "Expired November 12,2021",
                resolve: true
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            
        ]
    },
    {
        state: "not-actived",
        title: "DOQs",
        dot_date: "Connection in progress. Start date: November 22,2021",
        dot_state_type: "check",
        details: [
            {
                state: "off",
                id: "12345678",
                date: "Expired November 12,2021",
                resolve: true
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            
        ]
    },
    {
        state: "progressing",
        title: "DOQs",
        dot_date: "Connection in progress. Start date: November 22,2021",
        dot_state_type: "arrow-rotate-right",
        details: [
            {
                state: "off",
                id: "12345678",
                date: "Expired November 12,2021",
                resolve: true
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            {
                state: "on",
                id: "12345678",
                date: "Expired November 12,2021",
            },
            
        ]
    }
]
$(document).ready(function(){
    var parent = $("#dot-container");
    $(".dot-block").remove();
    for (var i = 0; i < data.length; i++ ){
        var item = data[i];
        addDotBlock(item["state"], item["title"], item["dot_date"], item["dot_state_type"], item["details"]);
    }

    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        barsize: '8',
        barcolor: '#00ee00',
    });
    $('.pie_progress').asPieProgress('start');
});

function displayChannelResult(channel_result ){
    /*for (var i = 0; i < channel_result;i++ ){
        var item = channel_result[i];
        var state = "";
        if(item["Status"] == "Activated") {
            state = "actived";
        }else if(item["Last_Updated"] != "" ){
            let last_up = item["Last_Updated"];
        }
    }*/
}

function addDotBlock(state, title, dot_date, dot_state_type, details ){
    var parent = $("#dot-container");
    var dot_block = $("<div>").addClass("dot-block mt-1r " + state).appendTo(parent );
    var dot_item  =$("<div>").addClass("dot-item").appendTo(dot_block );
    var arrow_item = $("<div>")
            .on("click", function(e){
                e.preventDefault();
                if($(this).parent().parent().hasClass("active")){
                    $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
                    $(this).parent().parent().removeClass("active");
                    $(this).parent().parent().find(".dot-detail-block").hide();
                }else{
                    $(this).find("i").addClass("fa-angle-down").removeClass("fa-angle-right");
                    $(this).parent().parent().addClass("active");
                    $(this).parent().parent().find(".dot-detail-block").show();
                }
            })
            .addClass("arrow-item").appendTo(dot_item);
    $("<i>").addClass("fa fa-angle-right").appendTo(arrow_item );
    var dot_desc = $("<div>").addClass("dot-desc").appendTo(dot_item);
    $("<div>").addClass("dot-title").html(title ).appendTo(dot_desc);
    $("<div>").addClass("dot-date").html(dot_date).appendTo(dot_desc);
    var dot_state_item  = $("<div>").addClass("dot-state-item").appendTo(dot_item );
    $("<div>").html("<i class='fa fa-" + dot_state_type + "'></i>").appendTo(dot_state_item);

    var dot_detail_block = $("<div>").addClass("dot-detail-block").hide().appendTo(dot_block );
    for (var i = 0; i < details.length; i++ ){
        var detail_item = details[i];
        var detail_state = detail_item["state"];
        var detail_id = detail_item["id"];
        var detail_date = detail_item["date"];
        var detail_resolve = detail_item["resolve"];

        var dot_detail_item = $("<div>").addClass("dot-detail-item").appendTo(dot_detail_block);
        var detail_state_div = $("<div>").addClass("detail-state " + detail_state ).appendTo(dot_detail_item);
        $("<div>").addClass("state-id").html(detail_id ).appendTo(detail_state_div);
        $("<div>").addClass("state-date").html(detail_date ).appendTo(detail_state_div);
        if (detail_resolve == true ){
            $("<div>").addClass("state-action")
                    .html("RESOLVE <i class='fa fa-angles-right'></i>")
                    .appendTo(detail_state_div)
        }
    }
}

function addDropDown(dotInfo ){
    var parent = $("#dot_dropdown");
    //<li><input type="checkbox" class="dot check" data-val="123456789"/>123456789</li>
    for (var i = 0;i < dotInfo.length; i++ ){
        var item = dotInfo[i];
        var name = item["Name"];
        var id = item["ID"];
        var li = $("<li>").appendTo(parent );
        $("<input>").attr("type", "checkbox").addClass("dot check")
                .attr("data-val", id ).appendTo(li );
        $("<span>").html(name ).appendTo(li);
        
    }
}