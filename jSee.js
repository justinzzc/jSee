/**
 * Created by zhouzechen on 17/1/6.
 */
(function ($) {

    function setViewPass(ele, opts) {

        var mopts = $.extend({
            offsetEnter: 0,
            offsetLeave: 0,
            enter: $.noop,
            leave: $.noop
        }, opts);

        var directionDown = true,
            last_st;


        function checkPass() {
            var st = $(window).scrollTop();
            if (typeof last_st == 'number') {
                if (st > last_st) {
                    directionDown = true;
                } else if (st < last_st) {
                    directionDown = false;
                }
            }

            last_st = st;

            var ot = $(ele).offset().top;
            var h = $(ele).height();
            var wh = $(window).height();

            //顶部在视窗底部之上同时,同时,底部在视窗顶部之下
            if (ot - st <= wh + mopts.offsetEnter && ot - st + h > (0 + mopts.offsetEnter)) {
                mopts.enter.bind(ele)();
            } else {
                if (directionDown) {
                    if (ot - st + h < mopts.offsetLeave) {
                        mopts.leave.bind(ele)();
                    }
                } else {
                    if (ot - st > wh + mopts.offsetLeave) {
                        mopts.leave.bind(ele)();
                    }
                }
            }
        }

        $(window).bind('scroll', checkPass);

        checkPass();
    }

    /**
     *
     * @param opts
     *  选项 object{ offset }
     *  offsetEnter[number]:纵向偏移量-进入
     *  offsetLeave[number]:纵向偏移量-离开
     */
    $.fn.jSee = function (opts) {
        $(this).each(function (i, item) {
            setViewPass(item, opts)
        });
    };


})($);