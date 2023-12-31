import type { ECOption } from '@/util/echart';
import request from '@/util/request'
import {reactive} from 'vue'

export default function () {

    var autoIncreaseId = 0

    function newBoxItem(): BoxItem {
        autoIncreaseId = autoIncreaseId + 1
        return {
            id: autoIncreaseId,
            iconLoading: false
        }
    }

    const list = reactive<BoxItem[]>([newBoxItem()])

    async function queryData() {
        let result = await request({
            url: "/v1/area/info"
        })
        let option: ECOption = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ["Mon", 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: result.data,
                    type: 'line',
                    smooth: true
                }
            ]
        };
        return option
    }

    function delChart(index: number) {
        list.splice(index, 1)
    }

    function addChart() {
        list.push(newBoxItem())
    }

    return { list, queryData, delChart, addChart }
}


