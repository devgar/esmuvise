import { H3Event, sendError, createError } from 'h3'

export default function getQueryNum (
    event: H3Event, 
    queryField: string, 
    def?: number
): number|null|undefined {
    const stringValue = getQuery(event)[queryField]
    const value = parseInt(stringValue as string)
    if (isNaN(value)) return def
    return value
}