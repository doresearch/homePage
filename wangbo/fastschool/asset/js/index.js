 (function () {
        var Page = {
           bindEvents: function () {
                var that = this;
                this.event(this.getElements(".dl:not(.disable)"), this.canTouch ? "touchend" : "click", function () {
                    var ref = that.getQueryString("refer"), uri = this.getAttribute("data-href");
                    if (ref) uri += "?refer=" + ref;
                    Page.preDownload(uri);
                });
            },
            event: function (e, t, c) {
                if (e) {
                    var els = e;
                    if (!(els instanceof Array)) els = [e];
                    for (var i = 0, j = els.length; i < j; i++) {
                        els[i].addEventListener(t, c, false);
                    }
                }
            },
            getElements: function (c) {
                var e = document.querySelectorAll(c);
                var l = e.length;
                var r = [];
                if (e.length > 0) {
                    for (var i = 0; i < l; i++) {
                        r.push(e[i]);
                    }
                }
                return r;
            },
            isWeiXin:"micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i),
            canTouch:!!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
            preDownload:function(a) {
                this.isWeiXin ? document.getElementById("wx_dl_tip").style.display = "block" :this.download(a);
            },
            download: function (u) {
                var a = document.createElement('a');
                a.setAttribute('target', '_blank');
                a.setAttribute('href', u);
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            },
            getQueryString: function(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return (r[2]); return null;
            },
            init: function () {
                this.bindEvents();
            }
        }
        Page.init();
    })();