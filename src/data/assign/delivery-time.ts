import type { Assignment } from "@/data/assign/types";

export const asg: Assignment = {
 "id": "delivery-time",
 "course": "C3 · Hồi quy tuyến tính",
 "title": [
  "Bài tập: Dự đoán thời gian giao",
  "Assignment: Delivery Time Prediction"
 ],
 "file": "LR_Delivery_Time_Estimation_Starter.ipynb",
 "story": [
  "Starter gốc là dữ liệu đơn giao Porter. Trong Lotus Spa: «đơn» = lượt đặt lịch, «giao hàng» = khách vào phòng, «thời gian giao» = số phút khách chờ từ lúc đặt đến lúc vào phòng. Bạn dự đoán thời gian chờ để chị Lan báo trước cho khách. Các con số «file của bạn» là số thật tính từ porter_data_1.csv.",
  "The original starter is Porter delivery data. In Lotus Spa: an order is a booking, delivery is the customer entering the room, delivery time is the minutes from booking to entering. You predict the wait so chị Lan can tell customers in advance. The “your file” numbers are real figures computed from porter_data_1.csv."
 ],
 "concepts": [
  "d-19f8df89941b"
 ],
 "cells": [
  {
   "t": "md",
   "s": "# Order Delivery Time Prediction"
  },
  {
   "t": "md",
   "s": "## Objectives\nThe objective of this assignment is to build a regression model that predicts the delivery time for orders placed through Porter. The model will use various features such as the items ordered, the restaurant location, the order protocol, and the availability of delivery partners.\n\nThe key goals are:\n- Predict the delivery time for an order based on multiple input features\n- Improve delivery time predictions to optimiae operational efficiency\n- Understand the key factors influencing delivery time to enhance the model's accuracy"
  },
  {
   "t": "md",
   "s": "## Data Pipeline\nThe data pipeline for this assignment will involve the following steps:\n1. **Data Loading**\n2. **Data Preprocessing and Feature Engineering**\n3. **Exploratory Data Analysis**\n4. **Model Building**\n5. **Model Inference**"
  },
  {
   "t": "md",
   "s": "## Data Understanding\nThe dataset contains information on orders placed through Porter, with the following columns:\n\n| Field                     | Description                                                                                 |\n|---------------------------|---------------------------------------------------------------------------------------------|\n| market_id                 | Integer ID representing the market where the restaurant is located.                         |\n| created_at                | Timestamp when the order was placed.                                                        |\n| actual_delivery_time      | Timestamp when the order was delivered.                                                     |\n| store_primary_category    | Category of the restaurant (e.g., fast food, dine-in).                                      |\n| order_protocol            | Integer representing how the order was placed (e.g., via Porter, call to restaurant, etc.). |\n| total_items               | Total number of items in the order.                                                         |\n| subtotal                  | Final price of the order.                                                                   |\n| num_distinct_items        | Number of distinct items in the order.                                                      |\n| min_item_price            | Price of the cheapest item in the order.                                                    |\n| max_item_price            | Price of the most expensive item in the order.                                              |\n| total_onshift_dashers     | Number of delivery partners on duty when the order was placed.                              |\n| total_busy_dashers        | Number of delivery partners already occupied with other orders.                             |\n| total_outstanding_orders  | Number of orders pending fulfillment at the time of the order.                              |\n| distance                  | Total distance from the restaurant to the customer.                                         |\n"
  },
  {
   "t": "md",
   "s": "## **Importing Necessary Libraries**"
  },
  {
   "t": "code",
   "s": "# Import essential libraries for data manipulation and analysis\n\n"
  },
  {
   "t": "md",
   "s": "## **1. Loading the data**\nLoad 'porter_data_1.csv' as a DataFrame"
  },
  {
   "t": "code",
   "s": "# Importing the file porter_data_1.csv\n"
  },
  {
   "t": "md",
   "s": "## **2. Data Preprocessing and Feature Engineering** <font color = red>[15 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "#### **2.1 Fixing the Datatypes**  <font color = red>[5 marks]</font> <br>\nThe current timestamps are in object format and need conversion to datetime format for easier handling and intended functionality"
  },
  {
   "t": "md",
   "s": "##### **2.1.1** <font color = red>[2 marks]</font> <br>\nConvert date and time fields to appropriate data type",
   "ref": "2.1.1"
  },
  {
   "t": "code",
   "s": "# Convert 'created_at' and 'actual_delivery_time' columns to datetime format\n\n"
  },
  {
   "t": "md",
   "s": "##### **2.1.2**  <font color = red>[3 marks]</font> <br>\nConvert categorical fields to appropriate data type",
   "ref": "2.1.2"
  },
  {
   "t": "code",
   "s": "# Convert categorical features to category type\n\n"
  },
  {
   "t": "md",
   "s": "#### **2.2 Feature Engineering** <font color = red>[5 marks]</font> <br>\nCalculate the time taken to execute the delivery as well as extract the hour and day at which the order was placed"
  },
  {
   "t": "md",
   "s": "##### **2.2.1** <font color = red>[2 marks]</font> <br>\nCalculate the time taken using the features `actual_delivery_time` and `created_at`",
   "ref": "2.2.1"
  },
  {
   "t": "code",
   "s": "# Calculate time taken in minutes\n"
  },
  {
   "t": "md",
   "s": "##### **2.2.2** <font color = red>[3 marks]</font> <br>\nExtract the hour at which the order was placed and which day of the week it was. Drop the unnecessary columns.",
   "ref": "2.2.2"
  },
  {
   "t": "code",
   "s": "# Extract the hour and day of week from the 'created_at' timestamp\n\n\n# Create a categorical feature 'isWeekend'\n\n"
  },
  {
   "t": "code",
   "s": "# Drop unnecessary columns\n"
  },
  {
   "t": "md",
   "s": "#### **2.3 Creating training and validation sets** <font color = red>[5 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "##### **2.3.1** <font color = red>[2 marks]</font> <br>\n Define target and input features",
   "ref": "2.3.1"
  },
  {
   "t": "code",
   "s": "# Define target variable (y) and features (X)\n\n"
  },
  {
   "t": "md",
   "s": "##### **2.3.2** <font color = red>[3 marks]</font> <br>\n Split the data into training and test sets",
   "ref": "2.3.2"
  },
  {
   "t": "code",
   "s": "# Split data into training and testing sets\n\n"
  },
  {
   "t": "md",
   "s": "## **3. Exploratory Data Analysis on Training Data** <font color = red>[20 marks]</font> <br>\n1. Analyzing the correlation between variables to identify patterns and relationships\n2. Identifying and addressing outliers to ensure the integrity of the analysis\n3. Exploring the relationships between variables and examining the distribution of the data for better insights"
  },
  {
   "t": "md",
   "s": "#### **3.1 Feature Distributions** <font color = red> [7 marks]</font> <br>\n"
  },
  {
   "t": "code",
   "s": "# Define numerical and categorical columns for easy EDA and data manipulation\n\n"
  },
  {
   "t": "md",
   "s": "##### **3.1.1** <font color = red>[3 marks]</font> <br>\nPlot distributions for numerical columns in the training set to understand their spread and any skewness",
   "ref": "3.1.1"
  },
  {
   "t": "code",
   "s": "# Plot distributions for all numerical columns\n\n"
  },
  {
   "t": "md",
   "s": "##### **3.1.2** <font color = red>[2 marks]</font> <br>\nCheck the distribution of categorical features",
   "ref": "3.1.2"
  },
  {
   "t": "code",
   "s": "# Distribution of categorical columns\n\n"
  },
  {
   "t": "md",
   "s": "##### **3.1.3** <font color = red>[2 mark]</font> <br>\nVisualise the distribution of the target variable to understand its spread and any skewness",
   "ref": "3.1.3"
  },
  {
   "t": "code",
   "s": "# Distribution of time_taken\n\n"
  },
  {
   "t": "md",
   "s": "#### **3.2 Relationships Between Features** <font color = red>[3 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "##### **3.2.1** <font color = red>[3 marks]</font> <br>\nScatter plots for important numerical and categorical features to observe how they relate to `time_taken`",
   "ref": "3.2.1"
  },
  {
   "t": "code",
   "s": "# Scatter plot to visualise the relationship between time_taken and other features\n\n"
  },
  {
   "t": "code",
   "s": "# Show the distribution of time_taken for different hours\n\n"
  },
  {
   "t": "md",
   "s": "#### **3.3 Correlation Analysis** <font color = red>[5 marks]</font> <br>\nCheck correlations between numerical features to identify which variables are strongly related to `time_taken`"
  },
  {
   "t": "md",
   "s": "##### **3.3.1** <font color = red>[3 marks]</font> <br>\nPlot a heatmap to display correlations",
   "ref": "3.3.1"
  },
  {
   "t": "code",
   "s": "# Plot the heatmap of the correlation matrix\n\n"
  },
  {
   "t": "md",
   "s": "##### **3.3.2** <font color = red>[2 marks]</font> <br>\nDrop the columns with weak correlations with the target variable",
   "ref": "3.3.2"
  },
  {
   "t": "code",
   "s": "# Drop 3-5 weakly correlated columns from training dataset\n\n"
  },
  {
   "t": "md",
   "s": "#### **3.4 Handling the Outliers** <font color = red>[5 marks]</font> <br>\n\n"
  },
  {
   "t": "md",
   "s": "##### **3.4.1** <font color = red>[2 marks]</font> <br>\nVisualise potential outliers for the target variable and other numerical features using boxplots",
   "ref": "3.4.1"
  },
  {
   "t": "code",
   "s": "# Boxplot for time_taken\n\n"
  },
  {
   "t": "md",
   "s": "##### **3.4.2** <font color = red>[3 marks]</font> <br>\nHandle outliers present in all columns",
   "ref": "3.4.2"
  },
  {
   "t": "code",
   "s": "# Handle outliers\n\n"
  },
  {
   "t": "md",
   "s": "## **4. Exploratory Data Analysis on Validation Data** <font color = red>[optional]</font> <br>\nOptionally, perform EDA on test data to see if the distribution match with the training data"
  },
  {
   "t": "code",
   "s": "# Define numerical and categorical columns for easy EDA and data manipulation\n\n"
  },
  {
   "t": "md",
   "s": "#### **4.1 Feature Distributions**\n"
  },
  {
   "t": "md",
   "s": "##### **4.1.1**\nPlot distributions for numerical columns in the validation set to understand their spread and any skewness",
   "ref": "4.1.1"
  },
  {
   "t": "code",
   "s": "# Plot distributions for all numerical columns\n\n"
  },
  {
   "t": "md",
   "s": "##### **4.1.2**\nCheck the distribution of categorical features",
   "ref": "4.1.2"
  },
  {
   "t": "code",
   "s": "# Distribution of categorical columns\n\n"
  },
  {
   "t": "md",
   "s": "##### **4.1.3**\nVisualise the distribution of the target variable to understand its spread and any skewness",
   "ref": "4.1.3"
  },
  {
   "t": "code",
   "s": "# Distribution of time_taken\n\n"
  },
  {
   "t": "md",
   "s": "#### **4.2 Relationships Between Features**\nScatter plots for numerical features to observe how they relate to each other, especially to `time_taken`",
   "ref": "4.2"
  },
  {
   "t": "code",
   "s": "# Scatter plot to visualise the relationship between time_taken and other features\n\n"
  },
  {
   "t": "md",
   "s": "#### **4.3** Drop the columns with weak correlations with the target variable",
   "ref": "4.3"
  },
  {
   "t": "code",
   "s": "# Drop the weakly correlated columns from training dataset\n\n"
  },
  {
   "t": "md",
   "s": "## **5. Model Building** <font color = red>[15 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "#### **Import Necessary Libraries**"
  },
  {
   "t": "code",
   "s": "# Import libraries\n\n"
  },
  {
   "t": "md",
   "s": "#### **5.1 Feature Scaling** <font color = red>[3 marks]</font> <br>",
   "ref": "5.1"
  },
  {
   "t": "code",
   "s": "# Apply scaling to the numerical columns\n\n"
  },
  {
   "t": "md",
   "s": "Note that linear regression is agnostic to feature scaling. However, with feature scaling, we get the coefficients to be somewhat on the same scale so that it becomes easier to compare them."
  },
  {
   "t": "md",
   "s": "#### **5.2 Build a linear regression model** <font color = red>[5 marks]</font> <br>",
   "ref": "5.2"
  },
  {
   "t": "md",
   "s": "You can choose from the libraries *statsmodels* and *scikit-learn* to build the model."
  },
  {
   "t": "code",
   "s": "# Create/Initialise the model\n"
  },
  {
   "t": "code",
   "s": "# Train the model using the training data\n"
  },
  {
   "t": "code",
   "s": "# Make predictions\n"
  },
  {
   "t": "code",
   "s": "# Find results for evaluation metrics\n\n"
  },
  {
   "t": "md",
   "s": "Note that we have 12 (depending on how you select features) training features. However, not all of them would be useful. Let's say we want to take the most relevant 8 features.\n\nWe will use Recursive Feature Elimination (RFE) here.\n\nFor this, you can look at the coefficients / p-values of features from the model summary and perform feature elimination, or you can use the RFE module provided with *scikit-learn*."
  },
  {
   "t": "md",
   "s": "#### **5.3 Build the model and fit RFE to select the most important features** <font color = red>[7 marks]</font> <br>",
   "ref": "5.3"
  },
  {
   "t": "md",
   "s": "For RFE, we will start with all features and use\nthe RFE method to recursively reduce the number of features one-by-one.\n\nAfter analysing the results of these iterations, we select the one that has a good balance between performance and number of features."
  },
  {
   "t": "code",
   "s": "# Loop through the number of features and test the model\n\n"
  },
  {
   "t": "code",
   "s": "# Build the final model with selected number of features\n\n"
  },
  {
   "t": "md",
   "s": "## **6. Results and Inference** <font color = red>[5 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "#### **6.1 Perform Residual Analysis** <font color = red>[3 marks]</font> <br>",
   "ref": "6.1"
  },
  {
   "t": "code",
   "s": "# Perform residual analysis using plots like residuals vs predicted values, Q-Q plot and residual histogram\n\n"
  },
  {
   "t": "md",
   "s": "[Your inferences here:]\n\n"
  },
  {
   "t": "md",
   "s": "#### **6.2 Perform Coefficient Analysis** <font color = red>[2 marks]</font> <br>",
   "ref": "6.2"
  },
  {
   "t": "md",
   "s": "Perform coefficient analysis to find how changes in features affect the target.\nAlso, the features were scaled, so interpret the scaled and unscaled coefficients to understand the impact of feature changes on delivery time.\n"
  },
  {
   "t": "code",
   "s": "# Compare the scaled vs unscaled features used in the final model\n\n"
  },
  {
   "t": "md",
   "s": "Additionally, we can analyse the effect of a unit change in a feature. In other words, because we have scaled the features, a unit change in the features will not translate directly to the model. Use scaled and unscaled coefficients to find how will a unit change in a feature affect the target."
  },
  {
   "t": "code",
   "s": "# Analyze the effect of a unit change in a feature, say 'total_items'\n\n"
  },
  {
   "t": "md",
   "s": "Note:\nThe coefficients on the original scale might differ greatly in magnitude from the scaled coefficients, but they both describe the same relationships between variables.\n\nInterpretation is key: Focus on the direction and magnitude of the coefficients on the original scale to understand the impact of each variable on the response variable in the original units."
  },
  {
   "t": "md",
   "s": "Include conclusions in your report document."
  },
  {
   "t": "md",
   "s": "## Subjective Questions <font color = red>[20 marks]</font>"
  },
  {
   "t": "md",
   "s": "Answer the following questions only in the notebook. Include the visualisations/methodologies/insights/outcomes from all the above steps in your report."
  },
  {
   "t": "md",
   "s": "#### Subjective Questions based on Assignment"
  },
  {
   "t": "md",
   "s": "##### **Question 1.** <font color = red>[2 marks]</font> <br>\n\nAre there any categorical variables in the data? From your analysis of the categorical variables from the dataset, what could you infer about their effect on the dependent variable?",
   "ref": "Q1"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 2.** <font color = red>[1 marks]</font> <br>\nWhat does `test_size = 0.2` refer to during splitting the data into training and test sets?",
   "ref": "Q2"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 3.** <font color = red>[1 marks]</font> <br>\nLooking at the heatmap, which one has the highest correlation with the target variable?  ",
   "ref": "Q3"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 4.** <font color = red>[2 marks]</font> <br>\nWhat was your approach to detect the outliers? How did you address them?",
   "ref": "Q4"
  },
  {
   "t": "md",
   "s": "**Answer:**\n\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 5.** <font color = red>[2 marks]</font> <br>\nBased on the final model, which are the top 3 features significantly affecting the delivery time?",
   "ref": "Q5"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "#### General Subjective Questions"
  },
  {
   "t": "md",
   "s": "##### **Question 6.** <font color = red>[3 marks]</font> <br>\nExplain the linear regression algorithm in detail",
   "ref": "Q6"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>\n"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 7.** <font color = red>[2 marks]</font> <br>\nExplain the difference between simple linear regression and multiple linear regression",
   "ref": "Q7"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 8.** <font color = red>[2 marks]</font> <br>\nWhat is the role of the cost function in linear regression, and how is it minimized?",
   "ref": "Q8"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>\n"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 9.** <font color = red>[2 marks]</font> <br>\nExplain the difference between overfitting and underfitting.\n\n",
   "ref": "Q9"
  },
  {
   "t": "md",
   "s": "**Answer:**\n\n>"
  },
  {
   "t": "md",
   "s": "\n\n---\n\n"
  },
  {
   "t": "md",
   "s": "##### **Question 10.** <font color = red>[3 marks]</font> <br>\nHow do residual plots help in diagnosing a linear regression model?",
   "ref": "Q10"
  },
  {
   "t": "md",
   "s": "**Answer:**\n>"
  }
 ],
 "guides": {
  "2.1.1": {
   "vi": {
    "think": "Hai cột thời gian đang là chữ. Muốn trừ được hai mốc giờ, phải đổi sang datetime.",
    "steps": [
     "pd.to_datetime cho created_at và actual_delivery_time.",
     "Kiểm tra df.dtypes: hai cột phải là datetime64.",
     "Đếm số giá trị lỗi bằng errors='coerce' nếu nghi có dòng sai định dạng."
    ],
    "code": "df['created_at'] = pd.to_datetime(df['created_at'])\ndf['actual_delivery_time'] = pd.to_datetime(df['actual_delivery_time'])\nprint(df[['created_at','actual_delivery_time']].dtypes)",
    "lotus": "Sổ booking ghi giờ đặt là chữ «2026-11-03 19:05». Phải đổi thành giờ thật thì mới tính được khách chờ bao lâu.",
    "trap": "Trừ hai cột chữ sẽ báo lỗi hoặc ra kết quả vô nghĩa."
   },
   "en": {
    "think": "Both time columns are text. To subtract two timestamps they must become datetime.",
    "steps": [
     "pd.to_datetime for created_at and actual_delivery_time.",
     "Check df.dtypes: both must be datetime64.",
     "Use errors='coerce' and count failures if some rows may be malformed."
    ],
    "code": "df['created_at'] = pd.to_datetime(df['created_at'])\ndf['actual_delivery_time'] = pd.to_datetime(df['actual_delivery_time'])\nprint(df[['created_at','actual_delivery_time']].dtypes)",
    "lotus": "The booking log stores the order time as text “2026-11-03 19:05”. It must become a real time before you can compute how long the customer waited.",
    "trap": "Subtracting two text columns errors out or gives nonsense."
   }
  },
  "2.1.2": {
   "vi": {
    "think": "market_id, order_protocol, store_primary_category là mã, không phải số để cộng trừ. Đổi sang kiểu category để mô hình và biểu đồ coi chúng là nhóm.",
    "steps": [
     "Liệt kê cột mã: market_id, order_protocol, store_primary_category.",
     "Đổi bằng astype('category').",
     "Trong file của bạn: market_id có 6 giá trị, order_protocol có 7, store_primary_category có 73."
    ],
    "code": "cat_cols = ['market_id', 'order_protocol', 'store_primary_category']\ndf[cat_cols] = df[cat_cols].astype('category')\nprint(df[cat_cols].nunique())",
    "lotus": "Mã chi nhánh 1, 2, 3 không có «hơn kém». Mã gói A12, B07, C03 cũng vậy. Đổi sang nhóm để máy không tự coi 3 là gấp 3 lần 1.",
    "trap": "Để mã ở kiểu số thì hồi quy sẽ gán một hệ số chung cho mã, như thể mã 6 gấp 6 lần mã 1."
   },
   "en": {
    "think": "market_id, order_protocol, store_primary_category are codes, not numbers to add or subtract. Convert to category so models and charts treat them as groups.",
    "steps": [
     "List the code columns: market_id, order_protocol, store_primary_category.",
     "Convert with astype('category').",
     "In your file: market_id has 6 values, order_protocol 7, store_primary_category 73."
    ],
    "code": "cat_cols = ['market_id', 'order_protocol', 'store_primary_category']\ndf[cat_cols] = df[cat_cols].astype('category')\nprint(df[cat_cols].nunique())",
    "lotus": "Branch codes 1, 2, 3 have no “more or less”. Package codes A12, B07, C03 likewise. Convert to category so the machine does not treat 3 as three times 1.",
    "trap": "Leaving codes numeric makes regression assign one coefficient to the code, as if code 6 were six times code 1."
   }
  },
  "2.2.1": {
   "vi": {
    "think": "Thời gian giao là hiệu hai mốc giờ, tính bằng phút. Đây là biến mục tiêu của cả bài.",
    "steps": [
     "(actual_delivery_time − created_at).dt.total_seconds() / 60.",
     "Xem describe(): trong file của bạn trung bình khoảng 46,2 phút, trung vị 45, từ 32 đến 110.",
     "Kiểm tra không có giá trị âm."
    ],
    "code": "df['time_taken'] = (df['actual_delivery_time'] - df['created_at']).dt.total_seconds() / 60\nprint(df['time_taken'].describe().round(1))",
    "lotus": "Khách đặt lúc 19:05 và vào phòng lúc 19:50 là 45 phút chờ. Đây là con số mô hình sẽ cố đoán trước.",
    "trap": "Dùng .dt.seconds thay vì total_seconds làm mất phần ngày khi chênh qua nửa đêm."
   },
   "en": {
    "think": "Delivery time is the difference of the two timestamps, in minutes. It is the target of the whole assignment.",
    "steps": [
     "(actual_delivery_time − created_at).dt.total_seconds() / 60.",
     "Check describe(): in your file the mean is about 46.2 minutes, median 45, from 32 to 110.",
     "Check there are no negative values."
    ],
    "code": "df['time_taken'] = (df['actual_delivery_time'] - df['created_at']).dt.total_seconds() / 60\nprint(df['time_taken'].describe().round(1))",
    "lotus": "A customer books at 19:05 and enters the room at 19:50: a 45-minute wait. That is the number the model will try to predict ahead of time.",
    "trap": "Using .dt.seconds instead of total_seconds drops the day part when the gap crosses midnight."
   }
  },
  "2.2.2": {
   "vi": {
    "think": "Giờ đặt và thứ trong tuần là hai tín hiệu về nhịp nhu cầu. Thêm cờ cuối tuần, rồi bỏ cột không còn cần.",
    "steps": [
     "hour = created_at.dt.hour; day = created_at.dt.dayofweek.",
     "isWeekend = day >= 5 (kiểu category).",
     "Bỏ created_at, actual_delivery_time vì thông tin đã chuyển vào time_taken, hour, day."
    ],
    "code": "df['hour'] = df['created_at'].dt.hour\ndf['day'] = df['created_at'].dt.dayofweek\ndf['isWeekend'] = (df['day'] >= 5).astype('category')\ndf = df.drop(columns=['created_at', 'actual_delivery_time'])",
    "lotus": "Giờ đặt 19:00 và thứ bảy cho biết khách đông hay vắng. Trong file của bạn, đơn đặt lúc 2 đến 3 giờ sáng chờ lâu nhất (khoảng 50 phút), còn buổi tối khoảng 40 đến 42 phút.",
    "trap": "Giữ lại actual_delivery_time khi dự đoán là rò rỉ đáp án: bạn đã biết kết quả trước khi đoán."
   },
   "en": {
    "think": "Order hour and weekday are signals of demand rhythm. Add a weekend flag, then drop columns no longer needed.",
    "steps": [
     "hour = created_at.dt.hour; day = created_at.dt.dayofweek.",
     "isWeekend = day >= 5 (category type).",
     "Drop created_at and actual_delivery_time since their information moved into time_taken, hour, day."
    ],
    "code": "df['hour'] = df['created_at'].dt.hour\ndf['day'] = df['created_at'].dt.dayofweek\ndf['isWeekend'] = (df['day'] >= 5).astype('category')\ndf = df.drop(columns=['created_at', 'actual_delivery_time'])",
    "lotus": "Order hour 19:00 and Saturday tell you whether customers are many or few. In your file, orders at 2 to 3 AM wait longest (about 50 minutes), evenings about 40 to 42.",
    "trap": "Keeping actual_delivery_time when predicting leaks the answer: you already know the result before guessing."
   }
  },
  "2.3.1": {
   "vi": {
    "think": "Tách biến mục tiêu y (time_taken) khỏi các biến đầu vào X. Mọi thứ còn lại là X.",
    "steps": [
     "y = df['time_taken'].",
     "X = df.drop(columns=['time_taken']).",
     "Kiểm tra X không còn time_taken, và cả hai cùng số dòng."
    ],
    "code": "y = df['time_taken']\nX = df.drop(columns=['time_taken'])\nprint(X.shape, y.shape)",
    "lotus": "Câu hỏi là «chờ bao lâu». Đáp án (y) đi một bên, mọi thông tin biết trước lúc đặt (X) đi một bên.",
    "trap": "Để time_taken lọt vào X làm mô hình đạt điểm gần tuyệt đối, một kết quả giả."
   },
   "en": {
    "think": "Separate the target y (time_taken) from the input features X. Everything else is X.",
    "steps": [
     "y = df['time_taken'].",
     "X = df.drop(columns=['time_taken']).",
     "Check X no longer has time_taken and both have the same row count."
    ],
    "code": "y = df['time_taken']\nX = df.drop(columns=['time_taken'])\nprint(X.shape, y.shape)",
    "lotus": "The question is “how long to wait”. The answer (y) goes one side, everything known before booking (X) the other.",
    "trap": "Letting time_taken slip into X gives a near-perfect score, a fake result."
   }
  },
  "2.3.2": {
   "vi": {
    "think": "Chia train và test trước khi khám phá, để phần test thật sự là dữ liệu chưa từng thấy.",
    "steps": [
     "train_test_split(X, y, test_size=0.2, random_state=42).",
     "Kiểm tra kích thước: file của bạn có 175.777 dòng, 80% là khoảng 140.600 dòng train.",
     "Mọi EDA ở bước 3 chỉ làm trên tập train."
    ],
    "code": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(len(X_train), len(X_test))",
    "lotus": "Giống như bạn nhìn sổ booking quý 1 để rút quy luật, rồi thử đoán quý 2 mà chưa xem. Nếu xem cả hai trước, phép đoán không còn là phép đoán.",
    "trap": "Khám phá trên toàn bộ dữ liệu rồi mới chia làm lộ thông tin của test vào các quyết định của bạn."
   },
   "en": {
    "think": "Split train and test before exploring so the test set is genuinely unseen.",
    "steps": [
     "train_test_split(X, y, test_size=0.2, random_state=42).",
     "Check sizes: your file has 175,777 rows, 80% is about 140,600 training rows.",
     "All EDA in step 3 uses the training set only."
    ],
    "code": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(len(X_train), len(X_test))",
    "lotus": "Like studying Q1's booking log to find a rule, then predicting Q2 without looking. If you looked at both first, the prediction is no longer a prediction.",
    "trap": "Exploring all the data before splitting leaks test information into your decisions."
   }
  },
  "3.1.1": {
   "vi": {
    "think": "Vẽ phân phối từng cột số trên tập train để thấy độ lệch và các giá trị lạ.",
    "steps": [
     "Tách numerical_cols và categorical_cols.",
     "Vẽ histogram từng cột số (hoặc lưới subplot).",
     "Ghi chú cột nào lệch phải (total_items, subtotal, distance) và có giá trị âm vô lý (min_item_price, total_onshift_dashers, total_busy_dashers, total_outstanding_orders)."
    ],
    "code": "num_cols = X_train.select_dtypes(include='number').columns\nX_train[num_cols].hist(bins=40, figsize=(14, 10))",
    "lotus": "Nếu số khách mỗi booking lệch phải (đa số 1 đến 2 người, vài nhóm 15 người) thì biết trước rằng vài điểm rất xa sẽ kéo đường hồi quy.",
    "trap": "Trong file của bạn có số nhân viên trực âm, một lỗi nhập, không phải dữ liệu thật. Hình phân phối là chỗ thấy nó."
   },
   "en": {
    "think": "Plot each numeric column's distribution on the training set to see skewness and odd values.",
    "steps": [
     "Separate numerical_cols and categorical_cols.",
     "Draw a histogram per numeric column (or a subplot grid).",
     "Note columns skewed right (total_items, subtotal, distance) and nonsensical negatives (min_item_price, total_onshift_dashers, total_busy_dashers, total_outstanding_orders)."
    ],
    "code": "num_cols = X_train.select_dtypes(include='number').columns\nX_train[num_cols].hist(bins=40, figsize=(14, 10))",
    "lotus": "If guests per booking are right-skewed (most 1 to 2, a few groups of 15), you know in advance a few far points will pull the regression line.",
    "trap": "Your file has a negative count of staff on shift, an entry error, not real data. The distribution plot is where you see it."
   }
  },
  "3.1.2": {
   "vi": {
    "think": "Phân phối các cột nhóm: mỗi nhóm có bao nhiêu đơn. Nhóm quá ít đơn sẽ cho hệ số không ổn định.",
    "steps": [
     "value_counts() hoặc countplot cho market_id, order_protocol, isWeekend.",
     "store_primary_category có 73 nhóm: chỉ vẽ top 15 hoặc nhìn bảng đếm.",
     "Ghi nhóm chiếm quá ít."
    ],
    "code": "for c in ['market_id', 'order_protocol', 'isWeekend']:\n    X_train[c].value_counts().sort_index().plot(kind='bar', title=c)\n    plt.show()\nX_train['store_primary_category'].value_counts().head(15)",
    "lotus": "Ba chi nhánh mà một chi nhánh chỉ có 20 booking thì hệ số của chi nhánh đó là số của 20 người.",
    "trap": "Vẽ 73 cột của store_primary_category vào một biểu đồ cho ra một khối chữ không đọc được."
   },
   "en": {
    "think": "Distribution of categorical columns: how many orders per group. Groups with very few orders give unstable coefficients.",
    "steps": [
     "value_counts() or countplot for market_id, order_protocol, isWeekend.",
     "store_primary_category has 73 groups: plot only the top 15 or read the count table.",
     "Note groups that are too small."
    ],
    "code": "for c in ['market_id', 'order_protocol', 'isWeekend']:\n    X_train[c].value_counts().sort_index().plot(kind='bar', title=c)\n    plt.show()\nX_train['store_primary_category'].value_counts().head(15)",
    "lotus": "Of three branches, if one has only 20 bookings, that branch's coefficient is the number of 20 people.",
    "trap": "Drawing all 73 bars of store_primary_category in one chart gives an unreadable block of text."
   }
  },
  "3.1.3": {
   "vi": {
    "think": "Phân phối biến mục tiêu: nó lệch không, có đuôi dài không.",
    "steps": [
     "Histogram và boxplot của y_train (hoặc time_taken).",
     "Trong file của bạn: trung bình 46,2, trung vị 45, độ lệch chuẩn 9,3, từ 32 đến 110 phút: lệch phải nhẹ, đuôi dài đến 110.",
     "Cân nhắc điều đó ảnh hưởng thế nào đến giả định phần dư."
    ],
    "code": "sns.histplot(y_train, bins=40, kde=True)\nplt.show()\nprint(y_train.describe().round(1))",
    "lotus": "Phần lớn khách chờ 40 đến 50 phút, vài người chờ 110. Vài người chờ rất lâu kéo trung bình lên cao hơn trung vị.",
    "trap": "Trung bình cao hơn trung vị là dấu hiệu lệch phải. Đừng chỉ nhìn trung bình."
   },
   "en": {
    "think": "Distribution of the target: is it skewed, does it have a long tail.",
    "steps": [
     "Histogram and boxplot of y_train (or time_taken).",
     "In your file: mean 46.2, median 45, standard deviation 9.3, from 32 to 110 minutes: mild right skew with a tail to 110.",
     "Consider how this affects the residual assumptions."
    ],
    "code": "sns.histplot(y_train, bins=40, kde=True)\nplt.show()\nprint(y_train.describe().round(1))",
    "lotus": "Most customers wait 40 to 50 minutes, a few wait 110. A few very long waits pull the mean above the median.",
    "trap": "A mean above the median signals right skew. Do not look at the mean alone."
   }
  },
  "3.2.1": {
   "vi": {
    "think": "Biểu đồ phân tán giữa time_taken và các biến số quan trọng, cùng phân phối time_taken theo giờ.",
    "steps": [
     "Ghép X_train và y_train thành một bảng train.",
     "scatter time_taken theo distance, subtotal, total_outstanding_orders (lấy mẫu vài nghìn điểm).",
     "boxplot time_taken theo hour để thấy nhịp theo giờ."
    ],
    "code": "train = X_train.copy(); train['time_taken'] = y_train\nsample = train.sample(5000, random_state=42)\nsns.scatterplot(data=sample, x='distance', y='time_taken', alpha=0.3)\nplt.show()\nsns.boxplot(data=train, x='hour', y='time_taken')",
    "lotus": "Càng nhiều đơn đang chờ xử lý, khách càng chờ lâu: ở file của bạn, tương quan giữa total_outstanding_orders và time_taken khoảng 0,39 và distance khoảng 0,46.",
    "trap": "Scatter hơn 100.000 điểm thành một khối đen. Lấy mẫu hoặc dùng alpha."
   },
   "en": {
    "think": "Scatter plots between time_taken and the important numeric features, and the distribution of time_taken by hour.",
    "steps": [
     "Join X_train and y_train into one training table.",
     "Scatter time_taken against distance, subtotal, total_outstanding_orders (sample a few thousand points).",
     "Boxplot time_taken by hour to see the hourly rhythm."
    ],
    "code": "train = X_train.copy(); train['time_taken'] = y_train\nsample = train.sample(5000, random_state=42)\nsns.scatterplot(data=sample, x='distance', y='time_taken', alpha=0.3)\nplt.show()\nsns.boxplot(data=train, x='hour', y='time_taken')",
    "lotus": "The more orders pending, the longer the customer waits: in your file, correlation of total_outstanding_orders with time_taken is about 0.39 and of distance about 0.46.",
    "trap": "Scattering over 100,000 points makes a black block. Sample or use alpha."
   }
  },
  "3.3.1": {
   "vi": {
    "think": "Bản đồ nhiệt tương quan cho thấy biến số nào đi cùng time_taken mạnh nhất.",
    "steps": [
     "corr = train.select_dtypes('number').corr().",
     "sns.heatmap(corr, annot=True, cmap='coolwarm', center=0).",
     "Đọc hàng time_taken. Trong file của bạn mạnh nhất là distance (khoảng 0,46), subtotal (khoảng 0,41), total_outstanding_orders (khoảng 0,39)."
    ],
    "code": "corr = train.select_dtypes(include='number').corr()\nplt.figure(figsize=(12, 9))\nsns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', center=0)\nprint(corr['time_taken'].sort_values())",
    "lotus": "Các số ở hàng thời gian chờ cho biết yếu tố nào đáng đưa vào mô hình trước: khoảng cách, giá trị đơn, số đơn đang chờ.",
    "trap": "Hệ số tương quan giữa hai biến đầu vào cao (ví dụ subtotal và total_items) là tín hiệu đa cộng tuyến, không phải một phát hiện."
   },
   "en": {
    "think": "A correlation heatmap shows which numeric features move most with time_taken.",
    "steps": [
     "corr = train.select_dtypes('number').corr().",
     "sns.heatmap(corr, annot=True, cmap='coolwarm', center=0).",
     "Read the time_taken row. In your file the strongest are distance (about 0.46), subtotal (about 0.41), total_outstanding_orders (about 0.39)."
    ],
    "code": "corr = train.select_dtypes(include='number').corr()\nplt.figure(figsize=(12, 9))\nsns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', center=0)\nprint(corr['time_taken'].sort_values())",
    "lotus": "The numbers in the wait-time row tell you which factors deserve the model first: distance, order value, pending orders.",
    "trap": "High correlation between two input features (for example subtotal and total_items) signals multicollinearity, not a discovery."
   }
  },
  "3.3.2": {
   "vi": {
    "think": "Bỏ vài cột tương quan yếu với y để mô hình gọn hơn. Ghi lý do cho từng cột.",
    "steps": [
     "Chọn 3 đến 5 cột có |tương quan| nhỏ với time_taken, trong file của bạn như min_item_price (khoảng 0,02) và store_primary_category (khoảng 0,03).",
     "Chỉ bỏ ở tập train, rồi bỏ đúng các cột đó ở validation (bài 4.3).",
     "Tương quan thấp theo đường thẳng chưa chắc là vô dụng: ghi chú điều đó."
    ],
    "code": "weak = ['min_item_price', 'store_primary_category']  # pick 3-5 and justify\nX_train = X_train.drop(columns=weak)\nX_test = X_test.drop(columns=weak)",
    "lotus": "Mã in phiếu không liên quan thời gian chờ thì bỏ. Nhưng nếu cột có quan hệ cong hay theo nhóm, tương quan đường thẳng thấp có thể đánh lừa.",
    "trap": "Bỏ cột ở train mà quên bỏ ở test làm số cột hai bên khác nhau và mô hình báo lỗi khi dự đoán."
   },
   "en": {
    "think": "Drop a few weakly correlated columns for a leaner model. Write down the reason for each.",
    "steps": [
     "Pick 3 to 5 columns with small |correlation| with time_taken, in your file such as min_item_price (about 0.02) and store_primary_category (about 0.03).",
     "Drop on train, then drop exactly the same columns on validation (task 4.3).",
     "Low linear correlation does not mean useless: note that."
    ],
    "code": "weak = ['min_item_price', 'store_primary_category']  # pick 3-5 and justify\nX_train = X_train.drop(columns=weak)\nX_test = X_test.drop(columns=weak)",
    "lotus": "A receipt print code unrelated to wait time gets dropped. But if a column relates by curve or by group, a low linear correlation can mislead.",
    "trap": "Dropping on train but forgetting on test leaves different column counts and the model errors at prediction."
   }
  },
  "3.4.1": {
   "vi": {
    "think": "Boxplot để nhìn thấy các điểm xa của time_taken và các biến số.",
    "steps": [
     "sns.boxplot cho time_taken.",
     "Boxplot các cột số khác (total_items, subtotal, distance, các cột nhân viên).",
     "Ghi các điểm xa: trong file của bạn total_items tới 411 và distance tới 83,52."
    ],
    "code": "sns.boxplot(x=y_train)\nplt.show()\nfor c in ['total_items', 'subtotal', 'distance']:\n    sns.boxplot(x=X_train[c]); plt.show()",
    "lotus": "Một booking 411 gói hay 83 km là một điểm xa. Nó có thể là một khách hàng doanh nghiệp thật hoặc một lỗi nhập, và bạn cần biết nó là cái nào trước khi bỏ.",
    "trap": "Boxplot chỉ gắn cờ điểm xa. Nó không nói điểm đó là lỗi."
   },
   "en": {
    "think": "Boxplots to see outliers in time_taken and the numeric features.",
    "steps": [
     "sns.boxplot for time_taken.",
     "Boxplots for the other numeric columns (total_items, subtotal, distance, the staff columns).",
     "Note outliers: in your file total_items reaches 411 and distance reaches 83.52."
    ],
    "code": "sns.boxplot(x=y_train)\nplt.show()\nfor c in ['total_items', 'subtotal', 'distance']:\n    sns.boxplot(x=X_train[c]); plt.show()",
    "lotus": "A booking of 411 packages or 83 km is an outlier. It may be a real corporate customer or an entry error, and you need to know which before dropping it.",
    "trap": "A boxplot only flags outliers. It does not say the point is an error."
   }
  },
  "3.4.2": {
   "vi": {
    "think": "Xử lý điểm xa: mỗi quy tắc cần một lý do, và phải áp dụng cùng cách cho validation.",
    "steps": [
     "Giá trị không thể có (số nhân viên âm, giá âm): lỗi, bỏ dòng hoặc sửa.",
     "Điểm xa thật nhưng hiếm (total_items 411): cân nhắc giới hạn bằng IQR hoặc phân vị 99.",
     "Ghi số dòng bị bỏ ở mỗi quy tắc.",
     "Chỉ tính ngưỡng trên train, rồi dùng cùng ngưỡng ở validation."
    ],
    "code": "train = X_train.copy(); train['time_taken'] = y_train\nn0 = len(train)\nneg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']\ntrain = train[(train[neg] >= 0).all(axis=1)]\nfor c in ['total_items', 'subtotal', 'distance']:\n    hi = train[c].quantile(0.99)\n    train = train[train[c] <= hi]\nprint(n0 - len(train), 'rows removed')",
    "lotus": "Số nhân viên âm bỏ hẳn. Một booking 411 gói giữ lại thì kéo hệ số, bỏ đi thì mô hình không còn thấy khách doanh nghiệp. Quyết định nào cũng phải ghi lý do.",
    "trap": "Tính ngưỡng trên cả train và validation cùng lúc rò rỉ thông tin. Tính trên train rồi mang sang."
   },
   "en": {
    "think": "Handling outliers: each rule needs a reason and must be applied the same way to validation.",
    "steps": [
     "Impossible values (negative staff counts, negative prices): errors, drop rows or fix.",
     "Real but rare outliers (total_items 411): consider capping by IQR or the 99th percentile.",
     "Record rows removed at each rule.",
     "Compute thresholds on train only, then reuse them on validation."
    ],
    "code": "train = X_train.copy(); train['time_taken'] = y_train\nn0 = len(train)\nneg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']\ntrain = train[(train[neg] >= 0).all(axis=1)]\nfor c in ['total_items', 'subtotal', 'distance']:\n    hi = train[c].quantile(0.99)\n    train = train[train[c] <= hi]\nprint(n0 - len(train), 'rows removed')",
    "lotus": "A negative staff count is dropped outright. A 411-package booking kept pulls the coefficient, dropped means the model no longer sees corporate customers. Either decision needs a recorded reason.",
    "trap": "Computing thresholds on train and validation together leaks information. Compute on train and carry over."
   }
  },
  "4.1.1": {
   "vi": {
    "think": "Phần 4 là tùy chọn: lặp lại EDA trên validation để xem hình dạng dữ liệu có giống train không.",
    "steps": [
     "Làm đúng các bước 3.1 trên tập validation (vẽ lại phân phối số).",
     "So sánh bằng mắt với biểu đồ ở train.",
     "Nếu khác nhiều, chia chưa ngẫu nhiên hoặc dữ liệu có thay đổi theo thời gian."
    ],
    "code": "num_cols_v = X_test.select_dtypes(include='number').columns\nX_test[num_cols_v].hist(bins=40, figsize=(14, 10))",
    "lotus": "Sổ booking tháng 11 và tháng 12 nên có hình dạng giống nhau. Nếu giờ đông của tháng 12 khác hẳn thì một mô hình luyện từ tháng 11 sẽ đoán sai.",
    "trap": "Ở phần này chỉ nhìn, không điều chỉnh train theo những gì thấy ở validation."
   },
   "en": {
    "think": "Part 4 is optional: repeat EDA on validation to see whether the data's shape matches train.",
    "steps": [
     "Repeat the 3.1 steps on the validation set (redraw numeric distributions).",
     "Compare by eye with the train charts.",
     "If very different, the split was not random or the data drifts over time."
    ],
    "code": "num_cols_v = X_test.select_dtypes(include='number').columns\nX_test[num_cols_v].hist(bins=40, figsize=(14, 10))",
    "lotus": "The November and December booking logs should look alike. If December's busy hours differ a lot, a model trained on November will guess wrong.",
    "trap": "In this part only look; do not adjust train based on what you see in validation."
   }
  },
  "4.1.2": {
   "vi": {
    "think": "Phân phối các cột nhóm ở validation, so với train.",
    "steps": [
     "value_counts(normalize=True) ở cả hai tập.",
     "So tỷ lệ từng nhóm: lệch vài điểm phần trăm là bình thường.",
     "Nhóm xuất hiện ở validation mà không có ở train sẽ gây lỗi khi dự đoán."
    ],
    "code": "pd.concat([X_train['market_id'].value_counts(normalize=True), X_test['market_id'].value_counts(normalize=True)], axis=1, keys=['train','valid'])",
    "lotus": "Tỷ lệ chi nhánh trong train và validation phải gần nhau. Nếu Thủ Đức chỉ có ở validation, mô hình chưa từng thấy nó.",
    "trap": "Một nhóm mới ở validation làm get_dummies sinh cột khác nhau giữa hai tập."
   },
   "en": {
    "think": "Distribution of categorical columns in validation versus train.",
    "steps": [
     "value_counts(normalize=True) on both sets.",
     "Compare each group's share: a few percentage points apart is normal.",
     "A group present in validation but absent in train will break prediction."
    ],
    "code": "pd.concat([X_train['market_id'].value_counts(normalize=True), X_test['market_id'].value_counts(normalize=True)], axis=1, keys=['train','valid'])",
    "lotus": "Branch shares in train and validation should be close. If Thu Duc exists only in validation, the model has never seen it.",
    "trap": "A new group in validation makes get_dummies produce different columns between the two sets."
   }
  },
  "4.1.3": {
   "vi": {
    "think": "Phân phối biến mục tiêu ở validation: so với train.",
    "steps": [
     "Vẽ histogram y_test, đặt cạnh y_train.",
     "So trung bình và độ lệch chuẩn: file của bạn có train gần trung bình 46,2 phút.",
     "Hai số này gần nhau thì chia ngẫu nhiên là hợp lý."
    ],
    "code": "print(y_train.describe().round(1)); print(y_test.describe().round(1))",
    "lotus": "Thời gian chờ trung bình của tháng 11 và tháng 12 mà khác nhau nhiều thì có chuyện gì đó khác ngoài ngẫu nhiên.",
    "trap": "Hai trung bình lệch vài phút là bình thường với mẫu lớn, nhưng lệch nhiều là dấu hiệu chia chưa tốt."
   },
   "en": {
    "think": "Target distribution in validation versus train.",
    "steps": [
     "Draw a histogram of y_test next to y_train.",
     "Compare mean and standard deviation: your train mean is near 46.2 minutes.",
     "If close, the random split is reasonable."
    ],
    "code": "print(y_train.describe().round(1)); print(y_test.describe().round(1))",
    "lotus": "If average wait differs a lot between November and December, something other than chance is going on.",
    "trap": "A few minutes' gap is normal in a large sample, but a big one signals a poor split."
   }
  },
  "4.2": {
   "vi": {
    "think": "Phân tán giữa time_taken và các biến số ở validation, để so với train.",
    "steps": [
     "Ghép X_test và y_test.",
     "Vẽ scatter distance và subtotal với time_taken.",
     "So hình dạng với train."
    ],
    "code": "val = X_test.copy(); val['time_taken'] = y_test\nsns.scatterplot(data=val.sample(5000, random_state=42), x='distance', y='time_taken', alpha=0.3)",
    "lotus": "Quan hệ giữa khoảng cách và thời gian chờ ở validation phải đi cùng chiều với train.",
    "trap": "Nếu chiều quan hệ đảo ngược giữa train và validation thì mô hình sẽ không khái quát hóa."
   },
   "en": {
    "think": "Scatter time_taken against numeric features on validation, to compare with train.",
    "steps": [
     "Join X_test and y_test.",
     "Scatter distance and subtotal against time_taken.",
     "Compare shape with train."
    ],
    "code": "val = X_test.copy(); val['time_taken'] = y_test\nsns.scatterplot(data=val.sample(5000, random_state=42), x='distance', y='time_taken', alpha=0.3)",
    "lotus": "The relation between distance and wait on validation should run the same direction as train.",
    "trap": "If the relation direction reverses between train and validation, the model will not generalise."
   }
  },
  "4.3": {
   "vi": {
    "think": "Bỏ đúng những cột đã bỏ ở train (bài 3.3.2) khỏi validation.",
    "steps": [
     "Dùng cùng danh sách weak đã chọn.",
     "X_test = X_test.drop(columns=weak).",
     "Kiểm tra X_train.columns bằng X_test.columns."
    ],
    "code": "X_test = X_test.drop(columns=weak, errors='ignore')\nprint(list(X_train.columns) == list(X_test.columns))",
    "lotus": "Hai sổ phải có cùng các cột theo cùng thứ tự, nếu không phép so sánh táo với cam.",
    "trap": "Thứ tự cột khác nhau làm sai kết quả dự đoán mà không báo lỗi."
   },
   "en": {
    "think": "Drop exactly the columns dropped on train (task 3.3.2) from validation.",
    "steps": [
     "Use the same weak list.",
     "X_test = X_test.drop(columns=weak).",
     "Check X_train.columns equals X_test.columns."
    ],
    "code": "X_test = X_test.drop(columns=weak, errors='ignore')\nprint(list(X_train.columns) == list(X_test.columns))",
    "lotus": "The two logs must have the same columns in the same order, or the comparison is apples to oranges.",
    "trap": "A different column order corrupts predictions without raising an error."
   }
  },
  "5.1": {
   "vi": {
    "think": "Chuẩn hóa thang đo để các hệ số so sánh được với nhau. Hồi quy tuyến tính không cần chuẩn hóa, nhưng hệ số sẽ dễ đọc hơn.",
    "steps": [
     "Dùng StandardScaler hoặc MinMaxScaler cho các cột số.",
     "fit trên train, rồi transform cả train và validation (không fit lại trên validation).",
     "Giữ lại bộ scaler để quy đổi hệ số về thang gốc ở 6.2."
    ],
    "code": "from sklearn.preprocessing import StandardScaler\nnum = X_train.select_dtypes(include='number').columns\nscaler = StandardScaler()\nX_train[num] = scaler.fit_transform(X_train[num])\nX_test[num] = scaler.transform(X_test[num])",
    "lotus": "Khoảng cách tính bằng km (0 đến 83) và giá trị đơn tính bằng nghìn (0 đến 26.800) có thang rất khác. Chuẩn hóa để hệ số của hai biến đặt cạnh nhau được.",
    "trap": "fit scaler trên cả train và validation làm lộ trung bình và độ lệch chuẩn của validation."
   },
   "en": {
    "think": "Put features on a common scale so coefficients are comparable. Linear regression does not need scaling, but coefficients become easier to read.",
    "steps": [
     "Use StandardScaler or MinMaxScaler on numeric columns.",
     "fit on train, then transform both train and validation (do not refit on validation).",
     "Keep the scaler to convert coefficients back to the original scale in 6.2."
    ],
    "code": "from sklearn.preprocessing import StandardScaler\nnum = X_train.select_dtypes(include='number').columns\nscaler = StandardScaler()\nX_train[num] = scaler.fit_transform(X_train[num])\nX_test[num] = scaler.transform(X_test[num])",
    "lotus": "Distance in km (0 to 83) and order value in thousands (0 to 26,800) have very different scales. Scale so their coefficients sit side by side.",
    "trap": "Fitting the scaler on train and validation together leaks validation's mean and standard deviation."
   }
  },
  "5.2": {
   "vi": {
    "think": "Dựng hồi quy tuyến tính bằng statsmodels hoặc scikit-learn, huấn luyện, dự đoán, rồi đo.",
    "steps": [
     "Chuyển cột nhóm thành dummy (get_dummies, drop_first=True) trước khi fit.",
     "LinearRegression().fit(X_train, y_train).",
     "Dự đoán trên cả train và validation.",
     "Đo R², RMSE (và MAE nếu muốn) trên cả hai tập."
    ],
    "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import r2_score, mean_squared_error\nlr = LinearRegression().fit(X_train, y_train)\nfor name, X, y in [('train', X_train, y_train), ('valid', X_test, y_test)]:\n    p = lr.predict(X)\n    print(name, 'R2', round(r2_score(y, p), 3), 'RMSE', round(mean_squared_error(y, p) ** 0.5, 2))",
    "lotus": "Mô hình đoán khách chờ 47 phút trong khi thực tế là 45. RMSE là cỡ sai lệch trung bình của những lần đoán như vậy, tính bằng phút.",
    "trap": "R² cao ở train mà thấp ở validation là quá khớp. Luôn nhìn cả hai."
   },
   "en": {
    "think": "Build a linear regression with statsmodels or scikit-learn, train, predict, then measure.",
    "steps": [
     "Turn categorical columns into dummies (get_dummies, drop_first=True) before fitting.",
     "LinearRegression().fit(X_train, y_train).",
     "Predict on both train and validation.",
     "Measure R² and RMSE (and MAE if you like) on both sets."
    ],
    "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import r2_score, mean_squared_error\nlr = LinearRegression().fit(X_train, y_train)\nfor name, X, y in [('train', X_train, y_train), ('valid', X_test, y_test)]:\n    p = lr.predict(X)\n    print(name, 'R2', round(r2_score(y, p), 3), 'RMSE', round(mean_squared_error(y, p) ** 0.5, 2))",
    "lotus": "The model guesses a 47-minute wait when the real one is 45. RMSE is the typical size of such misses, in minutes.",
    "trap": "High R² on train and low on validation is overfitting. Always look at both."
   }
  },
  "5.3": {
   "vi": {
    "think": "RFE bỏ dần từng biến yếu nhất. Chọn số biến mà thêm nữa cũng không cải thiện đáng kể.",
    "steps": [
     "Vòng lặp n_features_to_select từ 1 đến số cột; mỗi lần fit RFE rồi tính điểm trên validation.",
     "Vẽ điểm theo số biến và chọn khuỷu (nơi đường bắt đầu phẳng). Đề gợi ý 8 biến.",
     "Dựng mô hình cuối với số biến đó và liệt kê các biến được giữ."
    ],
    "code": "from sklearn.feature_selection import RFE\nscores = {}\nfor k in range(1, X_train.shape[1] + 1):\n    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(X_train, y_train)\n    cols = X_train.columns[rfe.support_]\n    m = LinearRegression().fit(X_train[cols], y_train)\n    scores[k] = r2_score(y_test, m.predict(X_test[cols]))\npd.Series(scores).plot(marker='o')",
    "lotus": "Giống chọn bao nhiêu hạng mục để đưa vào bảng khảo sát: sau mức nào đó thêm câu hỏi không làm thông tin tăng thêm bao nhiêu.",
    "trap": "Chọn số biến theo điểm trên train luôn chọn nhiều nhất. Dùng điểm trên validation."
   },
   "en": {
    "think": "RFE drops the weakest feature one at a time. Choose the number of features beyond which adding more barely helps.",
    "steps": [
     "Loop n_features_to_select from 1 to the column count; for each, fit RFE and score on validation.",
     "Plot the score against the number of features and choose the elbow (where the line flattens). The brief hints at 8 features.",
     "Build the final model with that many features and list the kept ones."
    ],
    "code": "from sklearn.feature_selection import RFE\nscores = {}\nfor k in range(1, X_train.shape[1] + 1):\n    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(X_train, y_train)\n    cols = X_train.columns[rfe.support_]\n    m = LinearRegression().fit(X_train[cols], y_train)\n    scores[k] = r2_score(y_test, m.predict(X_test[cols]))\npd.Series(scores).plot(marker='o')",
    "lotus": "Like choosing how many items to put on a survey: beyond some level, extra questions add little information.",
    "trap": "Choosing the number by train score always picks the most. Use validation score."
   }
  },
  "6.1": {
   "vi": {
    "think": "Phân tích phần dư: vẽ phần dư theo giá trị dự đoán, Q-Q plot và histogram phần dư để kiểm tra các giả định của hồi quy.",
    "steps": [
     "residual = y_test − dự đoán.",
     "Phần dư theo dự đoán: phải rải quanh 0 không có hình dạng (nếu loe hình phễu là phương sai không đều).",
     "Q-Q plot và histogram: gần chuông chuẩn thì giả định chuẩn hợp lý.",
     "Viết nhận xét vào ô [Your inferences here:]."
    ],
    "code": "pred = final_model.predict(X_test[cols])\nres = y_test - pred\nplt.scatter(pred, res, alpha=0.2); plt.axhline(0, color='r'); plt.show()\nimport statsmodels.api as sm\nsm.qqplot(res, line='45', fit=True); plt.show()\nsns.histplot(res, bins=40, kde=True)",
    "lotus": "Nếu mô hình luôn đoán thấp cho khách chờ rất lâu (phần dư dương lớn ở bên phải) thì có một nhóm đơn mà mô hình chưa hiểu.",
    "trap": "Chỉ nhìn R² mà bỏ qua phần dư bỏ lỡ các mẫu hình cho thấy mô hình sai ở đâu."
   },
   "en": {
    "think": "Residual analysis: plot residuals against predictions, a Q-Q plot and a residual histogram to check regression assumptions.",
    "steps": [
     "residual = y_test − prediction.",
     "Residuals vs predicted: should scatter around 0 with no shape (a funnel means uneven variance).",
     "Q-Q plot and histogram: near a bell shape means the normality assumption is reasonable.",
     "Write your findings in the [Your inferences here:] cell."
    ],
    "code": "pred = final_model.predict(X_test[cols])\nres = y_test - pred\nplt.scatter(pred, res, alpha=0.2); plt.axhline(0, color='r'); plt.show()\nimport statsmodels.api as sm\nsm.qqplot(res, line='45', fit=True); plt.show()\nsns.histplot(res, bins=40, kde=True)",
    "lotus": "If the model always underguesses for very long waits (large positive residuals on the right) there is a group of orders the model does not understand.",
    "trap": "Looking at R² only and skipping residuals misses patterns that show where the model is wrong."
   }
  },
  "6.2": {
   "vi": {
    "think": "Phân tích hệ số: so sánh hệ số trên dữ liệu đã chuẩn hóa và hệ số quy đổi về thang gốc, rồi nói một đơn vị thay đổi của một biến làm time_taken đổi bao nhiêu phút.",
    "steps": [
     "Hệ số chuẩn hóa: so độ mạnh giữa các biến (đơn vị là độ lệch chuẩn).",
     "Hệ số gốc = hệ số chuẩn hóa chia cho độ lệch chuẩn của biến đó (scaler.scale_).",
     "Diễn giải theo đơn vị gốc: tăng 1 món (total_items) thì thời gian chờ đổi bao nhiêu phút, giữ các biến khác cố định.",
     "Chú ý dấu và độ lớn."
    ],
    "code": "coef_scaled = pd.Series(final_model.coef_, index=cols)\nscale = pd.Series(scaler.scale_, index=num)\ncoef_orig = coef_scaled[cols.intersection(num)] / scale[cols.intersection(num)]\nprint(pd.DataFrame({'scaled': coef_scaled, 'original': coef_orig}))\n# effect of +1 total_items on time_taken: coef_orig['total_items'] minutes",
    "lotus": "Nếu hệ số gốc của số đơn đang chờ là 0,1 thì thêm 10 đơn đang chờ làm khách chờ thêm khoảng 1 phút, giữ mọi thứ khác không đổi.",
    "trap": "Hệ số chuẩn hóa so được độ mạnh, nhưng muốn nói «thêm 1 đơn thì mấy phút» phải dùng hệ số thang gốc."
   },
   "en": {
    "think": "Coefficient analysis: compare coefficients on standardised data with coefficients converted to the original scale, then say how much one unit of a feature changes time_taken in minutes.",
    "steps": [
     "Scaled coefficients: compare strength across features (unit is standard deviations).",
     "Original coefficient = scaled coefficient divided by the feature's standard deviation (scaler.scale_).",
     "Interpret in original units: one more item (total_items) changes the wait by how many minutes, holding other features fixed.",
     "Mind sign and size."
    ],
    "code": "coef_scaled = pd.Series(final_model.coef_, index=cols)\nscale = pd.Series(scaler.scale_, index=num)\ncoef_orig = coef_scaled[cols.intersection(num)] / scale[cols.intersection(num)]\nprint(pd.DataFrame({'scaled': coef_scaled, 'original': coef_orig}))\n# effect of +1 total_items on time_taken: coef_orig['total_items'] minutes",
    "lotus": "If the original coefficient for pending orders is 0.1, then 10 more pending orders add about 1 minute to the wait, holding everything else constant.",
    "trap": "Scaled coefficients compare strength, but to say “one more order is how many minutes” you need the original-scale coefficient."
   }
  },
  "Q1": {
   "vi": {
    "think": "Có cột nhóm nào, và từ các biểu đồ của bạn có thể nói gì về ảnh hưởng lên thời gian giao?",
    "steps": [
     "Liệt kê các cột nhóm: market_id, order_protocol, store_primary_category, isWeekend (và hour nếu coi là nhóm).",
     "Dựa vào biểu đồ 3.1.2 và boxplot theo nhóm: nhóm nào có time_taken trung bình khác rõ.",
     "Nói chắc chắn hay dè dặt tùy mức khác biệt."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Chi nhánh nào có thời gian chờ trung bình cao hơn rõ rệt thì chi nhánh là một yếu tố, không chỉ là nhãn.",
    "trap": "Nói «ảnh hưởng» chỉ từ một biểu đồ đếm số đơn mà không so time_taken theo nhóm là chưa trả lời câu hỏi."
   },
   "en": {
    "think": "Which categorical columns exist, and what can your charts say about their effect on delivery time?",
    "steps": [
     "List the categorical columns: market_id, order_protocol, store_primary_category, isWeekend (and hour if you treat it as a group).",
     "Use the 3.1.2 charts and per-group boxplots: which groups have a clearly different mean time_taken.",
     "State firmly or cautiously depending on the size of the gap."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "A branch with a clearly higher average wait means branch is a factor, not just a label.",
    "trap": "Claiming “effect” from a count chart alone, without comparing time_taken by group, does not answer the question."
   }
  },
  "Q2": {
   "vi": {
    "think": "test_size = 0.2 nghĩa là gì?",
    "steps": [
     "20% số dòng dành cho tập kiểm tra, 80% còn lại để huấn luyện.",
     "Với file của bạn: 175.777 dòng, khoảng 35.100 dòng cho test.",
     "Vai trò: đo mô hình trên dữ liệu chưa từng thấy."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Giống để một phần sổ booking sang một bên để thử đoán sau khi đã rút quy luật từ phần còn lại.",
    "trap": "Nhầm 0,2 là 2 hoặc 20 dòng thay vì 20% số dòng."
   },
   "en": {
    "think": "What does test_size = 0.2 mean?",
    "steps": [
     "20% of rows are held out for testing, the other 80% for training.",
     "In your file: 175,777 rows, about 35,100 for test.",
     "Role: measure the model on data it has never seen."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "Like setting part of the booking log aside to test guesses after learning the rule from the rest.",
    "trap": "Mistaking 0.2 for 2 or 20 rows instead of 20% of rows."
   }
  },
  "Q3": {
   "vi": {
    "think": "Trên bản đồ nhiệt, biến nào có tương quan cao nhất với biến mục tiêu?",
    "steps": [
     "Đọc hàng time_taken của heatmap.",
     "Trong file của bạn, mạnh nhất là distance (khoảng 0,46), rồi subtotal (khoảng 0,41).",
     "Nêu cả số và dấu. Nhớ kết quả của bạn phụ thuộc vào các bước làm sạch bạn đã chọn."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Yếu tố đi cùng thời gian chờ mạnh nhất cho bạn biết nên đưa vào mô hình trước.",
    "trap": "Trả lời bằng tên biến mà không nêu số hệ số. Dẫn cả hai."
   },
   "en": {
    "think": "On the heatmap, which feature has the highest correlation with the target?",
    "steps": [
     "Read the time_taken row of the heatmap.",
     "In your file the strongest is distance (about 0.46), then subtotal (about 0.41).",
     "Give both number and sign. Remember your result depends on the cleaning choices you made."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "The factor that moves most with wait time tells you what to put in the model first.",
    "trap": "Answering with the feature name but no coefficient. Cite both."
   }
  },
  "Q4": {
   "vi": {
    "think": "Bạn phát hiện điểm xa bằng cách nào và xử lý ra sao?",
    "steps": [
     "Nêu phương pháp: boxplot, IQR hoặc phân vị 99, kiểm tra giá trị không thể có (âm).",
     "Nêu quy tắc cho từng loại: bỏ lỗi nhập, giới hạn điểm xa hiếm.",
     "Ghi số dòng bị bỏ và vì sao chọn vậy."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Số nhân viên âm bỏ hẳn, booking 411 gói giới hạn ở mức phân vị 99. Hai quy tắc khác nhau vì hai nguyên nhân khác nhau.",
    "trap": "Nói «tôi bỏ điểm xa» chung chung mà không nói bỏ theo quy tắc nào."
   },
   "en": {
    "think": "How did you detect outliers and how did you handle them?",
    "steps": [
     "State the method: boxplot, IQR or 99th percentile, checking impossible (negative) values.",
     "State the rule per type: drop entry errors, cap rare extremes.",
     "Record rows removed and why you chose so."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "A negative staff count is dropped, a 411-package booking is capped at the 99th percentile. Two rules because two different causes.",
    "trap": "Saying “I removed outliers” without saying by what rule."
   }
  },
  "Q5": {
   "vi": {
    "think": "Dựa trên mô hình cuối, ba biến nào ảnh hưởng đáng kể nhất đến thời gian giao?",
    "steps": [
     "Lấy hệ số đã chuẩn hóa của mô hình cuối (6.2).",
     "Xếp theo trị tuyệt đối, lấy ba biến đầu.",
     "Nêu dấu và ý nghĩa của từng biến."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Ba yếu tố đầu bảng cho bạn biết nên can thiệp vào đâu để rút ngắn thời gian chờ.",
    "trap": "Xếp theo hệ số chưa chuẩn hóa so sánh táo với cam, vì thang đo khác nhau."
   },
   "en": {
    "think": "Based on the final model, which three features most significantly affect delivery time?",
    "steps": [
     "Take the final model's standardised coefficients (6.2).",
     "Rank by absolute value and take the top three.",
     "State sign and meaning for each."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "The top three factors tell you where to intervene to shorten the wait.",
    "trap": "Ranking by unscaled coefficients compares apples with oranges, since scales differ."
   }
  },
  "Q6": {
   "vi": {
    "think": "Giải thích chi tiết thuật toán hồi quy tuyến tính.",
    "steps": [
     "Mô hình: y = β0 + β1x1 + … + ε.",
     "Tìm β sao cho tổng bình phương sai số nhỏ nhất (bình phương tối thiểu).",
     "Các giả định: tuyến tính, sai số độc lập, phương sai đều, sai số xấp xỉ chuẩn, không đa cộng tuyến mạnh.",
     "Đầu ra: hệ số và dự đoán."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Đường thẳng nối khoảng cách và thời gian chờ sao cho các khoảng cách dọc từ điểm đến đường nhỏ nhất.",
    "trap": "Chỉ nói «vẽ đường thẳng qua các điểm» mà bỏ phần tối thiểu hóa sai số và các giả định."
   },
   "en": {
    "think": "Explain the linear regression algorithm in detail.",
    "steps": [
     "Model: y = β0 + β1x1 + … + ε.",
     "Find β minimising the sum of squared errors (least squares).",
     "Assumptions: linearity, independent errors, equal variance, roughly normal errors, no strong multicollinearity.",
     "Output: coefficients and predictions."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "A line linking distance and wait so that vertical gaps from points to the line are smallest.",
    "trap": "Saying only “draw a line through the points” and skipping error minimisation and assumptions."
   }
  },
  "Q7": {
   "vi": {
    "think": "Khác nhau giữa hồi quy tuyến tính đơn và đa biến?",
    "steps": [
     "Đơn: một biến đầu vào, y = β0 + β1x.",
     "Đa biến: nhiều biến đầu vào, mỗi hệ số được hiểu giữ các biến khác cố định.",
     "Đa biến cần chú ý đa cộng tuyến và chọn biến."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Dự đoán thời gian chờ chỉ từ khoảng cách (đơn) so với từ khoảng cách, số đơn đang chờ và giờ đặt (đa).",
    "trap": "Quên rằng hệ số của đa biến chỉ có nghĩa «giữ các biến khác cố định»."
   },
   "en": {
    "think": "What is the difference between simple and multiple linear regression?",
    "steps": [
     "Simple: one input, y = β0 + β1x.",
     "Multiple: several inputs, each coefficient read holding the others fixed.",
     "Multiple needs attention to multicollinearity and feature selection."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "Predicting wait from distance alone (simple) versus from distance, pending orders and order hour (multiple).",
    "trap": "Forgetting that a multiple-regression coefficient means “holding the others fixed”."
   }
  },
  "Q8": {
   "vi": {
    "think": "Hàm chi phí trong hồi quy tuyến tính có vai trò gì và được tối thiểu hóa thế nào?",
    "steps": [
     "Hàm chi phí đo độ sai của mô hình: trung bình bình phương sai số (MSE).",
     "Mục tiêu là chọn hệ số làm nó nhỏ nhất.",
     "Cách tối thiểu hóa: nghiệm đóng (phương trình chuẩn) hoặc hạ gradient lặp lại."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Hàm chi phí là điểm số của một cách vẽ đường: đường nào cho tổng sai lệch nhỏ hơn thì tốt hơn.",
    "trap": "Nhầm hàm chi phí với R²: R² là thước đo sau khi huấn luyện, chi phí là thứ được tối thiểu hóa lúc huấn luyện."
   },
   "en": {
    "think": "What is the role of the cost function in linear regression and how is it minimised?",
    "steps": [
     "The cost function measures model error: mean squared error (MSE).",
     "The goal is to choose coefficients that make it smallest.",
     "Minimised by the closed form (normal equation) or by iterative gradient descent."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "The cost function is the score of a way of drawing the line: the line with smaller total miss is better.",
    "trap": "Confusing cost with R²: R² is a measure after training, cost is what is minimised during training."
   }
  },
  "Q9": {
   "vi": {
    "think": "Khác nhau giữa quá khớp và chưa khớp?",
    "steps": [
     "Quá khớp: tốt ở train nhưng kém ở dữ liệu mới, mô hình học cả nhiễu.",
     "Chưa khớp: kém ở cả hai, mô hình quá đơn giản.",
     "Dấu hiệu: khoảng cách giữa điểm train và điểm validation.",
     "Cách xử lý: bớt hoặc thêm biến, chọn mô hình khác."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Một mô hình nhớ từng booking của tháng 11 (quá khớp) so với một mô hình chỉ đoán 45 phút cho mọi người (chưa khớp).",
    "trap": "Chỉ nhìn điểm ở train rồi kết luận mô hình tốt."
   },
   "en": {
    "think": "What is the difference between overfitting and underfitting?",
    "steps": [
     "Overfitting: good on train but poor on new data, the model learned noise too.",
     "Underfitting: poor on both, the model is too simple.",
     "Sign: the gap between train and validation scores.",
     "Fixes: drop or add features, choose another model."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "A model memorising each November booking (overfit) versus one that guesses 45 minutes for everyone (underfit).",
    "trap": "Judging a model good from its train score alone."
   }
  },
  "Q10": {
   "vi": {
    "think": "Biểu đồ phần dư giúp chẩn đoán mô hình thế nào?",
    "steps": [
     "Phần dư theo dự đoán: có hình dạng hay hình phễu thì giả định bị vi phạm.",
     "Q-Q plot và histogram: kiểm tra phần dư có gần chuẩn.",
     "Phần dư theo thứ tự thời gian: phát hiện tự tương quan.",
     "Điểm phần dư lớn bất thường chỉ ra đơn cần xem lại."
    ],
    "code": "# Câu trả lời viết bằng chữ trong ô Answer của notebook",
    "lotus": "Nếu mô hình đoán thấp mọi lúc ở giờ cao điểm thì phần dư theo giờ có hình dạng, và bạn thiếu một biến liên quan đến giờ.",
    "trap": "Chỉ nói «phần dư nên quanh 0» mà không nói hình dạng nào là dấu hiệu xấu."
   },
   "en": {
    "think": "How do residual plots help in diagnosing a linear regression model?",
    "steps": [
     "Residuals vs predicted: a pattern or funnel means assumptions are violated.",
     "Q-Q plot and histogram: check whether residuals are near normal.",
     "Residuals over time: detect autocorrelation.",
     "Unusually large residuals point to orders worth reviewing."
    ],
    "code": "# Write the answer in words in the notebook's Answer cell",
    "lotus": "If the model underguesses at every peak hour, residuals by hour show a shape and you are missing an hour-related feature.",
    "trap": "Saying only “residuals should be around 0” without saying which shapes are bad signs."
   }
  }
 }
};
