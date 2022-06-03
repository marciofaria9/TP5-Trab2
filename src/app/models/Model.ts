import { Thumbnail } from "./Thumbnail"

export interface Model{

 id?: number
 name?: string
 title?: string
 description?: string
 resourceURI?: string
 thumbnail?: Thumbnail
 image?:string
 path?: string
 extension?: string
 
}

