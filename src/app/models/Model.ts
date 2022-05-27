export interface Model{

 id: number
 name: string
 description: string
 resourceURI: string
 thumbnail: any
 data: DataModel
}

export interface DataModel{
    offset: number
    limit: number
    total: number
    count: number
    results: any[]
}