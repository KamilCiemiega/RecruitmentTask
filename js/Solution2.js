import { expenses } from './expenses.js';

function quickSelect(arr, k) {
    if (arr.length === 1) return arr[0];

    const pivot = arr[Math.floor(arr.length / 2)];
    const lows = arr.filter(x => x < pivot);
    const highs = arr.filter(x => x > pivot);
    const pivots = arr.filter(x => x === pivot);

    if (k < lows.length) {
        return quickSelect(lows, k);
    } else if (k < lows.length + pivots.length) {
        return pivots[0];
    } else {
        return quickSelect(highs, k - lows.length - pivots.length);
    }
}

function solution2(expenses) {
    const monthDayArr = Object.keys(expenses).map((key) => ({
        year: key.slice(0, 4), 
        month: key.slice(5)
    }));

    const firstSundaysArr = monthDayArr.map((value) => {
        const firstDay = new Date(value.year, value.month - 1, 1);
        let firstSunday = firstDay;

        while (firstSunday.getDay() !== 0) {
            firstSunday.setDate(firstSunday.getDate() + 1);
        }

        return {
            yearMonth: `${value.year}-${value.month.padStart(2, '0')}`,
            firstSunday: firstSunday.getDate()
        };
    });

    const allExpenses = [];

    Object.entries(expenses).forEach(([month, days]) => {
        const firstSundayInfo = firstSundaysArr.find(elem => elem.yearMonth === month);
        const firstSundayDay = firstSundayInfo ? firstSundayInfo.firstSunday : null;

        if (!firstSundayDay) {
            console.log(`Brak pierwszej niedzieli dla miesiąca: ${month}`);
            return;
        }

        const filteredDays = Object.keys(days)
            .filter(day => parseInt(day) <= firstSundayDay)
            .map(day => days[day]);

        const expensesToSunday = filteredDays.reduce((acc, dayObj) => {
            Object.values(dayObj).forEach(category => acc.push(...category));
            return acc;
        }, []);

        allExpenses.push(...expensesToSunday);
    });

    if (allExpenses.length === 0) return null;

    const n = allExpenses.length;
    const sortedExpenses = allExpenses.slice();

    if (n % 2 === 1) {
        return quickSelect(sortedExpenses, Math.floor(n / 2));
    } else {
        const left = quickSelect(sortedExpenses, n / 2 - 1);
        const right = quickSelect(sortedExpenses, n / 2);
        return (left + right) / 2;
    }
}

document.getElementById("secondCalculateMethod").addEventListener("click", function () {
    const result = solution2(expenses);
    console.log("Results:", result);
});

export default solution2;

// Advantages:
//  - Quick Select is more efficient than full data sorting because it finds the median in O(n) 
//  mean time, where n is the number of elements.
//  -  For large data sets, this method saves memory and time.

//  Defects:
//  - In the worst case it can be as complex as an O(n^2) sort, but well-implemented 
//  partitioning minimizes this problem.