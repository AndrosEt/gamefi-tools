<template>
  <div class="hello">
    <p>每5秒自动刷新一次</p>
    <h1>实时价格</h1>
    <div class="row-container">
      <div class="row-item" v-for="(item, index) in priceList" :key="'price'+index">
        {{item.quote_token.symbol.name}} : {{item.last_price}}
      </div>
    </div>

    <h1>日盈利（WAX）</h1>
    <div class="row-container">
      <div class="row-item" v-for="(item, index) in objectProfit" :key="index">
        {{item.name}} : {{item.dailyProfit}}
      </div>
    </div>
    <h1>(当前)装备买入成本（WAX）</h1>
    <div class="row-container">
      <div class="row-item" v-for="(item, index) in objectInterCost" :key="index">
        {{item.name}} : {{item.cost}}
      </div>
    </div>
    <h1>回本时间（天）</h1>
    <div class="row-container">
      <div class="row-item" v-for="(item, index) in objectRecoveryDays" :key="index">
        {{item.name}} : {{item.days}}
      </div>
    </div>

  </div>
</template>

<script>
// import { io } from 'socket.io-client'
// import axios from './axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      priceList: [],
      priceTargetId: [104, 105, 106],
      objectList: [
        {name: '电锯', goldCost: 3600, woodCost: 21600, goldRewardRate: 0, woodRewardRate: 54, fleshRewardRate: 0, chargeTime: 60, energyConsumed: 60, durabilityConsumed: 45, profit: {}},
        {name: '船', goldCost: 3200, woodCost: 19200, goldRewardRate: 0, woodRewardRate: 0, fleshRewardRate: 80, chargeTime: 60, energyConsumed: 0, durabilityConsumed: 32, profit: {}},
        {name: '矿车', goldCost: 4000, woodCost: 24000, goldRewardRate: 100, woodRewardRate: 0, fleshRewardRate: 0, chargeTime: 120, energyConsumed: 133, durabilityConsumed: 5, profit: {}}
      ],
      objectProfit: [],
      objectInterCost: [],
      objectRecoveryDays: []
    }
  },
  created() {
    this.start()
  },
  methods: {
    start() {
      setInterval(this.getThePrice, 5000);
      // this.getThePrice()
    },
    getThePrice() {
      this.$request.getMarkets(data => {
        this.priceList = data.data.filter(item => this.priceTargetId.indexOf(item.id) > -1)
        this.calculateProfit()
        this.calculateCost()
        this.calculateRecoveryDays()
      })
    },
    calculateProfit() {
      this.objectProfit = []
      this.objectProfit = this.objectList.map(item => {
        const woodPrice = this.priceList[0].last_price
        const freshPrice = this.priceList[1].last_price
        const goldPrice = this.priceList[2].last_price
        let periodProfit = item.woodRewardRate*woodPrice
            + item.fleshRewardRate*freshPrice
            + item.goldRewardRate*goldPrice
            - (item.energyConsumed*freshPrice/5 + item.durabilityConsumed*goldPrice/5)
        let dailyProfit = (periodProfit/(item.chargeTime/60))*24
        return {
          name: item.name,
          dailyProfit: dailyProfit.toFixed(3)
        }
      })
    },
    calculateCost() {
      this.objectInterCost = []
      this.objectInterCost = this.objectList.map(item => {
        const woodPrice = this.priceList[0].last_price
        const goldPrice = this.priceList[2].last_price

        let cost = item.goldCost*goldPrice
            + item.woodCost*woodPrice
        return {
          name: item.name,
          cost: cost.toFixed(3)
        }
      })
    },
    calculateRecoveryDays() {
      this.objectRecoveryDays = []
      this.objectRecoveryDays = this.objectList.map(item => {
        const woodPrice = this.priceList[0].last_price
        const freshPrice = this.priceList[1].last_price
        const goldPrice = this.priceList[2].last_price
        let periodProfit = item.woodRewardRate*woodPrice
            + item.fleshRewardRate*freshPrice
            + item.goldRewardRate*goldPrice
            - (item.energyConsumed*freshPrice/5 + item.durabilityConsumed*goldPrice/5)
        let dailyProfit = (periodProfit/(item.chargeTime/60))*24

        let cost = item.goldCost*goldPrice
            + item.woodCost*woodPrice
        let days = cost/dailyProfit
        return {
          name: item.name,
          days: days.toFixed(3)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.hello {

}
.row-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row-item {
  width: 150px;
  display: flex;
}
</style>
