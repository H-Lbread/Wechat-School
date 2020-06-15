// pages/photo/photo.js
Page({
    data:{
      detail: {}
    },
    onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数
      var id = options.id;
      this.fetchData(id);
    },
    fetchData: function(id) {
      var url = '';
      url += '/' + id + '?mdrender=false';
      console.log(url);
      var that = this;
      wx.request({
        url: 'https://www.easy-mock.com/mock/5ee63b57aa1d001289213b81/example/photo',
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function(res) {
          console.log(res.data.data[0]);
  
          that.setData({
            detail: res.data.data[0]
          });
        }
      })
    },
    onReady:function(){
      // 页面渲染完成
    },
    onShow:function(){
      // 页面显示
    },
    onHide:function(){
      // 页面隐藏
    },
    onUnload:function(){
      // 页面关闭
    }
  })
  