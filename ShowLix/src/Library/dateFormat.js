const dateFormat = (date) => {
    const d = new Date(date);
    const local_date = d.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
    return local_date;
}
export default dateFormat;