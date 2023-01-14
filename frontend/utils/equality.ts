// function equality
// returns true if every key in objB is equal in objA

type Comparable = Record<string|number|symbol, any>

export default function equality(objB: Comparable) {
    return (objA: Comparable) => {
        return Object.entries(objB).every(([key, value]) => {
            return objA[key] === value
        })
    }
        
}