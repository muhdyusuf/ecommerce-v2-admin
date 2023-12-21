import {z} from 'zod'

export const sizeSchema=z.object({
    name:z.string().min(1).max(50),
    description:z.string().min(10)
    
})

