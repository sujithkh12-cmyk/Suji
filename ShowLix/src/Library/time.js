const time = (min) => {
    const hours = Math.floor(min / 60)
    const remainder = min % 60
    return `${hours}h ${remainder}m`
}
export default time