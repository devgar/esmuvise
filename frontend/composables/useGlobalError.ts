export const useGlobalError = () => {
    return useState<Error|null>('global.error', () => null)
}