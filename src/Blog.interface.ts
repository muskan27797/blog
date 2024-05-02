export interface ISubHeadingData {
    title: string,
    content: string
}

export interface IHeadingData {
    title: string,
    content: string,
    subHeading: ISubHeadingData[]
}

export interface IBlogDataInfo {
    title: string,
    date: string,
    name: string,
    short_description: string,
    overview: string,
    heading: IHeadingData[]
}

