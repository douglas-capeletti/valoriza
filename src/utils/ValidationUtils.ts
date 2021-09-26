export function badRequestIfAbsent<T>(data?: T): T {
    if (!data) {
        throw new Error('Bad Request')
    }
    return data
}