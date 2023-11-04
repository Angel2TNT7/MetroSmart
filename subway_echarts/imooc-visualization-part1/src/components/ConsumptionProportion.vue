<script setup>
//  动态数据接口
// const props = defineProps({
//   data: {
//     type: Object,
//     required: true
//   }
// })
// console.log(props.data)

import {onMounted, ref} from "vue";
import * as echarts from "echarts"

let myChart = null;
const target = ref(null)
onMounted(() => {
  myChart = echarts.init(target.value)
  renderChart()
})

const renderChart = () => {
  const options = {
    toolbox:{
      feature:{
        dataView: {
          readOnly: false
        },
        saveAsImage:{}
      },
      iconStyle:{
        borderColor:'fff',
        borderWidth:2
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
      orient: 'horizontal',  // 设置图例水平排布
      itemWidth: 20,  // 设置图例项的宽度
      itemHeight: 10, // 设置图例项的高度
      itemGap: 10,    // 设置图例项之间的间距
      textStyle: {
        color: '#D4FCFDFF' // 设置图例文本颜色
      },
      left: 'left'
    },
    series: [
      {
        name: '消费金额（次）',
        type: 'pie',
        radius: '50%',
        data: [
          {
            name: 0.3,
            value: 2
          },
          {
            name: 1.0,
            value: 33471
          },
          {
            name: 2.0,
            value: 126798
          },
          {
            name: 3.0,
            value: 1124615
          },
          {
            name: 4.0,
            value: 1991813
          },
          {
            name: 5.0,
            value: 834264
          },
          {
            name: 6.0,
            value: 250501
          },
          {
            name: 7.0,
            value: 84722
          },
          {
            name: 8.0,
            value: 25301
          },
          {
            name: 9.0,
            value: 7434
          },
          {
            name: 10.0,
            value: 3071
          },
          {
            name: 11.0,
            value: 825
          },
          {
            name: 12.0,
            value: 176
          },
          {
            name: 13.0,
            value: 47
          },
          {
            name: 14.0,
            value: 12
          },
          {
            name: 4.5,
            value: 5
          },
          {
            name: 5.4,
            value: 4
          },
          {
            name: 3.6,
            value: 3
          },
          {
            name: 2.7,
            value: 2
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          show: true,
          color: 'auto',
          fontWeight: 'bolder',
          formatter: "{b|{b}: }{c} ({d}%)",
          rich: {
            b: {
              fontSize: 16,
              lineHeight: 33
            }
          }
        }
      }
    ]
  }
  myChart.setOption(options)
}
</script>

<template>
  <div>
    不同消费金额次数占比
  </div>
  <div ref="target" class="bg-[url('assets/imgs/boxBg.png')] bg-center p-2 w-full h-full"></div>
</template>

<style scoped lang="scss">

</style>