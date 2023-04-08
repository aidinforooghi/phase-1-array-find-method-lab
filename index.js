// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(obj => obj.result === 'W');

    if (winRecord) {
        return winRecord.year;
    } else {
        return undefined;
    }
}