
export default function (obj: Record<string, unknown>) {
    const result: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(obj)) {
        result[key.slice(0,1).toUpperCase() + key.slice(1)]  = value
    }
    return result
}