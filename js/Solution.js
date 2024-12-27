import { expenses } from './expenses.js';

function solution1(expenses) {
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

    const sundaysExpensesArr = Object.entries(expenses).map(([month, days]) => {
        const firstSundayInfo = firstSundaysArr.find(elem => elem.yearMonth === month);
        const firstSundayDay = firstSundayInfo ? firstSundayInfo.firstSunday : null;

        if (!firstSundayDay) {
            console.log(`Missing first Sunday for the month: ${month}`);
            return null;
        }

        const filteredDays = Object.keys(days)
            .filter(day => parseInt(day) <= firstSundayDay)
            .map(day => days[day]);


        const expensesToSunday = filteredDays.reduce((acc, dayObj) => {
            Object.values(dayObj).forEach(category => acc.push(...category));
            return acc;
        }, []);

        allExpenses.push(...expensesToSunday);

        return expensesToSunday;
    });

    const sortedExpenses = allExpenses.sort((a, b) => a - b);

    const n = sortedExpenses.length;
    if (n === 0) {
        return null;
    }
    const median = n % 2 === 0
        ? (sortedExpenses[n / 2 - 1] + sortedExpenses[n / 2]) / 2
        : sortedExpenses[Math.floor(n / 2)];

    return median;
    
}

document.getElementById("calculate").addEventListener("click", function () {
    const result = solution1(expenses);
    console.log("Results:", result);
});