

export default function (obj: Record<string, any>) {
    const result: Record<string, any> = {}
    for (const [key, value] of Object.entries(obj)) {
        result[key.slice(0,1).toUpperCase() + key.slice(1)]  = value
    }
    return result
}