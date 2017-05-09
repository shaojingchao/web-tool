$(function() {

    // 生成二维码

    $("#qr_preview").on("click", function() {

        var qrtext = $("#qr_text").val();

        if (qrtext.length > 0) {
            var arr = qrtext.replace(/(\s+)/gm, "\n").split("\n");
            var newarr = arr.filter(function(n) {
                return n.length > 0
            });


            var $size = parseInt($("#qr_size").val(), 10);


            $("#J_previewBox").html(template("qr_list_tpl",newarr));

            var $li = $("#J_previewBox").find("li");

            $li.each(function() {
                var item = $(this).text();
                $(this).wrapInner("<p></p>");
                $(this).qrcode({
                    size: $size,
                    background:"#fff",
                    text: item
                });
            });

        }else{
            alert("请输入内容");
        }


    })



    // // 自动下载图片

    $("#qr_save").on("click", function() {
        if($("canvas").length){
            $("canvas").each(function(index) {
            var $src = $(this).get(0).toDataURL('image/jpeg');
            var aaa = document.createElement("a");
            aaa.download = '2017mijuan_ewm_B' + index;
            aaa.href = $src;
            aaa.click();
        });
        }else{
            alert("请先生成二维码")
        }
        
    })

});