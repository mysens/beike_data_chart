interface BoxItem {
    id: number
    iconLoading: boolean
}

type ApiResponse<T = any> = {
    massage?: string;
    code: number;
    data: T;
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