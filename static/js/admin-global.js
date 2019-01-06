/**
 * 对layui进行全局配置
 */
layui.config({
    base: '/static/js/'
});

layui.use('form', function() {
    var $ = layui.jquery,
        form = layui.form();
});

/**
 * 初始化整个系统骨架
 */
layui.use(['cms'], function() {
    var cms = layui.cms('left-nav', 'top-tab');
    cms.addNav([
        { id: 1, pid: 0, node: '<span style=" font-size: 16px"><i class="layui-icon">&#xe620;</i> 系统管理</span>', url: '#' },
        { id: 7, pid: 1, node: '&nbsp;&nbsp;&nbsp;系统设置', url: '/admin/config.html' },
        { id: 2, pid: 0, node: '<span style=" font-size: 16px"><i class="layui-icon">&#xe63c;</i> 内容管理</span>', url: '#' },
        { id: 3, pid: 2, node: '&nbsp;&nbsp;&nbsp;分类管理', url: '/admin/category.html' },
        { id: 5, pid: 2, node: '&nbsp;&nbsp;&nbsp;博文列表', url: '/admin/index.html' },
        { id: 6, pid: 2, node: '&nbsp;&nbsp;&nbsp;博文添加', url: '/admin/article.html' },
    ], 0, 'id', 'pid', 'node', 'url');
    cms.bind(60 + 41 + 20 + 44); //头部高度 + 顶部切换卡标题高度 + 顶部切换卡内容padding + 底部高度
    cms.clickLI(5);

});

function addTab(title, src, id,closeId){
    if(closeId){
//					debugger;
        closeTab(closeId);
    }
    layui.use(['cms'], function() {
        var cms = layui.cms('left-nav', 'top-tab');
        cms.addTab(title,src,id);
    });
}

function closeTab(id,refreshId){
    layui.use(['cms'], function() {
        var cms = layui.cms('left-nav', 'top-tab');
        cms.closeTab(id,refreshId);
    });
}
layui.use(['element', 'layer', 'util', 'form'], function () {
    var $ = layui.jquery;

    //blog-body和blog-footer点击事件，用来关闭百度分享和类别导航
    $('.layui-body,.layui-footer').click(function () {
        panelOut();
    });
    //管理面板导航开关点击事件
    $('.panel-toggle').click(function (e) {
        e.stopPropagation();    //阻止事件冒泡
        panelIn();
    });
    //管理面板导航点击事件，用来关闭类别导航
    $('.admin-panel').click(function () {
        panelOut();
    });
    //具体管理面板点击事件
    $('.admin-panel > a').click(function (e) {
        e.stopPropagation(); //阻止事件冒泡
    });


    //显示管理面板导航
    function panelIn() {
        $('.panel-toggle').addClass('layui-hide');
        $('.admin-panel').unbind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');

        $('.admin-panel').removeClass('panelOut');
        $('.admin-panel').addClass('panelIn');
        $('.admin-panel').addClass('layui-show');
    }
    //隐藏管理面板导航
    function panelOut() {
        $('.admin-panel').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.admin-panel').removeClass('layui-show');
            $('.panel-toggle').removeClass('layui-hide');
        });

        $('.admin-panel').removeClass('panelIn');
        $('.admin-panel').addClass('panelOut');
    }

});
