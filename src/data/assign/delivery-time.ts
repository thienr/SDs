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
    "trap": "Trừ hai cột chữ sẽ báo lỗi hoặc ra kết quả vô nghĩa.",
    "read": [
     "Dòng dtype: datetime64 nghĩa là Python đã hiểu hai cột là thời điểm thật, không còn là chữ.",
     "Bảng mẫu: so created_at và actual_delivery_time; mốc giao luôn sau mốc đặt."
    ],
    "remark": "Hai cột đã thành datetime; ví dụ đơn đầu đặt 22:24 và giao 23:11, tức 47 phút, nên giờ có thể trừ cho nhau.",
    "howRemark": [
     "Kiểm kiểu dữ liệu trước và sau khi đổi.",
     "Tự trừ tay một dòng mẫu để kiểm tra.",
     "Ghi một câu: vì sao phải đổi kiểu."
    ]
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
    "trap": "Subtracting two text columns errors out or gives nonsense.",
    "read": [
     "The dtype line: datetime64 means Python now reads the columns as real timestamps, not text.",
     "Sample table: compare created_at and actual_delivery_time; delivery always follows creation."
    ],
    "remark": "Both columns are now datetime; e.g. the first order was placed 22:24 and delivered 23:11, i.e. 47 minutes, so times can be subtracted.",
    "howRemark": [
     "Check the dtype before and after.",
     "Subtract one sample row by hand to verify.",
     "Write one sentence: why the type had to change."
    ]
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
    "trap": "Để mã ở kiểu số thì hồi quy sẽ gán một hệ số chung cho mã, như thể mã 6 gấp 6 lần mã 1.",
    "read": [
     "Mỗi dòng là số giá trị khác nhau của một cột mã: market_id 6, order_protocol 7, store_primary_category 73.",
     "Cột có ít giá trị (6, 7) thành nhóm dễ; cột có 73 giá trị phải thận trọng vì nhiều nhóm sẽ rất ít đơn."
    ],
    "remark": "Ba cột mã được xem là nhóm (6, 7 và 73 giá trị). store_primary_category có 73 nhóm nên khi mã hóa sẽ sinh rất nhiều cột và nhiều nhóm có ít đơn.",
    "howRemark": [
     "Nêu số nhóm của từng cột.",
     "Phân biệt mã với số đo được.",
     "Dự báo hệ quả khi mã hóa cột có nhiều nhóm."
    ]
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
    "trap": "Leaving codes numeric makes regression assign one coefficient to the code, as if code 6 were six times code 1.",
    "read": [
     "Each line is the number of distinct values of a code column: market_id 6, order_protocol 7, store_primary_category 73.",
     "Few values (6, 7) make easy groups; 73 values call for care because many groups will have very few orders."
    ],
    "remark": "Three code columns are treated as categories (6, 7 and 73 values). store_primary_category has 73, so encoding creates many columns and many thin groups.",
    "howRemark": [
     "State each column's number of groups.",
     "Distinguish codes from measurable numbers.",
     "Predict the consequence of encoding a column with many groups."
    ]
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
    "trap": "Dùng .dt.seconds thay vì total_seconds làm mất phần ngày khi chênh qua nửa đêm.",
    "read": [
     "count là số đơn (175.777), mean là trung bình, 50% là trung vị.",
     "So mean 46,2 với trung vị 45: gần nhau là phân phối cân; max 110 xa hẳn 75% (52) là đuôi dài bên phải."
    ],
    "remark": "Một đơn mất trung bình 46,2 phút (độ lệch chuẩn 9,3), nửa số đơn giao trong 45 phút. Có vài đơn rất lâu (tối đa 110 phút), nên phân phối có đuôi phải.",
    "howRemark": [
     "Báo trung bình và trung vị.",
     "Dùng độ lệch chuẩn để nói mức dao động.",
     "So max với 75% để nói về đuôi.",
     "Nêu biến này là mục tiêu của cả bài."
    ]
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
    "trap": "Using .dt.seconds instead of total_seconds drops the day part when the gap crosses midnight.",
    "read": [
     "count is the number of orders (175,777), mean the average, 50% the median.",
     "Mean 46.2 vs median 45 close means balanced; max 110 far above the 75% value (52) is a long right tail."
    ],
    "remark": "An order takes 46.2 minutes on average (std 9.3); half are delivered within 45. A few take very long (max 110), so the distribution has a right tail.",
    "howRemark": [
     "Report the mean and median.",
     "Use std to describe spread.",
     "Compare max with 75% to describe the tail.",
     "State this is the target of the whole assignment."
    ]
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
    "trap": "Giữ lại actual_delivery_time khi dự đoán là rò rỉ đáp án: bạn đã biết kết quả trước khi đoán.",
    "read": [
     "Bảng là thời gian giao trung bình theo giờ đặt; mỗi dòng là một giờ.",
     "Nhìn hai đầu của bảng: giờ 2 khoảng 50,7 phút, giờ 21 khoảng 40,1 phút.",
     "Biểu đồ là cùng dữ liệu để xem hình dạng."
    ],
    "remark": "Giao chậm nhất đơn đặt khoảng 2h sáng (~50,7 phút) và nhanh nhất khoảng 21h (~40,1 phút). Giờ đặt có ảnh hưởng, nên giữ hour làm biến vào mô hình.",
    "howRemark": [
     "Nêu giờ cao nhất và thấp nhất kèm số.",
     "Tính chênh (khoảng 10 phút).",
     "Kết luận: có giữ biến hay không."
    ]
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
    "trap": "Keeping actual_delivery_time when predicting leaks the answer: you already know the result before guessing.",
    "read": [
     "The table is mean delivery time by order hour; each row is one hour.",
     "Look at both ends: hour 2 about 50.7 min, hour 21 about 40.1 min.",
     "The chart shows the same data as a shape."
    ],
    "remark": "Slowest for orders around 2am (~50.7 min), fastest around 9pm (~40.1 min). Hour matters, so keep hour as a model input.",
    "howRemark": [
     "Name the highest and lowest hours with numbers.",
     "Compute the gap (about 10 minutes).",
     "Conclude whether to keep the variable."
    ]
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
    "trap": "Để time_taken lọt vào X làm mô hình đạt điểm gần tuyệt đối, một kết quả giả.",
    "read": [
     "Hai bộ số là hình dạng: X có 175.777 dòng và 15 cột, y có 175.777 giá trị.",
     "Số dòng X và y phải bằng nhau."
    ],
    "remark": "X có 175.777 dòng × 15 cột và y có 175.777 giá trị: khớp nhau, sẵn sàng chia train/test.",
    "howRemark": [
     "Kiểm số dòng hai bên bằng nhau.",
     "Nói cột nào là y và vì sao tách."
    ]
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
    "trap": "Letting time_taken slip into X gives a near-perfect score, a fake result.",
    "read": [
     "Two shapes: X has 175,777 rows and 15 columns, y has 175,777 values.",
     "Row counts of X and y must be equal."
    ],
    "remark": "X is 175,777 rows × 15 columns and y has 175,777 values: they match, ready to split.",
    "howRemark": [
     "Check both row counts match.",
     "Say which column is y and why it is split off."
    ]
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
    "trap": "Khám phá trên toàn bộ dữ liệu rồi mới chia làm lộ thông tin của test vào các quyết định của bạn.",
    "read": [
     "Hai số: 140.621 dòng cho train và 35.156 dòng cho test.",
     "Chia tỷ lệ: 140.621 / 175.777 ≈ 80%."
    ],
    "remark": "Chia 80/20: train 140.621 đơn, test 35.156 đơn; test được giữ riêng chưa nhìn vào.",
    "howRemark": [
     "Tính lại tỷ lệ chia.",
     "Nhắc random_state để lặp lại được.",
     "Giải thích vì sao chia trước khi khám phá."
    ]
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
    "trap": "Exploring all the data before splitting leaks test information into your decisions.",
    "read": [
     "Two numbers: 140,621 rows for train and 35,156 for test.",
     "The split ratio: 140,621 / 175,777 ≈ 80%."
    ],
    "remark": "An 80/20 split: 140,621 train orders and 35,156 test orders; the test part is kept unseen.",
    "howRemark": [
     "Recompute the split ratio.",
     "Mention random_state for repeatability.",
     "Explain why you split before exploring."
    ]
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
    "trap": "Trong file của bạn có số nhân viên trực âm, một lỗi nhập, không phải dữ liệu thật. Hình phân phối là chỗ thấy nó.",
    "read": [
     "Bảng đếm giá trị trống mỗi cột; đa số bằng 0.",
     "Các cột có trống: total_outstanding_orders (34), total_onshift_dashers (20), total_busy_dashers (16), min_item_price (11).",
     "Biểu đồ: mỗi ô là phân phối một cột; xem cột nào lệch hẳn một bên."
    ],
    "remark": "Chỉ vài chục dòng thiếu dữ liệu ở 4 cột, rất ít so với 140.621 dòng nên có thể bỏ hoặc điền dễ dàng. Phân phối của số lượng món và tiền đơn lệch phải, có đuôi dài.",
    "howRemark": [
     "Nêu cột nào thiếu và bao nhiêu.",
     "So với tổng số dòng để kết luận mức nghiêm trọng.",
     "Mô tả hình dạng từng phân phối.",
     "Quyết định xử lý và nói lý do."
    ]
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
    "trap": "Your file has a negative count of staff on shift, an entry error, not real data. The distribution plot is where you see it.",
    "read": [
     "The table counts blanks per column; most are 0.",
     "Columns with blanks: total_outstanding_orders (34), total_onshift_dashers (20), total_busy_dashers (16), min_item_price (11).",
     "Charts: each panel is one column's distribution; see which are clearly skewed."
    ],
    "remark": "Only a few dozen rows are missing in 4 columns, tiny against 140,621 rows, so they can be dropped or filled easily. Item count and subtotal are right-skewed with long tails.",
    "howRemark": [
     "Name which columns are missing and how many.",
     "Compare with total rows to judge severity.",
     "Describe each distribution's shape.",
     "Decide the treatment and say why."
    ]
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
    "trap": "Vẽ 73 cột của store_primary_category vào một biểu đồ cho ra một khối chữ không đọc được.",
    "read": [
     "Mỗi biểu đồ cột là một cột nhóm; chiều cao là số đơn của nhóm.",
     "Tìm nhóm quá thấp: market 6 chỉ ~0,4% đơn."
    ],
    "remark": "Phần lớn đơn nằm ở vài nhóm lớn; market_id 6 gần như không có đơn (~0,4%) nên hệ số của nhóm này sẽ không ổn định.",
    "howRemark": [
     "Nêu nhóm lớn nhất và nhỏ nhất.",
     "Nói nhóm nhỏ ảnh hưởng thế nào đến hệ số.",
     "Đề xuất gộp hoặc để nguyên."
    ]
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
    "trap": "Drawing all 73 bars of store_primary_category in one chart gives an unreadable block of text.",
    "read": [
     "Each bar chart is a categorical column; height is the order count per group.",
     "Find tiny groups: market 6 is only ~0.4% of orders."
    ],
    "remark": "Most orders sit in a few big groups; market_id 6 has almost none (~0.4%) so its coefficient will be unstable.",
    "howRemark": [
     "Name the biggest and smallest groups.",
     "Say how a small group affects coefficients.",
     "Suggest merging or leaving as is."
    ]
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
    "trap": "Trung bình cao hơn trung vị là dấu hiệu lệch phải. Đừng chỉ nhìn trung bình.",
    "read": [
     "Hình là phân phối time_taken; dòng chữ là các số tóm tắt.",
     "Trung bình 46,2 và trung vị 45 gần nhau; đuôi bên phải kéo đến 110."
    ],
    "remark": "time_taken tập trung quanh 39–52 phút (từ 25% đến 75%) và có đuôi phải đến 110 phút; không đối xứng hoàn hảo nhưng đủ gần để hồi quy tuyến tính dùng được.",
    "howRemark": [
     "Mô tả đỉnh và độ rộng.",
     "Nói có lệch không và về phía nào.",
     "Kết luận: có cần đổi dạng biến hay không."
    ]
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
    "trap": "A mean above the median signals right skew. Do not look at the mean alone.",
    "read": [
     "The chart is the distribution of time_taken; the text gives summary numbers.",
     "Mean 46.2 and median 45 are close; the right tail stretches to 110."
    ],
    "remark": "time_taken concentrates around 39–52 minutes (25% to 75%) with a right tail to 110; not perfectly symmetric but close enough for linear regression.",
    "howRemark": [
     "Describe the peak and width.",
     "Say whether it is skewed and which way.",
     "Conclude whether the variable needs transforming."
    ]
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
    "trap": "Scatter hơn 100.000 điểm thành một khối đen. Lấy mẫu hoặc dùng alpha.",
    "read": [
     "Mỗi biểu đồ phân tán: trục ngang là một biến, trục dọc là time_taken; xem đám điểm đi lên, đi xuống hay nằm ngang.",
     "Đường dốc rõ nghĩa là biến có liên quan; đám tròn nghĩa là không."
    ],
    "remark": "Đám điểm của distance và subtotal dốc lên nhẹ so với time_taken, còn giờ trong ngày cho thấy chênh nhau giữa các giờ. Các biến này đáng đưa vào mô hình.",
    "howRemark": [
     "Mỗi biểu đồ nói xu hướng một câu.",
     "Dùng từ «dốc lên/ngang/xuống».",
     "Nhớ rằng nhìn bằng mắt cần được xác nhận bằng số ở 3.3.1."
    ]
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
    "trap": "Scattering over 100,000 points makes a black block. Sample or use alpha.",
    "read": [
     "Each scatter: x is a variable, y is time_taken; see if the cloud rises, falls or stays flat.",
     "A clear slope means related; a round blob means unrelated."
    ],
    "remark": "The distance and subtotal clouds slope slightly upward against time_taken, and hour shows differences across hours. These are worth including in the model.",
    "howRemark": [
     "One sentence per chart on the trend.",
     "Use words like rising/flat/falling.",
     "Remember eyeballing needs confirming with numbers in 3.3.1."
    ]
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
    "trap": "Hệ số tương quan giữa hai biến đầu vào cao (ví dụ subtotal và total_items) là tín hiệu đa cộng tuyến, không phải một phát hiện.",
    "read": [
     "Dòng chữ là tương quan của từng biến với time_taken, từ −1 đến 1.",
     "Dương là đi cùng chiều, âm là ngược chiều; càng gần 1 hoặc −1 càng mạnh.",
     "Bản đồ nhiệt: màu đậm là tương quan mạnh."
    ],
    "remark": "distance có tương quan cao nhất (0,461), kế đến subtotal (0,413) và total_outstanding_orders (0,385). hour âm (−0,346): đặt càng muộn trong ngày thì giao càng nhanh. min_item_price (0,021) gần như không liên quan.",
    "howRemark": [
     "Xếp biến theo độ lớn tuyệt đối.",
     "Nói dấu âm hay dương nghĩa là gì.",
     "Chỉ ra biến yếu cần xem lại.",
     "Nhớ tương quan chưa phải nhân quả."
    ]
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
    "trap": "High correlation between two input features (for example subtotal and total_items) signals multicollinearity, not a discovery.",
    "read": [
     "The text lists each variable's correlation with time_taken, from −1 to 1.",
     "Positive means same direction, negative the opposite; closer to 1 or −1 is stronger.",
     "Heatmap: darker is stronger."
    ],
    "remark": "distance has the highest correlation (0.461), then subtotal (0.413) and total_outstanding_orders (0.385). hour is negative (−0.346): later in the day, faster delivery. min_item_price (0.021) is almost unrelated.",
    "howRemark": [
     "Rank variables by absolute value.",
     "Say what a negative or positive sign means.",
     "Point out weak variables to review.",
     "Remember correlation is not causation."
    ]
   }
  },
  "3.3.2": {
   "vi": {
    "think": "Bỏ vài cột tương quan yếu với y để mô hình gọn hơn. Ghi lý do cho từng cột.",
    "steps": [
     "Chọn 3 đến 5 cột có |tương quan| nhỏ với time_taken, trong file của bạn như min_item_price (khoảng 0,02) và day (khoảng 0,05); store_primary_category có 73 nhóm nên cũng bỏ cho gọn.",
     "Chỉ bỏ ở tập train, rồi bỏ đúng các cột đó ở validation (bài 4.3).",
     "Tương quan thấp theo đường thẳng chưa chắc là vô dụng: ghi chú điều đó."
    ],
    "code": "weak = ['min_item_price', 'store_primary_category']  # pick 3-5 and justify\nX_train = X_train.drop(columns=weak)\nX_test = X_test.drop(columns=weak)",
    "lotus": "Mã in phiếu không liên quan thời gian chờ thì bỏ. Nhưng nếu cột có quan hệ cong hay theo nhóm, tương quan đường thẳng thấp có thể đánh lừa.",
    "trap": "Bỏ cột ở train mà quên bỏ ở test làm số cột hai bên khác nhau và mô hình báo lỗi khi dự đoán.",
    "read": [
     "Danh sách là các cột được giữ lại (13 cột) sau khi bỏ cột yếu.",
     "So với 3.3.1: cột bị bỏ là những cột có tương quan gần 0."
    ],
    "remark": "Giữ 13 cột; bỏ các cột tương quan yếu như min_item_price để mô hình gọn hơn mà không mất tín hiệu chính.",
    "howRemark": [
     "Liệt kê cột bỏ và lý do từng cột.",
     "Kiểm cột giữ có đủ biến mạnh ở 3.3.1.",
     "Áp dụng đúng danh sách này cho validation."
    ]
   },
   "en": {
    "think": "Drop a few weakly correlated columns for a leaner model. Write down the reason for each.",
    "steps": [
     "Pick 3 to 5 columns with small |correlation| with time_taken, in your file such as min_item_price (about 0.02) and day (about 0.05); store_primary_category has 73 groups so it is dropped for leanness too.",
     "Drop on train, then drop exactly the same columns on validation (task 4.3).",
     "Low linear correlation does not mean useless: note that."
    ],
    "code": "weak = ['min_item_price', 'store_primary_category']  # pick 3-5 and justify\nX_train = X_train.drop(columns=weak)\nX_test = X_test.drop(columns=weak)",
    "lotus": "A receipt print code unrelated to wait time gets dropped. But if a column relates by curve or by group, a low linear correlation can mislead.",
    "trap": "Dropping on train but forgetting on test leaves different column counts and the model errors at prediction.",
    "read": [
     "The list shows the 13 kept columns after dropping weak ones.",
     "Compare with 3.3.1: dropped columns are the near-zero correlations."
    ],
    "remark": "Keep 13 columns; drop weak ones like min_item_price so the model is leaner without losing the main signals.",
    "howRemark": [
     "List dropped columns with a reason each.",
     "Check the kept columns include the strong ones from 3.3.1.",
     "Apply exactly this list to validation."
    ]
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
    "trap": "Boxplot chỉ gắn cờ điểm xa. Nó không nói điểm đó là lỗi.",
    "read": [
     "Số liệu là giá trị lớn nhất của vài cột: total_items 411, subtotal 26.800, distance 83,52.",
     "Boxplot: các chấm nằm ngoài râu là điểm xa."
    ],
    "remark": "Có đơn 411 món, 26.800 tiền đơn và khoảng cách 83,5: quá xa so với mức thường nên là điểm xa đáng nghi, cần xử lý trước khi huấn luyện.",
    "howRemark": [
     "Nêu giá trị lớn nhất và so với mức thường.",
     "Phân biệt điểm xa thật và lỗi nhập.",
     "Nói cách xử lý ở 3.4.2."
    ]
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
    "trap": "A boxplot only flags outliers. It does not say the point is an error.",
    "read": [
     "The numbers are the maxima of a few columns: total_items 411, subtotal 26,800, distance 83.52.",
     "Boxplot: dots beyond the whiskers are outliers."
    ],
    "remark": "There are orders with 411 items, 26,800 subtotal and 83.5 distance: far beyond normal, suspicious outliers to handle before training.",
    "howRemark": [
     "Quote the max and compare with normal.",
     "Separate genuine extremes from entry errors.",
     "Point to the treatment in 3.4.2."
    ]
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
    "trap": "Tính ngưỡng trên cả train và validation cùng lúc rò rỉ thông tin. Tính trên train rồi mang sang.",
    "read": [
     "Dòng chữ: bỏ 65 dòng vì giá trị âm, bỏ 4.124 dòng điểm xa (phân vị 99), còn 136.432 dòng.",
     "Tổng đã bỏ ≈ 3% (4.189 trên 140.621)."
    ],
    "remark": "Bỏ 65 dòng giá trị âm và 4.124 dòng điểm xa (trên phân vị 99): còn 136.432 dòng, mất khoảng 3% dữ liệu để mô hình không bị kéo bởi vài đơn bất thường.",
    "howRemark": [
     "Báo số dòng bỏ theo từng quy tắc.",
     "Tính % mất.",
     "Nêu lý do cho từng quy tắc.",
     "Áp dụng cùng ngưỡng cho validation."
    ]
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
    "trap": "Computing thresholds on train and validation together leaks information. Compute on train and carry over.",
    "read": [
     "Text: 65 rows dropped for negatives, 4,124 as outliers (99th percentile), leaving 136,432.",
     "Total dropped ≈ 3% (4,189 of 140,621)."
    ],
    "remark": "Dropped 65 negative rows and 4,124 outlier rows (above the 99th percentile): 136,432 remain, losing about 3% so a few odd orders do not pull the model.",
    "howRemark": [
     "Report rows dropped per rule.",
     "Compute the % lost.",
     "Justify each rule.",
     "Apply the same thresholds to validation."
    ]
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
    "trap": "Ở phần này chỉ nhìn, không điều chỉnh train theo những gì thấy ở validation.",
    "read": [
     "Hình lặp lại phân phối cột số nhưng trên validation.",
     "So hình dạng với 3.1.1: giống nhau là tốt."
    ],
    "remark": "Hình dạng các phân phối ở validation giống train, nên mô hình học từ train có cơ sở áp dụng cho validation.",
    "howRemark": [
     "Đặt hai bộ biểu đồ cạnh nhau.",
     "Nói điểm giống và khác.",
     "Kết luận về độ tương đồng."
    ]
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
    "trap": "In this part only look; do not adjust train based on what you see in validation.",
    "read": [
     "The chart repeats the numeric distributions on validation.",
     "Compare the shapes with 3.1.1: similar is good."
    ],
    "remark": "Validation distributions look like train's, so a model trained on train has grounds to work on validation.",
    "howRemark": [
     "Put the two chart sets side by side.",
     "State similarities and differences.",
     "Conclude on similarity."
    ]
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
    "trap": "Một nhóm mới ở validation làm get_dummies sinh cột khác nhau giữa hai tập.",
    "read": [
     "Mỗi dòng là một market, hai cột là tỷ lệ ở train và valid.",
     "Hai cột gần bằng nhau (ví dụ 0,306 và 0,306) là tốt."
    ],
    "remark": "Tỷ lệ các market ở validation gần như trùng train (ví dụ market 2 chiếm 30,6% ở cả hai), nên việc chia không làm lệch cơ cấu.",
    "howRemark": [
     "So từng cặp số.",
     "Nêu chênh lớn nhất.",
     "Kết luận."
    ]
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
    "trap": "A new group in validation makes get_dummies produce different columns between the two sets.",
    "read": [
     "Each row is a market, the two columns are shares in train and valid.",
     "Two columns close to each other (e.g. 0.306 and 0.306) is good."
    ],
    "remark": "Market shares in validation almost equal train's (e.g. market 2 is 30.6% in both), so the split did not distort the mix.",
    "howRemark": [
     "Compare each pair of numbers.",
     "State the largest difference.",
     "Conclude."
    ]
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
    "trap": "Hai trung bình lệch vài phút là bình thường với mẫu lớn, nhưng lệch nhiều là dấu hiệu chia chưa tốt.",
    "read": [
     "Hai bảng tóm tắt time_taken: bảng đầu là train, bảng sau là validation.",
     "So mean, std và các phân vị của hai bảng."
    ],
    "remark": "Trung bình 45,9 ở train và 46,2 ở validation, độ lệch chuẩn 9,1 so với 9,4, phân vị gần nhau: hai tập có cùng phân phối.",
    "howRemark": [
     "Đặt các số cạnh nhau.",
     "Tính chênh trung bình (0,3 phút).",
     "Kết luận hai tập có giống nhau không."
    ]
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
    "trap": "A few minutes' gap is normal in a large sample, but a big one signals a poor split.",
    "read": [
     "Two summaries of time_taken: first is train, second is validation.",
     "Compare mean, std and percentiles."
    ],
    "remark": "Mean is 45.9 in train and 46.2 in validation, std 9.1 vs 9.4, percentiles close: the two sets share the same distribution.",
    "howRemark": [
     "Put the numbers side by side.",
     "Compute the mean difference (0.3 min).",
     "Conclude whether they match."
    ]
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
    "trap": "Nếu chiều quan hệ đảo ngược giữa train và validation thì mô hình sẽ không khái quát hóa.",
    "read": [
     "Hình giống 3.2.1 nhưng trên validation.",
     "Kiểm tra độ dốc và hình đám điểm có khớp train không."
    ],
    "remark": "Quan hệ giữa time_taken và các biến ở validation cùng xu hướng với train, nên mối liên hệ học được không phải ngẫu nhiên của một tập.",
    "howRemark": [
     "So từng biểu đồ với 3.2.1.",
     "Nói xu hướng nào giữ nguyên.",
     "Kết luận."
    ]
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
    "trap": "If the relation direction reverses between train and validation, the model will not generalise.",
    "read": [
     "The chart mirrors 3.2.1 but on validation.",
     "Check whether slopes and cloud shapes match train."
    ],
    "remark": "The relationships between time_taken and the variables on validation follow train's trends, so what was learned is not a quirk of one set.",
    "howRemark": [
     "Compare each chart with 3.2.1.",
     "State which trends hold.",
     "Conclude."
    ]
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
    "trap": "Thứ tự cột khác nhau làm sai kết quả dự đoán mà không báo lỗi.",
    "read": [
     "Dòng «True 35143» cho biết cột còn lại giống train (True) và số dòng validation sau xử lý (35.143).",
     "So với 35.156 dòng ban đầu: mất 13 dòng."
    ],
    "remark": "Validation đã bỏ đúng các cột của train (True) và còn 35.143 dòng sau khi áp cùng quy tắc, mất 13 dòng so với 35.156.",
    "howRemark": [
     "Kiểm cột trùng train.",
     "Báo số dòng còn lại.",
     "Nói đã áp cùng quy tắc."
    ]
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
    "trap": "A different column order corrupts predictions without raising an error.",
    "read": [
     "The line “True 35143” says the columns match train (True) and validation has 35,143 rows after processing.",
     "Versus the original 35,156: 13 rows lost."
    ],
    "remark": "Validation dropped exactly train's columns (True) and has 35,143 rows after the same rules, 13 fewer than 35,156.",
    "howRemark": [
     "Check columns match train.",
     "Report remaining rows.",
     "State the same rules were applied."
    ]
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
    "trap": "fit scaler trên cả train và validation làm lộ trung bình và độ lệch chuẩn của validation.",
    "read": [
     "Bảng mô tả sau chuẩn hóa: hàng mean gần 0, hàng std bằng 1.",
     "Đó là dấu hiệu chuẩn hóa đúng."
    ],
    "remark": "Sau chuẩn hóa, mỗi cột có trung bình 0 và độ lệch chuẩn 1, nên các hệ số về sau so sánh được trực tiếp với nhau.",
    "howRemark": [
     "Kiểm mean ≈ 0 và std = 1.",
     "Nói chuẩn hóa fit trên train rồi áp lên validation.",
     "Nêu lý do cần chuẩn hóa."
    ]
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
    "trap": "Fitting the scaler on train and validation together leaks validation's mean and standard deviation.",
    "read": [
     "The describe table after scaling: mean row near 0, std row 1.",
     "That is the sign of correct scaling."
    ],
    "remark": "After scaling each column has mean 0 and std 1, so later coefficients can be compared directly.",
    "howRemark": [
     "Check mean ≈ 0 and std = 1.",
     "Say the scaler is fit on train and applied to validation.",
     "State why scaling helps."
    ]
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
    "trap": "R² cao ở train mà thấp ở validation là quá khớp. Luôn nhìn cả hai.",
    "read": [
     "Hai dòng: R2 và RMSE trên train, rồi trên validation.",
     "R2 gần 1 là mô hình giải thích tốt; RMSE là sai số trung bình tính bằng phút."
    ],
    "remark": "R2 0,900 ở train và 0,903 ở validation, RMSE khoảng 2,9 phút: mô hình giải thích khoảng 90% biến thiên thời gian giao, và hai tập gần nhau nên không quá khớp.",
    "howRemark": [
     "Báo R2 và RMSE cả hai tập.",
     "So train với validation để nói quá khớp hay không.",
     "Diễn giải RMSE bằng phút.",
     "Nêu giới hạn."
    ]
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
    "trap": "High R² on train and low on validation is overfitting. Always look at both.",
    "read": [
     "Two lines: R2 and RMSE on train, then validation.",
     "R2 near 1 means a good fit; RMSE is the typical error in minutes."
    ],
    "remark": "R2 is 0.900 on train and 0.903 on validation, RMSE about 2.9 minutes: the model explains about 90% of delivery-time variation, and the sets are close so no overfitting.",
    "howRemark": [
     "Report R2 and RMSE for both sets.",
     "Compare train and validation to judge overfitting.",
     "Read RMSE in minutes.",
     "State the limits."
    ]
   }
  },
  "5.3": {
   "vi": {
    "think": "RFE bỏ dần từng biến yếu nhất. Chọn số biến mà thêm nữa cũng không cải thiện đáng kể.",
    "steps": [
     "Vòng lặp n_features_to_select từ 1 đến số cột; mỗi lần fit RFE rồi tính điểm trên validation.",
     "Vẽ điểm theo số biến và chọn khuỷu (nơi đường bắt đầu phẳng). Đề gợi ý 8 biến, nhưng khi tính cả cột dummy thì đường cong phẳng ở khoảng 12 biến (R² trên validation ≈ 0,89).",
     "Dựng mô hình cuối với số biến đó và liệt kê các biến được giữ."
    ],
    "code": "from sklearn.feature_selection import RFE\nscores = {}\nfor k in range(1, X_train.shape[1] + 1):\n    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(X_train, y_train)\n    cols = X_train.columns[rfe.support_]\n    m = LinearRegression().fit(X_train[cols], y_train)\n    scores[k] = r2_score(y_test, m.predict(X_test[cols]))\npd.Series(scores).plot(marker='o')",
    "lotus": "Giống chọn bao nhiêu hạng mục để đưa vào bảng khảo sát: sau mức nào đó thêm câu hỏi không làm thông tin tăng thêm bao nhiêu.",
    "trap": "Chọn số biến theo điểm trên train luôn chọn nhiều nhất. Dùng điểm trên validation.",
    "read": [
     "Bảng là R2 theo số biến giữ lại (1 đến 22).",
     "Tìm chỗ đường cong ngừng tăng: sau 12 biến R2 chỉ nhích từ 0,8925 lên 0,90."
    ],
    "remark": "R2 tăng nhanh đến 12 biến (0,8925) rồi gần như phẳng (0,9031 ở 22 biến), nên chọn 12 biến là gọn mà vẫn tốt.",
    "howRemark": [
     "Chỉ chỗ khuỷu của đường cong.",
     "So R2 ở khuỷu với R2 đầy đủ.",
     "Chốt số biến và lý do."
    ]
   },
   "en": {
    "think": "RFE drops the weakest feature one at a time. Choose the number of features beyond which adding more barely helps.",
    "steps": [
     "Loop n_features_to_select from 1 to the column count; for each, fit RFE and score on validation.",
     "Plot the score against the number of features and choose the elbow (where the line flattens). The brief hints at 8 features, but counting dummy columns the curve flattens around 12 (validation R² ≈ 0.89).",
     "Build the final model with that many features and list the kept ones."
    ],
    "code": "from sklearn.feature_selection import RFE\nscores = {}\nfor k in range(1, X_train.shape[1] + 1):\n    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(X_train, y_train)\n    cols = X_train.columns[rfe.support_]\n    m = LinearRegression().fit(X_train[cols], y_train)\n    scores[k] = r2_score(y_test, m.predict(X_test[cols]))\npd.Series(scores).plot(marker='o')",
    "lotus": "Like choosing how many items to put on a survey: beyond some level, extra questions add little information.",
    "trap": "Choosing the number by train score always picks the most. Use validation score.",
    "read": [
     "The table is R2 by number of features kept (1 to 22).",
     "Find where the curve stops rising: after 12 features R2 only moves from 0.8925 to 0.90."
    ],
    "remark": "R2 rises fast up to 12 features (0.8925) then flattens (0.9031 at 22), so 12 features is lean and still good.",
    "howRemark": [
     "Point out the elbow of the curve.",
     "Compare R2 at the elbow with the full R2.",
     "Fix the count and the reason."
    ]
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
    "trap": "Chỉ nhìn R² mà bỏ qua phần dư bỏ lỡ các mẫu hình cho thấy mô hình sai ở đâu.",
    "read": [
     "Dòng đầu là 12 biến được giữ; dòng sau là R2 validation 0,892.",
     "Ba biểu đồ phần dư: phần dư theo dự đoán nên tản đều quanh 0; Q-Q plot nên gần đường thẳng; histogram nên hình chuông."
    ],
    "remark": "Mô hình 12 biến đạt R2 0,892 trên validation, chỉ thấp hơn mô hình đầy đủ khoảng 0,01. Phần dư quanh 0 nên giả định cơ bản chấp nhận được.",
    "howRemark": [
     "Báo R2 của mô hình cuối.",
     "Mô tả từng biểu đồ phần dư.",
     "Nói giả định nào đạt, chưa đạt.",
     "Kết luận có dùng được không."
    ]
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
    "trap": "Looking at R² only and skipping residuals misses patterns that show where the model is wrong.",
    "read": [
     "First line: the 12 kept features; next: validation R2 0.892.",
     "Three residual charts: residual vs prediction should scatter evenly around 0; Q-Q plot near the line; histogram bell-shaped."
    ],
    "remark": "The 12-feature model reaches R2 0.892 on validation, only about 0.01 below the full model. Residuals centre on 0 so basic assumptions are acceptable.",
    "howRemark": [
     "Report the final model's R2.",
     "Describe each residual chart.",
     "Say which assumptions hold or not.",
     "Conclude whether it is usable."
    ]
   }
  },
  "6.2": {
   "vi": {
    "think": "Phân tích hệ số: so sánh hệ số trên dữ liệu đã chuẩn hóa và hệ số quy đổi về thang gốc, rồi nói một đơn vị thay đổi của một biến làm time_taken đổi bao nhiêu phút.",
    "steps": [
     "Hệ số chuẩn hóa: so độ mạnh giữa các biến (đơn vị là độ lệch chuẩn).",
     "Hệ số gốc = hệ số chuẩn hóa chia cho độ lệch chuẩn của biến đó (scaler.scale_).",
     "Diễn giải theo đơn vị gốc: tăng 1 đơn vị (ví dụ distance) thì thời gian chờ đổi bao nhiêu phút, giữ các biến khác cố định.",
     "Chú ý dấu và độ lớn."
    ],
    "code": "coef_scaled = pd.Series(final_model.coef_, index=cols)\nscale = pd.Series(scaler.scale_, index=num)\ncoef_orig = coef_scaled[cols.intersection(num)] / scale[cols.intersection(num)]\nprint(pd.DataFrame({'scaled': coef_scaled, 'original': coef_orig}))\n# effect of +1 distance on time_taken: coef_orig['distance'] minutes",
    "lotus": "Nếu hệ số gốc của số đơn đang chờ là 0,1 thì thêm 10 đơn đang chờ làm khách chờ thêm khoảng 1 phút, giữ mọi thứ khác không đổi.",
    "trap": "Hệ số chuẩn hóa so được độ mạnh, nhưng muốn nói «thêm 1 đơn thì mấy phút» phải dùng hệ số thang gốc.",
    "read": [
     "Hai cột: scaled là hệ số trên dữ liệu chuẩn hóa (so sánh mạnh yếu), original là hệ số trên thang gốc (đọc ý nghĩa).",
     "Dòng cuối: +1 đơn vị distance làm thời gian giao tăng 0,483 phút."
    ],
    "remark": "Trên thang chuẩn hóa, total_outstanding_orders (+18,2) và total_onshift_dashers (−11,9) có ảnh hưởng mạnh nhất. Ở thang gốc, mỗi đơn đang chờ thêm làm chậm 0,34 phút, mỗi tài xế trực thêm nhanh hơn 0,34 phút, và mỗi đơn vị distance thêm 0,48 phút.",
    "howRemark": [
     "Dùng cột scaled để xếp mức ảnh hưởng.",
     "Dùng cột original để nói bằng đơn vị thật.",
     "Nói dấu hệ số nghĩa là gì.",
     "Nhớ chỉ giữ các biến khác cố định."
    ]
   },
   "en": {
    "think": "Coefficient analysis: compare coefficients on standardised data with coefficients converted to the original scale, then say how much one unit of a feature changes time_taken in minutes.",
    "steps": [
     "Scaled coefficients: compare strength across features (unit is standard deviations).",
     "Original coefficient = scaled coefficient divided by the feature's standard deviation (scaler.scale_).",
     "Interpret in original units: one more unit (for example distance) changes the wait by how many minutes, holding other features fixed.",
     "Mind sign and size."
    ],
    "code": "coef_scaled = pd.Series(final_model.coef_, index=cols)\nscale = pd.Series(scaler.scale_, index=num)\ncoef_orig = coef_scaled[cols.intersection(num)] / scale[cols.intersection(num)]\nprint(pd.DataFrame({'scaled': coef_scaled, 'original': coef_orig}))\n# effect of +1 distance on time_taken: coef_orig['distance'] minutes",
    "lotus": "If the original coefficient for pending orders is 0.1, then 10 more pending orders add about 1 minute to the wait, holding everything else constant.",
    "trap": "Scaled coefficients compare strength, but to say “one more order is how many minutes” you need the original-scale coefficient.",
    "read": [
     "Two columns: scaled is the coefficient on standardized data (compare strength), original is on the raw scale (read meaning).",
     "Last line: +1 unit of distance adds 0.483 minutes."
    ],
    "remark": "On the scaled axis total_outstanding_orders (+18.2) and total_onshift_dashers (−11.9) matter most. On the raw scale each extra waiting order slows delivery by 0.34 min, each extra on-shift dasher speeds it by 0.34, and each distance unit adds 0.48.",
    "howRemark": [
     "Use the scaled column to rank influence.",
     "Use the original column to speak in real units.",
     "Say what each sign means.",
     "Remember it holds other variables fixed."
    ]
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
    "trap": "Nói «ảnh hưởng» chỉ từ một biểu đồ đếm số đơn mà không so time_taken theo nhóm là chưa trả lời câu hỏi.",
    "remark": "Có các cột nhóm như market_id, order_protocol, store_primary_category. Nhìn biểu đồ nhóm (3.1.2) và tương quan, market và loại cửa hàng cho thời gian giao khác nhau, nên chúng ảnh hưởng nhưng cần mã hóa trước khi đưa vào hồi quy.",
    "howRemark": [
     "Liệt kê cột nhóm trước.",
     "Nói biểu đồ nào bạn dựa vào.",
     "Kết luận ảnh hưởng và cách xử lý."
    ]
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
    "trap": "Claiming “effect” from a count chart alone, without comparing time_taken by group, does not answer the question.",
    "remark": "There are categorical columns such as market_id, order_protocol, store_primary_category. From the group charts (3.1.2) and correlations, markets and store types show different delivery times, so they matter but must be encoded before regression.",
    "howRemark": [
     "List the categorical columns first.",
     "Say which chart you rely on.",
     "Conclude on the effect and the treatment."
    ]
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
    "trap": "Nhầm 0,2 là 2 hoặc 20 dòng thay vì 20% số dòng.",
    "remark": "test_size = 0.2 nghĩa là 20% dữ liệu được giữ làm tập kiểm tra và 80% để huấn luyện; ở bài này là 35.156 và 140.621 dòng.",
    "howRemark": [
     "Nêu ý nghĩa tỷ lệ.",
     "Dẫn số dòng thật.",
     "Nói mục đích (đo trên dữ liệu chưa thấy)."
    ]
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
    "trap": "Mistaking 0.2 for 2 or 20 rows instead of 20% of rows.",
    "remark": "test_size = 0.2 means 20% of data is held out for testing and 80% for training; here 35,156 and 140,621 rows.",
    "howRemark": [
     "State what the ratio means.",
     "Quote the real row counts.",
     "Say the purpose (measure on unseen data)."
    ]
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
    "trap": "Trả lời bằng tên biến mà không nêu số hệ số. Dẫn cả hai.",
    "remark": "Trên bản đồ nhiệt, distance có tương quan cao nhất với time_taken (0,461), rồi subtotal (0,413) và total_outstanding_orders (0,385).",
    "howRemark": [
     "Lấy biến cao nhất theo trị tuyệt đối.",
     "Nêu thêm 2 biến kế.",
     "Nhắc đây là tương quan, chưa phải nhân quả."
    ]
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
    "trap": "Answering with the feature name but no coefficient. Cite both.",
    "remark": "On the heatmap, distance has the highest correlation with time_taken (0.461), then subtotal (0.413) and total_outstanding_orders (0.385).",
    "howRemark": [
     "Take the highest by absolute value.",
     "Add the next two.",
     "Remind it is correlation, not causation."
    ]
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
    "trap": "Nói «tôi bỏ điểm xa» chung chung mà không nói bỏ theo quy tắc nào.",
    "remark": "Phát hiện điểm xa bằng boxplot và ngưỡng phân vị 99, thấy các đơn với 411 món hay khoảng cách 83,5. Xử lý bằng cách bỏ giá trị âm (65 dòng) và điểm xa (4.124 dòng), áp cùng quy tắc cho validation.",
    "howRemark": [
     "Nêu công cụ phát hiện.",
     "Nêu quy tắc cắt và số dòng.",
     "Nói áp cho validation thế nào."
    ]
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
    "trap": "Saying “I removed outliers” without saying by what rule.",
    "remark": "Spot outliers with a boxplot and the 99th percentile, seeing orders with 411 items or 83.5 distance. Treat by dropping negatives (65 rows) and outliers (4,124 rows), applying the same rules to validation.",
    "howRemark": [
     "Name the detection tool.",
     "State the cut rule and rows.",
     "Say how it applies to validation."
    ]
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
    "trap": "Xếp theo hệ số chưa chuẩn hóa so sánh táo với cam, vì thang đo khác nhau.",
    "remark": "Theo hệ số chuẩn hóa ở 6.2, ba biến ảnh hưởng nhất là total_outstanding_orders (+18,2), total_onshift_dashers (−11,9) và total_busy_dashers (−4,2); distance (+4,1) đứng ngay sau.",
    "howRemark": [
     "Xếp theo trị tuyệt đối hệ số chuẩn hóa.",
     "Nêu dấu và ý nghĩa.",
     "Nhắc giữ các biến khác cố định."
    ]
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
    "trap": "Ranking by unscaled coefficients compares apples with oranges, since scales differ.",
    "remark": "By the scaled coefficients in 6.2, the top three are total_outstanding_orders (+18.2), total_onshift_dashers (−11.9) and total_busy_dashers (−4.2); distance (+4.1) follows closely.",
    "howRemark": [
     "Rank by absolute scaled coefficient.",
     "State sign and meaning.",
     "Remind others are held fixed."
    ]
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
    "trap": "Chỉ nói «vẽ đường thẳng qua các điểm» mà bỏ phần tối thiểu hóa sai số và các giả định.",
    "remark": "Hồi quy tuyến tính tìm đường thẳng (hoặc mặt phẳng) y = b0 + b1x1 + ... sao cho tổng bình phương sai số giữa dự đoán và thực tế nhỏ nhất. Hệ số cho biết khi một biến tăng một đơn vị, y đổi bao nhiêu.",
    "howRemark": [
     "Viết công thức.",
     "Nói tiêu chí tối ưu.",
     "Giải thích ý nghĩa hệ số."
    ]
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
    "trap": "Saying only “draw a line through the points” and skipping error minimisation and assumptions.",
    "remark": "Linear regression finds a line (or plane) y = b0 + b1x1 + ... minimizing the sum of squared errors between predictions and actuals. A coefficient says how much y changes per one-unit rise in a variable.",
    "howRemark": [
     "Write the formula.",
     "State the optimisation criterion.",
     "Explain the meaning of a coefficient."
    ]
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
    "trap": "Quên rằng hệ số của đa biến chỉ có nghĩa «giữ các biến khác cố định».",
    "remark": "Đơn biến dùng một biến vào (ví dụ chỉ distance), đa biến dùng nhiều biến cùng lúc (ở đây 12 biến) và mỗi hệ số đọc khi các biến khác cố định. Đa biến thường giải thích tốt hơn: R2 0,89 so với 0,21 nếu chỉ dùng distance.",
    "howRemark": [
     "Nêu khác biệt cơ bản.",
     "Cho ví dụ có số.",
     "Nói khi nào chọn cái nào."
    ]
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
    "trap": "Forgetting that a multiple-regression coefficient means “holding the others fixed”.",
    "remark": "Simple uses one input (e.g. only distance), multiple uses many at once (12 here) and each coefficient is read holding the others fixed. Multiple usually explains more: R2 0.89 vs about 0.21 with distance alone.",
    "howRemark": [
     "State the basic difference.",
     "Give a numeric example.",
     "Say when to choose which."
    ]
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
    "trap": "Nhầm hàm chi phí với R²: R² là thước đo sau khi huấn luyện, chi phí là thứ được tối thiểu hóa lúc huấn luyện.",
    "remark": "Hàm chi phí đo mô hình sai bao nhiêu, thường là trung bình bình phương sai số (MSE). Mục tiêu là tìm hệ số làm MSE nhỏ nhất, bằng công thức nghiệm đóng hoặc gradient descent.",
    "howRemark": [
     "Nêu hàm chi phí là gì.",
     "Nêu cách tối thiểu hóa.",
     "Liên hệ với RMSE 2,9 phút ở 5.2."
    ]
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
    "trap": "Confusing cost with R²: R² is a measure after training, cost is what is minimised during training.",
    "remark": "The cost function measures how wrong the model is, usually mean squared error (MSE). The goal is the coefficients minimizing MSE, by the closed-form solution or gradient descent.",
    "howRemark": [
     "State what the cost function is.",
     "State how it is minimized.",
     "Relate to the 2.9-minute RMSE in 5.2."
    ]
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
    "trap": "Chỉ nhìn điểm ở train rồi kết luận mô hình tốt.",
    "remark": "Quá khớp là mô hình tốt trên train nhưng kém trên validation; chưa khớp là kém ở cả hai. Ở bài này R2 train 0,900 và valid 0,903 nên không quá khớp, R2 cao nên không chưa khớp.",
    "howRemark": [
     "Định nghĩa hai khái niệm.",
     "Dùng số train và valid.",
     "Kết luận cho mô hình này."
    ]
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
    "trap": "Judging a model good from its train score alone.",
    "remark": "Overfitting is good on train but poor on validation; underfitting is poor on both. Here R2 is 0.900 on train and 0.903 on validation, so neither overfit nor underfit.",
    "howRemark": [
     "Define both concepts.",
     "Use train and valid numbers.",
     "Conclude for this model."
    ]
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
    "trap": "Chỉ nói «phần dư nên quanh 0» mà không nói hình dạng nào là dấu hiệu xấu.",
    "remark": "Biểu đồ phần dư cho thấy mô hình sai ở đâu: phần dư tản đều quanh 0 là tốt, hình cong hoặc loe ra là mô hình bỏ sót quan hệ hay phương sai không đều; Q-Q plot kiểm tra phần dư có gần chuẩn không.",
    "howRemark": [
     "Nói phần dư tốt trông thế nào.",
     "Nêu dấu hiệu xấu và ý nghĩa.",
     "Nêu vai trò Q-Q plot."
    ]
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
    "trap": "Saying only “residuals should be around 0” without saying which shapes are bad signs.",
    "remark": "Residual plots show where the model errs: even scatter around 0 is good, curves or fans mean a missed relationship or uneven variance; the Q-Q plot checks whether residuals are near normal.",
    "howRemark": [
     "Say what good residuals look like.",
     "State bad signs and their meaning.",
     "State the Q-Q plot's role."
    ]
   }
  }
 },
 "results": {
  "2.1.1": {
   "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\ndf = pd.read_csv('/tmp/asg/all/1/Delivery_Starter/porter_data_1.csv')\ndf['created_at'] = pd.to_datetime(df['created_at'])\ndf['actual_delivery_time'] = pd.to_datetime(df['actual_delivery_time'])\nprint(df[['created_at','actual_delivery_time']].dtypes)\nprint(df[['created_at','actual_delivery_time']].head(3))",
   "text": "created_at              datetime64[us]\nactual_delivery_time    datetime64[us]\ndtype: object\n           created_at actual_delivery_time\n0 2015-02-06 22:24:17  2015-02-06 23:11:17\n1 2015-02-10 21:49:25  2015-02-10 22:33:25\n2 2015-02-16 00:11:35  2015-02-16 01:06:35",
   "imgs": []
  },
  "2.1.2": {
   "code": "cat_cols = ['market_id', 'order_protocol', 'store_primary_category']\ndf[cat_cols] = df[cat_cols].astype('category')\nprint(df[cat_cols].nunique())",
   "text": "market_id                  6\norder_protocol             7\nstore_primary_category    73\ndtype: int64",
   "imgs": []
  },
  "2.2.1": {
   "code": "df['time_taken'] = (df['actual_delivery_time'] - df['created_at']).dt.total_seconds() / 60\nprint(df['time_taken'].describe().round(1))",
   "text": "count    175777.0\nmean         46.2\nstd           9.3\nmin          32.0\n25%          39.0\n50%          45.0\n75%          52.0\nmax         110.0\nName: time_taken, dtype: float64",
   "imgs": []
  },
  "2.2.2": {
   "code": "df['hour'] = df['created_at'].dt.hour\ndf['day'] = df['created_at'].dt.dayofweek\ndf['isWeekend'] = (df['day'] >= 5).astype('category')\nprint(df.groupby('hour')['time_taken'].mean().round(1).to_string())\ndf = df.drop(columns=['created_at', 'actual_delivery_time'])\ndf.groupby('hour')['time_taken'].mean().plot(marker='o', title='Thời gian giao trung bình theo giờ (phút)')",
   "text": "hour\n0     46.4\n1     47.7\n2     50.7\n3     50.2\n4     46.0\n5     44.4\n6     45.0\n7     44.7\n8     46.5\n14    46.3\n15    45.3\n16    44.2\n17    43.6\n18    42.4\n19    43.5\n20    41.7\n21    40.1\n22    40.7\n23    41.3",
   "imgs": [
    "/assign/delivery-time/2_2_2-1.png"
   ]
  },
  "2.3.1": {
   "code": "y = df['time_taken']\nX = df.drop(columns=['time_taken'])\nprint(X.shape, y.shape)",
   "text": "(175777, 15) (175777,)",
   "imgs": []
  },
  "2.3.2": {
   "code": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(len(X_train), len(X_test))",
   "text": "140621 35156",
   "imgs": []
  },
  "3.1.1": {
   "code": "num_cols = X_train.select_dtypes(include='number').columns.drop(['hour','day'])\nX_train[num_cols].hist(bins=40, figsize=(14, 9))\nplt.tight_layout()\nprint((X_train[num_cols] < 0).sum())",
   "text": "total_items                  0\nsubtotal                     0\nnum_distinct_items           0\nmin_item_price              11\nmax_item_price               0\ntotal_onshift_dashers       20\ntotal_busy_dashers          16\ntotal_outstanding_orders    34\ndistance                     0\ndtype: int64",
   "imgs": [
    "/assign/delivery-time/3_1_1-1.png"
   ]
  },
  "3.1.2": {
   "code": "fig, ax = plt.subplots(1, 4, figsize=(16, 3.5))\nfor a, c in zip(ax, ['market_id', 'order_protocol', 'isWeekend']):\n    X_train[c].value_counts().sort_index().plot(kind='bar', ax=a, title=c)\nX_train['store_primary_category'].value_counts().head(15).plot(kind='bar', ax=ax[3], title='top 15 store_primary_category')\nplt.tight_layout()",
   "text": "",
   "imgs": [
    "/assign/delivery-time/3_1_2-1.png"
   ]
  },
  "3.1.3": {
   "code": "sns.histplot(y_train, bins=40, kde=True)\nprint(y_train.describe().round(1))",
   "text": "count    140621.0\nmean         46.2\nstd           9.3\nmin          32.0\n25%          39.0\n50%          45.0\n75%          52.0\nmax         110.0\nName: time_taken, dtype: float64",
   "imgs": [
    "/assign/delivery-time/3_1_3-1.png"
   ]
  },
  "3.2.1": {
   "code": "train = X_train.copy(); train['time_taken'] = y_train\nsample = train.sample(5000, random_state=42)\nfig, ax = plt.subplots(1, 3, figsize=(16, 4))\nfor a, c in zip(ax, ['distance', 'subtotal', 'total_outstanding_orders']):\n    sns.scatterplot(data=sample, x=c, y='time_taken', alpha=0.3, ax=a)\nplt.figure(figsize=(10, 4)); sns.boxplot(data=train, x='hour', y='time_taken')",
   "text": "",
   "imgs": [
    "/assign/delivery-time/3_2_1-1.png",
    "/assign/delivery-time/3_2_1-2.png"
   ]
  },
  "3.3.1": {
   "code": "corr = train.select_dtypes(include='number').corr()\nplt.figure(figsize=(11, 8))\nsns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', center=0)\nprint(corr['time_taken'].sort_values().round(3).to_string())",
   "text": "hour                       -0.346\nmin_item_price              0.021\nday                         0.045\ntotal_onshift_dashers       0.172\ntotal_busy_dashers          0.207\ntotal_items                 0.221\nmax_item_price              0.255\nnum_distinct_items          0.313\ntotal_outstanding_orders    0.385\nsubtotal                    0.413\ndistance                    0.461\ntime_taken                  1.000",
   "imgs": [
    "/assign/delivery-time/3_3_1-1.png"
   ]
  },
  "3.3.2": {
   "code": "weak = ['min_item_price', 'store_primary_category']\nX_train = X_train.drop(columns=weak)\nX_test = X_test.drop(columns=weak)\nprint(list(X_train.columns))",
   "text": "['market_id', 'order_protocol', 'total_items', 'subtotal', 'num_distinct_items', 'max_item_price', 'total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders', 'distance', 'hour', 'day', 'isWeekend']",
   "imgs": []
  },
  "3.4.1": {
   "code": "train = X_train.copy(); train['time_taken'] = y_train\nfig, ax = plt.subplots(1, 4, figsize=(16, 3))\nfor a, c in zip(ax, ['time_taken', 'total_items', 'subtotal', 'distance']):\n    sns.boxplot(x=train[c], ax=a)\nprint(train[['total_items','subtotal','distance']].max())",
   "text": "total_items      411.00\nsubtotal       26800.00\ndistance          83.52\ndtype: float64",
   "imgs": [
    "/assign/delivery-time/3_4_1-1.png"
   ]
  },
  "3.4.2": {
   "code": "n0 = len(train)\nneg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']\ntrain = train[(train[neg] >= 0).all(axis=1)]\nn1 = len(train)\nfor c in ['total_items', 'subtotal', 'distance']:\n    hi = train[c].quantile(0.99)\n    train = train[train[c] <= hi]\nprint('bỏ vì giá trị âm:', n0 - n1, '| bỏ vì điểm xa (phân vị 99):', n1 - len(train), '| còn lại:', len(train))\ncaps = {c: X_train[c].quantile(0.99) for c in ['total_items', 'subtotal', 'distance']}\ny_train = train['time_taken']; X_train = train.drop(columns=['time_taken'])",
   "text": "bỏ vì giá trị âm: 65 | bỏ vì điểm xa (phân vị 99): 4124 | còn lại: 136432",
   "imgs": []
  },
  "4.1.1": {
   "code": "X_test[['total_items','subtotal','distance','total_outstanding_orders']].hist(bins=40, figsize=(12, 6))\nplt.tight_layout()",
   "text": "",
   "imgs": [
    "/assign/delivery-time/4_1_1-1.png"
   ]
  },
  "4.1.2": {
   "code": "print(pd.concat([X_train['market_id'].value_counts(normalize=True), X_test['market_id'].value_counts(normalize=True)], axis=1, keys=['train','valid']).round(3))",
   "text": "           train  valid\nmarket_id              \n2.0        0.306  0.306\n4.0        0.261  0.263\n1.0        0.209  0.212\n3.0        0.121  0.118\n5.0        0.099  0.097\n6.0        0.004  0.004",
   "imgs": []
  },
  "4.1.3": {
   "code": "print(y_train.describe().round(1)); print(y_test.describe().round(1))",
   "text": "count    136432.0\nmean         45.9\nstd           9.1\nmin          32.0\n25%          39.0\n50%          45.0\n75%          51.0\nmax         105.0\nName: time_taken, dtype: float64\ncount    35156.0\nmean        46.2\nstd          9.4\nmin         32.0\n25%         39.0\n50%         45.0\n75%         52.0\nmax        103.0\nName: time_taken, dtype: float64",
   "imgs": []
  },
  "4.2": {
   "code": "val = X_test.copy(); val['time_taken'] = y_test\nsns.scatterplot(data=val.sample(5000, random_state=42), x='distance', y='time_taken', alpha=0.3)",
   "text": "",
   "imgs": [
    "/assign/delivery-time/4_2-1.png"
   ]
  },
  "4.3": {
   "code": "neg = ['total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders']\nmask = (X_test[neg] >= 0).all(axis=1)\nX_test, y_test = X_test[mask], y_test[mask]\nprint(list(X_train.columns) == list(X_test.columns), len(X_test))",
   "text": "True 35143",
   "imgs": []
  },
  "5.1": {
   "code": "from sklearn.preprocessing import StandardScaler\nnum = X_train.select_dtypes(include='number').columns\nscaler = StandardScaler()\nXtr = X_train.copy(); Xte = X_test.copy()\nXtr[num] = scaler.fit_transform(X_train[num]); Xte[num] = scaler.transform(X_test[num])\nXtr = pd.get_dummies(Xtr, drop_first=True).astype(float); Xte = pd.get_dummies(Xte, drop_first=True).astype(float)\nXte = Xte.reindex(columns=Xtr.columns, fill_value=0)\nprint(Xtr[num].describe().loc[['mean','std']].round(2))",
   "text": "      total_items  subtotal  num_distinct_items  ...  distance  hour  day\nmean         -0.0       0.0                 0.0  ...      -0.0  -0.0 -0.0\nstd           1.0       1.0                 1.0  ...       1.0   1.0  1.0\n\n[2 rows x 10 columns]",
   "imgs": []
  },
  "5.2": {
   "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import r2_score, mean_squared_error\nlr = LinearRegression().fit(Xtr, y_train)\nfor name, X_, y_ in [('train', Xtr, y_train), ('valid', Xte, y_test)]:\n    p = lr.predict(X_)\n    print(name, 'R2', round(r2_score(y_, p), 3), 'RMSE', round(mean_squared_error(y_, p) ** 0.5, 2))",
   "text": "train R2 0.9 RMSE 2.87\nvalid R2 0.903 RMSE 2.91",
   "imgs": []
  },
  "5.3": {
   "code": "from sklearn.feature_selection import RFE\nscores = {}\nfor k in range(1, Xtr.shape[1] + 1):\n    rfe = RFE(LinearRegression(), n_features_to_select=k).fit(Xtr, y_train)\n    cols = Xtr.columns[rfe.support_]\n    m = LinearRegression().fit(Xtr[cols], y_train)\n    scores[k] = r2_score(y_test, m.predict(Xte[cols]))\ns = pd.Series(scores)\ns.plot(marker='o', title='R2 trên validation theo số biến (RFE)'); plt.xlabel('số biến')\nprint(s.round(4).to_string())",
   "text": "1     0.1469\n2     0.4415\n3     0.4652\n4     0.6732\n5     0.6921\n6     0.7083\n7     0.7162\n8     0.7165\n9     0.7272\n10    0.8499\n11    0.8580\n12    0.8925\n13    0.8961\n14    0.8961\n15    0.8961\n16    0.8971\n17    0.8994\n18    0.8999\n19    0.9018\n20    0.9026\n21    0.9031\n22    0.9031",
   "imgs": [
    "/assign/delivery-time/5_3-1.png"
   ]
  },
  "6.1": {
   "code": "k = 12\nrfe = RFE(LinearRegression(), n_features_to_select=k).fit(Xtr, y_train)\ncols = Xtr.columns[rfe.support_]\nfinal_model = LinearRegression().fit(Xtr[cols], y_train)\npred = final_model.predict(Xte[cols]); res = y_test - pred\nprint('12 biến được giữ:', list(cols))\nprint('R2 valid', round(r2_score(y_test, pred), 3))\nimport statsmodels.api as sm\nfig, ax = plt.subplots(1, 3, figsize=(16, 4))\nax[0].scatter(pred, res, alpha=0.1); ax[0].axhline(0, color='r'); ax[0].set_title('Phần dư theo dự đoán')\nsm.qqplot(res, line='45', fit=True, ax=ax[1]); ax[1].set_title('Q-Q plot')\nsns.histplot(res, bins=40, kde=True, ax=ax[2]); ax[2].set_title('Histogram phần dư')",
   "text": "12 biến được giữ: ['subtotal', 'total_onshift_dashers', 'total_busy_dashers', 'total_outstanding_orders', 'distance', 'hour', 'market_id_2.0', 'market_id_3.0', 'market_id_4.0', 'market_id_5.0', 'market_id_6.0', 'order_protocol_5.0']\nR2 valid 0.892",
   "imgs": [
    "/assign/delivery-time/6_1-1.png"
   ]
  },
  "6.2": {
   "code": "num_in = [c for c in cols if c in num]\ncoef_scaled = pd.Series(final_model.coef_, index=cols)\nscale = pd.Series(scaler.scale_, index=num)\norig = coef_scaled[num_in] / scale[num_in]\nprint(pd.DataFrame({'scaled': coef_scaled[num_in], 'original': orig}).round(4).to_string())\nprint()\nfor c in ['total_items', 'distance']:\n    if c in orig.index: print(f'+1 đơn vị {c} -> thời gian giao đổi {orig[c]:+.3f} phút')",
   "text": "                           scaled  original\nsubtotal                   2.6932    0.0017\ntotal_onshift_dashers    -11.9243   -0.3448\ntotal_busy_dashers        -4.2311   -0.1314\ntotal_outstanding_orders  18.1520    0.3440\ndistance                   4.0891    0.4827\nhour                      -1.9116   -0.2202\n\n+1 đơn vị distance -> thời gian giao đổi +0.483 phút",
   "imgs": []
  }
 }
};
