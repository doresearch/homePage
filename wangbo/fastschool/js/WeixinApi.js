/**!
 * 微信内置浏览器的Javascript API，功能包括：
 *
 * 10、判断当前网页是否在微信内置浏览器中打开
 *
 * @author zhaoxianlie(http://www.baidufe.com)
 */
(function (window) {

    "use strict";

    /**
     * 定义WeixinApi
     */
    var WeixinApi = {
        version:3.3
    };

    // 将WeixinApi暴露到window下：全局可使用，对旧版本向下兼容
    window.WeixinApi = WeixinApi;

    /////////////////////////// CommonJS /////////////////////////////////
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        if (define.amd) {
            // AMD 规范，for：requirejs
            define(function () {
                return WeixinApi;
            });
        } else if (define.cmd) {
            // CMD 规范，for：seajs
            define(function (require, exports, module) {
                module.exports = WeixinApi;
            });
        }
    }

    /**
     * 当页面加载完毕后执行，使用方法：
     * WeixinApi.ready(function(Api){
     *     // 从这里只用Api即是WeixinApi
     * });
     * @param readyCallback
     */
    WeixinApi.ready = function (readyCallback) {
        if (readyCallback && typeof readyCallback == 'function') {
            var Api = this;
            var wxReadyFunc = function () {
                readyCallback(Api);
            };
            if (typeof window.WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', wxReadyFunc, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', wxReadyFunc);
                    document.attachEvent('onWeixinJSBridgeReady', wxReadyFunc);
                }
            } else {
                wxReadyFunc();
            }
        }
    };
    /**
     * 检测应用程序是否已安装
     *         by mingcheng 2014-10-17
     *
     * @param       {Object}    data               应用程序的信息
     * @p-config    {String}    packageUrl      应用注册的自定义前缀，如 xxx:// 就取 xxx
     * @p-config    {String}    packageName        应用的包名
     *
     * @param       {Object}    callbacks       相关回调方法
     * @p-config    {Function}  fail(resp)      失败
     * @p-config    {Function}  success(resp)   成功，如果有对应的版本信息，则写入到 resp.version 中
     * @p-config    {Function}  all(resp)       无论成功失败都会执行的回调
     */
    WeixinApi.getInstallState = function (data, callbacks) {
        callbacks = callbacks || {};

        WeixinJSBridge.invoke("getInstallState", {
            "packageUrl":data.packageUrl || "",
            "packageName":data.packageName || ""
        }, function (resp) {
            var msg = resp.err_msg, match = msg.match(/state:yes_?(.*)$/);
            if (match) {
                resp.version = match[1] || "";
                callbacks.success && callbacks.success(resp);
            } else {
                callbacks.fail && callbacks.fail(resp);
            }

            callbacks.all && callbacks.all(resp);
        });
    };
    /**
     * 判断当前网页是否在微信内置浏览器中打开
     */
    WeixinApi.openInWeixin = function () {
        return /MicroMessenger/i.test(navigator.userAgent);
    };

})(window);
