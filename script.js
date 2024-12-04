// Dataset
const dataset = [
    { entity: "Afghanistan", year: 2021, life_expectancy: 65.1, health_expenditure: 30.5, population: 38041754 },
    { entity: "Albania", year: 2021, life_expectancy: 78.7, health_expenditure: 840.2, population: 2837743 },
    { entity: "Algeria", year: 2021, life_expectancy: 76.2, health_expenditure: 350.1, population: 43851044 },
    { entity: "Afghanistan", year: 2020, life_expectancy: 64.8, health_expenditure: 29.8, population: 37590000 },
    { entity: "Albania", year: 2020, life_expectancy: 78.5, health_expenditure: 820.1, population: 2829000 },
    { entity: "Central African Republic", year: 2020, life_expectancy: ,53.6, health_expenditure: 820.1, population: 4829764},
    { entity: "Central African Republic", year: 2020, life_expectancy: ,53.6, health_expenditure: 820.1, population: 4829764},
    { entity: "Central African Republic", year: 2020, life_expectancy: ,53.6, health_expenditure: 820.1, population: 4829764},
    { entity: "Central African Republic", year: 2020, life_expectancy: ,53.6, health_expenditure: 820.1, population: 4829764},

];

// Populate dropdowns
const yearSelect = document.querySelector("#year-select");
const countrySelect = document.querySelector("#country-select");

const uniqueYears = [...new Set(dataset.map((row) => row.year))];
const uniqueCountries = [...new Set(dataset.map((row) => row.entity))];

// Fill year dropdown
uniqueYears.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
});

// Fill country dropdown
uniqueCountries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

// Update statistics and graph based on selected filters
function updateResults() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedCountry = countrySelect.value;

    const filteredData = dataset.filter((row) =>
        (!selectedYear || row.year === selectedYear) &&
        (!selectedCountry || row.entity === selectedCountry)
    );

    // Update statistics
    const statsDiv = document.querySelector("#stats");
    if (filteredData.length > 0) {
        const totalPopulation = filteredData.reduce((sum, row) => sum + row.population, 0);
        const avgLifeExpectancy = (
            filteredData.reduce((sum, row) => sum + row.life_expectancy, 0) /
            filteredData.length
        ).toFixed(2);
        const avgHealthExpenditure = (
            filteredData.reduce((sum, row) => sum + row.health_expenditure, 0) /
            filteredData.length
        ).toFixed(2);

        statsDiv.innerHTML = `
            <p><strong>Total Population:</strong> ${totalPopulation.toLocaleString()}</p>
            <p><strong>Average Life Expectancy:</strong> ${avgLifeExpectancy} years</p>
            <p><strong>Average Health Expenditure:</strong> $${avgHealthExpenditure}</p>
        `;
    } else {
        statsDiv.innerHTML = `<p>No data available for the selected filters.</p>`;
    }

    // Update graph
    const ctx = document.getElementById("graph").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: filteredData.map((row) => row.year),
            datasets: [
                {
                    label: "Life Expectancy",
                    data: filteredData.map((row) => row.life_expectancy),
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "Health Expenditure",
                    data: filteredData.map((row) => row.health_expenditure),
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderWidth: 2,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Year",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Values",
                    },
                },
            },
        },
    });
}

// Add event listeners to dropdowns
yearSelect.addEventListener("change", updateResults);
countrySelect.addEventListener("change", updateResults);

// Initial display
updateResults();
