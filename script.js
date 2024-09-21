function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        document.getElementById("result").textContent = "Please enter a valid date.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    if (birthDateObj > today) {
        document.getElementById("result").textContent = "Birthdate cannot be in the future.";
        return;
    }

    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthDateObj.getMonth();
    let ageDays = today.getDate() - birthDateObj.getDate();

    // Adjust if birthdate hasn't occurred yet this year/month
    if (ageDays < 0) {
        ageMonths--;
        ageDays += daysInMonth(today.getMonth() - 1, today.getFullYear());
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML = `
        <h2>Your exact age:</h2>
        <p><strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days old.</p>
    `;
}

function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}