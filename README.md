# Life Expectancy vs Health Expenditure

## Project Overview

This project explores the relationship between life expectancy and health expenditure across different countries. By analyzing this data, we aim to understand whether higher health expenditure leads to improved life expectancy and if there are any trends or patterns among countries with different income levels and healthcare systems.

The project uses publicly available data from Kaggle and employs data analysis techniques like exploratory data analysis (EDA), statistical analysis, and visualization to examine this relationship.

## Table of Contents
- [Project Overview](#project-overview)
- [Data Description](#data-description)
- [Data Source](#data-source)
- [Analysis & Approach](#analysis--approach)
- [Results & Findings](#results--findings)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Data Description

The dataset used in this project contains information on life expectancy and health expenditure across multiple countries. The primary columns of interest in the dataset include:

- **Country**: The name of the country.
- **Year**: The year the data was recorded.
- **Health Expenditure**: The amount spent on healthcare per capita, measured in USD.
- **Life Expectancy**: The average life expectancy at birth, measured in years.
- **Income Group**: The classification of the country based on its income level (e.g., Low, Lower Middle, Upper Middle, High).
- **Region**: The geographical region to which the country belongs (e.g., Europe, Asia, Africa).

The dataset contains data for multiple years across countries, allowing for both longitudinal and cross-sectional analysis.

## Data Source

The data used in this project is sourced from Kaggle. You can access the dataset through the following link:

- [Life Expectancy and Health Expenditure Data](https://www.kaggle.com/datasets/kumarajarshi/life-expectancy-and-health-expenditure)

## Analysis & Approach

The analysis follows several steps:

### 1. Data Preprocessing
- **Handling Missing Values**: Some countries may have missing data for certain years or variables, so we handle missing values appropriately (either by imputing or dropping rows).
- **Data Cleaning**: We ensure that the data is consistent and remove any anomalies or outliers.
- **Feature Engineering**: If necessary, additional features such as "Health Expenditure per Capita" or "Life Expectancy per Region" are created to improve analysis.

### 2. Exploratory Data Analysis (EDA)
- **Statistical Summary**: We calculate the mean, median, and standard deviation for health expenditure and life expectancy.
- **Correlation Analysis**: We examine the relationship between health expenditure and life expectancy using correlation coefficients.
- **Visualizations**: We use various plots (e.g., scatter plots, bar charts, heatmaps) to visualize the data, such as:
  - Scatter plot of life expectancy vs health expenditure.
  - Box plots for life expectancy across different income groups.
  - Heatmaps for correlation between different variables.

### 3. Statistical Testing
- We perform statistical tests like Pearson’s correlation test or linear regression to measure the strength and direction of the relationship between life expectancy and health expenditure.

### 4. Income Group & Region Analysis
- We segment the data by income group and region to identify if there are specific trends or patterns in these sub-groups.

## Results & Findings

The analysis reveals several insights:

- **Correlation**: There is a positive correlation between health expenditure and life expectancy. Countries with higher healthcare spending tend to have higher life expectancies, though the relationship may not always be linear.
- **Income Group Patterns**: High-income countries generally have higher health expenditure and life expectancy compared to lower-income countries.
- **Regional Insights**: Countries in certain regions (e.g., Europe and North America) show a more consistent increase in both life expectancy and health expenditure, while regions like Sub-Saharan Africa have more variable results.

## Usage

To run this project locally, follow these steps:

### Prerequisites
Ensure you have Python installed on your system. You will also need the following libraries:
- pandas
- numpy
- matplotlib
- seaborn
- scipy

You can install these libraries using pip:

```bash
pip install pandas numpy matplotlib seaborn scipy
```

### Running the Analysis
1. Download the dataset from Kaggle.
2. Clone or download this repository.
3. Place the dataset in the same directory as the project files.
4. Run the `life_expectancy_health_expenditure_analysis.py` script to see the results.

### Visualizations
After running the analysis, you can explore the generated visualizations saved as `.png` or `.jpg` files in the `visualizations/` folder.

## Dependencies

This project was created using the following libraries:
- Python 3.7+
- pandas
- numpy
- matplotlib
- seaborn
- scipy


## License

This project is open-source and available under the [MIT License](LICENSE).
