import type { Assignment } from "@/data/assign/types";

export const asg: Assignment = {
 "id": "eda-taxi",
 "course": "C2",
 "concepts": [
  "d-bf9615ba3a8e"
 ],
 "title": [
  "EDA: Phân tích chuyến taxi NYC",
  "EDA: NYC Taxi trip analysis"
 ],
 "file": "EDA_Assg_NYC_Taxi_Starter.ipynb",
 "story": [
  "Dữ liệu thật là taxi New York, nhưng bạn đọc nó bằng con mắt của Lotus Spa: «chuyến» là một lượt đặt lịch, «vùng» là một chi nhánh, «giờ đón» là giờ khách vào. Mỗi mục có một ví dụ nhỏ để thấy câu hỏi của bài này trông thế nào ở spa.",
  "The real data is New York taxis, but you read it through Lotus Spa's eyes: a “trip” is a booking, a “zone” is a branch, a “pickup hour” is when the customer arrives. Each task has a small example to show what this task's question looks like at the spa."
 ],
 "cells": [
  {
   "t": "md",
   "s": "# **New York City Yellow Taxi Data**"
  },
  {
   "t": "md",
   "s": "## Objective\nIn this case study you will be learning exploratory data analysis (EDA) with the help of a dataset on yellow taxi rides in New York City. This will enable you to understand why EDA is an important step in the process of data science and machine learning."
  },
  {
   "t": "md",
   "s": "## **Problem Statement**\nAs an analyst at an upcoming taxi operation in NYC, you are tasked to use the 2023 taxi trip data to uncover insights that could help optimise taxi operations. The goal is to analyse patterns in the data that can inform strategic decisions to improve service efficiency, maximise revenue, and enhance passenger experience."
  },
  {
   "t": "md",
   "s": "## Tasks\nYou need to perform the following steps for successfully completing this assignment:\n1. Data Loading\n2. Data Cleaning\n3. Exploratory Analysis: Bivariate and Multivariate\n4. Creating Visualisations to Support the Analysis\n5. Deriving Insights and Stating Conclusions"
  },
  {
   "t": "md",
   "s": "---"
  },
  {
   "t": "md",
   "s": "**NOTE:** The marks given along with headings and sub-headings are cumulative marks for those particular headings/sub-headings.<br>\n\nThe actual marks for each task are specified within the tasks themselves.\n\nFor example, marks given with heading *2* or sub-heading *2.1* are the cumulative marks, for your reference only. <br>\n\nThe marks you will receive for completing tasks are given with the tasks.\n\nSuppose the marks for two tasks are: 3 marks for 2.1.1 and 2 marks for 3.2.2, or\n* 2.1.1 [3 marks]\n* 3.2.2 [2 marks]\n\nthen, you will earn 3 marks for completing task 2.1.1 and 2 marks for completing task 3.2.2.\n"
  },
  {
   "t": "md",
   "s": "---"
  },
  {
   "t": "md",
   "s": "## Data Understanding\nThe yellow taxi trip records include fields capturing pick-up and drop-off dates/times, pick-up and drop-off locations, trip distances, itemized fares, rate types, payment types, and driver-reported passenger counts.\n\nThe data is stored in Parquet format (*.parquet*). The dataset is from 2009 to 2024. However, for this assignment, we will only be using the data from 2023.\n\nThe data for each month is present in a different parquet file. You will get twelve files for each of the months in 2023.\n\nThe data was collected and provided to the NYC Taxi and Limousine Commission (TLC) by technology providers like vendors and taxi hailing apps. <br>\n\nYou can find the link to the TLC trip records page here: https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
  },
  {
   "t": "md",
   "s": "###  Data Description\nYou can find the data description here: [Data Dictionary](https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf)"
  },
  {
   "t": "md",
   "s": "**Trip Records**\n\n\n\n|Field Name       |description |\n|:----------------|:-----------|\n| VendorID | A code indicating the TPEP provider that provided the record. <br> 1= Creative Mobile Technologies, LLC; <br> 2= VeriFone Inc. |\n| tpep_pickup_datetime | The date and time when the meter was engaged.  |\n| tpep_dropoff_datetime | The date and time when the meter was disengaged.   |\n| Passenger_count | The number of passengers in the vehicle. <br> This is a driver-entered value. |\n| Trip_distance | The elapsed trip distance in miles reported by the taximeter. |\n| PULocationID | TLC Taxi Zone in which the taximeter was engaged |\n| DOLocationID | TLC Taxi Zone in which the taximeter was disengaged |\n|RateCodeID |The final rate code in effect at the end of the trip.<br> 1 = Standard rate <br> 2 = JFK <br> 3 = Newark <br>4 = Nassau or Westchester <br>5 = Negotiated fare <br>6 = Group ride |\n|Store_and_fwd_flag |This flag indicates whether the trip record was held in vehicle memory before sending to the vendor, aka “store and forward,” because the vehicle did not have a connection to the server.  <br>Y= store and forward trip <br>N= not a store and forward trip |\n|Payment_type| A numeric code signifying how the passenger paid for the trip. <br> 1 = Credit card <br>2 = Cash <br>3 = No charge <br>4 = Dispute <br>5 = Unknown <br>6 = Voided trip |\n|Fare_amount| The time-and-distance fare calculated by the meter. <br>Extra Miscellaneous extras and surcharges.  Currently, this only includes the 0.50 and 1 USD rush hour and overnight charges. |\n|MTA_tax |0.50 USD MTA tax that is automatically triggered based on the metered rate in use. |\n|Improvement_surcharge | 0.30 USD improvement surcharge assessed trips at the flag drop. The improvement surcharge began being levied in 2015. |\n|Tip_amount |Tip amount – This field is automatically populated for credit card tips. Cash tips are not included. |\n| Tolls_amount | Total amount of all tolls paid in trip.  |\n| total_amount | The total amount charged to passengers. Does not include cash tips. |\n|Congestion_Surcharge |Total amount collected in trip for NYS congestion surcharge. |\n| Airport_fee | 1.25 USD for pick up only at LaGuardia and John F. Kennedy Airports|\n\nAlthough the amounts of extra charges and taxes applied are specified in the data dictionary, you will see that some cases have different values of these charges in the actual data."
  },
  {
   "t": "md",
   "s": "**Taxi Zones**\n\nEach of the trip records contains a field corresponding to the location of the pickup or drop-off of the trip, populated by numbers ranging from 1-263.\n\nThese numbers correspond to taxi zones, which may be downloaded as a table or map/shapefile and matched to the trip records using a join.\n\nThis is covered in more detail in later sections."
  },
  {
   "t": "md",
   "s": "---"
  },
  {
   "t": "md",
   "s": "## **1** Data Preparation\n\n<font color = red>[5 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "### Import Libraries"
  },
  {
   "t": "code",
   "s": "# Import warnings\n\n"
  },
  {
   "t": "code",
   "s": "# Import the libraries you will be using for analysis\n\n"
  },
  {
   "t": "code",
   "s": "# Recommended versions\n# numpy version: 1.26.4\n# pandas version: 2.2.2\n# matplotlib version: 3.10.0\n# seaborn version: 0.13.2\n\n# Check versions\nprint(\"numpy version:\", np.__version__)\nprint(\"pandas version:\", pd.__version__)\nprint(\"matplotlib version:\", plt.matplotlib.__version__)\nprint(\"seaborn version:\", sns.__version__)"
  },
  {
   "t": "md",
   "s": "### **1.1** Load the dataset\n<font color = red>[5 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "You will see twelve files, one for each month.\n\nTo read parquet files with Pandas, you have to follow a similar syntax as that for CSV files.\n\n`df = pd.read_parquet('file.parquet')`"
  },
  {
   "t": "code",
   "s": "# Try loading one file\n\n# df = pd.read_parquet('2023-1.parquet')\n# df.info()"
  },
  {
   "t": "md",
   "s": "How many rows are there? Do you think handling such a large number of rows is computationally feasible when we have to combine the data for all twelve months into one?\n\nTo handle this, we need to sample a fraction of data from each of the files. How to go about that? Think of a way to select only some portion of the data from each month's file that accurately represents the trends."
  },
  {
   "t": "md",
   "s": "#### Sampling the Data\n> One way is to take a small percentage of entries for pickup in every hour of a date. So, for all the days in a month, we can iterate through the hours and select 5% values randomly from those. Use `tpep_pickup_datetime` for this. Separate date and hour from the datetime values and then for each date, select some fraction of trips for each of the 24 hours.\n\nTo sample data, you can use the `sample()` method. Follow this syntax:\n\n```Python\n# sampled_data is an empty DF to keep appending sampled data of each hour\n# hour_data is the DF of entries for an hour 'X' on a date 'Y'\n\nsample = hour_data.sample(frac = 0.05, random_state = 42)\n# sample 0.05 of the hour_data\n# random_state is just a seed for sampling, you can define it yourself\n\nsampled_data = pd.concat([sampled_data, sample]) # adding data for this hour to the DF\n```\n\nThis *sampled_data* will contain 5% values selected at random from each hour.\n\nNote that the code given above is only the part that will be used for sampling and not the complete code required for sampling and combining the data files.\n\nKeep in mind that you sample by date AND hour, not just hour. (Why?)"
  },
  {
   "t": "md",
   "s": "---"
  },
  {
   "t": "md",
   "s": "**1.1.1** <font color = red>[5 marks]</font> <br>\nFigure out how to sample and combine the files.",
   "ref": "1.1.1"
  },
  {
   "t": "md",
   "s": "**Note:** It is not mandatory to use the method specified above. While sampling, you only need to make sure that your sampled data represents the overall data of all the months accurately."
  },
  {
   "t": "code",
   "s": "# Sample the data\n# It is recommmended to not load all the files at once to avoid memory overload"
  },
  {
   "t": "code",
   "s": "# from google.colab import drive\n# drive.mount('/content/drive')"
  },
  {
   "t": "code",
   "s": "# Take a small percentage of entries from each hour of every date.\n# Iterating through the monthly data:\n#   read a month file -> day -> hour: append sampled data -> move to next hour -> move to next day after 24 hours -> move to next month file\n# Create a single dataframe for the year combining all the monthly data\n\n# Select the folder having data files\nimport os\n\n# Select the folder having data files\nos.chdir('/content/Assignments/EDA/data_NYC_Taxi/trip_records')\n\n# Create a list of all the twelve files to read\nfile_list = os.listdir()\n\n# initialise an empty dataframe\ndf = pd.DataFrame()\n\n\n# iterate through the list of files and sample one by one:\nfor file_name in file_list:\n    try:\n        # file path for the current file\n        file_path = os.path.join(os.getcwd(), file_name)\n\n        # Reading the current file\n\n\n\n        # We will store the sampled data for the current date in this df by appending the sampled data from each hour to this\n        # After completing iteration through each date, we will append this data to the final dataframe.\n        sampled_data = pd.DataFrame()\n\n        # Loop through dates and then loop through every hour of each date\n\n            # Iterate through each hour of the selected date\n\n                # Sample 5% of the hourly data randomly\n\n                # add data of this hour to the dataframe\n\n        # Concatenate the sampled data of all the dates to a single dataframe\n        df = # we initialised this empty DF earlier\n\n    except Exception as e:\n        print(f\"Error reading file {file_name}: {e}\")"
  },
  {
   "t": "md",
   "s": "After combining the data files into one DataFrame, convert the new DataFrame to a CSV or parquet file and store it to use directly.\n\nIdeally, you can try keeping the total entries to around 250,000 to 300,000."
  },
  {
   "t": "code",
   "s": "# Store the df in csv/parquet\n# df.to_parquet('')"
  },
  {
   "t": "md",
   "s": "## **2** Data Cleaning\n<font color = red>[30 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "Now we can load the new data directly."
  },
  {
   "t": "code",
   "s": "# Load the new data file\n\n"
  },
  {
   "t": "code",
   "s": "# df.head()"
  },
  {
   "t": "code",
   "s": "# df.info()"
  },
  {
   "t": "md",
   "s": "#### **2.1** Fixing Columns\n<font color = red>[10 marks]</font> <br>\n\nFix/drop any columns as you seem necessary in the below sections"
  },
  {
   "t": "md",
   "s": "**2.1.1** <font color = red>[2 marks]</font> <br>\n\nFix the index and drop unnecessary columns",
   "ref": "2.1.1"
  },
  {
   "t": "code",
   "s": "# Fix the index and drop any columns that are not needed\n\n"
  },
  {
   "t": "md",
   "s": "**2.1.2** <font color = red>[3 marks]</font> <br>\nThere are two airport fee columns. This is possibly an error in naming columns. Let's see whether these can be combined into a single column.",
   "ref": "2.1.2"
  },
  {
   "t": "code",
   "s": "# Combine the two airport fee columns\n\n"
  },
  {
   "t": "md",
   "s": "**2.1.3** <font color = red>[5 marks]</font> <br>\nFix columns with negative (monetary) values",
   "ref": "2.1.3"
  },
  {
   "t": "code",
   "s": "# check where values of fare amount are negative\n\n"
  },
  {
   "t": "md",
   "s": "Did you notice something different in the `RatecodeID` column for above records?"
  },
  {
   "t": "code",
   "s": "# Analyse RatecodeID for the negative fare amounts\n\n"
  },
  {
   "t": "code",
   "s": "# Find which columns have negative values\n\n"
  },
  {
   "t": "code",
   "s": "# fix these negative values\n\n"
  },
  {
   "t": "md",
   "s": "### **2.2** Handling Missing Values\n<font color = red>[10 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "**2.2.1**  <font color = red>[2 marks]</font> <br>\nFind the proportion of missing values in each column\n\n\n",
   "ref": "2.2.1"
  },
  {
   "t": "code",
   "s": "# Find the proportion of missing values in each column\n\n"
  },
  {
   "t": "md",
   "s": "**2.2.2**  <font color = red>[3 marks]</font> <br>\nHandling missing values in `passenger_count`",
   "ref": "2.2.2"
  },
  {
   "t": "code",
   "s": "# Display the rows with null values\n# Impute NaN values in 'passenger_count'\n"
  },
  {
   "t": "md",
   "s": "Did you find zeroes in passenger_count? Handle these."
  },
  {
   "t": "md",
   "s": "**2.2.3**  <font color = red>[2 marks]</font> <br>\nHandle missing values in `RatecodeID`",
   "ref": "2.2.3"
  },
  {
   "t": "code",
   "s": "# Fix missing values in 'RatecodeID'\n"
  },
  {
   "t": "md",
   "s": "**2.2.4**  <font color = red>[3 marks]</font> <br>\nImpute NaN in `congestion_surcharge`",
   "ref": "2.2.4"
  },
  {
   "t": "code",
   "s": "# handle null values in congestion_surcharge\n\n\n"
  },
  {
   "t": "md",
   "s": "Are there missing values in other columns? Did you find NaN values in some other set of columns? Handle those missing values below."
  },
  {
   "t": "code",
   "s": "# Handle any remaining missing values\n\n"
  },
  {
   "t": "md",
   "s": "### **2.3** Handling Outliers\n<font color = red>[10 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "Before we start fixing outliers, let's perform outlier analysis."
  },
  {
   "t": "code",
   "s": "# Describe the data and check if there are any potential outliers present\n# Check for potential out of place values in various columns\n\n"
  },
  {
   "t": "md",
   "s": "**2.3.1**  <font color = red>[10 marks]</font> <br>\nBased on the above analysis, it seems that some of the outliers are present due to errors in registering the trips. Fix the outliers.\n\nSome points you can look for:\n- Entries where `trip_distance` is nearly 0 and `fare_amount` is more than 300\n- Entries where `trip_distance` and `fare_amount` are 0 but the pickup and dropoff zones are different (both distance and fare should not be zero for different zones)\n- Entries where `trip_distance` is more than 250  miles.\n- Entries where `payment_type` is 0 (there is no payment_type 0 defined in the data dictionary)\n\nThese are just some suggestions. You can handle outliers in any way you wish, using the insights from above outlier analysis.",
   "ref": "2.3.1"
  },
  {
   "t": "md",
   "s": "How will you fix each of these values? Which ones will you drop and which ones will you replace?"
  },
  {
   "t": "md",
   "s": "First, let us remove 7+ passenger counts as there are very less instances."
  },
  {
   "t": "code",
   "s": "# remove passenger_count > 6\n"
  },
  {
   "t": "code",
   "s": "# Continue with outlier handling\n\n"
  },
  {
   "t": "code",
   "s": "# Do any columns need standardising?\n\n"
  },
  {
   "t": "md",
   "s": "## **3** Exploratory Data Analysis\n<font color = red>[90 marks]</font> <br>"
  },
  {
   "t": "code",
   "s": "df.columns.tolist()"
  },
  {
   "t": "md",
   "s": "#### **3.1** General EDA: Finding Patterns and Trends\n<font color = red>[40 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "**3.1.1** <font color = red>[3 marks]</font> <br>\nCategorise the varaibles into Numerical or Categorical.\n* `VendorID`:\n* `tpep_pickup_datetime`:\n* `tpep_dropoff_datetime`:\n* `passenger_count`:\n* `trip_distance`:\n* `RatecodeID`:\n* `PULocationID`:\n* `DOLocationID`:\n* `payment_type`:\n* `pickup_hour`:\n* `trip_duration`:\n\n\nThe following monetary parameters belong in the same category, is it categorical or numerical?\n\n\n* `fare_amount`\n* `extra`\n* `mta_tax`\n* `tip_amount`\n* `tolls_amount`\n* `improvement_surcharge`\n* `total_amount`\n* `congestion_surcharge`\n* `airport_fee`",
   "ref": "3.1.1"
  },
  {
   "t": "md",
   "s": "##### Temporal Analysis"
  },
  {
   "t": "md",
   "s": "**3.1.2** <font color = red>[5 marks]</font> <br>\nAnalyse the distribution of taxi pickups by hours, days of the week, and months.",
   "ref": "3.1.2"
  },
  {
   "t": "code",
   "s": "# Find and show the hourly trends in taxi pickups\n\n"
  },
  {
   "t": "code",
   "s": "# Find and show the daily trends in taxi pickups (days of the week)\n\n"
  },
  {
   "t": "code",
   "s": "# Show the monthly trends in pickups\n\n"
  },
  {
   "t": "md",
   "s": "##### Financial Analysis"
  },
  {
   "t": "md",
   "s": "Take a look at the financial parameters like `fare_amount`, `tip_amount`, `total_amount`, and also `trip_distance`. Do these contain zero/negative values?"
  },
  {
   "t": "code",
   "s": "# Analyse the above parameters\n\n"
  },
  {
   "t": "md",
   "s": "Do you think it is beneficial to create a copy DataFrame leaving out the zero values from these?"
  },
  {
   "t": "md",
   "s": "**3.1.3** <font color = red>[2 marks]</font> <br>\nFilter out the zero values from the above columns.\n\n**Note:** The distance might be 0 in cases where pickup and drop is in the same zone. Do you think it is suitable to drop such cases of zero distance?",
   "ref": "3.1.3"
  },
  {
   "t": "code",
   "s": "# Create a df with non zero entries for the selected parameters.\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.4** <font color = red>[3 marks]</font> <br>\nAnalyse the monthly revenue (`total_amount`) trend",
   "ref": "3.1.4"
  },
  {
   "t": "code",
   "s": "# Group data by month and analyse monthly revenue\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.5** <font color = red>[3 marks]</font> <br>\nShow the proportion of each quarter of the year in the revenue",
   "ref": "3.1.5"
  },
  {
   "t": "code",
   "s": "# Calculate proportion of each quarter\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.6** <font color = red>[3 marks]</font> <br>\nVisualise the relationship between `trip_distance` and `fare_amount`. Also find the correlation value for these two.\n\n**Hint:** You can leave out the trips with trip_distance = 0",
   "ref": "3.1.6"
  },
  {
   "t": "code",
   "s": "# Show how trip fare is affected by distance\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.7** <font color = red>[5 marks]</font> <br>\nFind and visualise the correlation between:\n1. `fare_amount` and trip duration (pickup time to dropoff time)\n2. `fare_amount` and `passenger_count`\n3. `tip_amount` and `trip_distance`",
   "ref": "3.1.7"
  },
  {
   "t": "code",
   "s": "# Show relationship between fare and trip duration\n\n"
  },
  {
   "t": "code",
   "s": "# Show relationship between fare and number of passengers\n\n"
  },
  {
   "t": "code",
   "s": "# Show relationship between tip and trip distance\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.8** <font color = red>[3 marks]</font> <br>\nAnalyse the distribution of different payment types (`payment_type`)",
   "ref": "3.1.8"
  },
  {
   "t": "code",
   "s": "# Analyse the distribution of different payment types (payment_type).\n\n\n"
  },
  {
   "t": "md",
   "s": "- 1= Credit card\n- 2= Cash\n- 3= No charge\n- 4= Dispute\n\n"
  },
  {
   "t": "md",
   "s": "##### Geographical Analysis"
  },
  {
   "t": "md",
   "s": "For this, you have to use the *taxi_zones.shp* file from the *taxi_zones* folder.\n\nThere would be multiple files inside the folder (such as *.shx, .sbx, .sbn* etc). You do not need to import/read any of the files other than the shapefile, *taxi_zones.shp*.\n\nDo not change any folder structure - all the files need to be present inside the folder for it to work.\n\nThe folder structure should look like this:\n```\nTaxi Zones\n|- taxi_zones.shp.xml\n|- taxi_zones.prj\n|- taxi_zones.sbn\n|- taxi_zones.shp\n|- taxi_zones.dbf\n|- taxi_zones.shx\n|- taxi_zones.sbx\n\n ```\n\n You only need to read the `taxi_zones.shp` file. The *shp* file will utilise the other files by itself."
  },
  {
   "t": "md",
   "s": "We will use the *GeoPandas* library for geopgraphical analysis\n```\nimport geopandas as gpd\n```\n\nMore about geopandas and shapefiles: [About](https://geopandas.org/en/stable/about.html)\n\n\nReading the shapefile is very similar to *Pandas*. Use `gpd.read_file()` function to load the data (*taxi_zones.shp*) as a GeoDataFrame. Documentation: [Reading and Writing Files](https://geopandas.org/en/stable/docs/user_guide/io.html)"
  },
  {
   "t": "code",
   "s": "# !pip install geopandas"
  },
  {
   "t": "md",
   "s": "**3.1.9** <font color = red>[2 marks]</font> <br>\nLoad the shapefile and display it.",
   "ref": "3.1.9"
  },
  {
   "t": "code",
   "s": "# import geopandas as gpd\n\n\n# Read the shapefile using geopandas\nzones = # read the .shp file using gpd\nzones.head()"
  },
  {
   "t": "md",
   "s": "Now, if you look at the DataFrame created, you will see columns like: `OBJECTID`,`Shape_Leng`, `Shape_Area`, `zone`, `LocationID`, `borough`, `geometry`.\n<br><br>\n\nNow, the `locationID` here is also what we are using to mark pickup and drop zones in the trip records.\n\nThe geometric parameters like shape length, shape area and geometry are used to plot the zones on a map.\n\nThis can be easily done using the `plot()` method."
  },
  {
   "t": "code",
   "s": "# print(zones.info())\n# zones.plot()"
  },
  {
   "t": "md",
   "s": "Now, you have to merge the trip records and zones data using the location IDs.\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.10** <font color = red>[3 marks]</font> <br>\nMerge the zones data into trip data using the `locationID` and `PULocationID` columns.",
   "ref": "3.1.10"
  },
  {
   "t": "code",
   "s": "# Merge zones and trip records using locationID and PULocationID\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.11** <font color = red>[3 marks]</font> <br>\nGroup data by location IDs to find the total number of trips per location ID",
   "ref": "3.1.11"
  },
  {
   "t": "code",
   "s": "# Group data by location and calculate the number of trips\n\n"
  },
  {
   "t": "md",
   "s": "**3.1.12** <font color = red>[2 marks]</font> <br>\nNow, use the grouped data to add number of trips to the GeoDataFrame.\n\nWe will use this to plot a map of zones showing total trips per zone.",
   "ref": "3.1.12"
  },
  {
   "t": "code",
   "s": "# Merge trip counts back to the zones GeoDataFrame\n\n\n"
  },
  {
   "t": "md",
   "s": "The next step is creating a color map (choropleth map) showing zones by the number of trips taken.\n\nAgain, you can use the `zones.plot()` method for this. [Plot Method GPD](https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.plot.html#geopandas.GeoDataFrame.plot)\n\nBut first, you need to define the figure and axis for the plot.\n\n`fig, ax = plt.subplots(1, 1, figsize = (12, 10))`\n\nThis function creates a figure (fig) and a single subplot (ax)\n\n---"
  },
  {
   "t": "md",
   "s": "After setting up the figure and axis, we can proceed to plot the GeoDataFrame on this axis. This is done in the next step where we use the plot method of the GeoDataFrame.\n\nYou can define the following parameters in the `zones.plot()` method:\n```\ncolumn = '',\nax = ax,\nlegend = True,\nlegend_kwds = {'label': \"label\", 'orientation': \"<horizontal/vertical>\"}\n```\n\nTo display the plot, use `plt.show()`."
  },
  {
   "t": "md",
   "s": "**3.1.13** <font color = red>[3 marks]</font> <br>\nPlot a color-coded map showing zone-wise trips",
   "ref": "3.1.13"
  },
  {
   "t": "code",
   "s": "# Define figure and axis\n\n\n# Plot the map and display it\n\n"
  },
  {
   "t": "code",
   "s": "# can you try displaying the zones DF sorted by the number of trips?\n\n"
  },
  {
   "t": "md",
   "s": "Here we have completed the temporal, financial and geographical analysis on the trip records.\n\n**Compile your findings from general analysis below:**"
  },
  {
   "t": "md",
   "s": "You can consider the following points:\n\n* Busiest hours, days and months\n* Trends in revenue collected\n* Trends in quarterly revenue\n* How fare depends on trip distance, trip duration and passenger counts\n* How tip amount depends on trip distance\n* Busiest zones\n"
  },
  {
   "t": "md",
   "s": "#### **3.2** Detailed EDA: Insights and Strategies\n<font color = red>[50 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "Having performed basic analyses for finding trends and patterns, we will now move on to some detailed analysis focussed on operational efficiency, pricing strategies, and customer experience."
  },
  {
   "t": "md",
   "s": "##### Operational Efficiency"
  },
  {
   "t": "md",
   "s": "Analyze variations by time of day and location to identify bottlenecks or inefficiencies in routes"
  },
  {
   "t": "md",
   "s": "**3.2.1** <font color = red>[3 marks]</font> <br>\nIdentify slow routes by calculating the average time taken by cabs to get from one zone to another at different hours of the day.",
   "ref": "3.2.1"
  },
  {
   "t": "md",
   "s": "Speed on a route *X* for hour *Y* = (*distance of the route X / average trip duration for hour Y*)"
  },
  {
   "t": "code",
   "s": "# Find routes which have the slowest speeds at different times of the day\n\n"
  },
  {
   "t": "md",
   "s": "How does identifying high-traffic, high-demand routes help us?"
  },
  {
   "t": "md",
   "s": "**3.2.2** <font color = red>[3 marks]</font> <br>\nCalculate the number of trips at each hour of the day and visualise them. Find the busiest hour and show the number of trips for that hour.",
   "ref": "3.2.2"
  },
  {
   "t": "code",
   "s": "# Visualise the number of trips per hour and find the busiest hour\n\n"
  },
  {
   "t": "md",
   "s": "Remember, we took a fraction of trips. To find the actual number, you have to scale the number up by the sampling ratio."
  },
  {
   "t": "md",
   "s": "**3.2.3** <font color = red>[2 mark]</font> <br>\nFind the actual number of trips in the five busiest hours",
   "ref": "3.2.3"
  },
  {
   "t": "code",
   "s": "# Scale up the number of trips\n\n# Fill in the value of your sampling fraction and use that to scale up the numbers\nsample_fraction =\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.4** <font color = red>[3 marks]</font> <br>\nCompare hourly traffic pattern on weekdays. Also compare for weekend.",
   "ref": "3.2.4"
  },
  {
   "t": "code",
   "s": "# Compare traffic trends for the week days and weekends\n\n"
  },
  {
   "t": "md",
   "s": "What can you infer from the above patterns? How will finding busy and quiet hours for each day help us?"
  },
  {
   "t": "md",
   "s": "**3.2.5** <font color = red>[3 marks]</font> <br>\nIdentify top 10 zones with high hourly pickups. Do the same for hourly dropoffs. Show pickup and dropoff trends in these zones.",
   "ref": "3.2.5"
  },
  {
   "t": "code",
   "s": "# Find top 10 pickup and dropoff zones\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.6** <font color = red>[3 marks]</font> <br>\nFind the ratio of pickups and dropoffs in each zone. Display the 10 highest (pickup/drop) and 10 lowest (pickup/drop) ratios.",
   "ref": "3.2.6"
  },
  {
   "t": "code",
   "s": "# Find the top 10 and bottom 10 pickup/dropoff ratios\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.7** <font color = red>[3 marks]</font> <br>\nIdentify zones with high pickup and dropoff traffic during night hours (11PM to 5AM)",
   "ref": "3.2.7"
  },
  {
   "t": "code",
   "s": "# During night hours (11pm to 5am) find the top 10 pickup and dropoff zones\n# Note that the top zones should be of night hours and not the overall top zones\n\n"
  },
  {
   "t": "md",
   "s": "Now, let us find the revenue share for the night time hours and the day time hours. After this, we will move to deciding a pricing strategy.\n\n**3.2.8** <font color = red>[2 marks]</font> <br>\nFind the revenue share for nighttime and daytime hours.",
   "ref": "3.2.8"
  },
  {
   "t": "code",
   "s": "# Filter for night hours (11 PM to 5 AM)\n\n"
  },
  {
   "t": "md",
   "s": "##### Pricing Strategy"
  },
  {
   "t": "md",
   "s": "**3.2.9** <font color = red>[2 marks]</font> <br>\nFor the different passenger counts, find the average fare per mile per passenger.\n\nFor instance, suppose the average fare per mile for trips with 3 passengers is 3 USD/mile, then the fare per mile per passenger will be 1 USD/mile.",
   "ref": "3.2.9"
  },
  {
   "t": "code",
   "s": "# Analyse the fare per mile per passenger for different passenger counts\n\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.10** <font color = red>[3 marks]</font> <br>\nFind the average fare per mile by hours of the day and by days of the week",
   "ref": "3.2.10"
  },
  {
   "t": "code",
   "s": "# Compare the average fare per mile for different days and for different times of the day\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.11** <font color = red>[3 marks]</font> <br>\nAnalyse the average fare per mile for the different vendors for different hours of the day",
   "ref": "3.2.11"
  },
  {
   "t": "code",
   "s": "# Compare fare per mile for different vendors\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.12** <font color = red>[5 marks]</font> <br>\nCompare the fare rates of the different vendors in a tiered fashion. Analyse the average fare per mile for distances upto 2 miles. Analyse the fare per mile for distances from 2 to 5 miles. And then for distances more than 5 miles.\n",
   "ref": "3.2.12"
  },
  {
   "t": "code",
   "s": "# Defining distance tiers\n\n"
  },
  {
   "t": "md",
   "s": "##### Customer Experience and Other Factors"
  },
  {
   "t": "md",
   "s": "**3.2.13** <font color = red>[5 marks]</font> <br>\nAnalyse average tip percentages based on trip distances, passenger counts and time of pickup. What factors lead to low tip percentages?",
   "ref": "3.2.13"
  },
  {
   "t": "code",
   "s": "#  Analyze tip percentages based on distances, passenger counts and pickup times\n\n"
  },
  {
   "t": "md",
   "s": "Additional analysis [optional]: Let's try comparing cases of low tips with cases of high tips to find out if we find a clear aspect that drives up the tipping behaviours"
  },
  {
   "t": "code",
   "s": "# Compare trips with tip percentage < 10% to trips with tip percentage > 25%\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.14** <font color = red>[3 marks]</font> <br>\nAnalyse the variation of passenger count across hours and days of the week.",
   "ref": "3.2.14"
  },
  {
   "t": "code",
   "s": "# See how passenger count varies across hours and days\n\n\n"
  },
  {
   "t": "md",
   "s": "**3.2.15** <font color = red>[2 marks]</font> <br>\nAnalyse the variation of passenger counts across zones",
   "ref": "3.2.15"
  },
  {
   "t": "code",
   "s": "# How does passenger count vary across zones\n\n"
  },
  {
   "t": "code",
   "s": "# For a more detailed analysis, we can use the zones_with_trips GeoDataFrame\n# Create a new column for the average passenger count in each zone.\n\n"
  },
  {
   "t": "md",
   "s": "Find out how often surcharges/extra charges are applied to understand their prevalance"
  },
  {
   "t": "md",
   "s": "**3.2.16** <font color = red>[5 marks]</font> <br>\nAnalyse the pickup/dropoff zones or times when extra charges are applied more frequently",
   "ref": "3.2.16"
  },
  {
   "t": "code",
   "s": "# How often is each surcharge applied?\n\n"
  },
  {
   "t": "md",
   "s": "## **4** Conclusion\n<font color = red>[15 marks]</font> <br>"
  },
  {
   "t": "md",
   "s": "### **4.1** Final Insights and Recommendations\n<font color = red>[15 marks]</font> <br>\n\nConclude your analyses here. Include all the outcomes you found based on the analysis.\n\nBased on the insights, frame a concluding story explaining suitable parameters such as location, time of the day, day of the week etc. to be kept in mind while devising a strategy to meet customer demand and optimise supply."
  },
  {
   "t": "md",
   "s": "**4.1.1** <font color = red>[5 marks]</font> <br>\nRecommendations to optimize routing and dispatching based on demand patterns and operational inefficiencies",
   "ref": "4.1.1"
  },
  {
   "t": "code",
   "s": ""
  },
  {
   "t": "md",
   "s": "**4.1.2** <font color = red>[5 marks]</font> <br>\n\nSuggestions on strategically positioning cabs across different zones to make best use of insights uncovered by analysing trip trends across time, days and months.",
   "ref": "4.1.2"
  },
  {
   "t": "code",
   "s": ""
  },
  {
   "t": "md",
   "s": "**4.1.3** <font color = red>[5 marks]</font> <br>\nPropose data-driven adjustments to the pricing strategy to maximize revenue while maintaining competitive rates with other vendors.",
   "ref": "4.1.3"
  },
  {
   "t": "code",
   "s": ""
  }
 ],
 "guides": {
  "1.1.1": {
   "vi": {
    "think": "Mỗi file tháng có hàng triệu dòng. Bạn không tải hết, bạn lấy 5% của từng giờ trong từng ngày để mẫu giữ nhịp thật của cả năm.",
    "steps": [
     "Đọc từng file một, không đọc cả 12 file cùng lúc.",
     "Tạo cột ngày và giờ từ tpep_pickup_datetime.",
     "Với mỗi ngày, mỗi giờ: lấy sample(frac=0.05, random_state=42).",
     "Nối kết quả của các giờ rồi các ngày thành một bảng của tháng, rồi nối 12 tháng.",
     "Lưu ra parquet và đếm số dòng. Với dữ liệu đầy đủ 38,3 triệu chuyến, 5% ra khoảng 1,9 triệu dòng; muốn còn 250.000 đến 300.000 như đề gợi ý thì lấy khoảng 0,7%. Nhớ dùng đúng tỷ lệ này ở bài 3.2.3."
    ],
    "code": "df = pd.DataFrame()\nfor file_name in file_list:\n    month = pd.read_parquet(file_path)\n    month['date'] = month['tpep_pickup_datetime'].dt.date\n    month['hour'] = month['tpep_pickup_datetime'].dt.hour\n    parts = []\n    for (d, h), grp in month.groupby(['date', 'hour']):\n        parts.append(grp.sample(frac=0.05, random_state=42))\n    df = pd.concat([df] + parts)\ndf = df.drop(columns=['date', 'hour'])",
    "lotus": "Sổ booking Lotus Spa có 12 tháng. Lấy 5% theo từng ngày và từng giờ giữ được cả giờ vắng lẫn giờ đông. Nếu chỉ lấy 5% theo giờ chung cho cả năm, giờ nào của ngày nào cũng bị trộn lẫn.",
    "trap": "Lấy mẫu theo giờ mà không theo ngày sẽ làm lệch các ngày ít xe. Ghi lại sample_fraction vì bài 3.2.3 cần nó để nhân lên.",
    "read": [
     "Mỗi dòng là một file tháng: số chuyến gốc → số chuyến trong mẫu 5%.",
     "Dòng cuối là tổng cả năm và số dòng của mẫu."
    ],
    "remark": "Cả năm 2023 có 38.310.226 chuyến; mẫu 5% mỗi giờ mỗi ngày lấy khoảng 1,9 triệu dòng, vẫn giữ nhịp theo từng tháng (mỗi tháng 141–176 nghìn dòng).",
    "howRemark": [
     "Nêu tổng chuyến cả năm và cỡ mẫu.",
     "Kiểm tỷ lệ lấy mẫu ≈ 5% mỗi tháng.",
     "Nói vì sao lấy mẫu theo giờ và ngày."
    ]
   },
   "en": {
    "think": "Each monthly file has millions of rows. You do not load everything; you take 5% of every hour of every day so the sample keeps the real rhythm of the whole year.",
    "steps": [
     "Read one file at a time, not all 12 at once.",
     "Create a date and an hour column from tpep_pickup_datetime.",
     "For each date and hour: take sample(frac=0.05, random_state=42).",
     "Concatenate the hours, then the days, into one month table, then the 12 months.",
     "Save to parquet and count rows. With the full 38.3 million trips, 5% gives about 1.9 million rows; to land at 250,000 to 300,000 as the brief suggests, sample about 0.7%. Use the same fraction in task 3.2.3."
    ],
    "code": "df = pd.DataFrame()\nfor file_name in file_list:\n    month = pd.read_parquet(file_path)\n    month['date'] = month['tpep_pickup_datetime'].dt.date\n    month['hour'] = month['tpep_pickup_datetime'].dt.hour\n    parts = []\n    for (d, h), grp in month.groupby(['date', 'hour']):\n        parts.append(grp.sample(frac=0.05, random_state=42))\n    df = pd.concat([df] + parts)\ndf = df.drop(columns=['date', 'hour'])",
    "lotus": "The Lotus Spa booking log covers 12 months. Taking 5% by each day and each hour keeps both quiet and busy hours. Taking 5% by hour across the whole year would blend every day together.",
    "trap": "Sampling by hour without the date skews quiet days. Record sample_fraction because task 3.2.3 needs it to scale up.",
    "read": [
     "Each line is a monthly file: original trips → trips in the 5% sample.",
     "The last line is the yearly total and the sample size."
    ],
    "remark": "2023 has 38,310,226 trips; the 5% per hour per day sample keeps about 1.9 million rows, preserving each month's rhythm (141–176 thousand rows per month).",
    "howRemark": [
     "State the yearly total and sample size.",
     "Check the sampling rate ≈ 5% each month.",
     "Say why sample by hour and day."
    ]
   }
  },
  "2.1.1": {
   "vi": {
    "think": "Sau khi nối và đọc lại, bảng có thể mang thêm cột chỉ số cũ. Bạn đặt lại chỉ số và bỏ cột không phục vụ câu hỏi.",
    "steps": [
     "df = df.reset_index(drop=True).",
     "Xem df.columns và bỏ cột dư (ví dụ cột chỉ số cũ, hoặc cột mà bạn quyết định không dùng, như store_and_fwd_flag).",
     "Ghi lý do bỏ mỗi cột trong một dòng chú thích."
    ],
    "code": "df = df.reset_index(drop=True)\n# drop columns you will not use, with a reason for each\ndf = df.drop(columns=['store_and_fwd_flag'])",
    "lotus": "Bảng booking có cột «mã in phiếu» không dùng cho câu hỏi nào. Bỏ nó đi và ghi lý do, để tháng sau mở lại không phải đoán.",
    "trap": "Đừng bỏ cột chỉ vì không hiểu nó. Bỏ vì biết mình không cần.",
    "read": [
     "Mỗi dòng là một cột: tên, kiểu dữ liệu.",
     "Tổng 1.915.510 dòng và 20 cột sau khi nối 12 tháng.",
     "datetime64 là thời điểm; float64 là số thập phân."
    ],
    "remark": "Bảng gộp có 1.915.510 dòng × 20 cột; hai cột giờ đã đúng kiểu thời gian nên tính được thời lượng chuyến.",
    "howRemark": [
     "Báo hình dạng.",
     "Kiểm kiểu dữ liệu cột giờ.",
     "Nêu cột bỏ hoặc đổi."
    ]
   },
   "en": {
    "think": "After combining and re-reading, the table may carry a leftover index column. You reset the index and drop columns that do not serve the question.",
    "steps": [
     "df = df.reset_index(drop=True).",
     "Look at df.columns and drop extras (for example an old index column, or a column you decide not to use, such as store_and_fwd_flag).",
     "Write one comment line giving the reason for each drop."
    ],
    "code": "df = df.reset_index(drop=True)\n# drop columns you will not use, with a reason for each\ndf = df.drop(columns=['store_and_fwd_flag'])",
    "lotus": "The booking table has a “receipt print code” column no question uses. Drop it and note why, so reopening next month needs no guessing.",
    "trap": "Do not drop a column because you do not understand it. Drop it because you know you do not need it.",
    "read": [
     "Each row is a column: name and data type.",
     "1,915,510 rows and 20 columns after joining 12 months.",
     "datetime64 is a timestamp; float64 a decimal number."
    ],
    "remark": "The merged table has 1,915,510 rows × 20 columns; the two time columns have the right type so trip duration can be computed.",
    "howRemark": [
     "Report the shape.",
     "Check the time columns' types.",
     "State columns dropped or converted."
    ]
   }
  },
  "2.1.2": {
   "vi": {
    "think": "Cùng một cột bị ghi hai kiểu chữ: Airport_fee và airport_fee. Tháng này dùng tên này, tháng kia dùng tên kia, nên nối lại sinh hai cột lấp nhau.",
    "steps": [
     "Đếm giá trị không rỗng của mỗi cột: df[['Airport_fee','airport_fee']].notna().sum().",
     "Kiểm tra hai cột không cùng có giá trị trên một dòng.",
     "Gộp: df['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee']).",
     "Bỏ cột còn lại."
    ],
    "code": "print(df[['Airport_fee', 'airport_fee']].notna().sum())\nboth = df['Airport_fee'].notna() & df['airport_fee'].notna()\nprint(both.sum())  # expect 0\ndf['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee'])\ndf = df.drop(columns=['Airport_fee'])",
    "lotus": "Chi nhánh Quận 1 ghi «Khu_vực», chi nhánh Thủ Đức ghi «khu_vuc». Nối hai sổ lại ra hai cột nửa rỗng. Gộp thành một cột trước khi đếm.",
    "trap": "Nếu hai cột cùng có giá trị trên một dòng thì không được gộp bằng combine_first mà không xem lại.",
    "read": [
     "Dòng đầu là hai tên cột trùng nghĩa: airport_fee và Airport_fee.",
     "Bảng describe là cột đã gộp: min −1,75, max 1,75."
    ],
    "remark": "Hai tên cột chỉ khác chữ hoa nhưng cùng một phí; đã gộp thành một cột airport_fee (trung bình 0,14, giá trị từ −1,75 đến 1,75).",
    "howRemark": [
     "Nêu hai tên và vì sao nên gộp.",
     "Kiểm cột gộp có đủ dòng.",
     "Nhắc giá trị âm xử lý ở 2.1.3."
    ]
   },
   "en": {
    "think": "The same column is spelled two ways: Airport_fee and airport_fee. One month uses one name, another month the other, so concatenation creates two complementary columns.",
    "steps": [
     "Count non-null values in each: df[['Airport_fee','airport_fee']].notna().sum().",
     "Check the two never both hold a value on one row.",
     "Merge: df['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee']).",
     "Drop the leftover column."
    ],
    "code": "print(df[['Airport_fee', 'airport_fee']].notna().sum())\nboth = df['Airport_fee'].notna() & df['airport_fee'].notna()\nprint(both.sum())  # expect 0\ndf['airport_fee'] = df['airport_fee'].combine_first(df['Airport_fee'])\ndf = df.drop(columns=['Airport_fee'])",
    "lotus": "District 1 writes “Khu_vuc”, Thu Duc writes “khu_vuc”. Joining the two logs gives two half-empty columns. Merge into one before counting.",
    "trap": "If both columns hold a value on one row, do not merge with combine_first without looking again.",
    "read": [
     "First line shows two same-meaning names: airport_fee and Airport_fee.",
     "The describe table is the merged column: min −1.75, max 1.75."
    ],
    "remark": "The two names differ only by case but are the same fee; merged into one airport_fee column (mean 0.14, values from −1.75 to 1.75).",
    "howRemark": [
     "State both names and why to merge.",
     "Check the merged column has all rows.",
     "Remind negatives are handled in 2.1.3."
    ]
   }
  },
  "2.1.3": {
   "vi": {
    "think": "Có dòng tiền âm. Trước khi sửa, hỏi nó là gì: thường là hoàn tiền hoặc tranh chấp, không phải giá âm thật.",
    "steps": [
     "Lọc df[df['fare_amount'] < 0] và đếm.",
     "Xem RatecodeID và payment_type của các dòng đó (task hỏi cột RatecodeID khác thế nào).",
     "Tìm mọi cột tiền có giá trị âm: (df[money_cols] < 0).sum().",
     "Quyết định: lấy trị tuyệt đối nếu số âm là hoàn tiền ghi ngược dấu; bỏ nếu là lỗi."
    ],
    "code": "money = ['fare_amount','extra','mta_tax','tip_amount','tolls_amount','improvement_surcharge','total_amount','congestion_surcharge','airport_fee']\nprint((df[money] < 0).sum())\nneg = df[df['fare_amount'] < 0]\nprint(neg['RatecodeID'].value_counts(dropna=False))\nprint(neg['payment_type'].value_counts())\ndf[money] = df[money].abs()",
    "lotus": "Một dòng booking ghi -650 nghìn. Đó là hoàn tiền gói A12, không phải spa trả tiền cho khách. Hiểu nó là hoàn tiền thì mới chọn lấy trị tuyệt đối hoặc giữ riêng.",
    "trap": "Sửa dấu hàng loạt mà không nhìn các dòng đó là gì có thể che mất một nhóm giao dịch hoàn tiền.",
    "read": [
     "Bảng đầu: số dòng âm ở mỗi cột tiền; fare_amount có 19.059 dòng âm.",
     "Bảng sau: số chuyến theo RatecodeID, mã 1 là giá chuẩn.",
     "Dòng âm thường là hoàn tiền hoặc tranh chấp."
    ],
    "remark": "Có hàng chục nghìn dòng tiền âm (fare_amount 19.059, total_amount 18.801), chủ yếu là hoàn tiền hoặc tranh chấp, nên xử lý bằng quy tắc rõ ràng thay vì sửa tùy ý.",
    "howRemark": [
     "Nêu cột có nhiều dòng âm.",
     "Giải thích nguyên nhân có thể.",
     "Nói quyết định: bỏ hay đổi dấu, và vì sao."
    ]
   },
   "en": {
    "think": "Some rows carry negative money. Before fixing, ask what they are: usually refunds or disputes, not truly negative prices.",
    "steps": [
     "Filter df[df['fare_amount'] < 0] and count.",
     "Look at RatecodeID and payment_type for those rows (the task asks what is different in RatecodeID).",
     "Find every money column with negatives: (df[money_cols] < 0).sum().",
     "Decide: take the absolute value if negatives are refunds recorded with a flipped sign; drop if they are errors."
    ],
    "code": "money = ['fare_amount','extra','mta_tax','tip_amount','tolls_amount','improvement_surcharge','total_amount','congestion_surcharge','airport_fee']\nprint((df[money] < 0).sum())\nneg = df[df['fare_amount'] < 0]\nprint(neg['RatecodeID'].value_counts(dropna=False))\nprint(neg['payment_type'].value_counts())\ndf[money] = df[money].abs()",
    "lotus": "One booking row shows -650 thousand. It is a refund of package A12, not the spa paying the customer. Knowing it is a refund is what lets you choose absolute value or keeping it apart.",
    "trap": "Flipping signs in bulk without looking at what those rows are can hide a whole group of refund transactions.",
    "read": [
     "First table: negative rows per money column; fare_amount has 19,059.",
     "Second table: trips per RatecodeID, code 1 is the standard fare.",
     "Negative rows are usually refunds or disputes."
    ],
    "remark": "There are tens of thousands of negative money rows (fare_amount 19,059, total_amount 18,801), mostly refunds or disputes, so handle them by a clear rule rather than ad hoc fixes.",
    "howRemark": [
     "Name the columns with many negatives.",
     "Explain the likely cause.",
     "State the decision: drop or flip sign, and why."
    ]
   }
  },
  "2.2.1": {
   "vi": {
    "think": "Trước khi điền chỗ trống, đếm chỗ trống: cột nào thiếu bao nhiêu phần trăm.",
    "steps": [
     "df.isnull().mean() * 100.",
     "Sắp xếp giảm dần và chỉ xem cột có thiếu.",
     "Nhìn xem các cột thiếu có thiếu cùng các dòng không."
    ],
    "code": "miss = (df.isnull().mean() * 100).sort_values(ascending=False)\nprint(miss[miss > 0])\n# do the same rows miss several columns?\ncols = ['passenger_count','RatecodeID','congestion_surcharge','airport_fee']\nprint(df[cols].isnull().all(axis=1).mean())",
    "lotus": "Trong bảng booking, nếu «số khách», «mã gói» và «phụ phí» cùng trống trên cùng các dòng thì đó là một nguồn nhập thiếu, không phải ba lỗi riêng.",
    "trap": "Điền từng cột riêng lẻ trước khi biết chúng thiếu cùng nhau hay không là điền khi chưa hiểu.",
    "read": [
     "Mỗi dòng là % thiếu của một cột; cả năm cột cùng 3,43%.",
     "Cùng tỷ lệ nghĩa là thiếu theo cả dòng, không rải rác."
    ],
    "remark": "Năm cột cùng thiếu 3,43%: các dòng này thiếu nguyên một khối thông tin, nên có thể cùng một nguyên nhân và xử lý chung.",
    "howRemark": [
     "Báo % từng cột.",
     "Nhận ra các tỷ lệ giống nhau.",
     "Nêu cách xử lý chung."
    ]
   },
   "en": {
    "think": "Before filling blanks, count blanks: which column misses what percentage.",
    "steps": [
     "df.isnull().mean() * 100.",
     "Sort descending and look only at columns with gaps.",
     "Check whether the gappy columns miss the same rows."
    ],
    "code": "miss = (df.isnull().mean() * 100).sort_values(ascending=False)\nprint(miss[miss > 0])\n# do the same rows miss several columns?\ncols = ['passenger_count','RatecodeID','congestion_surcharge','airport_fee']\nprint(df[cols].isnull().all(axis=1).mean())",
    "lotus": "In the booking table, if “guests”, “package code” and “surcharge” are blank on the same rows, that is one source of missing entry, not three separate faults.",
    "trap": "Filling each column on its own before knowing whether they are missing together is filling without understanding.",
    "read": [
     "Each line is a column's % missing; all five at 3.43%.",
     "The same rate means whole rows are missing, not scattered cells."
    ],
    "remark": "Five columns share the same 3.43% missing: those rows lack a whole block of info, likely one cause and handled together.",
    "howRemark": [
     "Report each column's %.",
     "Notice the identical rates.",
     "State a joint treatment."
    ]
   }
  },
  "2.2.2": {
   "vi": {
    "think": "passenger_count thiếu và có cả số 0. Số 0 khách không có nghĩa, nên coi như thiếu.",
    "steps": [
     "Xem các dòng NaN: df[df['passenger_count'].isnull()].head().",
     "Đếm số 0: (df['passenger_count'] == 0).sum().",
     "Đổi 0 thành NaN rồi điền bằng giá trị thường gặp nhất (mode), vì đây là số đếm nguyên."
    ],
    "code": "print(df['passenger_count'].value_counts(dropna=False).sort_index())\ndf['passenger_count'] = df['passenger_count'].replace(0, np.nan)\ndf['passenger_count'] = df['passenger_count'].fillna(df['passenger_count'].mode()[0])",
    "lotus": "Một booking ghi 0 khách thì chắc chắn nhập thiếu. Điền bằng 1 (giá trị thường gặp nhất) tốt hơn điền bằng trung bình 1,4 vì khách là số nguyên.",
    "trap": "Điền trung bình sẽ ra 1,37 hành khách: một số không tồn tại ở đời thực.",
    "read": [
     "Bảng đếm số chuyến theo số khách; có 0 khách (28.990) và thiếu (65.735).",
     "7, 8, 9 khách rất ít, có thể là lỗi."
    ],
    "remark": "Đa số chuyến 1 khách (1.390.732); 28.990 dòng 0 khách là vô lý và 65.735 dòng thiếu, nên coi 0 như thiếu rồi xử lý chung.",
    "howRemark": [
     "Nêu giá trị bất thường.",
     "Giải thích vì sao 0 là thiếu.",
     "Chọn cách điền và lý do."
    ]
   },
   "en": {
    "think": "passenger_count has blanks and also zeros. Zero passengers has no meaning, so treat it as missing.",
    "steps": [
     "Look at the NaN rows: df[df['passenger_count'].isnull()].head().",
     "Count zeros: (df['passenger_count'] == 0).sum().",
     "Turn 0 into NaN, then fill with the most common value (mode), since it is an integer count."
    ],
    "code": "print(df['passenger_count'].value_counts(dropna=False).sort_index())\ndf['passenger_count'] = df['passenger_count'].replace(0, np.nan)\ndf['passenger_count'] = df['passenger_count'].fillna(df['passenger_count'].mode()[0])",
    "lotus": "A booking with 0 guests was surely entered wrongly. Filling with 1 (the most common) beats filling with a mean of 1.4 because guests are whole numbers.",
    "trap": "Filling with the mean gives 1.37 passengers: a number that does not exist in real life.",
    "read": [
     "The table counts trips by passenger number; zero (28,990) and missing (65,735).",
     "7, 8, 9 passengers are very few, maybe errors."
    ],
    "remark": "Most trips carry 1 passenger (1,390,732); 28,990 zero-passenger rows are meaningless and 65,735 are missing, so treat 0 as missing and handle together.",
    "howRemark": [
     "Name the abnormal values.",
     "Explain why 0 is missing.",
     "Choose the fill and the reason."
    ]
   }
  },
  "2.2.3": {
   "vi": {
    "think": "RatecodeID là mã, không phải số để lấy trung bình. Điền bằng mã thường gặp nhất.",
    "steps": [
     "Xem phân bố: df['RatecodeID'].value_counts(dropna=False).",
     "Điền bằng mode, thường là 1 (giá chuẩn).",
     "Kiểm tra lại không còn NaN."
    ],
    "code": "print(df['RatecodeID'].value_counts(dropna=False))\ndf['RatecodeID'] = df['RatecodeID'].fillna(df['RatecodeID'].mode()[0])",
    "lotus": "Mã gói là A12, B07, C03: không có «trung bình của A12 và B07». Chỉ điền bằng mã hay gặp nhất.",
    "trap": "Trung bình của một mã vô nghĩa. Dùng mode cho cột mã.",
    "read": [
     "Bảng đếm RatecodeID: mã 1 áp đảo (1.744.049), có mã 99 (10.649) và thiếu (65.735).",
     "Mã 99 không có trong từ điển dữ liệu."
    ],
    "remark": "RatecodeID mã 1 chiếm áp đảo nên điền chỗ thiếu bằng mã 1 (mốt); mã 99 là giá trị lạ cần chú ý.",
    "howRemark": [
     "Nêu mã phổ biến nhất.",
     "Giải thích vì sao dùng mốt, không dùng trung bình.",
     "Ghi chú mã 99."
    ]
   },
   "en": {
    "think": "RatecodeID is a code, not a number to average. Fill with the most common code.",
    "steps": [
     "Look at the distribution: df['RatecodeID'].value_counts(dropna=False).",
     "Fill with the mode, usually 1 (standard rate).",
     "Check that no NaN remains."
    ],
    "code": "print(df['RatecodeID'].value_counts(dropna=False))\ndf['RatecodeID'] = df['RatecodeID'].fillna(df['RatecodeID'].mode()[0])",
    "lotus": "Package codes are A12, B07, C03: there is no “average of A12 and B07”. Fill only with the most common code.",
    "trap": "The average of a code is meaningless. Use the mode for code columns.",
    "read": [
     "Counts of RatecodeID: code 1 dominates (1,744,049), with 99 (10,649) and missing (65,735).",
     "Code 99 is not in the data dictionary."
    ],
    "remark": "RatecodeID code 1 dominates, so fill missing with 1 (the mode); code 99 is an odd value to note.",
    "howRemark": [
     "Name the most common code.",
     "Explain why mode, not mean.",
     "Note code 99."
    ]
   }
  },
  "2.2.4": {
   "vi": {
    "think": "congestion_surcharge thiếu. Phí này chỉ áp dụng ở một số chuyến, nên 0 là một giá trị có nghĩa, không phải thiếu bừa.",
    "steps": [
     "Xem phân bố: df['congestion_surcharge'].value_counts(dropna=False).",
     "Xem các dòng NaN có phải cùng các dòng thiếu RatecodeID và passenger_count không.",
     "Điền 0 nếu coi là «không áp dụng», hoặc điền mode (thường 2.5) nếu bạn lập luận chuyến đó thuộc vùng áp phí. Ghi quyết định."
    ],
    "code": "print(df['congestion_surcharge'].value_counts(dropna=False))\ndf['congestion_surcharge'] = df['congestion_surcharge'].fillna(df['congestion_surcharge'].mode()[0])",
    "lotus": "Phụ phí ngoài giờ chỉ áp dụng ở vài khung giờ. Dòng thiếu phụ phí có thể là «không áp dụng» (0) hay «quên ghi» (mức thường). Hai cách điền cho ra hai tổng doanh thu khác nhau.",
    "trap": "Chọn mode hay 0 đổi tổng phụ phí. Nói rõ mình đã chọn gì và vì sao.",
    "read": [
     "Bảng đếm congestion_surcharge: 2,5 (1.705.676), 0 (144.099), thiếu (65.735).",
     "Dòng cuối: 65.735 ô trống còn lại để xử lý."
    ],
    "remark": "Phí chỉ có hai giá trị là 2,5 và 0; 0 là có nghĩa (chuyến không phải trả), nên chỗ thiếu được điền 0 và còn lại 65.735 ô trống cần quyết định.",
    "howRemark": [
     "Nêu các giá trị thật.",
     "Giải thích 0 là giá trị hợp lệ.",
     "Nêu số ô trống còn lại."
    ]
   },
   "en": {
    "think": "congestion_surcharge has gaps. This fee applies only to some trips, so 0 is a meaningful value, not a lazy fill.",
    "steps": [
     "Look at the distribution: df['congestion_surcharge'].value_counts(dropna=False).",
     "Check whether the NaN rows are the same ones missing RatecodeID and passenger_count.",
     "Fill with 0 if you treat it as “not applicable”, or with the mode (usually 2.5) if you argue the trip falls in a charged zone. Record the decision."
    ],
    "code": "print(df['congestion_surcharge'].value_counts(dropna=False))\ndf['congestion_surcharge'] = df['congestion_surcharge'].fillna(df['congestion_surcharge'].mode()[0])",
    "lotus": "The off-peak surcharge applies in only a few time windows. A row missing it may mean “not applicable” (0) or “forgot to record” (the usual rate). The two fills give different total revenue.",
    "trap": "Choosing mode or 0 changes the surcharge total. State what you chose and why.",
    "read": [
     "Counts of congestion_surcharge: 2.5 (1,705,676), 0 (144,099), missing (65,735).",
     "Last line: 65,735 blanks left to handle."
    ],
    "remark": "The fee has only two values, 2.5 and 0; 0 is meaningful (trip not charged), so fill gaps with 0, leaving 65,735 blanks to decide.",
    "howRemark": [
     "Name the real values.",
     "Explain why 0 is valid.",
     "State the blanks left."
    ]
   }
  },
  "2.3.1": {
   "vi": {
    "think": "Phân tích phân phối trước, rồi mới xóa. Mỗi gợi ý trong đề là một quy tắc, và mỗi quy tắc cần một quyết định: bỏ dòng hay thay giá trị.",
    "steps": [
     "df.describe() và xem max, min của trip_distance, fare_amount, total_amount.",
     "Quy tắc 1: trip_distance gần 0 mà fare trên 300: bỏ (không có chuyến thật như vậy).",
     "Quy tắc 2: cả khoảng cách và tiền bằng 0 nhưng hai vùng khác nhau: bỏ.",
     "Quy tắc 3: trip_distance trên 250 dặm: bỏ hoặc xem kỹ.",
     "Quy tắc 4: payment_type bằng 0 không có trong từ điển: bỏ hoặc gộp vào 5 (Unknown).",
     "Sau cùng bỏ passenger_count lớn hơn 6 (task nói rõ), và đếm số dòng đã bỏ ở mỗi bước."
    ],
    "code": "print(df.describe().T)\nn0 = len(df)\ndf = df[~((df['trip_distance'] < 0.1) & (df['fare_amount'] > 300))]\ndf = df[~((df['trip_distance'] == 0) & (df['fare_amount'] == 0) & (df['PULocationID'] != df['DOLocationID']))]\ndf = df[df['trip_distance'] <= 250]\ndf = df[df['payment_type'] != 0]\ndf = df[df['passenger_count'] <= 6]\nprint(n0 - len(df), 'rows removed')",
    "lotus": "Booking ghi giá 65.000 nghìn cho 5 phút ghế massage là lỗi nhập thêm hai số 0. Bỏ nó. Booking giá 0 nhưng chi nhánh vào và ra khác nhau cũng không hợp lệ.",
    "trap": "Bỏ quá tay làm mẫu mất thật. Ghi số dòng bỏ ở mỗi quy tắc để thấy quy tắc nào xóa nhiều.",
    "read": [
     "Bảng describe: trip_distance, fare_amount, tip_amount, total_amount, trip_duration.",
     "Chú ý std rất lớn (199 cho quãng đường) và min âm của thời lượng (−58,6)."
    ],
    "remark": "Quãng đường trung bình 4,0 dặm nhưng độ lệch chuẩn 199 và thời lượng có giá trị âm (−58,6 phút): còn nhiều điểm xa và lỗi dữ liệu cần xử lý trước khi phân tích.",
    "howRemark": [
     "Nêu cột có std quá lớn hoặc giá trị âm.",
     "Mỗi quy tắc lọc cần lý do.",
     "Quyết định bỏ hay thay giá trị."
    ]
   },
   "en": {
    "think": "Analyse the distribution first, then remove. Each hint in the brief is a rule, and each rule needs a decision: drop the row or replace the value.",
    "steps": [
     "df.describe() and look at max and min of trip_distance, fare_amount, total_amount.",
     "Rule 1: trip_distance near 0 but fare above 300: drop (no real trip is like that).",
     "Rule 2: distance and fare both 0 but the two zones differ: drop.",
     "Rule 3: trip_distance above 250 miles: drop or inspect closely.",
     "Rule 4: payment_type 0 is not in the dictionary: drop or merge into 5 (Unknown).",
     "Finally drop passenger_count above 6 (the task says so), and count the rows removed at each step."
    ],
    "code": "print(df.describe().T)\nn0 = len(df)\ndf = df[~((df['trip_distance'] < 0.1) & (df['fare_amount'] > 300))]\ndf = df[~((df['trip_distance'] == 0) & (df['fare_amount'] == 0) & (df['PULocationID'] != df['DOLocationID']))]\ndf = df[df['trip_distance'] <= 250]\ndf = df[df['payment_type'] != 0]\ndf = df[df['passenger_count'] <= 6]\nprint(n0 - len(df), 'rows removed')",
    "lotus": "A booking priced 65,000 thousand for 5 minutes of massage chair is a typing slip with two extra zeros. Drop it. A booking priced 0 whose start and end branch differ is also invalid.",
    "trap": "Over-removing loses real data. Record rows removed at each rule to see which rule deletes the most.",
    "read": [
     "describe table: trip_distance, fare_amount, tip_amount, total_amount, trip_duration.",
     "Note the huge std (199 for distance) and the negative duration min (−58.6)."
    ],
    "remark": "Mean distance is 4.0 miles but std is 199 and duration has negatives (−58.6 min): many outliers and data errors need handling before analysis.",
    "howRemark": [
     "Name the columns with huge std or negatives.",
     "Each filter rule needs a reason.",
     "Decide drop or replace."
    ]
   }
  },
  "3.1.1": {
   "vi": {
    "think": "Phân loại biến trước khi vẽ: số (đo được, có khoảng cách) hay nhóm (nhãn). Mã số như VendorID trông như số nhưng là nhóm.",
    "steps": [
     "Hỏi: cộng hoặc lấy trung bình của cột này có nghĩa không?",
     "Mã (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) là nhóm dù là số.",
     "Số lượng đo được (passenger_count, trip_distance, trip_duration, pickup_hour) là số. pickup_hour có tính chu kỳ nhưng vẫn xếp là số theo đề.",
     "Cột tiền: là số, vì cộng và trung bình có nghĩa."
    ],
    "code": "numerical = ['passenger_count','trip_distance','pickup_hour','trip_duration']\ncategorical = ['VendorID','RatecodeID','PULocationID','DOLocationID','payment_type']\n# money columns: numerical",
    "lotus": "Mã gói A12 hay mã chi nhánh 1, 2, 3 là nhóm. Giá 650 nghìn là số. Lấy trung bình của «mã chi nhánh» không cho ra điều gì có nghĩa.",
    "trap": "Một cột chứa số không tự động là biến số. Hỏi xem trung bình có nghĩa không.",
    "read": [
     "Hai danh sách: categorical (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) và numerical.",
     "Mã trông như số nhưng là nhóm."
    ],
    "remark": "VendorID, RatecodeID, mã vùng và payment_type là nhóm dù là số; passenger_count, quãng đường, thời lượng và các cột tiền là số.",
    "howRemark": [
     "Giải thích các mã là nhóm.",
     "Chia hai danh sách.",
     "Nhắc không tính trung bình mã."
    ]
   },
   "en": {
    "think": "Classify variables before plotting: numerical (measurable, with distances) or categorical (labels). Code numbers like VendorID look numeric but are categories.",
    "steps": [
     "Ask: do sums or averages of this column mean anything?",
     "Codes (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) are categorical even though numeric.",
     "Measured quantities (passenger_count, trip_distance, trip_duration, pickup_hour) are numerical. pickup_hour is cyclic but still numerical per the brief.",
     "Money columns: numerical, since sums and means are meaningful."
    ],
    "code": "numerical = ['passenger_count','trip_distance','pickup_hour','trip_duration']\ncategorical = ['VendorID','RatecodeID','PULocationID','DOLocationID','payment_type']\n# money columns: numerical",
    "lotus": "Package code A12 or branch code 1, 2, 3 are categories. A price of 650 thousand is numerical. The average of a “branch code” means nothing.",
    "trap": "A column holding numbers is not automatically a numerical variable. Ask whether the average means something.",
    "read": [
     "Two lists: categorical (VendorID, RatecodeID, PULocationID, DOLocationID, payment_type) and numerical.",
     "Codes look numeric but are categories."
    ],
    "remark": "VendorID, RatecodeID, zone ids and payment_type are categories though numeric; passenger_count, distance, duration and money columns are numerical.",
    "howRemark": [
     "Explain why the codes are categories.",
     "Split the two lists.",
     "Remind not to average codes."
    ]
   }
  },
  "3.1.2": {
   "vi": {
    "think": "Ba lát cắt thời gian: theo giờ, theo thứ trong tuần, theo tháng. Mỗi lát cắt là một cột mới và một groupby.",
    "steps": [
     "Tạo pickup_hour, pickup_day (tên thứ), pickup_month từ tpep_pickup_datetime.",
     "Đếm số chuyến theo mỗi cột và vẽ cột (bar).",
     "Đặt thứ tự thứ trong tuần từ Monday đến Sunday, không để tự sắp theo chữ."
    ],
    "code": "df['pickup_hour'] = df['tpep_pickup_datetime'].dt.hour\ndf['pickup_day'] = df['tpep_pickup_datetime'].dt.day_name()\ndf['pickup_month'] = df['tpep_pickup_datetime'].dt.month\ndays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']\ndf.groupby('pickup_hour').size().plot(kind='bar')\ndf['pickup_day'].value_counts().reindex(days).plot(kind='bar')\ndf.groupby('pickup_month').size().plot(kind='bar')",
    "lotus": "Đếm booking Lotus Spa theo giờ cho thấy đỉnh ở 18:00 đến 20:00. Theo thứ cho thấy cuối tuần đông. Theo tháng cho thấy tháng 12 xuống (180 form so với 220), một câu hỏi để đào tiếp, không phải kết luận.",
    "trap": "Thứ trong tuần mà không đặt thứ tự sẽ xếp theo bảng chữ cái: Friday đứng đầu.",
    "read": [
     "Dòng chữ: giờ, thứ và tháng đông nhất.",
     "Biểu đồ: ba lát cắt thời gian cạnh nhau."
    ],
    "remark": "Đông nhất lúc 18h, vào thứ Năm và tháng 5: nhu cầu cao nhất là giờ tan tầm cuối tuần làm việc và mùa xuân.",
    "howRemark": [
     "Nêu ba đỉnh.",
     "Giải thích bằng nhịp sinh hoạt.",
     "Nhắc mẫu 5% giữ hình dạng, không giữ số tuyệt đối."
    ]
   },
   "en": {
    "think": "Three time cuts: by hour, by weekday, by month. Each cut is a new column and a groupby.",
    "steps": [
     "Create pickup_hour, pickup_day (day name), pickup_month from tpep_pickup_datetime.",
     "Count trips by each column and draw bars.",
     "Order weekdays Monday to Sunday, do not let them sort alphabetically."
    ],
    "code": "df['pickup_hour'] = df['tpep_pickup_datetime'].dt.hour\ndf['pickup_day'] = df['tpep_pickup_datetime'].dt.day_name()\ndf['pickup_month'] = df['tpep_pickup_datetime'].dt.month\ndays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']\ndf.groupby('pickup_hour').size().plot(kind='bar')\ndf['pickup_day'].value_counts().reindex(days).plot(kind='bar')\ndf.groupby('pickup_month').size().plot(kind='bar')",
    "lotus": "Counting Lotus Spa bookings by hour shows a peak at 18:00 to 20:00. By weekday it shows busy weekends. By month it shows December down (180 forms versus 220), a question to dig into, not a conclusion.",
    "trap": "Weekdays without an order sort alphabetically: Friday comes first.",
    "read": [
     "Text: the busiest hour, weekday and month.",
     "Chart: three time slices side by side."
    ],
    "remark": "Busiest at 18h, on Thursdays and in May: peak demand is the evening rush of a working weekday in spring.",
    "howRemark": [
     "Name the three peaks.",
     "Explain with daily rhythm.",
     "Remind the 5% sample keeps shape, not absolute counts."
    ]
   }
  },
  "3.1.3": {
   "vi": {
    "think": "Trước khi lọc số 0, nhìn xem có bao nhiêu và chúng là gì. Khoảng cách 0 có thể là chuyến trong cùng một vùng, không phải lỗi.",
    "steps": [
     "Đếm số 0 và số âm trong fare_amount, tip_amount, total_amount, trip_distance.",
     "Lọc fare_amount > 0, total_amount > 0 (tiền thật).",
     "Với trip_distance 0, kiểm tra PULocationID có bằng DOLocationID không rồi mới quyết định giữ hay bỏ.",
     "Tạo một bảng sao df_nz, đừng ghi đè df."
    ],
    "code": "cols = ['fare_amount','tip_amount','total_amount','trip_distance']\nprint((df[cols] <= 0).sum())\ndf_nz = df[(df['fare_amount'] > 0) & (df['total_amount'] > 0)].copy()\n# trip_distance == 0 may be same-zone trips: inspect before dropping\nprint(((df['trip_distance'] == 0) & (df['PULocationID'] == df['DOLocationID'])).sum())",
    "lotus": "Booking giá 0 là tặng thử, không phải lỗi. Booking thời lượng 0 phút ở một chi nhánh có thể là hủy. Xem rồi mới quyết định bỏ hay giữ.",
    "trap": "Bỏ mọi số 0 thì mất cả chuyến cùng vùng, một nhóm chuyến thật.",
    "read": [
     "Bảng đếm số dòng bằng 0 ở từng cột: quãng đường 0 có 23.540 dòng.",
     "Dòng cuối: 1.848.971 → 1.848.395, tức bỏ 576 dòng fare bằng 0."
    ],
    "remark": "23.540 chuyến cách 0 dặm (có thể là đón và trả cùng vùng, không hẳn lỗi), còn 576 chuyến cước 0 bị bỏ vì vô nghĩa.",
    "howRemark": [
     "Nêu số dòng 0 mỗi cột.",
     "Phân biệt 0 hợp lệ và 0 là lỗi.",
     "Báo số dòng đã bỏ."
    ]
   },
   "en": {
    "think": "Before filtering zeros, look at how many there are and what they are. Distance 0 may be a trip within one zone, not an error.",
    "steps": [
     "Count zeros and negatives in fare_amount, tip_amount, total_amount, trip_distance.",
     "Filter fare_amount > 0, total_amount > 0 (real money).",
     "For trip_distance 0, check whether PULocationID equals DOLocationID before deciding to keep or drop.",
     "Create a copy df_nz, do not overwrite df."
    ],
    "code": "cols = ['fare_amount','tip_amount','total_amount','trip_distance']\nprint((df[cols] <= 0).sum())\ndf_nz = df[(df['fare_amount'] > 0) & (df['total_amount'] > 0)].copy()\n# trip_distance == 0 may be same-zone trips: inspect before dropping\nprint(((df['trip_distance'] == 0) & (df['PULocationID'] == df['DOLocationID'])).sum())",
    "lotus": "A booking priced 0 is a free trial, not an error. A 0-minute booking at one branch may be a cancellation. Look, then decide to drop or keep.",
    "trap": "Dropping every zero loses same-zone trips, a real group.",
    "read": [
     "Table counts rows equal to 0 per column: distance 0 has 23,540 rows.",
     "Last line: 1,848,971 → 1,848,395, i.e. 576 zero-fare rows dropped."
    ],
    "remark": "23,540 trips have 0 miles (maybe pickup and drop in the same zone, not always an error), while 576 zero-fare trips are dropped as meaningless.",
    "howRemark": [
     "State the zero counts per column.",
     "Distinguish valid zero from error.",
     "Report rows dropped."
    ]
   }
  },
  "3.1.4": {
   "vi": {
    "think": "Doanh thu theo tháng là tổng total_amount theo tháng. Nhớ rằng đây là mẫu 5%, nên số tuyệt đối thấp; xu hướng mới là điều cần đọc.",
    "steps": [
     "Tạo cột tháng từ tpep_pickup_datetime.",
     "df.groupby('pickup_month')['total_amount'].sum().",
     "Vẽ đường hoặc cột, ghi tháng cao nhất và thấp nhất."
    ],
    "code": "monthly = df.groupby('pickup_month')['total_amount'].sum()\nmonthly.plot(kind='line', marker='o')\nprint(monthly.idxmax(), monthly.idxmin())",
    "lotus": "Doanh thu Lotus Spa theo tháng cho thấy tháng 12 thấp hơn tháng 11. Hỏi trước khi kết luận: tháng 12 có đủ ngày không, có đợt khuyến mãi nào không.",
    "trap": "Đọc doanh thu mẫu như doanh thu thật. Mẫu 5% chỉ cho xu hướng, và con số thật cần nhân lên ở bài 3.2.3.",
    "read": [
     "Bảng: doanh thu từng tháng (số tương đối vì là mẫu 5%).",
     "Đọc xu hướng: tháng 5 và 10 cao nhất (100,2), tháng 2 thấp nhất (77,4)."
    ],
    "remark": "Doanh thu đỉnh ở tháng 5 và 10 (100,2) và thấp nhất tháng 2 (77,4) và tháng 8 (79,9). Số tuyệt đối thấp vì là mẫu; nên đọc xu hướng.",
    "howRemark": [
     "Nêu tháng cao nhất và thấp nhất.",
     "Tính chênh phần trăm.",
     "Nhắc mẫu 5%."
    ]
   },
   "en": {
    "think": "Monthly revenue is the sum of total_amount by month. Remember this is a 5% sample, so absolute numbers are low; the trend is what you read.",
    "steps": [
     "Create the month column from tpep_pickup_datetime.",
     "df.groupby('pickup_month')['total_amount'].sum().",
     "Draw a line or bars, note the highest and lowest months."
    ],
    "code": "monthly = df.groupby('pickup_month')['total_amount'].sum()\nmonthly.plot(kind='line', marker='o')\nprint(monthly.idxmax(), monthly.idxmin())",
    "lotus": "Lotus Spa monthly revenue shows December below November. Ask before concluding: does December have all its days, was there a promotion.",
    "trap": "Reading sample revenue as real revenue. A 5% sample gives only the trend, and the real figure needs scaling in task 3.2.3.",
    "read": [
     "Table: revenue per month (relative since a 5% sample).",
     "Read the trend: May and October highest (100.2), February lowest (77.4)."
    ],
    "remark": "Revenue peaks in May and October (100.2) and is lowest in February (77.4) and August (79.9). Absolute numbers are small because of the sample; read the trend.",
    "howRemark": [
     "Name the highest and lowest months.",
     "Compute the percentage gap.",
     "Remind the 5% sample."
    ]
   }
  },
  "3.1.5": {
   "vi": {
    "think": "Tỷ trọng mỗi quý là doanh thu quý chia cho doanh thu cả năm. Bốn số cộng lại bằng 100%.",
    "steps": [
     "Tạo cột quý: dt.quarter.",
     "Cộng total_amount theo quý.",
     "Chia cho tổng cả năm để ra tỷ trọng và vẽ biểu đồ tròn hoặc cột."
    ],
    "code": "df['quarter'] = df['tpep_pickup_datetime'].dt.quarter\nq = df.groupby('quarter')['total_amount'].sum()\nshare = q / q.sum()\nprint(share.round(3), share.sum())\nshare.plot(kind='bar')",
    "lotus": "Doanh thu quý 1 là 80, quý 2 là 100, quý 3 là 90, quý 4 là 130 (triệu): tổng 400, tỷ trọng 20%, 25%, 22,5%, 32,5%. Cộng lại luôn 100%.",
    "trap": "Quên kiểm tra tổng các tỷ trọng bằng 1 là cách dễ để chia nhầm mẫu số.",
    "read": [
     "Bốn số là tỷ trọng doanh thu của bốn quý, cộng lại 100%."
    ],
    "remark": "Quý 4 (26,8%) và quý 2 (26,7%) dẫn đầu, quý 3 thấp nhất (22,8%): chênh chỉ 4 điểm phần trăm nên doanh thu khá đều quanh năm.",
    "howRemark": [
     "Nêu quý cao nhất và thấp nhất.",
     "Đo chênh bằng điểm phần trăm.",
     "Kết luận về tính mùa vụ."
    ]
   },
   "en": {
    "think": "Each quarter's share is quarter revenue divided by whole-year revenue. The four numbers sum to 100%.",
    "steps": [
     "Create the quarter column: dt.quarter.",
     "Sum total_amount by quarter.",
     "Divide by the yearly total to get shares and draw a pie or bars."
    ],
    "code": "df['quarter'] = df['tpep_pickup_datetime'].dt.quarter\nq = df.groupby('quarter')['total_amount'].sum()\nshare = q / q.sum()\nprint(share.round(3), share.sum())\nshare.plot(kind='bar')",
    "lotus": "Quarterly revenue is 80, 100, 90, 130 (million): total 400, shares 20%, 25%, 22.5%, 32.5%. They always add up to 100%.",
    "trap": "Forgetting to check that shares sum to 1 is an easy way to divide by the wrong denominator.",
    "read": [
     "Four numbers are the revenue shares of the four quarters, summing to 100%."
    ],
    "remark": "Q4 (26.8%) and Q2 (26.7%) lead, Q3 is lowest (22.8%): only 4 points apart, so revenue is fairly even through the year.",
    "howRemark": [
     "Name the highest and lowest quarters.",
     "Measure the gap in points.",
     "Conclude on seasonality."
    ]
   }
  },
  "3.1.6": {
   "vi": {
    "think": "Quan hệ giữa quãng đường và giá cước: vẽ điểm và đo tương quan. Bỏ các chuyến cách 0 dặm theo gợi ý.",
    "steps": [
     "Lọc trip_distance > 0.",
     "Vẽ scatter (lấy mẫu vài nghìn điểm cho nhẹ).",
     "Tính df[['trip_distance','fare_amount']].corr()."
    ],
    "code": "d = df[df['trip_distance'] > 0]\nsns.scatterplot(data=d.sample(5000, random_state=42), x='trip_distance', y='fare_amount', alpha=0.3)\nprint(d[['trip_distance','fare_amount']].corr())",
    "lotus": "Thời lượng liệu trình và giá: 60 phút 650 nghìn, 90 phút 950 nghìn. Các điểm gần một đường thẳng nên tương quan cao, nhưng không có nghĩa thời lượng là nguyên nhân của giá, vì giá được đặt theo bảng giá.",
    "trap": "Tương quan cao không phải nguyên nhân. Giá cước tính theo quãng đường theo công thức, nên tương quan ở đây là hệ quả của công thức.",
    "read": [
     "Dòng chữ: tương quan 0,944.",
     "Biểu đồ phân tán: đám điểm dốc lên gần một đường thẳng."
    ],
    "remark": "Tương quan quãng đường – cước là 0,944, rất mạnh: đi xa hơn thì cước tăng gần như tuyến tính, nên quãng đường là biến giải thích chính.",
    "howRemark": [
     "Báo hệ số.",
     "Nói mạnh hay yếu.",
     "Chỉ ra điểm lệch khỏi đường nếu có."
    ]
   },
   "en": {
    "think": "Relationship between distance and fare: plot points and measure correlation. Drop 0-mile trips as hinted.",
    "steps": [
     "Filter trip_distance > 0.",
     "Draw a scatter (sample a few thousand points to keep it light).",
     "Compute df[['trip_distance','fare_amount']].corr()."
    ],
    "code": "d = df[df['trip_distance'] > 0]\nsns.scatterplot(data=d.sample(5000, random_state=42), x='trip_distance', y='fare_amount', alpha=0.3)\nprint(d[['trip_distance','fare_amount']].corr())",
    "lotus": "Session length and price: 60 minutes 650 thousand, 90 minutes 950 thousand. The points sit near a line so correlation is high, but length does not cause price, because price is set from a price list.",
    "trap": "High correlation is not cause. Fares are computed from distance by a formula, so correlation here is a consequence of the formula.",
    "read": [
     "Text: correlation 0.944.",
     "Scatter: the cloud rises close to a straight line."
    ],
    "remark": "Distance–fare correlation is 0.944, very strong: longer trips cost almost linearly more, so distance is the main driver.",
    "howRemark": [
     "Report the coefficient.",
     "Say strong or weak.",
     "Point out departures from the line if any."
    ]
   }
  },
  "3.1.7": {
   "vi": {
    "think": "Ba quan hệ cần tương quan và hình: giá với thời lượng chuyến, giá với số khách, tiền boa với quãng đường.",
    "steps": [
     "Tạo trip_duration = (dropoff − pickup) tính bằng phút.",
     "Lọc thời lượng hợp lý (lớn hơn 0 và nhỏ hơn vài giờ).",
     "Vẽ từng cặp và in hệ số tương quan.",
     "Nhớ tiền boa tiền mặt không được ghi."
    ],
    "code": "df['trip_duration'] = (df['tpep_dropoff_datetime'] - df['tpep_pickup_datetime']).dt.total_seconds() / 60\nd = df[(df['trip_duration'] > 0) & (df['trip_duration'] < 180)]\nprint(d[['fare_amount','trip_duration']].corr())\nprint(d[['fare_amount','passenger_count']].corr())\nprint(d[['tip_amount','trip_distance']].corr())",
    "lotus": "Giá liệu trình theo số khách trong một booking: hai khách không trả gấp đôi. Tương quan thấp ở đây nói rằng số khách không quyết định giá, không nói rằng số khách vô nghĩa.",
    "trap": "Trip_duration âm hoặc quá lớn là lỗi giờ. Lọc trước khi tính tương quan.",
    "read": [
     "Ba hệ số: cước–thời lượng 0,271; cước–số khách 0,047; boa–quãng đường 0,568.",
     "Gần 0 là không liên quan."
    ],
    "remark": "Cước chỉ liên quan yếu đến thời lượng (0,271) và gần như không liên quan đến số khách (0,047); tiền boa tăng theo quãng đường (0,568).",
    "howRemark": [
     "Xếp ba quan hệ theo độ mạnh.",
     "Diễn giải từng cái bằng một câu.",
     "Nhớ tương quan chưa là nhân quả."
    ]
   },
   "en": {
    "think": "Three relationships need correlation and a picture: fare with trip duration, fare with passenger count, tip with distance.",
    "steps": [
     "Create trip_duration = (dropoff − pickup) in minutes.",
     "Filter plausible durations (above 0 and below a few hours).",
     "Plot each pair and print the correlation coefficient.",
     "Remember cash tips are not recorded."
    ],
    "code": "df['trip_duration'] = (df['tpep_dropoff_datetime'] - df['tpep_pickup_datetime']).dt.total_seconds() / 60\nd = df[(df['trip_duration'] > 0) & (df['trip_duration'] < 180)]\nprint(d[['fare_amount','trip_duration']].corr())\nprint(d[['fare_amount','passenger_count']].corr())\nprint(d[['tip_amount','trip_distance']].corr())",
    "lotus": "Session price by number of guests in one booking: two guests do not pay double. Low correlation here says guest count does not set price, not that guest count is meaningless.",
    "trap": "A negative or huge trip_duration is a time error. Filter before computing correlation.",
    "read": [
     "Three coefficients: fare–duration 0.271; fare–passengers 0.047; tip–distance 0.568.",
     "Near 0 means unrelated."
    ],
    "remark": "Fare relates only weakly to duration (0.271) and hardly to passengers (0.047); tips rise with distance (0.568).",
    "howRemark": [
     "Rank the three relationships by strength.",
     "Interpret each in one sentence.",
     "Remember correlation is not causation."
    ]
   }
  },
  "3.1.8": {
   "vi": {
    "think": "Phân bố loại thanh toán là đếm từng loại và chia cho tổng. Mã 1 thẻ, 2 tiền mặt, 3 miễn phí, 4 tranh chấp.",
    "steps": [
     "df['payment_type'].value_counts(normalize=True).",
     "Vẽ cột hoặc tròn, gắn nhãn chữ thay cho mã.",
     "Ghi chú: tiền boa chỉ có ở thanh toán thẻ."
    ],
    "code": "labels = {1:'Credit card', 2:'Cash', 3:'No charge', 4:'Dispute'}\npt = df['payment_type'].map(labels).value_counts(normalize=True)\nprint(pt.round(3))\npt.plot(kind='bar')",
    "lotus": "Lotus Spa: 70% thanh toán thẻ, 25% chuyển khoản, 5% tiền mặt. Cột tiền boa chỉ phản ánh phần thẻ và chuyển khoản.",
    "trap": "Quên rằng cột boa không tính tiền mặt sẽ làm tỷ lệ boa thật bị thấp đi.",
    "read": [
     "Bảng % theo loại thanh toán, cộng lại 100%."
    ],
    "remark": "Thẻ tín dụng chiếm 80,7%, tiền mặt 17,3%, tranh chấp 1,3% và miễn phí 0,7%: gần như mọi chuyến thanh toán bằng thẻ.",
    "howRemark": [
     "Nêu loại dẫn đầu và cuối.",
     "Chú ý tỷ lệ tranh chấp.",
     "Nói hệ quả cho phân tích tiền boa (chỉ thẻ ghi được)."
    ]
   },
   "en": {
    "think": "The payment-type distribution is counting each type and dividing by the total. Code 1 card, 2 cash, 3 no charge, 4 dispute.",
    "steps": [
     "df['payment_type'].value_counts(normalize=True).",
     "Draw bars or a pie, with text labels instead of codes.",
     "Note: tips exist only for card payments."
    ],
    "code": "labels = {1:'Credit card', 2:'Cash', 3:'No charge', 4:'Dispute'}\npt = df['payment_type'].map(labels).value_counts(normalize=True)\nprint(pt.round(3))\npt.plot(kind='bar')",
    "lotus": "Lotus Spa: 70% card, 25% transfer, 5% cash. The tip column reflects only the card and transfer share.",
    "trap": "Forgetting that the tip column omits cash makes the real tip rate look lower.",
    "read": [
     "A table of % by payment type, summing to 100%."
    ],
    "remark": "Credit card is 80.7%, cash 17.3%, disputes 1.3% and free 0.7%: almost every trip is paid by card.",
    "howRemark": [
     "Name the top and bottom type.",
     "Note the dispute rate.",
     "State the effect on tip analysis (only cards are recorded)."
    ]
   }
  },
  "3.1.9": {
   "vi": {
    "think": "Bản đồ vùng nằm trong file shapefile. Đọc bằng geopandas và để nguyên cấu trúc thư mục taxi_zones.",
    "steps": [
     "pip install geopandas nếu thiếu.",
     "zones = gpd.read_file('taxi_zones/taxi_zones.shp').",
     "zones.head() rồi zones.plot() để xem bản đồ."
    ],
    "code": "import geopandas as gpd\nzones = gpd.read_file('taxi_zones/taxi_zones.shp')\nzones.head()\nzones.plot()",
    "lotus": "Ba chi nhánh Quận 1, Quận 3 và Thủ Đức là ba vùng trên một bản đồ. Bảng vùng cho tên và mã, còn hình dạng nằm trong cột geometry.",
    "trap": "Chuyển file .shp ra khỏi thư mục sẽ làm hỏng, vì các file đi kèm (.shx, .dbf) phải nằm cùng chỗ.",
    "read": [
     "Bảng mẫu bảng vùng: mỗi dòng là một vùng với tên, quận và mã LocationID.",
     "Biểu đồ là bản đồ các vùng taxi."
    ],
    "remark": "File shapefile có các vùng taxi của New York kèm tên và quận, ví dụ Newark Airport (mã 1) và Jamaica Bay (mã 2); mã LocationID dùng để nối với bảng chuyến.",
    "howRemark": [
     "Nêu cột quan trọng (LocationID, zone, borough).",
     "Nói mục đích nối bảng."
    ]
   },
   "en": {
    "think": "The zone map lives in a shapefile. Read it with geopandas and keep the taxi_zones folder structure unchanged.",
    "steps": [
     "pip install geopandas if missing.",
     "zones = gpd.read_file('taxi_zones/taxi_zones.shp').",
     "zones.head() then zones.plot() to see the map."
    ],
    "code": "import geopandas as gpd\nzones = gpd.read_file('taxi_zones/taxi_zones.shp')\nzones.head()\nzones.plot()",
    "lotus": "The three branches District 1, District 3 and Thu Duc are three zones on one map. The zone table gives names and codes, and the shape sits in the geometry column.",
    "trap": "Moving the .shp out of its folder breaks it, since the companion files (.shx, .dbf) must sit alongside.",
    "read": [
     "Sample of the zone table: each row is a zone with name, borough and LocationID.",
     "The chart is the map of taxi zones."
    ],
    "remark": "The shapefile holds New York's taxi zones with names and boroughs, e.g. Newark Airport (id 1) and Jamaica Bay (id 2); LocationID is the key to join to trips.",
    "howRemark": [
     "Name the key columns (LocationID, zone, borough).",
     "State the purpose of joining."
    ]
   }
  },
  "3.1.10": {
   "vi": {
    "think": "Nối bảng vùng vào bảng chuyến bằng mã vùng: LocationID bên bảng vùng, PULocationID bên bảng chuyến.",
    "steps": [
     "Dùng merge với left_on và right_on.",
     "how='left' để giữ mọi chuyến.",
     "Đếm số dòng trước và sau: phải bằng nhau."
    ],
    "code": "n = len(df)\ndf = df.merge(zones[['LocationID','zone','borough']], left_on='PULocationID', right_on='LocationID', how='left')\nprint(n, len(df))  # must match",
    "lotus": "Bảng booking có mã chi nhánh 1 đến 3. Bảng chi nhánh cho tên đầy đủ. Nối theo mã, giữ mọi booking.",
    "trap": "Nếu số dòng sau nối khác số dòng trước, mã vùng trong bảng vùng bị trùng và bạn đã nhân bản chuyến.",
    "read": [
     "Bảng mẫu sau khi nối: mã vùng đón kèm tên vùng và quận."
    ],
    "remark": "Sau khi nối, mỗi chuyến có tên vùng và quận đón (ví dụ 68 là East Chelsea, Manhattan), nên có thể đọc kết quả theo tên thay vì theo mã.",
    "howRemark": [
     "Kiểm tên đã khớp mã.",
     "Kiểm số dòng không đổi."
    ]
   },
   "en": {
    "think": "Join the zone table to the trip table by zone code: LocationID on the zone side, PULocationID on the trip side.",
    "steps": [
     "Use merge with left_on and right_on.",
     "how='left' to keep every trip.",
     "Count rows before and after: they must match."
    ],
    "code": "n = len(df)\ndf = df.merge(zones[['LocationID','zone','borough']], left_on='PULocationID', right_on='LocationID', how='left')\nprint(n, len(df))  # must match",
    "lotus": "The booking table has branch codes 1 to 3. The branch table gives full names. Join on the code, keep every booking.",
    "trap": "If the row count differs after the join, a zone code is duplicated in the zone table and you cloned trips.",
    "read": [
     "Sample after the join: pickup zone code with zone name and borough."
    ],
    "remark": "After the join each trip has a pickup zone name and borough (e.g. 68 is East Chelsea, Manhattan), so results read by name instead of code.",
    "howRemark": [
     "Check names match the codes.",
     "Check the row count is unchanged."
    ]
   }
  },
  "3.1.11": {
   "vi": {
    "think": "Số chuyến theo mã vùng là một groupby đếm dòng.",
    "steps": [
     "df.groupby('PULocationID').size().",
     "Đặt tên cột kết quả là trips.",
     "Sắp xếp giảm dần để xem vùng đông nhất."
    ],
    "code": "trips = df.groupby('PULocationID').size().reset_index(name='trips')\ntrips.sort_values('trips', ascending=False).head(10)",
    "lotus": "Quận 1: 480 lượt, Quận 3: 300, Thủ Đức: 220 trong một tuần. Chi nhánh đông nhất không nhất thiết đem lại doanh thu cao nhất.",
    "trap": "Đếm số chuyến khác với cộng doanh thu. Chọn đúng thứ bạn muốn đo.",
    "read": [
     "Bảng đếm số chuyến theo mã vùng, sắp giảm dần.",
     "Mã 132 đứng đầu với 99.363 chuyến."
    ],
    "remark": "Mã vùng 132 có nhiều chuyến đón nhất (99.363), kế đến 237 (87.916) và 161 (86.783); đây là mã, chưa phải tên.",
    "howRemark": [
     "Nêu ba mã đầu kèm số.",
     "Nhắc cần đổi sang tên ở bước sau."
    ]
   },
   "en": {
    "think": "Trips per zone code is one groupby that counts rows.",
    "steps": [
     "df.groupby('PULocationID').size().",
     "Name the result column trips.",
     "Sort descending to see the busiest zones."
    ],
    "code": "trips = df.groupby('PULocationID').size().reset_index(name='trips')\ntrips.sort_values('trips', ascending=False).head(10)",
    "lotus": "District 1: 480 visits, District 3: 300, Thu Duc: 220 in one week. The busiest branch does not necessarily bring the highest revenue.",
    "trap": "Counting trips differs from summing revenue. Choose exactly what you want to measure.",
    "read": [
     "Table of trips per zone code, sorted descending.",
     "Code 132 leads with 99,363 trips."
    ],
    "remark": "Zone code 132 has the most pickups (99,363), then 237 (87,916) and 161 (86,783); these are codes, not yet names.",
    "howRemark": [
     "Name the top three codes with numbers.",
     "Remind to convert to names next."
    ]
   }
  },
  "3.1.12": {
   "vi": {
    "think": "Ghép số chuyến vào bảng vùng để vẽ. Vùng không có chuyến nào phải có 0, không được để trống.",
    "steps": [
     "zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left').",
     "Điền 0 cho vùng không có chuyến.",
     "Kiểm tra bảng kết quả vẫn là GeoDataFrame."
    ],
    "code": "zones_with_trips = zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left')\nzones_with_trips['trips'] = zones_with_trips['trips'].fillna(0)\nprint(type(zones_with_trips))",
    "lotus": "Một chi nhánh mới chưa có booking phải hiện 0, không phải biến mất khỏi bản đồ.",
    "trap": "Trộn theo thứ tự ngược (trips.merge(zones)) có thể trả về DataFrame thường, mất khả năng vẽ bản đồ.",
    "read": [
     "Bảng top vùng với tên, quận và số chuyến.",
     "JFK Airport đứng đầu."
    ],
    "remark": "JFK Airport (99.363 chuyến) đứng đầu, sau đó Upper East Side South (87.916) và Midtown Center (86.783): sân bay và các khu trung tâm Manhattan là điểm đón chính.",
    "howRemark": [
     "Nêu ba vùng đầu.",
     "Nhận xét kiểu vùng (sân bay, trung tâm).",
     "Nhắc vùng không có chuyến phải ghi 0."
    ]
   },
   "en": {
    "think": "Attach trip counts to the zone table so you can plot. Zones with no trips must show 0, not be left blank.",
    "steps": [
     "zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left').",
     "Fill 0 for zones with no trips.",
     "Check the result is still a GeoDataFrame."
    ],
    "code": "zones_with_trips = zones.merge(trips, left_on='LocationID', right_on='PULocationID', how='left')\nzones_with_trips['trips'] = zones_with_trips['trips'].fillna(0)\nprint(type(zones_with_trips))",
    "lotus": "A new branch with no bookings should show 0, not vanish from the map.",
    "trap": "Merging in the reverse order (trips.merge(zones)) can return a plain DataFrame, losing the ability to draw the map.",
    "read": [
     "Table of top zones with name, borough and trips.",
     "JFK Airport leads."
    ],
    "remark": "JFK Airport (99,363 trips) leads, then Upper East Side South (87,916) and Midtown Center (86,783): airports and central Manhattan areas are the main pickup points.",
    "howRemark": [
     "Name the top three zones.",
     "Comment on the zone types (airport, centre).",
     "Remind zones with no trips must show 0."
    ]
   }
  },
  "3.1.13": {
   "vi": {
    "think": "Bản đồ màu: tô vùng theo số chuyến. Đặt khung hình trước rồi vẽ lên khung đó.",
    "steps": [
     "fig, ax = plt.subplots(1, 1, figsize=(12, 10)).",
     "zones_with_trips.plot(column='trips', ax=ax, legend=True, legend_kwds={...}).",
     "plt.show().",
     "Sau đó sắp bảng theo số chuyến giảm dần để đọc tên vùng."
    ],
    "code": "fig, ax = plt.subplots(1, 1, figsize=(12, 10))\nzones_with_trips.plot(column='trips', ax=ax, legend=True,\n                      legend_kwds={'label': 'Number of trips', 'orientation': 'horizontal'})\nplt.show()\nzones_with_trips.sort_values('trips', ascending=False)[['zone','trips']].head(10)",
    "lotus": "Ba chi nhánh Lotus Spa tô theo số lượt: Quận 1 đậm nhất. Bản đồ cho thấy vị trí, còn bảng đứng sau cho tên và số.",
    "trap": "Bản đồ chỉ cho thấy thứ tự lớn nhỏ bằng màu. Số chính xác phải đọc từ bảng.",
    "read": [
     "Bản đồ màu: vùng đậm là nhiều chuyến đón; vùng nhạt là ít.",
     "Tìm cụm vùng đậm."
    ],
    "remark": "Bản đồ cho thấy các chuyến đón tập trung ở Manhattan và hai sân bay, còn các vùng ngoại ô nhạt màu.",
    "howRemark": [
     "Mô tả vùng đậm.",
     "Nối với bảng top vùng ở 3.1.12.",
     "Nêu ý nghĩa khi bố trí xe."
    ]
   },
   "en": {
    "think": "Choropleth map: colour zones by trip count. Set the figure first, then draw onto it.",
    "steps": [
     "fig, ax = plt.subplots(1, 1, figsize=(12, 10)).",
     "zones_with_trips.plot(column='trips', ax=ax, legend=True, legend_kwds={...}).",
     "plt.show().",
     "Then sort the table by trips descending to read zone names."
    ],
    "code": "fig, ax = plt.subplots(1, 1, figsize=(12, 10))\nzones_with_trips.plot(column='trips', ax=ax, legend=True,\n                      legend_kwds={'label': 'Number of trips', 'orientation': 'horizontal'})\nplt.show()\nzones_with_trips.sort_values('trips', ascending=False)[['zone','trips']].head(10)",
    "lotus": "The three Lotus Spa branches coloured by visits: District 1 darkest. The map shows position, and the table behind it gives names and numbers.",
    "trap": "A map shows only rank order by colour. Read exact numbers from the table.",
    "read": [
     "Colour map: dark zones have many pickups; light zones few.",
     "Look for dark clusters."
    ],
    "remark": "The map shows pickups concentrated in Manhattan and the two airports while outer zones are pale.",
    "howRemark": [
     "Describe the dark areas.",
     "Tie to the top-zone table in 3.1.12.",
     "State the meaning for fleet placement."
    ]
   }
  },
  "3.2.1": {
   "vi": {
    "think": "Tốc độ của một tuyến = quãng đường chia cho thời gian trung bình. Làm theo từng cặp vùng đi, vùng đến và theo từng giờ, rồi tìm tuyến chậm nhất.",
    "steps": [
     "Tạo cột trip_duration (phút) nếu chưa có.",
     "Nhóm theo PULocationID, DOLocationID, pickup_hour: trung bình trip_distance và trip_duration.",
     "speed = distance / (duration / 60) dặm mỗi giờ.",
     "Chỉ giữ các nhóm có đủ chuyến (ví dụ ít nhất 30), vì nhóm ít chuyến cho tốc độ nhiễu.",
     "Sắp tăng dần để thấy các tuyến chậm nhất."
    ],
    "code": "g = df.groupby(['PULocationID','DOLocationID','pickup_hour']).agg(\n    dist=('trip_distance','mean'), dur=('trip_duration','mean'), n=('trip_distance','size')).reset_index()\ng['speed_mph'] = g['dist'] / (g['dur'] / 60)\nslow = g[g['n'] >= 30].sort_values('speed_mph').head(10)\nprint(slow)",
    "lotus": "Hai chi nhánh Quận 1 và Quận 3: một khách đi từ chi nhánh này sang chi nhánh kia mất bao lâu lúc 18:00 so với 10:00. Tuyến nào luôn chậm lúc 18:00 là chỗ nên dời lịch hẹn.",
    "trap": "Một tuyến chỉ có 2 chuyến có thể đứng đầu danh sách chậm nhất chỉ vì nhiễu. Đặt ngưỡng số chuyến.",
    "read": [
     "Bảng đầu: tốc độ trung bình theo giờ (dặm/giờ): thấp nhất 9,5 lúc 15h, cao nhất 20,5 lúc 5h.",
     "Bảng sau: các tuyến chậm với số chuyến và tốc độ."
    ],
    "remark": "Xe chậm nhất ban ngày (khoảng 9,5–10 dặm/giờ từ 12h đến 18h) và nhanh nhất lúc 5h (20,5), nên giờ cao điểm là lúc đường kẹt. Một số tuyến nội vùng chỉ đạt khoảng 3,7 dặm/giờ.",
    "howRemark": [
     "Nêu giờ nhanh nhất và chậm nhất kèm số.",
     "Nối với giờ đông xe.",
     "Nêu tuyến chậm và ý nghĩa."
    ]
   },
   "en": {
    "think": "A route's speed is distance divided by average time. Do it per pickup-and-dropoff zone pair and per hour, then find the slowest routes.",
    "steps": [
     "Create trip_duration (minutes) if not already there.",
     "Group by PULocationID, DOLocationID, pickup_hour: mean trip_distance and trip_duration.",
     "speed = distance / (duration / 60) miles per hour.",
     "Keep only groups with enough trips (say at least 30), since small groups give noisy speeds.",
     "Sort ascending to see the slowest routes."
    ],
    "code": "g = df.groupby(['PULocationID','DOLocationID','pickup_hour']).agg(\n    dist=('trip_distance','mean'), dur=('trip_duration','mean'), n=('trip_distance','size')).reset_index()\ng['speed_mph'] = g['dist'] / (g['dur'] / 60)\nslow = g[g['n'] >= 30].sort_values('speed_mph').head(10)\nprint(slow)",
    "lotus": "Two branches, District 1 and District 3: how long a customer takes from one branch to the other at 18:00 versus 10:00. A route that is always slow at 18:00 is where to shift appointments.",
    "trap": "A route with only 2 trips can top the slowest list purely from noise. Set a trip-count threshold.",
    "read": [
     "First table: mean speed by hour (miles/hour): slowest 9.5 at 15h, fastest 20.5 at 5h.",
     "Second table: slow routes with trips and speed."
    ],
    "remark": "Cars are slowest in daytime (about 9.5–10 mph from 12h to 18h) and fastest at 5h (20.5), so peak hours are when roads clog. Some within-zone routes reach only about 3.7 mph.",
    "howRemark": [
     "Name the fastest and slowest hours with numbers.",
     "Tie to busy hours.",
     "State slow routes and their meaning."
    ]
   }
  },
  "3.2.2": {
   "vi": {
    "think": "Đếm số chuyến theo từng giờ, vẽ, và nêu giờ đông nhất cùng số chuyến của giờ đó.",
    "steps": [
     "hourly = df.groupby('pickup_hour').size().",
     "hourly.plot(kind='bar').",
     "hourly.idxmax() và hourly.max()."
    ],
    "code": "hourly = df.groupby('pickup_hour').size()\nhourly.plot(kind='bar')\nprint(hourly.idxmax(), hourly.max())",
    "lotus": "Giờ đông nhất của Lotus Spa là 19:00 với 62 lượt trong mẫu. Con số này là số trong mẫu, chưa phải số thật.",
    "trap": "Báo số trong mẫu như số thật. Bài 3.2.3 nhân lên.",
    "read": [
     "Dòng chữ: giờ đông nhất 18 và số chuyến của giờ đó (130.555 trong mẫu).",
     "Biểu đồ: số chuyến theo 24 giờ."
    ],
    "remark": "Đỉnh nhu cầu lúc 18h với 130.555 chuyến trong mẫu; thấp nhất khoảng rạng sáng.",
    "howRemark": [
     "Nêu giờ đỉnh kèm số.",
     "Mô tả hình dạng đường theo giờ."
    ]
   },
   "en": {
    "think": "Count trips per hour, draw it, and state the busiest hour with its trip count.",
    "steps": [
     "hourly = df.groupby('pickup_hour').size().",
     "hourly.plot(kind='bar').",
     "hourly.idxmax() and hourly.max()."
    ],
    "code": "hourly = df.groupby('pickup_hour').size()\nhourly.plot(kind='bar')\nprint(hourly.idxmax(), hourly.max())",
    "lotus": "Lotus Spa's busiest hour is 19:00 with 62 visits in the sample. That is a sample number, not the real one.",
    "trap": "Reporting a sample number as the real one. Task 3.2.3 scales up.",
    "read": [
     "Text: the busiest hour 18 and its trips (130,555 in the sample).",
     "Chart: trips across 24 hours."
    ],
    "remark": "Demand peaks at 18h with 130,555 trips in the sample; lowest around dawn.",
    "howRemark": [
     "Name the peak hour with the number.",
     "Describe the shape of the hourly line."
    ]
   }
  },
  "3.2.3": {
   "vi": {
    "think": "Mẫu chỉ có 5% số chuyến. Số thật = số trong mẫu chia cho tỷ lệ lấy mẫu.",
    "steps": [
     "sample_fraction = 0.05, đúng với tỷ lệ bạn đã dùng ở 1.1.1.",
     "scaled = hourly / sample_fraction.",
     "Lấy 5 giờ đông nhất: scaled.nlargest(5)."
    ],
    "code": "sample_fraction = 0.05\nscaled = hourly / sample_fraction\nprint(scaled.nlargest(5).round(0))",
    "lotus": "Nếu mẫu có 62 lượt lúc 19:00 và tỷ lệ lấy mẫu là 5%, số thật xấp xỉ 62 ÷ 0,05 = 1.240 lượt.",
    "trap": "Nhân với 5 thay vì chia cho 0,05 (nhân 20) là lỗi thường gặp.",
    "read": [
     "Bảng: số chuyến ước tính thật theo giờ = số trong mẫu chia 0,05.",
     "18h có 2.611.100 chuyến."
    ],
    "remark": "Quy ra số thật, 18h có khoảng 2,61 triệu chuyến cả năm, 17h 2,50 triệu và 19h 2,34 triệu.",
    "howRemark": [
     "Nêu công thức nhân 20.",
     "Báo ba giờ đầu theo số thật.",
     "Nhắc đây là ước tính."
    ]
   },
   "en": {
    "think": "The sample holds only 5% of trips. Real count = sample count divided by the sampling fraction.",
    "steps": [
     "sample_fraction = 0.05, matching what you used in 1.1.1.",
     "scaled = hourly / sample_fraction.",
     "Take the five busiest hours: scaled.nlargest(5)."
    ],
    "code": "sample_fraction = 0.05\nscaled = hourly / sample_fraction\nprint(scaled.nlargest(5).round(0))",
    "lotus": "If the sample has 62 visits at 19:00 and the sampling fraction is 5%, the real count is about 62 ÷ 0.05 = 1,240 visits.",
    "trap": "Multiplying by 5 instead of dividing by 0.05 (multiplying by 20) is a common slip.",
    "read": [
     "Table: estimated real trips per hour = sample count / 0.05.",
     "18h has 2,611,100 trips."
    ],
    "remark": "Scaled up, 18h has about 2.61 million trips in the year, 17h 2.50 million and 19h 2.34 million.",
    "howRemark": [
     "State the ×20 formula.",
     "Report the top three hours at real scale.",
     "Remind these are estimates."
    ]
   }
  },
  "3.2.4": {
   "vi": {
    "think": "So sánh hình dạng theo giờ giữa ngày thường và cuối tuần. Hai đường cùng trên một biểu đồ.",
    "steps": [
     "Tạo cột is_weekend: dayofweek >= 5.",
     "Đếm theo giờ cho từng nhóm, chia cho số ngày của nhóm để so sánh công bằng.",
     "Vẽ hai đường."
    ],
    "code": "df['is_weekend'] = df['tpep_pickup_datetime'].dt.dayofweek >= 5\ndays = df.groupby('is_weekend')['tpep_pickup_datetime'].apply(lambda s: s.dt.date.nunique())\nby = df.groupby(['is_weekend','pickup_hour']).size().unstack(0)\n(by / days).plot()",
    "lotus": "Lotus Spa ngày thường đông vào 18:00 đến 20:00 sau giờ làm. Cuối tuần đông vào 10:00 đến 14:00. Hai nhóm khác ngày nên phải chia cho số ngày.",
    "trap": "So sánh số chuyến thô giữa 5 ngày thường và 2 ngày cuối tuần mà không chia cho số ngày là so lệch.",
    "read": [
     "Hai đường trên một biểu đồ: ngày thường và cuối tuần.",
     "So giờ đỉnh và độ cao của hai đường."
    ],
    "remark": "Ngày thường có đỉnh rõ lúc chiều tối, còn cuối tuần phẳng hơn và kéo dài hơn về đêm; hai nhịp khác nhau nên cần điều phối riêng.",
    "howRemark": [
     "Mô tả mỗi đường một câu.",
     "Nêu điểm khác chính.",
     "Nói hệ quả điều phối."
    ]
   },
   "en": {
    "think": "Compare the hourly shape between weekdays and weekends. Two lines on one chart.",
    "steps": [
     "Create is_weekend: dayofweek >= 5.",
     "Count per hour for each group, divide by the group's number of days for a fair comparison.",
     "Draw two lines."
    ],
    "code": "df['is_weekend'] = df['tpep_pickup_datetime'].dt.dayofweek >= 5\ndays = df.groupby('is_weekend')['tpep_pickup_datetime'].apply(lambda s: s.dt.date.nunique())\nby = df.groupby(['is_weekend','pickup_hour']).size().unstack(0)\n(by / days).plot()",
    "lotus": "Lotus Spa weekdays peak 18:00 to 20:00 after work. Weekends peak 10:00 to 14:00. The two groups have different numbers of days so divide by days.",
    "trap": "Comparing raw counts between 5 weekdays and 2 weekend days without dividing by days is a lopsided comparison.",
    "read": [
     "Two lines on one chart: weekdays and weekends.",
     "Compare peak hours and heights."
    ],
    "remark": "Weekdays peak sharply in the early evening while weekends are flatter and run later into the night; the two rhythms need separate dispatch.",
    "howRemark": [
     "Describe each line in one sentence.",
     "State the main difference.",
     "State the dispatch consequence."
    ]
   }
  },
  "3.2.5": {
   "vi": {
    "think": "Mười vùng đón nhiều nhất và mười vùng trả nhiều nhất, rồi xem nhịp theo giờ của các vùng đó.",
    "steps": [
     "top_pu = df['PULocationID'].value_counts().head(10).index.",
     "top_do = df['DOLocationID'].value_counts().head(10).index.",
     "Với mỗi nhóm vùng, đếm theo giờ và vẽ."
    ],
    "code": "top_pu = df['PULocationID'].value_counts().head(10).index\ntop_do = df['DOLocationID'].value_counts().head(10).index\nhp = df[df['PULocationID'].isin(top_pu)].groupby(['pickup_hour','PULocationID']).size().unstack()\nhp.plot(figsize=(12,5))",
    "lotus": "Với ba chi nhánh, xem chi nhánh nào đón khách nhiều nhất và đông vào giờ nào. Chi nhánh nhiều khách đến chưa chắc là chi nhánh nhiều khách đi.",
    "trap": "Dùng mã vùng mà không đổi sang tên vùng làm biểu đồ khó đọc. Ghép tên từ bảng zones.",
    "read": [
     "Hai bảng top 10: điểm đón và điểm trả; kèm biểu đồ nhịp theo giờ.",
     "So hai danh sách để thấy vùng nào xuất hiện cả hai."
    ],
    "remark": "Top đón: JFK Airport (99.363), Upper East Side South (87.916), Midtown Center (86.783); các vùng trung tâm Manhattan và hai sân bay chiếm gần hết top 10.",
    "howRemark": [
     "Nêu 3 vùng đầu mỗi danh sách.",
     "So hai danh sách.",
     "Nhận xét nhịp theo giờ."
    ]
   },
   "en": {
    "think": "Top ten pickup zones and top ten dropoff zones, then look at the hourly rhythm of those zones.",
    "steps": [
     "top_pu = df['PULocationID'].value_counts().head(10).index.",
     "top_do = df['DOLocationID'].value_counts().head(10).index.",
     "For each group of zones, count per hour and draw."
    ],
    "code": "top_pu = df['PULocationID'].value_counts().head(10).index\ntop_do = df['DOLocationID'].value_counts().head(10).index\nhp = df[df['PULocationID'].isin(top_pu)].groupby(['pickup_hour','PULocationID']).size().unstack()\nhp.plot(figsize=(12,5))",
    "lotus": "With three branches, see which branch receives the most customers and at what hour. The branch customers arrive at most is not necessarily where they leave from most.",
    "trap": "Using zone codes without switching to zone names makes the chart hard to read. Join names from the zones table.",
    "read": [
     "Two top-10 tables: pickups and dropoffs; plus hourly rhythm charts.",
     "Compare the two lists to see zones in both."
    ],
    "remark": "Top pickups: JFK Airport (99,363), Upper East Side South (87,916), Midtown Center (86,783); central Manhattan zones and the two airports fill most of the top 10.",
    "howRemark": [
     "Name the top 3 of each list.",
     "Compare the two lists.",
     "Comment on the hourly rhythm."
    ]
   }
  },
  "3.2.6": {
   "vi": {
    "think": "Tỷ lệ đón trên trả của mỗi vùng. Lớn hơn 1 là vùng xuất phát nhiều hơn điểm đến; nhỏ hơn 1 ngược lại.",
    "steps": [
     "pu = df['PULocationID'].value_counts(); do = df['DOLocationID'].value_counts().",
     "ratio = (pu / do).dropna().",
     "Chú ý vùng không có chuyến trả sẽ chia cho 0: dùng dropna và kiểm tra vô cực.",
     "Hiển thị 10 tỷ lệ cao nhất và 10 thấp nhất."
    ],
    "code": "pu = df['PULocationID'].value_counts()\ndo = df['DOLocationID'].value_counts()\nratio = (pu / do).replace([np.inf, -np.inf], np.nan).dropna()\nprint(ratio.nlargest(10)); print(ratio.nsmallest(10))",
    "lotus": "Chi nhánh có 300 khách đi và 150 khách đến cho tỷ lệ 2: nhiều người rời đi hơn đến. Chi nhánh tỷ lệ 0,5 thì ngược lại.",
    "trap": "Vùng chỉ có 1 đón và 0 trả cho tỷ lệ vô cực. Lọc số chuyến tối thiểu trước khi xếp hạng.",
    "read": [
     "Bảng: tỷ lệ đón/trả mỗi vùng; trên 1 là vùng đón nhiều hơn trả.",
     "East Elmhurst 7,83, JFK 4,48 và LaGuardia 2,88 đứng đầu."
    ],
    "remark": "Các vùng sân bay có tỷ lệ đón/trả rất cao (East Elmhurst 7,83; JFK 4,48; LaGuardia 2,88): khách rời sân bay nhiều hơn khách đến, nên xe cần được chuyển từ nơi khác về bù.",
    "howRemark": [
     "Nêu vùng có tỷ lệ cao nhất.",
     "Giải thích ý nghĩa tỷ lệ trên và dưới 1.",
     "Gợi ý hành động điều phối."
    ]
   },
   "en": {
    "think": "Pickup-to-dropoff ratio of each zone. Above 1 means more departures than arrivals; below 1 the opposite.",
    "steps": [
     "pu = df['PULocationID'].value_counts(); do = df['DOLocationID'].value_counts().",
     "ratio = (pu / do).dropna().",
     "Mind zones with no dropoffs dividing by 0: use dropna and check for infinity.",
     "Show the 10 highest and 10 lowest ratios."
    ],
    "code": "pu = df['PULocationID'].value_counts()\ndo = df['DOLocationID'].value_counts()\nratio = (pu / do).replace([np.inf, -np.inf], np.nan).dropna()\nprint(ratio.nlargest(10)); print(ratio.nsmallest(10))",
    "lotus": "A branch with 300 customers leaving and 150 arriving gives a ratio of 2: more people leave than arrive. A branch with ratio 0.5 is the opposite.",
    "trap": "A zone with 1 pickup and 0 dropoffs gives infinity. Filter a minimum trip count before ranking.",
    "read": [
     "Table: pickup/dropoff ratio per zone; above 1 means more pickups than dropoffs.",
     "East Elmhurst 7.83, JFK 4.48 and LaGuardia 2.88 lead."
    ],
    "remark": "Airport zones have very high pickup/dropoff ratios (East Elmhurst 7.83; JFK 4.48; LaGuardia 2.88): more people leave airports than arrive, so cars must be repositioned in.",
    "howRemark": [
     "Name the zones with the highest ratio.",
     "Explain the meaning above and below 1.",
     "Suggest a dispatch action."
    ]
   }
  },
  "3.2.7": {
   "vi": {
    "think": "Giờ đêm từ 23 giờ đến 5 giờ sáng. Lọc chuyến theo giờ đêm rồi tìm top vùng đón và trả trong chính tập đó.",
    "steps": [
     "Định nghĩa đêm rõ ràng: pickup_hour >= 23 hoặc pickup_hour < 5 (ghi lại bạn chọn có gồm cả 5:00 hay không).",
     "night = df[mask].",
     "Top 10 vùng đón và trả chỉ trong night, không phải trong cả năm."
    ],
    "code": "night = df[(df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)]\nprint(night['PULocationID'].value_counts().head(10))\nprint(night['DOLocationID'].value_counts().head(10))",
    "lotus": "Ở khung 21:00 đến 23:00, giả sử chi nhánh Quận 1 vẫn đông còn Thủ Đức thưa. Top vùng của giờ đêm thường khác top vùng cả ngày.",
    "trap": "Lấy top của cả năm rồi lọc giờ đêm cho kết quả khác. Lọc giờ đêm trước rồi mới xếp hạng.",
    "read": [
     "Hai bảng: top vùng đón đêm và top vùng trả đêm (23h–5h).",
     "So với top ban ngày để thấy khác biệt."
    ],
    "remark": "Đêm đón nhiều nhất ở East Village (15.416), JFK Airport (13.870) và West Village (12.498): ban đêm nhu cầu chuyển sang các khu giải trí thay vì các khu văn phòng.",
    "howRemark": [
     "Nêu 3 vùng đầu.",
     "So với top ban ngày.",
     "Giải thích khác biệt."
    ]
   },
   "en": {
    "think": "Night hours run 11 PM to 5 AM. Filter trips by night hour, then find top pickup and dropoff zones within that subset.",
    "steps": [
     "Define night clearly: pickup_hour >= 23 or pickup_hour < 5 (record whether you include 5:00).",
     "night = df[mask].",
     "Top 10 pickup and dropoff zones within night only, not across the year."
    ],
    "code": "night = df[(df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)]\nprint(night['PULocationID'].value_counts().head(10))\nprint(night['DOLocationID'].value_counts().head(10))",
    "lotus": "In the 21:00 to 23:00 window, suppose District 1 is still busy while Thu Duc is quiet. Late-hour top zones are often not the all-day top zones.",
    "trap": "Taking the yearly top then filtering to night gives a different result. Filter to night first, then rank.",
    "read": [
     "Two tables: top night pickup zones and top night dropoff zones (23h–5h).",
     "Compare with the daytime top."
    ],
    "remark": "At night pickups lead in East Village (15,416), JFK Airport (13,870) and West Village (12,498): night demand shifts to entertainment areas rather than office districts.",
    "howRemark": [
     "Name the top 3.",
     "Compare with the daytime top.",
     "Explain the difference."
    ]
   }
  },
  "3.2.8": {
   "vi": {
    "think": "Tỷ trọng doanh thu giữa đêm và ngày là doanh thu mỗi nhóm chia cho tổng.",
    "steps": [
     "Tạo cột is_night theo định nghĩa ở 3.2.7.",
     "rev = df.groupby('is_night')['total_amount'].sum().",
     "share = rev / rev.sum()."
    ],
    "code": "df['is_night'] = (df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)\nrev = df.groupby('is_night')['total_amount'].sum()\nprint((rev / rev.sum()).round(3))",
    "lotus": "Nếu giờ đêm cho 12 phần doanh thu trên 100, tỷ trọng đêm là 12%. Một khung giờ vắng khách vẫn có thể có giá bán cao hơn.",
    "trap": "Dùng cùng định nghĩa đêm xuyên suốt. Đổi định nghĩa giữa các bài làm các con số không so được.",
    "read": [
     "Dòng chữ: ban ngày 88,6% và ban đêm (23h–5h) 11,4% doanh thu.",
     "Biểu đồ: tỷ trọng hai nhóm."
    ],
    "remark": "Ban đêm (23h–5h) chiếm 11,4% doanh thu so với 88,6% ban ngày: doanh thu chủ yếu đến từ ban ngày.",
    "howRemark": [
     "Báo hai tỷ trọng.",
     "Nhắc đêm chỉ 6 giờ trong 24.",
     "Kết luận."
    ]
   },
   "en": {
    "think": "Night versus day revenue share is each group's revenue divided by the total.",
    "steps": [
     "Create is_night using the definition from 3.2.7.",
     "rev = df.groupby('is_night')['total_amount'].sum().",
     "share = rev / rev.sum()."
    ],
    "code": "df['is_night'] = (df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)\nrev = df.groupby('is_night')['total_amount'].sum()\nprint((rev / rev.sum()).round(3))",
    "lotus": "If night hours bring 12 parts of revenue per 100, the night share is 12%. A quiet window can still carry a higher price.",
    "trap": "Use one definition of night throughout. Changing it between tasks makes the numbers incomparable.",
    "read": [
     "Text: daytime 88.6% and night (23h–5h) 11.4% of revenue.",
     "Chart: share of the two groups."
    ],
    "remark": "Night (23h–5h) brings 11.4% of revenue versus 88.6% by day: revenue is mostly daytime.",
    "howRemark": [
     "Report both shares.",
     "Remind night is only 6 of 24 hours.",
     "Conclude."
    ]
   }
  },
  "3.2.9": {
   "vi": {
    "think": "Giá trên dặm trên hành khách: lấy giá trên dặm của chuyến, rồi chia cho số hành khách. Hai người đi chung cùng một chuyến mỗi người trả một nửa.",
    "steps": [
     "Chỉ giữ trip_distance > 0.",
     "fare_per_mile = fare_amount / trip_distance.",
     "per_passenger = fare_per_mile / passenger_count.",
     "Trung bình theo passenger_count."
    ],
    "code": "d = df[df['trip_distance'] > 0].copy()\nd['fare_per_mile'] = d['fare_amount'] / d['trip_distance']\nd['fpm_pp'] = d['fare_per_mile'] / d['passenger_count']\nprint(d.groupby('passenger_count')['fpm_pp'].mean())",
    "lotus": "Gói đôi 1.200 nghìn cho hai người nghĩa là mỗi người 600 nghìn. Giá chia cho đầu người cho thấy gói đôi rẻ hơn gói lẻ bao nhiêu.",
    "trap": "Chia cho 0 hành khách hoặc 0 dặm làm ra vô cực. Lọc trước.",
    "read": [
     "Bảng: giá trên dặm và giá trên dặm trên người, theo số khách.",
     "Giá mỗi dặm gần như không đổi (7,3–7,5); chia theo người thì giảm."
    ],
    "remark": "Giá trên dặm của chuyến ổn định khoảng 7,4 dù có bao nhiêu khách, nên đi chung rẻ hơn mỗi người: 6 khách chỉ còn 1,24 mỗi người so với 7,49 khi đi một mình.",
    "howRemark": [
     "Nêu giá trên dặm và trên người.",
     "Giải thích vì sao chia theo người.",
     "Nói ý nghĩa với chính sách giá."
    ]
   },
   "en": {
    "think": "Fare per mile per passenger: take the trip's fare per mile, then divide by passenger count. Two people sharing one trip each pay half.",
    "steps": [
     "Keep only trip_distance > 0.",
     "fare_per_mile = fare_amount / trip_distance.",
     "per_passenger = fare_per_mile / passenger_count.",
     "Average by passenger_count."
    ],
    "code": "d = df[df['trip_distance'] > 0].copy()\nd['fare_per_mile'] = d['fare_amount'] / d['trip_distance']\nd['fpm_pp'] = d['fare_per_mile'] / d['passenger_count']\nprint(d.groupby('passenger_count')['fpm_pp'].mean())",
    "lotus": "A couple package at 1,200 thousand for two people means 600 thousand each. Dividing by head shows how much cheaper the couple package is than single ones.",
    "trap": "Dividing by 0 passengers or 0 miles gives infinity. Filter first.",
    "read": [
     "Table: fare per mile and fare per mile per person by passenger count.",
     "Per-mile price barely changes (7.3–7.5); per person it drops."
    ],
    "remark": "The trip's price per mile stays about 7.4 whatever the passenger count, so sharing is cheaper per person: 6 passengers pay only 1.24 each vs 7.49 alone.",
    "howRemark": [
     "State price per mile and per person.",
     "Explain why divide by passengers.",
     "State the pricing implication."
    ]
   }
  },
  "3.2.10": {
   "vi": {
    "think": "Giá trung bình trên dặm theo giờ trong ngày và theo thứ trong tuần.",
    "steps": [
     "Dùng fare_per_mile từ 3.2.9.",
     "d.groupby('pickup_hour')['fare_per_mile'].mean() và theo pickup_day.",
     "Vẽ hai biểu đồ."
    ],
    "code": "d.groupby('pickup_hour')['fare_per_mile'].mean().plot()\nd.groupby('pickup_day')['fare_per_mile'].mean().reindex(days).plot(kind='bar')",
    "lotus": "Giá bình quân mỗi phút liệu trình theo giờ: giờ vàng 18:00 đến 20:00 đắt hơn giờ trưa. Thấy rồi mới hỏi có nên giảm giá giờ thấp điểm không.",
    "trap": "Chuyến rất ngắn làm giá trên dặm vọt lên vì cước mở cửa cố định. Cân nhắc lọc ngưỡng quãng đường.",
    "read": [
     "Bảng giá trung bình mỗi dặm theo giờ: thấp nhất 5,66 lúc 5h, cao nhất 8,16 lúc 12h.",
     "Biểu đồ còn có theo thứ trong tuần."
    ],
    "remark": "Giá mỗi dặm thấp ban đêm và rạng sáng (5,66 lúc 5h) và cao nhất quanh trưa (8,16 lúc 12h) vì ban ngày chuyến ngắn và kẹt xe nên tính theo dặm đắt hơn.",
    "howRemark": [
     "Nêu giờ thấp và cao nhất kèm số.",
     "Đưa một lý do có thể.",
     "Nhắc chỉ là tương quan."
    ]
   },
   "en": {
    "think": "Average fare per mile by hour of day and by day of week.",
    "steps": [
     "Use fare_per_mile from 3.2.9.",
     "d.groupby('pickup_hour')['fare_per_mile'].mean() and by pickup_day.",
     "Draw two charts."
    ],
    "code": "d.groupby('pickup_hour')['fare_per_mile'].mean().plot()\nd.groupby('pickup_day')['fare_per_mile'].mean().reindex(days).plot(kind='bar')",
    "lotus": "Average price per session minute by hour: the 18:00 to 20:00 golden window costs more than lunch. After seeing it, ask whether to discount quiet hours.",
    "trap": "Very short trips push fare per mile up because of the fixed flag-down fee. Consider a distance threshold.",
    "read": [
     "Table of mean price per mile by hour: lowest 5.66 at 5h, highest 8.16 at 12h.",
     "The chart also shows weekdays."
    ],
    "remark": "Price per mile is low at night and dawn (5.66 at 5h) and highest around noon (8.16 at 12h), as daytime trips are shorter and slower so cost more per mile.",
    "howRemark": [
     "State the low and high hours with numbers.",
     "Give a possible reason.",
     "Remind it is only correlation."
    ]
   }
  },
  "3.2.11": {
   "vi": {
    "think": "So giá trên dặm giữa hai nhà cung cấp (VendorID) theo từng giờ.",
    "steps": [
     "pivot: hàng là giờ, cột là VendorID, giá trị là trung bình fare_per_mile.",
     "Vẽ hai đường.",
     "Nhớ VendorID 1 và 2 là hai nhà cung cấp dữ liệu, không phải hai hãng taxi."
    ],
    "code": "d.pivot_table(index='pickup_hour', columns='VendorID', values='fare_per_mile', aggfunc='mean').plot()",
    "lotus": "Hai kênh đặt lịch (web và điện thoại) bán cùng gói với giá hiển thị khác nhau. So theo giờ để xem chênh lệch có cố định hay thay đổi.",
    "trap": "Hai nhà cung cấp có thể phục vụ các nhóm chuyến khác nhau, nên chênh lệch không chỉ là chênh lệch giá.",
    "read": [
     "Hai số: giá trên dặm của nhà cung cấp 1 (7,42) và 2 (7,47).",
     "Biểu đồ chi tiết theo giờ."
    ],
    "remark": "Hai nhà cung cấp gần như giống nhau về giá trên dặm (7,42 và 7,47), chỉ chênh khoảng 0,05.",
    "howRemark": [
     "So hai số.",
     "Nói chênh có đáng kể không.",
     "Nhắc xem biểu đồ theo giờ."
    ]
   },
   "en": {
    "think": "Compare fare per mile between the two vendors (VendorID) for each hour.",
    "steps": [
     "pivot: rows are hours, columns are VendorID, values are mean fare_per_mile.",
     "Draw two lines.",
     "Remember VendorID 1 and 2 are two data providers, not two taxi firms."
    ],
    "code": "d.pivot_table(index='pickup_hour', columns='VendorID', values='fare_per_mile', aggfunc='mean').plot()",
    "lotus": "Two booking channels (web and phone) sell the same package at different shown prices. Compare by hour to see whether the gap is fixed or changing.",
    "trap": "The two vendors may serve different mixes of trips, so a gap is not only a price gap.",
    "read": [
     "Two numbers: price per mile of vendor 1 (7.42) and 2 (7.47).",
     "The chart details it by hour."
    ],
    "remark": "The two vendors are nearly identical on price per mile (7.42 vs 7.47), only about 0.05 apart.",
    "howRemark": [
     "Compare the two numbers.",
     "Say whether the gap matters.",
     "Point to the hourly chart."
    ]
   }
  },
  "3.2.12": {
   "vi": {
    "think": "Phân các chuyến thành ba bậc quãng đường rồi so giá trên dặm giữa hai nhà cung cấp ở mỗi bậc.",
    "steps": [
     "Bậc: đến 2 dặm, từ 2 đến 5 dặm, trên 5 dặm.",
     "pd.cut với bins=[0, 2, 5, np.inf], right=True, và đặt nhãn.",
     "Trung bình fare_per_mile theo (bậc, VendorID)."
    ],
    "code": "d['tier'] = pd.cut(d['trip_distance'], bins=[0, 2, 5, np.inf], labels=['<=2','2-5','>5'])\nprint(d.groupby(['tier','VendorID'], observed=True)['fare_per_mile'].mean().unstack())",
    "lotus": "Gói ngắn, vừa, dài: nhà cung cấp rẻ hơn ở bậc ngắn có thể đắt hơn ở bậc dài. Chia bậc cho thấy điều mà một con số trung bình che đi.",
    "trap": "Biên bậc phải rõ: 2 dặm thuộc bậc nào. Với right=True thì 2 thuộc bậc đầu.",
    "read": [
     "Bảng: giá trên dặm theo bậc quãng đường (hàng) và nhà cung cấp (cột).",
     "Bậc càng dài, giá mỗi dặm càng thấp."
    ],
    "remark": "Chuyến ngắn đắt nhất mỗi dặm (khoảng 8,9–9,0 dưới 2 dặm) và rẻ dần theo quãng đường (khoảng 4,4–4,5 trên 5 dặm); nhà cung cấp 2 nhỉnh hơn một chút ở mọi bậc.",
    "howRemark": [
     "Nêu xu hướng theo bậc.",
     "So hai nhà cung cấp ở mỗi bậc.",
     "Giải thích vì sao chuyến ngắn đắt mỗi dặm (phí mở cửa)."
    ]
   },
   "en": {
    "think": "Split trips into three distance tiers, then compare fare per mile between vendors in each tier.",
    "steps": [
     "Tiers: up to 2 miles, 2 to 5 miles, above 5 miles.",
     "pd.cut with bins=[0, 2, 5, np.inf], right=True, and set labels.",
     "Mean fare_per_mile by (tier, VendorID)."
    ],
    "code": "d['tier'] = pd.cut(d['trip_distance'], bins=[0, 2, 5, np.inf], labels=['<=2','2-5','>5'])\nprint(d.groupby(['tier','VendorID'], observed=True)['fare_per_mile'].mean().unstack())",
    "lotus": "Short, medium, long packages: the vendor cheaper on short ones may be dearer on long ones. Tiers reveal what one average hides.",
    "trap": "The tier edges must be clear: which tier does 2 miles belong to. With right=True it belongs to the first.",
    "read": [
     "Table: price per mile by distance tier (rows) and vendor (columns).",
     "The longer the tier, the lower the per-mile price."
    ],
    "remark": "Short trips cost most per mile (about 8.9–9.0 under 2 miles) and fall with distance (about 4.4–4.5 over 5 miles); vendor 2 is slightly higher at every tier.",
    "howRemark": [
     "State the trend by tier.",
     "Compare the two vendors per tier.",
     "Explain why short trips cost more per mile."
    ]
   }
  },
  "3.2.13": {
   "vi": {
    "think": "Phần trăm tiền boa là tiền boa chia cho tiền cước. Chỉ tính chuyến trả bằng thẻ vì tiền boa tiền mặt không được ghi.",
    "steps": [
     "Lọc payment_type == 1 và fare_amount > 0.",
     "tip_pct = tip_amount / fare_amount * 100.",
     "Trung bình theo bậc quãng đường, số hành khách, giờ đón.",
     "Nêu các yếu tố khiến tip_pct thấp."
    ],
    "code": "c = d[(d['payment_type'] == 1) & (d['fare_amount'] > 0)].copy()\nc['tip_pct'] = c['tip_amount'] / c['fare_amount'] * 100\nprint(c.groupby('tier', observed=True)['tip_pct'].mean())\nprint(c.groupby('passenger_count')['tip_pct'].mean())\nprint(c.groupby('pickup_hour')['tip_pct'].mean())",
    "lotus": "Boa 50 nghìn trên giá 650 nghìn là 7,7%. Chỉ tính khách thanh toán thẻ hoặc chuyển khoản, vì tiền mặt không có trong sổ.",
    "trap": "Tính boa cho cả chuyến tiền mặt làm tỷ lệ boa thấp giả.",
    "read": [
     "Dòng chữ: tiền boa trung bình của khách trả thẻ là 24,6% cước.",
     "Biểu đồ phân phối % boa."
    ],
    "remark": "Khách trả thẻ boa trung bình 24,6% cước. Chỉ tính thẻ vì tiền boa tiền mặt không được ghi lại nên thiếu.",
    "howRemark": [
     "Báo %.",
     "Nói vì sao chỉ lấy thẻ.",
     "Nhắc giới hạn của số liệu."
    ]
   },
   "en": {
    "think": "Tip percentage is tip divided by fare. Count card trips only because cash tips are not recorded.",
    "steps": [
     "Filter payment_type == 1 and fare_amount > 0.",
     "tip_pct = tip_amount / fare_amount * 100.",
     "Average by distance tier, passenger count, pickup hour.",
     "State which factors lead to low tip_pct."
    ],
    "code": "c = d[(d['payment_type'] == 1) & (d['fare_amount'] > 0)].copy()\nc['tip_pct'] = c['tip_amount'] / c['fare_amount'] * 100\nprint(c.groupby('tier', observed=True)['tip_pct'].mean())\nprint(c.groupby('passenger_count')['tip_pct'].mean())\nprint(c.groupby('pickup_hour')['tip_pct'].mean())",
    "lotus": "A tip of 50 thousand on a 650 thousand price is 7.7%. Count only card or transfer customers, since cash is not in the log.",
    "trap": "Counting cash trips makes the tip rate falsely low.",
    "read": [
     "Text: card customers tip 24.6% of the fare on average.",
     "Chart: distribution of tip %."
    ],
    "remark": "Card customers tip 24.6% of the fare on average. Only cards are counted because cash tips are not recorded.",
    "howRemark": [
     "Report the %.",
     "Say why only card.",
     "Remind the data limit."
    ]
   }
  },
  "3.2.14": {
   "vi": {
    "think": "Số hành khách thay đổi thế nào theo giờ và theo thứ trong tuần. Một bảng giờ nhân thứ cho thấy cả hai cùng lúc.",
    "steps": [
     "pivot_table với hàng là giờ, cột là thứ, giá trị là trung bình passenger_count.",
     "Vẽ bản đồ nhiệt (heatmap).",
     "Đọc ô đậm nhất."
    ],
    "code": "pt = df.pivot_table(index='pickup_hour', columns='pickup_day', values='passenger_count', aggfunc='mean')[days]\nsns.heatmap(pt, cmap='YlOrRd')",
    "lotus": "Số khách mỗi lượt đặt ở Lotus Spa: tối cuối tuần thường đi đôi nhiều hơn sáng thứ hai. Bản đồ nhiệt cho thấy điều đó trong một hình.",
    "trap": "Trung bình số khách chênh nhau rất ít giữa các ô. Đừng đọc chênh lệch nhỏ như một mẫu hình.",
    "read": [
     "Bảng giờ × thứ: số hành khách trung bình mỗi chuyến.",
     "Đọc theo hàng (một giờ qua các thứ) và theo cột."
    ],
    "remark": "Số hành khách trung bình chỉ dao động khoảng 1,2–1,5 mỗi chuyến; cao hơn vào cuối tuần và ban đêm (khoảng 1,45–1,51), thấp nhất sáng sớm ngày thường (1,21–1,26).",
    "howRemark": [
     "Nêu thấp nhất và cao nhất kèm số.",
     "Nhận xét cuối tuần và ban đêm.",
     "Kết luận về độ dao động."
    ]
   },
   "en": {
    "think": "How passenger count varies by hour and by day of week. An hour-by-day table shows both at once.",
    "steps": [
     "pivot_table with hour as rows, day as columns, mean passenger_count as values.",
     "Draw a heatmap.",
     "Read the darkest cell."
    ],
    "code": "pt = df.pivot_table(index='pickup_hour', columns='pickup_day', values='passenger_count', aggfunc='mean')[days]\nsns.heatmap(pt, cmap='YlOrRd')",
    "lotus": "Guests per Lotus Spa booking: weekend evenings tend to carry more pairs than Monday mornings. A heatmap shows that in one picture.",
    "trap": "Average guest counts differ very little between cells. Do not read a tiny difference as a pattern.",
    "read": [
     "Hour × weekday table: mean passengers per trip.",
     "Read across a row (one hour over weekdays) and down a column."
    ],
    "remark": "Mean passengers only range about 1.2–1.5 per trip; higher on weekends and at night (about 1.45–1.51), lowest on weekday early mornings (1.21–1.26).",
    "howRemark": [
     "State the lowest and highest with numbers.",
     "Comment on weekend and night.",
     "Conclude on the small variation."
    ]
   }
  },
  "3.2.15": {
   "vi": {
    "think": "Số hành khách trung bình ở từng vùng. Vẽ cột cho top và thêm cột vào bảng bản đồ.",
    "steps": [
     "avg = df.groupby('PULocationID')['passenger_count'].mean().",
     "Gắn vào zones_with_trips theo LocationID.",
     "Vẽ bản đồ màu theo avg_passengers."
    ],
    "code": "avg = df.groupby('PULocationID')['passenger_count'].mean().rename('avg_passengers')\nzones_with_trips = zones_with_trips.merge(avg, left_on='LocationID', right_index=True, how='left')\nzones_with_trips.plot(column='avg_passengers', legend=True, figsize=(12,10))",
    "lotus": "Chi nhánh có nhiều nhóm đi chung có số khách trung bình cao hơn. Biết điều đó thì chọn gói đôi hay gói nhóm cho chi nhánh nào.",
    "trap": "Vùng ít chuyến có trung bình nhiễu. Lọc số chuyến tối thiểu hoặc ghi chú.",
    "read": [
     "Bảng: vùng, số khách trung bình và số chuyến.",
     "Chỉ nên so vùng có đủ chuyến (cột n)."
    ],
    "remark": "Battery Park có số khách trung bình cao nhất (1,82 với 837 chuyến), tiếp theo Red Hook (1,71) và DUMBO (1,69); các vùng du lịch hay đi nhóm.",
    "howRemark": [
     "Nêu top vùng kèm số khách.",
     "Kiểm cột n để chắc đủ mẫu.",
     "Giải thích có thể."
    ]
   },
   "en": {
    "think": "Average passenger count per zone. Draw bars for the top and add a column to the map table.",
    "steps": [
     "avg = df.groupby('PULocationID')['passenger_count'].mean().",
     "Attach to zones_with_trips by LocationID.",
     "Draw a colour map by avg_passengers."
    ],
    "code": "avg = df.groupby('PULocationID')['passenger_count'].mean().rename('avg_passengers')\nzones_with_trips = zones_with_trips.merge(avg, left_on='LocationID', right_index=True, how='left')\nzones_with_trips.plot(column='avg_passengers', legend=True, figsize=(12,10))",
    "lotus": "A branch with many group visits has a higher average guest count. Knowing that, choose couple or group packages for which branch.",
    "trap": "Zones with few trips have noisy averages. Filter a minimum count or add a note.",
    "read": [
     "Table: zone, mean passengers and trips.",
     "Compare only zones with enough trips (column n)."
    ],
    "remark": "Battery Park has the highest mean passengers (1.82 over 837 trips), then Red Hook (1.71) and DUMBO (1.69); tourist areas often travel in groups.",
    "howRemark": [
     "Name the top zones with passenger means.",
     "Check column n for enough sample.",
     "Give a possible explanation."
    ]
   }
  },
  "3.2.16": {
   "vi": {
    "think": "Mức độ thường xuyên của các loại phụ phí và nơi hoặc lúc chúng được áp dụng nhiều hơn.",
    "steps": [
     "Với mỗi cột phụ phí (extra, mta_tax, tolls_amount, improvement_surcharge, congestion_surcharge, airport_fee): tỷ lệ chuyến có giá trị lớn hơn 0.",
     "Nhóm theo giờ và theo vùng đón để xem phụ phí nào tập trung ở đâu.",
     "Phụ phí sân bay chỉ có ở vùng sân bay."
    ],
    "code": "surch = ['extra','mta_tax','tolls_amount','improvement_surcharge','congestion_surcharge','airport_fee']\nprint((df[surch] > 0).mean().round(3))\nfor col in ['extra','congestion_surcharge','airport_fee']:\n    df.assign(flag=df[col] > 0).groupby('pickup_hour')['flag'].mean().plot(label=col)",
    "lotus": "Phụ phí giờ vàng áp dụng 18:00 đến 20:00. Đếm tỷ lệ booking có phụ phí theo giờ cho thấy phụ phí tập trung ở đâu và có đang làm khách rời đi không.",
    "trap": "Đừng nhầm tần suất với doanh thu: một phụ phí hiếm nhưng lớn có thể quan trọng hơn một phụ phí thường xuyên nhưng nhỏ.",
    "read": [
     "Bốn số: % chuyến có từng loại phụ phí: extra 61,6%, congestion 92,2%, airport 8,9%, tolls 8,2%.",
     "Biểu đồ chi tiết theo giờ hoặc vùng."
    ],
    "remark": "Phí ùn tắc áp dụng cho 92,2% chuyến và phụ thu extra cho 61,6%; phí sân bay (8,9%) và cầu đường (8,2%) chỉ ở số ít chuyến, nên chỉ phí ùn tắc là phụ phí phổ biến.",
    "howRemark": [
     "Xếp phụ phí theo mức thường gặp.",
     "Nêu phí nào đặc thù theo nơi.",
     "Nói ý nghĩa tính tổng cước."
    ]
   },
   "en": {
    "think": "How often each surcharge applies and where or when it applies more.",
    "steps": [
     "For each surcharge column (extra, mta_tax, tolls_amount, improvement_surcharge, congestion_surcharge, airport_fee): share of trips with a value above 0.",
     "Group by hour and by pickup zone to see where each surcharge concentrates.",
     "The airport fee exists only in airport zones."
    ],
    "code": "surch = ['extra','mta_tax','tolls_amount','improvement_surcharge','congestion_surcharge','airport_fee']\nprint((df[surch] > 0).mean().round(3))\nfor col in ['extra','congestion_surcharge','airport_fee']:\n    df.assign(flag=df[col] > 0).groupby('pickup_hour')['flag'].mean().plot(label=col)",
    "lotus": "The golden-hour surcharge applies 18:00 to 20:00. Counting the share of bookings with a surcharge by hour shows where it concentrates and whether it pushes customers away.",
    "trap": "Do not confuse frequency with revenue: a rare but large surcharge can matter more than a frequent but small one.",
    "read": [
     "Four numbers: % of trips with each surcharge: extra 61.6%, congestion 92.2%, airport 8.9%, tolls 8.2%.",
     "The chart details by hour or zone."
    ],
    "remark": "The congestion surcharge applies to 92.2% of trips and extra to 61.6%; airport (8.9%) and tolls (8.2%) hit few trips, so only congestion is a widespread surcharge.",
    "howRemark": [
     "Rank surcharges by frequency.",
     "Name which are location-specific.",
     "State the meaning for total fare."
    ]
   }
  },
  "4.1.1": {
   "vi": {
    "think": "Khuyến nghị về điều phối: dựa vào mẫu hình nhu cầu và các tuyến chậm. Mỗi khuyến nghị phải trỏ về một kết quả bạn đã tính.",
    "steps": [
     "Nêu giờ đông (3.2.2) và các tuyến chậm (3.2.1).",
     "Đề xuất: điều xe đến vùng và giờ nào, tránh tuyến chậm lúc nào.",
     "Mỗi câu đi kèm một con số từ phân tích của bạn."
    ],
    "code": "# Write your recommendations here as markdown or print statements,\n# each citing a number from your analysis, e.g.\n# print(f'Busiest hour {hourly.idxmax()}: {scaled.max():,.0f} trips -> dispatch more cabs before this hour')",
    "lotus": "Giờ đông là 19:00 và tuyến Quận 1 sang Quận 3 chậm nhất lúc 18:00: dời một nhân viên về chi nhánh Quận 1 trước 18:00 và đẩy lịch hẹn giữa hai chi nhánh sang 16:00.",
    "trap": "Một khuyến nghị không có con số đi kèm chỉ là ý kiến. Dẫn con số.",
    "read": [
     "Mục này là bài viết khuyến nghị, không có số mới; hãy dựa vào các kết quả ở mục 3."
    ],
    "remark": "Khuyến nghị điều phối phải trỏ về số đã tính: ví dụ đỉnh lúc 18h (3.2.2), tốc độ chỉ khoảng 10 dặm/giờ buổi chiều (3.2.1), tỷ lệ đón/trả sân bay cao (3.2.6).",
    "howRemark": [
     "Chọn một kết quả cụ thể làm bằng chứng.",
     "Nêu số liệu kèm mục tham chiếu.",
     "Đưa hành động cụ thể, đo được.",
     "Nêu giới hạn (mẫu 5%, không có dữ liệu chi phí)."
    ]
   },
   "en": {
    "think": "Dispatch recommendations: based on demand patterns and slow routes. Each recommendation must point back to a result you computed.",
    "steps": [
     "State the busy hours (3.2.2) and slow routes (3.2.1).",
     "Propose: which zones and hours to send cabs to, when to avoid slow routes.",
     "Attach a number from your analysis to every sentence."
    ],
    "code": "# Write your recommendations here as markdown or print statements,\n# each citing a number from your analysis, e.g.\n# print(f'Busiest hour {hourly.idxmax()}: {scaled.max():,.0f} trips -> dispatch more cabs before this hour')",
    "lotus": "The busy hour is 19:00 and the District 1 to District 3 route is slowest at 18:00: move one staff member to District 1 before 18:00 and shift inter-branch appointments to 16:00.",
    "trap": "A recommendation with no number is only an opinion. Cite the number.",
    "read": [
     "This task is a written recommendation with no new numbers; rely on the results in part 3."
    ],
    "remark": "Dispatch recommendations must cite computed numbers: e.g. the 18h peak (3.2.2), only about 10 mph in the afternoon (3.2.1), high airport pickup/dropoff ratios (3.2.6).",
    "howRemark": [
     "Pick a concrete result as evidence.",
     "Quote the number with the task reference.",
     "Give a specific, measurable action.",
     "State the limits (5% sample, no cost data)."
    ]
   }
  },
  "4.1.2": {
   "vi": {
    "think": "Đặt xe ở đâu và lúc nào dựa vào nhu cầu theo vùng, giờ, thứ và tháng. Dùng tỷ lệ đón trên trả (3.2.6) để biết vùng nào cần bù xe.",
    "steps": [
     "Vùng có tỷ lệ đón cao hơn trả nhiều: xe rời đi hết, cần đưa xe về.",
     "Vùng đêm đông (3.2.7): giữ một số xe trực.",
     "Theo tháng và thứ: tăng hoặc giảm đội xe theo mùa."
    ],
    "code": "# Write positioning suggestions here, citing the ratio table (3.2.6),\n# the night-hours table (3.2.7) and the monthly trend (3.1.4)",
    "lotus": "Chi nhánh Quận 1 có tỷ lệ đi trên đến là 2: đưa thêm một nhân viên về sau 18:00. Thủ Đức vắng vào tháng 12: giảm ca ở đó.",
    "trap": "Đề xuất đặt xe ở vùng có nhiều chuyến mà không xét tỷ lệ đón trên trả sẽ làm vùng đó thừa xe.",
    "read": [
     "Mục này là bài viết khuyến nghị, không có số mới; hãy dựa vào các kết quả ở mục 3."
    ],
    "remark": "Đặt xe theo vùng, giờ và thứ: tăng xe quanh 18h và ở JFK/LaGuardia (tỷ lệ đón/trả 4,48 và 2,88), chuyển xe từ các vùng có tỷ lệ dưới 1 về bù.",
    "howRemark": [
     "Chọn một kết quả cụ thể làm bằng chứng.",
     "Nêu số liệu kèm mục tham chiếu.",
     "Đưa hành động cụ thể, đo được.",
     "Nêu giới hạn (mẫu 5%, không có dữ liệu chi phí)."
    ]
   },
   "en": {
    "think": "Where and when to position cabs based on demand by zone, hour, weekday and month. Use the pickup-to-dropoff ratio (3.2.6) to know which zones need top-ups.",
    "steps": [
     "A zone with pickups well above dropoffs: cabs leave and do not return, so send cabs back.",
     "Busy night zones (3.2.7): keep some cabs on standby.",
     "By month and weekday: grow or shrink the fleet seasonally."
    ],
    "code": "# Write positioning suggestions here, citing the ratio table (3.2.6),\n# the night-hours table (3.2.7) and the monthly trend (3.1.4)",
    "lotus": "District 1 has a leave-to-arrive ratio of 2: bring in one more staff member after 18:00. Thu Duc is quiet in December: cut shifts there.",
    "trap": "Positioning cabs where there are many trips without checking the pickup-to-dropoff ratio leaves that zone with too many cabs.",
    "read": [
     "This task is a written recommendation with no new numbers; rely on the results in part 3."
    ],
    "remark": "Place cars by zone, hour and weekday: add cars around 18h and at JFK/LaGuardia (pickup/dropoff ratio 4.48 and 2.88), moving cars in from zones below 1.",
    "howRemark": [
     "Pick a concrete result as evidence.",
     "Quote the number with the task reference.",
     "Give a specific, measurable action.",
     "State the limits (5% sample, no cost data)."
    ]
   }
  },
  "4.1.3": {
   "vi": {
    "think": "Điều chỉnh giá dựa trên dữ liệu: tăng doanh thu mà vẫn cạnh tranh với nhà cung cấp khác.",
    "steps": [
     "Dùng giá trên dặm theo giờ (3.2.10) và theo bậc quãng đường (3.2.12).",
     "Đề xuất giá cao hơn ở giờ đông và ở bậc nơi bạn đang rẻ hơn đối thủ.",
     "Giữ nguyên hoặc giảm ở giờ vắng để kéo nhu cầu.",
     "Nêu rủi ro: giá tăng có thể làm giảm số chuyến."
    ],
    "code": "# Write pricing adjustments here, citing fare per mile by hour (3.2.10),\n# the tier comparison (3.2.12) and the surcharge shares (3.2.16)",
    "lotus": "Giờ vàng 18:00 đến 20:00 đông nhưng giá ngang giờ trưa: thử tăng giá ở khung đó, giữ giá giờ vắng. Theo dõi tuần sau xem số lượt đặt có giảm quá mức bạn chấp nhận không.",
    "trap": "Tăng giá mà không đặt mức chấp nhận được cho sự sụt giảm số lượt là đánh cược.",
    "read": [
     "Mục này là bài viết khuyến nghị, không có số mới; hãy dựa vào các kết quả ở mục 3."
    ],
    "remark": "Điều chỉnh giá: chuyến ngắn đắt mỗi dặm (8,9–9,0) trong khi hai nhà cung cấp gần như bằng giá (7,42 và 7,47); tăng giá vừa phải ở giờ cao điểm nhưng giữ cạnh tranh.",
    "howRemark": [
     "Chọn một kết quả cụ thể làm bằng chứng.",
     "Nêu số liệu kèm mục tham chiếu.",
     "Đưa hành động cụ thể, đo được.",
     "Nêu giới hạn (mẫu 5%, không có dữ liệu chi phí)."
    ]
   },
   "en": {
    "think": "Data-driven pricing adjustments: raise revenue while staying competitive with other vendors.",
    "steps": [
     "Use fare per mile by hour (3.2.10) and by distance tier (3.2.12).",
     "Propose higher prices at busy hours and in tiers where you are cheaper than rivals.",
     "Hold or cut at quiet hours to lift demand.",
     "State the risk: a higher price may reduce trips."
    ],
    "code": "# Write pricing adjustments here, citing fare per mile by hour (3.2.10),\n# the tier comparison (3.2.12) and the surcharge shares (3.2.16)",
    "lotus": "The golden window 18:00 to 20:00 is busy but priced like lunch: try raising it, keep quiet-hour prices. Watch next week to see whether bookings drop by more than you accept.",
    "trap": "Raising prices without setting an acceptable drop in bookings is a gamble.",
    "read": [
     "This task is a written recommendation with no new numbers; rely on the results in part 3."
    ],
    "remark": "Pricing: short trips cost most per mile (8.9–9.0) while the two vendors are nearly equal (7.42 vs 7.47); raise prices modestly at peak while staying competitive.",
    "howRemark": [
     "Pick a concrete result as evidence.",
     "Quote the number with the task reference.",
     "Give a specific, measurable action.",
     "State the limits (5% sample, no cost data)."
    ]
   }
  }
 },
 "results": {
  "1.1.1": {
   "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns, geopandas as gpd, glob\nframes = []\ntotal_rows = 0\nfor f in sorted(glob.glob('/tmp/asg/taxi/yellow_tripdata_2023-*.parquet')):\n    m = pd.read_parquet(f)\n    total_rows += len(m)\n    m['date'] = m['tpep_pickup_datetime'].dt.date\n    m['hour'] = m['tpep_pickup_datetime'].dt.hour\n    s = m.groupby(['date', 'hour'], group_keys=False).sample(frac=0.05, random_state=42)\n    frames.append(s.drop(columns=['date', 'hour']))\n    print(f.split('_')[-1], len(m), '->', len(s))\ndf = pd.concat(frames, ignore_index=True)\nsample_fraction = len(df) / total_rows\nprint('tổng số chuyến cả năm:', total_rows, '| mẫu:', len(df), '| tỷ lệ lấy mẫu:', round(sample_fraction, 4))",
   "text": "2023-01.parquet 3066766 -> 153336\n2023-02.parquet 2913955 -> 145690\n2023-03.parquet 3403766 -> 170184\n2023-04.parquet 3288250 -> 164410\n2023-05.parquet 3513649 -> 175683\n2023-06.parquet 3307234 -> 165362\n2023-07.parquet 2907108 -> 145348\n2023-08.parquet 2824209 -> 141219\n2023-09.parquet 2846722 -> 142340\n2023-10.parquet 3522285 -> 176117\n2023-11.parquet 3339715 -> 166986\n2023-12.parquet 3376567 -> 168836\ntổng số chuyến cả năm: 38310226 | mẫu: 1915511 | tỷ lệ lấy mẫu: 0.05",
   "imgs": []
  },
  "2.1.1": {
   "code": "df = df[(df['tpep_pickup_datetime'].dt.year == 2023)].reset_index(drop=True)\ndf.info()",
   "text": "<class 'pandas.DataFrame'>\nRangeIndex: 1915510 entries, 0 to 1915509\nData columns (total 20 columns):\n #   Column                 Dtype         \n---  ------                 -----         \n 0   VendorID               int64         \n 1   tpep_pickup_datetime   datetime64[us]\n 2   tpep_dropoff_datetime  datetime64[us]\n 3   passenger_count        float64       \n 4   trip_distance          float64       \n 5   RatecodeID             float64       \n 6   store_and_fwd_flag     str           \n 7   PULocationID           int64         \n 8   DOLocationID           int64         \n 9   payment_type           int64         \n 10  fare_amount            float64       \n 11  extra                  float64       \n 12  mta_tax                float64       \n 13  tip_amount             float64       \n 14  tolls_amount           float64       \n 15  improvement_surcharge  float64       \n 16  total_amount           float64       \n 17  congestion_surcharge   float64       \n 18  airport_fee            float64       \n 19  Airport_fee            float64       \ndtypes: datetime64[us](2), float64(13), int64(4), str(1)\nmemory usage: 294.3 MB",
   "imgs": []
  },
  "2.1.2": {
   "code": "print([c for c in df.columns if 'irport' in c])\ndf['airport_fee'] = df['airport_fee'].fillna(df['Airport_fee']) if 'Airport_fee' in df.columns else df['airport_fee']\ndf = df.drop(columns=[c for c in ['Airport_fee'] if c in df.columns])\nprint(df['airport_fee'].describe().round(2))",
   "text": "['airport_fee', 'Airport_fee']\ncount    1849775.00\nmean           0.14\nstd            0.47\nmin           -1.75\n25%            0.00\n50%            0.00\n75%            0.00\nmax            1.75\nName: airport_fee, dtype: float64",
   "imgs": []
  },
  "2.1.3": {
   "code": "money = ['fare_amount', 'extra', 'mta_tax', 'tip_amount', 'tolls_amount', 'improvement_surcharge', 'total_amount', 'congestion_surcharge', 'airport_fee']\nneg = df[money].lt(0).sum()\nprint(neg[neg > 0])\nprint(df.loc[df['fare_amount'] < 0, 'RatecodeID'].value_counts(dropna=False).head())\nfor c in money: df[c] = df[c].abs()",
   "text": "fare_amount              19059\nextra                     9527\nmta_tax                  18251\ntip_amount                  94\ntolls_amount              1250\nimprovement_surcharge    18790\ntotal_amount             18801\ncongestion_surcharge     15156\nairport_fee               2490\ndtype: int64\nRatecodeID\n1.0    16695\n2.0     1344\n5.0      359\nNaN      358\n3.0      198\nName: count, dtype: int64",
   "imgs": []
  },
  "2.2.1": {
   "code": "print((df.isnull().mean() * 100).round(2)[df.isnull().sum() > 0])",
   "text": "passenger_count         3.43\nRatecodeID              3.43\nstore_and_fwd_flag      3.43\ncongestion_surcharge    3.43\nairport_fee             3.43\ndtype: float64",
   "imgs": []
  },
  "2.2.2": {
   "code": "print(df['passenger_count'].value_counts(dropna=False).sort_index())\ndf['passenger_count'] = df['passenger_count'].fillna(df['passenger_count'].median())\ndf.loc[df['passenger_count'] == 0, 'passenger_count'] = df['passenger_count'].median()",
   "text": "passenger_count\n0.0      28990\n1.0    1390732\n2.0     280855\n3.0      69463\n4.0      39502\n5.0      24376\n6.0      15829\n7.0          8\n8.0         17\n9.0          3\nNaN      65735\nName: count, dtype: int64",
   "imgs": []
  },
  "2.2.3": {
   "code": "print(df['RatecodeID'].value_counts(dropna=False))\ndf['RatecodeID'] = df['RatecodeID'].fillna(df['RatecodeID'].mode()[0])",
   "text": "RatecodeID\n1.0     1744049\n2.0       73959\nNaN       65735\n5.0       10846\n99.0      10649\n3.0        6391\n4.0        3880\n6.0           1\nName: count, dtype: int64",
   "imgs": []
  },
  "2.2.4": {
   "code": "print(df['congestion_surcharge'].value_counts(dropna=False))\ndf['congestion_surcharge'] = df['congestion_surcharge'].fillna(df['congestion_surcharge'].mode()[0])\ndf['airport_fee'] = df['airport_fee'].fillna(0)\nprint(df.isnull().sum().sum(), 'ô trống còn lại')",
   "text": "congestion_surcharge\n2.5    1705676\n0.0     144099\nNaN      65735\nName: count, dtype: int64\n65735 ô trống còn lại",
   "imgs": []
  },
  "2.3.1": {
   "code": "df['trip_duration'] = (df['tpep_dropoff_datetime'] - df['tpep_pickup_datetime']).dt.total_seconds() / 60\nprint(df[['trip_distance','fare_amount','tip_amount','total_amount','trip_duration']].describe().round(1).to_string())\nn0 = len(df)\ndf = df[df['passenger_count'] <= 6]\ndf = df[~((df['trip_distance'] < 0.1) & (df['fare_amount'] > 300))]\ndf = df[~((df['trip_distance'] == 0) & (df['fare_amount'] == 0) & (df['PULocationID'] != df['DOLocationID']))]\ndf = df[(df['trip_duration'] > 0) & (df['trip_duration'] < 24 * 60)]\ndf = df[df['trip_distance'] < 100]\ndf = df[df['fare_amount'] < 500]\ndf = df[df['payment_type'] != 0]\ndf = df.reset_index(drop=True)\nprint('bỏ', n0 - len(df), 'dòng lỗi, còn', len(df))",
   "text": "       trip_distance  fare_amount  tip_amount  total_amount  trip_duration\ncount      1915510.0    1915510.0   1915510.0     1915510.0      1915510.0\nmean             4.0         20.0         3.5          29.0           17.4\nstd            199.0        105.1         4.1         105.9           40.6\nmin              0.0          0.0         0.0           0.0          -58.6\n25%              1.0          9.3         1.0          16.0            7.6\n50%              1.8         13.5         2.8          21.0           12.7\n75%              3.4         22.6         4.4          31.0           20.7\nmax         191945.0     143163.4       444.0      143167.4         7352.1\nbỏ 66539 dòng lỗi, còn 1848971",
   "imgs": []
  },
  "3.1.1": {
   "code": "df['pickup_hour'] = df['tpep_pickup_datetime'].dt.hour\ndf['pickup_day'] = df['tpep_pickup_datetime'].dt.day_name()\ndf['pickup_month'] = df['tpep_pickup_datetime'].dt.month\ncats = ['VendorID', 'RatecodeID', 'PULocationID', 'DOLocationID', 'payment_type']\nprint('Phân loại: categorical =', cats, '| numerical = passenger_count, trip_distance, trip_duration, các cột tiền')",
   "text": "Phân loại: categorical = ['VendorID', 'RatecodeID', 'PULocationID', 'DOLocationID', 'payment_type'] | numerical = passenger_count, trip_distance, trip_duration, các cột tiền",
   "imgs": []
  },
  "3.1.2": {
   "code": "fig, ax = plt.subplots(1, 3, figsize=(17, 4))\ndf['pickup_hour'].value_counts().sort_index().plot(kind='bar', ax=ax[0], title='Chuyến theo giờ')\norder = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']\ndf['pickup_day'].value_counts().reindex(order).plot(kind='bar', ax=ax[1], title='Chuyến theo thứ')\ndf['pickup_month'].value_counts().sort_index().plot(kind='bar', ax=ax[2], title='Chuyến theo tháng')\nplt.tight_layout()\nprint('giờ đông nhất:', df['pickup_hour'].value_counts().idxmax(), '| thứ đông nhất:', df['pickup_day'].value_counts().idxmax(), '| tháng đông nhất:', df['pickup_month'].value_counts().idxmax())",
   "text": "giờ đông nhất: 18 | thứ đông nhất: Thursday | tháng đông nhất: 5",
   "imgs": [
    "/assign/eda-taxi/3_1_2-1.png"
   ]
  },
  "3.1.3": {
   "code": "cols = ['fare_amount', 'tip_amount', 'total_amount', 'trip_distance']\nprint((df[cols] == 0).sum())\nnz = df[(df[['fare_amount', 'total_amount']] > 0).all(axis=1)].copy()\nprint(len(df), '->', len(nz))",
   "text": "fare_amount         576\ntip_amount       426710\ntotal_amount        251\ntrip_distance     23540\ndtype: int64\n1848971 -> 1848395",
   "imgs": []
  },
  "3.1.4": {
   "code": "monthly = nz.groupby('pickup_month')['total_amount'].sum() * (1 / sample_fraction)\n(monthly / 1e6).plot(kind='bar', title='Doanh thu theo tháng (triệu USD, đã nhân ngược tỷ lệ mẫu)')\nprint((monthly / 1e6).round(1).to_string())",
   "text": "pickup_month\n1      81.9\n2      77.4\n3      93.3\n4      91.7\n5     100.2\n6      93.7\n7      82.4\n8      79.9\n9      81.7\n10    100.2\n11     93.6\n12     93.0",
   "imgs": [
    "/assign/eda-taxi/3_1_4-1.png"
   ]
  },
  "3.1.5": {
   "code": "nz['quarter'] = nz['tpep_pickup_datetime'].dt.quarter\nq = nz.groupby('quarter')['total_amount'].sum()\nprint((q / q.sum() * 100).round(1).to_string())\n(q / q.sum()).plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo quý')",
   "text": "quarter\n1    23.6\n2    26.7\n3    22.8\n4    26.8",
   "imgs": [
    "/assign/eda-taxi/3_1_5-1.png"
   ]
  },
  "3.1.6": {
   "code": "d = nz[nz['trip_distance'] > 0]\nd2 = d.sample(8000, random_state=1)\nsns.scatterplot(data=d2, x='trip_distance', y='fare_amount', alpha=0.3)\nprint('tương quan distance - fare:', round(d['trip_distance'].corr(d['fare_amount']), 3))",
   "text": "tương quan distance - fare: 0.944",
   "imgs": [
    "/assign/eda-taxi/3_1_6-1.png"
   ]
  },
  "3.1.7": {
   "code": "s = nz.sample(8000, random_state=2)\nfig, ax = plt.subplots(1, 3, figsize=(17, 4))\nsns.scatterplot(data=s, x='trip_duration', y='fare_amount', alpha=0.3, ax=ax[0])\nsns.boxplot(data=s, x='passenger_count', y='fare_amount', ax=ax[1])\nsns.scatterplot(data=s, x='trip_distance', y='tip_amount', alpha=0.3, ax=ax[2])\nprint('fare ~ duration', round(nz['fare_amount'].corr(nz['trip_duration']), 3))\nprint('fare ~ passengers', round(nz['fare_amount'].corr(nz['passenger_count']), 3))\nprint('tip ~ distance', round(nz['tip_amount'].corr(nz['trip_distance']), 3))",
   "text": "fare ~ duration 0.271\nfare ~ passengers 0.047\ntip ~ distance 0.568",
   "imgs": [
    "/assign/eda-taxi/3_1_7-1.png"
   ]
  },
  "3.1.8": {
   "code": "pt = df['payment_type'].map({1: 'Thẻ tín dụng', 2: 'Tiền mặt', 3: 'Miễn phí', 4: 'Tranh chấp'}).value_counts()\nprint((pt / pt.sum() * 100).round(1).to_string())\npt.plot(kind='bar', title='Hình thức thanh toán')",
   "text": "payment_type\nThẻ tín dụng    80.7\nTiền mặt        17.3\nTranh chấp       1.3\nMiễn phí         0.7",
   "imgs": [
    "/assign/eda-taxi/3_1_8-1.png"
   ]
  },
  "3.1.9": {
   "code": "import zipfile\nzipfile.ZipFile('/tmp/asg/taxi/taxi_zones.zip').extractall('/tmp/asg/taxi/zones')\nzones = gpd.read_file(glob.glob('/tmp/asg/taxi/zones/**/taxi_zones.shp', recursive=True)[0])\nprint(zones.head(3).drop(columns='geometry').to_string())\nzones.plot(figsize=(6, 6))",
   "text": "   OBJECTID  Shape_Leng  Shape_Area                     zone  LocationID borough\n0         1    0.116357    0.000782           Newark Airport           1     EWR\n1         2    0.433470    0.004866              Jamaica Bay           2  Queens\n2         3    0.084341    0.000314  Allerton/Pelham Gardens           3   Bronx",
   "imgs": [
    "/assign/eda-taxi/3_1_9-1.png"
   ]
  },
  "3.1.10": {
   "code": "merged = df.merge(zones[['LocationID', 'zone', 'borough']], left_on='PULocationID', right_on='LocationID', how='left')\nprint(merged[['PULocationID', 'zone', 'borough']].head())",
   "text": "   PULocationID             zone    borough\n0            68     East Chelsea  Manhattan\n1           170      Murray Hill  Manhattan\n2            79     East Village  Manhattan\n3           148  Lower East Side  Manhattan\n4           161   Midtown Center  Manhattan",
   "imgs": []
  },
  "3.1.11": {
   "code": "trips_per_zone = merged.groupby('PULocationID').size().rename('trips')\nprint(trips_per_zone.sort_values(ascending=False).head(8))",
   "text": "PULocationID\n132    99363\n237    87916\n161    86783\n236    77704\n162    66773\n138    64839\n186    64517\n230    62028\nName: trips, dtype: int64",
   "imgs": []
  },
  "3.1.12": {
   "code": "zones_with_trips = zones.merge(trips_per_zone, left_on='LocationID', right_index=True, how='left').fillna({'trips': 0})\nprint(zones_with_trips[['zone', 'borough', 'trips']].sort_values('trips', ascending=False).head(8).to_string(index=False))",
   "text": "                        zone   borough   trips\n                 JFK Airport    Queens 99363.0\n       Upper East Side South Manhattan 87916.0\n              Midtown Center Manhattan 86783.0\n       Upper East Side North Manhattan 77704.0\n                Midtown East Manhattan 66773.0\n           LaGuardia Airport    Queens 64839.0\nPenn Station/Madison Sq West Manhattan 64517.0\n   Times Sq/Theatre District Manhattan 62028.0",
   "imgs": []
  },
  "3.1.13": {
   "code": "fig, ax = plt.subplots(1, 1, figsize=(10, 10))\nzones_with_trips.plot(column='trips', ax=ax, legend=True, cmap='YlOrRd', legend_kwds={'label': 'Số chuyến đón (mẫu)', 'orientation': 'horizontal'})\nax.set_axis_off()",
   "text": "",
   "imgs": [
    "/assign/eda-taxi/3_1_13-1.png"
   ]
  },
  "3.2.1": {
   "code": "d = nz[nz['trip_distance'] > 0].copy()\nd['speed'] = d['trip_distance'] / (d['trip_duration'] / 60)\nd = d[d['speed'] < 80]\nsp = d.groupby('pickup_hour')['speed'].mean()\nsp.plot(marker='o', title='Tốc độ trung bình (dặm/giờ) theo giờ')\nroute = d.groupby(['PULocationID', 'DOLocationID', 'pickup_hour']).agg(n=('speed', 'size'), speed=('speed', 'mean')).reset_index()\nroute = route[route['n'] >= 30].sort_values('speed').head(8)\nprint(sp.round(1).to_string())\nprint(route.round(1).to_string(index=False))",
   "text": "pickup_hour\n0     14.7\n1     14.6\n2     14.7\n3     15.6\n4     18.6\n5     20.5\n6     16.9\n7     13.3\n8     11.3\n9     11.0\n10    10.6\n11    10.1\n12    10.0\n13    10.0\n14     9.8\n15     9.5\n16     9.7\n17     9.6\n18    10.1\n19    11.2\n20    12.3\n21    12.8\n22    13.2\n23    14.3\n PULocationID  DOLocationID  pickup_hour   n  speed\n          186           186           11  30    3.7\n          186           186           13  38    3.7\n          100           100           19  30    3.7\n          186           100           16  71    3.8\n          186           186           15  32    3.8\n          186           100           13  91    3.9\n          186           230           13 312    3.9\n          230           230           17 145    3.9",
   "imgs": [
    "/assign/eda-taxi/3_2_1-1.png"
   ]
  },
  "3.2.2": {
   "code": "h = df['pickup_hour'].value_counts().sort_index()\nh.plot(kind='bar', title='Số chuyến mỗi giờ (mẫu)')\nprint('giờ đông nhất:', h.idxmax(), 'với', h.max(), 'chuyến trong mẫu')",
   "text": "giờ đông nhất: 18 với 130555 chuyến trong mẫu",
   "imgs": [
    "/assign/eda-taxi/3_2_2-1.png"
   ]
  },
  "3.2.3": {
   "code": "top5 = (h.sort_values(ascending=False).head(5) / sample_fraction).round(0)\nprint(top5.astype(int).to_string())",
   "text": "pickup_hour\n18    2611100\n17    2497340\n19    2339440\n16    2307620\n15    2306240",
   "imgs": []
  },
  "3.2.4": {
   "code": "df['is_weekend'] = df['tpep_pickup_datetime'].dt.dayofweek >= 5\nt = df.groupby(['pickup_hour', 'is_weekend']).size().unstack()\nt.columns = ['Ngày thường', 'Cuối tuần']\n(t / t.sum()).plot(title='Tỷ trọng chuyến theo giờ: ngày thường và cuối tuần')",
   "text": "",
   "imgs": [
    "/assign/eda-taxi/3_2_4-1.png"
   ]
  },
  "3.2.5": {
   "code": "pu = merged.groupby('PULocationID').size().sort_values(ascending=False).head(10)\ndo = df.groupby('DOLocationID').size().sort_values(ascending=False).head(10)\nnames = zones.set_index('LocationID')['zone']\nprint('Top 10 điểm đón:'); print(pd.DataFrame({'zone': names[pu.index].values, 'trips': pu.values}).to_string(index=False))\nprint('Top 10 điểm trả:'); print(pd.DataFrame({'zone': names[do.index].values, 'trips': do.values}).to_string(index=False))\nhp = df[df['PULocationID'].isin(pu.index[:5])].groupby(['pickup_hour', 'PULocationID']).size().unstack()\nhp.columns = [names.get(c, c) for c in hp.columns]\nhp.plot(figsize=(11, 4), title='Giờ đón tại 5 khu đông nhất')",
   "text": "Top 10 điểm đón:\n                        zone  trips\n                 JFK Airport  99363\n       Upper East Side South  87916\n              Midtown Center  86783\n       Upper East Side North  77704\n                Midtown East  66773\n           LaGuardia Airport  64839\nPenn Station/Madison Sq West  64517\n   Times Sq/Theatre District  62028\n         Lincoln Square East  60845\n                 Murray Hill  55076\nTop 10 điểm trả:\n                     zone  trips\n    Upper East Side North  81437\n    Upper East Side South  78448\n           Midtown Center  72124\nTimes Sq/Theatre District  57357\n              Murray Hill  54985\n             Midtown East  52590\n      Lincoln Square East  51779\n    Upper West Side South  51481\n          Lenox Hill West  48877\n             East Chelsea  46791",
   "imgs": [
    "/assign/eda-taxi/3_2_5-1.png"
   ]
  },
  "3.2.6": {
   "code": "pc = df.groupby('PULocationID').size(); dc = df.groupby('DOLocationID').size()\nr = (pc / dc).dropna(); r = r[(pc.reindex(r.index) >= 50) & (dc.reindex(r.index) >= 50)]\ntab = pd.DataFrame({'zone': names.reindex(r.index).fillna('Unknown').values, 'pickup/dropoff': r.values}, index=r.index)\nprint('Cao nhất:'); print(tab.sort_values('pickup/dropoff', ascending=False).head(10).round(2).to_string(index=False))\nprint('Thấp nhất:'); print(tab.sort_values('pickup/dropoff').head(10).round(2).to_string(index=False))",
   "text": "Cao nhất:\n                        zone  pickup/dropoff\n               East Elmhurst            7.83\n                 JFK Airport            4.48\n           LaGuardia Airport            2.88\nPenn Station/Madison Sq West            1.57\n     Greenwich Village South            1.39\n                Central Park            1.35\n                West Village            1.32\n                Midtown East            1.27\n            Garment District            1.21\n              Midtown Center            1.20\nThấp nhất:\n                    zone  pickup/dropoff\n          Newark Airport            0.05\n              Greenpoint            0.06\n                Flushing            0.06\nWashington Heights North            0.06\n            Clinton Hill            0.07\n          Bushwick South            0.07\n                  Inwood            0.07\n        Roosevelt Island            0.08\n      South Williamsburg            0.08\n          Bushwick North            0.08",
   "imgs": []
  },
  "3.2.7": {
   "code": "night = df[(df['pickup_hour'] >= 23) | (df['pickup_hour'] < 5)]\nnpu = night.groupby('PULocationID').size().sort_values(ascending=False).head(10)\nndo = night.groupby('DOLocationID').size().sort_values(ascending=False).head(10)\nprint('Đón đêm:'); print(pd.DataFrame({'zone': names[npu.index].values, 'trips': npu.values}).to_string(index=False))\nprint('Trả đêm:'); print(pd.DataFrame({'zone': names[ndo.index].values, 'trips': ndo.values}).to_string(index=False))",
   "text": "Đón đêm:\n                        zone  trips\n                East Village  15416\n                 JFK Airport  13870\n                West Village  12498\n                Clinton East   9721\n             Lower East Side   9665\n     Greenwich Village South   9016\n   Times Sq/Theatre District   7929\nPenn Station/Madison Sq West   6355\n           LaGuardia Airport   6090\n               Midtown South   6046\nTrả đêm:\n                     zone  trips\n             East Village   8360\n             Clinton East   6813\n              Murray Hill   6152\n             East Chelsea   5667\n                 Gramercy   5517\n          Lenox Hill West   5129\n             West Village   4995\n           Yorkville West   4970\nTimes Sq/Theatre District   4426\n          Lower East Side   4399",
   "imgs": []
  },
  "3.2.8": {
   "code": "nh = (nz['pickup_hour'] >= 23) | (nz['pickup_hour'] < 5)\nshare = nz.groupby(nh)['total_amount'].sum(); share = share / share.sum() * 100\nprint('Doanh thu ban ngày:', round(share[False], 1), '% | ban đêm (23h-5h):', round(share[True], 1), '%')\nshare.rename({False: 'Ban ngày', True: 'Ban đêm'}).plot(kind='bar', title='Tỷ trọng doanh thu (%)')",
   "text": "Doanh thu ban ngày: 88.6 % | ban đêm (23h-5h): 11.4 %",
   "imgs": [
    "/assign/eda-taxi/3_2_8-1.png"
   ]
  },
  "3.2.9": {
   "code": "d = nz[nz['trip_distance'] > 0.5].copy()\nd['fare_per_mile'] = d['fare_amount'] / d['trip_distance']\nd = d[d['fare_per_mile'] < 100]\ng = d.groupby('passenger_count')['fare_per_mile'].mean()\nout = pd.DataFrame({'fare/mile': g, 'fare/mile/người': g / g.index})\nprint(out.round(2).to_string())\nout['fare/mile/người'].plot(kind='bar', title='Giá mỗi dặm mỗi hành khách')",
   "text": "                 fare/mile  fare/mile/người\npassenger_count                            \n1.0                   7.49             7.49\n2.0                   7.33             3.66\n3.0                   7.47             2.49\n4.0                   7.48             1.87\n5.0                   7.36             1.47\n6.0                   7.47             1.24",
   "imgs": [
    "/assign/eda-taxi/3_2_9-1.png"
   ]
  },
  "3.2.10": {
   "code": "fig, ax = plt.subplots(1, 2, figsize=(14, 4))\nd.groupby('pickup_hour')['fare_per_mile'].mean().plot(marker='o', ax=ax[0], title='Giá/dặm theo giờ')\nd.groupby('pickup_day')['fare_per_mile'].mean().reindex(order).plot(kind='bar', ax=ax[1], title='Giá/dặm theo thứ')\nprint(d.groupby('pickup_hour')['fare_per_mile'].mean().round(2).to_string())",
   "text": "pickup_hour\n0     6.30\n1     6.24\n2     6.16\n3     6.02\n4     5.75\n5     5.66\n6     6.02\n7     6.71\n8     7.41\n9     7.68\n10    7.80\n11    8.06\n12    8.16\n13    8.07\n14    8.04\n15    8.07\n16    8.00\n17    8.01\n18    7.83\n19    7.45\n20    6.97\n21    6.79\n22    6.64\n23    6.41",
   "imgs": [
    "/assign/eda-taxi/3_2_10-1.png"
   ]
  },
  "3.2.11": {
   "code": "v = d.groupby(['pickup_hour', 'VendorID'])['fare_per_mile'].mean().unstack()\nv.plot(title='Giá/dặm theo giờ của từng hãng (VendorID)')\nprint(d.groupby('VendorID')['fare_per_mile'].mean().round(2))",
   "text": "VendorID\n1    7.42\n2    7.47\nName: fare_per_mile, dtype: float64",
   "imgs": [
    "/assign/eda-taxi/3_2_11-1.png"
   ]
  },
  "3.2.12": {
   "code": "d['tier'] = pd.cut(d['trip_distance'], [0, 2, 5, 1000], labels=['đến 2 dặm', '2 đến 5 dặm', 'trên 5 dặm'])\nt = d.groupby(['tier', 'VendorID'], observed=True)['fare_per_mile'].mean().unstack()\nprint(t.round(2).to_string())\nt.plot(kind='bar', title='Giá/dặm theo cự ly và hãng')",
   "text": "VendorID        1     2\ntier                   \nđến 2 dặm    8.85  9.02\n2 đến 5 dặm  6.39  6.55\ntrên 5 dặm   4.42  4.50",
   "imgs": [
    "/assign/eda-taxi/3_2_12-1.png"
   ]
  },
  "3.2.13": {
   "code": "x = nz[(nz['payment_type'] == 1) & (nz['fare_amount'] > 0)].copy()\nx['tip_pct'] = x['tip_amount'] / x['fare_amount'] * 100\nx = x[x['tip_pct'] < 100]\nfig, ax = plt.subplots(1, 3, figsize=(17, 4))\nx.groupby(pd.cut(x['trip_distance'], [0, 1, 2, 5, 10, 100]), observed=True)['tip_pct'].mean().plot(kind='bar', ax=ax[0], title='Tip % theo cự ly')\nx.groupby('passenger_count')['tip_pct'].mean().plot(kind='bar', ax=ax[1], title='Tip % theo số khách')\nx.groupby('pickup_hour')['tip_pct'].mean().plot(marker='o', ax=ax[2], title='Tip % theo giờ')\nprint('tip trung bình (khách trả thẻ):', round(x['tip_pct'].mean(), 1), '%')",
   "text": "tip trung bình (khách trả thẻ): 24.6 %",
   "imgs": [
    "/assign/eda-taxi/3_2_13-1.png"
   ]
  },
  "3.2.14": {
   "code": "pv = df.pivot_table(index='pickup_hour', columns='pickup_day', values='passenger_count', aggfunc='mean')[order]\nsns.heatmap(pv, cmap='YlGnBu', annot=False)\nprint(pv.round(2).iloc[[0, 6, 12, 18, 23]].to_string())",
   "text": "pickup_day   Monday  Tuesday  Wednesday  Thursday  Friday  Saturday  Sunday\npickup_hour                                                                \n0              1.41     1.35       1.34      1.36    1.39      1.45    1.48\n6              1.26     1.26       1.21      1.24    1.24      1.31    1.36\n12             1.37     1.33       1.33      1.34    1.37      1.45    1.47\n18             1.35     1.33       1.33      1.35    1.42      1.51    1.46\n23             1.38     1.38       1.37      1.38    1.47      1.53    1.40",
   "imgs": [
    "/assign/eda-taxi/3_2_14-1.png"
   ]
  },
  "3.2.15": {
   "code": "pz = df.groupby('PULocationID').agg(avg=('passenger_count', 'mean'), n=('passenger_count', 'size'))\npz = pz[pz['n'] >= 100]\nprint(pz.sort_values('avg', ascending=False).head(5).assign(zone=lambda t: names.reindex(t.index).fillna('Unknown').values).round(2).to_string())\nzz = zones.merge(pz['avg'], left_on='LocationID', right_index=True, how='left')\nfig, ax = plt.subplots(figsize=(8, 8)); zz.plot(column='avg', ax=ax, legend=True, cmap='PuBu', missing_kwds={'color': '#eeeeee'}); ax.set_axis_off()",
   "text": "               avg     n                zone\nPULocationID                                \n12            1.82   837        Battery Park\n195           1.71   196            Red Hook\n66            1.69   481  DUMBO/Vinegar Hill\n1             1.69   284      Newark Airport\n265           1.56  1018             Unknown",
   "imgs": [
    "/assign/eda-taxi/3_2_15-1.png"
   ]
  },
  "3.2.16": {
   "code": "ex = {'extra': df['extra'] > 0, 'congestion_surcharge': df['congestion_surcharge'] > 0, 'airport_fee': df['airport_fee'] > 0, 'tolls': df['tolls_amount'] > 0}\nrate = pd.Series({k: v.mean() * 100 for k, v in ex.items()})\nprint(rate.round(1).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\nrate.plot(kind='bar', ax=ax[0], title='% chuyến có phụ phí')\ndf.groupby('pickup_hour').apply(lambda t: (t['extra'] > 0).mean() * 100).plot(ax=ax[1], title='% chuyến có phụ phí extra theo giờ')",
   "text": "extra                   61.6\ncongestion_surcharge    92.2\nairport_fee              8.9\ntolls                    8.2",
   "imgs": [
    "/assign/eda-taxi/3_2_16-1.png"
   ]
  }
 }
};
