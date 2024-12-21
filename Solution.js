const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function solution1(expenses) {
    const monthDayArr = Object.keys(expenses).map((key) => ({
        year: key.slice(0, 4), 
        month: key.slice(6)
    }));
    
    console.log(monthDayArr);

    const firstSundaysArr = monthDayArr.map(value => {
        const firstDay = new Date(value.year, value.month, 1);
        let firstSunday = firstDay;
        
        while (firstSunday.getDay() !== 0) {
            firstSunday.setDate(firstSunday.getDate() + 1);
        }
        return ("0" + firstSunday.getDate());
    });

    console.log(firstSundaysArr);

    const sundaysExpensesArr = Object.values(expenses).map((value, index) => {
        const days = Object.keys(value);
        console.log(days);
    
        const validDays = days.filter(day => parseInt(day) <= parseInt(firstSundaysArr[index]));
    
        console.log(validDays);
    });
}


document.getElementById("oblicz").addEventListener("click", function () {
    solution1(expenses);
});