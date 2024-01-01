import { message } from 'ant-design-vue'
import { reactive } from 'vue'

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

    

    function delChart(index: number) {
        list.splice(index, 1)
        message.success("图表已删除", 3)
    }

    function addChart() {
        list.push(newBoxItem())
        message.success("图表已添加", 3)
    }

    return { list, delChart, addChart }
}


