<template>
  <div class="affirm_order">
    <!-- 头部 -->
    <mt-header title="确认订单" class="header">
      <router-link to slot="left">
        <img @click="fn" src="./img/fanhui@2x.png" />
      </router-link>
    </mt-header>
    <!-- 车型 -->
    <div class="vehicle_model">
      <img
        slot="icon"
        :src="$store.state.alldata.carinfo.img"
        width="24"
        height="24"
        name="carPicture"
      />
      <div class="car_name">
        <span class="car_names" name="carBrand">{{$store.state.alldata.carinfo.p1}}</span>
        <br />
        <span class="car_cfig" name="carLease">{{$store.state.alldata.carinfo.p2}}</span>
      </div>
    </div>
    <!-- 车地图 -->
    <ul class="car_map">
      <li @click="car_maps=false">
        <a href="javaScript:;">
          <div class="img">
            <img src="./img/yuandian1@2x.png" v-if="car_maps" />
            <img src="./img/yuandian2@2x.png" v-else />
          </div>

          <div class="car_site">
            <p>{{$store.state.homedata.to}}</p>
            <!-- <span>07月05日（周五）10:00</span> -->
            <span>{{$store.state.alldata.starTime.tostarM}}月{{$store.state.alldata.starTime.tostarD}}日（{{$store.state.alldata.starTime.tostarW}}）{{$store.state.alldata.starTime.tostarH}}:00</span>
          </div>
          <p>到店取车</p>
        </a>
      </li>
      <li @click="car_maps=true">
        <a href="javaScript:;">
          <div class="img">
            <img src="./img/yuandian1@2x.png" v-if="!car_maps" />
            <img src="./img/yuandian2@2x.png" v-else />
          </div>
          <div class="car_site">
            <p>{{$store.state.homedata.from}}</p>
            <span>{{$store.state.alldata.endTime.toendM}}月{{$store.state.alldata.endTime.toendD}}日（{{$store.state.alldata.endTime.toendW}}）{{$store.state.alldata.endTime.toendH}}:00</span>
          </div>
          <p>到店还车</p>
        </a>
      </li>
    </ul>
    <!-- 基本费用 -->
    <div class="capital_cost">
      <p class="cap_tit">基本费用</p>
      <ul class="cap_detal">
        <li>
          <p>车辆租赁及服务费</p>
          <span class="cap_num">{{price}}x{{days}}</span>
          <span class="cap_price" name="insurance">{{data.insurance}}元</span>
        </li>
        <li>
          <p>
            基础服务费
            <img src="./img/wenhao@2x.png" class="question" @click="basic_service" />
          </p>
          <Basicservice v-show="$store.state.basic_service"></Basicservice>
          <span class="cap_num">{{prices.royalty}}x{{days}}</span>
          <span class="cap_price" name="royalty">{{data.royalty}}元</span>
        </li>
        <li>
          <p>车辆整备费</p>
          <span class="cap_num"></span>
          <span class="cap_price" name="charge">{{data.charge}}元</span>
        </li>
        <li>
          <p class="choss">选择服务</p>
          <span class="butt">
            <AffirmBut></AffirmBut>
          </span>
        </li>
        <li :class="{img_displays:$store.state.affirm_order}">
          <p>
            尊享服务
            <img src="./img/wenhao@2x.png" class="question" @click="enjoyable_service" />
          </p>
          <Enjoyable v-show="$store.state.enjoyable_service"></Enjoyable>
          <span class="cap_num">{{prices.oilCost}}x{{days}}</span>
          <span class="cap_price" name="oilCost">{{data.oilCost}}元</span>
        </li>
      </ul>
      <div class="rent">
        <p>租金合计</p>
        <span name="money">{{sum}}元</span>
      </div>
    </div>
    <!-- 违约金 -->
    <div class="penal_sum">
      <div>
        <p>车辆+违章押金</p>
        <img src="./img/wenhao@2x.png" />
        <span>芝麻信用700分且通过综合评估</span>
      </div>
      <ul class="penal_payment">
        <li v-for="(item,i) in arr" :key="i" @click="affchos(index)">
          <a href="javaScript:;" :class="{a:true,active:i==index}" @click="tag(i)">
            <img src="./img/duihao@2x.png" v-show="i==index?true:false" />
            <img src="./img/option_off@2x.png" v-show="i==index?false:true" />
            <span>{{item}}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 取车须知 -->
    <div class="car_information">
      <p>取车须知</p>
      <div>
        <img src="./img/fanhui-2@2x.png" />
      </div>
    </div>
    <!-- 协议 -->
    <div class="protocol">
      <div>
        <img src="./img/querenxuanzhong@2x.png" />
      </div>
      <p>
        已仔细阅读并同意
        <span>《订单说明及退订规则》</span>
      </p>
    </div>
    <!-- 确认订单 -->
    <div class="confirm_order">
      <router-link to>
        <div class="suer_con">
          <router-link to="/success">
            <p>确认订单</p>
          </router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
import AffirmBut from "./affirm_order_butt";
import Basicservice from "./basic_service";
import Enjoyable from "./enjoyable_service";
export default {
  data() {
    return {
      //车地图
      car_maps: false,
      index: 1,
      arr: ["去绑卡免押金", "芝麻信用免押金", "支付押金"],
      //基本费用天数
      days: this.$store.state.alldata.dayX,
      //基本费用单价
      prices: { royalty: 50, oilCost: 50 },
      //基本费用最右一栏
      data: {
        insurance: 0,
        royalty: 0,
        charge: 20,
        oilCost: 0,
        money: 0
      }
    };
  },
  methods: {
    affchos(ind) {
      let affchoscen = this.arr[ind];

      this.$store.commit("affchos", affchoscen);
    },
    fn() {
      this.$router.go(-1);
    },
    //选择服务
    tag(num) {
      this.index = num;
    },
    //基础服务
    basic_service() {
      this.$store.commit("basic_service");
    },
    //尊享服务
    enjoyable_service() {
      this.$store.commit("enjoyable_service");
    }
  },
  components: {
    AffirmBut,
    Basicservice,
    Enjoyable
  },
  beforeDestroy(){
    this.$store.commit('sum',this.sum);
  },

  computed: {
    sum() {
      let add = this.$store.state.affirm_order;
      this.data.insurance = this.price * this.days;
      this.data.royalty = this.prices.royalty * this.days;
      this.data.oilCost = this.prices.oilCost * this.days;
      if (!add) {
        this.data.cap_prhe = Number(
          this.data.insurance +
            this.data.royalty +
            this.data.charge +
            this.data.oilCost
        );
      } else {
        this.data.cap_prhe = Number(
          this.data.insurance + this.data.royalty + this.data.charge
        );
      }
      return this.data.cap_prhe;
    },
    price() {
      let pr = this.$store.state.alldata.carinfo.span;
      if (pr != undefined) {
        return pr.slice(0, pr.length - 1);
      }
    }
  }
};
</script>
<style scoped lang='less'>
.affirm_order {
  font-size: 0.12rem;
  background: #f6f6f6;
  padding-bottom: 0.2rem;
  .header {
    background: #fff;
    color: #222;
    border-bottom: 1px solid #dfdfdf;
    font-size: 0.16rem;
    height: 0.44rem;
    padding: 0 0.15rem;
    img {
      width: 0.13rem;
      height: 0.22rem;
    }
  }
  .vehicle_model {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
    img {
      width: 0.91rem;
      height: 0.53rem;
      margin: 0.06rem 0.18rem;
    }
    .car_name {
      flex: 2;
      .car_names {
        font-size: 0.14rem;
      }
      .car_cfig {
        color: #888;
        margin-top: 0.07rem;
        display: block;
      }
    }
  }
  //车地图
  .car_map {
    background: #fff;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0 0.15rem 0.1rem;
    margin-bottom: 0.08rem;
    li {
      padding-top: 0.06rem;
      a {
        display: flex;
        .img {
          width: 0.1rem;
          height: 0.1rem;
          padding-top: 0.1rem;
          img {
            width: 0.03rem;
            height: 0.03rem;
            vertical-align: bottom;
          }
        }
        p {
          color: #222;
        }
        .car_site {
          flex: 5;
          p {
            font-size: 0.14rem;
            margin-bottom: 0.05rem;
            color: #222;
          }
          span {
            color: #888;
          }
        }
        p {
          flex: 1;
        }
      }
    }
  }
  //基本费用
  .capital_cost {
    background: #fff;
    padding: 0.12rem 0;
    margin-bottom: 0.08rem;
    .cap_tit {
      font-size: 0.14rem;
      color: #222;
      padding-left: 0.15rem;
    }
    .cap_detal {
      border-bottom: 1px solid #dfdfdf;
      // display: flex;
      li {
        overflow: hidden;
        margin: 0.1rem 0.23rem 0.1rem 0.15rem;
        p {
          color: #444;
          width: 2rem;
          float: left;
          .question {
            display: inline-block;
            width: 0.12rem;
            margin-left: 0.13rem;
            vertical-align: middle;
          }
        }
        .choss {
          font-size: 0.14rem;
          color: #222;
        }
        .butt {
          float: right;
        }
        .cap_num {
          color: #888;
          float: left;
        }
        .cap_price {
          color: #222;
          float: right;
        }
      }
    }
    .rent {
      padding: 0.1rem 0.23rem 0.14rem 0.15rem;
      padding-bottom: 0;
      overflow: hidden;
      p {
        float: left;
        color: #444;
        font-size: 0.14rem;
      }
      span {
        float: right;
        color: #222;
      }
    }
  }
  //违约金
  .penal_sum {
    background: #fff;
    padding: 0.1rem 0.23rem 0 0.15rem;
    margin-bottom: 0.08rem;
    div {
      display: flex;
      height: 0.2rem;
      line-height: 0.2rem;
      p {
        font-size: 0.14rem;
        color: #222;
      }
      img {
        width: 0.13rem;
        height: 0.13rem;
        margin: 0.04rem 0.06rem 0 0.1rem;
      }
      span {
        color: #888;
      }
    }
    .penal_payment {
      display: flex;
      li {
        flex: 1;
        margin: 0.14rem 0;
        .a {
          width: 1.06rem;
          height: 0.23rem;
          line-height: 0.19rem;
          display: block;
          border: 1px solid #bbb;
          text-align: center;
          img {
            display: inline-block;
            vertical-align: middle;
            width: 0.1rem;
            height: 0.1rem;
            margin-top: -0.02rem;
          }
          span {
            color: #444;
          }
        }
        .active {
          border: 1px solid #ffcc00;
          color: #ffcc00;
        }
      }
      li:nth-child(2) {
        margin-left: 0.1rem;
        margin-right: 0.1rem;
      }
    }
  }
  //取车须知
  .car_information {
    display: flex;
    background: #fff;
    padding: 0.1rem 0 0.1rem 0.15rem;
    p {
      font-size: 0.12rem;
      color: #444;
      flex: 10;
    }
    div {
      flex: 1;
      img {
        width: 0.07rem;
        height: 0.12rem;
      }
    }
  }
  // 协议
  .protocol {
    display: flex;
    padding: 0.09rem 0 0.09rem 0.15rem;
    div {
      img {
        width: 0.13rem;
        height: 0.13rem;
        margin-right: 0.05rem;
      }
    }
    p {
      color: #888;
      span {
        color: #0099ff;
      }
    }
  }
  //确认订单
  .confirm_order {
    background: #fff;
    padding: 0.08rem 0.15rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    height: 0.55rem;
    a {
      .suer_con {
        width: 3.45rem;
        height: 0.39rem;
        text-align: center;
        line-height: 0.39rem;
        background: #ffcc00;
        p {
          font-size: 0.16rem;
          color: #fff;
        }
      }
    }
  }
  .img_displays {
    display: none !important;
  }
}
</style>

