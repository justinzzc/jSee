# jSee

> 一款jQuery插件，监测dom元素在滚动的时候是进入视窗范围和离开视窗范围

 
 
## 安装

## 示例代码
~~~ javascript
  $('.block').jSee({
            offsetEnter: 0,
            offsetLeave: 0,
            enter: function () {
                $(this).addClass('active');
            },
            leave: function () {
                $(this).removeClass('active');
            }
        });
~~~


## 参数
~~~ javascript
 /**
     *
     * @param opts
     *  选项 object{  }
     *  offsetEnter[number]:纵向偏移量-进入
     *  offsetLeave[number]:纵向偏移量-离开
     *  enter[function]:进入回调
     *  leave[function]:离开回调
     */
    $.fn.jSee = function (opts) {
    //...
    }
~~~


 
 
