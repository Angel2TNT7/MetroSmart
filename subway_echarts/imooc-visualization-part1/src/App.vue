<template>
  <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden">
    <div class="flex-1 mr-5 p-3 flex flex-col">
      <!--  SinglePassengerFlow单天各条地铁线路客流量可视化图横向柱状图-->
      <!--      <SinglePassengerFlow :data="data.regionData"></SinglePassengerFlow>-->
      <SinglePassengerFlow class="flex-1 h-1/2 box-border pb-4"></SinglePassengerFlow>
      <!--  RevenueContribution1二号线各个站点对线路收入的贡献1沙漏-->
      <RevenueContribution1 class="flex-1 h-1/2 box-border pb-4"></RevenueContribution1>
    </div>
    <div class="w-1/3 mr-5 flex flex-xol">
      <!--  RevenueContribution2二号线各个站点对线路收入的贡献2饼状图-->
      <RevenueContribution2></RevenueContribution2>
    </div>
<!--    <div class="flex-1 p-3 flex flex-col">-->
<!--      &lt;!&ndash;  ConsumptionProportion不同消费金额次数占比饼状图&ndash;&gt;-->
<!--      <ConsumptionProportion></ConsumptionProportion>-->

<!--      &lt;!&ndash;  PassengerFlow二号线各个站点的客流量占整条线的客流量饼状图&ndash;&gt;-->
<!--      <PassengerFlow></PassengerFlow>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import ConsumptionProportion from './components/ConsumptionProportion.vue'
import RevenueContribution1 from './components/RevenueContribution1.vue'
import RevenueContribution2 from './components/RevenueContribution2.vue'
import PassengerFlow from "./components/PassengerFlow.vue";
import SinglePassengerFlow from "./components/SinglePassengerFlow.vue";

import {getVisualization} from "./api/visualization.js";
import {ref} from "vue";
//  动态数据接口
// const data=ref(null)
// const loadData=async()=>{
//   data.value=await getVisualization()
//   console.log(data.value)
// }
// loadData()
//
// setInterval(()=>{
//   loadData()
// },3000)
</script>

<style lang="scss" scoped>

</style>