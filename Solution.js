import { expenses } from './expenses.js';

function solution1(expenses) {
    const monthDayArr = Object.keys(expenses).map((key) => ({
        year: key.slice(0, 4), 
        month: key.slice(5)
    }));
    
    console.log("monthDayArr:", monthDayArr);

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

    console.log("firstSundaysArr:", firstSundaysArr);

    const sundaysExpensesArr = Object.entries(expenses).map(([month, days]) => {
        const firstSundayInfo = firstSundaysArr.find(elem => elem.yearMonth === month);
        const firstSundayDay = firstSundayInfo ? firstSundayInfo.firstSunday : null;

        console.log(month + days)

        if (!firstSundayDay) {
            console.log(`Brak pierwszej niedzieli dla miesiąca: ${month}`);
            return null;
        }

        const filteredDays = Object.keys(days)
            .filter(day => parseInt(day) <= firstSundayDay)
            .map(day => days[day]);

        const expensesToSunday = filteredDays.reduce((acc, dayObj) => {
            Object.values(dayObj).forEach(category => acc.push(...category));
            return acc;
        }, []);

        return expensesToSunday;
    });

    console.log("sundaysExpensesArr:", sundaysExpensesArr);
    return sundaysExpensesArr;
}

document.getElementById("oblicz").addEventListener("click", function () {
    const result = solution1(expenses);
    console.log("Wynik:", result);
});