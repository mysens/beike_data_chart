<template>
    <div class="content">
        <a-flex wrap="wrap" gap="small">
            <!-- <a-space> -->
            <div class="content-box" v-for="(item, index) in list" :key="item.id">
                <!-- <a-space direction="vertical" size="middle"> -->
                <a-flex :vertical="false" wrap="wrap" gap="small">
                    <!-- <a-space :size="10"> -->
                    <Selector ref="mySelectors" :options="options" />
                    <a-button type="primary" :loading="item.iconLoading" @click="updateChart(index, item)">
                        <template #icon>
                            <PoweroffOutlined />
                        </template>
                        查询
                    </a-button>
                    <a-button type="primary" danger @click="delChart(index)">删除</a-button>

                    <!-- </a-space> -->
                    <MyEchart ref="myCharts" style="margin-top: 10px;" />
                </a-flex>

                <!-- </a-space> -->
            </div>
            <div class="content-box plus-box">
                <div class="box">
                    <div class="plus" @click="addChart()"></div>
                </div>
            </div>
            <!-- </a-space> -->
        </a-flex>
    </div>
</template>

<script lang="ts" setup >
import { ref } from 'vue'
import Selector from './Selector.vue'
import MyEchart from './MyChart.vue'
import { PoweroffOutlined } from '@ant-design/icons-vue';
import useContextBox from '@/hooks/useContentBox'
import request from '@/util/request'
import type { ECOption } from '@/util/echart';

const props = defineProps<{ contentType: number }>()
const contentType = props.contentType
let dataCategory = "成交量"
if (contentType == 1) {
    dataCategory = "带看量"
}

const { list, delChart, addChart } = useContextBox()
const myCharts = ref()
const mySelectors = ref()

async function updateChart(index: number, item: BoxItem) {
    item.iconLoading = true
    let [city, districtId, bizcircleId] = mySelectors.value[index].value
    if (city == undefined) {
        alert("请选择区域")
        item.iconLoading = false
        return
    }
    if (districtId == undefined) {
        districtId = 0
    }
    if (bizcircleId == undefined) {
        if (districtId == 0) {
            bizcircleId = 0
        } else {
            bizcircleId = districtId
        }
    }
    let result = await request<BeiDailyListData>(
        "/v1/second/house/deal/daily",
        {
            method: "POST",
            data: { city: city, recentPeriod: 7, type: 1, districtId: Number(districtId), bizcircleId: Number(bizcircleId) }
        }

    )
    let xAxisData = []
    let seriesData = []
    if (result.data.total > 0) {
        for (let item of result.data.list) {
            xAxisData.push(item.date.slice(5, 10))
            if (contentType == 1) {
                //带看量
                seriesData.push(item.showVisitorNum)
            } else {
                //成交量
                seriesData.push(item.dealHouseNum)
            }

        }
        let option: ECOption = {
            title: {
                text: dataCategory + '近7日数据',
                subtext: "来源贝壳网",
                textStyle: {
                    color: '#333',
                    fontSize: 14,
                    fontFamily: 'Arial',
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '1%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xAxisData
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: seriesData,
                    type: 'line',
                    smooth: true
                }
            ]
        };
        myCharts.value[index].updateEchart(option)
    } else {
        alert("查询不到该地区数据")
    }
    item.iconLoading = false
}


let options = ref<CascaderOption[]>([])

async function queryAreaInfo() {
    let result = await request<AreaInfo[]>({
        url: "/v1/area/info"
    })
    options.value = result.data.map(function (item) {
        let res: CascaderOption = {
            value: item.CityId,
            label: item.CityName,
            children: item.DistrictInfo.map(function (districtItem) {
                let districtRes: CascaderOption = {
                    value: districtItem.DistrictId.toString(),
                    label: districtItem.DistrictName,
                    // children: districtItem.BizInfo.map(function (BizItem) {
                    //     let bizRes: CascaderOption = {
                    //         value: BizItem.BizId.toString(),
                    //         label: BizItem.BizName,
                    //     }
                    //     return bizRes
                    // })
                }
                return districtRes
            })
        }
        return res
    });

    // console.log("options", options)

}

queryAreaInfo()

</script>

<style scoped>
.content {
    padding: 0 50px;
    background-color: #f5f5f5;
}

.content-box {
    width: 500px;
    margin: 20px;
    padding: 20px;
    border: 1px solid rgba(5, 5, 5, 0.06);
    background-color: #ffffff;
}

.plus-box {
    height: 350px
}

.box {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    position: relative;
}

.plus {
    width: 15px;
    height: 2px;
    padding: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.plus::before,
.plus::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: #333;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.plus::before {
    transform: translate(-50%, -50%) rotate(-90deg);
}


@media (max-width: 600px) {

    /* CSS样式 */
    .content {
        padding: 0 20px;
        background-color: #f5f5f5;
    }

    .content-box {
        width: 500px;
        margin: 20px;
        padding: 20px;
        border: 1px solid rgba(5, 5, 5, 0.06);
        background-color: #ffffff;
    }

    .plus-box {
        height: 200px
    }

    button {
        width: 48%
    }
}
</style>