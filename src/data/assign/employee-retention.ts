import type { Assignment } from "@/data/assign/types";

export const asg: Assignment = {
 "id": "employee-retention",
 "course": "C3 · Hồi quy logistic",
 "title": [
  "Bài tập: Dự đoán nhân viên ở lại hay nghỉ",
  "Assignment: Predicting Employee Retention"
 ],
 "file": "Predicting_Employee_Retention_Starter.ipynb",
 "story": [
  "Starter gốc là dữ liệu nhân sự một công ty công nghệ. Trong Lotus Spa: mỗi dòng là một nhân viên của chuỗi, Attrition = nghỉ việc hay ở lại. Bạn dự đoán ai có nguy cơ nghỉ để chị Lan kịp giữ. Các con số «file của bạn» là số thật tính từ Employee_data.csv (74.610 dòng).",
  "The original starter is a tech company's HR data. In Lotus Spa: each row is a staff member of the chain, Attrition = left or stayed. You predict who is at risk of leaving so chị Lan can retain them. The “your file” numbers are real figures computed from Employee_data.csv (74,610 rows)."
 ],
 "concepts": [
  "d-8a351794bf2d"
 ],
 "cells": [
  {
   "t": "md",
   "s": "# **Predicting Employee Retention**"
  },
  {
   "t": "md",
   "s": "### Objective\n\nThe objective of this assignment is to develop a Logistic Regression model. You will be using this model to analyse and predict binary outcomes based on the input data. This assignment aims to enhance understanding of logistic regression, including its assumptions, implementation, and evaluation, to effectively classify and interpret data.\n"
  },
  {
   "t": "md",
   "s": "### Business Objective\n\nA mid-sized technology company wants to improve its understanding of employee retention to foster a loyal and committed workforce. While the organization has traditionally focused on addressing turnover, it recognises the value of proactively identifying employees likely to stay and understanding the factors contributing to their loyalty.\n\n\nIn this assignment you’ll be building a logistic regression model to predict the likelihood of employee retention based on the data such as demographic details, job satisfaction scores, performance metrics, and tenure. The aim is to provide the HR department with actionable insights to strengthen retention strategies, create a supportive work environment, and increase the overall stability and satisfaction of the workforce."
  },
  {
   "t": "md",
   "s": "## Assignment Tasks\n\nYou need to perform the following steps to complete this assignment:\n1. Data Understanding\n2. Data Cleaning\n3. Train Validation Split\n4. EDA on training data\n5. EDA on validation data [Optional]\n6. Feature Engineering\n7. Model Building\n8. Prediction and Model Evaluation\n\n\n"
  },
  {
   "t": "md",
   "s": "## Data Dictionary\n\nThe data has 24 Columns and 74610 Rows. Following data dictionary provides the description for each column present in dataset:<br>\n\n<table>\n  <thead>\n    <tr>\n      <th>Column Name</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Employee ID</td>\n      <td>A unique identifier assigned to each employee.</td>\n    </tr>\n    <tr>\n      <td>Age</td>\n      <td>The age of the employee, ranging from 18 to 60 years.</td>\n    </tr>\n    <tr>\n      <td>Gender</td>\n      <td>The gender of the employee.</td>\n    </tr>\n    <tr>\n      <td>Years at Company</td>\n      <td>The number of years the employee has been working at the company.</td>\n    </tr>\n    <tr>\n      <td>Monthly Income</td>\n      <td>The monthly salary of the employee, in dollars.</td>\n    </tr>\n    <tr>\n      <td>Job Role</td>\n      <td>The department or role the employee works in, encoded into categories such as Finance, Healthcare, Technology, Education, and Media.</td>\n    </tr>\n    <tr>\n      <td>Work-Life Balance</td>\n      <td>The employee's perceived balance between work and personal life (Poor, Below Average, Good, Excellent).</td>\n    </tr>\n    <tr>\n      <td>Job Satisfaction</td>\n      <td>The employee's satisfaction with their job (Very Low, Low, Medium, High).</td>\n    </tr>\n    <tr>\n      <td>Performance Rating</td>\n      <td>The employee's performance rating (Low, Below Average, Average, High).</td>\n    </tr>\n    <tr>\n      <td>Number of Promotions</td>\n      <td>The total number of promotions the employee has received.</td>\n    </tr>\n     </tr>\n     <tr>\n      <td>Overtime</td>\n      <td>Number of overtime hours.</td>\n    </tr>\n    <tr>\n      <td>Distance from Home</td>\n      <td>The distance between the employee's home and workplace, in miles.</td>\n    </tr>\n    <tr>\n      <td>Education Level</td>\n      <td>The highest education level attained by the employee (High School, Associate Degree, Bachelor’s Degree, Master’s Degree, PhD).</td>\n    </tr>\n    <tr>\n      <td>Marital Status</td>\n      <td>The marital status of the employee (Divorced, Married, Single).</td>\n    </tr>\n     <tr>\n      <td>Number of Dependents</td>\n      <td>Number of dependents the employee has.</td>\n    </tr>\n    <tr>\n      <td>Job Level</td>\n      <td>The job level of the employee (Entry, Mid, Senior).</td>\n    </tr>\n    <tr>\n      <td>Company Size</td>\n      <td>The size of the company the employee works for (Small, Medium, Large).</td>\n    </tr>\n    <tr>\n      <td>Company Tenure (In Months)</td>\n      <td>The total number of years the employee has been working in the industry.</td>\n    </tr>\n    <tr>\n      <td>Remote Work</td>\n      <td>Whether the employee works remotely (Yes or No).</td>\n    </tr>\n    <tr>\n      <td>Leadership Opportunities</td>\n      <td>Whether the employee has leadership opportunities (Yes or No).</td>\n    </tr>\n    <tr>\n      <td>Innovation Opportunities</td>\n      <td>Whether the employee has opportunities for innovation (Yes or No).</td>\n    </tr>\n    <tr>\n      <td>Company Reputation</td>\n      <td>The employee's perception of the company's reputation (Very Poor, Poor, Good, Excellent).</td>\n    </tr>\n    <tr>\n      <td>Employee Recognition</td>\n      <td>The level of recognition the employee receives(Very Low, Low, Medium, High).</td>\n    </tr>\n    <tr>\n      <td>Attrition</td>\n      <td>Whether the employee has left the company.</td>\n    </tr>\n  </tbody>\n</table>\n"
  },
  {
   "t": "md",
   "s": "## **1. Data Understanding**\n\nIn this step, load the dataset and check basic statistics of the data, including preview of data, dimension of data, column descriptions and data types."
  },
  {
   "t": "md",
   "s": "### **1.0 Import Libraries**"
  },
  {
   "t": "code",
   "s": "# Supress unnecessary warnings\nimport warnings\nwarnings.filterwarnings('ignore')"
  },
  {
   "t": "code",
   "s": "# Import the libraries\nimport numpy as np\nimport pandas as pd"
  },
  {
   "t": "md",
   "s": "### **1.1 Load the Data**",
   "ref": "1.1"
  },
  {
   "t": "code",
   "s": "# Load the dataset\n"
  },
  {
   "t": "code",
   "s": "# Check the first few entries\n"
  },
  {
   "t": "code",
   "s": "# Inspect the shape of the dataset\n"
  },
  {
   "t": "code",
   "s": "# Inspect the different columns in the dataset\n"
  },
  {
   "t": "md",
   "s": "### **1.2 Check the basic statistics**",
   "ref": "1.2"
  },
  {
   "t": "code",
   "s": "# Check the summary of the dataset\n"
  },
  {
   "t": "md",
   "s": "### **1.3 Check the data type of columns**",
   "ref": "1.3"
  },
  {
   "t": "code",
   "s": "# Check the info to see the types of the feature variables and the null values present\n"
  },
  {
   "t": "md",
   "s": "## **2. Data Cleaning** <font color = red>[15 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **2.1 Handle the missing values** <font color = red>[10 marks]</font>"
  },
  {
   "t": "md",
   "s": "2.1.1 Check the number of missing values <font color=\"red\">[2 Mark]</font>",
   "ref": "2.1.1"
  },
  {
   "t": "code",
   "s": "# Check the number of missing values in each column\n"
  },
  {
   "t": "md",
   "s": "2.1.2 Check the percentage of missing values <font color=\"red\">[2 Marks]</font>",
   "ref": "2.1.2"
  },
  {
   "t": "code",
   "s": "# Check the percentage of missing values in each column\n"
  },
  {
   "t": "md",
   "s": "2.1.3 Handle rows with missing values <font color=\"red\">[4 Marks]</font>",
   "ref": "2.1.3"
  },
  {
   "t": "code",
   "s": "# Handle the missing value rows in the column\n"
  },
  {
   "t": "md",
   "s": "2.1.4 Check percentage of remaning data after missing values are removed <font color=\"red\">[2 Mark]</font>",
   "ref": "2.1.4"
  },
  {
   "t": "code",
   "s": "# Check the percentage of remaining data after missing values are removed\n"
  },
  {
   "t": "md",
   "s": "### **2.2 Identify and handle redundant values within categorical columns (if any)** <font color = red>[3 marks]</font>",
   "ref": "2.2"
  },
  {
   "t": "md",
   "s": "Examine the categorical columns to determine if any value or column needs to be treated"
  },
  {
   "t": "code",
   "s": "# Write a function to display the categorical columns with their unique values and check for redundant values\n"
  },
  {
   "t": "code",
   "s": "# Check the data\n"
  },
  {
   "t": "md",
   "s": "### **2.3 Drop redundant columns** <font color = red>[2 marks]</font>",
   "ref": "2.3"
  },
  {
   "t": "code",
   "s": "# Drop redundant columns which are not required for modelling\n"
  },
  {
   "t": "code",
   "s": "# Check first few rows of data\n"
  },
  {
   "t": "md",
   "s": "## **3. Train-Validation Split** <font color = red>[5 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **3.1 Import required libraries**",
   "ref": "3.1"
  },
  {
   "t": "code",
   "s": "# Import Train Test Split\n"
  },
  {
   "t": "md",
   "s": "### **3.2 Define feature and target variables** <font color = red>[2 Mark]</font>",
   "ref": "3.2"
  },
  {
   "t": "code",
   "s": "# Put all the feature variables in X\n\n# Put the target variable in y\n"
  },
  {
   "t": "md",
   "s": "### **3.3 Split the data** <font color=\"red\">[3 Marks]</font>",
   "ref": "3.3"
  },
  {
   "t": "code",
   "s": "# Split the data into 70% train data and 30% validation data\n"
  },
  {
   "t": "md",
   "s": "## **4. EDA on training data** <font color = red>[20 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **4.1 Perform univariate analysis** <font color = red>[6 marks]</font>"
  },
  {
   "t": "md",
   "s": "Perform univariate analysis on training data for all the numerical columns.\n\n\n"
  },
  {
   "t": "md",
   "s": "4.1.1 Select numerical columns from training data <font color = \"red\">[1 Mark]</font>",
   "ref": "4.1.1"
  },
  {
   "t": "code",
   "s": "# Select numerical columns\n"
  },
  {
   "t": "md",
   "s": "4.1.2 Plot distribution of numerical columns <font color = \"red\">[5 Marks]</font>",
   "ref": "4.1.2"
  },
  {
   "t": "code",
   "s": "# Plot all the numerical columns to understand their distribution\n\n# Import necessary libraries\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n"
  },
  {
   "t": "md",
   "s": "### **4.2 Perform correlation analysis** <font color=\"red\">[4 Marks]</font>",
   "ref": "4.2"
  },
  {
   "t": "md",
   "s": "Check the correlation among different numerical variables."
  },
  {
   "t": "code",
   "s": "# Create correlation matrix for numerical columns\n\n# Plot Heatmap of the correlation matrix\n"
  },
  {
   "t": "md",
   "s": "### **4.3 Check class balance** <font color=\"red\">[2 Marks]</font>",
   "ref": "4.3"
  },
  {
   "t": "md",
   "s": "Check the distribution of target variable in training set to check class balance."
  },
  {
   "t": "code",
   "s": "# Plot a bar chart to check class balance\n"
  },
  {
   "t": "md",
   "s": "### **4.4 Perform bivariate analysis** <font color=\"red\">[8 Marks]</font>",
   "ref": "4.4"
  },
  {
   "t": "md",
   "s": "Perform bivariate analysis on training data between all the categorical columns and target variable to  analyse how the categorical variables influence the target variable."
  },
  {
   "t": "code",
   "s": "# Plot distribution for each categorical column with target variable\n"
  },
  {
   "t": "md",
   "s": "## **5. EDA on validation data** <font color = red>[OPTIONAL]</font>"
  },
  {
   "t": "md",
   "s": "### **5.1 Perform univariate analysis**"
  },
  {
   "t": "md",
   "s": "Perform univariate analysis on validation data for all the numerical columns.\n"
  },
  {
   "t": "md",
   "s": "5.1.1 Select numerical columns from validation data",
   "ref": "5.1.1"
  },
  {
   "t": "code",
   "s": "# Select numerical columns\n"
  },
  {
   "t": "md",
   "s": "5.1.2 Plot distribution of numerical columns",
   "ref": "5.1.2"
  },
  {
   "t": "code",
   "s": "# Plot all the numerical columns to understand their distribution\n"
  },
  {
   "t": "md",
   "s": "### **5.2 Perform correlation analysis**",
   "ref": "5.2"
  },
  {
   "t": "md",
   "s": "Check the correlation among different numerical variables."
  },
  {
   "t": "code",
   "s": "# Create correlation matrix for numerical columns\n\n# Plot Heatmap of the correlation matrix\n"
  },
  {
   "t": "md",
   "s": "### **5.3 Check class balance**",
   "ref": "5.3"
  },
  {
   "t": "md",
   "s": "Check the distribution of target variable in validation data to check class balance."
  },
  {
   "t": "code",
   "s": "# Plot a bar chart to check class balance\n"
  },
  {
   "t": "md",
   "s": "### **5.4 Perform bivariate analysis**",
   "ref": "5.4"
  },
  {
   "t": "md",
   "s": "Perform bivariate analysis on validation data between all the categorical columns and target variable to analyse how the categorical variables influence the target variable."
  },
  {
   "t": "code",
   "s": "# Plot distribution for each categorical column with target variable\n"
  },
  {
   "t": "md",
   "s": "## **6. Feature Engineering** <font color = red>[20 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **6.1 Dummy variable creation** <font color = red>[15 marks]</font>\n\n\nThe next step is to deal with the categorical variables present in the data."
  },
  {
   "t": "md",
   "s": "6.1.1 Identify categorical columns where dummy variables are required <font color=\"red\">[1 Mark]</font>",
   "ref": "6.1.1"
  },
  {
   "t": "code",
   "s": "# Check the categorical columns\n"
  },
  {
   "t": "md",
   "s": "6.1.2 Create dummy variables for independent columns in training set <font color=\"red\">[3 Marks]</font>",
   "ref": "6.1.2"
  },
  {
   "t": "code",
   "s": "# Create dummy variables using the 'get_dummies' for independent columns\n\n# Add the results to the master DataFrame\n"
  },
  {
   "t": "md",
   "s": "Now, drop the original categorical columns and check the DataFrame"
  },
  {
   "t": "code",
   "s": "# Drop the original categorical columns and check the DataFrame\n"
  },
  {
   "t": "md",
   "s": "6.1.3 Create dummy variables for independent columns in validation set <font color=\"red\">[3 Marks]</font>",
   "ref": "6.1.3"
  },
  {
   "t": "code",
   "s": "# Create dummy variables using the 'get_dummies' for independent columns\n\n# Add the results to the master DataFrame\n"
  },
  {
   "t": "md",
   "s": "Now, drop the original categorical columns and check the DataFrame"
  },
  {
   "t": "code",
   "s": "# Drop categorical columns and check the DataFrame\n"
  },
  {
   "t": "md",
   "s": "6.1.4 Create DataFrame for dependent column in both training and validation set <font color = \"red\">[1 Mark]</font>",
   "ref": "6.1.4"
  },
  {
   "t": "code",
   "s": "# Convert y_train and y_validation to DataFrame to create dummy variables\n"
  },
  {
   "t": "md",
   "s": "6.1.5 Create dummy variables for dependent column in training set <font color=\"red\">[3 Marks]</font>",
   "ref": "6.1.5"
  },
  {
   "t": "code",
   "s": "# Create dummy variables using the 'get_dummies' for dependent column\n"
  },
  {
   "t": "md",
   "s": "6.1.6 Create dummy variable for dependent column in validation set <font color = \"red\">[3 Marks]</font>",
   "ref": "6.1.6"
  },
  {
   "t": "code",
   "s": "# Create dummy variables using the 'get_dummies' for dependent column\n"
  },
  {
   "t": "md",
   "s": "6.1.7 Drop redundant columns <font color=\"red\">[1 Mark]</font>",
   "ref": "6.1.7"
  },
  {
   "t": "code",
   "s": "# Drop redundant columns from both train and validation\n"
  },
  {
   "t": "md",
   "s": "### **6.2 Feature scaling** <font color = red>[5 marks]</font>\n\nApply feature scaling to the numeric columns to bring them to a common range and ensure consistent scaling."
  },
  {
   "t": "md",
   "s": "6.2.1 Import required libraries <font color=\"red\">[1 Mark]</font>",
   "ref": "6.2.1"
  },
  {
   "t": "code",
   "s": "# Import the necessary scaling tool from scikit-learn\n"
  },
  {
   "t": "md",
   "s": "6.2.2 Scale the numerical features <font color=\"red\">[4 Marks]</font>",
   "ref": "6.2.2"
  },
  {
   "t": "code",
   "s": "# Scale the numeric features present in the training set\n\n# Scale the numerical features present in the validation set\n"
  },
  {
   "t": "md",
   "s": "## **7. Model Building** <font color = red>[40 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **7.1 Feature selection** <font color = red>[5 marks]</font>\n\nAs there are a lot of variables present in the data, Recursive Feature Elimination (RFE) will be used to select the most influential features for building the model."
  },
  {
   "t": "md",
   "s": "7.1.1 Import required libraries <font color=\"red\">[1 Mark]</font>",
   "ref": "7.1.1"
  },
  {
   "t": "code",
   "s": "# Import 'LogisticRegression' and create a LogisticRegression object\n"
  },
  {
   "t": "md",
   "s": "7.1.2 Import RFE  and select 15 variables <font color=\"red\">[3 Mark]</font>",
   "ref": "7.1.2"
  },
  {
   "t": "code",
   "s": "# Import RFE and select 15 variables\n"
  },
  {
   "t": "code",
   "s": "# Display the features selected by RFE\n"
  },
  {
   "t": "md",
   "s": "7.1.3 Store the selected features <font color=\"red\">[1 Mark]</font>\n\n\n",
   "ref": "7.1.3"
  },
  {
   "t": "code",
   "s": "# Put columns selected by RFE into variable 'col'\n"
  },
  {
   "t": "md",
   "s": "### **7.2 Building Logistic Regression Model** <font color = red>[20 marks]</font>\n\nNow that you have selected the variables through RFE, use these features to build a logistic regression model with statsmodels. This will allow you to assess the statistical aspects, such as p-values and VIFs, which are important for checking multicollinearity and ensuring that the predictors are not highly correlated with each other, as this could distort the model's coefficients."
  },
  {
   "t": "md",
   "s": "7.2.1 Select relevant columns on training set <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.1"
  },
  {
   "t": "code",
   "s": "# Select only the columns selected by RFE\n"
  },
  {
   "t": "code",
   "s": "# View the training data\n"
  },
  {
   "t": "md",
   "s": "7.2.2 Add constant to training set <font color = \"red\">[1 Mark]</font>",
   "ref": "7.2.2"
  },
  {
   "t": "code",
   "s": "# Import statsmodels and add constant to training set\n"
  },
  {
   "t": "md",
   "s": "7.2.3 Fit logistic regression model <font color=\"red\">[3 Marks]</font>",
   "ref": "7.2.3"
  },
  {
   "t": "code",
   "s": "# Fit a logistic regression model on X_train after adding a constant and output the summary\n"
  },
  {
   "t": "md",
   "s": "**Model Interpretation**\n\nThe output summary table  will provide the features used for building model along with coefficient of each of the feature and their p-value. The p-value in a logistic regression model is used to assess the statistical significance of each coefficient. Lesser the p-value, more significant the feature is in the model.\n\nA positive coefficient will indicate that an increase in the value of feature would increase the odds of the event occurring. On the other hand, a negative coefficient means the opposite, i.e,  an increase in the value of feature would decrease the odds of the event occurring.\n\n"
  },
  {
   "t": "md",
   "s": "7.2.4 Evaluate VIF of features <font color=\"red\">[3 Marks]</font>",
   "ref": "7.2.4"
  },
  {
   "t": "code",
   "s": "# Import 'variance_inflation_factor'\nfrom statsmodels.stats.outliers_influence import variance_inflation_factor"
  },
  {
   "t": "code",
   "s": "# Make a VIF DataFrame for all the variables present\n"
  },
  {
   "t": "md",
   "s": "Proceed to the next step if p-values and VIFs are within acceptable ranges.  If you observe high p-values or VIFs, create new cells to drop the features and retrain the model."
  },
  {
   "t": "md",
   "s": "7.2.5 Make predictions on training set <font color = \"red\">[2 Marks]</font>",
   "ref": "7.2.5"
  },
  {
   "t": "code",
   "s": "# Predict the probabilities on the training set\n"
  },
  {
   "t": "md",
   "s": "7.2.6 Format the prediction output <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.6"
  },
  {
   "t": "code",
   "s": "# Reshape it into an array\n"
  },
  {
   "t": "md",
   "s": "7.2.7 Create a DataFrame with the actual stayed flag and the predicted probabilities <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.7"
  },
  {
   "t": "code",
   "s": "# Create a new DataFrame containing the actual stayed flag and the probabilities predicted by the model\n"
  },
  {
   "t": "md",
   "s": "7.2.8 Create a new column 'Predicted' with 1 if predicted probabilities are greater than 0.5 else 0 <font color = \"red\">[1 Mark]</font>",
   "ref": "7.2.8"
  },
  {
   "t": "code",
   "s": "# Create a new column 'Predicted' with 1 if predicted probabilities are greater than 0.5 else 0\n"
  },
  {
   "t": "md",
   "s": "**Evaluation of performance of Model**\n\nEvaluate the performance of the model based on the predictions made on the training set.\n"
  },
  {
   "t": "md",
   "s": "7.2.9 Check the accuracy of the model based on the predictions made on the training set <font color = \"red\">[1 Mark]</font>",
   "ref": "7.2.9"
  },
  {
   "t": "code",
   "s": "# Import metrics from sklearn for evaluation\nfrom sklearn import metrics\n\n# Check the overall accuracy\n"
  },
  {
   "t": "md",
   "s": "7.2.10 Create a confusion matrix based on the predictions made on the training set <font color=\"red\">[1 mark]</font>",
   "ref": "7.2.10"
  },
  {
   "t": "code",
   "s": "# Create confusion matrix\n"
  },
  {
   "t": "md",
   "s": "7.2.11 Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.11"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "7.2.12 Calculate sensitivity and specificity of model  <font color=\"red\">[2 Marks]</font>",
   "ref": "7.2.12"
  },
  {
   "t": "code",
   "s": "# Calculate sensitivity\n"
  },
  {
   "t": "code",
   "s": "# Calculate specificity"
  },
  {
   "t": "md",
   "s": "7.2.13 Calculate precision and recall of model <font color=\"red\">[2 Marks]</font>",
   "ref": "7.2.13"
  },
  {
   "t": "code",
   "s": "# Calculate precision\n"
  },
  {
   "t": "code",
   "s": "# Calculate recall\n"
  },
  {
   "t": "md",
   "s": "### **7.3 Find the optimal cutoff** <font color = red>[15 marks]</font>\n\nFind the optimal cutoff to improve model performance. While a default threshold of 0.5 was used for initial evaluation, optimising this threshold can enhance the model's performance.\n\nFirst, plot the ROC curve and check AUC.\n\n"
  },
  {
   "t": "md",
   "s": "7.3.1 Plot ROC curve <font color=\"red\">[3 Marks]</font>",
   "ref": "7.3.1"
  },
  {
   "t": "code",
   "s": "# Define ROC function\n"
  },
  {
   "t": "code",
   "s": "# Call the ROC function\n"
  },
  {
   "t": "md",
   "s": "**Sensitivity and Specificity tradeoff**\n\nCheck sensitivity and specificity tradeoff to find the optimal cutoff point."
  },
  {
   "t": "md",
   "s": "7.3.2 Predict on training set at various probability cutoffs <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.2"
  },
  {
   "t": "code",
   "s": "# Predict on training data by creating columns with different probability cutoffs to explore the impact of cutoff on model performance\n"
  },
  {
   "t": "md",
   "s": "7.3.3 Plot for accuracy, sensitivity, specificity at different probability cutoffs <font color=\"red\">[2 Marks]</font>",
   "ref": "7.3.3"
  },
  {
   "t": "code",
   "s": "# Create a DataFrame to see the values of accuracy, sensitivity, and specificity at different values of probability cutoffs\n"
  },
  {
   "t": "code",
   "s": "# Plot accuracy, sensitivity, and specificity at different values of probability cutoffs\n"
  },
  {
   "t": "md",
   "s": "7.3.4 Create a column for final prediction based on the optimal cutoff <font color=\"red\">[2 Marks]</font>",
   "ref": "7.3.4"
  },
  {
   "t": "code",
   "s": "# Create a column for final prediction based on the optimal cutoff\n"
  },
  {
   "t": "md",
   "s": "7.3.5 Calculate model's accuracy <font color=\"red\">[1Mark]</font>",
   "ref": "7.3.5"
  },
  {
   "t": "code",
   "s": "# Calculate the accuracy\n"
  },
  {
   "t": "md",
   "s": "7.3.6 Create confusion matrix <font color=\"red\">[1Mark]</font>",
   "ref": "7.3.6"
  },
  {
   "t": "code",
   "s": "# Create the confusion matrix once again\n"
  },
  {
   "t": "md",
   "s": "7.3.7 Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1Mark]</font>",
   "ref": "7.3.7"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "7.3.8 Calculate sensitivity and specificity of the model <font color=\"red\">[1Mark]</font>",
   "ref": "7.3.8"
  },
  {
   "t": "code",
   "s": "# Calculate Sensitivity\n"
  },
  {
   "t": "code",
   "s": "# Calculate Specificity\n"
  },
  {
   "t": "md",
   "s": "7.3.9 Calculate precision and recall of the model <font color=\"red\">[1Mark]</font>",
   "ref": "7.3.9"
  },
  {
   "t": "code",
   "s": "# Calculate Precision\n"
  },
  {
   "t": "code",
   "s": "# Calculate Recall\n"
  },
  {
   "t": "md",
   "s": "**Precision and Recall tradeoff**\n\nCheck optimal cutoff value by plotting precision-recall curve, and adjust the cutoff based on the precision and recall tradeoff if required."
  },
  {
   "t": "code",
   "s": "# Import precision-recall curve function\nfrom sklearn.metrics import precision_recall_curve"
  },
  {
   "t": "code",
   "s": "# Check actual and predicted values from initial model\n"
  },
  {
   "t": "md",
   "s": "7.3.10 Plot precision-recall curve <font color=\"red\">[2 Marks]</font>",
   "ref": "7.3.10"
  },
  {
   "t": "code",
   "s": "# Plot precision-recall curve\n"
  },
  {
   "t": "md",
   "s": "## **8. Prediction and Model Evaluation** <font color = red>[30 marks]</font>\n\nUse the model from the previous step to make predictions on the validation set with the optimal cutoff. Then evaluate the model's performance using metrics such as accuracy, sensitivity, specificity, precision, and recall."
  },
  {
   "t": "md",
   "s": "### **8.1 Make predictions over validation set** <font color = red>[15 marks]</font>"
  },
  {
   "t": "md",
   "s": "8.1.1 Select relevant features for validation set <font color=\"red\">[2 Marks]</font>\n\n",
   "ref": "8.1.1"
  },
  {
   "t": "code",
   "s": "# Select the relevant features for validation set\n"
  },
  {
   "t": "md",
   "s": "8.1.2 Add constant to X_validation <font color=\"red\">[2 Marks]</font>",
   "ref": "8.1.2"
  },
  {
   "t": "code",
   "s": "# Add constant to X_validation\n"
  },
  {
   "t": "md",
   "s": "8.1.3 Make predictions over validation set <font color=\"red\">[3 Marks]</font>",
   "ref": "8.1.3"
  },
  {
   "t": "code",
   "s": "# Make predictions on the validation set and store it in the variable 'y_validation_pred'\n\n# View predictions\n"
  },
  {
   "t": "md",
   "s": "8.1.4 Create DataFrame with actual values and predicted values for validation set <font color=\"red\">[5 Marks]</font>",
   "ref": "8.1.4"
  },
  {
   "t": "code",
   "s": "# Convert 'y_validation_pred' to a DataFrame 'predicted_probability'\n\n# Convert 'y_validation' to DataFrame 'actual'\n\n# Remove index from both DataFrames 'actual' and 'predicted_probability' to append them side by side\n"
  },
  {
   "t": "md",
   "s": "8.1.5 Predict final prediction based on the cutoff value <font color=\"red\">[3 Marks]</font>",
   "ref": "8.1.5"
  },
  {
   "t": "code",
   "s": "# Make predictions on the validation set using the optimal cutoff and store it in a column 'final_prediction'\n\n# Check the DataFrame\n"
  },
  {
   "t": "md",
   "s": "### **8.2 Calculate accuracy of the model** <font color = red>[2 marks]</font>",
   "ref": "8.2"
  },
  {
   "t": "code",
   "s": "# Calculate the overall accuracy\n"
  },
  {
   "t": "md",
   "s": "### **8.3 Create confusion matrix and create variables for true positive, true negative, false positive and false negative** <font color = red>[5 marks]</font>",
   "ref": "8.3"
  },
  {
   "t": "code",
   "s": "# Create confusion matrix\n"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "### **8.4 Calculate sensitivity and specificity** <font color = red>[4 marks]</font>",
   "ref": "8.4"
  },
  {
   "t": "code",
   "s": "# Calculate sensitivity\n"
  },
  {
   "t": "code",
   "s": "# Calculate specificity\n"
  },
  {
   "t": "md",
   "s": "### **8.5 Calculate precision and recall** <font color = red>[4 marks]</font>",
   "ref": "8.5"
  },
  {
   "t": "code",
   "s": "# Calculate precision\n"
  },
  {
   "t": "code",
   "s": "# Calculate recall\n"
  },
  {
   "t": "md",
   "s": "## Conclusion\n\n"
  }
 ],
 "guides": {
  "1.1": {
   "vi": {
    "think": "Đọc file CSV vào DataFrame, in vài dòng và kích thước để biết mình đang có gì.",
    "steps": [
     "pd.read_csv đường dẫn Employee_data.csv.",
     "head() xem vài dòng đầu, shape xem số dòng và cột.",
     "File của bạn có 74.610 dòng và 24 cột."
    ],
    "code": "df = pd.read_csv('Employee_data.csv')\nprint(df.shape)\ndf.head()",
    "lotus": "Mỗi dòng là một nhân viên của chuỗi Lotus Spa (kỹ thuật viên, lễ tân, quản lý), mỗi cột là một thông tin hồ sơ về họ. Cột cuối Attrition cho biết họ ở lại hay nghỉ.",
    "trap": "Đường dẫn file sai thì read_csv báo FileNotFoundError. Kiểm tra file nằm cạnh notebook."
   },
   "en": {
    "think": "Read the CSV into a DataFrame, print a few rows and the size to see what you have.",
    "steps": [
     "pd.read_csv on Employee_data.csv.",
     "head() for the first rows, shape for rows and columns.",
     "Your file has 74,610 rows and 24 columns."
    ],
    "code": "df = pd.read_csv('Employee_data.csv')\nprint(df.shape)\ndf.head()",
    "lotus": "Each row is a Lotus Spa staff member (therapist, receptionist, manager), each column a piece of their record. The last column Attrition says whether they stayed or left.",
    "trap": "A wrong path raises FileNotFoundError. Check the file sits next to the notebook."
   }
  },
  "1.2": {
   "vi": {
    "think": "Xem thống kê mô tả để biết thang đo từng cột số và có giá trị lạ không.",
    "steps": [
     "df.describe() cho cột số.",
     "Nhìn count: nếu nhỏ hơn 74.610 là cột có ô trống.",
     "Nhìn max/min xem có giá trị phi lý không."
    ],
    "code": "df.describe()",
    "lotus": "Trong file của bạn Distance from Home chỉ có 72.698 giá trị (thiếu 1.912) và Company Tenure có 72.197 (thiếu 2.413). Tuổi từ 18 đến 59, lương tháng trung bình khoảng 7.345.",
    "trap": "describe() mặc định chỉ hiển thị cột số, cột chữ không xuất hiện."
   },
   "en": {
    "think": "Look at summary statistics to see each numeric column's scale and any odd values.",
    "steps": [
     "df.describe() for numeric columns.",
     "Look at count: smaller than 74,610 means blanks.",
     "Look at max/min for impossible values."
    ],
    "code": "df.describe()",
    "lotus": "In your file Distance from Home has only 72,698 values (1,912 missing) and Company Tenure 72,197 (2,413 missing). Age runs 18 to 59, mean monthly income about 7,345.",
    "trap": "describe() shows numeric columns only by default; text columns do not appear."
   }
  },
  "1.3": {
   "vi": {
    "think": "Xem kiểu dữ liệu từng cột để biết cột nào là số, cột nào là chữ.",
    "steps": [
     "df.info().",
     "Đếm số cột object/str: đó là các cột nhóm sẽ cần dummy ở bước 6.",
     "Chú ý cột nào đúng ra là nhóm nhưng đang là số."
    ],
    "code": "df.info()",
    "lotus": "Giới tính, vị trí công việc, mức hài lòng, làm thêm giờ... là chữ. Tuổi, lương, số lần thăng chức là số.",
    "trap": "Mã nhân viên là số nhưng không có ý nghĩa tính toán: đừng đưa nó vào mô hình."
   },
   "en": {
    "think": "Check each column's data type to know which are numeric and which text.",
    "steps": [
     "df.info().",
     "Count object/str columns: those are categorical and will need dummies in step 6.",
     "Notice any column that should be categorical but is numeric."
    ],
    "code": "df.info()",
    "lotus": "Gender, job role, satisfaction, overtime... are text. Age, income, promotions are numbers.",
    "trap": "Employee ID is numeric but meaningless for calculation: do not feed it to the model."
   }
  },
  "2.1.1": {
   "vi": {
    "think": "Đếm ô trống ở mỗi cột.",
    "steps": [
     "df.isnull().sum().",
     "Chỉ hai cột có thiếu: Distance from Home (1.912) và Company Tenure (2.413)."
    ],
    "code": "df.isnull().sum()",
    "lotus": "Hồ sơ nhân viên thiếu khoảng cách từ nhà đến chi nhánh và thâm niên: chị Lan chưa nhập đủ.",
    "trap": "isnull().sum() không đếm ô chứa chữ như «N/A». Với file này không có, nhưng hãy nhớ kiểm tra."
   },
   "en": {
    "think": "Count blanks in each column.",
    "steps": [
     "df.isnull().sum().",
     "Only two columns have gaps: Distance from Home (1,912) and Company Tenure (2,413)."
    ],
    "code": "df.isnull().sum()",
    "lotus": "Staff records miss the distance from home to the branch and tenure: chị Lan did not fill them all in.",
    "trap": "isnull().sum() does not count text like “N/A”. This file has none, but remember to check."
   }
  },
  "2.1.2": {
   "vi": {
    "think": "Đổi số ô trống thành phần trăm để quyết định xử lý.",
    "steps": [
     "df.isnull().mean() * 100.",
     "File của bạn: Distance 2,56%, Tenure 3,23%."
    ],
    "code": "(df.isnull().mean() * 100).round(2)",
    "lotus": "Thiếu 2 đến 3% là ít. Bỏ các dòng này không làm hao đáng kể số nhân viên.",
    "trap": "Nhìn số đếm 1.912 mà không so với tổng 74.610 dễ đánh giá sai mức độ."
   },
   "en": {
    "think": "Turn the blank counts into percentages to decide how to handle them.",
    "steps": [
     "df.isnull().mean() * 100.",
     "Your file: Distance 2.56%, Tenure 3.23%."
    ],
    "code": "(df.isnull().mean() * 100).round(2)",
    "lotus": "2 to 3% missing is little. Dropping those rows does not lose many staff.",
    "trap": "Looking at 1,912 without comparing to the 74,610 total makes it easy to misjudge the scale."
   }
  },
  "2.1.3": {
   "vi": {
    "think": "Xử lý dòng thiếu. Vì tỷ lệ nhỏ, cách đơn giản và an toàn là bỏ các dòng đó.",
    "steps": [
     "df = df.dropna().",
     "Ghi rõ lý do: thiếu ít, không có mẫu hình lệch.",
     "Phương án khác là điền trung bình/trung vị, nhưng bài này cần bỏ."
    ],
    "code": "df = df.dropna()\ndf.shape",
    "lotus": "Bỏ những nhân viên thiếu thông tin thay vì đoán khoảng cách nhà của họ.",
    "trap": "Gọi dropna() mà không gán lại df thì bảng không đổi."
   },
   "en": {
    "think": "Handle the rows with gaps. Since the share is small, the simple and safe way is to drop them.",
    "steps": [
     "df = df.dropna().",
     "State the reason: few missing, no skewed pattern.",
     "The alternative is imputing mean/median, but here dropping is expected."
    ],
    "code": "df = df.dropna()\ndf.shape",
    "lotus": "Drop staff with missing info instead of guessing their distance from home.",
    "trap": "Calling dropna() without assigning back leaves the table unchanged."
   }
  },
  "2.1.4": {
   "vi": {
    "think": "Tính lại phần dữ liệu còn lại sau khi bỏ dòng thiếu.",
    "steps": [
     "len(df) / 74610 * 100.",
     "File của bạn còn 70.635 dòng, khoảng 94,7%."
    ],
    "code": "print(len(df), round(len(df) / 74610 * 100, 2))",
    "lotus": "Còn gần 95% nhân viên, đủ nhiều để mô hình tin cậy.",
    "trap": "Dùng số 74.610 cố định thay vì kích thước ban đầu đã lưu làm sai khi dữ liệu thay đổi. Lưu n_ban_dau trước."
   },
   "en": {
    "think": "Compute how much data remains after dropping the rows with gaps.",
    "steps": [
     "len(df) / 74610 * 100.",
     "Your file keeps 70,635 rows, about 94.7%."
    ],
    "code": "print(len(df), round(len(df) / 74610 * 100, 2))",
    "lotus": "Nearly 95% of staff remain, plenty for a reliable model.",
    "trap": "Hard-coding 74,610 breaks if the data changes. Save the original size first."
   }
  },
  "2.2": {
   "vi": {
    "think": "Tìm giá trị thừa hoặc lỗi trong cột nhóm: cùng một thứ viết hai kiểu, ký tự lỗi.",
    "steps": [
     "Với mỗi cột chữ, in unique() hoặc value_counts().",
     "File của bạn: Education Level có chữ lỗi «Bachelorâ€™s Degree», «Masterâ€™s Degree» do mã hóa ký tự (dấu ’ bị vỡ).",
     "Sửa bằng replace, hoặc ghi chú nếu bạn giữ nguyên (miễn nhất quán)."
    ],
    "code": "for c in df.select_dtypes(include='object').columns:\n    print(c, df[c].unique())\ndf['Education Level'] = df['Education Level'].str.replace('â€™', \"'\")",
    "lotus": "Giống bảng chấm công nơi «Cử nhân» có chỗ viết có dấu, chỗ lỗi font: máy coi là hai loại khác nhau.",
    "trap": "Nếu sửa ở train mà quên sửa ở validation thì get_dummies tạo hai bộ cột khác nhau."
   },
   "en": {
    "think": "Find redundant or wrong values in categorical columns: the same thing written two ways, broken characters.",
    "steps": [
     "For each text column, print unique() or value_counts().",
     "Your file: Education Level has garbled text like “Bachelorâ€™s Degree” and “Masterâ€™s Degree” from a character encoding error.",
     "Fix with replace, or note it if you keep it as is (as long as it is consistent)."
    ],
    "code": "for c in df.select_dtypes(include='object').columns:\n    print(c, df[c].unique())\ndf['Education Level'] = df['Education Level'].str.replace('â€™', \"'\")",
    "lotus": "Like a timesheet where “Bachelor” is written with the right accent in one place and a broken font in another: the machine sees two different groups.",
    "trap": "Fixing train but not validation makes get_dummies create two different column sets."
   }
  },
  "2.3": {
   "vi": {
    "think": "Bỏ cột không giúp dự đoán, ví dụ mã nhân viên.",
    "steps": [
     "Employee ID là mã định danh duy nhất, không mang thông tin.",
     "df = df.drop(columns=['Employee ID']).",
     "Ghi lý do cho từng cột bỏ."
    ],
    "code": "df = df.drop(columns=['Employee ID'])\ndf.head()",
    "lotus": "Số thẻ nhân viên không nói gì về việc họ nghỉ hay ở. Giữ lại chỉ làm mô hình nhớ từng người.",
    "trap": "Để mã duy nhất trong X làm mô hình học thuộc lòng, nhìn tốt trên train nhưng sai trên dữ liệu mới."
   },
   "en": {
    "think": "Drop columns that do not help prediction, such as the employee ID.",
    "steps": [
     "Employee ID is a unique identifier carrying no information.",
     "df = df.drop(columns=['Employee ID']).",
     "Write a reason for each column dropped."
    ],
    "code": "df = df.drop(columns=['Employee ID'])\ndf.head()",
    "lotus": "A staff card number says nothing about whether they leave. Keeping it only lets the model memorise individuals.",
    "trap": "Leaving a unique ID in X lets the model memorise: good on train, wrong on new data."
   }
  },
  "3.1": {
   "vi": {
    "think": "Nạp thư viện chia dữ liệu.",
    "steps": [
     "from sklearn.model_selection import train_test_split."
    ],
    "code": "from sklearn.model_selection import train_test_split",
    "lotus": "Chuẩn bị công cụ để để riêng một phần nhân viên cho việc kiểm tra.",
    "trap": "Không có."
   },
   "en": {
    "think": "Import the split helper.",
    "steps": [
     "from sklearn.model_selection import train_test_split."
    ],
    "code": "from sklearn.model_selection import train_test_split",
    "lotus": "Get the tool ready to set aside some staff for testing.",
    "trap": "None."
   }
  },
  "3.2": {
   "vi": {
    "think": "Tách X (các cột đầu vào) và y (Attrition, thứ cần đoán).",
    "steps": [
     "y = df['Attrition'].",
     "X = df.drop(columns=['Attrition']).",
     "Kiểm tra X không còn cột Attrition."
    ],
    "code": "y = df['Attrition']\nX = df.drop(columns=['Attrition'])\nprint(X.shape, y.shape)",
    "lotus": "Câu hỏi: nhân viên này sẽ ở lại hay nghỉ? Đáp án đi riêng một bên.",
    "trap": "Để Attrition lọt vào X làm mô hình đạt độ chính xác gần 100% giả tạo."
   },
   "en": {
    "think": "Separate X (input columns) and y (Attrition, the thing to predict).",
    "steps": [
     "y = df['Attrition'].",
     "X = df.drop(columns=['Attrition']).",
     "Check X no longer has Attrition."
    ],
    "code": "y = df['Attrition']\nX = df.drop(columns=['Attrition'])\nprint(X.shape, y.shape)",
    "lotus": "The question: will this staff member stay or leave? The answer goes separately.",
    "trap": "Letting Attrition slip into X gives a fake near-100% accuracy."
   }
  },
  "3.3": {
   "vi": {
    "think": "Chia 70% train và 30% validation, có random_state để lặp lại được.",
    "steps": [
     "train_test_split(X, y, train_size=0.7, random_state=100).",
     "Bạn có thể thêm stratify=y để giữ tỷ lệ ở/nghỉ.",
     "File của bạn sau khi bỏ dòng thiếu: khoảng 49.400 dòng train và 21.200 validation."
    ],
    "code": "X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, random_state=100)\nprint(len(X_train), len(X_validation))",
    "lotus": "Như để riêng 30% hồ sơ nhân viên để thử dự đoán sau khi học quy luật từ 70% còn lại.",
    "trap": "Chia xong mới làm EDA và làm sạch tiếp. Làm trước thì thông tin validation đã lọt vào quyết định."
   },
   "en": {
    "think": "Split 70% train and 30% validation, with random_state so it is repeatable.",
    "steps": [
     "train_test_split(X, y, train_size=0.7, random_state=100).",
     "You may add stratify=y to keep the stay/leave ratio.",
     "Your file after dropping gaps: about 49,400 train rows and 21,200 validation."
    ],
    "code": "X_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, random_state=100)\nprint(len(X_train), len(X_validation))",
    "lotus": "Like keeping 30% of staff records aside to test predictions after learning the rule from the other 70%.",
    "trap": "Split first, then do EDA and further cleaning. Doing it before lets validation information leak into your decisions."
   }
  },
  "4.1.1": {
   "vi": {
    "think": "Chọn các cột số của tập train.",
    "steps": [
     "X_train.select_dtypes(include='number').columns."
    ],
    "code": "num_cols = X_train.select_dtypes(include=['int64', 'float64']).columns\nnum_cols",
    "lotus": "Tuổi, lương, thâm niên, số lần thăng chức, số người phụ thuộc, khoảng cách từ nhà.",
    "trap": "Đừng lấy cột số từ toàn bộ df, hãy lấy từ X_train."
   },
   "en": {
    "think": "Select the numeric columns of the training set.",
    "steps": [
     "X_train.select_dtypes(include='number').columns."
    ],
    "code": "num_cols = X_train.select_dtypes(include=['int64', 'float64']).columns\nnum_cols",
    "lotus": "Age, income, tenure, promotions, dependents, distance from home.",
    "trap": "Do not take numeric columns from the whole df; take them from X_train."
   }
  },
  "4.1.2": {
   "vi": {
    "think": "Vẽ phân phối từng cột số để thấy hình dạng và điểm xa.",
    "steps": [
     "Histogram từng cột, có thể dùng lưới subplot.",
     "Ghi chú cột nào lệch (Monthly Income có max tới 50.030 trong khi trung bình khoảng 7.345; Number of Dependents tới 15).",
     "Những đỉnh bất thường gợi ý điểm xa hoặc lỗi nhập."
    ],
    "code": "X_train[num_cols].hist(bins=30, figsize=(14, 10))\nplt.show()",
    "lotus": "Lương của hầu hết nhân viên quanh 7.000, nhưng vài người cao gấp bảy lần: có thể là quản lý cấp cao hoặc lỗi nhập.",
    "trap": "Nhìn một biểu đồ không đủ để kết luận lỗi. Đối chiếu với các cột khác như Job Level."
   },
   "en": {
    "think": "Plot each numeric column's distribution to see shape and outliers.",
    "steps": [
     "A histogram per column, using a subplot grid if you like.",
     "Note skewed columns (Monthly Income peaks at 50,030 against a mean near 7,345; Number of Dependents reaches 15).",
     "Odd spikes suggest outliers or entry errors."
    ],
    "code": "X_train[num_cols].hist(bins=30, figsize=(14, 10))\nplt.show()",
    "lotus": "Most staff earn around 7,000, but a few earn seven times more: maybe senior managers or entry errors.",
    "trap": "One chart is not enough to call it an error. Cross-check with other columns like Job Level."
   }
  },
  "4.2": {
   "vi": {
    "think": "Tương quan giữa các cột số, để tìm cặp đi cùng nhau mạnh.",
    "steps": [
     "corr = X_train[num_cols].corr().",
     "sns.heatmap(corr, annot=True, cmap='coolwarm').",
     "Cặp có |tương quan| cao (ví dụ Age với Years at Company) cho thấy thông tin trùng nhau, cần nhớ khi chọn biến."
    ],
    "code": "plt.figure(figsize=(9, 7))\nsns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)\nplt.show()",
    "lotus": "Tuổi và số năm làm ở Lotus Spa thường tăng cùng nhau: nói gần như cùng một điều.",
    "trap": "Tương quan chỉ đo quan hệ đường thẳng giữa hai cột số, không nói lên quan hệ với Attrition."
   },
   "en": {
    "think": "Correlation among numeric columns, to find strongly related pairs.",
    "steps": [
     "corr = X_train[num_cols].corr().",
     "sns.heatmap(corr, annot=True, cmap='coolwarm').",
     "Pairs with high |correlation| (for example Age and Years at Company) carry overlapping information; remember it when selecting features."
    ],
    "code": "plt.figure(figsize=(9, 7))\nsns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)\nplt.show()",
    "lotus": "Age and years at Lotus Spa tend to rise together: saying nearly the same thing.",
    "trap": "Correlation measures only the straight-line relation between two numeric columns, not the link to Attrition."
   }
  },
  "4.3": {
   "vi": {
    "think": "Kiểm tra cân bằng lớp của biến mục tiêu.",
    "steps": [
     "y_train.value_counts(normalize=True).",
     "Vẽ bar chart.",
     "File của bạn gần cân bằng: ở lại khoảng 52%, nghỉ khoảng 48%."
    ],
    "code": "print(y_train.value_counts(normalize=True).round(3))\ny_train.value_counts().plot(kind='bar')",
    "lotus": "Gần một nửa nhân viên nghỉ: số rất cao, nhưng đủ cân để dùng độ chính xác mà không sợ mô hình chỉ đoán «ở lại» cho mọi người.",
    "trap": "Với tập mất cân bằng (95/5) độ chính xác đánh lừa. Ở đây thì không, nhưng vẫn nên xem thêm sensitivity và specificity."
   },
   "en": {
    "think": "Check class balance of the target.",
    "steps": [
     "y_train.value_counts(normalize=True).",
     "Draw a bar chart.",
     "Your file is near balanced: about 52% stayed, 48% left."
    ],
    "code": "print(y_train.value_counts(normalize=True).round(3))\ny_train.value_counts().plot(kind='bar')",
    "lotus": "Almost half of staff leave: a very high number, but balanced enough to use accuracy without fearing the model simply says “stay” for everyone.",
    "trap": "With an imbalanced set (95/5) accuracy misleads. Not here, but still look at sensitivity and specificity."
   }
  },
  "4.4": {
   "vi": {
    "think": "Phân tích hai biến: mỗi cột nhóm ảnh hưởng thế nào đến Attrition.",
    "steps": [
     "Với mỗi cột nhóm vẽ countplot với hue=y_train.",
     "Tìm nhóm có tỷ lệ nghỉ khác hẳn mức chung.",
     "Ghi vài nhận xét: nhóm nào nghỉ nhiều, nhóm nào ở lại."
    ],
    "code": "cat_cols = X_train.select_dtypes(include='object').columns\nfor c in cat_cols:\n    sns.countplot(data=X_train.assign(Attrition=y_train), x=c, hue='Attrition')\n    plt.xticks(rotation=45); plt.show()",
    "lotus": "Nếu nhân viên làm thêm giờ nghỉ nhiều hơn rõ rệt so với người không làm thêm, đó là yếu tố chị Lan có thể can thiệp.",
    "trap": "Đếm số lượng thô dễ đánh lừa khi nhóm có kích thước khác nhau. So tỷ lệ phần trăm trong từng nhóm."
   },
   "en": {
    "think": "Bivariate analysis: how each categorical column affects Attrition.",
    "steps": [
     "For each categorical column draw a countplot with hue=y_train.",
     "Find groups whose leave rate differs clearly from the overall rate.",
     "Write a few observations: which groups leave more, which stay."
    ],
    "code": "cat_cols = X_train.select_dtypes(include='object').columns\nfor c in cat_cols:\n    sns.countplot(data=X_train.assign(Attrition=y_train), x=c, hue='Attrition')\n    plt.xticks(rotation=45); plt.show()",
    "lotus": "If staff who work overtime leave clearly more than those who do not, that is a factor chị Lan can act on.",
    "trap": "Raw counts mislead when groups differ in size. Compare percentages within each group."
   }
  },
  "5.1.1": {
   "vi": {
    "think": "(Tùy chọn) Chọn cột số của validation.",
    "steps": [
     "X_validation.select_dtypes(include='number').columns."
    ],
    "code": "num_cols_v = X_validation.select_dtypes(include=['int64', 'float64']).columns",
    "lotus": "Cùng danh sách cột số như train.",
    "trap": "Không dùng validation để chọn cột; chỉ để so sánh."
   },
   "en": {
    "think": "(Optional) select numeric columns of validation.",
    "steps": [
     "X_validation.select_dtypes(include='number').columns."
    ],
    "code": "num_cols_v = X_validation.select_dtypes(include=['int64', 'float64']).columns",
    "lotus": "The same numeric list as train.",
    "trap": "Do not use validation to choose columns; only to compare."
   }
  },
  "5.1.2": {
   "vi": {
    "think": "(Tùy chọn) Vẽ phân phối cột số ở validation, so với train.",
    "steps": [
     "Histogram từng cột.",
     "So hình dạng với bước 4.1.2."
    ],
    "code": "X_validation[num_cols_v].hist(bins=30, figsize=(14, 10))\nplt.show()",
    "lotus": "Hai tập nên có hình dạng gần nhau.",
    "trap": "Hình khác nhiều giữa hai tập là dấu hiệu chia chưa tốt."
   },
   "en": {
    "think": "(Optional) plot numeric distributions in validation, compared to train.",
    "steps": [
     "A histogram per column.",
     "Compare shape with step 4.1.2."
    ],
    "code": "X_validation[num_cols_v].hist(bins=30, figsize=(14, 10))\nplt.show()",
    "lotus": "The two sets should look alike.",
    "trap": "Very different shapes between the two sets signal a poor split."
   }
  },
  "5.2": {
   "vi": {
    "think": "(Tùy chọn) Tương quan cột số ở validation.",
    "steps": [
     "Làm giống 4.2 trên validation."
    ],
    "code": "sns.heatmap(X_validation[num_cols_v].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)",
    "lotus": "Mẫu tương quan nên giống train.",
    "trap": "Tương quan khác hẳn là dấu hiệu dữ liệu không đồng nhất."
   },
   "en": {
    "think": "(Optional) numeric correlation in validation.",
    "steps": [
     "Repeat 4.2 on validation."
    ],
    "code": "sns.heatmap(X_validation[num_cols_v].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)",
    "lotus": "The correlation pattern should resemble train.",
    "trap": "A very different pattern means inhomogeneous data."
   }
  },
  "5.3": {
   "vi": {
    "think": "(Tùy chọn) Cân bằng lớp ở validation.",
    "steps": [
     "y_validation.value_counts(normalize=True)."
    ],
    "code": "print(y_validation.value_counts(normalize=True).round(3))",
    "lotus": "Tỷ lệ ở/nghỉ ở validation phải gần 52/48 của train.",
    "trap": "Lệch vài điểm phần trăm là bình thường."
   },
   "en": {
    "think": "(Optional) class balance in validation.",
    "steps": [
     "y_validation.value_counts(normalize=True)."
    ],
    "code": "print(y_validation.value_counts(normalize=True).round(3))",
    "lotus": "The stay/leave ratio in validation should be close to train's 52/48.",
    "trap": "A few percentage points of gap is normal."
   }
  },
  "5.4": {
   "vi": {
    "think": "(Tùy chọn) Phân tích hai biến ở validation.",
    "steps": [
     "Làm giống 4.4 trên validation."
    ],
    "code": "cat_cols = X_validation.select_dtypes(include='object').columns\nfor c in cat_cols:\n    sns.countplot(data=X_validation.assign(Attrition=y_validation), x=c, hue='Attrition')\n    plt.xticks(rotation=45); plt.show()",
    "lotus": "Nhóm nghỉ nhiều ở train cũng nên nghỉ nhiều ở validation.",
    "trap": "Nếu chiều ngược nhau, mô hình sẽ không khái quát hóa."
   },
   "en": {
    "think": "(Optional) bivariate analysis in validation.",
    "steps": [
     "Repeat 4.4 on validation."
    ],
    "code": "cat_cols = X_validation.select_dtypes(include='object').columns\nfor c in cat_cols:\n    sns.countplot(data=X_validation.assign(Attrition=y_validation), x=c, hue='Attrition')\n    plt.xticks(rotation=45); plt.show()",
    "lotus": "Groups that leave a lot in train should also leave a lot in validation.",
    "trap": "If the direction reverses, the model will not generalise."
   }
  },
  "6.1.1": {
   "vi": {
    "think": "Xác định cột nhóm cần tạo biến giả (dummy).",
    "steps": [
     "Lấy các cột kiểu chữ của X_train.",
     "Gồm Gender, Job Role, Work-Life Balance, Job Satisfaction, Performance Rating, Overtime, Education Level, Marital Status, Job Level, Company Size, Remote Work, Leadership/Innovation Opportunities, Company Reputation, Employee Recognition."
    ],
    "code": "cat_cols = X_train.select_dtypes(include=['object']).columns\nprint(list(cat_cols))",
    "lotus": "Mọi thông tin chữ trong hồ sơ nhân viên đều phải đổi thành số 0/1 để mô hình dùng được.",
    "trap": "Cột chữ nhưng có thứ tự (mức hài lòng) vẫn có thể dùng dummy, chỉ là mất thông tin thứ tự."
   },
   "en": {
    "think": "Identify the categorical columns that need dummy variables.",
    "steps": [
     "Take the text-type columns of X_train.",
     "They include Gender, Job Role, Work-Life Balance, Job Satisfaction, Performance Rating, Overtime, Education Level, Marital Status, Job Level, Company Size, Remote Work, Leadership/Innovation Opportunities, Company Reputation, Employee Recognition."
    ],
    "code": "cat_cols = X_train.select_dtypes(include=['object']).columns\nprint(list(cat_cols))",
    "lotus": "Every text field in a staff record must become 0/1 numbers before the model can use it.",
    "trap": "Ordered text columns (satisfaction level) can still use dummies, but the order information is lost."
   }
  },
  "6.1.2": {
   "vi": {
    "think": "Tạo biến giả cho X_train.",
    "steps": [
     "pd.get_dummies(X_train[cat_cols], drop_first=True).",
     "drop_first=True bỏ một mức để tránh trùng lặp (đa cộng tuyến hoàn hảo).",
     "Dùng dtype=int để có 0/1 thay vì True/False."
    ],
    "code": "dummy_train = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)\ndummy_train.head()",
    "lotus": "«Overtime = Yes» thành một cột Overtime_Yes bằng 1 nếu có làm thêm giờ, bằng 0 nếu không.",
    "trap": "Không có drop_first thì các cột cộng lại luôn bằng 1: mô hình bị trùng lặp."
   },
   "en": {
    "think": "Create dummy variables for X_train.",
    "steps": [
     "pd.get_dummies(X_train[cat_cols], drop_first=True).",
     "drop_first=True drops one level to avoid duplication (perfect multicollinearity).",
     "Use dtype=int to get 0/1 instead of True/False."
    ],
    "code": "dummy_train = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)\ndummy_train.head()",
    "lotus": "“Overtime = Yes” becomes a column Overtime_Yes equal to 1 if they work overtime, 0 otherwise.",
    "trap": "Without drop_first the columns always sum to 1: the model is redundant."
   }
  },
  "6.1.3": {
   "vi": {
    "think": "Tạo biến giả cho X_validation, cùng cách với train.",
    "steps": [
     "Dùng đúng cat_cols và drop_first như train.",
     "Kiểm tra số cột và tên cột bằng nhau, nếu thiếu thì reindex theo cột train."
    ],
    "code": "dummy_val = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)\ndummy_val = dummy_val.reindex(columns=dummy_train.columns, fill_value=0)",
    "lotus": "Hai sổ nhân viên phải có cùng bộ cột 0/1.",
    "trap": "Một mức chỉ xuất hiện ở một tập làm hai bảng khác cột. reindex xử lý việc đó."
   },
   "en": {
    "think": "Create dummy variables for X_validation the same way as train.",
    "steps": [
     "Use exactly the same cat_cols and drop_first as train.",
     "Check the column count and names match; if not, reindex to train's columns."
    ],
    "code": "dummy_val = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)\ndummy_val = dummy_val.reindex(columns=dummy_train.columns, fill_value=0)",
    "lotus": "The two staff logs must have the same 0/1 columns.",
    "trap": "A level present in only one set gives mismatched columns. reindex fixes it."
   }
  },
  "6.1.4": {
   "vi": {
    "think": "Chuyển y_train và y_validation thành DataFrame để tạo dummy cho biến mục tiêu.",
    "steps": [
     "y_train.to_frame() hoặc pd.DataFrame(y_train).",
     "Làm tương tự cho y_validation."
    ],
    "code": "y_train_df = pd.DataFrame(y_train)\ny_val_df = pd.DataFrame(y_validation)",
    "lotus": "Cột Attrition chữ «Stayed/Left» cũng cần đổi thành 0/1.",
    "trap": "Quên chuyển Series thành DataFrame thì get_dummies trả cột sai tên."
   },
   "en": {
    "think": "Convert y_train and y_validation to DataFrames to create target dummies.",
    "steps": [
     "y_train.to_frame() or pd.DataFrame(y_train).",
     "Do the same for y_validation."
    ],
    "code": "y_train_df = pd.DataFrame(y_train)\ny_val_df = pd.DataFrame(y_validation)",
    "lotus": "The text column Attrition “Stayed/Left” must become 0/1 too.",
    "trap": "Forgetting to make the Series a DataFrame gives get_dummies wrongly named columns."
   }
  },
  "6.1.5": {
   "vi": {
    "think": "Tạo biến giả cho biến mục tiêu ở train.",
    "steps": [
     "pd.get_dummies(y_train_df, drop_first=True).",
     "Cột ra là Attrition_Stayed: 1 = ở lại, 0 = nghỉ.",
     "Chú ý ý nghĩa: mô hình sẽ đoán xác suất ở lại."
    ],
    "code": "y_train_d = pd.get_dummies(y_train_df, drop_first=True, dtype=int)\ny_train_d.head()",
    "lotus": "Mô hình đo xác suất một nhân viên ở lại, nên 1 là ở lại.",
    "trap": "Nhầm 1 là nghỉ làm đảo nghĩa mọi hệ số."
   },
   "en": {
    "think": "Create dummy variables for the target in train.",
    "steps": [
     "pd.get_dummies(y_train_df, drop_first=True).",
     "The resulting column is Attrition_Stayed: 1 = stayed, 0 = left.",
     "Mind the meaning: the model predicts the probability of staying."
    ],
    "code": "y_train_d = pd.get_dummies(y_train_df, drop_first=True, dtype=int)\ny_train_d.head()",
    "lotus": "The model measures the probability a staff member stays, so 1 means stayed.",
    "trap": "Mistaking 1 for left flips the meaning of every coefficient."
   }
  },
  "6.1.6": {
   "vi": {
    "think": "Tạo biến giả cho biến mục tiêu ở validation.",
    "steps": [
     "Làm như 6.1.5 trên y_val_df."
    ],
    "code": "y_val_d = pd.get_dummies(y_val_df, drop_first=True, dtype=int)",
    "lotus": "Cùng cách mã hóa với train.",
    "trap": "Mã hóa ngược với train làm điểm đánh giá vô nghĩa."
   },
   "en": {
    "think": "Create dummy variables for the target in validation.",
    "steps": [
     "Do as 6.1.5 on y_val_df."
    ],
    "code": "y_val_d = pd.get_dummies(y_val_df, drop_first=True, dtype=int)",
    "lotus": "Same encoding as train.",
    "trap": "Encoding opposite to train makes evaluation meaningless."
   }
  },
  "6.1.7": {
   "vi": {
    "think": "Gộp biến giả vào X và bỏ cột chữ gốc.",
    "steps": [
     "pd.concat([X_train, dummy_train], axis=1).",
     "drop(columns=cat_cols).",
     "Làm cùng cách cho validation. Kiểm tra cùng cột."
    ],
    "code": "X_train = pd.concat([X_train.drop(columns=cat_cols), dummy_train], axis=1)\nX_validation = pd.concat([X_validation.drop(columns=cat_cols), dummy_val], axis=1)\nprint(X_train.shape, X_validation.shape)",
    "lotus": "File của bạn có khoảng 41 cột sau bước này.",
    "trap": "Bỏ cột gốc rồi mới concat thì thiếu cột số."
   },
   "en": {
    "think": "Merge dummies into X and drop the original text columns.",
    "steps": [
     "pd.concat([X_train, dummy_train], axis=1).",
     "drop(columns=cat_cols).",
     "Do the same for validation. Check the columns match."
    ],
    "code": "X_train = pd.concat([X_train.drop(columns=cat_cols), dummy_train], axis=1)\nX_validation = pd.concat([X_validation.drop(columns=cat_cols), dummy_val], axis=1)\nprint(X_train.shape, X_validation.shape)",
    "lotus": "Your file has about 41 columns after this step.",
    "trap": "Dropping the originals before concatenating loses the numeric columns."
   }
  },
  "6.2.1": {
   "vi": {
    "think": "Nạp công cụ chuẩn hóa.",
    "steps": [
     "from sklearn.preprocessing import StandardScaler."
    ],
    "code": "from sklearn.preprocessing import StandardScaler",
    "lotus": "Chuẩn bị đưa tuổi, lương, khoảng cách về cùng thang.",
    "trap": "Không có."
   },
   "en": {
    "think": "Import the scaling tool.",
    "steps": [
     "from sklearn.preprocessing import StandardScaler."
    ],
    "code": "from sklearn.preprocessing import StandardScaler",
    "lotus": "Prepare to bring age, income and distance to one scale.",
    "trap": "None."
   }
  },
  "6.2.2": {
   "vi": {
    "think": "Chuẩn hóa cột số: fit trên train, transform trên cả hai.",
    "steps": [
     "scaler = StandardScaler().",
     "X_train[num_cols] = scaler.fit_transform(X_train[num_cols]).",
     "X_validation[num_cols] = scaler.transform(X_validation[num_cols]) (không fit lại)."
    ],
    "code": "scaler = StandardScaler()\nX_train[num_cols] = scaler.fit_transform(X_train[num_cols])\nX_validation[num_cols] = scaler.transform(X_validation[num_cols])",
    "lotus": "Lương tính theo hàng nghìn, số người phụ thuộc tính theo đơn vị: phải về cùng thang thì hệ số so được.",
    "trap": "fit scaler trên validation làm lộ trung bình và độ lệch chuẩn của validation."
   },
   "en": {
    "think": "Scale numeric columns: fit on train, transform both.",
    "steps": [
     "scaler = StandardScaler().",
     "X_train[num_cols] = scaler.fit_transform(X_train[num_cols]).",
     "X_validation[num_cols] = scaler.transform(X_validation[num_cols]) (do not refit)."
    ],
    "code": "scaler = StandardScaler()\nX_train[num_cols] = scaler.fit_transform(X_train[num_cols])\nX_validation[num_cols] = scaler.transform(X_validation[num_cols])",
    "lotus": "Income runs in thousands and dependents in single units: they must share one scale for coefficients to be comparable.",
    "trap": "Fitting the scaler on validation leaks validation's mean and standard deviation."
   }
  },
  "7.1.1": {
   "vi": {
    "think": "Nạp LogisticRegression và tạo đối tượng.",
    "steps": [
     "from sklearn.linear_model import LogisticRegression.",
     "logreg = LogisticRegression()."
    ],
    "code": "from sklearn.linear_model import LogisticRegression\nlogreg = LogisticRegression(max_iter=1000)",
    "lotus": "Mô hình sẽ đoán xác suất một nhân viên ở lại.",
    "trap": "Quên max_iter có thể gặp cảnh báo chưa hội tụ."
   },
   "en": {
    "think": "Import LogisticRegression and create the object.",
    "steps": [
     "from sklearn.linear_model import LogisticRegression.",
     "logreg = LogisticRegression()."
    ],
    "code": "from sklearn.linear_model import LogisticRegression\nlogreg = LogisticRegression(max_iter=1000)",
    "lotus": "The model will predict the probability a staff member stays.",
    "trap": "Forgetting max_iter may produce a not-converged warning."
   }
  },
  "7.1.2": {
   "vi": {
    "think": "Dùng RFE chọn 15 biến quan trọng nhất.",
    "steps": [
     "from sklearn.feature_selection import RFE.",
     "rfe = RFE(estimator=logreg, n_features_to_select=15).",
     "rfe.fit(X_train, y_train_d.values.ravel()).",
     "In biến được chọn bằng rfe.support_."
    ],
    "code": "from sklearn.feature_selection import RFE\nrfe = RFE(estimator=logreg, n_features_to_select=15)\nrfe = rfe.fit(X_train, y_train_d.values.ravel())\nX_train.columns[rfe.support_]",
    "lotus": "Từ 41 cột còn 15. Với file của bạn, các biến thường được chọn gồm Job Level, Marital Status_Single, Remote Work_Yes, Work-Life Balance, Education Level_PhD, Job Satisfaction, Overtime_Yes.",
    "trap": "y phải là mảng một chiều (ravel); đưa vào DataFrame cột báo cảnh báo hình dạng."
   },
   "en": {
    "think": "Use RFE to choose the 15 most important features.",
    "steps": [
     "from sklearn.feature_selection import RFE.",
     "rfe = RFE(estimator=logreg, n_features_to_select=15).",
     "rfe.fit(X_train, y_train_d.values.ravel()).",
     "Print the chosen features via rfe.support_."
    ],
    "code": "from sklearn.feature_selection import RFE\nrfe = RFE(estimator=logreg, n_features_to_select=15)\nrfe = rfe.fit(X_train, y_train_d.values.ravel())\nX_train.columns[rfe.support_]",
    "lotus": "From 41 columns down to 15. In your file the usual picks include Job Level, Marital Status_Single, Remote Work_Yes, Work-Life Balance, Education Level_PhD, Job Satisfaction, Overtime_Yes.",
    "trap": "y must be one-dimensional (ravel); passing a single-column DataFrame raises a shape warning."
   }
  },
  "7.1.3": {
   "vi": {
    "think": "Lưu danh sách biến được chọn vào col.",
    "steps": [
     "col = X_train.columns[rfe.support_]."
    ],
    "code": "col = X_train.columns[rfe.support_]\nlist(col)",
    "lotus": "Đây là 15 yếu tố mô hình sẽ dùng để đoán nhân viên ở hay nghỉ.",
    "trap": "Không có."
   },
   "en": {
    "think": "Store the selected features in col.",
    "steps": [
     "col = X_train.columns[rfe.support_]."
    ],
    "code": "col = X_train.columns[rfe.support_]\nlist(col)",
    "lotus": "These are the 15 factors the model will use to guess stay or leave.",
    "trap": "None."
   }
  },
  "7.2.1": {
   "vi": {
    "think": "Lấy đúng 15 cột đã chọn ở train.",
    "steps": [
     "X_train_sm = X_train[col]."
    ],
    "code": "X_train_rfe = X_train[col]\nX_train_rfe.head()",
    "lotus": "Chỉ giữ 15 yếu tố đã được chọn.",
    "trap": "Chọn nhầm cột (từ validation) làm mô hình lệch."
   },
   "en": {
    "think": "Take exactly the 15 selected columns from train.",
    "steps": [
     "X_train_sm = X_train[col]."
    ],
    "code": "X_train_rfe = X_train[col]\nX_train_rfe.head()",
    "lotus": "Keep only the 15 chosen factors.",
    "trap": "Selecting from validation by mistake skews the model."
   }
  },
  "7.2.2": {
   "vi": {
    "think": "Thêm hằng số (intercept) vì statsmodels không tự thêm.",
    "steps": [
     "import statsmodels.api as sm.",
     "X_train_sm = sm.add_constant(X_train_rfe)."
    ],
    "code": "import statsmodels.api as sm\nX_train_sm = sm.add_constant(X_train_rfe)",
    "lotus": "Hằng số là xác suất cơ bản khi mọi yếu tố ở mức gốc.",
    "trap": "Quên add_constant ép đường qua gốc, hệ số sai."
   },
   "en": {
    "think": "Add the constant (intercept) since statsmodels does not.",
    "steps": [
     "import statsmodels.api as sm.",
     "X_train_sm = sm.add_constant(X_train_rfe)."
    ],
    "code": "import statsmodels.api as sm\nX_train_sm = sm.add_constant(X_train_rfe)",
    "lotus": "The constant is the baseline probability when every factor is at its reference.",
    "trap": "Forgetting add_constant forces the line through the origin, wrong coefficients."
   }
  },
  "7.2.3": {
   "vi": {
    "think": "Huấn luyện hồi quy logistic bằng statsmodels GLM và đọc bảng kết quả.",
    "steps": [
     "sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial()).fit().",
     "print(model.summary()).",
     "Đọc cột coef (dấu và độ lớn) và P>|z| (nhỏ hơn 0,05 là có ý nghĩa)."
    ],
    "code": "logm = sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial())\nres = logm.fit()\nprint(res.summary())",
    "lotus": "Hệ số dương làm tăng khả năng ở lại, âm làm giảm. Ví dụ Overtime_Yes âm: làm thêm giờ làm nhân viên dễ nghỉ hơn.",
    "trap": "Đọc coef mà bỏ qua p-value: biến p cao có thể chỉ là nhiễu."
   },
   "en": {
    "think": "Train the logistic regression with statsmodels GLM and read the summary.",
    "steps": [
     "sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial()).fit().",
     "print(model.summary()).",
     "Read coef (sign and size) and P>|z| (below 0.05 is significant)."
    ],
    "code": "logm = sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial())\nres = logm.fit()\nprint(res.summary())",
    "lotus": "A positive coefficient raises the chance of staying, a negative one lowers it. For example a negative Overtime_Yes: overtime makes staff more likely to leave.",
    "trap": "Reading coef but skipping p-values: a high-p feature may just be noise."
   }
  },
  "7.2.4": {
   "vi": {
    "think": "Tính VIF để phát hiện biến chồng lấn.",
    "steps": [
     "from statsmodels.stats.outliers_influence import variance_inflation_factor.",
     "VIF cho từng cột của X_train_rfe.",
     "VIF dưới 5 là ổn; cao hơn thì cân nhắc bỏ một trong hai biến chồng nhau."
    ],
    "code": "from statsmodels.stats.outliers_influence import variance_inflation_factor\nvif = pd.DataFrame({'Feature': X_train_rfe.columns,\n    'VIF': [variance_inflation_factor(X_train_rfe.values, i) for i in range(X_train_rfe.shape[1])]})\nvif.sort_values('VIF', ascending=False)",
    "lotus": "VIF cao nghĩa hai yếu tố nói gần như cùng một điều, như tuổi và số năm làm.",
    "trap": "Tính VIF trên X_train_sm có hằng số cho VIF của hằng số rất lớn. Dùng bảng không có hằng số."
   },
   "en": {
    "think": "Compute VIF to detect overlapping features.",
    "steps": [
     "from statsmodels.stats.outliers_influence import variance_inflation_factor.",
     "VIF for each column of X_train_rfe.",
     "VIF below 5 is fine; higher means consider dropping one of two overlapping features."
    ],
    "code": "from statsmodels.stats.outliers_influence import variance_inflation_factor\nvif = pd.DataFrame({'Feature': X_train_rfe.columns,\n    'VIF': [variance_inflation_factor(X_train_rfe.values, i) for i in range(X_train_rfe.shape[1])]})\nvif.sort_values('VIF', ascending=False)",
    "lotus": "A high VIF means two factors say almost the same thing, like age and years of service.",
    "trap": "Computing VIF on X_train_sm with the constant gives a huge VIF for the constant. Use the table without it."
   }
  },
  "7.2.5": {
   "vi": {
    "think": "Dự đoán xác suất ở lại trên tập train.",
    "steps": [
     "res.predict(X_train_sm)."
    ],
    "code": "y_train_pred = res.predict(X_train_sm)\ny_train_pred.head()",
    "lotus": "Mỗi nhân viên có một xác suất ở lại giữa 0 và 1.",
    "trap": "Đưa vào X thiếu hằng số báo lỗi kích thước."
   },
   "en": {
    "think": "Predict the probability of staying on the training set.",
    "steps": [
     "res.predict(X_train_sm)."
    ],
    "code": "y_train_pred = res.predict(X_train_sm)\ny_train_pred.head()",
    "lotus": "Each staff member gets a stay probability between 0 and 1.",
    "trap": "Passing X without the constant raises a size error."
   }
  },
  "7.2.6": {
   "vi": {
    "think": "Đổi kết quả dự đoán thành mảng phẳng.",
    "steps": [
     "y_train_pred.values.reshape(-1)."
    ],
    "code": "y_train_pred_final = y_train_pred.values.reshape(-1)",
    "lotus": "Chỉ là định dạng lại.",
    "trap": "Mảng 2 chiều khi tạo DataFrame báo lỗi."
   },
   "en": {
    "think": "Flatten the prediction into an array.",
    "steps": [
     "y_train_pred.values.reshape(-1)."
    ],
    "code": "y_train_pred_final = y_train_pred.values.reshape(-1)",
    "lotus": "Just a reshape.",
    "trap": "A 2D array raises an error when building the DataFrame."
   }
  },
  "7.2.7": {
   "vi": {
    "think": "Tạo bảng gồm giá trị thực và xác suất dự đoán.",
    "steps": [
     "DataFrame có cột Stayed (thực) và Stayed_Prob (dự đoán)."
    ],
    "code": "y_train_pred_df = pd.DataFrame({'Stayed': y_train_d.values.reshape(-1), 'Stayed_Prob': y_train_pred_final})\ny_train_pred_df.head()",
    "lotus": "Mỗi dòng: người đó thực ra ở hay nghỉ, và mô hình cho bao nhiêu phần trăm ở.",
    "trap": "Hai mảng khác độ dài báo lỗi."
   },
   "en": {
    "think": "Build a table of actual values and predicted probabilities.",
    "steps": [
     "A DataFrame with Stayed (actual) and Stayed_Prob (predicted)."
    ],
    "code": "y_train_pred_df = pd.DataFrame({'Stayed': y_train_d.values.reshape(-1), 'Stayed_Prob': y_train_pred_final})\ny_train_pred_df.head()",
    "lotus": "Each row: whether the person actually stayed or left, and the percentage the model gave to staying.",
    "trap": "Arrays of different length raise an error."
   }
  },
  "7.2.8": {
   "vi": {
    "think": "Tạo cột Predicted: 1 nếu xác suất lớn hơn 0,5.",
    "steps": [
     "np.where(xác suất > 0.5, 1, 0)."
    ],
    "code": "y_train_pred_df['Predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > 0.5 else 0)\ny_train_pred_df.head()",
    "lotus": "Ngưỡng 0,5: trên 50% thì đoán là ở lại.",
    "trap": "0,5 chỉ là mặc định, bước 7.3 sẽ tìm ngưỡng tốt hơn."
   },
   "en": {
    "think": "Create Predicted: 1 if probability is above 0.5.",
    "steps": [
     "np.where(probability > 0.5, 1, 0)."
    ],
    "code": "y_train_pred_df['Predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > 0.5 else 0)\ny_train_pred_df.head()",
    "lotus": "Threshold 0.5: above 50% predict stay.",
    "trap": "0.5 is only a default; step 7.3 finds a better one."
   }
  },
  "7.2.9": {
   "vi": {
    "think": "Tính độ chính xác trên train.",
    "steps": [
     "metrics.accuracy_score(Stayed, Predicted)."
    ],
    "code": "from sklearn import metrics\nmetrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])",
    "lotus": "Với file của bạn kết quả khoảng 74%: ba trong bốn lần đoán đúng.",
    "trap": "Độ chính xác đơn độc không nói kiểu sai nào. Xem bước tiếp."
   },
   "en": {
    "think": "Compute accuracy on train.",
    "steps": [
     "metrics.accuracy_score(Stayed, Predicted)."
    ],
    "code": "from sklearn import metrics\nmetrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])",
    "lotus": "With your file the result is about 74%: three in four guesses are right.",
    "trap": "Accuracy alone does not say which errors. See the next step."
   }
  },
  "7.2.10": {
   "vi": {
    "think": "Lập ma trận nhầm lẫn (confusion matrix).",
    "steps": [
     "metrics.confusion_matrix(Stayed, Predicted)."
    ],
    "code": "confusion = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])\nprint(confusion)",
    "lotus": "Với file của bạn khoảng 17.100 nghỉ đoán đúng, 19.400 ở đoán đúng, 6.600 nghỉ bị đoán thành ở, 6.400 ở bị đoán thành nghỉ.",
    "trap": "Thứ tự hàng và cột: hàng là thực tế, cột là dự đoán."
   },
   "en": {
    "think": "Build the confusion matrix.",
    "steps": [
     "metrics.confusion_matrix(Stayed, Predicted)."
    ],
    "code": "confusion = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['Predicted'])\nprint(confusion)",
    "lotus": "In your file roughly 17,100 leavers correct, 19,400 stayers correct, 6,600 leavers guessed as staying, 6,400 stayers guessed as leaving.",
    "trap": "Order: rows are actual, columns are predicted."
   }
  },
  "7.2.11": {
   "vi": {
    "think": "Đặt tên cho bốn ô: TP, TN, FP, FN.",
    "steps": [
     "TP: thực ở, đoán ở. TN: thực nghỉ, đoán nghỉ.",
     "FP: thực nghỉ, đoán ở. FN: thực ở, đoán nghỉ.",
     "Lấy từ confusion[hàng, cột]."
    ],
    "code": "TN, FP, FN, TP = confusion.ravel()\nprint(TP, TN, FP, FN)",
    "lotus": "FP là nguy hiểm nhất: nhân viên sắp nghỉ mà mô hình nói sẽ ở, chị Lan không kịp giữ.",
    "trap": "Nhầm ô nào là FP, FN đảo ngược mọi chỉ số."
   },
   "en": {
    "think": "Name the four cells: TP, TN, FP, FN.",
    "steps": [
     "TP: actually stayed, guessed stayed. TN: actually left, guessed left.",
     "FP: actually left, guessed stayed. FN: actually stayed, guessed left.",
     "Read from confusion[row, col]."
    ],
    "code": "TN, FP, FN, TP = confusion.ravel()\nprint(TP, TN, FP, FN)",
    "lotus": "FP is the most dangerous: a staff member about to leave but the model says stay, chị Lan has no time to keep them.",
    "trap": "Confusing which cell is FP or FN reverses every metric."
   }
  },
  "7.2.12": {
   "vi": {
    "think": "Tính sensitivity (độ nhạy) và specificity (độ đặc hiệu).",
    "steps": [
     "Sensitivity = TP / (TP + FN): trong số người ở lại thật, đoán đúng bao nhiêu.",
     "Specificity = TN / (TN + FP): trong số người nghỉ thật, đoán đúng bao nhiêu."
    ],
    "code": "sensitivity = TP / (TP + FN)\nspecificity = TN / (TN + FP)\nprint(round(sensitivity, 3), round(specificity, 3))",
    "lotus": "Specificity cho biết mô hình bắt được bao nhiêu phần người sắp nghỉ.",
    "trap": "Đổi chỗ công thức hai chỉ số cho kết quả đảo."
   },
   "en": {
    "think": "Compute sensitivity and specificity.",
    "steps": [
     "Sensitivity = TP / (TP + FN): of those who really stay, how many are caught.",
     "Specificity = TN / (TN + FP): of those who really leave, how many are caught."
    ],
    "code": "sensitivity = TP / (TP + FN)\nspecificity = TN / (TN + FP)\nprint(round(sensitivity, 3), round(specificity, 3))",
    "lotus": "Specificity tells how much of those about to leave the model catches.",
    "trap": "Swapping the two formulas inverts the result."
   }
  },
  "7.2.13": {
   "vi": {
    "think": "Tính precision và recall.",
    "steps": [
     "Precision = TP / (TP + FP): trong số đoán ở, bao nhiêu thật sự ở.",
     "Recall = TP / (TP + FN), bằng sensitivity."
    ],
    "code": "precision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nprint(round(precision, 3), round(recall, 3))",
    "lotus": "Precision cho biết khi mô hình nói «người này sẽ ở», đúng bao nhiêu phần.",
    "trap": "Recall và sensitivity là một thứ, đừng tính hai kết quả khác nhau."
   },
   "en": {
    "think": "Compute precision and recall.",
    "steps": [
     "Precision = TP / (TP + FP): of those guessed to stay, how many really stay.",
     "Recall = TP / (TP + FN), equal to sensitivity."
    ],
    "code": "precision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nprint(round(precision, 3), round(recall, 3))",
    "lotus": "Precision tells how often “this person will stay” is right.",
    "trap": "Recall and sensitivity are the same thing; do not compute two different results."
   }
  },
  "7.3.1": {
   "vi": {
    "think": "Vẽ đường ROC và tính AUC.",
    "steps": [
     "metrics.roc_curve(Stayed, Stayed_Prob, drop_intermediate=False).",
     "Vẽ FPR theo TPR, thêm đường chéo.",
     "AUC càng gần 1 càng tốt, 0,5 là đoán bừa."
    ],
    "code": "def draw_roc(actual, probs):\n    fpr, tpr, thr = metrics.roc_curve(actual, probs, drop_intermediate=False)\n    auc = metrics.roc_auc_score(actual, probs)\n    plt.plot(fpr, tpr, label=f'AUC = {auc:.2f}'); plt.plot([0, 1], [0, 1], 'k--')\n    plt.xlabel('FPR'); plt.ylabel('TPR'); plt.legend(); plt.show()\ndraw_roc(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])",
    "lotus": "Đường càng sát góc trên trái thì mô hình càng phân biệt tốt người ở và người nghỉ.",
    "trap": "Đường sát đường chéo thì không tốt hơn đoán bằng đồng xu."
   },
   "en": {
    "think": "Plot the ROC curve and compute AUC.",
    "steps": [
     "metrics.roc_curve(Stayed, Stayed_Prob, drop_intermediate=False).",
     "Plot FPR against TPR, add the diagonal.",
     "AUC closer to 1 is better, 0.5 is guessing."
    ],
    "code": "def draw_roc(actual, probs):\n    fpr, tpr, thr = metrics.roc_curve(actual, probs, drop_intermediate=False)\n    auc = metrics.roc_auc_score(actual, probs)\n    plt.plot(fpr, tpr, label=f'AUC = {auc:.2f}'); plt.plot([0, 1], [0, 1], 'k--')\n    plt.xlabel('FPR'); plt.ylabel('TPR'); plt.legend(); plt.show()\ndraw_roc(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])",
    "lotus": "The closer the curve hugs the top-left, the better the model separates stayers from leavers.",
    "trap": "A curve near the diagonal is no better than a coin flip."
   }
  },
  "7.3.2": {
   "vi": {
    "think": "Dự đoán ở nhiều ngưỡng xác suất từ 0,0 đến 0,9.",
    "steps": [
     "Vòng lặp i trong [0.0, 0.1, ..., 0.9].",
     "Mỗi lần tạo một cột Stayed_Prob > i."
    ],
    "code": "numbers = [float(x) / 10 for x in range(10)]\nfor i in numbers:\n    y_train_pred_df[i] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > i else 0)\ny_train_pred_df.head()",
    "lotus": "Thử từng ngưỡng: đoán «ở» khi trên 10%, 20%, ... để xem ngưỡng nào hợp lý.",
    "trap": "Không có."
   },
   "en": {
    "think": "Predict at several probability cutoffs from 0.0 to 0.9.",
    "steps": [
     "Loop i over [0.0, 0.1, ..., 0.9].",
     "Each time create a column Stayed_Prob > i."
    ],
    "code": "numbers = [float(x) / 10 for x in range(10)]\nfor i in numbers:\n    y_train_pred_df[i] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > i else 0)\ny_train_pred_df.head()",
    "lotus": "Try each threshold: predict “stay” when above 10%, 20%, ... to see which is sensible.",
    "trap": "None."
   }
  },
  "7.3.3": {
   "vi": {
    "think": "Vẽ độ chính xác, sensitivity, specificity theo từng ngưỡng để chọn ngưỡng tối ưu.",
    "steps": [
     "Tính ba chỉ số cho từng cột ngưỡng.",
     "Vẽ ba đường theo ngưỡng.",
     "Ngưỡng tối ưu nằm nơi các đường cắt nhau (cân bằng sensitivity và specificity)."
    ],
    "code": "cutoff_df = pd.DataFrame(columns=['prob', 'accuracy', 'sensi', 'speci'])\nfor i in numbers:\n    cm = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df[i])\n    tn, fp, fn, tp = cm.ravel()\n    cutoff_df.loc[i] = [i, (tp + tn) / cm.sum(), tp / (tp + fn), tn / (tn + fp)]\ncutoff_df.plot.line(x='prob', y=['accuracy', 'sensi', 'speci'])\nplt.show()",
    "lotus": "Ngưỡng 0,5 không nhất thiết là tốt nhất; với file của bạn ngưỡng tối ưu thường quanh 0,5 vì hai lớp gần cân bằng.",
    "trap": "Chọn ngưỡng chỉ theo độ chính xác bỏ qua sensitivity và specificity."
   },
   "en": {
    "think": "Plot accuracy, sensitivity and specificity per threshold to choose the optimal cutoff.",
    "steps": [
     "Compute the three metrics for each threshold column.",
     "Plot three lines against the threshold.",
     "The optimal cutoff sits where the lines cross (balanced sensitivity and specificity)."
    ],
    "code": "cutoff_df = pd.DataFrame(columns=['prob', 'accuracy', 'sensi', 'speci'])\nfor i in numbers:\n    cm = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df[i])\n    tn, fp, fn, tp = cm.ravel()\n    cutoff_df.loc[i] = [i, (tp + tn) / cm.sum(), tp / (tp + fn), tn / (tn + fp)]\ncutoff_df.plot.line(x='prob', y=['accuracy', 'sensi', 'speci'])\nplt.show()",
    "lotus": "0.5 is not necessarily best; with your file the optimum is usually near 0.5 because the two classes are near balanced.",
    "trap": "Choosing the threshold by accuracy only ignores sensitivity and specificity."
   }
  },
  "7.3.4": {
   "vi": {
    "think": "Tạo cột dự đoán cuối theo ngưỡng tối ưu.",
    "steps": [
     "Chọn ngưỡng (ví dụ 0,5) rồi tạo cột final_predicted."
    ],
    "code": "cutoff = 0.5  # use the value you read from the plot\ny_train_pred_df['final_predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)",
    "lotus": "Từ giờ, mô hình nói «ở» khi xác suất vượt ngưỡng này.",
    "trap": "Hard-code ngưỡng rồi quên đổi sau khi đổi mô hình."
   },
   "en": {
    "think": "Create the final prediction column using the optimal cutoff.",
    "steps": [
     "Choose the cutoff (for example 0.5) then create final_predicted."
    ],
    "code": "cutoff = 0.5  # use the value you read from the plot\ny_train_pred_df['final_predicted'] = y_train_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)",
    "lotus": "From now on the model says “stay” when probability exceeds this threshold.",
    "trap": "Hard-coding the cutoff and forgetting to update it after changing the model."
   }
  },
  "7.3.5": {
   "vi": {
    "think": "Độ chính xác với ngưỡng mới.",
    "steps": [
     "accuracy_score(Stayed, final_predicted)."
    ],
    "code": "metrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])",
    "lotus": "So với 7.2.9: ngưỡng tối ưu có thể không đổi nhiều nếu 0,5 đã gần tối ưu.",
    "trap": "Không có."
   },
   "en": {
    "think": "Accuracy with the new cutoff.",
    "steps": [
     "accuracy_score(Stayed, final_predicted)."
    ],
    "code": "metrics.accuracy_score(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])",
    "lotus": "Compare with 7.2.9: the optimal cutoff may barely change if 0.5 was already near optimal.",
    "trap": "None."
   }
  },
  "7.3.6": {
   "vi": {
    "think": "Ma trận nhầm lẫn với ngưỡng mới.",
    "steps": [
     "confusion_matrix(Stayed, final_predicted)."
    ],
    "code": "confusion2 = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])\nprint(confusion2)",
    "lotus": "Số người nghỉ bị bỏ sót (FP) thay đổi thế nào khi đổi ngưỡng.",
    "trap": "Không có."
   },
   "en": {
    "think": "Confusion matrix with the new cutoff.",
    "steps": [
     "confusion_matrix(Stayed, final_predicted)."
    ],
    "code": "confusion2 = metrics.confusion_matrix(y_train_pred_df['Stayed'], y_train_pred_df['final_predicted'])\nprint(confusion2)",
    "lotus": "How the number of missed leavers (FP) changes when the threshold changes.",
    "trap": "None."
   }
  },
  "7.3.7": {
   "vi": {
    "think": "TP, TN, FP, FN cho ngưỡng mới.",
    "steps": [
     "ravel() ma trận mới."
    ],
    "code": "TN, FP, FN, TP = confusion2.ravel()",
    "lotus": "Như 7.2.11.",
    "trap": "Nhớ cập nhật biến, đừng dùng biến cũ."
   },
   "en": {
    "think": "TP, TN, FP, FN for the new cutoff.",
    "steps": [
     "ravel() the new matrix."
    ],
    "code": "TN, FP, FN, TP = confusion2.ravel()",
    "lotus": "As in 7.2.11.",
    "trap": "Remember to update the variables; do not reuse the old ones."
   }
  },
  "7.3.8": {
   "vi": {
    "think": "Sensitivity và specificity cho ngưỡng mới.",
    "steps": [
     "Dùng công thức như 7.2.12."
    ],
    "code": "sensitivity = TP / (TP + FN)\nspecificity = TN / (TN + FP)\nprint(round(sensitivity, 3), round(specificity, 3))",
    "lotus": "Cân bằng hơn giữa bắt người sắp nghỉ và đoán đúng người ở lại.",
    "trap": "Không có."
   },
   "en": {
    "think": "Sensitivity and specificity for the new cutoff.",
    "steps": [
     "Use the formulas from 7.2.12."
    ],
    "code": "sensitivity = TP / (TP + FN)\nspecificity = TN / (TN + FP)\nprint(round(sensitivity, 3), round(specificity, 3))",
    "lotus": "More balance between catching leavers and correctly guessing stayers.",
    "trap": "None."
   }
  },
  "7.3.9": {
   "vi": {
    "think": "Precision và recall cho ngưỡng mới.",
    "steps": [
     "Dùng công thức như 7.2.13."
    ],
    "code": "precision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nprint(round(precision, 3), round(recall, 3))",
    "lotus": "Khi nâng ngưỡng precision thường tăng còn recall giảm.",
    "trap": "Không có."
   },
   "en": {
    "think": "Precision and recall for the new cutoff.",
    "steps": [
     "Use the formulas from 7.2.13."
    ],
    "code": "precision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nprint(round(precision, 3), round(recall, 3))",
    "lotus": "Raising the threshold usually lifts precision and lowers recall.",
    "trap": "None."
   }
  },
  "7.3.10": {
   "vi": {
    "think": "Vẽ đường precision-recall và chọn lại ngưỡng nếu cần.",
    "steps": [
     "precision_recall_curve(Stayed, Stayed_Prob).",
     "Vẽ precision và recall theo ngưỡng.",
     "Điểm cắt nhau là ngưỡng cân bằng hai chỉ số."
    ],
    "code": "from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])\nplt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.show()",
    "lotus": "Nếu chị Lan cần bắt nhiều người sắp nghỉ hơn (chấp nhận báo động nhầm) thì chỉnh ngưỡng theo hướng đó.",
    "trap": "p và r dài hơn t một phần tử; dùng p[:-1], r[:-1]."
   },
   "en": {
    "think": "Plot the precision-recall curve and re-pick the cutoff if needed.",
    "steps": [
     "precision_recall_curve(Stayed, Stayed_Prob).",
     "Plot precision and recall against the threshold.",
     "Where they cross is the balanced threshold."
    ],
    "code": "from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(y_train_pred_df['Stayed'], y_train_pred_df['Stayed_Prob'])\nplt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.show()",
    "lotus": "If chị Lan needs to catch more leavers (accepting false alarms) shift the threshold that way.",
    "trap": "p and r are one element longer than t; use p[:-1], r[:-1]."
   }
  },
  "8.1.1": {
   "vi": {
    "think": "Chọn đúng 15 cột cho validation.",
    "steps": [
     "X_validation[col]."
    ],
    "code": "X_validation_rfe = X_validation[col]",
    "lotus": "Cùng 15 yếu tố như train.",
    "trap": "Chọn cột khác train làm dự đoán sai."
   },
   "en": {
    "think": "Select the same 15 columns for validation.",
    "steps": [
     "X_validation[col]."
    ],
    "code": "X_validation_rfe = X_validation[col]",
    "lotus": "The same 15 factors as train.",
    "trap": "Selecting different columns than train makes predictions wrong."
   }
  },
  "8.1.2": {
   "vi": {
    "think": "Thêm hằng số vào validation.",
    "steps": [
     "sm.add_constant(X_validation_rfe)."
    ],
    "code": "X_validation_sm = sm.add_constant(X_validation_rfe)",
    "lotus": "Cùng cấu trúc như train.",
    "trap": "Thiếu hằng số báo lỗi kích thước."
   },
   "en": {
    "think": "Add the constant to validation.",
    "steps": [
     "sm.add_constant(X_validation_rfe)."
    ],
    "code": "X_validation_sm = sm.add_constant(X_validation_rfe)",
    "lotus": "Same structure as train.",
    "trap": "Missing the constant raises a size error."
   }
  },
  "8.1.3": {
   "vi": {
    "think": "Dự đoán xác suất trên validation.",
    "steps": [
     "res.predict(X_validation_sm)."
    ],
    "code": "y_validation_pred = res.predict(X_validation_sm)",
    "lotus": "Mô hình đoán người nhân viên chưa từng thấy.",
    "trap": "Dùng mô hình đã huấn luyện lại bằng validation là gian lận."
   },
   "en": {
    "think": "Predict probabilities on validation.",
    "steps": [
     "res.predict(X_validation_sm)."
    ],
    "code": "y_validation_pred = res.predict(X_validation_sm)",
    "lotus": "The model guesses staff it has never seen.",
    "trap": "Retraining on validation is cheating."
   }
  },
  "8.1.4": {
   "vi": {
    "think": "Tạo bảng thực tế và dự đoán cho validation.",
    "steps": [
     "Giống 7.2.7 cho validation."
    ],
    "code": "y_validation_pred_df = pd.DataFrame({'Stayed': y_val_d.values.reshape(-1), 'Stayed_Prob': y_validation_pred.values.reshape(-1)})\ny_validation_pred_df.head()",
    "lotus": "Mỗi nhân viên có xác suất ở lại dự đoán.",
    "trap": "Hai mảng khác độ dài báo lỗi."
   },
   "en": {
    "think": "Build the actual-vs-predicted table for validation.",
    "steps": [
     "As 7.2.7 for validation."
    ],
    "code": "y_validation_pred_df = pd.DataFrame({'Stayed': y_val_d.values.reshape(-1), 'Stayed_Prob': y_validation_pred.values.reshape(-1)})\ny_validation_pred_df.head()",
    "lotus": "Each staff member has a predicted stay probability.",
    "trap": "Arrays of different length raise an error."
   }
  },
  "8.1.5": {
   "vi": {
    "think": "Dự đoán cuối theo ngưỡng đã chọn trên train.",
    "steps": [
     "Dùng cùng cutoff như 7.3.4."
    ],
    "code": "y_validation_pred_df['final_predicted'] = y_validation_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)",
    "lotus": "Dùng cùng ngưỡng, không chọn lại ngưỡng trên validation.",
    "trap": "Chọn ngưỡng trên validation là rò rỉ thông tin."
   },
   "en": {
    "think": "Final prediction using the cutoff chosen on train.",
    "steps": [
     "Use the same cutoff as 7.3.4."
    ],
    "code": "y_validation_pred_df['final_predicted'] = y_validation_pred_df['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)",
    "lotus": "Use the same cutoff, do not re-choose it on validation.",
    "trap": "Choosing the cutoff on validation leaks information."
   }
  },
  "8.2": {
   "vi": {
    "think": "Độ chính xác trên validation.",
    "steps": [
     "accuracy_score trên validation."
    ],
    "code": "metrics.accuracy_score(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])",
    "lotus": "Gần với độ chính xác train (khoảng 74%) thì mô hình không quá khớp.",
    "trap": "Chênh nhiều giữa train và validation là quá khớp."
   },
   "en": {
    "think": "Accuracy on validation.",
    "steps": [
     "accuracy_score on validation."
    ],
    "code": "metrics.accuracy_score(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])",
    "lotus": "Close to train accuracy (about 74%) means no overfitting.",
    "trap": "A big train-validation gap signals overfitting."
   }
  },
  "8.3": {
   "vi": {
    "think": "Ma trận nhầm lẫn và TP, TN, FP, FN trên validation.",
    "steps": [
     "confusion_matrix và ravel()."
    ],
    "code": "cm_val = metrics.confusion_matrix(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])\nTN, FP, FN, TP = cm_val.ravel()\nprint(cm_val)",
    "lotus": "Số liệu tương tự train nhưng với 21.200 nhân viên chưa từng thấy.",
    "trap": "Không có."
   },
   "en": {
    "think": "Confusion matrix and TP, TN, FP, FN on validation.",
    "steps": [
     "confusion_matrix and ravel()."
    ],
    "code": "cm_val = metrics.confusion_matrix(y_validation_pred_df['Stayed'], y_validation_pred_df['final_predicted'])\nTN, FP, FN, TP = cm_val.ravel()\nprint(cm_val)",
    "lotus": "Numbers like train but for 21,200 unseen staff.",
    "trap": "None."
   }
  },
  "8.4": {
   "vi": {
    "think": "Sensitivity và specificity trên validation.",
    "steps": [
     "Công thức như 7.2.12."
    ],
    "code": "sensitivity = TP / (TP + FN)\nspecificity = TN / (TN + FP)\nprint(round(sensitivity, 3), round(specificity, 3))",
    "lotus": "So với train để thấy mô hình giữ vững không.",
    "trap": "Không có."
   },
   "en": {
    "think": "Sensitivity and specificity on validation.",
    "steps": [
     "Formulas as 7.2.12."
    ],
    "code": "sensitivity = TP / (TP + FN)\nspecificity = TN / (TN + FP)\nprint(round(sensitivity, 3), round(specificity, 3))",
    "lotus": "Compare with train to see whether the model holds up.",
    "trap": "None."
   }
  },
  "8.5": {
   "vi": {
    "think": "Precision và recall trên validation.",
    "steps": [
     "Công thức như 7.2.13."
    ],
    "code": "precision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nprint(round(precision, 3), round(recall, 3))",
    "lotus": "Kết luận ở ô cuối: mô hình có đủ tốt để chị Lan dùng báo trước nhân viên có nguy cơ nghỉ không.",
    "trap": "Kết luận chỉ bằng một chỉ số."
   },
   "en": {
    "think": "Precision and recall on validation.",
    "steps": [
     "Formulas as 7.2.13."
    ],
    "code": "precision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nprint(round(precision, 3), round(recall, 3))",
    "lotus": "Conclude in the last cell: is the model good enough for chị Lan to flag staff at risk of leaving.",
    "trap": "Concluding from a single metric."
   }
  }
 },
 "results": {
  "1.1": {
   "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\ndf = pd.read_csv('/tmp/asg/all/3/Employee_data.csv')\nprint(df.shape)\nprint(df.head(3).T.to_string())",
   "text": "(74610, 24)\n                                           0                  1                    2\nEmployee ID                             8410              64756                30257\nAge                                       31                 59                   24\nGender                                  Male             Female               Female\nYears at Company                          19                  4                   10\nJob Role                           Education              Media           Healthcare\nMonthly Income                          5390               5534                 8159\nWork-Life Balance                  Excellent               Poor                 Good\nJob Satisfaction                      Medium               High                 High\nPerformance Rating                   Average                Low                  Low\nNumber of Promotions                       2                  3                    0\nOvertime                                  No                 No                   No\nDistance from Home                      22.0               21.0                 11.0\nEducation Level             Associate Degree  Masterâ€™s Degree  Bachelorâ€™s Degree\nMarital Status                       Married           Divorced              Married\nNumber of Dependents                       0                  3                    3\nJob Level                                Mid                Mid                  Mid\nCompany Size                          Medium             Medium               Medium\nCompany Tenure (In Months)              89.0               21.0                 74.0\nRemote Work                               No                 No                   No\nLeadership Opportunities                  No                 No                   No\nInnovation Opportunities                  No                 No                   No\nCompany Reputation                 Excellent               Fair                 Poor\nEmployee Recognition                  Medium                Low                  Low\nAttrition                             Stayed             Stayed               Stayed",
   "imgs": []
  },
  "1.2": {
   "code": "print(df.describe().round(1).T.to_string())",
   "text": "                              count     mean      std     min      25%      50%      75%      max\nEmployee ID                 74610.0  37246.0  21505.8     1.0  18624.2  37239.5  55871.8  74498.0\nAge                         74610.0     38.5     12.1    18.0     28.0     39.0     49.0     59.0\nYears at Company            74610.0     15.7     11.2     1.0      7.0     13.0     23.0     51.0\nMonthly Income              74610.0   7344.9   2596.4  1226.0   5652.0   7348.5   8876.0  50030.0\nNumber of Promotions        74610.0      0.8      1.0     0.0      0.0      1.0      2.0      4.0\nDistance from Home          72698.0     50.0     28.5     1.0     25.0     50.0     75.0     99.0\nNumber of Dependents        74610.0      1.7      1.6     0.0      0.0      1.0      3.0     15.0\nCompany Tenure (In Months)  72197.0     55.7     25.4     2.0     36.0     56.0     76.0    128.0",
   "imgs": []
  },
  "1.3": {
   "code": "df.info()",
   "text": "<class 'pandas.DataFrame'>\nRangeIndex: 74610 entries, 0 to 74609\nData columns (total 24 columns):\n #   Column                      Non-Null Count  Dtype  \n---  ------                      --------------  -----  \n 0   Employee ID                 74610 non-null  int64  \n 1   Age                         74610 non-null  int64  \n 2   Gender                      74610 non-null  str    \n 3   Years at Company            74610 non-null  int64  \n 4   Job Role                    74610 non-null  str    \n 5   Monthly Income              74610 non-null  int64  \n 6   Work-Life Balance           74610 non-null  str    \n 7   Job Satisfaction            74610 non-null  str    \n 8   Performance Rating          74610 non-null  str    \n 9   Number of Promotions        74610 non-null  int64  \n 10  Overtime                    74610 non-null  str    \n 11  Distance from Home          72698 non-null  float64\n 12  Education Level             74610 non-null  str    \n 13  Marital Status              74610 non-null  str    \n 14  Number of Dependents        74610 non-null  int64  \n 15  Job Level                   74610 non-null  str    \n 16  Company Size                74610 non-null  str    \n 17  Company Tenure (In Months)  72197 non-null  float64\n 18  Remote Work                 74610 non-null  str    \n 19  Leadership Opportunities    74610 non-null  str    \n 20  Innovation Opportunities    74610 non-null  str    \n 21  Company Reputation          74610 non-null  str    \n 22  Employee Recognition        74610 non-null  str    \n 23  Attrition                   74610 non-null  str    \ndtypes: float64(2), int64(6), str(16)\nmemory usage: 13.7 MB",
   "imgs": []
  },
  "2.1.1": {
   "code": "print(df.isnull().sum()[df.isnull().sum() > 0])",
   "text": "Distance from Home            1912\nCompany Tenure (In Months)    2413\ndtype: int64",
   "imgs": []
  },
  "2.1.2": {
   "code": "print((df.isnull().mean() * 100).round(2)[df.isnull().sum() > 0])",
   "text": "Distance from Home            2.56\nCompany Tenure (In Months)    3.23\ndtype: float64",
   "imgs": []
  },
  "2.1.3": {
   "code": "n0 = len(df)\ndf = df.dropna()\nprint(n0, '->', len(df))",
   "text": "74610 -> 70635",
   "imgs": []
  },
  "2.1.4": {
   "code": "print(len(df), round(len(df) / n0 * 100, 2), '%')",
   "text": "70635 94.67 %",
   "imgs": []
  },
  "2.2": {
   "code": "for c in df.select_dtypes(include='object').columns:\n    print(c, list(df[c].unique()))\ndf['Education Level'] = df['Education Level'].str.replace('â€™', \"'\")\nprint()\nprint(df['Education Level'].unique())",
   "text": "Gender ['Male', 'Female']\nJob Role ['Education', 'Media', 'Healthcare', 'Technology', 'Finance']\nWork-Life Balance ['Excellent', 'Poor', 'Good', 'Fair']\nJob Satisfaction ['Medium', 'High', 'Very High', 'Low']\nPerformance Rating ['Average', 'Low', 'High', 'Below Average']\nOvertime ['No', 'Yes']\nEducation Level ['Associate Degree', 'Masterâ€™s Degree', 'Bachelorâ€™s Degree', 'High School', 'PhD']\nMarital Status ['Married', 'Divorced', 'Single']\nJob Level ['Mid', 'Senior', 'Entry']\nCompany Size ['Medium', 'Small', 'Large']\nRemote Work ['No', 'Yes']\nLeadership Opportunities ['No', 'Yes']\nInnovation Opportunities ['No', 'Yes']\nCompany Reputation ['Excellent', 'Fair', 'Poor', 'Good']\nEmployee Recognition ['Medium', 'Low', 'High', 'Very High']\nAttrition ['Stayed', 'Left']\n\n<StringArray>\n[ 'Associate Degree',   'Master's Degree', 'Bachelor's Degree',\n       'High School',               'PhD']\nLength: 5, dtype: str",
   "imgs": []
  },
  "2.3": {
   "code": "df = df.drop(columns=['Employee ID'])\nprint(df.shape)",
   "text": "(70635, 23)",
   "imgs": []
  },
  "3.2": {
   "code": "y = df['Attrition']\nX = df.drop(columns=['Attrition'])\nprint(X.shape, y.shape)",
   "text": "(70635, 22) (70635,)",
   "imgs": []
  },
  "3.3": {
   "code": "from sklearn.model_selection import train_test_split\nX_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, random_state=100)\nprint(len(X_train), len(X_validation))",
   "text": "49444 21191",
   "imgs": []
  },
  "4.1.1": {
   "code": "num_cols = X_train.select_dtypes(include=['int64', 'float64']).columns\nprint(list(num_cols))",
   "text": "['Age', 'Years at Company', 'Monthly Income', 'Number of Promotions', 'Distance from Home', 'Number of Dependents', 'Company Tenure (In Months)']",
   "imgs": []
  },
  "4.1.2": {
   "code": "X_train[num_cols].hist(bins=30, figsize=(14, 8)); plt.tight_layout()",
   "text": "",
   "imgs": [
    "/assign/employee-retention/4_1_2-1.png"
   ]
  },
  "4.2": {
   "code": "plt.figure(figsize=(8, 6))\nsns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)",
   "text": "",
   "imgs": [
    "/assign/employee-retention/4_2-1.png"
   ]
  },
  "4.3": {
   "code": "print(y_train.value_counts(normalize=True).round(3))\ny_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'])",
   "text": "Attrition\nStayed    0.521\nLeft      0.479\nName: proportion, dtype: float64",
   "imgs": [
    "/assign/employee-retention/4_3-1.png"
   ]
  },
  "4.4": {
   "code": "cat_cols = X_train.select_dtypes(include='object').columns\nt = X_train.assign(Attrition=y_train)\nrate = {c: t.groupby(c)['Attrition'].apply(lambda s: (s == 'Left').mean()).round(3) for c in cat_cols}\ntop = ['Overtime', 'Marital Status', 'Job Level', 'Remote Work', 'Work-Life Balance', 'Job Satisfaction']\nfig, ax = plt.subplots(2, 3, figsize=(15, 8))\nfor a, c in zip(ax.ravel(), top):\n    rate[c].plot(kind='bar', ax=a, title=f'Tỷ lệ nghỉ theo {c}'); a.set_ylim(0, 1); a.axhline(0.479, color='r', ls='--')\nplt.tight_layout()\nfor c in top: print(c, rate[c].to_dict())",
   "text": "Overtime {'No': 0.459, 'Yes': 0.52}\nMarital Status {'Divorced': 0.411, 'Married': 0.364, 'Single': 0.671}\nJob Level {'Entry': 0.639, 'Mid': 0.458, 'Senior': 0.202}\nRemote Work {'No': 0.528, 'Yes': 0.247}\nWork-Life Balance {'Excellent': 0.362, 'Fair': 0.577, 'Good': 0.408, 'Poor': 0.608}\nJob Satisfaction {'High': 0.454, 'Low': 0.533, 'Medium': 0.454, 'Very High': 0.535}",
   "imgs": [
    "/assign/employee-retention/4_4-1.png"
   ]
  },
  "6.1.1": {
   "code": "cat_cols = X_train.select_dtypes(include=['object']).columns\nprint(list(cat_cols))",
   "text": "['Gender', 'Job Role', 'Work-Life Balance', 'Job Satisfaction', 'Performance Rating', 'Overtime', 'Education Level', 'Marital Status', 'Job Level', 'Company Size', 'Remote Work', 'Leadership Opportunities', 'Innovation Opportunities', 'Company Reputation', 'Employee Recognition']",
   "imgs": []
  },
  "6.1.2": {
   "code": "dummy_train = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)\nprint(dummy_train.shape)\nprint(dummy_train.head(3).T.head(12).to_string())",
   "text": "(49444, 34)\n                                  1516   3352   59196\nGender_Male                           0      1      0\nJob Role_Finance                      0      0      0\nJob Role_Healthcare                   0      0      0\nJob Role_Media                        1      0      1\nJob Role_Technology                   0      1      0\nWork-Life Balance_Fair                0      0      0\nWork-Life Balance_Good                0      1      1\nWork-Life Balance_Poor                0      0      0\nJob Satisfaction_Low                  0      0      0\nJob Satisfaction_Medium               1      0      0\nJob Satisfaction_Very High            0      0      0\nPerformance Rating_Below Average      0      0      0",
   "imgs": []
  },
  "6.1.3": {
   "code": "dummy_val = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)\ndummy_val = dummy_val.reindex(columns=dummy_train.columns, fill_value=0)\nprint(dummy_val.shape)",
   "text": "(21191, 34)",
   "imgs": []
  },
  "6.1.5": {
   "code": "y_train_d = pd.get_dummies(pd.DataFrame(y_train), drop_first=True, dtype=int)\ny_val_d = pd.get_dummies(pd.DataFrame(y_validation), drop_first=True, dtype=int)\nprint(y_train_d.columns.tolist(), y_train_d.mean().round(3).tolist())",
   "text": "['Attrition_Stayed'] [0.521]",
   "imgs": []
  },
  "6.1.7": {
   "code": "X_train = pd.concat([X_train.drop(columns=cat_cols), dummy_train], axis=1)\nX_validation = pd.concat([X_validation.drop(columns=cat_cols), dummy_val], axis=1)\nprint(X_train.shape, X_validation.shape)",
   "text": "(49444, 41) (21191, 41)",
   "imgs": []
  },
  "6.2.2": {
   "code": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_train[num_cols] = scaler.fit_transform(X_train[num_cols])\nX_validation[num_cols] = scaler.transform(X_validation[num_cols])\nprint(X_train[num_cols].describe().loc[['mean', 'std']].round(2).to_string())",
   "text": "      Age  Years at Company  Monthly Income  Number of Promotions  Distance from Home  Number of Dependents  Company Tenure (In Months)\nmean  0.0              -0.0            -0.0                  -0.0                -0.0                   0.0                         0.0\nstd   1.0               1.0             1.0                   1.0                 1.0                   1.0                         1.0",
   "imgs": []
  },
  "7.1.2": {
   "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.feature_selection import RFE\nlogreg = LogisticRegression(max_iter=1000)\nrfe = RFE(estimator=logreg, n_features_to_select=15).fit(X_train, y_train_d.values.ravel())\ncol = X_train.columns[rfe.support_]\nfor c in col: print(c)",
   "text": "Gender_Male\nWork-Life Balance_Fair\nWork-Life Balance_Poor\nJob Satisfaction_Low\nJob Satisfaction_Very High\nPerformance Rating_Below Average\nPerformance Rating_Low\nOvertime_Yes\nEducation Level_PhD\nMarital Status_Single\nJob Level_Mid\nJob Level_Senior\nRemote Work_Yes\nCompany Reputation_Fair\nCompany Reputation_Poor",
   "imgs": []
  },
  "7.2.3": {
   "code": "import statsmodels.api as sm\nX_train_rfe = X_train[col]\nX_train_sm = sm.add_constant(X_train_rfe)\nres = sm.GLM(y_train_d, X_train_sm, family=sm.families.Binomial()).fit()\nprint(res.summary().tables[1])",
   "text": "====================================================================================================\n                                       coef    std err          z      P>|z|      [0.025      0.975]\n----------------------------------------------------------------------------------------------------\nconst                                0.2356      0.028      8.336      0.000       0.180       0.291\nGender_Male                          0.5738      0.022     25.875      0.000       0.530       0.617\nWork-Life Balance_Fair              -1.0572      0.025    -41.957      0.000      -1.107      -1.008\nWork-Life Balance_Poor              -1.2489      0.034    -37.262      0.000      -1.315      -1.183\nJob Satisfaction_Low                -0.4914      0.037    -13.282      0.000      -0.564      -0.419\nJob Satisfaction_Very High          -0.4829      0.028    -17.462      0.000      -0.537      -0.429\nPerformance Rating_Below Average    -0.3079      0.031    -10.012      0.000      -0.368      -0.248\nPerformance Rating_Low              -0.5673      0.051    -11.058      0.000      -0.668      -0.467\nOvertime_Yes                        -0.3286      0.023    -14.053      0.000      -0.374      -0.283\nEducation Level_PhD                  1.4826      0.055     27.084      0.000       1.375       1.590\nMarital Status_Single               -1.6887      0.025    -68.644      0.000      -1.737      -1.640\nJob Level_Mid                        0.9611      0.024     39.780      0.000       0.914       1.008\nJob Level_Senior                     2.5326      0.035     73.125      0.000       2.465       2.600\nRemote Work_Yes                      1.7154      0.032     53.379      0.000       1.652       1.778\nCompany Reputation_Fair             -0.5296      0.028    -18.633      0.000      -0.585      -0.474\nCompany Reputation_Poor             -0.7359      0.029    -25.758      0.000      -0.792      -0.680\n====================================================================================================",
   "imgs": []
  },
  "7.2.4": {
   "code": "from statsmodels.stats.outliers_influence import variance_inflation_factor\nvif = pd.DataFrame({'Feature': X_train_rfe.columns, 'VIF': [variance_inflation_factor(X_train_rfe.values, i) for i in range(X_train_rfe.shape[1])]})\nprint(vif.sort_values('VIF', ascending=False).round(2).to_string(index=False))",
   "text": "                         Feature  VIF\n                Job Level_Senior 1.20\n                   Job Level_Mid 1.20\n          Work-Life Balance_Poor 1.08\n          Work-Life Balance_Fair 1.08\n         Company Reputation_Fair 1.07\n         Company Reputation_Poor 1.07\n            Job Satisfaction_Low 1.03\n      Job Satisfaction_Very High 1.03\n          Performance Rating_Low 1.01\nPerformance Rating_Below Average 1.01\n                    Overtime_Yes 1.00\n                     Gender_Male 1.00\n                 Remote Work_Yes 1.00\n           Marital Status_Single 1.00\n             Education Level_PhD 1.00",
   "imgs": []
  },
  "7.2.8": {
   "code": "from sklearn import metrics\nyp = res.predict(X_train_sm)\ntr = pd.DataFrame({'Stayed': y_train_d.values.reshape(-1), 'Stayed_Prob': yp.values.reshape(-1)})\ntr['Predicted'] = tr['Stayed_Prob'].map(lambda x: 1 if x > 0.5 else 0)\nprint(tr.head(8).round(3).to_string())",
   "text": "   Stayed  Stayed_Prob  Predicted\n0       1        0.377          0\n1       1        0.943          1\n2       0        0.768          1\n3       0        0.437          0\n4       0        0.803          1\n5       0        0.021          0\n6       0        0.581          1\n7       1        0.806          1",
   "imgs": []
  },
  "7.2.9": {
   "code": "print('accuracy', round(metrics.accuracy_score(tr['Stayed'], tr['Predicted']), 4))",
   "text": "accuracy 0.7387",
   "imgs": []
  },
  "7.2.10": {
   "code": "confusion = metrics.confusion_matrix(tr['Stayed'], tr['Predicted'])\nprint(pd.DataFrame(confusion, index=['thực: nghỉ', 'thực: ở'], columns=['đoán: nghỉ', 'đoán: ở']))",
   "text": "            đoán: nghỉ  đoán: ở\nthực: nghỉ       17104     6559\nthực: ở           6359    19422",
   "imgs": []
  },
  "7.2.11": {
   "code": "TN, FP, FN, TP = confusion.ravel()\nprint('TP', TP, 'TN', TN, 'FP', FP, 'FN', FN)",
   "text": "TP 19422 TN 17104 FP 6559 FN 6359",
   "imgs": []
  },
  "7.2.12": {
   "code": "sensitivity = TP / (TP + FN); specificity = TN / (TN + FP)\nprint('sensitivity', round(sensitivity, 3), '| specificity', round(specificity, 3))",
   "text": "sensitivity 0.753 | specificity 0.723",
   "imgs": []
  },
  "7.2.13": {
   "code": "precision = TP / (TP + FP); recall = TP / (TP + FN)\nprint('precision', round(precision, 3), '| recall', round(recall, 3))",
   "text": "precision 0.748 | recall 0.753",
   "imgs": []
  },
  "7.3.1": {
   "code": "fpr, tpr, thr = metrics.roc_curve(tr['Stayed'], tr['Stayed_Prob'], drop_intermediate=False)\nauc = metrics.roc_auc_score(tr['Stayed'], tr['Stayed_Prob'])\nplt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--')\nplt.xlabel('FPR'); plt.ylabel('TPR'); plt.legend(); plt.title('ROC (train)')",
   "text": "",
   "imgs": [
    "/assign/employee-retention/7_3_1-1.png"
   ]
  },
  "7.3.3": {
   "code": "numbers = [x / 10 for x in range(10)]\nfor i in numbers: tr[i] = tr['Stayed_Prob'].map(lambda x: 1 if x > i else 0)\nrows = []\nfor i in numbers:\n    tn, fp, fn, tp = metrics.confusion_matrix(tr['Stayed'], tr[i]).ravel()\n    rows.append([i, (tp + tn) / (tp + tn + fp + fn), tp / (tp + fn), tn / (tn + fp)])\ncutoff_df = pd.DataFrame(rows, columns=['prob', 'accuracy', 'sensi', 'speci'])\ncutoff_df.plot.line(x='prob', y=['accuracy', 'sensi', 'speci'])\nprint(cutoff_df.round(3).to_string(index=False))",
   "text": " prob  accuracy  sensi  speci\n  0.0     0.521  1.000  0.000\n  0.1     0.587  0.995  0.144\n  0.2     0.659  0.961  0.330\n  0.3     0.704  0.910  0.480\n  0.4     0.731  0.839  0.613\n  0.5     0.739  0.753  0.723\n  0.6     0.729  0.644  0.822\n  0.7     0.705  0.528  0.898\n  0.8     0.660  0.388  0.958\n  0.9     0.588  0.216  0.993",
   "imgs": [
    "/assign/employee-retention/7_3_3-1.png"
   ]
  },
  "7.3.4": {
   "code": "cutoff = 0.5\ntr['final_predicted'] = tr['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)\nprint('cutoff', cutoff)",
   "text": "cutoff 0.5",
   "imgs": []
  },
  "7.3.6": {
   "code": "c2 = metrics.confusion_matrix(tr['Stayed'], tr['final_predicted'])\nprint('accuracy', round(metrics.accuracy_score(tr['Stayed'], tr['final_predicted']), 4))\nprint(c2)",
   "text": "accuracy 0.7387\n[[17104  6559]\n [ 6359 19422]]",
   "imgs": []
  },
  "7.3.10": {
   "code": "from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(tr['Stayed'], tr['Stayed_Prob'])\nplt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')",
   "text": "",
   "imgs": [
    "/assign/employee-retention/7_3_10-1.png"
   ]
  },
  "8.1.5": {
   "code": "X_validation_sm = sm.add_constant(X_validation[col])\npv = res.predict(X_validation_sm)\nva = pd.DataFrame({'Stayed': y_val_d.values.reshape(-1), 'Stayed_Prob': pv.values.reshape(-1)})\nva['final_predicted'] = va['Stayed_Prob'].map(lambda x: 1 if x > cutoff else 0)\nprint(va.head(6).round(3).to_string())",
   "text": "   Stayed  Stayed_Prob  final_predicted\n0       1        0.908                1\n1       1        0.941                1\n2       1        0.237                0\n3       1        0.570                1\n4       0        0.126                0\n5       1        0.555                1",
   "imgs": []
  },
  "8.2": {
   "code": "print('accuracy validation', round(metrics.accuracy_score(va['Stayed'], va['final_predicted']), 4), '| train', round(metrics.accuracy_score(tr['Stayed'], tr['final_predicted']), 4))",
   "text": "accuracy validation 0.7357 | train 0.7387",
   "imgs": []
  },
  "8.3": {
   "code": "cm_val = metrics.confusion_matrix(va['Stayed'], va['final_predicted'])\nTN, FP, FN, TP = cm_val.ravel()\nprint(pd.DataFrame(cm_val, index=['thực: nghỉ', 'thực: ở'], columns=['đoán: nghỉ', 'đoán: ở']))",
   "text": "            đoán: nghỉ  đoán: ở\nthực: nghỉ        7357     2805\nthực: ở           2796     8233",
   "imgs": []
  },
  "8.4": {
   "code": "print('sensitivity', round(TP / (TP + FN), 3), '| specificity', round(TN / (TN + FP), 3))",
   "text": "sensitivity 0.746 | specificity 0.724",
   "imgs": []
  },
  "8.5": {
   "code": "print('precision', round(TP / (TP + FP), 3), '| recall', round(TP / (TP + FN), 3))",
   "text": "precision 0.746 | recall 0.746",
   "imgs": []
  }
 }
};
