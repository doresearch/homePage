$(function() {
    $('.download-item-phone,.title-btn-3,.alink').on('click', function() {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0") {
            $('.warpper').css('top', $(document).scrollTop());
        }

        console.log('打开下载');
        $('.warpper').show();
        $("body,html").css({ "overflow": "hidden" });
    })

    $('.warpper,.download-close').on('click', function() {
        $('.warpper').hide();
        $("body,html").css({ "overflow": "auto" });
    })

    $('.download-item-pc').on('click', function() {
        window.open('https://rc.fastschool.cn/fs/app/fs_pc_student_2.0.12.exe');
    })

    $('.homePage').on('click', function() {
        $('#homePage').show();
        $('#specailClass').hide();
        $('#contactUs').hide();
        $('.homePageHeader').show();
        $('.footer').show();
    })

    $('.specailClass').on('click', function() {
        //      window.open('https://wx.fastschool.cn/themeLesson.html')
        $('#homePage').hide();
        $('#specailClass').show();
        $('iframe').attr('src', 'https://wx.fastschool.cn/themeLesson.html');
        $('#contactUs').hide();
        $('.homePageHeader').hide();
        $('.footer').hide();
    })

    $('.contactUs').on('click', function() {
        $('#homePage').hide();
        $('#specailClass').hide();
        $('#contactUs').show();
        $('.homePageHeader').hide();
        $('.footer').show();

    })

    $('#specailClass .item').on('click', function() {
        window.open('https://wx.fastschool.cn/themeLesson.html');
    })

    $('#specailClass').height($(window).height() - $('.header').height() + 240)

})
