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
    }

    function addChart() {
        list.push(newBoxItem())
    }

    return { list, delChart, addChart }
}


