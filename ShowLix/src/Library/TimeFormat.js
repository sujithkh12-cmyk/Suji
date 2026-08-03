const TimeFormat = (date) => {
    const d = new Date(date);
    const local_time = d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    return local_time;
}
export default TimeFormat;