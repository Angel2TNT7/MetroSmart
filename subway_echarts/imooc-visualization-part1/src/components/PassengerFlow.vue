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
    tooltip: {
      trigger: 'item'
    },
    legend:{
      orient:'horizontal',
      type:'scroll',
      data: [
        "\u6d66\u4e1c\u65b0\u533a",
        "\u9ec4\u6d66\u533a",
        "\u9759\u5b89\u533a",
        "\u957f\u5b81\u533a",
        "\u95f5\u884c\u533a",
        "\u9752\u6d66\u533a",
        "\u9646\u5bb6\u5634",
        "\u4e1c\u660c\u8def",
        "\u5f20\u6c5f\u9ad8\u79d1",
        "\u91d1\u79d1\u8def",
        "\u5e7f\u5170\u8def",
        "\u9f99\u9633\u8def",
        "\u4e16\u7eaa\u516c\u56ed",
        "\u4e0a\u6d77\u79d1\u6280\u9986",
        "\u5510\u9547",
        "\u5ddd\u6c99",
        "\u534e\u590f\u4e1c\u8def",
        "\u6d66\u4e1c\u56fd\u9645\u673a\u573a",
        "\u51cc\u7a7a\u8def",
        "\u6d77\u5929\u4e09\u8def",
        "\u521b\u65b0\u4e2d\u8def",
        "\u8fdc\u4e1c\u5927\u9053",
        "\u5357\u4eac\u4e1c\u8def",
        "\u5357\u4eac\u897f\u8def",
        "\u9759\u5b89\u5bfa",
        "\u6dde\u8679\u8def",
        "\u5a04\u5c71\u5173\u8def",
        "\u4e2d\u5c71\u516c\u56ed",
        "\u6c5f\u82cf\u8def",
        "\u5317\u65b0\u6cfe",
        "\u5a01\u5b81\u8def",
        "\u8679\u6865\u706b\u8f66\u7ad9",
        "\u8679\u68652\u53f7\u822a\u7ad9\u697c",
        "\u5f90\u6cfe\u4e1c"
      ],
      textStyle:{
        color:'#D4FCFDFF'
      }
    },
    series: [
      {
        name: '区域划分',
        type: 'pie',
        radius: ['53%', '55%'],
        center: ['20%', '50%'],
        data: [
          {
            name: "浦东新区",
            value: 646292
          },
          {
            name: "黄浦区",
            value: 75826
          },
          {
            name: "静安区",
            value: 188782
          },
          {
            name: "长宁区",
            value: 390756
          },
          {
            name: "闵行区",
            value: 89937
          },
          {
            name: "青浦区",
            value: 77321
          }
        ],
        label: {
          color: 'auto',
          fontWeight: 'bolder',
          fontSize: '20',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        tooltip: {
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        }
      },
      {
        name: '区域划分',
        type: 'pie',
        radius: ['36%', '48%'],
        center: ['20%', '50%'],
        data: [
          {
            name: "浦东新区",
            value: 646292
          },
          {
            name: "黄浦区",
            value: 75826
          },
          {
            name: "静安区",
            value: 188782
          },
          {
            name: "长宁区",
            value: 390756
          },
          {
            name: "闵行区",
            value: 89937
          },
          {
            name: "青浦区",
            value: 77321
          }
        ],
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        tooltip: {
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        }
      },
      {
        name: '站点',
        type: 'pie',
        radius: ['26%', '38%'],
        center: ['75%', '40%'],
        data: [
          {
            name: "\u9646\u5bb6\u5634",
            value: 141614
          },
          {
            name: "\u4e1c\u660c\u8def",
            value: 71222
          },
          {
            name: "\u5f20\u6c5f\u9ad8\u79d1",
            value: 72813
          },
          {
            name: "\u91d1\u79d1\u8def",
            value: 72030
          },
          {
            name: "\u5e7f\u5170\u8def",
            value: 68683
          },
          {
            name: "\u9f99\u9633\u8def",
            value: 57183
          },
          {
            name: "\u4e16\u7eaa\u516c\u56ed",
            value: 32624
          },
          {
            name: "\u4e0a\u6d77\u79d1\u6280\u9986",
            value: 29188
          },
          {
            name: "\u5510\u9547",
            value: 25800
          },
          {
            name: "\u5ddd\u6c99",
            value: 26258
          },
          {
            name: "\u534e\u590f\u4e1c\u8def",
            value: 19127
          },
          {
            name: "\u6d66\u4e1c\u56fd\u9645\u673a\u573a",
            value: 16327
          },
          {
            name: "\u51cc\u7a7a\u8def",
            value: 5251
          },
          {
            name: "\u6d77\u5929\u4e09\u8def",
            value: 2543
          },
          {
            name: "\u521b\u65b0\u4e2d\u8def",
            value: 3041
          },
          {
            name: "\u8fdc\u4e1c\u5927\u9053",
            value: 2588
          },
          {
            name: "\u5357\u4eac\u4e1c\u8def",
            value: 75826
          },
          {
            name: "\u5357\u4eac\u897f\u8def",
            value: 92373
          },
          {
            name: "\u9759\u5b89\u5bfa",
            value: 96409
          },
          {
            name: "\u6dde\u8679\u8def",
            value: 92708
          },
          {
            name: "\u5a04\u5c71\u5173\u8def",
            value: 87224
          },
          {
            name: "\u4e2d\u5c71\u516c\u56ed",
            value: 83287
          },
          {
            name: "\u6c5f\u82cf\u8def",
            value: 49530
          },
          {
            name: "\u5317\u65b0\u6cfe",
            value: 40705
          },
          {
            name: "\u5a01\u5b81\u8def",
            value: 37302
          },
          {
            name: "\u8679\u6865\u706b\u8f66\u7ad9",
            value: 56750
          },
          {
            name: "\u8679\u68652\u53f7\u822a\u7ad9\u697c",
            value: 33187
          },
          {
            name: "\u5f90\u6cfe\u4e1c",
            value: 77321
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
        }
      }
    ]
  }
  myChart.setOption(options)
}
</script>

<template>
  <div>二号线各个站点的客流量占整条线的客流量</div>
  <div ref="target" class="bg-[url('assets/imgs/boxBg.png')] bg-cover bg-center p-2 w-full h-full"></div>

</template>

<style scoped lang="scss">

</style>