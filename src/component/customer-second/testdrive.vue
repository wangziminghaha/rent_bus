<template>
  <div class="testdrive">
      <ul>
        <li><span>产品介绍</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>基础条件</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>产品规则</span><img src="./img/fanhui-2@2x.png" alt=""></li>
      </ul>
      <div class="domestic-foot">
          <!-- <div class="domestic-foot-left">客服热线</div>
          <div class="domestic-foot-right">在线客服</div> -->
          <router-link to="" class="domestic-foot-left">客服热线</router-link>
          <router-link to="" class="domestic-foot-right">在线客服</router-link>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
    .testdrive{
        margin-top: 0;  
        background: #f6f6f6;
        padding-top: .77rem;
        ul{
            list-style: none;
            margin: 0;
            margin-bottom: .1rem;
            background: #fff;
            li{
                font-size: .13rem;
                color: #888;
                height: .45rem;
                line-height: .45rem;
                border-bottom: 1px solid #ccc;
                overflow: hidden;
                text-indent: .15rem;
                span{
                  color: #444;
                  float: left;
                  text-indent: .15rem;  
                }
                img{
                    float: right;
                    width: .08rem;
                    height: .13rem;
                    margin-top: .16rem;
                    margin-right: .15rem;
                }
            }
            li:last-child{
                border-bottom: none;
            }
        }
        .domestic-foot{
            height: .55rem;
            background: #fff;
            display: flex;
            position: absolute;
            bottom: 0;
            flex-direction: row;
            // margin-top: 3.77rem;
            .domestic-foot-left{
                text-decoration: none;
                width: 1.2rem;
                height: .4rem;
                font-size: .16rem;
                margin-left: .15rem;
                margin-top: .07rem;
                text-align: center;
                line-height: .4rem;
                border: 1px solid #cfcfcf;
                border-radius: .03rem;
                color: #666;
            }
            .domestic-foot-right{
                text-decoration: none;
                font-size: .16rem;
                width: 2.12rem;
                height: .4rem;
                margin-right: .15rem;
                margin-top: .07rem;
                text-align: center;
                line-height: .4rem;
                color: #fff;
                background: #ffcc00;
                border-radius: .03rem;
                margin-left: .1rem;
            }
        }  
    }
</style>
