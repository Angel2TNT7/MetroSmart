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
    legend: {
      orient: "vertical",
      type: 'scroll',
      left: 'left',
      data: [
        "\u9646\u5bb6\u5634",
        "\u5357\u4eac\u897f\u8def",
        "\u9759\u5b89\u5bfa",
        "\u6dde\u8679\u8def",
        "\u5a04\u5c71\u5173\u8def",
        "\u4e2d\u5c71\u516c\u56ed",
        "\u5f90\u6cfe\u4e1c",
        "\u5357\u4eac\u4e1c\u8def",
        "\u8679\u6865\u706b\u8f66\u7ad9",
        "\u4e1c\u660c\u8def",
        "\u5f20\u6c5f\u9ad8\u79d1",
        "\u91d1\u79d1\u8def",
        "\u5e7f\u5170\u8def",
        "\u9f99\u9633\u8def",
        "\u6c5f\u82cf\u8def",
        "\u5317\u65b0\u6cfe",
        "\u5a01\u5b81\u8def",
        "\u4e16\u7eaa\u516c\u56ed",
        "\u8679\u68652\u53f7\u822a\u7ad9\u697c",
        "\u4e0a\u6d77\u79d1\u6280\u9986",
        "\u5510\u9547",
        "\u5ddd\u6c99",
        "\u534e\u590f\u4e1c\u8def",
        "\u6d66\u4e1c\u56fd\u9645\u673a\u573a",
        "\u51cc\u7a7a\u8def",
        "\u6d77\u5929\u4e09\u8def",
        "\u521b\u65b0\u4e2d\u8def",
        "\u8fdc\u4e1c\u5927\u9053"
      ],

      textStyle: {
        color: '#D4FCFDFF'
      }
    },
    series:[
      {
        name:'站点',
        type:'pie',
        radius:['40%','53%'],
        roseType:'radius',
        labelLine: {
          length: 30
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          },
        },
        data:[
          {
            name: "\u9646\u5bb6\u5634",
            value: 272989.0
          },
          {
            name: "\u5357\u4eac\u897f\u8def",
            value: 191624.0
          },
          {
            name: "\u9759\u5b89\u5bfa",
            value: 190124.0
          },
          {
            name: "\u6dde\u8679\u8def",
            value: 175110.0
          },
          {
            name: "\u5a04\u5c71\u5173\u8def",
            value: 163641.6
          },
          {
            name: "\u4e2d\u5c71\u516c\u56ed",
            value: 149379.0
          },
          {
            name: "\u5f90\u6cfe\u4e1c",
            value: 179395.0
          },
          {
            name: "\u5357\u4eac\u4e1c\u8def",
            value: 143021.0
          },
          {
            name: "\u8679\u6865\u706b\u8f66\u7ad9",
            value: 173574.0
          },
          {
            name: "\u4e1c\u660c\u8def",
            value: 134806.0
          },
          {
            name: "\u5f20\u6c5f\u9ad8\u79d1",
            value: 163362.0
          },
          {
            name: "\u91d1\u79d1\u8def",
            value: 145673.0
          },
          {
            name: "\u5e7f\u5170\u8def",
            value: 144441.0
          },
          {
            name: "\u9f99\u9633\u8def",
            value: 115350.6
          },
          {
            name: "\u6c5f\u82cf\u8def",
            value: 96712.0
          },
          {
            name: "\u5317\u65b0\u6cfe",
            value: 75820.0
          },
          {
            name: "\u5a01\u5b81\u8def",
            value: 72166.0
          },
          {
            name: "\u4e16\u7eaa\u516c\u56ed",
            value: 61199.0
          },
          {
            name: "\u8679\u68652\u53f7\u822a\u7ad9\u697c",
            value: 61077.0
          },
          {
            name: "\u4e0a\u6d77\u79d1\u6280\u9986",
            value: 55692.0
          },
          {
            name: "\u5510\u9547",
            value: 65905.0
          },
          {
            name: "\u5ddd\u6c99",
            value: 67228.0
          },
          {
            name: "\u534e\u590f\u4e1c\u8def",
            value: 46863.0
          },
          {
            name: "\u6d66\u4e1c\u56fd\u9645\u673a\u573a",
            value: 57761.0
          },
          {
            name: "\u51cc\u7a7a\u8def",
            value: 11885.0
          },
          {
            name: "\u6d77\u5929\u4e09\u8def",
            value: 8775.0
          },
          {
            name: "\u521b\u65b0\u4e2d\u8def",
            value: 7019.0
          },
          {
            name: "\u8fdc\u4e1c\u5927\u9053",
            value: 6808.0
          }
        ],

      }
    ]
  }
  myChart.setOption(options)
}

</script>

<template>
  <div>二号线各个站点对线路收入的贡献</div>
  <div ref="target" class="bg-[url('assets/imgs/boxBg.png')] bg-cover bg-center p-2 w-full h-full"></div>

</template>

<style scoped lang="scss">

</style>