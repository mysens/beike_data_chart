interface BoxItem {
    id: number
    iconLoading: boolean
}

type ApiResponse<T = any> = {
    massage?: string
    code: number
    data: T
    RequestId?: string
}

type AreaInfo = {
    CityId: string
    CityName: string
    DistrictInfo: DistrictInfo[]
}

type DistrictInfo = {
    DistrictId: number
    DistrictName: string
    BizInfo: BizInfo[]
}

type BizInfo = {
    BizId: number
    BizName: string
}

type CascaderOption = {
    value: string,
    label: string,
    children?: CascaderOption[]
}

type ApiDataList<T = any> = {
    total: number
    list: T[]
}

type BeikeDailyData = {
    id: number
    city: string
    date: string
    districtId: number
    bizcircleId: number
    districtName: string
    bizcircleName: string
    dealHouseNum: number
    newHouseNum: number
    newGuestNum: number
    showVisitorNum: number
    l7NewHouseNum: number
    l7dShowVisitorNum: number
    ctime: string
    mtime: string
}

type BeiDailyListData = ApiDataList<BeikeDailyData>