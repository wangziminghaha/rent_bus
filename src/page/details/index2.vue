<template>
  <div class="top">
      <mt-header title="订单详情" class="hand">
        <router-link to="/erji" slot="left">
      <mt-button class="button"> <img class="left" src="./img/fanhui@2x.png" alt=""></mt-button>
        </router-link>
      <mt-button class="button" slot="right"><img class="right" src="./img/gengduo@2x.png" alt=""  id="show" @click="show1=!show1" ></mt-button>
      </mt-header>
    <div class="box">
        <mt-header  class="hand2">
  <router-link to="/" slot="left">
    <mt-button ><span  class="hao">订单号：15623758043654</span></mt-button>
  </router-link>
  <mt-button  slot="right" class="gong">已取消</mt-button>
</mt-header>
<div class="car">
    <img src="./img/848@2x.png" alt="" >
    <ul>
        <li>雪佛兰科鲁兹</li>
        <li>三箱5座|1.5T自动</li>
        <!-- <li><router-link to="/">芝麻信用.免押金</router-link></li> -->
    </ul>
</div>
    </div>
    <div class="time">
        <span>07月05日<br> <span>周五10：00</span></span>
        <span id="dong">2天
            <br>
            <img src="./img/jiantou@2x.png" alt="">
        </span>
        <span>07月07日<br> <span>周日10：00</span></span>
    </div>
    <div class="black">
        <p><img src="./img/anniu1-2@2x.png" alt="">&nbsp;郑州<br>
        <span>郑州动物园自助点</span></p>
        <p>|    <span>门店详情</span></p>
    </div>
    <div class="black  yellow">
        <p><img src="./img/anniu2-2@2x.png" alt="">&nbsp;郑州<br>
        <span>郑州动物园自助点</span></p>
        <p>|    <span>     门店详情</span></p>
    </div>
    <div class="lie">
        <ul>
            <li > <span>车辆租赁及服务费</span> <span>150x2</span> <span>300元</span> </li>
            <li > <span> 基础服务费</span> <span>50x2</span> <span>100元</span></li>
            <li > <span>其他费用</span> <span></span></li>
            <li class="li1"> <span>.车辆整备费</span> <span></span> <span>20元</span> </li>
            <li class="li1" id="li1"> <span> .尊享服务费</span> <span>50x2</span> <span>100元</span></li>
        </ul>
        <p id="p"><span>租金合计</span><span>418元</span></p>
    </div>
    <div  id="hide" v-show="show1" @click="show1=!show1">
         <div class="clear">
        <router-link to=""><p id="zi">修改规则</p></router-link>
        <div class="small">
             <span></span>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
        showEagleMap: true,
        
        components: {
        },
        data () {  /*定义data property的地方*/
           return {
                show:false,
                show1:false
            }
        },  /*end of data()*/
        methods: {
            toolEventSlot()
            {
                this.showEagleMap = !this.showEagleMap;
            }
        },
        mounted:function(){
            
        }
    };

</script>


<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .hand{
        background-color:white;
        color:black;
        height: .33rem;
        font-size:.15rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        border-bottom:0.01rem solid #cccccc;
        
    }
    .right{
        width: 0.26rem;
        /* padding-top: .39rem; */
        height: 0.06rem;
    }
    .left{
        width: 0.13rem;
        height: 0.22rem;
        /* padding-top: .31rem; */
    }
    button{
        margin-left: .15rem;
        margin-right: .15rem;
    }
    .hand2{
        background-color:white;
        color:black;
        font-size:.15rem;
        border-bottom:0.01rem solid #cccccc;
    }
    .hao{
        color:#888888;
        font-size: .12rem;
        /* padding-top: .03rem;
        padding-bottom: .03rem; */
    }
    .gong{
        font-size: .13rem;
        color:#FFCC00;
    }
    .car{
        font-size:0;
        background: white;
        border-bottom: .08rem solid #f6f6f6;
        
    }
    .car>img{
        display: inline-block;
        width: 0.9rem;
        /* height: 0.53rem; */
        /* padding-top: .04rem; */
        vertical-align: top;
        /* padding-top: .1rem; */
        margin-left: .18rem;
    }
    .car>ul{
        display: inline-block;
        font-size:.15rem;
        list-style: none;
        margin-left: .32rem;
        padding-bottom: .06rem;
        }
       
        .car>ul>li:nth-child(1){
            font-size:.14rem;
            padding-top: 0.1rem;

        }
        .car>ul>li:nth-child(2){
            font-size:.11rem;
            color: #cccccc;
            padding-top: 0.2rem;
        }
        .car>ul>li:nth-child(3){
            width: 0.87rem;
            height: 0.23rem;
            border:0.01rem solid #00FFDD;
            
            font-size:.1rem;
            margin-top: 0.1rem;
            text-align: center;
            line-height: .23rem;
        }
        .car>ul>li:nth-child(3)>a{
            text-decoration: none;
            color:#00FFDD;
        }
        .time{
            font-size:0;
            background: white;
            border-bottom: 1px solid #DFDFDF;
        }
        .time>span{
            font-size:.12rem;
            display: inline-block;
            width: 0.59rem;
            height: 0.34rem;
        }
        .time>span:nth-child(1){
            margin-left: 0.15rem;margin-top: .1rem;
            padding-bottom: .1rem;
        }
        .time>span:nth-child(2){
            padding-left: .6rem;
            width: 1.68rem;
            color:#FFCC00;
            text-align: center;
        }
        .time>span>img{
            width: 0.88rem;
        }
        .time>span:nth-child(3){
            float: right;
            margin-right: 0.08rem;
            margin-top: .1rem;
        }
        .time>span>span{
            font-size:.08rem;
            color: #cccccc;
        }
        .black{
            font-size:0;
            background: white;
        }
        .yellow{
            border-bottom: 1px solid #DFDFDF;
        }
        .black>p{
            font-size:.12rem;
            display: inline-block;
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
        }
        .black>p:nth-child(2){
            float: right;
             margin-right: 0.15rem;margin-top: .1rem;
            font-size:.12rem;
            padding-bottom: .1rem;
        }
        .black>p>img{
            width: 0.12rem;
            height: 0.12rem;
            margin-left: 0.15rem;
        }
        .black>p>span{
            font-size:.1rem;    
        }
        .black>p:nth-child(1)>span{
            margin-left: 0.33rem;
            color:#888888;
        }
        #skyblue{
            color:#00FFDD;
            margin-left: 0;
        }
        .lie{
            font-size:0;
            background: white;
            
        }
        .lie>ul{
            list-style: none;
            border-bottom:.01rem solid #cccccc;
        }
        .lie>ul>li{
            font-size:.12rem;
            color: black;
            margin-left: .15rem;
            padding-top: 0.1rem;
        }
        .lie>ul>li>span:nth-child(3){
            float: right;
            margin-right: .15rem;
        }
        .lie>ul>.li1{
            color:#666666;
            font-size:.11rem;
        }
        .lie>ul>li:nth-child(1)>span:nth-child(2){
            margin-left: 1.3rem;
        }
        .lie>ul>li:nth-child(2)>span:nth-child(2){
            margin-left: 1.68rem;
        }
        .lie>ul>li:nth-child(5)>span:nth-child(2){
            margin-left: 1.7rem;
        }
        #li1{
            padding-bottom: 0.1rem;
        }
        .lie>p{
            font-size:.12rem;
            padding-left: .15rem;
        }
        .lie>p>span{
            float: left;
            padding-top: 0.08rem;
            padding-bottom: .08rem;
        }
        .lie>p>span:last-child{
            float: right;
            margin-right: .15rem;
        }
        #p{
            height: 0.3rem;
            border-bottom:.08rem solid #fff;
        }
        .clear{
            width: 1.16rem;
            height: 0.37rem;
            float:right;
            position: absolute;
            font-size: 0;
            top: .34rem;
            right:0.01rem;
            color:black;
            text-align: center;
            line-height: .37rem;
            /* background: #FFFFFF; */
            background: #FFFFFF;
            border-radius:0.03rem; 
            z-index:100;
        }
        .clear>a{
            font-size: .1rem;
            text-decoration: none;
            color:black;

        }
        #hide #zi{
            color:black;
        }
        .small{
            width:0;
            height:0;
            border-width:0 10px 10px;
            border-style:solid;
            border-color:transparent transparent #FFFFFF;
            position: absolute;
            top: -.1rem;
            right: .2rem;
            
        }
        #hide{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(102, 102, 102,.3);
            /* display: none; */
        }
</style>