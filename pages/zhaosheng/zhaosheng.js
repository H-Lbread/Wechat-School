// pages/zhaosheng/zhaosheng.js
Page({
    data:{
          src: "http://ote98cgj7.bkt.clouddn.com/1.mp4",
      banners: [
          {
            id: 1,
            img: 'http://www.whxy.edu.cn/__local/8/E1/CC/3141B72A2D8465F2F076CB54777_087D34C7_25C92.jpg'
          },
          {
            id: 2,
            img: 'http://www.whxy.edu.cn/__local/F/8D/56/B77D5C41989ADB474B0538DA150_25433039_10940.jpg'
          },
          {
            id: 3,
            img: 'http://www.whxy.edu.cn/__local/C/0D/8A/9A86505180FCDF9EF7EEE30FD3B_C0208AED_291CA.jpg'
          },
          {
            id: 4,
            img: 'http://www.whxy.edu.cn/__local/7/67/4E/5BBB818482852FA2CE9F92C798C_0E07F73F_35084.jpg'
          },
          {
            id: 5,
            img: 'http://www.whxy.edu.cn/__local/A/08/20/0E86CCC46201A364539049AB407_08A5B354_445863.jpg'
          }
        ]
    },
    onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数
      var that = this;
      wx.request({
        url: 'https://www.easy-mock.com/mock/5ee63b57aa1d001289213b81/example/zhosheng',
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function(res) {
          console.log(res.data.items);
          that.setData({
            items: res.data.items
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
  