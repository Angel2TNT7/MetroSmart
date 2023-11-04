<script setup>
//  动态数据接口
// const props = defineProps({
//   data: {
//     type: Object,
//     required: true
//   }
// })
// console.log(props.data)

import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts"

// 1.初始化echarts实例
let myChart = null;
const target = ref(null)
onMounted(() => {
  myChart = echarts.init(target.value)
  renderChart()
})

// 2.构建option配置对象
const renderChart = () => {
  const options = {
    // 提示框
    tooltip:{
      trigger:'axis',
      axisPointer:{
        type:'shadow'
      }
    },
    // 图例
    legend:{
      data:['乘客入站流量','乘客出站流量'],
      textStyle:{
        color:'#D4FCFDFF'
      }
    },
    // 工具栏
    toolbox:{
      show:true,
      feature:{
        // 区域缩放
        dataZoom: {
          xAxisIndex: "none"
        },
        // 展示原始数据
        dataView: {
          readOnly: false
        },
        // 保存图片
        saveAsImage:{}
      },
      iconStyle:{
        borderColor:'fff',
        borderWidth:2
      }
    },
    //   X轴展示数据
    xAxis: {
      show: true,
      type: 'value',
      name:'人次',
      axisLabel: {
        formatter:'{value}'
      },
      // 数据的最大值*1.2，防止条状图溢出
      max: function (value) {
        return parseInt(value.max * 1.2)
      }
    },
    //   Y轴展示数据
    yAxis: {
      type:'category',
      data:['1号线','2号线','3号线','4号线','5号线','6号线','7号线','8号线','9号线','10号线','11号线','20号线'],
      // 反向展示
      // inverse:true,
      // 轴线
      axisLine:{
        show:false
      },
      // 刻度
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#9eb1c8'
      }
    },
    //   图表绘制的位置，对应 上下左右
    grid: {
      top:30,
      right:0,
      bottom:0,
      left:0,
    //   计算的时候包含标签
      containLabel:true
    },
    //   核心配置
    series: [
      {
        name:'乘客入站流量',
        type:'bar',
        data:[
          670312,
          717314,
          425506,
          304160,
          69948,
          199495,
          394624,
          465769,
          450820,
          320101,
          292938,
          89953,
          80555,
          42294
        ],
        itemStyle:{
          color:'#00ECF2'
        }
      },
      {
        name:'乘客出站流量',
        type:'bar',
        data:[
          671769,
          718413,
          404693,
          301888,
          69425,
          191095,
          391474,
          465713,
          438599,
          319981,
          280683,
          84986,
          80065,
          38453
        ],
        itemStyle:{
          color:'#69C6AA'
        }
      }
    ]
  }

  // 通过 实例.setOption(option)
  myChart.setOption(options)
}

// 监听数据，实现图表动态渲染
// watch(()=>props.data,()=>{renderChart()})
</script>

<template>
  <div>单天各条地铁线路客流量</div>
  <div ref="target" class="bg-[url('assets/imgs/boxBg.png')] bg-cover bg-center p-2 w-full h-full"></div>
</template>

<style scoped lang="scss">

</style>