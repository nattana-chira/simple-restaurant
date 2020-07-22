const Arr = {
    fromNumber(arrayLength) {
        const length = parseInt(arrayLength)
        if (typeof length === 'number' && !isNaN(length)) {
            return [...Array(Math.floor(length)).keys()]
        }
        return []
    }
}

export default Arr