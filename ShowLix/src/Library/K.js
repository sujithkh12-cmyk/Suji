export const K = (nums) => {
    if (nums >= 1000) {
        return (nums / 1000).toFixed(1) + 'k'
    } else {
        return nums
    }
}