import type { Assignment } from "@/data/assign/types";

export const asg: Assignment = {
 "id": "fraud-claim",
 "course": "C4 · Học máy nâng cao",
 "title": [
  "Bài tập: Phát hiện hồ sơ bồi hoàn gian lận",
  "Assignment: Fraudulent Claim Detection"
 ],
 "file": "Fraudulent_Claim_Detection_Starter.ipynb",
 "story": [
  "Starter gốc là hồ sơ bồi hoàn bảo hiểm xe. Trong Lotus Spa: mỗi dòng là một yêu cầu hoàn tiền của khách, fraud_reported = Y nếu hồ sơ gian lận. Bạn dựng hai mô hình (hồi quy logistic và random forest) để chị Lan biết nên kiểm tra kỹ hồ sơ nào. Các con số là kết quả chạy thật trên insurance_claims.csv (1.000 dòng, 24,7% gian lận).",
  "The original starter is vehicle insurance claims. In Lotus Spa: each row is a customer refund request, fraud_reported = Y when the claim is fraudulent. You build two models (logistic regression and random forest) so chị Lan knows which claims to check closely. The numbers are real results on insurance_claims.csv (1,000 rows, 24.7% fraud)."
 ],
 "concepts": [
  "d-17c98c091798"
 ],
 "cells": [
  {
   "t": "md",
   "s": "## **Fraudulent Claim Detection**"
  },
  {
   "t": "md",
   "s": "## Problem Statement\nGlobal Insure, a leading insurance company, processes thousands of claims annually. However, a significant percentage of these claims turn out to be fraudulent, resulting in considerable financial losses. The company’s current process for identifying fraudulent claims involves manual inspections, which is time-consuming and inefficient. Fraudulent claims are often detected too late in the process, after the company has already paid out significant amounts. Global Insure wants to improve its fraud detection process using data-driven insights to classify claims as fraudulent or legitimate early in the approval process. This would minimise financial losses and optimise the overall claims handling process.\n\n## Business Objective\nGlobal Insure wants to build a model to classify insurance claims as either fraudulent or legitimate based on historical claim details and customer profiles. By using features like claim amounts, customer profiles and claim types, the company aims to predict which claims are likely to be fraudulent before they are approved.\n\n\nBased on this assignment, you have to answer the following questions:<br>\n\n● How can we analyse historical claim data to detect patterns that indicate fraudulent claims?<br>\n● Which features are most predictive of fraudulent behaviour?<br>\n● Can we predict the likelihood of fraud for an incoming claim, based on past data?<br>\n● What insights can be drawn from the model that can help in improving the fraud detection process?<br>"
  },
  {
   "t": "md",
   "s": "## Assignment Tasks\nYou need to perform the following steps for successfully completing this assignment:\n1. Data Preparation\n2. Data Cleaning\n3. Train Validation Split 70-30\n4. EDA on Training Data\n5. EDA on Validation Data (optional)\n6. Feature Engineering\n7. Model Building\n8. Predicting and Model Evaluation"
  },
  {
   "t": "md",
   "s": "## Data Dictionary\nThe insurance claims data has 40 Columns and 1000 Rows. Following data dictionary provides the description for each column present in dataset:<br>\n\n<table>\n  <thead>\n    <tr>\n      <th>Column Name</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>months_as_customer</td>\n      <td>Represents the duration in months that a customer has been associated with the insurance company.</td>\n    </tr>\n    <tr>\n      <td>age</td>\n      <td>Represents the age of the insured person.</td>\n    </tr>\n    <tr>\n      <td>policy_number</td>\n      <td>Represents a unique identifier for each insurance policy.</td>\n    </tr>\n    <tr>\n      <td>policy_bind_date</td>\n      <td>Represents the date when the insurance policy was initiated.</td>\n    </tr>\n    <tr>\n      <td>policy_state</td>\n      <td>Represents the state where the insurance policy is applicable.</td>\n    </tr>\n    <tr>\n      <td>policy_csl</td>\n      <td>Represents the combined single limit for the insurance policy.</td>\n    </tr>\n    <tr>\n      <td>policy_deductable</td>\n      <td>Represents the amount that the insured person needs to pay before the insurance coverage kicks in.</td>\n    </tr>\n    <tr>\n      <td>policy_annual_premium</td>\n      <td>Represents the yearly cost of the insurance policy.</td>\n    </tr>\n    <tr>\n      <td>umbrella_limit</td>\n      <td>Represents an additional layer of liability coverage provided beyond the limits of the primary insurance policy.</td>\n    </tr>\n    <tr>\n      <td>insured_zip</td>\n      <td>Represents the zip code of the insured person.</td>\n    </tr>\n    <tr>\n      <td>insured_sex</td>\n      <td>Represents the gender of the insured person.</td>\n    </tr>\n    <tr>\n      <td>insured_education_level</td>\n      <td>Represents the highest educational qualification of the insured person.</td>\n    </tr>\n    <tr>\n      <td>insured_occupation</td>\n      <td>Represents the profession or job of the insured person.</td>\n    </tr>\n    <tr>\n      <td>insured_hobbies</td>\n      <td>Represents the hobbies or leisure activities of the insured person.</td>\n    </tr>\n    <tr>\n      <td>insured_relationship</td>\n      <td>Represents the relationship of the insured person to the policyholder.</td>\n    </tr>\n    <tr>\n      <td>capital-gains</td>\n      <td>Represents the profit earned from the sale of assets such as stocks, bonds, or real estate.</td>\n    </tr>\n    <tr>\n      <td>capital-loss</td>\n      <td>Represents the loss incurred from the sale of assets such as stocks, bonds, or real estate.</td>\n    </tr>\n    <tr>\n      <td>incident_date</td>\n      <td>Represents the date when the incident or accident occurred.</td>\n    </tr>\n    <tr>\n      <td>incident_type</td>\n      <td>Represents the category or type of incident that led to the claim.</td>\n    </tr>\n    <tr>\n      <td>collision_type</td>\n      <td>Represents the type of collision that occurred in an accident.</td>\n    </tr>\n    <tr>\n      <td>incident_severity</td>\n      <td>Represents the extent of damage or injury caused by the incident.</td>\n    </tr>\n    <tr>\n      <td>authorities_contacted</td>\n      <td>Represents the authorities or agencies that were contacted after the incident.</td>\n    </tr>\n    <tr>\n      <td>incident_state</td>\n      <td>Represents the state where the incident occurred.</td>\n    </tr>\n    <tr>\n      <td>incident_city</td>\n      <td>Represents the city where the incident occurred.</td>\n    </tr>\n    <tr>\n      <td>incident_location</td>\n      <td>Represents the specific location or address where the incident occurred.</td>\n    </tr>\n    <tr>\n      <td>incident_hour_of_the_day</td>\n      <td>Represents the hour of the day when the incident occurred.</td>\n    </tr>\n    <tr>\n      <td>number_of_vehicles_involved</td>\n      <td>Represents the total number of vehicles involved in the incident.</td>\n    </tr>\n    <tr>\n      <td>property_damage</td>\n      <td>Represents whether there was any damage to property in the incident.</td>\n    </tr>\n    <tr>\n      <td>bodily_injuries</td>\n      <td>Represents the number of bodily injuries resulting from the incident.</td>\n    </tr>\n    <tr>\n      <td>witnesses</td>\n      <td>Represents the number of witnesses present at the scene of the incident.</td>\n    </tr>\n    <tr>\n      <td>police_report_available</td>\n      <td>Represents whether a police report is available for the incident.</td>\n    </tr>\n    <tr>\n      <td>total_claim_amount</td>\n      <td>Represents the total amount claimed by the insured person for the incident.</td>\n    </tr>\n    <tr>\n      <td>injury_claim</td>\n      <td>Represents the amount claimed for injuries sustained in the incident.</td>\n    </tr>\n    <tr>\n      <td>property_claim</td>\n      <td>Represents the amount claimed for property damage in the incident.</td>\n    </tr>\n    <tr>\n      <td>vehicle_claim</td>\n      <td>Represents the amount claimed for vehicle damage in the incident.</td>\n    </tr>\n    <tr>\n      <td>auto_make</td>\n      <td>Represents the manufacturer of the insured vehicle.</td>\n    </tr>\n    <tr>\n      <td>auto_model</td>\n      <td>Represents the specific model of the insured vehicle.</td>\n    </tr>\n    <tr>\n      <td>auto_year</td>\n      <td>Represents the year of manufacture of the insured vehicle.</td>\n    </tr>\n    <tr>\n      <td>fraud_reported</td>\n      <td>Represents whether the claim was reported as fraudulent or not.</td>\n    </tr>\n    <tr>\n      <td>_c39</td>\n      <td>Represents an unknown or unspecified variable.</td>\n    </tr>\n  </tbody>\n</table>"
  },
  {
   "t": "md",
   "s": "## **1. Data Preparation**\nIn this step, read the dataset provided in CSV format and look at basic statistics of the data, including preview of data, dimension of data, column descriptions and data types."
  },
  {
   "t": "md",
   "s": "### **1.0 Import Libraries**"
  },
  {
   "t": "code",
   "s": "# Supress unnecessary warnings\nimport warnings\nwarnings.filterwarnings(\"ignore\")"
  },
  {
   "t": "code",
   "s": "# Import necessary libraries\nimport numpy as np\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt"
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
   "s": "# Check at the first few entries\n"
  },
  {
   "t": "code",
   "s": "# Inspect the shape of the dataset\n"
  },
  {
   "t": "code",
   "s": "# Inspect the features in the dataset\n"
  },
  {
   "t": "md",
   "s": "## **2. Data Cleaning** <font color = red>[10 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **2.1 Handle null values** <font color = red>[2 marks]</font>"
  },
  {
   "t": "md",
   "s": "#### **2.1.1** Examine the columns to determine if any value or column needs to be treated <font color=\"red\">[1 Mark]</font>",
   "ref": "2.1.1"
  },
  {
   "t": "code",
   "s": "# Check the number of missing values in each column\n"
  },
  {
   "t": "md",
   "s": "#### **2.1.2** Handle rows containing null values <font color=\"red\">[1 Mark]</font>",
   "ref": "2.1.2"
  },
  {
   "t": "code",
   "s": "# Handle the rows containing null values\n"
  },
  {
   "t": "md",
   "s": "### **2.2 Identify and handle redundant values and columns** <font color = red>[5 marks]</font>"
  },
  {
   "t": "md",
   "s": "#### **2.2.1** Examine the columns to determine if any value or column needs to be treated <font color=\"red\">[2 Mark]</font>",
   "ref": "2.2.1"
  },
  {
   "t": "code",
   "s": "# Write code to display all the columns with their unique values and counts and check for redundant values\n"
  },
  {
   "t": "md",
   "s": "#### **2.2.2** Identify and drop any columns that are completely empty <font color=\"red\">[1 Mark]</font>",
   "ref": "2.2.2"
  },
  {
   "t": "code",
   "s": "# Identify and drop any columns that are completely empty\n"
  },
  {
   "t": "md",
   "s": "#### **2.2.3** Identify and drop rows where features have illogical or invalid values, such as negative values for features that should only have positive values <font color=\"red\">[1 Mark]</font>",
   "ref": "2.2.3"
  },
  {
   "t": "code",
   "s": "# Identify and drop rows where features have illogical or invalid values, such as negative values for features that should only have positive values\n"
  },
  {
   "t": "md",
   "s": "#### **2.2.4** Identify and remove columns where a large proportion of the values are unique or near-unique, as these columns are likely to be identifiers or have very limited predictive power <font color=\"red\">[1 Mark]</font>",
   "ref": "2.2.4"
  },
  {
   "t": "code",
   "s": "# Identify and remove columns that are likely to be identifiers or have very limited predictive power\n"
  },
  {
   "t": "code",
   "s": "# Check the dataset\n"
  },
  {
   "t": "md",
   "s": "### **2.3 Fix Data Types** <font color = red>[3 marks]</font>\nCarefully examine the dataset and identify columns that contain date or time information but are not stored as the appropriate data type. Convert these columns to the correct datetime data type to enable proper analysis and manipulation of temporal information.",
   "ref": "2.3"
  },
  {
   "t": "code",
   "s": "# Fix the data types of the columns with incorrect data types\n"
  },
  {
   "t": "code",
   "s": "# Check the features of the data again\n"
  },
  {
   "t": "md",
   "s": "## **3. Train-Validation Split** <font color = red>[5 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **3.1 Import required libraries**  "
  },
  {
   "t": "code",
   "s": "# Import train-test-split\nfrom sklearn.model_selection import train_test_split"
  },
  {
   "t": "md",
   "s": "### **3.2 Define feature and target variables** <font color = red>[2 Marks]</font>",
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
   "s": "# Split the dataset into 70% train and 30% validation and use stratification on the target variable\n\n# Reset index for all train and test sets\n"
  },
  {
   "t": "md",
   "s": "## **4. EDA on training data** <font color = red>[20 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **4.1 Perform univariate analysis** <font color = red>[5 marks]</font>"
  },
  {
   "t": "md",
   "s": "#### **4.1.1** Identify and select numerical columns from training data for univariate analysis <font color = \"red\">[1 Mark]</font>",
   "ref": "4.1.1"
  },
  {
   "t": "code",
   "s": "# Select numerical columns\n"
  },
  {
   "t": "md",
   "s": "#### **4.1.2** Visualise the distribution of selected numerical features using appropriate plots to understand their characteristics <font color = \"red\">[4 Marks]</font>",
   "ref": "4.1.2"
  },
  {
   "t": "code",
   "s": "# Plot all the numerical columns to understand their distribution\n"
  },
  {
   "t": "md",
   "s": "### **4.2 Perform correlation analysis** <font color=\"red\">[3 Marks]</font>",
   "ref": "4.2"
  },
  {
   "t": "md",
   "s": " Investigate the relationships between numerical features to identify potential multicollinearity or dependencies. Visualise the correlation structure using an appropriate method to gain insights into feature relationships."
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
   "s": "Examine the distribution of the target variable to identify potential class imbalances using visualisation for better understanding."
  },
  {
   "t": "code",
   "s": "# Plot a bar chart to check class balance\n"
  },
  {
   "t": "md",
   "s": "### **4.4 Perform bivariate analysis** <font color=\"red\">[10 Marks]</font>"
  },
  {
   "t": "md",
   "s": "#### **4.4.1** Target likelihood analysis for categorical variables. <font color=\"red\">[5 Marks]</font>\nInvestigate the relationships between categorical features and the target variable by analysing the target event likelihood (for the `'Y'` event) for each level of every relevant categorical feature. Through this analysis, identify categorical features that do not contribute much in explaining the variation in the target variable.",
   "ref": "4.4.1"
  },
  {
   "t": "code",
   "s": "# Write a function to calculate and analyse the target variable likelihood for categorical features\n"
  },
  {
   "t": "md",
   "s": "#### **4.4.2** Explore the relationships between numerical features and the target variable to understand their impact on the target outcome using appropriate visualisation techniques to identify trends and potential interactions. <font color=\"red\">[5 Marks]</font>",
   "ref": "4.4.2"
  },
  {
   "t": "code",
   "s": "# Visualise the relationship between numerical features and the target variable to understand their impact on the target outcome\n"
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
   "s": "#### **5.1.1** Identify and select numerical columns from training data for univariate analysis.",
   "ref": "5.1.1"
  },
  {
   "t": "code",
   "s": "# Select numerical columns\n"
  },
  {
   "t": "md",
   "s": "#### **5.1.2** Visualise the distribution of selected numerical features using appropriate plots to understand their characteristics.",
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
   "s": " Investigate the relationships between numerical features to identify potential multicollinearity or dependencies. Visualise the correlation structure using an appropriate method to gain insights into feature relationships."
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
   "s": "Examine the distribution of the target variable to identify potential class imbalances. Visualise the distribution for better understanding."
  },
  {
   "t": "code",
   "s": "# Plot a bar chart to check class balance\n"
  },
  {
   "t": "md",
   "s": "### **5.4 Perform bivariate analysis**"
  },
  {
   "t": "md",
   "s": "#### **5.4.1** Target likelihood analysis for categorical variables.\nInvestigate the relationships between categorical features and the target variable by analysing the target event likelihood (for the `'Y'` event) for each level of every relevant categorical feature. Through this analysis, identify categorical features that do not contribute much in explaining the variation in the target variable.",
   "ref": "5.4.1"
  },
  {
   "t": "code",
   "s": "# Write a function to calculate and analyse the target variable likelihood for categorical features\n"
  },
  {
   "t": "md",
   "s": "#### **5.4.2** Explore the relationships between numerical features and the target variable to understand their impact on the target outcome. Utilise appropriate visualisation techniques to identify trends and potential interactions.",
   "ref": "5.4.2"
  },
  {
   "t": "code",
   "s": "# Visualise the relationship between numerical features and the target variable to understand their impact on the target outcome\n"
  },
  {
   "t": "md",
   "s": "## **6. Feature Engineering** <font color = red>[25 marks]</font>"
  },
  {
   "t": "md",
   "s": "### **6.1 Perform resampling** <font color=\"red\">[3 Marks]</font>",
   "ref": "6.1"
  },
  {
   "t": "md",
   "s": "Handle class imbalance in the training data by applying resampling technique.\n\nUse the **RandomOverSampler** technique to balance the data and handle class imbalance. This method increases the number of samples in the minority class by randomly duplicating them, creating synthetic data points with similar characteristics. This helps prevent the model from being biased toward the majority class and improves its ability to predict the minority class more accurately.\n\n**Note:** You can try other resampling techniques to handle class imbalance"
  },
  {
   "t": "code",
   "s": "# Import RandomOverSampler from imblearn library\nfrom imblearn.over_sampling import RandomOverSampler\n\n# Perform resampling on training data\n"
  },
  {
   "t": "md",
   "s": "### **6.2 Feature Creation** <font color=\"red\">[4 marks]</font>",
   "ref": "6.2"
  },
  {
   "t": "md",
   "s": "Create new features from existing ones to enhance the model's ability to capture patterns in the data. This may involve deriving features from date/time columns, combining features, or creating interaction terms."
  },
  {
   "t": "code",
   "s": "# Create new features based on your understanding for both training and validation data\n"
  },
  {
   "t": "md",
   "s": "### **6.3 Handle redundant columns** <font color=\"red\">[3 marks]</font>",
   "ref": "6.3"
  },
  {
   "t": "md",
   "s": "Analyse the data to identify features that may be redundant or contribute minimal information toward predicting the target variable and drop them.\n\n- You can consider features that exhibit high correlation with other variables, which you may have observed during the EDA phase.\n- Features that don't strongly influence the prediction, which you may have observed during the EDA phase.\n- Categorical columns with low value counts for some levels can be remapped to reduce number of unique levels, and features with very high counts for just one level may be removed, as they resemble unique identifier columns and do not provide substantial predictive value.\n- Additionally, eliminate any columns from which the necessary features have already been extracted in the preceding step."
  },
  {
   "t": "code",
   "s": "# Drop redundant columns from training and validation data\n"
  },
  {
   "t": "code",
   "s": "# Check the data\n"
  },
  {
   "t": "md",
   "s": "### **6.4 Combine values in Categorical Columns** <font color=\"red\">[6 Marks]</font>\nDuring the EDA process, categorical columns with multiple unique values may be identified. To enhance model performance, it is essential to refine these categorical features by grouping values that have low frequency or provide limited predictive information.\n\nCombine categories that occur infrequently or exhibit similar behavior to reduce sparsity and improve model generalisation.",
   "ref": "6.4"
  },
  {
   "t": "code",
   "s": "# Combine categories that have low frequency or provide limited predictive information\n"
  },
  {
   "t": "md",
   "s": "### **6.5 Dummy variable creation** <font color=\"red\">[6 Marks]</font>\nTransform categorical variables into numerical representations using dummy variables. Ensure consistent encoding between training and validation data."
  },
  {
   "t": "md",
   "s": "#### **6.5.1** Identify categorical columns for dummy variable creation <font color=\"red\">[1 Mark]</font>",
   "ref": "6.5.1"
  },
  {
   "t": "code",
   "s": "# Identify the categorical columns for creating dummy variables\n"
  },
  {
   "t": "md",
   "s": "#### **6.5.2** Create dummy variables for categorical columns in training data <font color=\"red\">[2 Marks]</font>",
   "ref": "6.5.2"
  },
  {
   "t": "code",
   "s": "# Create dummy variables using the 'get_dummies' for categorical columns in training data\n"
  },
  {
   "t": "md",
   "s": "#### **6.5.3** Create dummy variables for categorical columns in validation data <font color=\"red\">[2 Marks]</font>",
   "ref": "6.5.3"
  },
  {
   "t": "code",
   "s": "# Create dummy variables using the 'get_dummies' for categorical columns in validation data\n"
  },
  {
   "t": "md",
   "s": "#### **6.5.4** Create dummy variable for dependent feature in training and validation data <font color = \"red\">[1 Mark]</font>",
   "ref": "6.5.4"
  },
  {
   "t": "code",
   "s": "# Create dummy variable for dependent feature in training data\n\n# Create dummy variable for dependent feature in validation data\n"
  },
  {
   "t": "md",
   "s": "### **6.6 Feature scaling** <font color = red>[3 marks]</font>\nScale numerical features to a common range to prevent features with larger values from dominating the model.  Choose a scaling method appropriate for the data and the chosen model. Apply the same scaling to both training and validation data.",
   "ref": "6.6"
  },
  {
   "t": "code",
   "s": "# Import the necessary scaling tool from scikit-learn\n\n# Scale the numeric features present in the training data\n\n# Scale the numeric features present in the validation data\n"
  },
  {
   "t": "md",
   "s": "## **7. Model Building** <font color = red>[50 marks]</font>"
  },
  {
   "t": "md",
   "s": "In this task, you will be building two machine learning models: Logistic Regression and Random Forest. Each model will go through a structured process to ensure optimal performance. The key steps for each model are outlined below:\n\n**Logistic Regression Model**\n- Feature Selection using RFECV – Identify the most relevant features using Recursive Feature Elimination with Cross-Validation.\n- Model Building and Multicollinearity Assessment – Build the logistic regression model and analyse statistical aspects such as p-values and VIFs to detect multicollinearity.\n- Model Training and Evaluation on Training Data – Fit the model on the training data and assess initial performance.\n- Finding the Optimal Cutoff – Determine the best probability threshold by analysing the sensitivity-specificity tradeoff and precision-recall tradeoff.\n- FInal Prediction and Evaluation on Training Data using the Optimal Cutoff – Generate final predictions using the selected cutoff and evaluate model performance.\n\n**Random Forest Model**\n- Get Feature Importances - Obtain the importance scores for each feature and select the important features to train the model.\n- Model Evaluation on Training Data – Assess performance metrics on the training data.\n- Check Model Overfitting using Cross-Validation – Evaluate generalisation by performing cross-validation.\n- Hyperparameter Tuning using Grid Search – Optimise model performance by fine-tuning hyperparameters.\n- Final Model and Evaluation on Training Data – Train the final model using the best parameters and assess its performance."
  },
  {
   "t": "md",
   "s": "### **7.1 Feature selection** <font color = red>[4 marks]</font>\nIdentify and select the most relevant features for building a logistic regression model using Recursive Feature Elimination with Cross-Validation (RFECV)."
  },
  {
   "t": "md",
   "s": "#### **7.1.1** Import necessary libraries <font color=\"red\">[1 Mark]</font>",
   "ref": "7.1.1"
  },
  {
   "t": "code",
   "s": "# Import necessary libraries\n"
  },
  {
   "t": "md",
   "s": "#### **7.1.2** Perform feature selection <font color=\"red\">[2 Mark]</font>",
   "ref": "7.1.2"
  },
  {
   "t": "code",
   "s": "# Apply RFECV to identify the most relevant features\n"
  },
  {
   "t": "code",
   "s": "# Display the features ranking by RFECV in a DataFrame\n"
  },
  {
   "t": "md",
   "s": "#### **7.1.2** Retain the selected features <font color=\"red\">[1 Mark]</font>",
   "ref": "7.1.2b"
  },
  {
   "t": "code",
   "s": "# Put columns selected by RFECV into variable 'col'\n"
  },
  {
   "t": "md",
   "s": "### **7.2 Build Logistic Regression Model** <font color = red>[12 marks]</font>\nAfter selecting the optimal features using RFECV, utilise these features to build a logistic regression model with Statsmodels. This approach enables a detailed statistical analysis of the model, including the assessment of p-values and Variance Inflation Factors (VIFs). Evaluating these metrics is crucial for detecting multicollinearity and ensuring that the selected predictors are not highly correlated."
  },
  {
   "t": "md",
   "s": "#### **7.2.1** Select relevant features and add constant in training data <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.1"
  },
  {
   "t": "code",
   "s": "# Select only the columns selected by RFECV\n"
  },
  {
   "t": "code",
   "s": "# Import statsmodels and add constant\n\n# Check the data\n"
  },
  {
   "t": "md",
   "s": "#### **7.2.2** Fit logistic regression model <font color=\"red\">[2 Marks]</font>",
   "ref": "7.2.2"
  },
  {
   "t": "code",
   "s": "# Fit a logistic Regression model on X_train after adding a constant and output the summary\n"
  },
  {
   "t": "md",
   "s": "**Model Interpretation**\n\nThe output summary table will provide the features used for building model along with coefficient of each of the feature and their p-value. The p-value in a logistic regression model is used to assess the statistical significance of each coefficient. Lesser the p-value, more significant the feature is in the model.\n\nA positive coefficient will indicate that an increase in the value of feature would increase the odds of the event occurring. On the other hand, a negative coefficient means the opposite, i.e, an increase in the value of feature would decrease the odds of the event occurring."
  },
  {
   "t": "md",
   "s": "Now check VIFs for presence of multicollinearity in the model."
  },
  {
   "t": "md",
   "s": "#### **7.2.3** Evaluate VIF of features to assess multicollinearity <font color=\"red\">[2 Marks]</font>",
   "ref": "7.2.3"
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
   "s": "Proceed to the next step if p-values and VIFs are within acceptable ranges. If you observe high p-values or VIFs, drop the features and retrain the model. <font color=\"red\">[THIS IS OPTIONAL]</font>"
  },
  {
   "t": "md",
   "s": "#### **7.2.4** Make predictions on training data <font color = \"red\">[1 Mark]</font>",
   "ref": "7.2.4"
  },
  {
   "t": "code",
   "s": "# Predict the probabilities on the training data\n\n# Reshape it into an array\n"
  },
  {
   "t": "md",
   "s": "#### **7.2.5** Create a DataFrame that includes actual fraud reported flags, predicted probabilities, and a column indicating predicted classifications based on a cutoff value of 0.5 <font color=\"red\">[1 Mark]</font>\n\n",
   "ref": "7.2.5"
  },
  {
   "t": "code",
   "s": "# Create a new DataFrame containing the actual fraud reported flag and the probabilities predicted by the model\n\n# Create new column indicating predicted classifications based on a cutoff value of 0.5\n"
  },
  {
   "t": "md",
   "s": "**Model performance evaluation**\n\nEvaluate the performance of the model based on predictions made on the training data."
  },
  {
   "t": "md",
   "s": "#### **7.2.6** Check the accuracy of the model <font color = \"red\">[1 Mark]</font>",
   "ref": "7.2.6"
  },
  {
   "t": "code",
   "s": "# Import metrics from sklearn for evaluation\nfrom sklearn import metrics\n\n# Check the accuracy of the model\n"
  },
  {
   "t": "md",
   "s": "#### **7.2.7** Create a confusion matrix based on the predictions made on the training data <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.7"
  },
  {
   "t": "code",
   "s": "# Create confusion matrix\n"
  },
  {
   "t": "md",
   "s": "#### **7.2.8** Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1 Mark]</font>",
   "ref": "7.2.8"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "#### **7.2.9** Calculate sensitivity, specificity, precision, recall and F1-score <font color=\"red\">[2 Marks]</font>",
   "ref": "7.2.9"
  },
  {
   "t": "code",
   "s": "# Calculate the sensitivity\n\n\n# Calculate the specificity\n\n\n# Calculate Precision\n\n\n# Calculate Recall\n\n\n# Calculate F1 Score\n"
  },
  {
   "t": "md",
   "s": "### **7.3 Find the Optimal Cutoff** <font color = red>[12 marks]</font>\nFind the optimal cutoff to improve model performance by evaluating various cutoff values and their impact on relevant metrics."
  },
  {
   "t": "md",
   "s": "#### **7.3.1** Plot ROC Curve  to visualise the trade-off between true positive rate and false positive rate across different classification thresholds <font color=\"red\">[2 Marks]</font>",
   "ref": "7.3.1"
  },
  {
   "t": "code",
   "s": "# Import libraries or function to plot the ROC curve\n\n\n# Define ROC function\n"
  },
  {
   "t": "code",
   "s": "# Call the ROC function\n"
  },
  {
   "t": "md",
   "s": "**Sensitivity and Specificity tradeoff**\n\nAfter analysing the area under the curve of the ROC, check the sensitivity and specificity tradeoff to find the optimal cutoff point."
  },
  {
   "t": "md",
   "s": "#### **7.3.2** Predict on training data at various probability cutoffs <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.2"
  },
  {
   "t": "code",
   "s": "# Create columns with different probability cutoffs to explore the impact of cutoff on model performance\n"
  },
  {
   "t": "md",
   "s": "#### **7.3.3** Plot accuracy, sensitivity, specificity at different values of probability cutoffs <font color=\"red\">[2 Marks]</font>",
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
   "s": "#### **7.3.4** Create a column for final prediction based on optimal cutoff <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.4"
  },
  {
   "t": "code",
   "s": "# Create a column for final prediction based on the optimal cutoff\n"
  },
  {
   "t": "md",
   "s": "#### **7.3.5** Calculate the accuracy <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.5"
  },
  {
   "t": "code",
   "s": "# Check the accuracy now\n"
  },
  {
   "t": "md",
   "s": "#### **7.3.6** Create confusion matrix <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.6"
  },
  {
   "t": "code",
   "s": "# Create the confusion matrix once again\n"
  },
  {
   "t": "md",
   "s": "#### **7.3.7** Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.7"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "#### **7.3.8** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color=\"red\">[2 Mark]</font>",
   "ref": "7.3.8"
  },
  {
   "t": "code",
   "s": "# Calculate the sensitivity\n\n\n# Calculate the specificity\n\n\n# Calculate Precision\n\n\n# Calculate Recall\n\n\n# Calculate F1 Score\n"
  },
  {
   "t": "md",
   "s": "**Precision and Recall tradeoff**\n\nCheck optimal cutoff value by plotting precision-recall curve, and adjust the cutoff based on precision and recall tradeoff if required."
  },
  {
   "t": "code",
   "s": "# Import precision-recall curve function\nfrom sklearn.metrics import precision_recall_curve"
  },
  {
   "t": "md",
   "s": "#### **7.3.9** Plot precision-recall curve <font color=\"red\">[1 Mark]</font>",
   "ref": "7.3.9"
  },
  {
   "t": "code",
   "s": "# Plot precision-recall curve\n"
  },
  {
   "t": "md",
   "s": "### **7.4 Build Random Forest Model** <font color = red>[12 marks]</font>\nNow that you have built a logistic regression model, let's move on to building a random forest model."
  },
  {
   "t": "md",
   "s": "#### **7.4.1** Import necessary libraries",
   "ref": "7.4.1"
  },
  {
   "t": "code",
   "s": "# Import necessary libraries\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report\nfrom sklearn.model_selection import cross_val_score, GridSearchCV"
  },
  {
   "t": "md",
   "s": "#### **7.4.2** Build the random forest model <font color=\"red\">[1 Mark]</font>",
   "ref": "7.4.2"
  },
  {
   "t": "code",
   "s": "# Build a base random forest model\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.3** Get feature importance scores and select important features <font color=\"red\">[2 Marks]</font>",
   "ref": "7.4.3"
  },
  {
   "t": "code",
   "s": "# Get feature importance scores from the trained model\n\n# Create a DataFrame to visualise the importance scores\n"
  },
  {
   "t": "code",
   "s": "# Select features with high importance scores\n\n# Create a new training data with only the selected features\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.4** Train the model with selected features <font color=\"red\">[1 Mark]</font>",
   "ref": "7.4.4"
  },
  {
   "t": "code",
   "s": "# Fit the model on the training data with selected features\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.5** Generate predictions on the training data <font color=\"red\">[1 Mark]</font>",
   "ref": "7.4.5"
  },
  {
   "t": "code",
   "s": "# Generate predictions on training data\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.6** Check accuracy of the model <font color=\"red\">[1 Mark]</font>",
   "ref": "7.4.6"
  },
  {
   "t": "code",
   "s": "# Check accuracy of the model\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.7** Create confusion matrix <font color=\"red\">[1 Mark]</font>",
   "ref": "7.4.7"
  },
  {
   "t": "code",
   "s": "# Create the confusion matrix to visualise the performance\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.8** Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1 Mark]</font>",
   "ref": "7.4.8"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.9** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color=\"red\">[2 Marks]</font>",
   "ref": "7.4.9"
  },
  {
   "t": "code",
   "s": "# Calculate the sensitivity\n\n\n# Calculate the specificity\n\n\n# Calculate Precision\n\n\n# Calculate Recall\n\n\n# Calculate F1 Score\n"
  },
  {
   "t": "md",
   "s": "#### **7.4.10** Check if the model is overfitting training data using cross validation <font color = \"red\">[2 marks]</font>",
   "ref": "7.4.10"
  },
  {
   "t": "code",
   "s": "# Use cross validation to check if the model is overfitting\n"
  },
  {
   "t": "md",
   "s": "### **7.5 Hyperparameter Tuning** <font color = red>[10 Marks]</font>\n Enhance the performance of the random forest model by systematically exploring and selecting optimal hyperparameter values using grid search."
  },
  {
   "t": "md",
   "s": "#### **7.5.1** Use grid search to find the best hyperparameter values <font color = red>[2 Marks]</font>",
   "ref": "7.5.1"
  },
  {
   "t": "code",
   "s": "# Use grid search to find the best hyperparamter values\n\n# Best Hyperparameters\n"
  },
  {
   "t": "md",
   "s": "#### **7.5.2** Build a random forest model based on hyperparameter tuning results <font color = red>[1 Mark]</font>",
   "ref": "7.5.2"
  },
  {
   "t": "code",
   "s": "# Building random forest model based on results of hyperparameter tuning\n"
  },
  {
   "t": "md",
   "s": "#### **7.5.3** Make predictions on training data <font color = red>[1 Mark]</font>",
   "ref": "7.5.3"
  },
  {
   "t": "code",
   "s": "# Make predictions on training data\n"
  },
  {
   "t": "md",
   "s": "#### **7.5.4** Check accuracy of Random Forest Model <font color = red>[1 Mark]</font>",
   "ref": "7.5.4"
  },
  {
   "t": "code",
   "s": "# Check the accuracy\n"
  },
  {
   "t": "md",
   "s": "#### **7.5.5** Create confusion matrix <font color = red>[1 Mark]</font>",
   "ref": "7.5.5"
  },
  {
   "t": "code",
   "s": "# Create the confusion matrix\n"
  },
  {
   "t": "md",
   "s": "#### **7.5.6** Create variables for true positive, true negative, false positive and false negative <font color = red>[1 Mark]</font>",
   "ref": "7.5.6"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "#### **7.5.7** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color = red>[3 Marks]</font>",
   "ref": "7.5.7"
  },
  {
   "t": "code",
   "s": "# Calculate the sensitivity\n\n\n# Calculate the specificity\n\n\n# Calculate Precision\n\n\n# Calculate Recall\n\n\n# Calculate F1-Score\n"
  },
  {
   "t": "md",
   "s": "## **8. Prediction and Model Evaluation** <font color = red>[20 marks]</font>\nUse the model from the previous step to make predictions on the validation data with the optimal cutoff. Then evaluate the model's performance using metrics such as accuracy, sensitivity, specificity, precision, and recall."
  },
  {
   "t": "md",
   "s": "### **8.1 Make predictions over validation data using logistic regression model** <font color = red>[10 marks]</font>"
  },
  {
   "t": "md",
   "s": "#### **8.1.1** Select relevant features for validation data and add constant <font color=\"red\">[1 Mark]</font>",
   "ref": "8.1.1"
  },
  {
   "t": "code",
   "s": "# Select the relevant features for validation data\n\n# Add constant to X_validation\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.2** Make predictions over validation data <font color=\"red\">[1 Mark]</font>",
   "ref": "8.1.2"
  },
  {
   "t": "code",
   "s": "# Make predictions on the validation data and store it in the variable 'y_validation_pred'\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.3** Create DataFrame with actual values and predicted values for validation data <font color=\"red\">[2 Marks]</font>",
   "ref": "8.1.3"
  },
  {
   "t": "code",
   "s": "#  Create DataFrame with actual values and predicted values for validation data\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.4** Make final prediction based on cutoff value <font color=\"red\">[1 Mark]</font>",
   "ref": "8.1.4"
  },
  {
   "t": "code",
   "s": "# Make final predictions on the validation data using the optimal cutoff\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.5** Check the accuracy of logistic regression model on validation data <font color=\"red\">[1 Mark]</font>",
   "ref": "8.1.5"
  },
  {
   "t": "code",
   "s": "# Check the accuracy\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.6** Create confusion matrix <font color=\"red\">[1 Mark]</font>",
   "ref": "8.1.6"
  },
  {
   "t": "code",
   "s": "# Create the confusion matrix\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.7** Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1 Mark]</font>",
   "ref": "8.1.7"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "#### **8.1.8** Calculate sensitivity, specificity, precision, recall and f1 score of the model <font color=\"red\">[2 Marks]</font>",
   "ref": "8.1.8"
  },
  {
   "t": "code",
   "s": "# Calculate the sensitivity\n\n\n# Calculate the specificity\n\n\n# Calculate Precision\n\n\n# Calculate Recall\n\n\n# Calculate F1 Score\n"
  },
  {
   "t": "md",
   "s": "### **8.2 Make predictions over validation data using random forest model** <font color = red>[10 marks]</font>"
  },
  {
   "t": "md",
   "s": "#### **8.2.1** Select the important features and make predictions over validation data <font color=\"red\">[2 Marks]</font>",
   "ref": "8.2.1"
  },
  {
   "t": "code",
   "s": "# Select the relevant features for validation data\n\n# Make predictions on the validation data\n"
  },
  {
   "t": "md",
   "s": "#### **8.2.2** Check accuracy of random forest model <font color=\"red\">[1 Mark]</font>",
   "ref": "8.2.2"
  },
  {
   "t": "code",
   "s": "# Check accuracy\n"
  },
  {
   "t": "md",
   "s": "#### **8.2.3** Create confusion matrix <font color=\"red\">[1 Mark]</font>",
   "ref": "8.2.3"
  },
  {
   "t": "code",
   "s": "# Create the confusion matrix\n"
  },
  {
   "t": "md",
   "s": "#### **8.2.4** Create variables for true positive, true negative, false positive and false negative <font color=\"red\">[1 Mark]</font>",
   "ref": "8.2.4"
  },
  {
   "t": "code",
   "s": "# Create variables for true positive, true negative, false positive and false negative\n"
  },
  {
   "t": "md",
   "s": "#### **8.2.5** Calculate sensitivity, specificity, precision, recall and F1-score of the model <font color=\"red\">[5 Marks]</font>",
   "ref": "8.2.5"
  },
  {
   "t": "code",
   "s": "# Calculate Sensitivity\n\n\n# Calculate Specificity\n\n\n# Calculate Precision\n\n\n# Calculate Recall\n\n\n# Calculate F1-score\n"
  },
  {
   "t": "md",
   "s": "## **Evaluation and Conclusion**\nWrite the conclusion."
  }
 ],
 "guides": {
  "1.1": {
   "vi": {
    "think": "Đọc file claims vào DataFrame, in vài dòng và kích thước.",
    "steps": [
     "pd.read_csv('insurance_claims.csv').",
     "head() và shape: file có 1.000 dòng, 40 cột."
    ],
    "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\ndf = pd.read_csv('/tmp/asg/all/2/Starter Notebook + Data/insurance_claims.csv')\nprint(df.shape)\nprint(df.iloc[:3, :12].to_string())",
    "lotus": "Mỗi dòng là một yêu cầu bồi hoàn của khách Lotus Spa (ví dụ khách đòi hoàn tiền gói liệu trình sau sự cố). Cột cuối fraud_reported = Y nếu hồ sơ bị xác định gian lận.",
    "trap": "Dữ liệu chỉ 1.000 dòng, nhỏ: kết quả dao động nhiều theo cách chia, đừng tin một con số duy nhất.",
    "read": [
     "(1000, 40) là số dòng và số cột.",
     "Bảng mẫu cho thấy các cột hợp đồng (months_as_customer, policy_state...) và cột cuối fraud_reported."
    ],
    "remark": "Có 1.000 hồ sơ bồi thường với 40 cột; mỗi hàng là một hồ sơ gồm thông tin hợp đồng, người được bảo hiểm và sự cố.",
    "howRemark": [
     "Báo số dòng và cột.",
     "Nói cột mục tiêu là fraud_reported.",
     "Nhóm các cột chính."
    ]
   },
   "en": {
    "think": "Read the claims file, print a few rows and the size.",
    "steps": [
     "pd.read_csv('insurance_claims.csv').",
     "head() and shape: the file has 1,000 rows, 40 columns."
    ],
    "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\ndf = pd.read_csv('/tmp/asg/all/2/Starter Notebook + Data/insurance_claims.csv')\nprint(df.shape)\nprint(df.iloc[:3, :12].to_string())",
    "lotus": "Each row is a Lotus Spa customer refund claim (for example a customer demanding a refund of a treatment package after an incident). The last column fraud_reported = Y when the claim was found fraudulent.",
    "trap": "Only 1,000 rows, small: results swing with the split, so do not trust a single number.",
    "read": [
     "(1000, 40) is rows and columns.",
     "The sample table shows policy columns (months_as_customer, policy_state...) and the last column fraud_reported."
    ],
    "remark": "There are 1,000 claim records with 40 columns; each row is a claim with policy, insured person and incident details.",
    "howRemark": [
     "Report rows and columns.",
     "Say the target is fraud_reported.",
     "Group the main columns."
    ]
   }
  },
  "2.1.1": {
   "vi": {
    "think": "Đếm ô trống từng cột.",
    "steps": [
     "df.isnull().sum().",
     "Hai cột có vấn đề: authorities_contacted thiếu 91 ô, và _c39 trống hoàn toàn (1.000 ô)."
    ],
    "code": "print(df.isnull().sum()[df.isnull().sum() > 0])",
    "lotus": "Hồ sơ không ghi cơ quan nào được liên hệ: có thể là chưa liên hệ ai, không phải thiếu thông tin.",
    "trap": "Vội dropna() sẽ bỏ 91 hồ sơ có ý nghĩa và cả cột _c39 làm bảng rỗng.",
    "read": [
     "Chỉ hiện cột có ô trống: authorities_contacted (91) và _c39 (1.000)."
    ],
    "remark": "authorities_contacted thiếu 91 ô và _c39 trống hoàn toàn (1.000 ô); các cột khác đầy đủ.",
    "howRemark": [
     "Nêu cột thiếu và số ô.",
     "Phân biệt thiếu một phần và rỗng cả cột."
    ]
   },
   "en": {
    "think": "Count blanks per column.",
    "steps": [
     "df.isnull().sum().",
     "Two columns matter: authorities_contacted misses 91 cells, and _c39 is entirely empty (1,000 cells)."
    ],
    "code": "print(df.isnull().sum()[df.isnull().sum() > 0])",
    "lotus": "A record with no authority listed may mean none was contacted, not missing information.",
    "trap": "Rushing dropna() would drop 91 meaningful records, and _c39 would empty the whole table.",
    "read": [
     "Only columns with blanks appear: authorities_contacted (91) and _c39 (1,000)."
    ],
    "remark": "authorities_contacted misses 91 cells and _c39 is entirely empty (1,000 cells); all other columns are complete.",
    "howRemark": [
     "Name the columns and blank counts.",
     "Distinguish partly missing from entirely empty."
    ]
   }
  },
  "2.1.2": {
   "vi": {
    "think": "Xử lý ô trống: ở đây trống nghĩa là «không liên hệ ai», nên điền 'None' thay vì bỏ dòng.",
    "steps": [
     "Điền fillna('None') cho authorities_contacted.",
     "Cột _c39 xử lý ở 2.2.2."
    ],
    "code": "# authorities_contacted trống = chưa liên hệ cơ quan nào\ndf['authorities_contacted'] = df['authorities_contacted'].fillna('None')\nprint(df['authorities_contacted'].value_counts())",
    "lotus": "Một yêu cầu hoàn tiền mà không có công an hay xe cứu thương nào được gọi là một tín hiệu đáng xem, không phải ô hỏng.",
    "trap": "Điền bằng nhóm phổ biến nhất (Police) làm mất tín hiệu đó.",
    "read": [
     "Bảng đếm giá trị authorities_contacted sau khi điền: Police 292, Fire 223, Other 198, Ambulance 196, None 91."
    ],
    "remark": "Ô trống nghĩa là «không liên hệ ai», nên điền None (91 hồ sơ) thay vì bỏ dòng; không mất hồ sơ nào.",
    "howRemark": [
     "Giải thích ý nghĩa của trống.",
     "Báo số hồ sơ được giữ.",
     "Nêu lý do không bỏ dòng."
    ]
   },
   "en": {
    "think": "Handle blanks: here blank means “no one contacted”, so fill with 'None' rather than drop rows.",
    "steps": [
     "fillna('None') for authorities_contacted.",
     "Column _c39 is handled in 2.2.2."
    ],
    "code": "# authorities_contacted trống = chưa liên hệ cơ quan nào\ndf['authorities_contacted'] = df['authorities_contacted'].fillna('None')\nprint(df['authorities_contacted'].value_counts())",
    "lotus": "A refund claim with no police or ambulance called is a signal worth seeing, not a broken cell.",
    "trap": "Filling with the most common group (Police) erases that signal.",
    "read": [
     "Counts of authorities_contacted after filling: Police 292, Fire 223, Other 198, Ambulance 196, None 91."
    ],
    "remark": "A blank means “no one contacted”, so fill with None (91 records) instead of dropping rows; no record is lost.",
    "howRemark": [
     "Explain what blank means.",
     "Report records kept.",
     "State why rows were not dropped."
    ]
   }
  },
  "2.2.1": {
   "vi": {
    "think": "Xem các cột nhóm để tìm giá trị lạ hay thừa.",
    "steps": [
     "In value_counts từng cột có ít nhóm.",
     "Chú ý dấu '?': collision_type 178, property_damage 360, police_report_available 343 dòng."
    ],
    "code": "for c in df.select_dtypes(include=['object', 'str']).columns:\n    if df[c].nunique() < 12: print(c, df[c].value_counts().to_dict())\nprint((df == '?').sum()[lambda s: s > 0])",
    "lotus": "Dấu '?' là «không biết», không phải một nhóm có thật. Nhưng ở đây nó chiếm tới một phần ba, nên giữ như một nhóm riêng «Unknown» thường hợp lý hơn bỏ dòng.",
    "trap": "Bỏ mọi dòng có '?' sẽ mất hơn một nửa dữ liệu.",
    "read": [
     "Mỗi dòng là một cột nhóm và số hồ sơ mỗi giá trị.",
     "Tìm giá trị lạ, nhãn trùng nghĩa, hoặc nhóm quá nhỏ."
    ],
    "remark": "Các cột nhóm sạch (ví dụ policy_state: OH 352, IL 338, IN 310; insured_sex: 537 nữ, 463 nam), không có nhãn lạ; chỉ cần chú ý nhóm nhỏ ở bước 6.4.",
    "howRemark": [
     "Duyệt từng cột tìm nhãn bất thường.",
     "Nêu phân bố vài cột chính.",
     "Báo nhóm quá nhỏ."
    ]
   },
   "en": {
    "think": "Inspect categorical columns for odd or redundant values.",
    "steps": [
     "Print value_counts for each low-cardinality column.",
     "Notice '?': collision_type 178, property_damage 360, police_report_available 343 rows."
    ],
    "code": "for c in df.select_dtypes(include=['object', 'str']).columns:\n    if df[c].nunique() < 12: print(c, df[c].value_counts().to_dict())\nprint((df == '?').sum()[lambda s: s > 0])",
    "lotus": "'?' means “unknown”, not a real group. But it covers up to a third, so keeping it as its own “Unknown” group usually beats dropping rows.",
    "trap": "Dropping every row with '?' would lose over half the data.",
    "read": [
     "Each line is a categorical column and the count per value.",
     "Look for odd labels, same-meaning labels or tiny groups."
    ],
    "remark": "Categorical columns are clean (e.g. policy_state: OH 352, IL 338, IN 310; insured_sex: 537 female, 463 male), no odd labels; just watch small groups in 6.4.",
    "howRemark": [
     "Scan each column for abnormal labels.",
     "State the spread of a few main columns.",
     "Flag tiny groups."
    ]
   }
  },
  "2.2.2": {
   "vi": {
    "think": "Bỏ cột trống hoàn toàn.",
    "steps": [
     "Tìm cột mà isnull().all() là True: _c39.",
     "drop(columns=...)."
    ],
    "code": "empty = [c for c in df.columns if df[c].isnull().all()]\nprint('cột rỗng hoàn toàn:', empty)\ndf = df.drop(columns=empty)",
    "lotus": "Cột chưa từng có dữ liệu thì không giúp gì.",
    "trap": "Dùng dropna(axis=1) mặc định chỉ bỏ cột có bất kỳ ô trống, bỏ nhầm cả authorities_contacted.",
    "read": [
     "Dòng chữ liệt kê cột rỗng hoàn toàn: _c39."
    ],
    "remark": "_c39 chỉ chứa ô trống nên bị bỏ vì không có thông tin.",
    "howRemark": [
     "Nêu cột bỏ và lý do."
    ]
   },
   "en": {
    "think": "Drop entirely empty columns.",
    "steps": [
     "Find columns where isnull().all() is True: _c39.",
     "drop(columns=...)."
    ],
    "code": "empty = [c for c in df.columns if df[c].isnull().all()]\nprint('cột rỗng hoàn toàn:', empty)\ndf = df.drop(columns=empty)",
    "lotus": "A column that never had data helps nothing.",
    "trap": "Default dropna(axis=1) drops any column with a blank, wrongly removing authorities_contacted too.",
    "read": [
     "The text lists entirely empty columns: _c39."
    ],
    "remark": "_c39 holds only blanks so it is dropped; it carries no information.",
    "howRemark": [
     "Name the dropped column and reason."
    ]
   }
  },
  "2.2.3": {
   "vi": {
    "think": "Tìm và bỏ giá trị phi lý như số âm ở cột chỉ có thể dương.",
    "steps": [
     "Đếm số âm từng cột số.",
     "umbrella_limit có một dòng -1.000.000: vô lý, bỏ dòng.",
     "capital-loss âm 525 dòng là hợp lệ (lỗ vốn được ghi là số âm), không bỏ."
    ],
    "code": "num = df.select_dtypes(include='number')\nprint((num < 0).sum()[lambda s: s > 0])\nprint(df[['umbrella_limit']].query('umbrella_limit < 0'))\ndf = df[df['umbrella_limit'] >= 0]\nprint(len(df))",
    "lotus": "Hạn mức bảo hiểm bổ sung không thể âm: dòng đó là lỗi nhập. Nhưng khoản lỗ vốn âm là ghi sổ bình thường.",
    "trap": "Thấy số âm là bỏ ngay làm mất 525 dòng hợp lệ của capital-loss.",
    "read": [
     "Bảng đầu: số giá trị phi lý ở mỗi cột (umbrella_limit có 1 giá trị âm).",
     "Dòng mẫu: umbrella_limit = −1.000.000, một hồ sơ; 999 là số dòng còn lại."
    ],
    "remark": "Một hồ sơ có umbrella_limit âm (−1.000.000) vì hạn mức không thể âm; bỏ hồ sơ này còn 999 dòng. capital-loss mang dấu âm theo quy ước nên giữ.",
    "howRemark": [
     "Phân biệt âm bất hợp lý và âm hợp lệ.",
     "Báo số dòng còn lại.",
     "Nói quyết định và lý do."
    ]
   },
   "en": {
    "think": "Find and drop impossible values such as negatives in columns that can only be positive.",
    "steps": [
     "Count negatives per numeric column.",
     "umbrella_limit has one row of -1,000,000: impossible, drop the row.",
     "capital-loss is negative on 525 rows, which is valid (losses are booked as negatives), keep."
    ],
    "code": "num = df.select_dtypes(include='number')\nprint((num < 0).sum()[lambda s: s > 0])\nprint(df[['umbrella_limit']].query('umbrella_limit < 0'))\ndf = df[df['umbrella_limit'] >= 0]\nprint(len(df))",
    "lotus": "A supplementary coverage limit cannot be negative: that row is an entry error. But a capital loss as a negative is ordinary bookkeeping.",
    "trap": "Dropping every negative loses 525 valid capital-loss rows.",
    "read": [
     "First table: absurd values per column (umbrella_limit has 1 negative).",
     "The sample row: umbrella_limit = −1,000,000, one record; 999 rows remain."
    ],
    "remark": "One record has a negative umbrella_limit (−1,000,000), impossible for a limit; drop it leaving 999 rows. capital-loss is negative by convention so it stays.",
    "howRemark": [
     "Distinguish invalid from valid negatives.",
     "Report rows remaining.",
     "State the decision and reason."
    ]
   }
  },
  "2.2.4": {
   "vi": {
    "think": "Bỏ cột gần như mỗi dòng một giá trị (mã định danh), vì không giúp dự đoán.",
    "steps": [
     "Tính nunique()/len cho từng cột.",
     "policy_number và incident_location có tỷ lệ 1,0; insured_zip 0,995.",
     "Bỏ ba cột này."
    ],
    "code": "ratio = (df.nunique() / len(df)).sort_values(ascending=False)\nprint(ratio.head(6).round(3))\nids = ['policy_number', 'incident_location', 'insured_zip']\ndf = df.drop(columns=ids)\nprint(df.shape)",
    "lotus": "Số hợp đồng và địa chỉ sự cố giống số thẻ nhân viên: mỗi người một số, mô hình sẽ học thuộc lòng.",
    "trap": "Giữ cột mã giúp train đạt điểm cao giả và tệ trên validation.",
    "read": [
     "Bảng tỷ lệ giá trị khác nhau trên số dòng: 1,000 nghĩa là mỗi dòng một giá trị (mã định danh).",
     "(999, 36) là hình dạng sau khi bỏ các cột mã."
    ],
    "remark": "policy_number và incident_location có mỗi dòng một giá trị (tỷ lệ 1,000) nên là mã định danh, bỏ đi còn 36 cột cho 999 dòng.",
    "howRemark": [
     "Nêu cột có tỷ lệ ≈ 1.",
     "Giải thích vì sao mã không dự đoán được.",
     "Báo hình dạng mới."
    ]
   },
   "en": {
    "think": "Drop near-unique columns (identifiers) because they do not help prediction.",
    "steps": [
     "nunique()/len for each column.",
     "policy_number and incident_location have ratio 1.0; insured_zip 0.995.",
     "Drop these three."
    ],
    "code": "ratio = (df.nunique() / len(df)).sort_values(ascending=False)\nprint(ratio.head(6).round(3))\nids = ['policy_number', 'incident_location', 'insured_zip']\ndf = df.drop(columns=ids)\nprint(df.shape)",
    "lotus": "Policy numbers and incident addresses are like staff card numbers: one per person, the model would memorise.",
    "trap": "Keeping ID columns gives a falsely high train score and a poor validation score.",
    "read": [
     "Table of distinct values over rows: 1.000 means every row is unique (an identifier).",
     "(999, 36) is the shape after dropping identifier columns."
    ],
    "remark": "policy_number and incident_location are unique per row (ratio 1.000), so identifiers, dropped leaving 36 columns for 999 rows.",
    "howRemark": [
     "Name columns with ratio ≈ 1.",
     "Explain why identifiers cannot predict.",
     "Report the new shape."
    ]
   }
  },
  "2.3": {
   "vi": {
    "think": "Đổi cột ngày dạng chữ thành datetime.",
    "steps": [
     "to_datetime cho policy_bind_date và incident_date.",
     "Kiểm tra dtypes."
    ],
    "code": "df['policy_bind_date'] = pd.to_datetime(df['policy_bind_date'])\ndf['incident_date'] = pd.to_datetime(df['incident_date'])\nprint(df[['policy_bind_date', 'incident_date']].dtypes)",
    "lotus": "Ngày mua hợp đồng và ngày sự cố đổi thành ngày thật để tính được hợp đồng đã tồn tại bao lâu khi xảy ra sự cố (dùng ở 6.2).",
    "trap": "Trừ hai cột chữ thì lỗi.",
    "read": [
     "Hai dòng kiểu dữ liệu: policy_bind_date và incident_date đều là datetime64."
    ],
    "remark": "Hai cột ngày đã đổi sang datetime nên tính được tuổi hợp đồng và tháng, thứ của sự cố ở bước 6.2.",
    "howRemark": [
     "Kiểm kiểu sau khi đổi.",
     "Nói mục đích."
    ]
   },
   "en": {
    "think": "Convert text date columns to datetime.",
    "steps": [
     "to_datetime for policy_bind_date and incident_date.",
     "Check dtypes."
    ],
    "code": "df['policy_bind_date'] = pd.to_datetime(df['policy_bind_date'])\ndf['incident_date'] = pd.to_datetime(df['incident_date'])\nprint(df[['policy_bind_date', 'incident_date']].dtypes)",
    "lotus": "Policy purchase date and incident date become real dates so you can compute how long the policy existed at the incident (used in 6.2).",
    "trap": "Subtracting two text columns errors.",
    "read": [
     "Two dtype lines: policy_bind_date and incident_date are datetime64."
    ],
    "remark": "Both date columns are now datetime so contract age and incident month/weekday can be computed in 6.2.",
    "howRemark": [
     "Check the type after conversion.",
     "State the purpose."
    ]
   }
  },
  "3.2": {
   "vi": {
    "think": "Tách X và y (fraud_reported).",
    "steps": [
     "y = df['fraud_reported'].",
     "X = df.drop(columns=['fraud_reported'])."
    ],
    "code": "y = df['fraud_reported']\nX = df.drop(columns=['fraud_reported'])\nprint(X.shape, y.shape)",
    "lotus": "Câu hỏi: hồ sơ này có gian lận không? Đáp án (Y/N) đi riêng.",
    "trap": "Để fraud_reported lọt vào X cho điểm gần tuyệt đối giả tạo.",
    "read": [
     "Hai hình dạng: X (999, 35) và y (999,)."
    ],
    "remark": "X có 35 cột đầu vào, y là fraud_reported; cùng 999 dòng.",
    "howRemark": [
     "Kiểm số dòng hai bên."
    ]
   },
   "en": {
    "think": "Split X and y (fraud_reported).",
    "steps": [
     "y = df['fraud_reported'].",
     "X = df.drop(columns=['fraud_reported'])."
    ],
    "code": "y = df['fraud_reported']\nX = df.drop(columns=['fraud_reported'])\nprint(X.shape, y.shape)",
    "lotus": "The question: is this claim fraudulent? The answer (Y/N) goes separately.",
    "trap": "Letting fraud_reported slip into X gives a fake near-perfect score.",
    "read": [
     "Two shapes: X (999, 35) and y (999,)."
    ],
    "remark": "X has 35 input columns, y is fraud_reported; both 999 rows.",
    "howRemark": [
     "Check both row counts."
    ]
   }
  },
  "3.3": {
   "vi": {
    "think": "Chia 70/30 có stratify để hai tập có cùng tỷ lệ gian lận.",
    "steps": [
     "train_test_split(..., train_size=0.7, stratify=y, random_state=42).",
     "Kiểm tra: train 699 dòng, validation 300, tỷ lệ gian lận cả hai đều 24,7%.",
     "reset_index cho các tập."
    ],
    "code": "from sklearn.model_selection import train_test_split\nX_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, stratify=y, random_state=42)\nfor t in (X_train, X_validation, y_train, y_validation): t.reset_index(drop=True, inplace=True)\nprint(len(X_train), len(X_validation), y_train.value_counts(normalize=True).round(3).to_dict(), y_validation.value_counts(normalize=True).round(3).to_dict())",
    "lotus": "Chỉ 247 hồ sơ gian lận trên 1.000: nếu chia ngẫu nhiên không stratify, một tập có thể may mắn nhiều hơn hẳn.",
    "trap": "Quên stratify với dữ liệu mất cân bằng làm hai tập lệch tỷ lệ.",
    "read": [
     "Bộ ba: 699 dòng train, 300 dòng validation, và hai tỷ lệ gian lận (train và validation đều Y = 0,247)."
    ],
    "remark": "Chia 70/30 có stratify: cả hai tập đều có 24,7% hồ sơ gian lận nên so sánh công bằng.",
    "howRemark": [
     "Báo cỡ hai tập.",
     "So tỷ lệ gian lận hai tập.",
     "Giải thích stratify."
    ]
   },
   "en": {
    "think": "Split 70/30 with stratify so both sets share the same fraud rate.",
    "steps": [
     "train_test_split(..., train_size=0.7, stratify=y, random_state=42).",
     "Check: train 699 rows, validation 300, fraud rate 24.7% in both.",
     "reset_index on the sets."
    ],
    "code": "from sklearn.model_selection import train_test_split\nX_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, stratify=y, random_state=42)\nfor t in (X_train, X_validation, y_train, y_validation): t.reset_index(drop=True, inplace=True)\nprint(len(X_train), len(X_validation), y_train.value_counts(normalize=True).round(3).to_dict(), y_validation.value_counts(normalize=True).round(3).to_dict())",
    "lotus": "Only 247 fraud claims in 1,000: without stratify one set could get noticeably more by luck.",
    "trap": "Forgetting stratify on imbalanced data skews the rates between the sets.",
    "read": [
     "The trio: 699 train rows, 300 validation rows, and two fraud shares (both Y = 0.247)."
    ],
    "remark": "A stratified 70/30 split: both sets have 24.7% fraud so comparison is fair.",
    "howRemark": [
     "Report both sizes.",
     "Compare the fraud share.",
     "Explain stratify."
    ]
   }
  },
  "4.1.1": {
   "vi": {
    "think": "Chọn cột số của tập train.",
    "steps": [
     "select_dtypes(include='number')."
    ],
    "code": "num_cols = X_train.select_dtypes(include='number').columns\nprint(list(num_cols))",
    "lotus": "Tuổi, số tháng là khách, phí bảo hiểm, các khoản bồi hoàn...",
    "trap": "Không lấy từ toàn bộ df.",
    "read": [
     "Danh sách 16 cột số của train."
    ],
    "remark": "Có 16 cột số, gồm tuổi, phí, các khoản đòi bồi thường và năm xe.",
    "howRemark": [
     "Đếm cột số.",
     "Nhóm theo chủ đề."
    ]
   },
   "en": {
    "think": "Select numeric columns of the training set.",
    "steps": [
     "select_dtypes(include='number')."
    ],
    "code": "num_cols = X_train.select_dtypes(include='number').columns\nprint(list(num_cols))",
    "lotus": "Age, months as customer, premium, claim amounts...",
    "trap": "Do not take them from the whole df.",
    "read": [
     "The list of 16 numeric columns in train."
    ],
    "remark": "There are 16 numeric columns, covering age, premium, claim amounts and vehicle year.",
    "howRemark": [
     "Count numeric columns.",
     "Group by theme."
    ]
   }
  },
  "4.1.2": {
   "vi": {
    "think": "Vẽ phân phối từng cột số.",
    "steps": [
     "Histogram từng cột.",
     "Chú ý cột lệch, nhiều số 0 (capital-gains, umbrella_limit) và nhóm giá trị rời rạc."
    ],
    "code": "X_train[num_cols].hist(bins=25, figsize=(15, 11)); plt.tight_layout()",
    "lotus": "Phần lớn khoản bồi hoàn tập trung ở khoảng giữa, vài khoản rất lớn kéo đuôi.",
    "trap": "Cột như số tháng làm khách và tuổi tương quan mạnh nhau, sẽ thấy ở bước kế tiếp.",
    "read": [
     "Mỗi ô là phân phối một cột số: nhìn hình dạng, độ lệch và điểm xa."
    ],
    "remark": "Các phân phối cho thấy hình dạng từng cột số; những cột tiền (total_claim_amount, claim) thường lệch phải.",
    "howRemark": [
     "Mô tả hình dạng cột chính.",
     "Chỉ cột lệch hoặc có điểm xa."
    ]
   },
   "en": {
    "think": "Plot each numeric column's distribution.",
    "steps": [
     "A histogram per column.",
     "Notice skewed columns, many zeros (capital-gains, umbrella_limit) and discrete value groups."
    ],
    "code": "X_train[num_cols].hist(bins=25, figsize=(15, 11)); plt.tight_layout()",
    "lotus": "Most claim amounts sit mid-range, a few huge ones stretch the tail.",
    "trap": "Columns like months as customer and age correlate strongly, seen in the next step.",
    "read": [
     "Each panel is a numeric column's distribution: look at shape, skew and outliers."
    ],
    "remark": "The distributions show each numeric column's shape; money columns (total_claim_amount, claims) tend to skew right.",
    "howRemark": [
     "Describe the main columns' shapes.",
     "Point out skewed columns or outliers."
    ]
   }
  },
  "4.2": {
   "vi": {
    "think": "Tương quan giữa các cột số để thấy biến chồng lấn.",
    "steps": [
     "corr() và heatmap.",
     "Cặp mạnh nhất: total_claim_amount với vehicle_claim (0,98), months_as_customer với age (0,92), total với injury/property claim (0,82)."
    ],
    "code": "plt.figure(figsize=(11, 8)); sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0, annot_kws={'size': 7})\nc = X_train[num_cols].corr().abs().where(np.triu(np.ones((len(num_cols),)*2), 1).astype(bool)).stack().sort_values(ascending=False)\nprint(c.head(6).round(2))",
    "lotus": "Tổng bồi hoàn là tổng của ba khoản nhỏ, nên đương nhiên đi cùng nhau: giữ cả bốn cột là lặp lại cùng một thông tin.",
    "trap": "Giữ mọi biến tương quan cao làm hệ số logistic không ổn định (đa cộng tuyến).",
    "read": [
     "Danh sách cặp cột tương quan cao nhất.",
     "total_claim_amount – vehicle_claim 0,98; months_as_customer – age 0,92."
    ],
    "remark": "total_claim_amount gần như bằng vehicle_claim (0,98) vì tổng gồm các phần; tuổi và thời gian làm khách cũng đi cùng nhau (0,92). Cần bỏ bớt cột trùng thông tin ở 6.3.",
    "howRemark": [
     "Nêu cặp mạnh nhất kèm số.",
     "Giải thích vì sao chồng lấn.",
     "Nói hệ quả (đa cộng tuyến) và xử lý."
    ]
   },
   "en": {
    "think": "Correlation among numeric columns to see overlapping features.",
    "steps": [
     "corr() and a heatmap.",
     "Strongest pairs: total_claim_amount with vehicle_claim (0.98), months_as_customer with age (0.92), total with injury/property claim (0.82)."
    ],
    "code": "plt.figure(figsize=(11, 8)); sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0, annot_kws={'size': 7})\nc = X_train[num_cols].corr().abs().where(np.triu(np.ones((len(num_cols),)*2), 1).astype(bool)).stack().sort_values(ascending=False)\nprint(c.head(6).round(2))",
    "lotus": "Total claim is the sum of three smaller amounts so they naturally move together: keeping all four repeats the same information.",
    "trap": "Keeping every highly correlated feature makes logistic coefficients unstable (multicollinearity).",
    "read": [
     "The list of most correlated pairs.",
     "total_claim_amount – vehicle_claim 0.98; months_as_customer – age 0.92."
    ],
    "remark": "total_claim_amount nearly equals vehicle_claim (0.98) because the total is made of parts; age and customer tenure also move together (0.92). Drop duplicate-information columns in 6.3.",
    "howRemark": [
     "Name the strongest pair with numbers.",
     "Explain the overlap.",
     "State the consequence (multicollinearity) and fix."
    ]
   }
  },
  "4.3": {
   "vi": {
    "think": "Kiểm tra cân bằng lớp.",
    "steps": [
     "value_counts(normalize=True) và bar chart.",
     "24,7% gian lận, 75,3% sạch: mất cân bằng vừa."
    ],
    "code": "print(y_train.value_counts(normalize=True).round(3))\ny_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'], title='Cân bằng lớp (train)')",
    "lotus": "Cứ 4 yêu cầu có 1 gian lận. Mô hình đoán «sạch» cho tất cả vẫn đúng 75%, nên độ chính xác đơn độc đánh lừa.",
    "trap": "Chỉ nhìn accuracy khi lớp mất cân bằng: 75% mà bắt được 0 vụ gian lận.",
    "read": [
     "Hai tỷ lệ: N (sạch) 0,753 và Y (gian lận) 0,247."
    ],
    "remark": "24,7% hồ sơ gian lận so với 75,3% sạch: lớp mất cân bằng nên độ chính xác đơn thuần dễ đánh lừa và cần cân bằng ở 6.1.",
    "howRemark": [
     "Báo tỷ lệ hai lớp.",
     "Nói mất cân bằng ảnh hưởng thế nào đến cách đo."
    ]
   },
   "en": {
    "think": "Check class balance.",
    "steps": [
     "value_counts(normalize=True) and a bar chart.",
     "24.7% fraud, 75.3% clean: moderately imbalanced."
    ],
    "code": "print(y_train.value_counts(normalize=True).round(3))\ny_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'], title='Cân bằng lớp (train)')",
    "lotus": "One claim in four is fraud. A model saying “clean” for all is still 75% right, so accuracy alone misleads.",
    "trap": "Looking only at accuracy on imbalanced classes: 75% while catching zero fraud cases.",
    "read": [
     "Two shares: N (clean) 0.753 and Y (fraud) 0.247."
    ],
    "remark": "24.7% fraud vs 75.3% clean: classes are imbalanced so plain accuracy can mislead and balancing is needed in 6.1.",
    "howRemark": [
     "Report both class shares.",
     "State how imbalance affects measurement."
    ]
   }
  },
  "4.4.1": {
   "vi": {
    "think": "Phân tích khả năng gian lận theo từng nhóm của mỗi cột nhóm.",
    "steps": [
     "Viết hàm: groupby(cột) trung bình của cờ fraud (Y=1).",
     "So với mức chung 24,7%.",
     "Các cột nổi bật: insured_hobbies (chess 90,6%), incident_severity (Major Damage 60,9%), incident_state (OH 42,1%)."
    ],
    "code": "cat_cols = X_train.select_dtypes(include=['object', 'str']).columns\nt = X_train.assign(fraud=(y_train == 'Y').astype(int))\ndef likelihood(col):\n    return t.groupby(col)['fraud'].mean().sort_values(ascending=False)\noverall = t['fraud'].mean()\nrows = []\nfor c in cat_cols:\n    s = likelihood(c)\n    rows.append((c, s.index[0], round(s.iloc[0], 3), round(s.iloc[-1] - 0, 3), round(s.iloc[0] - s.iloc[-1], 3)))\ntab = pd.DataFrame(rows, columns=['cột', 'nhóm có tỷ lệ gian lận cao nhất', 'tỷ lệ cao nhất', 'tỷ lệ thấp nhất', 'khoảng cách']).sort_values('khoảng cách', ascending=False)\nprint('tỷ lệ gian lận chung:', round(overall, 3)); print(tab.head(8).to_string(index=False))\nfig, ax = plt.subplots(1, 3, figsize=(16, 4))\nfor a, c in zip(ax, ['incident_severity', 'insured_hobbies', 'collision_type']):\n    likelihood(c).plot(kind='bar', ax=a, title=f'Tỷ lệ gian lận theo {c}'); a.axhline(overall, color='r', ls='--')\nplt.tight_layout()",
    "lotus": "Nhóm khách có sở thích cờ vua có tỷ lệ gian lận tới 90%: đây là mẫu hình của bộ dữ liệu, cần xem lại để biết là tín hiệu thật hay do mẫu nhỏ.",
    "trap": "Nhóm hiếm (ít hồ sơ) cho tỷ lệ cao thất thường. Kiểm tra số lượng của nhóm trước khi tin.",
    "read": [
     "Bảng: mỗi dòng là một cột nhóm với nhóm có tỷ lệ gian lận cao nhất, cao nhất, thấp nhất và khoảng cách.",
     "Khoảng cách lớn là cột có sức phân biệt mạnh.",
     "Tỷ lệ chung 0,247 là mốc so sánh."
    ],
    "remark": "insured_hobbies có khoảng cách lớn nhất: chess 0,906 so với thấp nhất 0,075 (chênh 0,831); incident_severity: Major Damage 0,609 so với 0,066. Hai cột này phân biệt gian lận rất mạnh.",
    "howRemark": [
     "Xếp cột theo khoảng cách.",
     "Nêu nhóm cao nhất và thấp nhất.",
     "So với tỷ lệ chung 0,247.",
     "Nối với biến mô hình chọn sau."
    ]
   },
   "en": {
    "think": "Analyse fraud likelihood for each group of every categorical column.",
    "steps": [
     "Write a function: groupby(column) mean of the fraud flag (Y=1).",
     "Compare to the overall 24.7%.",
     "Standouts: insured_hobbies (chess 90.6%), incident_severity (Major Damage 60.9%), incident_state (OH 42.1%)."
    ],
    "code": "cat_cols = X_train.select_dtypes(include=['object', 'str']).columns\nt = X_train.assign(fraud=(y_train == 'Y').astype(int))\ndef likelihood(col):\n    return t.groupby(col)['fraud'].mean().sort_values(ascending=False)\noverall = t['fraud'].mean()\nrows = []\nfor c in cat_cols:\n    s = likelihood(c)\n    rows.append((c, s.index[0], round(s.iloc[0], 3), round(s.iloc[-1] - 0, 3), round(s.iloc[0] - s.iloc[-1], 3)))\ntab = pd.DataFrame(rows, columns=['cột', 'nhóm có tỷ lệ gian lận cao nhất', 'tỷ lệ cao nhất', 'tỷ lệ thấp nhất', 'khoảng cách']).sort_values('khoảng cách', ascending=False)\nprint('tỷ lệ gian lận chung:', round(overall, 3)); print(tab.head(8).to_string(index=False))\nfig, ax = plt.subplots(1, 3, figsize=(16, 4))\nfor a, c in zip(ax, ['incident_severity', 'insured_hobbies', 'collision_type']):\n    likelihood(c).plot(kind='bar', ax=a, title=f'Tỷ lệ gian lận theo {c}'); a.axhline(overall, color='r', ls='--')\nplt.tight_layout()",
    "lotus": "Customers with the chess hobby show 90% fraud: a pattern of this dataset, worth checking whether it is a real signal or a small-sample effect.",
    "trap": "Rare groups (few records) give odd high rates. Check a group's count before trusting it.",
    "read": [
     "Table: each row is a categorical column with its highest-fraud group, highest and lowest rates and the gap.",
     "A large gap means strong discriminating power.",
     "The overall 0.247 is the benchmark."
    ],
    "remark": "insured_hobbies has the largest gap: chess 0.906 vs lowest 0.075 (gap 0.831); incident_severity: Major Damage 0.609 vs 0.066. These two columns separate fraud very strongly.",
    "howRemark": [
     "Rank columns by gap.",
     "State the highest and lowest groups.",
     "Compare with the overall 0.247.",
     "Link to the variables the model picks later."
    ]
   }
  },
  "4.4.2": {
   "vi": {
    "think": "Quan hệ giữa cột số và gian lận: boxplot theo nhóm Y/N.",
    "steps": [
     "Boxplot cột số theo fraud.",
     "Bồi hoàn trung bình: total_claim_amount 60.921 (gian lận) so với 50.293 (sạch)."
    ],
    "code": "tn = X_train.assign(fraud=y_train)\nfig, ax = plt.subplots(1, 4, figsize=(17, 4))\nfor a, c in zip(ax, ['total_claim_amount', 'vehicle_claim', 'months_as_customer', 'policy_annual_premium']):\n    sns.boxplot(data=tn, x='fraud', y=c, ax=a)\nplt.tight_layout()\nprint(tn.groupby('fraud')[['total_claim_amount', 'vehicle_claim', 'injury_claim', 'property_claim']].mean().round(0).to_string())",
    "lotus": "Hồ sơ gian lận có khoản đòi cao hơn khoảng 21%, nhưng hai hộp chồng nhau nhiều: cột này mạnh một nửa, không đủ một mình.",
    "trap": "Dùng trung bình mà bỏ qua độ chồng của hai hộp làm tin quá mức vào khác biệt.",
    "read": [
     "Bảng trung bình theo nhóm N và Y cho các khoản đòi bồi thường."
    ],
    "remark": "Hồ sơ gian lận đòi trung bình 60.921 so với 50.293 ở hồ sơ sạch (cao hơn khoảng 21%); khoản đòi xe 43.812 so với 36.109.",
    "howRemark": [
     "So trung bình hai nhóm cho từng cột.",
     "Tính chênh phần trăm.",
     "Nói chênh có đủ lớn để dự đoán không."
    ]
   },
   "en": {
    "think": "Numeric columns versus fraud: boxplots by Y/N.",
    "steps": [
     "Boxplot numeric columns by fraud.",
     "Mean claim: total_claim_amount 60,921 (fraud) vs 50,293 (clean)."
    ],
    "code": "tn = X_train.assign(fraud=y_train)\nfig, ax = plt.subplots(1, 4, figsize=(17, 4))\nfor a, c in zip(ax, ['total_claim_amount', 'vehicle_claim', 'months_as_customer', 'policy_annual_premium']):\n    sns.boxplot(data=tn, x='fraud', y=c, ax=a)\nplt.tight_layout()\nprint(tn.groupby('fraud')[['total_claim_amount', 'vehicle_claim', 'injury_claim', 'property_claim']].mean().round(0).to_string())",
    "lotus": "Fraud claims ask about 21% more, but the two boxes overlap a lot: the feature is half strong, not enough alone.",
    "trap": "Using the mean and ignoring the overlap of the two boxes overstates the difference.",
    "read": [
     "Table of means for groups N and Y across claim amounts."
    ],
    "remark": "Fraud claims average 60,921 vs 50,293 for clean ones (about 21% higher); vehicle claims 43,812 vs 36,109.",
    "howRemark": [
     "Compare the two groups' means per column.",
     "Compute the percentage gap.",
     "Say whether it is big enough to predict."
    ]
   }
  },
  "5.1.1": {
   "vi": {
    "think": "Chọn cột số của validation (tùy chọn).",
    "steps": [
     "Làm giống bước tương ứng ở train.",
     "So hình dạng hai tập."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.",
    "trap": "Không dùng validation để chọn đặc trưng.",
    "read": [
     "Ô này không in kết quả hoặc hình giống train: so với bước tương ứng ở phần 4."
    ],
    "remark": "Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập tương đồng với train.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Select validation numeric columns (optional).",
    "steps": [
     "Do the same as the matching train step.",
     "Compare the shapes of the two sets."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "The two sets should look alike; very different means a poor split.",
    "trap": "Do not use validation to choose features.",
    "read": [
     "This cell prints nothing or a train-like chart: compare with the matching step in part 4."
    ],
    "remark": "Optional part: repeats exploration on validation to confirm it resembles train.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "5.1.2": {
   "vi": {
    "think": "Vẽ phân phối cột số ở validation, so với train.",
    "steps": [
     "Làm giống bước tương ứng ở train.",
     "So hình dạng hai tập."
    ],
    "code": "num_v = X_validation.select_dtypes(include='number').columns\nX_validation[num_v].hist(bins=25, figsize=(15, 11)); plt.tight_layout()",
    "lotus": "Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.",
    "trap": "Không dùng validation để chọn đặc trưng.",
    "read": [
     "Hình giống 4.1.2 nhưng trên validation."
    ],
    "remark": "Phân phối các cột số ở validation có hình dạng tương tự train nên hai tập cùng nguồn.",
    "howRemark": [
     "So hai bộ biểu đồ.",
     "Kết luận độ tương đồng."
    ]
   },
   "en": {
    "think": "Plot validation numeric distributions, compared with train.",
    "steps": [
     "Do the same as the matching train step.",
     "Compare the shapes of the two sets."
    ],
    "code": "num_v = X_validation.select_dtypes(include='number').columns\nX_validation[num_v].hist(bins=25, figsize=(15, 11)); plt.tight_layout()",
    "lotus": "The two sets should look alike; very different means a poor split.",
    "trap": "Do not use validation to choose features.",
    "read": [
     "The chart mirrors 4.1.2 but on validation."
    ],
    "remark": "Numeric distributions on validation look like train's, so both sets share the same source.",
    "howRemark": [
     "Compare the two chart sets.",
     "Conclude similarity."
    ]
   }
  },
  "5.2": {
   "vi": {
    "think": "Tương quan cột số ở validation.",
    "steps": [
     "Làm giống bước tương ứng ở train.",
     "So hình dạng hai tập."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.",
    "trap": "Không dùng validation để chọn đặc trưng.",
    "read": [
     "Ô này không in kết quả hoặc hình giống train: so với bước tương ứng ở phần 4."
    ],
    "remark": "Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập tương đồng với train.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Numeric correlation in validation.",
    "steps": [
     "Do the same as the matching train step.",
     "Compare the shapes of the two sets."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "The two sets should look alike; very different means a poor split.",
    "trap": "Do not use validation to choose features.",
    "read": [
     "This cell prints nothing or a train-like chart: compare with the matching step in part 4."
    ],
    "remark": "Optional part: repeats exploration on validation to confirm it resembles train.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "5.3": {
   "vi": {
    "think": "Cân bằng lớp ở validation: 24,7% gian lận, như train nhờ stratify.",
    "steps": [
     "Làm giống bước tương ứng ở train.",
     "So hình dạng hai tập."
    ],
    "code": "print(y_validation.value_counts(normalize=True).round(3))",
    "lotus": "Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.",
    "trap": "Không dùng validation để chọn đặc trưng.",
    "read": [
     "Hai tỷ lệ ở validation: N 0,753 và Y 0,247."
    ],
    "remark": "Validation cũng 24,7% gian lận, đúng như train nhờ stratify.",
    "howRemark": [
     "So với 4.3."
    ]
   },
   "en": {
    "think": "Class balance in validation: 24.7% fraud, same as train thanks to stratify.",
    "steps": [
     "Do the same as the matching train step.",
     "Compare the shapes of the two sets."
    ],
    "code": "print(y_validation.value_counts(normalize=True).round(3))",
    "lotus": "The two sets should look alike; very different means a poor split.",
    "trap": "Do not use validation to choose features.",
    "read": [
     "Two shares on validation: N 0.753 and Y 0.247."
    ],
    "remark": "Validation is also 24.7% fraud, exactly like train thanks to stratify.",
    "howRemark": [
     "Compare with 4.3."
    ]
   }
  },
  "5.4.1": {
   "vi": {
    "think": "Khả năng gian lận theo nhóm ở validation, so với train.",
    "steps": [
     "Làm giống bước tương ứng ở train.",
     "So hình dạng hai tập."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.",
    "trap": "Không dùng validation để chọn đặc trưng.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Lặp lại 4.4.1 trên validation; kỳ vọng các cột như insured_hobbies và incident_severity vẫn có khoảng cách lớn.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Fraud likelihood by group in validation, compared to train.",
    "steps": [
     "Do the same as the matching train step.",
     "Compare the shapes of the two sets."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "The two sets should look alike; very different means a poor split.",
    "trap": "Do not use validation to choose features.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Repeats 4.4.1 on validation; expect columns like insured_hobbies and incident_severity to keep large gaps.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "5.4.2": {
   "vi": {
    "think": "Cột số theo gian lận ở validation, so với train.",
    "steps": [
     "Làm giống bước tương ứng ở train.",
     "So hình dạng hai tập."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Hai tập nên giống nhau; khác nhiều thì chia chưa tốt.",
    "trap": "Không dùng validation để chọn đặc trưng.",
    "read": [
     "Ô này không in kết quả hoặc hình giống train: so với bước tương ứng ở phần 4."
    ],
    "remark": "Phần tùy chọn: lặp lại bước khám phá trên validation để chắc hai tập tương đồng với train.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Numeric columns by fraud in validation, compared to train.",
    "steps": [
     "Do the same as the matching train step.",
     "Compare the shapes of the two sets."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "The two sets should look alike; very different means a poor split.",
    "trap": "Do not use validation to choose features.",
    "read": [
     "This cell prints nothing or a train-like chart: compare with the matching step in part 4."
    ],
    "remark": "Optional part: repeats exploration on validation to confirm it resembles train.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "6.1": {
   "vi": {
    "think": "Cân bằng lớp bằng RandomOverSampler: nhân bản ngẫu nhiên hồ sơ gian lận ở TRAIN cho bằng số hồ sơ sạch.",
    "steps": [
     "from imblearn.over_sampling import RandomOverSampler.",
     "fit_resample(X_train, y_train) chỉ ở train.",
     "Train từ 699 thành 1.052 dòng, mỗi lớp 526."
    ],
    "code": "from imblearn.over_sampling import RandomOverSampler\nros = RandomOverSampler(random_state=42)\nX_train, y_train = ros.fit_resample(X_train, y_train)\nprint(y_train.value_counts(), len(X_train))",
    "lotus": "Nhân bản các vụ gian lận để mô hình thấy đủ ví dụ, giống chép thêm các hồ sơ hiếm vào sổ luyện tập.",
    "trap": "Resample cả validation làm điểm đánh giá giả. Validation giữ tỷ lệ thật 24,7%.",
    "read": [
     "Bảng đếm lớp sau khi cân bằng: N 526 và Y 526, tổng 1.052."
    ],
    "remark": "Cân bằng bằng cách nhân bản ngẫu nhiên hồ sơ gian lận ở TRAIN: 526 sạch và 526 gian lận (tổng 1.052). Validation giữ nguyên để đo trung thực.",
    "howRemark": [
     "Báo số hồ sơ mỗi lớp.",
     "Nói chỉ cân bằng train.",
     "Nêu rủi ro (nhân bản gây quá khớp)."
    ]
   },
   "en": {
    "think": "Balance classes with RandomOverSampler: randomly duplicate fraud rows in TRAIN until they match clean rows.",
    "steps": [
     "from imblearn.over_sampling import RandomOverSampler.",
     "fit_resample(X_train, y_train) on train only.",
     "Train grows from 699 to 1,052 rows, 526 per class."
    ],
    "code": "from imblearn.over_sampling import RandomOverSampler\nros = RandomOverSampler(random_state=42)\nX_train, y_train = ros.fit_resample(X_train, y_train)\nprint(y_train.value_counts(), len(X_train))",
    "lotus": "Duplicate fraud cases so the model sees enough examples, like copying rare records into the practice log.",
    "trap": "Resampling validation too makes evaluation fake. Validation keeps the real 24.7%.",
    "read": [
     "Class counts after balancing: N 526 and Y 526, total 1,052."
    ],
    "remark": "Balanced by randomly duplicating fraud records in TRAIN: 526 clean and 526 fraud (1,052 total). Validation is left as is for an honest measure.",
    "howRemark": [
     "Report records per class.",
     "Say only train is balanced.",
     "State the risk (duplication can cause overfitting)."
    ]
   }
  },
  "6.2": {
   "vi": {
    "think": "Tạo đặc trưng mới từ cột cũ.",
    "steps": [
     "Số ngày từ lúc mua hợp đồng đến sự cố: policy_age_days.",
     "Tháng và thứ trong tuần của sự cố.",
     "Bồi hoàn mỗi xe: total_claim_amount / number_of_vehicles_involved.",
     "Làm cùng cách cho train và validation."
    ],
    "code": "for d in (X_train, X_validation):\n    d['policy_age_days'] = (d['incident_date'] - d['policy_bind_date']).dt.days\n    d['incident_month'] = d['incident_date'].dt.month\n    d['incident_dow'] = d['incident_date'].dt.dayofweek\n    d['claim_per_vehicle'] = d['total_claim_amount'] / d['number_of_vehicles_involved']\nprint(X_train[['policy_age_days', 'incident_month', 'incident_dow', 'claim_per_vehicle']].describe().round(1).to_string())",
    "lotus": "Một hợp đồng mới mua vài ngày đã có sự cố là tín hiệu đáng ngờ hơn ngày mua tuyệt đối.",
    "trap": "Một dòng có policy_age_days âm (-20) cho thấy ngày sự cố trước ngày mua: kiểm tra lại. Chỉ tạo đặc trưng bằng cách chia bằng các cột đã có, không dùng y.",
    "read": [
     "Bảng describe cho 4 đặc trưng mới: policy_age_days, incident_month, incident_dow, claim_per_vehicle.",
     "Chú ý min của policy_age_days là −20."
    ],
    "remark": "Đặc trưng mới gồm tuổi hợp đồng (trung bình 4.654 ngày), tháng, thứ và đòi bồi thường trên mỗi xe (trung bình 37.040); min −20 ngày cho thấy một số sự cố xảy ra trước ngày ký hợp đồng, đáng nghi.",
    "howRemark": [
     "Nêu đặc trưng mới và công thức.",
     "Kiểm giá trị bất thường.",
     "Nói giá trị của đặc trưng."
    ]
   },
   "en": {
    "think": "Create new features from existing columns.",
    "steps": [
     "Days from policy purchase to incident: policy_age_days.",
     "Month and weekday of the incident.",
     "Claim per vehicle: total_claim_amount / number_of_vehicles_involved.",
     "Do the same for train and validation."
    ],
    "code": "for d in (X_train, X_validation):\n    d['policy_age_days'] = (d['incident_date'] - d['policy_bind_date']).dt.days\n    d['incident_month'] = d['incident_date'].dt.month\n    d['incident_dow'] = d['incident_date'].dt.dayofweek\n    d['claim_per_vehicle'] = d['total_claim_amount'] / d['number_of_vehicles_involved']\nprint(X_train[['policy_age_days', 'incident_month', 'incident_dow', 'claim_per_vehicle']].describe().round(1).to_string())",
    "lotus": "A policy bought only days before the incident is more suspicious than the absolute purchase date.",
    "trap": "A row with negative policy_age_days (-20) shows the incident before purchase: recheck. Build features only from existing columns, never from y.",
    "read": [
     "describe table for 4 new features: policy_age_days, incident_month, incident_dow, claim_per_vehicle.",
     "Note policy_age_days min is −20."
    ],
    "remark": "New features: contract age (mean 4,654 days), month, weekday and claim per vehicle (mean 37,040); the −20-day minimum shows some incidents happened before the contract date, which is suspicious.",
    "howRemark": [
     "Name the new features and formulas.",
     "Check unusual values.",
     "State the value of the features."
    ]
   }
  },
  "6.3": {
   "vi": {
    "think": "Bỏ cột thừa: tương quan cao hoặc ít thông tin.",
    "steps": [
     "Bỏ injury/property/vehicle claim vì tổng đã có total_claim_amount (4.2).",
     "Bỏ age vì giống months_as_customer; bỏ hai cột ngày gốc vì đã có policy_age_days.",
     "Làm cùng cách cho train và validation."
    ],
    "code": "drop = ['policy_bind_date', 'incident_date', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_model', 'age']\nfor d in (X_train, X_validation): d.drop(columns=drop, inplace=True)\nprint(X_train.shape)",
    "lotus": "Giữ tổng, bỏ ba khoản thành phần: cùng thông tin, ít cột hơn.",
    "trap": "Bỏ ở train mà quên bỏ ở validation làm số cột lệch.",
    "read": [
     "(1052, 32) là hình dạng sau khi bỏ cột thừa."
    ],
    "remark": "Bỏ các cột tương quan cao hoặc ít thông tin (ví dụ khoản đòi con của total_claim_amount), còn 32 cột.",
    "howRemark": [
     "Báo số cột sau khi bỏ.",
     "Nêu lý do bỏ."
    ]
   },
   "en": {
    "think": "Drop redundant columns: highly correlated or low in information.",
    "steps": [
     "Drop injury/property/vehicle claim since total_claim_amount holds the sum (4.2).",
     "Drop age because it matches months_as_customer; drop the two raw dates since policy_age_days exists.",
     "Do the same for train and validation."
    ],
    "code": "drop = ['policy_bind_date', 'incident_date', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_model', 'age']\nfor d in (X_train, X_validation): d.drop(columns=drop, inplace=True)\nprint(X_train.shape)",
    "lotus": "Keep the total, drop the three parts: same information, fewer columns.",
    "trap": "Dropping on train but forgetting validation leaves mismatched column counts.",
    "read": [
     "(1052, 32) is the shape after dropping redundant columns."
    ],
    "remark": "Dropped highly correlated or low-information columns (e.g. components of total_claim_amount), leaving 32 columns.",
    "howRemark": [
     "Report columns after dropping.",
     "State the reasons."
    ]
   }
  },
  "6.4": {
   "vi": {
    "think": "Gộp nhóm hiếm trong cột nhóm để mô hình khỏe hơn.",
    "steps": [
     "Với incident_state gộp bang ít hồ sơ (PA, OH) thành 'Other'.",
     "Với insured_hobbies giữ chess và cross-fit riêng, gộp còn lại thành 'other'.",
     "Dùng cùng quy tắc cho validation."
    ],
    "code": "# gộp nhóm hiếm: bang xảy ra sự cố và sở thích\nrare_states = X_train['incident_state'].value_counts()[lambda s: s < 60].index\nhobby_top = ['chess', 'cross-fit']\nfor d in (X_train, X_validation):\n    d['incident_state'] = d['incident_state'].replace({s: 'Other' for s in rare_states})\n    d['insured_hobbies'] = d['insured_hobbies'].where(d['insured_hobbies'].isin(hobby_top), 'other')\nprint(X_train['incident_state'].value_counts().to_dict()); print(X_train['insured_hobbies'].value_counts().to_dict())",
    "lotus": "Hai nhóm cờ vua và cross-fit đủ khác biệt nên giữ riêng; mười một sở thích còn lại gộp một nhóm.",
    "trap": "Gộp theo kết quả y trên toàn bộ dữ liệu làm rò rỉ. Chọn nhóm giữ riêng theo EDA ở train.",
    "read": [
     "Hai bảng đếm: policy_state gộp nhóm hiếm thành Other; insured_hobbies thành chess, cross-fit, other."
    ],
    "remark": "Gộp nhóm hiếm: bang còn SC 283, NY 257, WV 194, NC 135, VA 109 và Other 74; sở thích còn other 902, chess 101, cross-fit 49. Ít nhóm hơn thì mô hình ổn định hơn.",
    "howRemark": [
     "Nêu nhóm sau khi gộp.",
     "Giải thích vì sao gộp.",
     "Nhớ chess và cross-fit là hai sở thích nổi bật ở 4.4.1."
    ]
   },
   "en": {
    "think": "Combine rare groups in categorical columns for a sturdier model.",
    "steps": [
     "For incident_state combine low-count states (PA, OH) into 'Other'.",
     "For insured_hobbies keep chess and cross-fit separate, merge the rest into 'other'.",
     "Apply the same rule to validation."
    ],
    "code": "# gộp nhóm hiếm: bang xảy ra sự cố và sở thích\nrare_states = X_train['incident_state'].value_counts()[lambda s: s < 60].index\nhobby_top = ['chess', 'cross-fit']\nfor d in (X_train, X_validation):\n    d['incident_state'] = d['incident_state'].replace({s: 'Other' for s in rare_states})\n    d['insured_hobbies'] = d['insured_hobbies'].where(d['insured_hobbies'].isin(hobby_top), 'other')\nprint(X_train['incident_state'].value_counts().to_dict()); print(X_train['insured_hobbies'].value_counts().to_dict())",
    "lotus": "The chess and cross-fit groups differ enough to keep separate; the other eleven hobbies merge into one.",
    "trap": "Merging by y results on the full data leaks. Choose the groups to keep from train EDA.",
    "read": [
     "Two count tables: policy_state with rare groups merged to Other; insured_hobbies to chess, cross-fit, other."
    ],
    "remark": "Rare groups merged: states left SC 283, NY 257, WV 194, NC 135, VA 109 and Other 74; hobbies left other 902, chess 101, cross-fit 49. Fewer groups make the model steadier.",
    "howRemark": [
     "Name the groups after merging.",
     "Explain why merge.",
     "Remember chess and cross-fit stood out in 4.4.1."
    ]
   }
  },
  "6.5.1": {
   "vi": {
    "think": "Xác định cột nhóm cần dummy.",
    "steps": [
     "select_dtypes(include=['object','str'])."
    ],
    "code": "cat_cols = X_train.select_dtypes(include=['object', 'str']).columns\nprint(list(cat_cols))",
    "lotus": "Mọi cột chữ còn lại.",
    "trap": "Quên cột vừa gộp ở 6.4.",
    "read": [
     "Danh sách 16 cột nhóm cần dummy."
    ],
    "remark": "16 cột chữ cần chuyển thành 0/1 vì mô hình chỉ đọc số.",
    "howRemark": [
     "Đếm cột.",
     "Nói vì sao cần dummy."
    ]
   },
   "en": {
    "think": "Identify categorical columns needing dummies.",
    "steps": [
     "select_dtypes(include=['object','str'])."
    ],
    "code": "cat_cols = X_train.select_dtypes(include=['object', 'str']).columns\nprint(list(cat_cols))",
    "lotus": "Every remaining text column.",
    "trap": "Forgetting the columns just merged in 6.4.",
    "read": [
     "The list of 16 categorical columns needing dummies."
    ],
    "remark": "16 text columns must become 0/1 since the model reads only numbers.",
    "howRemark": [
     "Count columns.",
     "Say why dummies."
    ]
   }
  },
  "6.5.2": {
   "vi": {
    "think": "Tạo dummy cho train.",
    "steps": [
     "get_dummies(drop_first=True, dtype=int).",
     "Ghép vào X_train, bỏ cột gốc.",
     "Train có 88 cột sau bước này."
    ],
    "code": "dt = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)\nX_train = pd.concat([X_train.drop(columns=cat_cols), dt], axis=1)\nprint(X_train.shape)",
    "lotus": "Mỗi nhóm thành một cột 0/1.",
    "trap": "Không drop_first sinh cột trùng lặp.",
    "read": [
     "(1052, 88): số cột của train sau khi tạo dummy."
    ],
    "remark": "Sau dummy, train có 88 cột; mỗi nhóm của một cột chữ thành một cột 0/1.",
    "howRemark": [
     "Báo hình dạng mới.",
     "Giải thích vì sao tăng cột."
    ]
   },
   "en": {
    "think": "Create dummies for train.",
    "steps": [
     "get_dummies(drop_first=True, dtype=int).",
     "Concatenate to X_train, drop originals.",
     "Train has 88 columns after this step."
    ],
    "code": "dt = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)\nX_train = pd.concat([X_train.drop(columns=cat_cols), dt], axis=1)\nprint(X_train.shape)",
    "lotus": "Each group becomes a 0/1 column.",
    "trap": "Without drop_first you get duplicate columns.",
    "read": [
     "(1052, 88): train's column count after dummies."
    ],
    "remark": "After dummies train has 88 columns; each level of a text column becomes a 0/1 column.",
    "howRemark": [
     "Report the new shape.",
     "Explain why columns grew."
    ]
   }
  },
  "6.5.3": {
   "vi": {
    "think": "Tạo dummy cho validation, đúng bộ cột của train.",
    "steps": [
     "get_dummies rồi reindex(columns=X_train.columns, fill_value=0)."
    ],
    "code": "dv = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)\nX_validation = pd.concat([X_validation.drop(columns=cat_cols), dv], axis=1).reindex(columns=X_train.columns, fill_value=0)\nprint(X_validation.shape)",
    "lotus": "Hai sổ phải có cùng bộ cột.",
    "trap": "Một nhóm có ở train mà không có ở validation làm lệch cột: reindex xử lý.",
    "read": [
     "(300, 88): validation có đúng 88 cột như train."
    ],
    "remark": "Validation có 88 cột trùng bộ cột của train nên mô hình áp dụng trực tiếp.",
    "howRemark": [
     "Kiểm cùng số cột với train."
    ]
   },
   "en": {
    "think": "Create dummies for validation with exactly train's columns.",
    "steps": [
     "get_dummies then reindex(columns=X_train.columns, fill_value=0)."
    ],
    "code": "dv = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)\nX_validation = pd.concat([X_validation.drop(columns=cat_cols), dv], axis=1).reindex(columns=X_train.columns, fill_value=0)\nprint(X_validation.shape)",
    "lotus": "Both logs must have the same columns.",
    "trap": "A group present in train but absent in validation misaligns columns: reindex fixes it.",
    "read": [
     "(300, 88): validation has exactly 88 columns like train."
    ],
    "remark": "Validation has the same 88 columns as train so the model applies directly.",
    "howRemark": [
     "Check same columns as train."
    ]
   }
  },
  "6.5.4": {
   "vi": {
    "think": "Mã hóa biến mục tiêu: Y thành 1, N thành 0.",
    "steps": [
     "(y == 'Y').astype(int) cho cả hai tập.",
     "Kiểm tra: train 0,5 (sau resample), validation 0,247."
    ],
    "code": "y_train = (y_train == 'Y').astype(int); y_validation = (y_validation == 'Y').astype(int)\nprint(y_train.mean().round(3), y_validation.mean().round(3))",
    "lotus": "1 nghĩa là hồ sơ gian lận: mô hình đoán xác suất gian lận.",
    "trap": "Mã hóa ngược làm đảo mọi chỉ số.",
    "read": [
     "Hai số: 0,5 và 0,247 là tỷ lệ gian lận của train đã cân bằng và của validation."
    ],
    "remark": "Sau khi mã hóa Y = 1 và N = 0, train cân bằng có 50% gian lận còn validation giữ 24,7%.",
    "howRemark": [
     "Giải thích hai tỷ lệ khác nhau.",
     "Nhắc không cân bằng validation."
    ]
   },
   "en": {
    "think": "Encode the target: Y to 1, N to 0.",
    "steps": [
     "(y == 'Y').astype(int) for both sets.",
     "Check: train 0.5 (after resampling), validation 0.247."
    ],
    "code": "y_train = (y_train == 'Y').astype(int); y_validation = (y_validation == 'Y').astype(int)\nprint(y_train.mean().round(3), y_validation.mean().round(3))",
    "lotus": "1 means a fraud claim: the model predicts the probability of fraud.",
    "trap": "Reversed encoding flips every metric.",
    "read": [
     "Two numbers: 0.5 and 0.247 are the fraud share of the balanced train and of validation."
    ],
    "remark": "After encoding Y = 1 and N = 0, balanced train has 50% fraud while validation stays at 24.7%.",
    "howRemark": [
     "Explain why the two rates differ.",
     "Remind not to balance validation."
    ]
   }
  },
  "6.6": {
   "vi": {
    "think": "Chuẩn hóa cột số: fit trên train, transform trên cả hai.",
    "steps": [
     "StandardScaler.",
     "fit_transform trên train, transform trên validation.",
     "16 cột số được chuẩn hóa; các cột dummy 0/1 giữ nguyên."
    ],
    "code": "from sklearn.preprocessing import StandardScaler\nsc_cols = [c for c in X_train.columns if X_train[c].nunique() > 2]\nscaler = StandardScaler()\nX_train[sc_cols] = scaler.fit_transform(X_train[sc_cols]); X_validation[sc_cols] = scaler.transform(X_validation[sc_cols])\nprint(len(sc_cols), 'cột số được chuẩn hóa')",
    "lotus": "Số tiền hàng chục nghìn và số xe một hai đơn vị phải cùng thang.",
    "trap": "fit scaler trên validation làm lộ thông tin.",
    "read": [
     "Dòng chữ: 16 cột số được chuẩn hóa."
    ],
    "remark": "Chuẩn hóa 16 cột số (fit trên train, áp lên validation) để hệ số so sánh được.",
    "howRemark": [
     "Nói chuẩn hóa fit chỉ trên train."
    ]
   },
   "en": {
    "think": "Scale numeric columns: fit on train, transform both.",
    "steps": [
     "StandardScaler.",
     "fit_transform on train, transform on validation.",
     "16 numeric columns scaled; 0/1 dummy columns left as is."
    ],
    "code": "from sklearn.preprocessing import StandardScaler\nsc_cols = [c for c in X_train.columns if X_train[c].nunique() > 2]\nscaler = StandardScaler()\nX_train[sc_cols] = scaler.fit_transform(X_train[sc_cols]); X_validation[sc_cols] = scaler.transform(X_validation[sc_cols])\nprint(len(sc_cols), 'cột số được chuẩn hóa')",
    "lotus": "Amounts in tens of thousands and vehicle counts of one or two must share a scale.",
    "trap": "Fitting the scaler on validation leaks information.",
    "read": [
     "Text: 16 numeric columns scaled."
    ],
    "remark": "Scaled 16 numeric columns (fit on train, applied to validation) so coefficients are comparable.",
    "howRemark": [
     "Say scaling is fit only on train."
    ]
   }
  },
  "7.1.1": {
   "vi": {
    "think": "Nạp thư viện để chọn biến (RFECV).",
    "steps": [
     "LogisticRegression và RFECV."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Chuẩn bị chọn các biến đáng giữ.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Đã nạp công cụ RFECV.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Import libraries for feature selection (RFECV).",
    "steps": [
     "LogisticRegression and RFECV."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Get ready to choose which features to keep.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "RFECV is loaded.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.1.2": {
   "vi": {
    "think": "Dùng RFECV: bỏ dần biến yếu nhất và dùng cross-validation để chọn số biến tốt nhất.",
    "steps": [
     "RFECV(LogisticRegression(), cv=5, scoring='accuracy').",
     "Biểu đồ accuracy theo số biến, chọn đỉnh.",
     "Với dữ liệu này, số biến tối ưu là 9."
    ],
    "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.feature_selection import RFECV\nrfecv = RFECV(LogisticRegression(max_iter=2000), step=1, cv=5, scoring='accuracy', min_features_to_select=5).fit(X_train, y_train)\nprint('số biến tối ưu:', rfecv.n_features_)\nplt.plot(range(5, 5 + len(rfecv.cv_results_['mean_test_score'])), rfecv.cv_results_['mean_test_score']); plt.xlabel('số biến'); plt.ylabel('accuracy CV')\nrank = pd.DataFrame({'feature': X_train.columns, 'rank': rfecv.ranking_}).sort_values('rank')\nprint(rank.head(12).to_string(index=False))",
    "lotus": "Chín yếu tố đủ để đoán gian lận: nghề, sở thích, mức độ hư hại, hãng xe.",
    "trap": "Không có cross-validation thì chọn số biến theo điểm train luôn nghiêng về nhiều biến nhất.",
    "read": [
     "Dòng đầu: số biến tối ưu 9.",
     "Bảng xếp hạng: rank 1 là biến được giữ.",
     "Biểu đồ: accuracy theo số biến, tìm đỉnh."
    ],
    "remark": "RFECV với cross-validation chọn 9 biến, gồm incident_severity (Minor, Trivial, Total Loss), insured_hobbies, insured_occupation và auto_make; đúng với hai cột mạnh nhất ở 4.4.1.",
    "howRemark": [
     "Nêu số biến tối ưu.",
     "Nhóm biến theo chủ đề.",
     "Đối chiếu với 4.4.1."
    ]
   },
   "en": {
    "think": "Use RFECV: drop the weakest feature step by step and use cross-validation to pick the best count.",
    "steps": [
     "RFECV(LogisticRegression(), cv=5, scoring='accuracy').",
     "Plot accuracy against feature count, choose the peak.",
     "For this data the optimal count is 9."
    ],
    "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.feature_selection import RFECV\nrfecv = RFECV(LogisticRegression(max_iter=2000), step=1, cv=5, scoring='accuracy', min_features_to_select=5).fit(X_train, y_train)\nprint('số biến tối ưu:', rfecv.n_features_)\nplt.plot(range(5, 5 + len(rfecv.cv_results_['mean_test_score'])), rfecv.cv_results_['mean_test_score']); plt.xlabel('số biến'); plt.ylabel('accuracy CV')\nrank = pd.DataFrame({'feature': X_train.columns, 'rank': rfecv.ranking_}).sort_values('rank')\nprint(rank.head(12).to_string(index=False))",
    "lotus": "Nine factors suffice to predict fraud: occupation, hobby, damage severity, car make.",
    "trap": "Without cross-validation, choosing by train score always leans toward the most features.",
    "read": [
     "First line: optimal number of features 9.",
     "Ranking table: rank 1 are kept.",
     "Chart: accuracy by number of features, find the peak."
    ],
    "remark": "RFECV with cross-validation picks 9 features, including incident_severity (Minor, Trivial, Total Loss), insured_hobbies, insured_occupation and auto_make; matching the strongest columns in 4.4.1.",
    "howRemark": [
     "State the optimal count.",
     "Group features by theme.",
     "Cross-check with 4.4.1."
    ]
   }
  },
  "7.1.2b": {
   "vi": {
    "think": "Giữ lại các biến RFECV chọn.",
    "steps": [
     "col = X_train.columns[rfecv.support_]."
    ],
    "code": "col = X_train.columns[rfecv.support_]\nprint(len(col), list(col)[:20])",
    "lotus": "Đây là 9 biến mô hình sẽ dùng.",
    "trap": "Không có.",
    "read": [
     "Dòng đầu là số biến giữ (9) và danh sách tên biến."
    ],
    "remark": "Giữ 9 biến: handlers-cleaners, priv-house-serv, hobbies cross-fit/other, incident severity Minor/Total Loss/Trivial, auto_make Audi/Honda.",
    "howRemark": [
     "Liệt kê biến giữ.",
     "Kiểm khớp với 7.1.2."
    ]
   },
   "en": {
    "think": "Retain the features selected by RFECV.",
    "steps": [
     "col = X_train.columns[rfecv.support_]."
    ],
    "code": "col = X_train.columns[rfecv.support_]\nprint(len(col), list(col)[:20])",
    "lotus": "These are the 9 features the model will use.",
    "trap": "None.",
    "read": [
     "First line is the kept count (9) and the feature names."
    ],
    "remark": "Kept 9 variables: handlers-cleaners, priv-house-serv, hobbies cross-fit/other, incident severity Minor/Total Loss/Trivial, auto_make Audi/Honda.",
    "howRemark": [
     "List the kept variables.",
     "Check they match 7.1.2."
    ]
   }
  },
  "7.2.1": {
   "vi": {
    "think": "Lấy đúng các cột đã chọn và thêm hằng số.",
    "steps": [
     "X_train[col].",
     "sm.add_constant."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Chỉ giữ chín yếu tố đã chọn.",
    "trap": "Quên hằng số thì hệ số sai.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Lấy đúng các cột đã chọn và thêm hằng số.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Select the chosen columns and add the constant.",
    "steps": [
     "X_train[col].",
     "sm.add_constant."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Keep only the nine chosen factors.",
    "trap": "Forgetting the constant gives wrong coefficients.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Take exactly the chosen columns and add the constant.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.2.2": {
   "vi": {
    "think": "Huấn luyện hồi quy logistic bằng statsmodels và đọc bảng hệ số.",
    "steps": [
     "sm.GLM(y_train, X_train_sm, family=Binomial()).fit().",
     "Đọc coef và P>|z|."
    ],
    "code": "import statsmodels.api as sm\nX_train_sm = sm.add_constant(X_train[col].astype(float))\nres = sm.GLM(y_train, X_train_sm, family=sm.families.Binomial()).fit()\nprint(res.summary().tables[1])",
    "lotus": "Hệ số âm ở incident_severity_Minor Damage nghĩa là hư hại nhẹ làm giảm xác suất gian lận so với nhóm gốc Major Damage. Dấu và p-value cho biết yếu tố nào đáng tin.",
    "trap": "Đọc hệ số mà bỏ qua p-value: biến p cao (như priv-house-serv, p ≈ 0,04 sát ngưỡng) có thể chỉ là nhiễu.",
    "read": [
     "Mỗi hàng là một biến: coef là hệ số, P>|z| là mức ý nghĩa.",
     "coef dương làm tăng khả năng gian lận, âm làm giảm.",
     "P < 0,05 là biến có ý nghĩa thống kê."
    ],
    "remark": "Hệ số cho biết biến nào đẩy xác suất gian lận lên hoặc xuống; giữ biến có P < 0,05. Đọc dấu để nói hướng, độ lớn để nói mạnh yếu.",
    "howRemark": [
     "Chọn 3 biến |coef| lớn nhất.",
     "Nói dấu nghĩa là gì.",
     "Kiểm P < 0,05.",
     "Dịch sang ngôn ngữ kinh doanh."
    ]
   },
   "en": {
    "think": "Train logistic regression with statsmodels and read the coefficient table.",
    "steps": [
     "sm.GLM(y_train, X_train_sm, family=Binomial()).fit().",
     "Read coef and P>|z|."
    ],
    "code": "import statsmodels.api as sm\nX_train_sm = sm.add_constant(X_train[col].astype(float))\nres = sm.GLM(y_train, X_train_sm, family=sm.families.Binomial()).fit()\nprint(res.summary().tables[1])",
    "lotus": "A negative coefficient on incident_severity_Minor Damage means minor damage lowers the fraud probability relative to the Major Damage baseline. Sign and p-value say which factors are trustworthy.",
    "trap": "Reading coefficients but skipping p-values: a high-p feature (like priv-house-serv, p ≈ 0.04 near the threshold) may just be noise.",
    "read": [
     "Each row is a variable: coef is the coefficient, P>|z| the significance.",
     "Positive coef raises fraud probability, negative lowers it.",
     "P < 0.05 means statistically significant."
    ],
    "remark": "Coefficients show which variables push fraud probability up or down; keep those with P < 0.05. Read the sign for direction and the size for strength.",
    "howRemark": [
     "Pick the 3 variables with largest |coef|.",
     "Say what the sign means.",
     "Check P < 0.05.",
     "Translate to business language."
    ]
   }
  },
  "7.2.3": {
   "vi": {
    "think": "Tính VIF để kiểm tra chồng lấn giữa các biến.",
    "steps": [
     "variance_inflation_factor cho từng cột.",
     "Tất cả VIF dưới 1,5: không đa cộng tuyến."
    ],
    "code": "from statsmodels.stats.outliers_influence import variance_inflation_factor\nXv = X_train[col].astype(float)\nvif = pd.DataFrame({'feature': col, 'VIF': [variance_inflation_factor(Xv.values, i) for i in range(Xv.shape[1])]}).sort_values('VIF', ascending=False)\nprint(vif.head(8).round(2).to_string(index=False))",
    "lotus": "VIF thấp nghĩa mỗi biến mang thông tin riêng.",
    "trap": "Tính VIF kèm hằng số cho số rất lớn.",
    "read": [
     "Mỗi dòng là VIF của một biến; gần 1 là không chồng lấn."
    ],
    "remark": "VIF lớn nhất chỉ 1,48 (insured_hobbies_other), tất cả gần 1 nên các biến độc lập và hệ số đáng tin.",
    "howRemark": [
     "Nêu VIF lớn nhất.",
     "So với ngưỡng 5.",
     "Kết luận."
    ]
   },
   "en": {
    "think": "Compute VIF to check overlap among features.",
    "steps": [
     "variance_inflation_factor per column.",
     "All VIF below 1.5: no multicollinearity."
    ],
    "code": "from statsmodels.stats.outliers_influence import variance_inflation_factor\nXv = X_train[col].astype(float)\nvif = pd.DataFrame({'feature': col, 'VIF': [variance_inflation_factor(Xv.values, i) for i in range(Xv.shape[1])]}).sort_values('VIF', ascending=False)\nprint(vif.head(8).round(2).to_string(index=False))",
    "lotus": "Low VIF means each feature carries its own information.",
    "trap": "Computing VIF with the constant gives a huge number.",
    "read": [
     "Each line is a variable's VIF; near 1 means no overlap."
    ],
    "remark": "The highest VIF is only 1.48 (insured_hobbies_other), all near 1, so variables are independent and coefficients trustworthy.",
    "howRemark": [
     "State the largest VIF.",
     "Compare with the threshold 5.",
     "Conclude."
    ]
   }
  },
  "7.2.4": {
   "vi": {
    "think": "Dự đoán xác suất gian lận trên train.",
    "steps": [
     "res.predict(X_train_sm)."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Mỗi hồ sơ có xác suất gian lận từ 0 đến 1.",
    "trap": "Thiếu hằng số báo lỗi.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Đã dự đoán xác suất gian lận trên train.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Predict fraud probabilities on train.",
    "steps": [
     "res.predict(X_train_sm)."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Each claim gets a fraud probability from 0 to 1.",
    "trap": "A missing constant raises an error.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Predicted fraud probability on train.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.2.5": {
   "vi": {
    "think": "Tạo bảng thực tế, xác suất, và dự đoán theo ngưỡng 0,5.",
    "steps": [
     "DataFrame có Fraud, Prob, Predicted (Prob > 0,5)."
    ],
    "code": "from sklearn import metrics\ntr = pd.DataFrame({'Fraud': y_train.values, 'Prob': res.predict(X_train_sm).values})\ntr['Predicted'] = (tr['Prob'] > 0.5).astype(int)\nprint(tr.head(6).round(3).to_string())",
    "lotus": "Mỗi dòng: hồ sơ thực sự gian lận hay không, mô hình cho bao nhiêu phần trăm.",
    "trap": "0,5 chỉ là mặc định, 7.3 tìm ngưỡng tốt hơn.",
    "read": [
     "Cột Fraud là thực tế, Prob là xác suất, Predicted là đoán 1 nếu xác suất > 0,5."
    ],
    "remark": "Dòng 0 thực tế sạch nhưng xác suất 0,816 nên bị đoán là gian lận (báo nhầm); các dòng 1–4 xác suất thấp nên đoán đúng sạch.",
    "howRemark": [
     "Chọn một dòng đúng, một dòng sai.",
     "Giải thích vì sao sai (xác suất vượt ngưỡng)."
    ]
   },
   "en": {
    "think": "Build a table of actual, probability and the 0.5-cutoff prediction.",
    "steps": [
     "A DataFrame with Fraud, Prob, Predicted (Prob > 0.5)."
    ],
    "code": "from sklearn import metrics\ntr = pd.DataFrame({'Fraud': y_train.values, 'Prob': res.predict(X_train_sm).values})\ntr['Predicted'] = (tr['Prob'] > 0.5).astype(int)\nprint(tr.head(6).round(3).to_string())",
    "lotus": "Each row: whether the claim was really fraud and the percentage the model gave.",
    "trap": "0.5 is only a default; 7.3 finds a better cutoff.",
    "read": [
     "Fraud is actual, Prob is probability, Predicted is 1 if probability > 0.5."
    ],
    "remark": "Row 0 is actually clean but probability 0.816 predicts fraud (a false alarm); rows 1–4 have low probability and are correctly predicted clean.",
    "howRemark": [
     "Choose one right row and one wrong row.",
     "Explain why wrong (probability crossed the threshold)."
    ]
   }
  },
  "7.2.6": {
   "vi": {
    "think": "Độ chính xác trên train.",
    "steps": [
     "accuracy_score."
    ],
    "code": "print('accuracy', round(metrics.accuracy_score(tr['Fraud'], tr['Predicted']), 4))",
    "lotus": "Khoảng 87%.",
    "trap": "Độ chính xác đơn độc không nói kiểu sai nào.",
    "read": [
     "Một con số: độ chính xác train."
    ],
    "remark": "Độ chính xác train 0,8726: đúng khoảng 87% (train đã cân bằng 50/50 nên mốc đoán bừa là 50%).",
    "howRemark": [
     "Báo số.",
     "So với mốc 50%."
    ]
   },
   "en": {
    "think": "Accuracy on train.",
    "steps": [
     "accuracy_score."
    ],
    "code": "print('accuracy', round(metrics.accuracy_score(tr['Fraud'], tr['Predicted']), 4))",
    "lotus": "About 87%.",
    "trap": "Accuracy alone does not say which errors.",
    "read": [
     "One number: train accuracy."
    ],
    "remark": "Train accuracy is 0.8726: about 87% right (train is balanced 50/50 so the guessing baseline is 50%).",
    "howRemark": [
     "Report the number.",
     "Compare with the 50% baseline."
    ]
   }
  },
  "7.2.7": {
   "vi": {
    "think": "Ma trận nhầm lẫn trên train.",
    "steps": [
     "confusion_matrix(thực, dự đoán)."
    ],
    "code": "cm = metrics.confusion_matrix(tr['Fraud'], tr['Predicted'])\nprint(pd.DataFrame(cm, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Trên train: 453 sạch đoán đúng, 465 gian lận đoán đúng, 73 sạch bị báo gian lận, 61 gian lận bị bỏ sót.",
    "trap": "Hàng là thực tế, cột là dự đoán.",
    "read": [
     "Hàng là thực tế, cột là đoán.",
     "Đường chéo 453 và 465 là đoán đúng; 73 và 61 là sai."
    ],
    "remark": "Đúng 918 trên 1.052; báo nhầm gian lận 73, bỏ sót 61. Hai loại sai gần nhau.",
    "howRemark": [
     "Cộng đường chéo và ô sai.",
     "Nói loại sai nào nặng hơn khi điều tra gian lận (bỏ sót)."
    ]
   },
   "en": {
    "think": "Confusion matrix on train.",
    "steps": [
     "confusion_matrix(actual, predicted)."
    ],
    "code": "cm = metrics.confusion_matrix(tr['Fraud'], tr['Predicted'])\nprint(pd.DataFrame(cm, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "On train: 453 clean correct, 465 fraud correct, 73 clean flagged as fraud, 61 fraud missed.",
    "trap": "Rows are actual, columns are predicted.",
    "read": [
     "Rows are actual, columns predicted.",
     "Diagonal 453 and 465 is right; 73 and 61 wrong."
    ],
    "remark": "Right on 918 of 1,052; 73 false alarms and 61 misses. The two error types are close.",
    "howRemark": [
     "Add the diagonal and error cells.",
     "Say which error is worse in fraud work (misses)."
    ]
   }
  },
  "7.2.8": {
   "vi": {
    "think": "Đặt tên bốn ô: TP, TN, FP, FN.",
    "steps": [
     "TN, FP, FN, TP = cm.ravel().",
     "Ở đây dương = gian lận."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "FN (bỏ sót gian lận) làm công ty mất tiền; FP (báo nhầm) làm khách thật bị làm phiền.",
    "trap": "Nhầm ô nào là FP hay FN đảo ngược chỉ số.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Bốn ô: TP 465, TN 453, FP 73, FN 61 (Positive là gian lận).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Name the four cells: TP, TN, FP, FN.",
    "steps": [
     "TN, FP, FN, TP = cm.ravel().",
     "Here positive = fraud."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "FN (missed fraud) costs the company money; FP (false alarm) bothers honest customers.",
    "trap": "Mixing up FP and FN inverts the metrics.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Four cells: TP 465, TN 453, FP 73, FN 61 (Positive is fraud).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.2.9": {
   "vi": {
    "think": "Tính sensitivity, specificity, precision, recall, F1.",
    "steps": [
     "Sensitivity = recall = TP/(TP+FN).",
     "Specificity = TN/(TN+FP); precision = TP/(TP+FP); F1 = trung bình điều hòa của precision và recall."
    ],
    "code": "TN, FP, FN, TP = cm.ravel()\ndef rep(TN, FP, FN, TP):\n    se = TP / (TP + FN); sp = TN / (TN + FP); pr = TP / (TP + FP); f1 = 2 * pr * se / (pr + se)\n    return f'sensitivity(recall) {se:.3f} | specificity {sp:.3f} | precision {pr:.3f} | F1 {f1:.3f}'\nprint(rep(TN, FP, FN, TP))",
    "lotus": "Trên train: sensitivity 0,884 (bắt được 88% vụ gian lận), specificity 0,861, precision 0,864, F1 0,874.",
    "trap": "Dữ liệu train đã được cân bằng nên các số này đẹp hơn thực tế, chờ xem validation.",
    "read": [
     "Năm chỉ số: sensitivity 0,884, specificity 0,861, precision 0,864, F1 0,874."
    ],
    "remark": "Bắt được 88,4% hồ sơ gian lận (sensitivity); khi báo gian lận thì đúng 86,4% (precision); F1 0,874 là điểm cân bằng hai thước đo.",
    "howRemark": [
     "Báo từng chỉ số bằng câu thường.",
     "Nói chỉ số nào quan trọng nhất cho việc điều tra."
    ]
   },
   "en": {
    "think": "Compute sensitivity, specificity, precision, recall and F1.",
    "steps": [
     "Sensitivity = recall = TP/(TP+FN).",
     "Specificity = TN/(TN+FP); precision = TP/(TP+FP); F1 = harmonic mean of precision and recall."
    ],
    "code": "TN, FP, FN, TP = cm.ravel()\ndef rep(TN, FP, FN, TP):\n    se = TP / (TP + FN); sp = TN / (TN + FP); pr = TP / (TP + FP); f1 = 2 * pr * se / (pr + se)\n    return f'sensitivity(recall) {se:.3f} | specificity {sp:.3f} | precision {pr:.3f} | F1 {f1:.3f}'\nprint(rep(TN, FP, FN, TP))",
    "lotus": "On train: sensitivity 0.884 (catches 88% of fraud), specificity 0.861, precision 0.864, F1 0.874.",
    "trap": "Train was balanced, so these look better than reality; wait for validation.",
    "read": [
     "Five metrics: sensitivity 0.884, specificity 0.861, precision 0.864, F1 0.874."
    ],
    "remark": "Catches 88.4% of fraud claims (sensitivity); when it flags fraud it is right 86.4% of the time (precision); F1 0.874 balances the two.",
    "howRemark": [
     "State each metric in plain words.",
     "Say which metric matters most for investigation."
    ]
   }
  },
  "7.3.1": {
   "vi": {
    "think": "Vẽ đường ROC và AUC.",
    "steps": [
     "roc_curve và roc_auc_score.",
     "Đường càng sát góc trên trái càng tốt."
    ],
    "code": "fpr, tpr, _ = metrics.roc_curve(tr['Fraud'], tr['Prob'], drop_intermediate=False)\nauc = metrics.roc_auc_score(tr['Fraud'], tr['Prob'])\nplt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--'); plt.legend(); plt.xlabel('FPR'); plt.ylabel('TPR')",
    "lotus": "AUC cho biết khả năng xếp hồ sơ gian lận cao hơn hồ sơ sạch.",
    "trap": "Đường sát đường chéo là đoán bừa.",
    "read": [
     "Đường ROC: trục ngang tỉ lệ báo nhầm, trục dọc tỉ lệ bắt đúng; càng ôm góc trên trái càng tốt.",
     "AUC là diện tích dưới đường: 0,5 là đoán bừa."
    ],
    "remark": "Đường ROC nằm hẳn trên đường chéo, nghĩa là mô hình phân biệt tốt hơn đoán bừa; AUC tóm tắt trong một con số.",
    "howRemark": [
     "Mô tả hình ROC.",
     "Báo AUC.",
     "So với 0,5."
    ]
   },
   "en": {
    "think": "Plot the ROC curve and AUC.",
    "steps": [
     "roc_curve and roc_auc_score.",
     "The closer to the top-left the better."
    ],
    "code": "fpr, tpr, _ = metrics.roc_curve(tr['Fraud'], tr['Prob'], drop_intermediate=False)\nauc = metrics.roc_auc_score(tr['Fraud'], tr['Prob'])\nplt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--'); plt.legend(); plt.xlabel('FPR'); plt.ylabel('TPR')",
    "lotus": "AUC measures how well it ranks fraud claims above clean ones.",
    "trap": "A curve near the diagonal is guessing.",
    "read": [
     "ROC curve: x axis false-alarm rate, y axis true-catch rate; closer to top-left is better.",
     "AUC is the area under it: 0.5 is guessing."
    ],
    "remark": "The ROC curve sits well above the diagonal, so the model discriminates better than guessing; AUC summarises it in one number.",
    "howRemark": [
     "Describe the ROC shape.",
     "Report AUC.",
     "Compare with 0.5."
    ]
   }
  },
  "7.3.2": {
   "vi": {
    "think": "Dự đoán ở nhiều ngưỡng từ 0,0 đến 0,9.",
    "steps": [
     "Vòng lặp tạo cột cho mỗi ngưỡng."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Thử từng ngưỡng: báo gian lận khi xác suất trên 10%, 20%, ...",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Đã dự đoán ở nhiều ngưỡng từ 0,0 đến 0,9.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Predict at cutoffs from 0.0 to 0.9.",
    "steps": [
     "A loop creating a column per cutoff."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Try each threshold: flag fraud when probability exceeds 10%, 20%, ...",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Predicted at many thresholds from 0.0 to 0.9.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.3.3": {
   "vi": {
    "think": "Vẽ accuracy, sensitivity, specificity theo ngưỡng để chọn ngưỡng tối ưu.",
    "steps": [
     "Tính ba chỉ số ở mỗi ngưỡng.",
     "Chọn nơi sensitivity và specificity gần nhau và accuracy cao: khoảng 0,5 đến 0,7."
    ],
    "code": "rows = []\nfor i in [x / 10 for x in range(10)]:\n    p = (tr['Prob'] > i).astype(int)\n    tn, fp, fn, tp = metrics.confusion_matrix(tr['Fraud'], p).ravel()\n    rows.append([i, (tp + tn) / len(tr), tp / (tp + fn), tn / (tn + fp)])\ncdf = pd.DataFrame(rows, columns=['cutoff', 'accuracy', 'sensitivity', 'specificity'])\ncdf.plot(x='cutoff', y=['accuracy', 'sensitivity', 'specificity'])\nprint(cdf.round(3).to_string(index=False))",
    "lotus": "Hạ ngưỡng xuống 0,2 bắt thêm vụ gian lận (sensitivity 0,90) nhưng báo nhầm nhiều hơn (specificity 0,81).",
    "trap": "Chọn ngưỡng chỉ theo accuracy bỏ qua chi phí của từng kiểu sai.",
    "read": [
     "Mỗi dòng là một ngưỡng; ba cột accuracy, sensitivity, specificity.",
     "Tăng ngưỡng thì sensitivity giảm và specificity tăng."
    ],
    "remark": "Accuracy cao nhất ở ngưỡng 0,4 (0,875) và 0,5 (0,873); ngưỡng 0,5 có sensitivity 0,884 gần specificity 0,861 nên chọn 0,5.",
    "howRemark": [
     "Tìm ngưỡng accuracy cao nhất.",
     "Nêu đánh đổi sensitivity và specificity.",
     "Chốt ngưỡng và lý do."
    ]
   },
   "en": {
    "think": "Plot accuracy, sensitivity, specificity by cutoff and pick the optimal one.",
    "steps": [
     "Compute the three metrics at each cutoff.",
     "Choose where sensitivity and specificity are close and accuracy high: about 0.5 to 0.7."
    ],
    "code": "rows = []\nfor i in [x / 10 for x in range(10)]:\n    p = (tr['Prob'] > i).astype(int)\n    tn, fp, fn, tp = metrics.confusion_matrix(tr['Fraud'], p).ravel()\n    rows.append([i, (tp + tn) / len(tr), tp / (tp + fn), tn / (tn + fp)])\ncdf = pd.DataFrame(rows, columns=['cutoff', 'accuracy', 'sensitivity', 'specificity'])\ncdf.plot(x='cutoff', y=['accuracy', 'sensitivity', 'specificity'])\nprint(cdf.round(3).to_string(index=False))",
    "lotus": "Lowering the cutoff to 0.2 catches more fraud (sensitivity 0.90) but raises false alarms (specificity 0.81).",
    "trap": "Choosing the cutoff by accuracy alone ignores the cost of each error type.",
    "read": [
     "Each row is a threshold; columns accuracy, sensitivity, specificity.",
     "Raising the threshold lowers sensitivity and raises specificity."
    ],
    "remark": "Accuracy peaks at thresholds 0.4 (0.875) and 0.5 (0.873); at 0.5 sensitivity 0.884 is close to specificity 0.861 so choose 0.5.",
    "howRemark": [
     "Find the highest-accuracy threshold.",
     "State the sensitivity–specificity trade-off.",
     "Fix the threshold and reason."
    ]
   }
  },
  "7.3.4": {
   "vi": {
    "think": "Tạo dự đoán cuối theo ngưỡng chọn.",
    "steps": [
     "Chọn cutoff (ở đây 0,5) và tạo cột final."
    ],
    "code": "cutoff = 0.5\ntr['final'] = (tr['Prob'] > cutoff).astype(int)\nprint('cutoff chọn:', cutoff)",
    "lotus": "Từ giờ mô hình báo gian lận khi xác suất vượt ngưỡng này.",
    "trap": "Hard-code rồi quên cập nhật.",
    "read": [
     "Một dòng: ngưỡng chọn 0,5."
    ],
    "remark": "Ngưỡng cuối là 0,5, từ bảng ở 7.3.3.",
    "howRemark": [
     "Nêu ngưỡng và dẫn 7.3.3."
    ]
   },
   "en": {
    "think": "Create the final prediction using the chosen cutoff.",
    "steps": [
     "Choose the cutoff (here 0.5) and create a final column."
    ],
    "code": "cutoff = 0.5\ntr['final'] = (tr['Prob'] > cutoff).astype(int)\nprint('cutoff chọn:', cutoff)",
    "lotus": "From now on the model flags fraud above this threshold.",
    "trap": "Hard-coding and forgetting to update.",
    "read": [
     "One line: chosen cutoff 0.5."
    ],
    "remark": "The final cutoff is 0.5, from the table in 7.3.3.",
    "howRemark": [
     "State the cutoff and cite 7.3.3."
    ]
   }
  },
  "7.3.5": {
   "vi": {
    "think": "Độ chính xác với ngưỡng mới.",
    "steps": [
     "Làm giống bước tương ứng ở 7.2."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Cùng 0,873 vì ngưỡng 0,5 đã gần tối ưu.",
    "trap": "Nhớ cập nhật biến.",
    "read": [
     "Đối chiếu với bước tương ứng ở 7.2."
    ],
    "remark": "Cùng kết quả với 7.2.6–7.2.8 vì ngưỡng vẫn 0,5 (accuracy 0,8726; TP 465, TN 453, FP 73, FN 61).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Accuracy with the new cutoff.",
    "steps": [
     "Do as the matching step in 7.2."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Same 0.873 because 0.5 was already near optimal.",
    "trap": "Remember to update the variables.",
    "read": [
     "Cross-check with the matching step in 7.2."
    ],
    "remark": "Same results as 7.2.6–7.2.8 since the threshold stays 0.5 (accuracy 0.8726; TP 465, TN 453, FP 73, FN 61).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.3.6": {
   "vi": {
    "think": "Ma trận nhầm lẫn với ngưỡng mới.",
    "steps": [
     "Làm giống bước tương ứng ở 7.2."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Cùng ma trận như 7.2.7.",
    "trap": "Nhớ cập nhật biến.",
    "read": [
     "Đối chiếu với bước tương ứng ở 7.2."
    ],
    "remark": "Cùng kết quả với 7.2.6–7.2.8 vì ngưỡng vẫn 0,5 (accuracy 0,8726; TP 465, TN 453, FP 73, FN 61).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Confusion matrix with the new cutoff.",
    "steps": [
     "Do as the matching step in 7.2."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Same matrix as 7.2.7.",
    "trap": "Remember to update the variables.",
    "read": [
     "Cross-check with the matching step in 7.2."
    ],
    "remark": "Same results as 7.2.6–7.2.8 since the threshold stays 0.5 (accuracy 0.8726; TP 465, TN 453, FP 73, FN 61).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.3.7": {
   "vi": {
    "think": "TP, TN, FP, FN cho ngưỡng mới.",
    "steps": [
     "Làm giống bước tương ứng ở 7.2."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Như 7.2.8.",
    "trap": "Nhớ cập nhật biến.",
    "read": [
     "Đối chiếu với bước tương ứng ở 7.2."
    ],
    "remark": "Cùng kết quả với 7.2.6–7.2.8 vì ngưỡng vẫn 0,5 (accuracy 0,8726; TP 465, TN 453, FP 73, FN 61).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "TP, TN, FP, FN for the new cutoff.",
    "steps": [
     "Do as the matching step in 7.2."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "As 7.2.8.",
    "trap": "Remember to update the variables.",
    "read": [
     "Cross-check with the matching step in 7.2."
    ],
    "remark": "Same results as 7.2.6–7.2.8 since the threshold stays 0.5 (accuracy 0.8726; TP 465, TN 453, FP 73, FN 61).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.3.8": {
   "vi": {
    "think": "Sensitivity, specificity, precision, recall, F1 ở ngưỡng mới.",
    "steps": [
     "Làm giống bước tương ứng ở 7.2."
    ],
    "code": "cm2 = metrics.confusion_matrix(tr['Fraud'], tr['final']); TN, FP, FN, TP = cm2.ravel()\nprint(cm2); print(rep(TN, FP, FN, TP))",
    "lotus": "Với 0,5 các số giống 7.2.9; nếu bạn chọn ngưỡng khác, các số sẽ đổi.",
    "trap": "Nhớ cập nhật biến.",
    "read": [
     "Ma trận và năm chỉ số ở ngưỡng 0,5, giống 7.2.9."
    ],
    "remark": "Ở ngưỡng 0,5: sensitivity 0,884, specificity 0,861, precision 0,864, F1 0,874; ngưỡng không đổi nên kết quả không đổi.",
    "howRemark": [
     "Đối chiếu 7.2.9.",
     "Nói ngưỡng không đổi nên không đổi."
    ]
   },
   "en": {
    "think": "Sensitivity, specificity, precision, recall, F1 at the new cutoff.",
    "steps": [
     "Do as the matching step in 7.2."
    ],
    "code": "cm2 = metrics.confusion_matrix(tr['Fraud'], tr['final']); TN, FP, FN, TP = cm2.ravel()\nprint(cm2); print(rep(TN, FP, FN, TP))",
    "lotus": "With 0.5 the numbers match 7.2.9; if you choose another cutoff they change.",
    "trap": "Remember to update the variables.",
    "read": [
     "Matrix and five metrics at 0.5, same as 7.2.9."
    ],
    "remark": "At 0.5: sensitivity 0.884, specificity 0.861, precision 0.864, F1 0.874; unchanged threshold, unchanged result.",
    "howRemark": [
     "Cross-check 7.2.9.",
     "Say unchanged threshold means unchanged result."
    ]
   }
  },
  "7.3.9": {
   "vi": {
    "think": "Vẽ đường precision-recall.",
    "steps": [
     "precision_recall_curve.",
     "Vẽ precision và recall theo ngưỡng, điểm cắt là cân bằng."
    ],
    "code": "from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(tr['Fraud'], tr['Prob'])\nplt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')",
    "lotus": "Nếu công ty chấp nhận báo nhầm để bắt thêm gian lận thì hạ ngưỡng, ngược lại nâng ngưỡng.",
    "trap": "p và r dài hơn t một phần tử.",
    "read": [
     "Đường precision-recall: trục ngang recall, trục dọc precision; tăng recall thường làm giảm precision."
    ],
    "remark": "Đường cho thấy đánh đổi giữa bắt thêm gian lận và báo nhầm; ở ngưỡng 0,5 precision 0,864 và recall 0,884 cân bằng nên giữ.",
    "howRemark": [
     "Mô tả đánh đổi.",
     "Chỉ điểm ngưỡng đã chọn.",
     "Nói khi nào ưu tiên recall (không bỏ sót gian lận)."
    ]
   },
   "en": {
    "think": "Plot the precision-recall curve.",
    "steps": [
     "precision_recall_curve.",
     "Plot precision and recall by cutoff; the crossing is the balance."
    ],
    "code": "from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(tr['Fraud'], tr['Prob'])\nplt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')",
    "lotus": "If the company accepts false alarms to catch more fraud, lower the cutoff, otherwise raise it.",
    "trap": "p and r are one element longer than t.",
    "read": [
     "Precision-recall curve: x axis recall, y axis precision; raising recall usually lowers precision."
    ],
    "remark": "The curve shows the trade-off between catching more fraud and false alarms; at 0.5 precision 0.864 and recall 0.884 are balanced so keep it.",
    "howRemark": [
     "Describe the trade-off.",
     "Mark the chosen threshold.",
     "Say when to favour recall (not missing fraud)."
    ]
   }
  },
  "7.4.1": {
   "vi": {
    "think": "Nạp thư viện cho random forest.",
    "steps": [
     "RandomForestClassifier, GridSearchCV, cross_val_score."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Chuyển từ mô hình tuyến tính sang rừng cây.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Đã nạp thư viện random forest.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Import libraries for random forest.",
    "steps": [
     "RandomForestClassifier, GridSearchCV, cross_val_score."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Move from the linear model to a forest of trees.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Random forest libraries are loaded.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.4.2": {
   "vi": {
    "think": "Huấn luyện random forest cơ bản.",
    "steps": [
     "RandomForestClassifier(n_estimators=100, random_state=42).fit."
    ],
    "code": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report\nfrom sklearn.model_selection import cross_val_score, GridSearchCV\nrf = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train, y_train)\nprint('đã huấn luyện rừng', rf.n_estimators, 'cây')",
    "lotus": "100 cây quyết định bỏ phiếu để đoán gian lận.",
    "trap": "Quên random_state làm kết quả đổi mỗi lần chạy.",
    "read": [
     "Dòng chữ: đã huấn luyện rừng 100 cây."
    ],
    "remark": "Rừng 100 cây cơ bản đã huấn luyện; chưa chỉnh tham số.",
    "howRemark": [
     "Nói số cây và việc chưa tinh chỉnh."
    ]
   },
   "en": {
    "think": "Train a base random forest.",
    "steps": [
     "RandomForestClassifier(n_estimators=100, random_state=42).fit."
    ],
    "code": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report\nfrom sklearn.model_selection import cross_val_score, GridSearchCV\nrf = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train, y_train)\nprint('đã huấn luyện rừng', rf.n_estimators, 'cây')",
    "lotus": "100 decision trees vote to predict fraud.",
    "trap": "Forgetting random_state makes results change on each run.",
    "read": [
     "Text: a forest of 100 trees trained."
    ],
    "remark": "A basic 100-tree forest is trained; parameters not yet tuned.",
    "howRemark": [
     "State the tree count and that it is untuned."
    ]
   }
  },
  "7.4.3": {
   "vi": {
    "think": "Xem mức quan trọng của biến và chọn biến quan trọng.",
    "steps": [
     "rf.feature_importances_ thành Series và sắp xếp.",
     "Giữ biến vượt mức trung bình: 17 biến."
    ],
    "code": "imp = pd.Series(rf.feature_importances_, index=X_train.columns).sort_values(ascending=False)\nimp.head(12).iloc[::-1].plot(kind='barh', title='Mức quan trọng của biến (random forest)')\nsel = imp[imp > imp.mean()].index\nprint(len(sel), 'biến vượt mức trung bình'); print(imp.head(10).round(3).to_string())",
    "lotus": "Mức hư hại nhẹ và sở thích là hai biến quan trọng nhất, giống kết quả hồi quy logistic: hai mô hình đồng ý nhau.",
    "trap": "Mức quan trọng của rừng không nói chiều ảnh hưởng, chỉ nói mức.",
    "read": [
     "Dòng đầu: 17 biến vượt mức quan trọng trung bình.",
     "Bảng: biến và độ quan trọng; càng lớn càng được rừng dùng nhiều.",
     "Biểu đồ: cột độ quan trọng."
    ],
    "remark": "17 biến vượt mức trung bình; quan trọng nhất là incident_severity_Minor Damage (0,090), insured_hobbies_other (0,075) và incident_severity_Total Loss (0,058), rồi total_claim_amount (0,054): rừng cũng chọn các biến mà hồi quy đã chọn.",
    "howRemark": [
     "Nêu 3 biến đầu kèm số.",
     "So với biến RFECV ở 7.1.2.",
     "Giải thích độ quan trọng là gì."
    ]
   },
   "en": {
    "think": "See feature importance and select the important ones.",
    "steps": [
     "rf.feature_importances_ into a Series, sorted.",
     "Keep features above the mean: 17 features."
    ],
    "code": "imp = pd.Series(rf.feature_importances_, index=X_train.columns).sort_values(ascending=False)\nimp.head(12).iloc[::-1].plot(kind='barh', title='Mức quan trọng của biến (random forest)')\nsel = imp[imp > imp.mean()].index\nprint(len(sel), 'biến vượt mức trung bình'); print(imp.head(10).round(3).to_string())",
    "lotus": "Minor damage and hobby are the two most important features, matching the logistic result: both models agree.",
    "trap": "Forest importance gives no direction, only size.",
    "read": [
     "First line: 17 variables above average importance.",
     "Table: variable and importance; larger means used more by the forest.",
     "Chart: importance bars."
    ],
    "remark": "17 variables exceed the average; most important are incident_severity_Minor Damage (0.090), insured_hobbies_other (0.075) and incident_severity_Total Loss (0.058), then total_claim_amount (0.054): the forest picks the same variables regression did.",
    "howRemark": [
     "Name the top 3 with numbers.",
     "Compare with the RFECV features in 7.1.2.",
     "Explain what importance is."
    ]
   }
  },
  "7.4.4": {
   "vi": {
    "think": "Huấn luyện lại với biến đã chọn.",
    "steps": [
     "fit trên X_train[sel]."
    ],
    "code": "rf2 = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train[sel], y_train)\nprint('train với', len(sel), 'biến')",
    "lotus": "Mô hình gọn hơn: 17 biến.",
    "trap": "Chọn biến theo validation là rò rỉ.",
    "read": [
     "Dòng chữ: huấn luyện lại với 17 biến."
    ],
    "remark": "Rừng huấn luyện lại chỉ với 17 biến quan trọng để giảm nhiễu.",
    "howRemark": [
     "Nêu số biến."
    ]
   },
   "en": {
    "think": "Retrain with the selected features.",
    "steps": [
     "fit on X_train[sel]."
    ],
    "code": "rf2 = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train[sel], y_train)\nprint('train với', len(sel), 'biến')",
    "lotus": "A leaner model: 17 features.",
    "trap": "Choosing features by validation leaks.",
    "read": [
     "Text: retrained with 17 variables."
    ],
    "remark": "The forest is retrained on only the 17 important variables to cut noise.",
    "howRemark": [
     "State the variable count."
    ]
   }
  },
  "7.4.5": {
   "vi": {
    "think": "Dự đoán trên train.",
    "steps": [
     "rf2.predict(X_train[sel])."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Dự đoán các hồ sơ đã học.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Đã dự đoán trên train bằng rừng.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Predict on train.",
    "steps": [
     "rf2.predict(X_train[sel])."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Predict the claims it learned from.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Predicted on train with the forest.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.4.6": {
   "vi": {
    "think": "Độ chính xác của rừng trên train.",
    "steps": [
     "accuracy_score."
    ],
    "code": "p = rf2.predict(X_train[sel])\nprint('accuracy train', round(metrics.accuracy_score(y_train, p), 4))",
    "lotus": "Đạt 100% trên train: quá hoàn hảo, rừng cây đã nhớ thuộc lòng, dấu hiệu quá khớp.",
    "trap": "Tin điểm 100% là sai: phải kiểm tra bằng cross-validation (7.4.10).",
    "read": [
     "Một số: accuracy train 1,0."
    ],
    "remark": "Độ chính xác train 1,0 (đúng 100%): quá hoàn hảo, dấu hiệu rừng học thuộc train (quá khớp), cần kiểm bằng validation.",
    "howRemark": [
     "Báo số.",
     "Nói vì sao 100% đáng nghi.",
     "Nhắc kiểm tra trên dữ liệu mới."
    ]
   },
   "en": {
    "think": "Random forest accuracy on train.",
    "steps": [
     "accuracy_score."
    ],
    "code": "p = rf2.predict(X_train[sel])\nprint('accuracy train', round(metrics.accuracy_score(y_train, p), 4))",
    "lotus": "It hits 100% on train: too perfect, the forest memorised, a sign of overfitting.",
    "trap": "Trusting the 100% is wrong: check with cross-validation (7.4.10).",
    "read": [
     "One number: train accuracy 1.0."
    ],
    "remark": "Train accuracy 1.0 (100% right): too perfect, a sign the forest memorised train (overfitting), to be checked on validation.",
    "howRemark": [
     "Report the number.",
     "Say why 100% is suspicious.",
     "Remind to test on new data."
    ]
   }
  },
  "7.4.7": {
   "vi": {
    "think": "Ma trận nhầm lẫn của rừng trên train.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cmr = metrics.confusion_matrix(y_train, p)\nprint(pd.DataFrame(cmr, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Không có sai số nào: 526 sạch và 526 gian lận đều đúng.",
    "trap": "Ma trận hoàn hảo trên train không chứng minh gì.",
    "read": [
     "Ma trận train: toàn bộ trên đường chéo (526 và 526), hai ô sai bằng 0."
    ],
    "remark": "Rừng không nhầm hồ sơ nào trên train (0 báo nhầm, 0 bỏ sót), nghĩa là học thuộc dữ liệu train.",
    "howRemark": [
     "Chỉ ra hai ô sai bằng 0.",
     "Liên hệ quá khớp."
    ]
   },
   "en": {
    "think": "Confusion matrix of the forest on train.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cmr = metrics.confusion_matrix(y_train, p)\nprint(pd.DataFrame(cmr, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Zero errors: all 526 clean and 526 fraud correct.",
    "trap": "A perfect matrix on train proves nothing.",
    "read": [
     "Train matrix: everything on the diagonal (526 and 526), both error cells 0."
    ],
    "remark": "The forest misclassifies nothing on train (0 false alarms, 0 misses), meaning it memorised train data.",
    "howRemark": [
     "Point out the two error cells at 0.",
     "Tie to overfitting."
    ]
   }
  },
  "7.4.8": {
   "vi": {
    "think": "TP, TN, FP, FN của rừng.",
    "steps": [
     "ravel() ma trận."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Như 7.2.8.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "TP 526, TN 526, FP 0, FN 0 trên train.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "TP, TN, FP, FN of the forest.",
    "steps": [
     "ravel() the matrix."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "As 7.2.8.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "TP 526, TN 526, FP 0, FN 0 on train.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.4.9": {
   "vi": {
    "think": "Sensitivity, specificity, precision, recall, F1 của rừng trên train.",
    "steps": [
     "Công thức như 7.2.9."
    ],
    "code": "TN, FP, FN, TP = cmr.ravel(); print(rep(TN, FP, FN, TP))",
    "lotus": "Tất cả đều 1,0 trên train.",
    "trap": "Điểm tuyệt đối là cảnh báo, không phải chiến thắng.",
    "read": [
     "Năm chỉ số đều 1,000."
    ],
    "remark": "Mọi chỉ số bằng 1,000 trên train: không phản ánh chất lượng thật, chỉ cho thấy rừng đã thuộc dữ liệu train.",
    "howRemark": [
     "Nói mọi số bằng 1 nghĩa là gì.",
     "Nhắc phải dùng validation."
    ]
   },
   "en": {
    "think": "Forest metrics on train.",
    "steps": [
     "Formulas as 7.2.9."
    ],
    "code": "TN, FP, FN, TP = cmr.ravel(); print(rep(TN, FP, FN, TP))",
    "lotus": "All are 1.0 on train.",
    "trap": "A perfect score is a warning, not a win.",
    "read": [
     "All five metrics are 1.000."
    ],
    "remark": "Every metric is 1.000 on train: not real quality, only showing the forest memorised train.",
    "howRemark": [
     "Say what all-ones means.",
     "Remind to use validation."
    ]
   }
  },
  "7.4.10": {
   "vi": {
    "think": "Kiểm tra quá khớp bằng cross-validation.",
    "steps": [
     "cross_val_score(rf2, X, y, cv=5).",
     "So điểm CV với điểm train."
    ],
    "code": "cv = cross_val_score(rf2, X_train[sel], y_train, cv=5, scoring='accuracy')\nprint('accuracy 5 lần CV:', cv.round(3), '| trung bình', cv.mean().round(3))",
    "lotus": "CV trung bình 0,921 so với 1,0 ở train: có quá khớp nhưng vẫn chấp nhận được. Lưu ý: vì đã nhân bản mẫu ở 6.1, các fold CV có thể chứa bản sao của cùng hồ sơ, nên 0,921 hơi lạc quan.",
    "trap": "Resample trước khi cross-validation làm điểm CV đẹp giả.",
    "read": [
     "Năm số accuracy của 5 lần cross-validation và trung bình."
    ],
    "remark": "CV cho 0,891–0,938, trung bình 0,921: thấp hơn 1,0 của train, cho thấy hiệu năng thật khoảng 92% (có thể cao do hồ sơ nhân bản trải qua các fold).",
    "howRemark": [
     "Nêu khoảng và trung bình.",
     "So với 1,0 ở train.",
     "Nêu giới hạn."
    ]
   },
   "en": {
    "think": "Check overfitting with cross-validation.",
    "steps": [
     "cross_val_score(rf2, X, y, cv=5).",
     "Compare the CV score with the train score."
    ],
    "code": "cv = cross_val_score(rf2, X_train[sel], y_train, cv=5, scoring='accuracy')\nprint('accuracy 5 lần CV:', cv.round(3), '| trung bình', cv.mean().round(3))",
    "lotus": "Mean CV 0.921 against 1.0 on train: some overfitting but acceptable. Note that because rows were duplicated in 6.1, CV folds may contain copies of the same claim, so 0.921 is slightly optimistic.",
    "trap": "Resampling before cross-validation inflates the CV score.",
    "read": [
     "Five accuracy numbers from 5-fold cross-validation and the mean."
    ],
    "remark": "CV gives 0.891–0.938, mean 0.921: below train's 1.0, so real performance is about 92% (possibly high because duplicated records spread across folds).",
    "howRemark": [
     "State the range and the mean.",
     "Compare with the 1.0 on train.",
     "State the limit."
    ]
   }
  },
  "7.5.1": {
   "vi": {
    "think": "Tìm tham số tốt nhất bằng grid search.",
    "steps": [
     "GridSearchCV với n_estimators, max_depth, min_samples_leaf.",
     "cv=5, scoring='accuracy'.",
     "Kết quả: max_depth 10, min_samples_leaf 1, n_estimators 100, CV 0,926."
    ],
    "code": "grid = GridSearchCV(RandomForestClassifier(random_state=42), {'n_estimators': [100, 200], 'max_depth': [5, 10, None], 'min_samples_leaf': [1, 5, 10]}, cv=5, scoring='accuracy', n_jobs=-1).fit(X_train[sel], y_train)\nprint('tham số tốt nhất:', grid.best_params_, '| CV accuracy', round(grid.best_score_, 3))",
    "lotus": "Giới hạn độ sâu cây ngăn việc học thuộc lòng.",
    "trap": "Lưới quá lớn chạy rất lâu.",
    "read": [
     "Dòng chữ: bộ tham số tốt nhất và CV accuracy 0,926."
    ],
    "remark": "Grid search chọn max_depth 10, min_samples_leaf 1, n_estimators 100 với CV accuracy 0,926, cải thiện nhẹ so với 0,921; giới hạn độ sâu để giảm học thuộc.",
    "howRemark": [
     "Nêu tham số chọn.",
     "So CV với 7.4.10.",
     "Giải thích vì sao giới hạn độ sâu."
    ]
   },
   "en": {
    "think": "Find the best parameters with grid search.",
    "steps": [
     "GridSearchCV with n_estimators, max_depth, min_samples_leaf.",
     "cv=5, scoring='accuracy'.",
     "Result: max_depth 10, min_samples_leaf 1, n_estimators 100, CV 0.926."
    ],
    "code": "grid = GridSearchCV(RandomForestClassifier(random_state=42), {'n_estimators': [100, 200], 'max_depth': [5, 10, None], 'min_samples_leaf': [1, 5, 10]}, cv=5, scoring='accuracy', n_jobs=-1).fit(X_train[sel], y_train)\nprint('tham số tốt nhất:', grid.best_params_, '| CV accuracy', round(grid.best_score_, 3))",
    "lotus": "Limiting tree depth prevents memorising.",
    "trap": "An oversized grid runs very long.",
    "read": [
     "Text: best parameters and CV accuracy 0.926."
    ],
    "remark": "Grid search picks max_depth 10, min_samples_leaf 1, n_estimators 100 with CV accuracy 0.926, slightly above 0.921; limiting depth reduces memorising.",
    "howRemark": [
     "State the chosen parameters.",
     "Compare CV with 7.4.10.",
     "Explain why limit depth."
    ]
   }
  },
  "7.5.2": {
   "vi": {
    "think": "Dựng rừng với tham số đã tìm.",
    "steps": [
     "RandomForestClassifier(**best_params_).fit."
    ],
    "code": "rf3 = RandomForestClassifier(random_state=42, **grid.best_params_).fit(X_train[sel], y_train)\nprint(rf3)",
    "lotus": "Rừng giờ có độ sâu giới hạn 10.",
    "trap": "Không có.",
    "read": [
     "Dòng chữ là đối tượng RandomForestClassifier(max_depth=10, random_state=42)."
    ],
    "remark": "Đã dựng rừng với tham số vừa tìm.",
    "howRemark": [
     "Kiểm tham số khớp 7.5.1."
    ]
   },
   "en": {
    "think": "Build the forest with the tuned parameters.",
    "steps": [
     "RandomForestClassifier(**best_params_).fit."
    ],
    "code": "rf3 = RandomForestClassifier(random_state=42, **grid.best_params_).fit(X_train[sel], y_train)\nprint(rf3)",
    "lotus": "The forest now has depth capped at 10.",
    "trap": "None.",
    "read": [
     "The text is the RandomForestClassifier(max_depth=10, random_state=42) object."
    ],
    "remark": "Built the forest with the parameters just found.",
    "howRemark": [
     "Check parameters match 7.5.1."
    ]
   }
  },
  "7.5.3": {
   "vi": {
    "think": "Dự đoán trên train với rừng đã chỉnh.",
    "steps": [
     "predict."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Như 7.4.5.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Đã dự đoán trên train với rừng đã chỉnh.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Predict on train with the tuned forest.",
    "steps": [
     "predict."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "As 7.4.5.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Predicted on train with the tuned forest.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.5.4": {
   "vi": {
    "think": "Độ chính xác của rừng đã chỉnh.",
    "steps": [
     "accuracy_score."
    ],
    "code": "p3 = rf3.predict(X_train[sel]); print('accuracy train', round(metrics.accuracy_score(y_train, p3), 4))",
    "lotus": "Còn 97,9% trên train thay vì 100%: bớt học thuộc.",
    "trap": "Không có.",
    "read": [
     "Một số: accuracy train 0,9791."
    ],
    "remark": "Train 0,9791, thấp hơn 1,0 nên rừng đã chỉnh bớt học thuộc.",
    "howRemark": [
     "So với 1,0 ở 7.4.6."
    ]
   },
   "en": {
    "think": "Accuracy of the tuned forest.",
    "steps": [
     "accuracy_score."
    ],
    "code": "p3 = rf3.predict(X_train[sel]); print('accuracy train', round(metrics.accuracy_score(y_train, p3), 4))",
    "lotus": "97.9% on train instead of 100%: less memorising.",
    "trap": "None.",
    "read": [
     "One number: train accuracy 0.9791."
    ],
    "remark": "Train 0.9791, below 1.0 so the tuned forest memorises less.",
    "howRemark": [
     "Compare with 1.0 in 7.4.6."
    ]
   }
  },
  "7.5.5": {
   "vi": {
    "think": "Ma trận nhầm lẫn của rừng đã chỉnh.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cm3 = metrics.confusion_matrix(y_train, p3)\nprint(pd.DataFrame(cm3, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Chỉ 1 vụ gian lận bị bỏ sót, 21 hồ sơ sạch bị báo nhầm trên train.",
    "trap": "Không có.",
    "read": [
     "Ma trận train: sai chỉ ở hai ô (21 báo nhầm, 1 bỏ sót)."
    ],
    "remark": "Rừng đã chỉnh sai 22 trên 1.052: báo nhầm 21 và bỏ sót 1; gần như không bỏ sót gian lận trên train.",
    "howRemark": [
     "Cộng ô sai.",
     "Nêu loại sai chiếm ưu thế."
    ]
   },
   "en": {
    "think": "Confusion matrix of the tuned forest.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cm3 = metrics.confusion_matrix(y_train, p3)\nprint(pd.DataFrame(cm3, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Only 1 fraud missed and 21 clean claims flagged on train.",
    "trap": "None.",
    "read": [
     "Train matrix: errors only in two cells (21 false alarms, 1 miss)."
    ],
    "remark": "The tuned forest is wrong on 22 of 1,052: 21 false alarms and 1 miss; almost no missed fraud on train.",
    "howRemark": [
     "Add the error cells.",
     "State the dominant error type."
    ]
   }
  },
  "7.5.6": {
   "vi": {
    "think": "TP, TN, FP, FN của rừng đã chỉnh.",
    "steps": [
     "ravel() ma trận."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Như 7.2.8.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "TP 525, TN 505, FP 21, FN 1.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "TP, TN, FP, FN of the tuned forest.",
    "steps": [
     "ravel() the matrix."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "As 7.2.8.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "TP 525, TN 505, FP 21, FN 1.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "7.5.7": {
   "vi": {
    "think": "Các chỉ số của rừng đã chỉnh trên train.",
    "steps": [
     "Công thức như 7.2.9."
    ],
    "code": "TN, FP, FN, TP = cm3.ravel(); print(rep(TN, FP, FN, TP))",
    "lotus": "Sensitivity 0,998, specificity 0,960, F1 0,979.",
    "trap": "Số trên train vẫn quá đẹp: quyết định ở validation.",
    "read": [
     "Năm chỉ số: sensitivity 0,998, specificity 0,960, precision 0,962, F1 0,979."
    ],
    "remark": "Trên train sensitivity 0,998 và F1 0,979 rất cao; chưa đáng tin cho đến khi kiểm validation.",
    "howRemark": [
     "Báo chỉ số.",
     "Nhắc train không phải bằng chứng cuối."
    ]
   },
   "en": {
    "think": "Metrics of the tuned forest on train.",
    "steps": [
     "Formulas as 7.2.9."
    ],
    "code": "TN, FP, FN, TP = cm3.ravel(); print(rep(TN, FP, FN, TP))",
    "lotus": "Sensitivity 0.998, specificity 0.960, F1 0.979.",
    "trap": "Train numbers are still too pretty: decide on validation.",
    "read": [
     "Five metrics: sensitivity 0.998, specificity 0.960, precision 0.962, F1 0.979."
    ],
    "remark": "On train sensitivity 0.998 and F1 0.979 are very high; not trustworthy until checked on validation.",
    "howRemark": [
     "Report the metrics.",
     "Remind train is not the final proof."
    ]
   }
  },
  "8.1.1": {
   "vi": {
    "think": "Chọn đúng các biến cho validation và thêm hằng số.",
    "steps": [
     "X_validation[col], add_constant(has_constant='add')."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Cùng biến như train.",
    "trap": "Thiếu hằng số báo lỗi.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Chuẩn bị dự đoán trên validation theo đúng cách đã làm ở train (cùng biến, cùng hằng số).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Select the same features for validation and add the constant.",
    "steps": [
     "X_validation[col], add_constant(has_constant='add')."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Same features as train.",
    "trap": "A missing constant raises an error.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Prepare validation predictions exactly as done on train (same variables, same constant).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "8.1.2": {
   "vi": {
    "think": "Dự đoán xác suất trên validation.",
    "steps": [
     "res.predict."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Mô hình đoán hồ sơ chưa từng thấy.",
    "trap": "Không huấn luyện lại bằng validation.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Chuẩn bị dự đoán trên validation theo đúng cách đã làm ở train (cùng biến, cùng hằng số).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Predict probabilities on validation.",
    "steps": [
     "res.predict."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "The model guesses claims it has never seen.",
    "trap": "Do not retrain on validation.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Prepare validation predictions exactly as done on train (same variables, same constant).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "8.1.3": {
   "vi": {
    "think": "Tạo bảng thực tế và dự đoán cho validation.",
    "steps": [
     "Giống 7.2.5."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Mỗi hồ sơ validation có xác suất gian lận.",
    "trap": "Hai mảng khác độ dài báo lỗi.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "Chuẩn bị dự đoán trên validation theo đúng cách đã làm ở train (cùng biến, cùng hằng số).",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "Build the actual-vs-predicted table for validation.",
    "steps": [
     "As 7.2.5."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Each validation claim has a fraud probability.",
    "trap": "Arrays of different length raise an error.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "Prepare validation predictions exactly as done on train (same variables, same constant).",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "8.1.4": {
   "vi": {
    "think": "Dự đoán cuối theo ngưỡng đã chọn trên train.",
    "steps": [
     "Dùng cùng cutoff 0,5."
    ],
    "code": "Xv_sm = sm.add_constant(X_validation[col].astype(float), has_constant='add')\nva = pd.DataFrame({'Fraud': y_validation.values, 'Prob': res.predict(Xv_sm).values})\nva['final'] = (va['Prob'] > cutoff).astype(int)\nprint(va.head(6).round(3).to_string())",
    "lotus": "Dùng đúng ngưỡng chọn ở train.",
    "trap": "Chọn lại ngưỡng trên validation là rò rỉ.",
    "read": [
     "Cột final là dự đoán cuối theo ngưỡng chọn từ train."
    ],
    "remark": "Áp ngưỡng 0,5 của train lên validation; hồ sơ có xác suất 0,964 được đoán gian lận đúng như thực tế.",
    "howRemark": [
     "Áp ngưỡng của train, không chọn lại."
    ]
   },
   "en": {
    "think": "Final prediction using the cutoff chosen on train.",
    "steps": [
     "Use the same cutoff 0.5."
    ],
    "code": "Xv_sm = sm.add_constant(X_validation[col].astype(float), has_constant='add')\nva = pd.DataFrame({'Fraud': y_validation.values, 'Prob': res.predict(Xv_sm).values})\nva['final'] = (va['Prob'] > cutoff).astype(int)\nprint(va.head(6).round(3).to_string())",
    "lotus": "Use exactly the cutoff chosen on train.",
    "trap": "Re-choosing the cutoff on validation leaks.",
    "read": [
     "final is the final prediction at the threshold chosen on train."
    ],
    "remark": "Applied train's 0.5 threshold to validation; the record with probability 0.964 is correctly predicted as fraud.",
    "howRemark": [
     "Apply train's threshold, do not re-pick."
    ]
   }
  },
  "8.1.5": {
   "vi": {
    "think": "Độ chính xác của hồi quy logistic trên validation.",
    "steps": [
     "accuracy_score."
    ],
    "code": "print('accuracy validation', round(metrics.accuracy_score(va['Fraud'], va['final']), 4), '| train', round(metrics.accuracy_score(tr['Fraud'], tr['final']), 4))",
    "lotus": "84,3% trên validation so với 87,3% trên train: giảm một chút, chấp nhận được.",
    "trap": "Chênh nhiều là quá khớp.",
    "read": [
     "Hai số: accuracy validation 0,8433 và train 0,8726."
    ],
    "remark": "Độ chính xác validation 0,8433 thấp hơn train 0,8726 khoảng 3 điểm: chênh nhỏ nên hồi quy logistic không quá khớp.",
    "howRemark": [
     "So hai số.",
     "Nói quá khớp hay không."
    ]
   },
   "en": {
    "think": "Logistic regression accuracy on validation.",
    "steps": [
     "accuracy_score."
    ],
    "code": "print('accuracy validation', round(metrics.accuracy_score(va['Fraud'], va['final']), 4), '| train', round(metrics.accuracy_score(tr['Fraud'], tr['final']), 4))",
    "lotus": "84.3% on validation versus 87.3% on train: a small drop, acceptable.",
    "trap": "A big gap means overfitting.",
    "read": [
     "Two numbers: validation accuracy 0.8433 and train 0.8726."
    ],
    "remark": "Validation accuracy 0.8433 is about 3 points below train's 0.8726: a small gap so logistic regression is not overfit.",
    "howRemark": [
     "Compare the two numbers.",
     "Say overfit or not."
    ]
   }
  },
  "8.1.6": {
   "vi": {
    "think": "Ma trận nhầm lẫn trên validation.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cmv = metrics.confusion_matrix(va['Fraud'], va['final'])\nprint(pd.DataFrame(cmv, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Trên 300 hồ sơ chưa thấy: bắt 62 vụ gian lận, bỏ sót 12, báo nhầm 35 hồ sơ sạch.",
    "trap": "Không có.",
    "read": [
     "Ma trận validation: đoán đúng 191 sạch và 62 gian lận; sai 35 và 12."
    ],
    "remark": "Bắt được 62 trong 74 hồ sơ gian lận (bỏ sót 12) nhưng báo nhầm 35 hồ sơ sạch; ít bỏ sót nhưng nhiều báo nhầm.",
    "howRemark": [
     "Cộng đúng và sai.",
     "Nêu loại sai nhiều hơn.",
     "Nói hệ quả."
    ]
   },
   "en": {
    "think": "Confusion matrix on validation.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cmv = metrics.confusion_matrix(va['Fraud'], va['final'])\nprint(pd.DataFrame(cmv, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "On 300 unseen claims: catches 62 frauds, misses 12, falsely flags 35 clean ones.",
    "trap": "None.",
    "read": [
     "Validation matrix: 191 clean and 62 fraud right; 35 and 12 wrong."
    ],
    "remark": "Caught 62 of 74 fraud records (12 missed) but falsely flagged 35 clean ones; few misses but many false alarms.",
    "howRemark": [
     "Add right and wrong.",
     "State the more frequent error.",
     "State the consequence."
    ]
   }
  },
  "8.1.7": {
   "vi": {
    "think": "TP, TN, FP, FN trên validation.",
    "steps": [
     "ravel() ma trận."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Như 7.2.8.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "TP 62, TN 191, FP 35, FN 12 trên validation.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "TP, TN, FP, FN on validation.",
    "steps": [
     "ravel() the matrix."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "As 7.2.8.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "TP 62, TN 191, FP 35, FN 12 on validation.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "8.1.8": {
   "vi": {
    "think": "Sensitivity, specificity, precision, recall, F1 trên validation.",
    "steps": [
     "Công thức như 7.2.9."
    ],
    "code": "TN, FP, FN, TP = cmv.ravel(); print(rep(TN, FP, FN, TP))",
    "lotus": "Sensitivity 0,838, specificity 0,845, precision 0,639, F1 0,725. Precision chỉ 64%: cứ ba hồ sơ bị báo thì một là báo nhầm.",
    "trap": "So với train, precision tụt mạnh vì validation giữ tỷ lệ gian lận thật (ít hơn).",
    "read": [
     "Năm chỉ số validation: sensitivity 0,838, specificity 0,845, precision 0,639, F1 0,725."
    ],
    "remark": "Bắt được 83,8% gian lận nhưng precision chỉ 0,639: trong số hồ sơ bị báo gian lận chỉ khoảng 64% thật sự gian lận, vì gian lận chỉ chiếm 24,7%. F1 0,725.",
    "howRemark": [
     "Báo từng chỉ số.",
     "Giải thích precision thấp.",
     "Nói đánh đổi cho việc điều tra."
    ]
   },
   "en": {
    "think": "Metrics on validation.",
    "steps": [
     "Formulas as 7.2.9."
    ],
    "code": "TN, FP, FN, TP = cmv.ravel(); print(rep(TN, FP, FN, TP))",
    "lotus": "Sensitivity 0.838, specificity 0.845, precision 0.639, F1 0.725. Precision is only 64%: of three flagged claims one is a false alarm.",
    "trap": "Precision drops against train because validation keeps the real (lower) fraud rate.",
    "read": [
     "Five validation metrics: sensitivity 0.838, specificity 0.845, precision 0.639, F1 0.725."
    ],
    "remark": "Catches 83.8% of fraud but precision is only 0.639: of records flagged only about 64% are truly fraud, since fraud is just 24.7%. F1 0.725.",
    "howRemark": [
     "Report each metric.",
     "Explain the low precision.",
     "State the trade-off for investigation."
    ]
   }
  },
  "8.2.1": {
   "vi": {
    "think": "Chọn biến quan trọng và dự đoán trên validation bằng random forest.",
    "steps": [
     "rf3.predict(X_validation[sel])."
    ],
    "code": "pv = rf3.predict(X_validation[sel]); print('dự đoán', len(pv), 'hồ sơ validation; dự đoán gian lận:', int(pv.sum()))",
    "lotus": "Rừng báo gian lận 92 trên 300 hồ sơ.",
    "trap": "Dùng đúng danh sách biến sel của train.",
    "read": [
     "Dòng chữ: dự đoán 300 hồ sơ validation, 92 hồ sơ bị đoán gian lận."
    ],
    "remark": "Rừng đánh dấu 92 hồ sơ gian lận trong 300 (thực tế 74), tức báo nhiều hơn thực tế.",
    "howRemark": [
     "So số báo với số thật (74)."
    ]
   },
   "en": {
    "think": "Select the important features and predict on validation with the random forest.",
    "steps": [
     "rf3.predict(X_validation[sel])."
    ],
    "code": "pv = rf3.predict(X_validation[sel]); print('dự đoán', len(pv), 'hồ sơ validation; dự đoán gian lận:', int(pv.sum()))",
    "lotus": "The forest flags 92 of 300 claims as fraud.",
    "trap": "Use exactly the sel list from train.",
    "read": [
     "Text: predicted 300 validation records, 92 flagged as fraud."
    ],
    "remark": "The forest flags 92 of 300 as fraud (actual 74), i.e. more than reality.",
    "howRemark": [
     "Compare flagged with actual (74)."
    ]
   }
  },
  "8.2.2": {
   "vi": {
    "think": "Độ chính xác của rừng trên validation.",
    "steps": [
     "accuracy_score."
    ],
    "code": "print('accuracy RF validation', round(metrics.accuracy_score(y_validation, pv), 4))",
    "lotus": "82,0% trên validation so với 97,9% trên train: khoảng cách lớn, rừng quá khớp hơn hồi quy logistic.",
    "trap": "Chọn rừng chỉ vì điểm train cao.",
    "read": [
     "Một số: accuracy rừng validation 0,82."
    ],
    "remark": "Rừng đạt 0,82 trên validation, thấp hơn 0,9791 ở train nhiều nên còn quá khớp.",
    "howRemark": [
     "So với train.",
     "Nói quá khớp hay không."
    ]
   },
   "en": {
    "think": "Random forest accuracy on validation.",
    "steps": [
     "accuracy_score."
    ],
    "code": "print('accuracy RF validation', round(metrics.accuracy_score(y_validation, pv), 4))",
    "lotus": "82.0% on validation versus 97.9% on train: a large gap, the forest overfits more than logistic regression.",
    "trap": "Choosing the forest just because of a high train score.",
    "read": [
     "One number: forest validation accuracy 0.82."
    ],
    "remark": "The forest scores 0.82 on validation, far below 0.9791 on train, so still overfit.",
    "howRemark": [
     "Compare with train.",
     "Say overfit or not."
    ]
   }
  },
  "8.2.3": {
   "vi": {
    "think": "Ma trận nhầm lẫn của rừng trên validation.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cmrf = metrics.confusion_matrix(y_validation, pv)\nprint(pd.DataFrame(cmrf, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Bắt 56 vụ gian lận, bỏ sót 18, báo nhầm 36.",
    "trap": "Không có.",
    "read": [
     "Ma trận validation của rừng: đúng 190 sạch và 56 gian lận; sai 36 và 18."
    ],
    "remark": "Rừng bắt được 56 trên 74 gian lận (bỏ sót 18) và báo nhầm 36; kém hồi quy ở cả hai loại sai.",
    "howRemark": [
     "So từng ô với 8.1.6.",
     "Nêu mô hình nào ít sai hơn."
    ]
   },
   "en": {
    "think": "Confusion matrix of the forest on validation.",
    "steps": [
     "confusion_matrix."
    ],
    "code": "cmrf = metrics.confusion_matrix(y_validation, pv)\nprint(pd.DataFrame(cmrf, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
    "lotus": "Catches 56 frauds, misses 18, falsely flags 36.",
    "trap": "None.",
    "read": [
     "Forest validation matrix: 190 clean and 56 fraud right; 36 and 18 wrong."
    ],
    "remark": "The forest catches 56 of 74 fraud (18 missed) and falsely flags 36; worse than regression on both error types.",
    "howRemark": [
     "Compare each cell with 8.1.6.",
     "State which model errs less."
    ]
   }
  },
  "8.2.4": {
   "vi": {
    "think": "TP, TN, FP, FN của rừng trên validation.",
    "steps": [
     "ravel() ma trận."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "Như 7.2.8.",
    "trap": "Không có.",
    "read": [
     "Ô này không in kết quả; việc cần xem là chạy không báo lỗi."
    ],
    "remark": "TP 56, TN 190, FP 36, FN 18 trên validation.",
    "howRemark": [
     "Nói bước này chuẩn bị gì cho bước sau.",
     "Ghi tên biến/đối tượng mới được tạo."
    ]
   },
   "en": {
    "think": "TP, TN, FP, FN of the forest on validation.",
    "steps": [
     "ravel() the matrix."
    ],
    "code": "# Làm theo ô starter, xem kết quả ở trên",
    "lotus": "As 7.2.8.",
    "trap": "None.",
    "read": [
     "This cell prints nothing; just check it ran without error."
    ],
    "remark": "TP 56, TN 190, FP 36, FN 18 on validation.",
    "howRemark": [
     "Say what this step prepares for the next.",
     "Note the new variable/object created."
    ]
   }
  },
  "8.2.5": {
   "vi": {
    "think": "Các chỉ số của rừng trên validation và so sánh hai mô hình.",
    "steps": [
     "Công thức như 7.2.9 hoặc classification_report.",
     "So với hồi quy logistic."
    ],
    "code": "TN, FP, FN, TP = cmrf.ravel(); print(rep(TN, FP, FN, TP))\nprint(classification_report(y_validation, pv, target_names=['sạch', 'gian lận']))",
    "lotus": "Rừng: sensitivity 0,757, precision 0,609, F1 0,675. Hồi quy logistic: 0,838, 0,639, 0,725. Với dữ liệu nhỏ này hồi quy logistic bắt được nhiều gian lận hơn và ổn định hơn: chọn nó và viết lý do vào phần kết luận.",
    "trap": "So sánh hai mô hình chỉ bằng train.",
    "read": [
     "Năm chỉ số của rừng: sensitivity 0,757, specificity 0,841, precision 0,609, F1 0,675.",
     "Bảng cuối là báo cáo phân loại cho cả hai lớp."
    ],
    "remark": "So hai mô hình trên validation: hồi quy logistic có accuracy 0,843, sensitivity 0,838, F1 0,725; rừng 0,82, 0,757 và 0,675. Hồi quy tốt hơn ở mọi thước đo nên chọn hồi quy logistic.",
    "howRemark": [
     "Đặt hai mô hình cạnh nhau.",
     "Chọn mô hình theo thước đo ưu tiên (bắt gian lận).",
     "Nêu lý do (rừng quá khớp)."
    ]
   },
   "en": {
    "think": "Forest metrics on validation and comparison of the two models.",
    "steps": [
     "Formulas as 7.2.9 or classification_report.",
     "Compare with logistic regression."
    ],
    "code": "TN, FP, FN, TP = cmrf.ravel(); print(rep(TN, FP, FN, TP))\nprint(classification_report(y_validation, pv, target_names=['sạch', 'gian lận']))",
    "lotus": "Forest: sensitivity 0.757, precision 0.609, F1 0.675. Logistic: 0.838, 0.639, 0.725. On this small dataset logistic regression catches more fraud and is more stable: choose it and write the reason in the conclusion.",
    "trap": "Comparing the two models on train only.",
    "read": [
     "Five forest metrics: sensitivity 0.757, specificity 0.841, precision 0.609, F1 0.675.",
     "The last table is the classification report for both classes."
    ],
    "remark": "Comparing the two on validation: logistic regression has accuracy 0.843, sensitivity 0.838, F1 0.725; the forest 0.82, 0.757 and 0.675. Regression wins on every measure so choose logistic regression.",
    "howRemark": [
     "Put the two models side by side.",
     "Choose by the priority metric (catching fraud).",
     "State the reason (forest overfits)."
    ]
   }
  }
 },
 "results": {
  "1.1": {
   "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\ndf = pd.read_csv('/tmp/asg/all/2/Starter Notebook + Data/insurance_claims.csv')\nprint(df.shape)\nprint(df.iloc[:3, :12].to_string())",
   "text": "(1000, 40)\n   months_as_customer  age  policy_number policy_bind_date policy_state policy_csl  policy_deductable  policy_annual_premium  umbrella_limit  insured_zip insured_sex insured_education_level\n0                 328   48         521585       2014-10-17           OH    250/500               1000                1406.91               0       466132        MALE                      MD\n1                 228   42         342868       2006-06-27           IN    250/500               2000                1197.22         5000000       468176        MALE                      MD\n2                 134   29         687698       2000-09-06           OH    100/300               2000                1413.14         5000000       430632      FEMALE                     PhD",
   "imgs": []
  },
  "2.1.1": {
   "code": "print(df.isnull().sum()[df.isnull().sum() > 0])",
   "text": "authorities_contacted      91\n_c39                     1000\ndtype: int64",
   "imgs": []
  },
  "2.1.2": {
   "code": "# authorities_contacted trống = chưa liên hệ cơ quan nào\ndf['authorities_contacted'] = df['authorities_contacted'].fillna('None')\nprint(df['authorities_contacted'].value_counts())",
   "text": "authorities_contacted\nPolice       292\nFire         223\nOther        198\nAmbulance    196\nNone          91\nName: count, dtype: int64",
   "imgs": []
  },
  "2.2.1": {
   "code": "for c in df.select_dtypes(include=['object', 'str']).columns:\n    if df[c].nunique() < 12: print(c, df[c].value_counts().to_dict())\nprint((df == '?').sum()[lambda s: s > 0])",
   "text": "policy_state {'OH': 352, 'IL': 338, 'IN': 310}\npolicy_csl {'250/500': 351, '100/300': 349, '500/1000': 300}\ninsured_sex {'FEMALE': 537, 'MALE': 463}\ninsured_education_level {'JD': 161, 'High School': 160, 'Associate': 145, 'MD': 144, 'Masters': 143, 'PhD': 125, 'College': 122}\ninsured_relationship {'own-child': 183, 'other-relative': 177, 'not-in-family': 174, 'husband': 170, 'wife': 155, 'unmarried': 141}\nincident_type {'Multi-vehicle Collision': 419, 'Single Vehicle Collision': 403, 'Vehicle Theft': 94, 'Parked Car': 84}\ncollision_type {'Rear Collision': 292, 'Side Collision': 276, 'Front Collision': 254, '?': 178}\nincident_severity {'Minor Damage': 354, 'Total Loss': 280, 'Major Damage': 276, 'Trivial Damage': 90}\nauthorities_contacted {'Police': 292, 'Fire': 223, 'Other': 198, 'Ambulance': 196, 'None': 91}\nincident_state {'NY': 262, 'SC': 248, 'WV': 217, 'VA': 110, 'NC': 110, 'PA': 30, 'OH': 23}\nincident_city {'Springfield': 157, 'Arlington': 152, 'Columbus': 149, 'Northbend': 145, 'Hillsdale': 141, 'Riverwood': 134, 'Northbrook': 122}\nproperty_damage {'?': 360, 'NO': 338, 'YES': 302}\npolice_report_available {'?': 343, 'NO': 343, 'YES': 314}\nfraud_reported {'N': 753, 'Y': 247}\ncollision_type             178\nproperty_damage            360\npolice_report_available    343\ndtype: int64",
   "imgs": []
  },
  "2.2.2": {
   "code": "empty = [c for c in df.columns if df[c].isnull().all()]\nprint('cột rỗng hoàn toàn:', empty)\ndf = df.drop(columns=empty)",
   "text": "cột rỗng hoàn toàn: ['_c39']",
   "imgs": []
  },
  "2.2.3": {
   "code": "num = df.select_dtypes(include='number')\nprint((num < 0).sum()[lambda s: s > 0])\nprint(df[['umbrella_limit']].query('umbrella_limit < 0'))\ndf = df[df['umbrella_limit'] >= 0]\nprint(len(df))",
   "text": "umbrella_limit      1\ncapital-loss      525\ndtype: int64\n     umbrella_limit\n290        -1000000\n999",
   "imgs": []
  },
  "2.2.4": {
   "code": "ratio = (df.nunique() / len(df)).sort_values(ascending=False)\nprint(ratio.head(6).round(3))\nids = ['policy_number', 'incident_location', 'insured_zip']\ndf = df.drop(columns=ids)\nprint(df.shape)",
   "text": "policy_number            1.000\nincident_location        1.000\ninsured_zip              0.995\npolicy_annual_premium    0.991\npolicy_bind_date         0.951\ntotal_claim_amount       0.763\ndtype: float64\n(999, 36)",
   "imgs": []
  },
  "2.3": {
   "code": "df['policy_bind_date'] = pd.to_datetime(df['policy_bind_date'])\ndf['incident_date'] = pd.to_datetime(df['incident_date'])\nprint(df[['policy_bind_date', 'incident_date']].dtypes)",
   "text": "policy_bind_date    datetime64[us]\nincident_date       datetime64[us]\ndtype: object",
   "imgs": []
  },
  "3.2": {
   "code": "y = df['fraud_reported']\nX = df.drop(columns=['fraud_reported'])\nprint(X.shape, y.shape)",
   "text": "(999, 35) (999,)",
   "imgs": []
  },
  "3.3": {
   "code": "from sklearn.model_selection import train_test_split\nX_train, X_validation, y_train, y_validation = train_test_split(X, y, train_size=0.7, stratify=y, random_state=42)\nfor t in (X_train, X_validation, y_train, y_validation): t.reset_index(drop=True, inplace=True)\nprint(len(X_train), len(X_validation), y_train.value_counts(normalize=True).round(3).to_dict(), y_validation.value_counts(normalize=True).round(3).to_dict())",
   "text": "699 300 {'N': 0.753, 'Y': 0.247} {'N': 0.753, 'Y': 0.247}",
   "imgs": []
  },
  "4.1.1": {
   "code": "num_cols = X_train.select_dtypes(include='number').columns\nprint(list(num_cols))",
   "text": "['months_as_customer', 'age', 'policy_deductable', 'policy_annual_premium', 'umbrella_limit', 'capital-gains', 'capital-loss', 'incident_hour_of_the_day', 'number_of_vehicles_involved', 'bodily_injuries', 'witnesses', 'total_claim_amount', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_year']",
   "imgs": []
  },
  "4.1.2": {
   "code": "X_train[num_cols].hist(bins=25, figsize=(15, 11)); plt.tight_layout()",
   "text": "",
   "imgs": [
    "/assign/fraud-claim/4_1_2-1.png"
   ]
  },
  "4.2": {
   "code": "plt.figure(figsize=(11, 8)); sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0, annot_kws={'size': 7})\nc = X_train[num_cols].corr().abs().where(np.triu(np.ones((len(num_cols),)*2), 1).astype(bool)).stack().sort_values(ascending=False)\nprint(c.head(6).round(2))",
   "text": "total_claim_amount  vehicle_claim     0.98\nmonths_as_customer  age               0.92\ntotal_claim_amount  injury_claim      0.82\n                    property_claim    0.82\ninjury_claim        vehicle_claim     0.74\nproperty_claim      vehicle_claim     0.74\ndtype: float64",
   "imgs": [
    "/assign/fraud-claim/4_2-1.png"
   ]
  },
  "4.3": {
   "code": "print(y_train.value_counts(normalize=True).round(3))\ny_train.value_counts().plot(kind='bar', color=['#2f6f5e', '#b5543c'], title='Cân bằng lớp (train)')",
   "text": "fraud_reported\nN    0.753\nY    0.247\nName: proportion, dtype: float64",
   "imgs": [
    "/assign/fraud-claim/4_3-1.png"
   ]
  },
  "4.4.1": {
   "code": "cat_cols = X_train.select_dtypes(include=['object', 'str']).columns\nt = X_train.assign(fraud=(y_train == 'Y').astype(int))\ndef likelihood(col):\n    return t.groupby(col)['fraud'].mean().sort_values(ascending=False)\noverall = t['fraud'].mean()\nrows = []\nfor c in cat_cols:\n    s = likelihood(c)\n    rows.append((c, s.index[0], round(s.iloc[0], 3), round(s.iloc[-1] - 0, 3), round(s.iloc[0] - s.iloc[-1], 3)))\ntab = pd.DataFrame(rows, columns=['cột', 'nhóm có tỷ lệ gian lận cao nhất', 'tỷ lệ cao nhất', 'tỷ lệ thấp nhất', 'khoảng cách']).sort_values('khoảng cách', ascending=False)\nprint('tỷ lệ gian lận chung:', round(overall, 3)); print(tab.head(8).to_string(index=False))\nfig, ax = plt.subplots(1, 3, figsize=(16, 4))\nfor a, c in zip(ax, ['incident_severity', 'insured_hobbies', 'collision_type']):\n    likelihood(c).plot(kind='bar', ax=a, title=f'Tỷ lệ gian lận theo {c}'); a.axhline(overall, color='r', ls='--')\nplt.tight_layout()",
   "text": "tỷ lệ gian lận chung: 0.247\n                  cột nhóm có tỷ lệ gian lận cao nhất  tỷ lệ cao nhất  tỷ lệ thấp nhất  khoảng cách\n      insured_hobbies                           chess           0.906            0.075        0.831\n    incident_severity                    Major Damage           0.609            0.066        0.544\n           auto_model                           Civic           0.500            0.000        0.500\n       incident_state                              OH           0.421            0.151        0.270\nauthorities_contacted                       Ambulance           0.316            0.088        0.228\n       collision_type                  Rear Collision           0.297            0.087        0.210\n        incident_type        Single Vehicle Collision           0.287            0.082        0.205\n   insured_occupation                transport-moving           0.345            0.143        0.202",
   "imgs": [
    "/assign/fraud-claim/4_4_1-1.png"
   ]
  },
  "4.4.2": {
   "code": "tn = X_train.assign(fraud=y_train)\nfig, ax = plt.subplots(1, 4, figsize=(17, 4))\nfor a, c in zip(ax, ['total_claim_amount', 'vehicle_claim', 'months_as_customer', 'policy_annual_premium']):\n    sns.boxplot(data=tn, x='fraud', y=c, ax=a)\nplt.tight_layout()\nprint(tn.groupby('fraud')[['total_claim_amount', 'vehicle_claim', 'injury_claim', 'property_claim']].mean().round(0).to_string())",
   "text": "       total_claim_amount  vehicle_claim  injury_claim  property_claim\nfraud                                                                 \nN                 50293.0        36109.0        7203.0          6981.0\nY                 60921.0        43812.0        8439.0          8670.0",
   "imgs": [
    "/assign/fraud-claim/4_4_2-1.png"
   ]
  },
  "5.1.2": {
   "code": "num_v = X_validation.select_dtypes(include='number').columns\nX_validation[num_v].hist(bins=25, figsize=(15, 11)); plt.tight_layout()",
   "text": "",
   "imgs": [
    "/assign/fraud-claim/5_1_2-1.png"
   ]
  },
  "5.3": {
   "code": "print(y_validation.value_counts(normalize=True).round(3))",
   "text": "fraud_reported\nN    0.753\nY    0.247\nName: proportion, dtype: float64",
   "imgs": []
  },
  "6.1": {
   "code": "from imblearn.over_sampling import RandomOverSampler\nros = RandomOverSampler(random_state=42)\nX_train, y_train = ros.fit_resample(X_train, y_train)\nprint(y_train.value_counts(), len(X_train))",
   "text": "fraud_reported\nN    526\nY    526\nName: count, dtype: int64 1052",
   "imgs": []
  },
  "6.2": {
   "code": "for d in (X_train, X_validation):\n    d['policy_age_days'] = (d['incident_date'] - d['policy_bind_date']).dt.days\n    d['incident_month'] = d['incident_date'].dt.month\n    d['incident_dow'] = d['incident_date'].dt.dayofweek\n    d['claim_per_vehicle'] = d['total_claim_amount'] / d['number_of_vehicles_involved']\nprint(X_train[['policy_age_days', 'incident_month', 'incident_dow', 'claim_per_vehicle']].describe().round(1).to_string())",
   "text": "       policy_age_days  incident_month  incident_dow  claim_per_vehicle\ncount           1052.0          1052.0        1052.0             1052.0\nmean            4654.5             1.5           3.0            37039.9\nstd             2679.4             0.5           2.0            26688.0\nmin              -20.0             1.0           0.0              100.0\n25%             2434.0             1.0           1.0            17102.5\n50%             4556.0             1.0           3.0            26200.0\n75%             7016.0             2.0           5.0            58225.0\nmax             9172.0             3.0           6.0           112320.0",
   "imgs": []
  },
  "6.3": {
   "code": "drop = ['policy_bind_date', 'incident_date', 'injury_claim', 'property_claim', 'vehicle_claim', 'auto_model', 'age']\nfor d in (X_train, X_validation): d.drop(columns=drop, inplace=True)\nprint(X_train.shape)",
   "text": "(1052, 32)",
   "imgs": []
  },
  "6.4": {
   "code": "# gộp nhóm hiếm: bang xảy ra sự cố và sở thích\nrare_states = X_train['incident_state'].value_counts()[lambda s: s < 60].index\nhobby_top = ['chess', 'cross-fit']\nfor d in (X_train, X_validation):\n    d['incident_state'] = d['incident_state'].replace({s: 'Other' for s in rare_states})\n    d['insured_hobbies'] = d['insured_hobbies'].where(d['insured_hobbies'].isin(hobby_top), 'other')\nprint(X_train['incident_state'].value_counts().to_dict()); print(X_train['insured_hobbies'].value_counts().to_dict())",
   "text": "{'SC': 283, 'NY': 257, 'WV': 194, 'NC': 135, 'VA': 109, 'Other': 74}\n{'other': 902, 'chess': 101, 'cross-fit': 49}",
   "imgs": []
  },
  "6.5.1": {
   "code": "cat_cols = X_train.select_dtypes(include=['object', 'str']).columns\nprint(list(cat_cols))",
   "text": "['policy_state', 'policy_csl', 'insured_sex', 'insured_education_level', 'insured_occupation', 'insured_hobbies', 'insured_relationship', 'incident_type', 'collision_type', 'incident_severity', 'authorities_contacted', 'incident_state', 'incident_city', 'property_damage', 'police_report_available', 'auto_make']",
   "imgs": []
  },
  "6.5.2": {
   "code": "dt = pd.get_dummies(X_train[cat_cols], drop_first=True, dtype=int)\nX_train = pd.concat([X_train.drop(columns=cat_cols), dt], axis=1)\nprint(X_train.shape)",
   "text": "(1052, 88)",
   "imgs": []
  },
  "6.5.3": {
   "code": "dv = pd.get_dummies(X_validation[cat_cols], drop_first=True, dtype=int)\nX_validation = pd.concat([X_validation.drop(columns=cat_cols), dv], axis=1).reindex(columns=X_train.columns, fill_value=0)\nprint(X_validation.shape)",
   "text": "(300, 88)",
   "imgs": []
  },
  "6.5.4": {
   "code": "y_train = (y_train == 'Y').astype(int); y_validation = (y_validation == 'Y').astype(int)\nprint(y_train.mean().round(3), y_validation.mean().round(3))",
   "text": "0.5 0.247",
   "imgs": []
  },
  "6.6": {
   "code": "from sklearn.preprocessing import StandardScaler\nsc_cols = [c for c in X_train.columns if X_train[c].nunique() > 2]\nscaler = StandardScaler()\nX_train[sc_cols] = scaler.fit_transform(X_train[sc_cols]); X_validation[sc_cols] = scaler.transform(X_validation[sc_cols])\nprint(len(sc_cols), 'cột số được chuẩn hóa')",
   "text": "16 cột số được chuẩn hóa",
   "imgs": []
  },
  "7.1.2": {
   "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.feature_selection import RFECV\nrfecv = RFECV(LogisticRegression(max_iter=2000), step=1, cv=5, scoring='accuracy', min_features_to_select=5).fit(X_train, y_train)\nprint('số biến tối ưu:', rfecv.n_features_)\nplt.plot(range(5, 5 + len(rfecv.cv_results_['mean_test_score'])), rfecv.cv_results_['mean_test_score']); plt.xlabel('số biến'); plt.ylabel('accuracy CV')\nrank = pd.DataFrame({'feature': X_train.columns, 'rank': rfecv.ranking_}).sort_values('rank')\nprint(rank.head(12).to_string(index=False))",
   "text": "số biến tối ưu: 9\n                             feature  rank\ninsured_occupation_handlers-cleaners     1\n               insured_hobbies_other     1\n      incident_severity_Minor Damage     1\n    incident_severity_Trivial Damage     1\n        incident_severity_Total Loss     1\n  insured_occupation_priv-house-serv     1\n           insured_hobbies_cross-fit     1\n                      auto_make_Audi     1\n                     auto_make_Honda     1\n      insured_relationship_own-child     2\n    insured_occupation_other-service     3\n       collision_type_Side Collision     4",
   "imgs": [
    "/assign/fraud-claim/7_1_2-1.png"
   ]
  },
  "7.2.2": {
   "code": "import statsmodels.api as sm\nX_train_sm = sm.add_constant(X_train[col].astype(float))\nres = sm.GLM(y_train, X_train_sm, family=sm.families.Binomial()).fit()\nprint(res.summary().tables[1])",
   "text": "========================================================================================================\n                                           coef    std err          z      P>|z|      [0.025      0.975]\n--------------------------------------------------------------------------------------------------------\nconst                                    7.1240      0.633     11.251      0.000       5.883       8.365\ninsured_occupation_handlers-cleaners    -1.5323      0.455     -3.367      0.001      -2.424      -0.640\ninsured_occupation_priv-house-serv      -0.8680      0.431     -2.016      0.044      -1.712      -0.024\ninsured_hobbies_cross-fit               -2.1123      0.751     -2.812      0.005      -3.584      -0.640\ninsured_hobbies_other                   -5.6353      0.616     -9.154      0.000      -6.842      -4.429\nincident_severity_Minor Damage          -3.8430      0.253    -15.196      0.000      -4.339      -3.347\nincident_severity_Total Loss            -3.2218      0.239    -13.472      0.000      -3.691      -2.753\nincident_severity_Trivial Damage        -4.1867      0.514     -8.152      0.000      -5.193      -3.180\nauto_make_Audi                           0.9110      0.328      2.774      0.006       0.267       1.555\nauto_make_Honda                          0.9615      0.438      2.195      0.028       0.103       1.820\n========================================================================================================",
   "imgs": []
  },
  "7.2.3": {
   "code": "from statsmodels.stats.outliers_influence import variance_inflation_factor\nXv = X_train[col].astype(float)\nvif = pd.DataFrame({'feature': col, 'VIF': [variance_inflation_factor(Xv.values, i) for i in range(Xv.shape[1])]}).sort_values('VIF', ascending=False)\nprint(vif.head(8).round(2).to_string(index=False))",
   "text": "                           feature  VIF\n             insured_hobbies_other 1.48\n         insured_hobbies_cross-fit 1.43\n      incident_severity_Total Loss 1.26\n    incident_severity_Minor Damage 1.24\n  incident_severity_Trivial Damage 1.09\n                    auto_make_Audi 1.03\ninsured_occupation_priv-house-serv 1.02\n                   auto_make_Honda 1.01",
   "imgs": []
  },
  "7.2.5": {
   "code": "from sklearn import metrics\ntr = pd.DataFrame({'Fraud': y_train.values, 'Prob': res.predict(X_train_sm).values})\ntr['Predicted'] = (tr['Prob'] > 0.5).astype(int)\nprint(tr.head(6).round(3).to_string())",
   "text": "   Fraud   Prob  Predicted\n0      0  0.816          1\n1      0  0.150          0\n2      0  0.063          0\n3      0  0.087          0\n4      0  0.150          0\n5      0  0.816          1",
   "imgs": []
  },
  "7.2.6": {
   "code": "print('accuracy', round(metrics.accuracy_score(tr['Fraud'], tr['Predicted']), 4))",
   "text": "accuracy 0.8726",
   "imgs": []
  },
  "7.2.7": {
   "code": "cm = metrics.confusion_matrix(tr['Fraud'], tr['Predicted'])\nprint(pd.DataFrame(cm, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
   "text": "                đoán: sạch  đoán: gian lận\nthực: sạch             453              73\nthực: gian lận          61             465",
   "imgs": []
  },
  "7.2.9": {
   "code": "TN, FP, FN, TP = cm.ravel()\ndef rep(TN, FP, FN, TP):\n    se = TP / (TP + FN); sp = TN / (TN + FP); pr = TP / (TP + FP); f1 = 2 * pr * se / (pr + se)\n    return f'sensitivity(recall) {se:.3f} | specificity {sp:.3f} | precision {pr:.3f} | F1 {f1:.3f}'\nprint(rep(TN, FP, FN, TP))",
   "text": "sensitivity(recall) 0.884 | specificity 0.861 | precision 0.864 | F1 0.874",
   "imgs": []
  },
  "7.3.1": {
   "code": "fpr, tpr, _ = metrics.roc_curve(tr['Fraud'], tr['Prob'], drop_intermediate=False)\nauc = metrics.roc_auc_score(tr['Fraud'], tr['Prob'])\nplt.plot(fpr, tpr, label=f'AUC = {auc:.3f}'); plt.plot([0, 1], [0, 1], 'k--'); plt.legend(); plt.xlabel('FPR'); plt.ylabel('TPR')",
   "text": "",
   "imgs": [
    "/assign/fraud-claim/7_3_1-1.png"
   ]
  },
  "7.3.3": {
   "code": "rows = []\nfor i in [x / 10 for x in range(10)]:\n    p = (tr['Prob'] > i).astype(int)\n    tn, fp, fn, tp = metrics.confusion_matrix(tr['Fraud'], p).ravel()\n    rows.append([i, (tp + tn) / len(tr), tp / (tp + fn), tn / (tn + fp)])\ncdf = pd.DataFrame(rows, columns=['cutoff', 'accuracy', 'sensitivity', 'specificity'])\ncdf.plot(x='cutoff', y=['accuracy', 'sensitivity', 'specificity'])\nprint(cdf.round(3).to_string(index=False))",
   "text": " cutoff  accuracy  sensitivity  specificity\n    0.0     0.500        1.000        0.000\n    0.1     0.757        0.973        0.540\n    0.2     0.857        0.901        0.814\n    0.3     0.857        0.901        0.814\n    0.4     0.875        0.901        0.850\n    0.5     0.873        0.884        0.861\n    0.6     0.873        0.884        0.861\n    0.7     0.874        0.875        0.873\n    0.8     0.862        0.848        0.876\n    0.9     0.654        0.325        0.983",
   "imgs": [
    "/assign/fraud-claim/7_3_3-1.png"
   ]
  },
  "7.3.4": {
   "code": "cutoff = 0.5\ntr['final'] = (tr['Prob'] > cutoff).astype(int)\nprint('cutoff chọn:', cutoff)",
   "text": "cutoff chọn: 0.5",
   "imgs": []
  },
  "7.3.8": {
   "code": "cm2 = metrics.confusion_matrix(tr['Fraud'], tr['final']); TN, FP, FN, TP = cm2.ravel()\nprint(cm2); print(rep(TN, FP, FN, TP))",
   "text": "[[453  73]\n [ 61 465]]\nsensitivity(recall) 0.884 | specificity 0.861 | precision 0.864 | F1 0.874",
   "imgs": []
  },
  "7.3.9": {
   "code": "from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(tr['Fraud'], tr['Prob'])\nplt.plot(t, p[:-1], 'g', label='precision'); plt.plot(t, r[:-1], 'r', label='recall'); plt.legend(); plt.xlabel('ngưỡng')",
   "text": "",
   "imgs": [
    "/assign/fraud-claim/7_3_9-1.png"
   ]
  },
  "7.4.2": {
   "code": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report\nfrom sklearn.model_selection import cross_val_score, GridSearchCV\nrf = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train, y_train)\nprint('đã huấn luyện rừng', rf.n_estimators, 'cây')",
   "text": "đã huấn luyện rừng 100 cây",
   "imgs": []
  },
  "7.4.3": {
   "code": "imp = pd.Series(rf.feature_importances_, index=X_train.columns).sort_values(ascending=False)\nimp.head(12).iloc[::-1].plot(kind='barh', title='Mức quan trọng của biến (random forest)')\nsel = imp[imp > imp.mean()].index\nprint(len(sel), 'biến vượt mức trung bình'); print(imp.head(10).round(3).to_string())",
   "text": "17 biến vượt mức trung bình\nincident_severity_Minor Damage    0.090\ninsured_hobbies_other             0.075\nincident_severity_Total Loss      0.058\ntotal_claim_amount                0.054\nclaim_per_vehicle                 0.053\nmonths_as_customer                0.043\npolicy_annual_premium             0.037\npolicy_age_days                   0.035\nincident_hour_of_the_day          0.032\nauto_year                         0.031",
   "imgs": [
    "/assign/fraud-claim/7_4_3-1.png"
   ]
  },
  "7.4.4": {
   "code": "rf2 = RandomForestClassifier(random_state=42, n_estimators=100).fit(X_train[sel], y_train)\nprint('train với', len(sel), 'biến')",
   "text": "train với 17 biến",
   "imgs": []
  },
  "7.4.6": {
   "code": "p = rf2.predict(X_train[sel])\nprint('accuracy train', round(metrics.accuracy_score(y_train, p), 4))",
   "text": "accuracy train 1.0",
   "imgs": []
  },
  "7.4.7": {
   "code": "cmr = metrics.confusion_matrix(y_train, p)\nprint(pd.DataFrame(cmr, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
   "text": "                đoán: sạch  đoán: gian lận\nthực: sạch             526               0\nthực: gian lận           0             526",
   "imgs": []
  },
  "7.4.9": {
   "code": "TN, FP, FN, TP = cmr.ravel(); print(rep(TN, FP, FN, TP))",
   "text": "sensitivity(recall) 1.000 | specificity 1.000 | precision 1.000 | F1 1.000",
   "imgs": []
  },
  "7.4.10": {
   "code": "cv = cross_val_score(rf2, X_train[sel], y_train, cv=5, scoring='accuracy')\nprint('accuracy 5 lần CV:', cv.round(3), '| trung bình', cv.mean().round(3))",
   "text": "accuracy 5 lần CV: [0.891 0.915 0.933 0.929 0.938] | trung bình 0.921",
   "imgs": []
  },
  "7.5.1": {
   "code": "grid = GridSearchCV(RandomForestClassifier(random_state=42), {'n_estimators': [100, 200], 'max_depth': [5, 10, None], 'min_samples_leaf': [1, 5, 10]}, cv=5, scoring='accuracy', n_jobs=-1).fit(X_train[sel], y_train)\nprint('tham số tốt nhất:', grid.best_params_, '| CV accuracy', round(grid.best_score_, 3))",
   "text": "tham số tốt nhất: {'max_depth': 10, 'min_samples_leaf': 1, 'n_estimators': 100} | CV accuracy 0.926",
   "imgs": []
  },
  "7.5.2": {
   "code": "rf3 = RandomForestClassifier(random_state=42, **grid.best_params_).fit(X_train[sel], y_train)\nprint(rf3)",
   "text": "RandomForestClassifier(max_depth=10, random_state=42)",
   "imgs": []
  },
  "7.5.4": {
   "code": "p3 = rf3.predict(X_train[sel]); print('accuracy train', round(metrics.accuracy_score(y_train, p3), 4))",
   "text": "accuracy train 0.9791",
   "imgs": []
  },
  "7.5.5": {
   "code": "cm3 = metrics.confusion_matrix(y_train, p3)\nprint(pd.DataFrame(cm3, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
   "text": "                đoán: sạch  đoán: gian lận\nthực: sạch             505              21\nthực: gian lận           1             525",
   "imgs": []
  },
  "7.5.7": {
   "code": "TN, FP, FN, TP = cm3.ravel(); print(rep(TN, FP, FN, TP))",
   "text": "sensitivity(recall) 0.998 | specificity 0.960 | precision 0.962 | F1 0.979",
   "imgs": []
  },
  "8.1.4": {
   "code": "Xv_sm = sm.add_constant(X_validation[col].astype(float), has_constant='add')\nva = pd.DataFrame({'Fraud': y_validation.values, 'Prob': res.predict(Xv_sm).values})\nva['final'] = (va['Prob'] > cutoff).astype(int)\nprint(va.head(6).round(3).to_string())",
   "text": "   Fraud   Prob  final\n0      0  0.150      0\n1      0  0.150      0\n2      0  0.150      0\n3      0  0.087      0\n4      0  0.150      0\n5      1  0.964      1",
   "imgs": []
  },
  "8.1.5": {
   "code": "print('accuracy validation', round(metrics.accuracy_score(va['Fraud'], va['final']), 4), '| train', round(metrics.accuracy_score(tr['Fraud'], tr['final']), 4))",
   "text": "accuracy validation 0.8433 | train 0.8726",
   "imgs": []
  },
  "8.1.6": {
   "code": "cmv = metrics.confusion_matrix(va['Fraud'], va['final'])\nprint(pd.DataFrame(cmv, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
   "text": "                đoán: sạch  đoán: gian lận\nthực: sạch             191              35\nthực: gian lận          12              62",
   "imgs": []
  },
  "8.1.8": {
   "code": "TN, FP, FN, TP = cmv.ravel(); print(rep(TN, FP, FN, TP))",
   "text": "sensitivity(recall) 0.838 | specificity 0.845 | precision 0.639 | F1 0.725",
   "imgs": []
  },
  "8.2.1": {
   "code": "pv = rf3.predict(X_validation[sel]); print('dự đoán', len(pv), 'hồ sơ validation; dự đoán gian lận:', int(pv.sum()))",
   "text": "dự đoán 300 hồ sơ validation; dự đoán gian lận: 92",
   "imgs": []
  },
  "8.2.2": {
   "code": "print('accuracy RF validation', round(metrics.accuracy_score(y_validation, pv), 4))",
   "text": "accuracy RF validation 0.82",
   "imgs": []
  },
  "8.2.3": {
   "code": "cmrf = metrics.confusion_matrix(y_validation, pv)\nprint(pd.DataFrame(cmrf, index=['thực: sạch', 'thực: gian lận'], columns=['đoán: sạch', 'đoán: gian lận']))",
   "text": "                đoán: sạch  đoán: gian lận\nthực: sạch             190              36\nthực: gian lận          18              56",
   "imgs": []
  },
  "8.2.5": {
   "code": "TN, FP, FN, TP = cmrf.ravel(); print(rep(TN, FP, FN, TP))\nprint(classification_report(y_validation, pv, target_names=['sạch', 'gian lận']))",
   "text": "sensitivity(recall) 0.757 | specificity 0.841 | precision 0.609 | F1 0.675\n              precision    recall  f1-score   support\n\n        sạch       0.91      0.84      0.88       226\n    gian lận       0.61      0.76      0.67        74\n\n    accuracy                           0.82       300\n   macro avg       0.76      0.80      0.78       300\nweighted avg       0.84      0.82      0.83       300",
   "imgs": []
  },
  "7.1.2b": {
   "code": "col = X_train.columns[rfecv.support_]\nprint(len(col), list(col)[:20])",
   "text": "9 ['insured_occupation_handlers-cleaners', 'insured_occupation_priv-house-serv', 'insured_hobbies_cross-fit', 'insured_hobbies_other', 'incident_severity_Minor Damage', 'incident_severity_Total Loss', 'incident_severity_Trivial Damage', 'auto_make_Audi', 'auto_make_Honda']",
   "imgs": []
  }
 }
};
