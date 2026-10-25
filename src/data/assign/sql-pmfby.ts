import type { Assignment } from "@/data/assign/types";

export const asg: Assignment = {
 "id": "sql-pmfby",
 "course": "C2 · SQL",
 "title": [
  "Bài tập: SQL với dữ liệu bảo hiểm cây trồng PMFBY",
  "Assignment: SQL on PMFBY crop insurance data"
 ],
 "file": "SQL_Assg_Farmers_Insurance_Questions_Starter.sql",
 "story": [
  "Starter gốc là dữ liệu bảo hiểm nông nghiệp PMFBY (1.870 dòng, 27 bang). Trong Lotus Spa: bảng là sổ booking của chuỗi, «bang» = chi nhánh, «huyện» = phòng/khu vực, «nông dân được bảo hiểm» = số khách. Mỗi câu hỏi có lời giải, kết quả thật và lưu ý đơn vị (số tiền lưu theo lakh, 1 crore = 100 lakh). Kết quả chạy thử trên SQLite với cùng dữ liệu; câu lệnh dùng cú pháp chung với MySQL.",
  "The original starter is PMFBY agricultural insurance data (1,870 rows, 27 states). In Lotus Spa: the table is the chain's booking log, “state” = branch, “district” = room/area, “farmers insured” = customers. Each question has a solution, a real result and a unit note (amounts are stored in lakh, 1 crore = 100 lakh). Results were run on SQLite with the same data; statements use syntax shared with MySQL."
 ],
 "concepts": [
  "d-7cf7bfeb24eb"
 ],
 "cells": [
  {
   "t": "code",
   "s": "use ndap;"
  },
  {
   "t": "code",
   "s": "\n\n-- ----------------------------------------------------------------------------------------------\n-- SECTION 1. \n-- SELECT Queries [5 Marks]\n\n-- \tQ1.\tRetrieve the names of all states (srcStateName) from the dataset.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n-- <write your answers in the empty spaces given, the length of solution queries (and the solution writing space) can vary>\n\n\n###",
   "ref": "Q1"
  },
  {
   "t": "code",
   "s": "\n-- \tQ2.\tRetrieve the total number of farmers covered (TotalFarmersCovered) \n-- \t\tand the sum insured (SumInsured) for each state (srcStateName), ordered by TotalFarmersCovered in descending order.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n-- ###",
   "ref": "Q2"
  },
  {
   "t": "code",
   "s": "\n-- --------------------------------------------------------------------------------------\n-- SECTION 2. \n-- Filtering Data (WHERE) [15 Marks]\n\n-- \tQ3.\tRetrieve all records where Year is '2020'.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n-- ###",
   "ref": "Q3"
  },
  {
   "t": "code",
   "s": "\n-- \tQ4.\tRetrieve all rows where the TotalPopulationRural is greater than 1 million and the srcStateName is 'HIMACHAL PRADESH'.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n-- ###",
   "ref": "Q4"
  },
  {
   "t": "code",
   "s": "\n-- \tQ5.\tRetrieve the srcStateName, srcDistrictName, and the sum of FarmersPremiumAmount for each district in the year 2018, \n-- \t\tand display the results ordered by FarmersPremiumAmount in ascending order.\n-- ###\n-- \t[5 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n-- ###",
   "ref": "Q5"
  },
  {
   "t": "code",
   "s": "\n-- \tQ6.\tRetrieve the total number of farmers covered (TotalFarmersCovered) and the sum of premiums (GrossPremiumAmountToBePaid) for each state (srcStateName) \n-- \t\twhere the insured land area (InsuredLandArea) is greater than 5.0 and the Year is 2018.\n-- ###\n-- \t[5 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\t  \n-- ###",
   "ref": "Q6"
  },
  {
   "t": "code",
   "s": "-- ------------------------------------------------------------------------------------------------\n\n-- SECTION 3.\n-- Aggregation (GROUP BY) [10 marks]\n\n-- \tQ7. \tCalculate the average insured land area (InsuredLandArea) for each year (srcYear).\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q7"
  },
  {
   "t": "code",
   "s": "\n-- \tQ8. \tCalculate the total number of farmers covered (TotalFarmersCovered) for each district (srcDistrictName) where Insurance units is greater than 0.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q8"
  },
  {
   "t": "code",
   "s": "\n-- \tQ9.\tFor each state (srcStateName), calculate the total premium amounts (FarmersPremiumAmount, StatePremiumAmount, GOVPremiumAmount) \n-- \t\tand the total number of farmers covered (TotalFarmersCovered). Only include records where the sum insured (SumInsured) is greater than 500,000 (remember to check for scaling).\n-- ###\n-- \t[4 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q9"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n-- SECTION 4.\n-- Sorting Data (ORDER BY) [10 Marks]\n\n-- \tQ10.\tRetrieve the top 5 districts (srcDistrictName) with the highest TotalPopulation in the year 2020.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q10"
  },
  {
   "t": "code",
   "s": "\n-- \tQ11.\tRetrieve the srcStateName, srcDistrictName, and SumInsured for the 10 districts with the lowest non-zero FarmersPremiumAmount, \n-- \t\tordered by insured sum and then the FarmersPremiumAmount.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n###",
   "ref": "Q11"
  },
  {
   "t": "code",
   "s": "\n-- \tQ12. \tRetrieve the top 3 states (srcStateName) along with the year (srcYear) where the ratio of insured farmers (TotalFarmersCovered) to the total population (TotalPopulation) is highest. \n-- \t\tSort the results by the ratio in descending order.\n-- ###\n-- \t[5 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q12"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n\n-- SECTION 5.\n-- String Functions [6 Marks]\n\n-- \tQ13. \tCreate StateShortName by retrieving the first 3 characters of the srcStateName for each unique state.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q13"
  },
  {
   "t": "code",
   "s": "\n-- \tQ14. \tRetrieve the srcDistrictName where the district name starts with 'B'.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q14"
  },
  {
   "t": "code",
   "s": "\n-- \tQ15. \tRetrieve the srcStateName and srcDistrictName where the district name contains the word 'pur' at the end.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n-- ###",
   "ref": "Q15"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n\n-- SECTION 6.\n-- Joins [14 Marks]\n\n-- \tQ16. \tPerform an INNER JOIN between the srcStateName and srcDistrictName columns to retrieve the aggregated FarmersPremiumAmount for districts where the district’s Insurance units for an individual year are greater than 10.\n-- ###\n-- \t[4 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q16"
  },
  {
   "t": "code",
   "s": "\n-- \tQ17.\tWrite a query that retrieves srcStateName, srcDistrictName, Year, TotalPopulation for each district and the the highest recorded FarmersPremiumAmount for that district over all available years\n-- \t\tReturn only those districts where the highest FarmersPremiumAmount exceeds 20 crores.\n-- ###\n-- \t[5 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q17"
  },
  {
   "t": "code",
   "s": "\n-- \tQ18.\tPerform a LEFT JOIN to combine the total population statistics with the farmers’ data (TotalFarmersCovered, SumInsured) for each district and state. \n-- \t\tReturn the total premium amount (FarmersPremiumAmount) and the average population count for each district aggregated over the years, where the total FarmersPremiumAmount is greater than 100 crores.\n-- \t\tSort the results by total farmers' premium amount, highest first.\n-- ###\n-- \t[5 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q18"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n\n-- SECTION 7.\n-- Subqueries [10 Marks]\n\n-- \tQ19.\tWrite a query to find the districts (srcDistrictName) where the TotalFarmersCovered is greater than the average TotalFarmersCovered across all records.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q19"
  },
  {
   "t": "code",
   "s": "\n-- \tQ20.\tWrite a query to find the srcStateName where the SumInsured is higher than the SumInsured of the district with the highest FarmersPremiumAmount.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q20"
  },
  {
   "t": "code",
   "s": "\n-- \tQ21.\tWrite a query to find the srcDistrictName where the FarmersPremiumAmount is higher than the average FarmersPremiumAmount of the state that has the highest TotalPopulation.\n-- ###\n-- \t[5 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q21"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n\n-- SECTION 8.\n-- Advanced SQL Functions (Window Functions) [10 Marks]\n\n-- \tQ22.\tUse the ROW_NUMBER() function to assign a row number to each record in the dataset ordered by total farmers covered in descending order.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q22"
  },
  {
   "t": "code",
   "s": "\n-- \tQ23.\tUse the RANK() function to rank the districts (srcDistrictName) based on the SumInsured (descending) and partition by alphabetical srcStateName.\n-- ###\n-- \t[3 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q23"
  },
  {
   "t": "code",
   "s": "\n-- \tQ24.\tUse the SUM() window function to calculate a cumulative sum of FarmersPremiumAmount for each district (srcDistrictName), ordered ascending by the srcYear, partitioned by srcStateName.\n-- ###\n-- \t[4 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q24"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n\n-- SECTION 9.\n-- Data Integrity (Constraints, Foreign Keys) [4 Marks]\n\n-- \tQ25.\tCreate a table 'districts' with DistrictCode as the primary key and columns for DistrictName and StateCode. \n-- \t\tCreate another table 'states' with StateCode as primary key and column for StateName.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q25"
  },
  {
   "t": "code",
   "s": "\n-- \tQ26.\tAdd a foreign key constraint to the districts table that references the StateCode column from a states table.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q26"
  },
  {
   "t": "code",
   "s": "\n-- -------------------------------------------------------------------------------------------------\n\n-- SECTION 10.\n-- UPDATE and DELETE [6 Marks]\n\n-- \tQ27.\tUpdate the FarmersPremiumAmount to 500.0 for the record where rowID is 1.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n\n-- ###",
   "ref": "Q27"
  },
  {
   "t": "code",
   "s": "\n-- \tQ28.\tUpdate the Year to '2021' for all records where srcStateName is 'HIMACHAL PRADESH'.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q28"
  },
  {
   "t": "code",
   "s": "\n-- \tQ29.\tDelete all records where the TotalFarmersCovered is less than 10000 and Year is 2020.\n-- ###\n-- \t[2 Marks]\n-- ###\n-- TYPE YOUR CODE BELOW >\n\n\n\n-- ###",
   "ref": "Q29"
  }
 ],
 "guides": {
  "Q1": {
   "vi": {
    "think": "Lấy danh sách tên các bang, mỗi bang một lần.",
    "steps": [
     "SELECT srcStateName FROM farmersinsurancedata.",
     "Thêm DISTINCT để bỏ trùng (mỗi bang xuất hiện nhiều lần vì nhiều huyện, nhiều năm).",
     "Dữ liệu có 27 bang."
    ],
    "code": "SELECT DISTINCT srcStateName FROM farmersinsurancedata ORDER BY srcStateName;",
    "lotus": "Giống liệt kê tên các chi nhánh của Lotus Spa từ sổ booking: mỗi chi nhánh xuất hiện trăm lần, bạn chỉ muốn ba tên.",
    "trap": "Quên DISTINCT sẽ ra hơn 1.800 dòng, mỗi dòng một bản ghi."
   },
   "en": {
    "think": "List the names of all states, once each.",
    "steps": [
     "SELECT srcStateName FROM farmersinsurancedata.",
     "Add DISTINCT to remove repeats (each state appears many times across districts and years).",
     "The data has 27 states."
    ],
    "code": "SELECT DISTINCT srcStateName FROM farmersinsurancedata ORDER BY srcStateName;",
    "lotus": "Like listing Lotus Spa's branch names from the booking log: each appears a hundred times, you want three names.",
    "trap": "Forgetting DISTINCT returns over 1,800 rows, one per record."
   }
  },
  "Q2": {
   "vi": {
    "think": "Tổng số nông dân được bảo hiểm và tổng số tiền bảo hiểm theo từng bang, xếp từ nhiều đến ít nông dân.",
    "steps": [
     "GROUP BY srcStateName.",
     "SUM(TotalFarmersCovered) và SUM(SumInsured).",
     "ORDER BY TotalFarmersCovered DESC."
    ],
    "code": "SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(SumInsured) AS SumInsured\nFROM farmersinsurancedata\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Như cộng số khách và doanh thu của từng chi nhánh rồi xếp chi nhánh đông nhất lên đầu.",
    "trap": "Dùng cột SumInsured mà quên đơn vị: dữ liệu lưu theo lakh (100.000 INR), không phải rupee."
   },
   "en": {
    "think": "Total farmers covered and total sum insured per state, ordered from most to fewest farmers.",
    "steps": [
     "GROUP BY srcStateName.",
     "SUM(TotalFarmersCovered) and SUM(SumInsured).",
     "ORDER BY TotalFarmersCovered DESC."
    ],
    "code": "SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(SumInsured) AS SumInsured\nFROM farmersinsurancedata\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Like adding up customers and revenue per branch and listing the busiest first.",
    "trap": "Using SumInsured while forgetting the unit: data is stored in lakh (100,000 INR), not rupees."
   }
  },
  "Q3": {
   "vi": {
    "think": "Lọc các bản ghi của năm 2020.",
    "steps": [
     "WHERE srcYear = 2020.",
     "Cột Year_ là chữ dài «Calendar Year (Jan - Dec), 2020» nên dùng srcYear (số) cho dễ.",
     "Kết quả: 429 dòng."
    ],
    "code": "SELECT rowID, srcStateName, srcDistrictName, TotalFarmersCovered FROM farmersinsurancedata WHERE srcYear = 2020 LIMIT 10;\n-- đếm: SELECT COUNT(*) FROM farmersinsurancedata WHERE srcYear = 2020;",
    "lotus": "Như lọc sổ booking riêng của tháng 11.",
    "trap": "So sánh Year_ = '2020' sẽ không ra dòng nào vì Year_ là chữ dài."
   },
   "en": {
    "think": "Retrieve the records of year 2020.",
    "steps": [
     "WHERE srcYear = 2020.",
     "Year_ is the long text “Calendar Year (Jan - Dec), 2020” so use srcYear (number) for simplicity.",
     "Result: 429 rows."
    ],
    "code": "SELECT rowID, srcStateName, srcDistrictName, TotalFarmersCovered FROM farmersinsurancedata WHERE srcYear = 2020 LIMIT 10;\n-- đếm: SELECT COUNT(*) FROM farmersinsurancedata WHERE srcYear = 2020;",
    "lotus": "Like filtering the booking log for November only.",
    "trap": "Comparing Year_ = '2020' returns nothing because Year_ is the long text."
   }
  },
  "Q4": {
   "vi": {
    "think": "Lọc các dòng ở Himachal Pradesh có dân số nông thôn trên 1 triệu.",
    "steps": [
     "WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH'.",
     "Kết quả: 4 dòng, đều là huyện Kangra (1.423.794 dân nông thôn) ở bốn năm."
    ],
    "code": "SELECT rowID, srcStateName, srcDistrictName, TotalPopulationRural\nFROM farmersinsurancedata\nWHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH';",
    "lotus": "Hai điều kiện cùng đúng mới giữ dòng, như chỉ lấy khách vừa ở Quận 3 vừa dùng gói VIP.",
    "trap": "Chữ hoa chữ thường: tên bang trong dữ liệu viết hoa toàn bộ."
   },
   "en": {
    "think": "Filter rows in Himachal Pradesh with rural population above 1 million.",
    "steps": [
     "WHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH'.",
     "Result: 4 rows, all Kangra district (1,423,794 rural population) across four years."
    ],
    "code": "SELECT rowID, srcStateName, srcDistrictName, TotalPopulationRural\nFROM farmersinsurancedata\nWHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH';",
    "lotus": "Both conditions must hold to keep a row, like only taking customers in District 3 who also use the VIP package.",
    "trap": "Case: state names in the data are fully uppercase."
   }
  },
  "Q5": {
   "vi": {
    "think": "Tổng phí bảo hiểm nông dân phải đóng theo từng huyện năm 2018, xếp tăng dần.",
    "steps": [
     "WHERE srcYear = 2018.",
     "GROUP BY srcStateName, srcDistrictName.",
     "SUM(FarmersPremiumAmount) rồi ORDER BY tăng dần."
    ],
    "code": "SELECT srcStateName, srcDistrictName, SUM(FarmersPremiumAmount) AS FarmersPremiumAmount\nFROM farmersinsurancedata\nWHERE srcYear = 2018\nGROUP BY srcStateName, srcDistrictName\nORDER BY FarmersPremiumAmount ASC;",
    "lotus": "Như doanh thu từng chi nhánh trong một tháng, xếp từ thấp lên cao.",
    "trap": "Dòng đầu đều là 0: nhiều huyện Karnataka chưa có phí, nên xem trước khi kết luận «huyện này thấp nhất»."
   },
   "en": {
    "think": "Total premium farmers paid per district in 2018, ordered ascending.",
    "steps": [
     "WHERE srcYear = 2018.",
     "GROUP BY srcStateName, srcDistrictName.",
     "SUM(FarmersPremiumAmount) then ORDER BY ascending."
    ],
    "code": "SELECT srcStateName, srcDistrictName, SUM(FarmersPremiumAmount) AS FarmersPremiumAmount\nFROM farmersinsurancedata\nWHERE srcYear = 2018\nGROUP BY srcStateName, srcDistrictName\nORDER BY FarmersPremiumAmount ASC;",
    "lotus": "Like branch revenue for one month, sorted low to high.",
    "trap": "The first rows are all 0: many Karnataka districts have no premium yet, so check before concluding “this district is lowest”."
   }
  },
  "Q6": {
   "vi": {
    "think": "Số nông dân và tổng phí gộp theo bang, chỉ các bản ghi có diện tích bảo hiểm trên 5,0 trong năm 2018.",
    "steps": [
     "WHERE InsuredLandArea > 5.0 AND srcYear = 2018.",
     "GROUP BY srcStateName.",
     "SUM(TotalFarmersCovered), SUM(GrossPremiumAmountToBePaid)."
    ],
    "code": "SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(GrossPremiumAmountToBePaid) AS GrossPremium\nFROM farmersinsurancedata\nWHERE InsuredLandArea > 5.0 AND srcYear = 2018\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Lọc trước rồi mới cộng theo nhóm: WHERE chạy trước GROUP BY.",
    "trap": "Đặt điều kiện trên tổng (SUM) vào WHERE thì lỗi: điều kiện trên tổng phải dùng HAVING."
   },
   "en": {
    "think": "Farmers and gross premium by state, only records with insured land area above 5.0 in 2018.",
    "steps": [
     "WHERE InsuredLandArea > 5.0 AND srcYear = 2018.",
     "GROUP BY srcStateName.",
     "SUM(TotalFarmersCovered), SUM(GrossPremiumAmountToBePaid)."
    ],
    "code": "SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(GrossPremiumAmountToBePaid) AS GrossPremium\nFROM farmersinsurancedata\nWHERE InsuredLandArea > 5.0 AND srcYear = 2018\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Filter first, then sum per group: WHERE runs before GROUP BY.",
    "trap": "Putting a condition on a sum (SUM) in WHERE errors: conditions on sums need HAVING."
   }
  },
  "Q7": {
   "vi": {
    "think": "Diện tích bảo hiểm trung bình theo từng năm.",
    "steps": [
     "GROUP BY srcYear.",
     "AVG(InsuredLandArea)."
    ],
    "code": "SELECT srcYear, AVG(InsuredLandArea) AS AvgInsuredLandArea\nFROM farmersinsurancedata\nGROUP BY srcYear\nORDER BY srcYear;",
    "lotus": "Như số khách trung bình mỗi ngày theo từng tháng.",
    "trap": "Đơn vị diện tích là nghìn ha (hệ số 1.000), nên 37,9 nghĩa là khoảng 37.900 ha mỗi bản ghi."
   },
   "en": {
    "think": "Average insured land area per year.",
    "steps": [
     "GROUP BY srcYear.",
     "AVG(InsuredLandArea)."
    ],
    "code": "SELECT srcYear, AVG(InsuredLandArea) AS AvgInsuredLandArea\nFROM farmersinsurancedata\nGROUP BY srcYear\nORDER BY srcYear;",
    "lotus": "Like average customers per day for each month.",
    "trap": "Area unit is thousand ha (factor 1,000), so 37.9 means about 37,900 ha per record."
   }
  },
  "Q8": {
   "vi": {
    "think": "Tổng số nông dân theo huyện, chỉ các bản ghi có Insurance units lớn hơn 0.",
    "steps": [
     "WHERE InsuranceUnits > 0.",
     "GROUP BY srcDistrictName, SUM(TotalFarmersCovered).",
     "Sắp giảm dần để thấy huyện đông nhất (Bid, hơn 1,4 triệu)."
    ],
    "code": "SELECT srcDistrictName, SUM(TotalFarmersCovered) AS TotalFarmersCovered\nFROM farmersinsurancedata\nWHERE InsuranceUnits > 0\nGROUP BY srcDistrictName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Chỉ tính những ca đã thực sự diễn ra (đơn vị > 0).",
    "trap": "Nhiều huyện trùng tên ở các bang khác nhau: nên GROUP BY cả srcStateName nếu cần chính xác."
   },
   "en": {
    "think": "Total farmers per district, only records where Insurance units is above 0.",
    "steps": [
     "WHERE InsuranceUnits > 0.",
     "GROUP BY srcDistrictName, SUM(TotalFarmersCovered).",
     "Sort descending to see the biggest district (Bid, over 1.4 million)."
    ],
    "code": "SELECT srcDistrictName, SUM(TotalFarmersCovered) AS TotalFarmersCovered\nFROM farmersinsurancedata\nWHERE InsuranceUnits > 0\nGROUP BY srcDistrictName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Count only cases that really happened (units > 0).",
    "trap": "Several districts share a name across states: GROUP BY srcStateName too if you need exactness."
   }
  },
  "Q9": {
   "vi": {
    "think": "Tổng phí theo bang, chỉ bản ghi có SumInsured trên 500.000. Nhớ hệ số đơn vị.",
    "steps": [
     "Dữ liệu lưu theo lakh: 500.000 INR = 5 lakh, nên dùng SumInsured > 5.",
     "GROUP BY srcStateName.",
     "SUM ba loại phí và SUM nông dân."
    ],
    "code": "SELECT srcStateName,\n       SUM(FarmersPremiumAmount) AS FarmersPremium, SUM(StatePremiumAmount) AS StatePremium, SUM(GOVPremiumAmount) AS GovPremium,\n       SUM(TotalFarmersCovered) AS TotalFarmersCovered\nFROM farmersinsurancedata\nWHERE SumInsured > 5   -- 500,000 INR = 5 lakh, dữ liệu lưu theo đơn vị lakh\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Như giá hiển thị theo nghìn đồng: 500 nghĩa là 500.000 đồng, phải đổi đơn vị trước khi so.",
    "trap": "Viết SumInsured > 500000 mà quên hệ số 100.000 sẽ gần như loại hết dữ liệu."
   },
   "en": {
    "think": "Total premiums per state, only records with SumInsured above 500,000. Mind the scaling factor.",
    "steps": [
     "Data is stored in lakh: 500,000 INR = 5 lakh, so use SumInsured > 5.",
     "GROUP BY srcStateName.",
     "SUM the three premiums and SUM farmers."
    ],
    "code": "SELECT srcStateName,\n       SUM(FarmersPremiumAmount) AS FarmersPremium, SUM(StatePremiumAmount) AS StatePremium, SUM(GOVPremiumAmount) AS GovPremium,\n       SUM(TotalFarmersCovered) AS TotalFarmersCovered\nFROM farmersinsurancedata\nWHERE SumInsured > 5   -- 500,000 INR = 5 lakh, dữ liệu lưu theo đơn vị lakh\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
    "lotus": "Like prices shown in thousands: 500 means 500,000 dong, convert before comparing.",
    "trap": "Writing SumInsured > 500000 and forgetting the 100,000 factor drops nearly all the data."
   }
  },
  "Q10": {
   "vi": {
    "think": "Năm huyện có dân số cao nhất năm 2020.",
    "steps": [
     "WHERE srcYear = 2020.",
     "ORDER BY TotalPopulation DESC.",
     "LIMIT 5.",
     "Kết quả: Bengaluru Urban, Pune, Thane, Jaipur, Nashik."
    ],
    "code": "SELECT srcDistrictName, TotalPopulation\nFROM farmersinsurancedata\nWHERE srcYear = 2020\nORDER BY TotalPopulation DESC\nLIMIT 5;",
    "lotus": "Như năm chi nhánh có nhiều khách nhất trong tháng.",
    "trap": "Quên WHERE sẽ trộn bốn năm và cùng một huyện xuất hiện nhiều lần."
   },
   "en": {
    "think": "The five districts with the highest population in 2020.",
    "steps": [
     "WHERE srcYear = 2020.",
     "ORDER BY TotalPopulation DESC.",
     "LIMIT 5.",
     "Result: Bengaluru Urban, Pune, Thane, Jaipur, Nashik."
    ],
    "code": "SELECT srcDistrictName, TotalPopulation\nFROM farmersinsurancedata\nWHERE srcYear = 2020\nORDER BY TotalPopulation DESC\nLIMIT 5;",
    "lotus": "Like the five branches with the most customers in a month.",
    "trap": "Forgetting WHERE mixes four years and the same district appears several times."
   }
  },
  "Q11": {
   "vi": {
    "think": "Mười huyện có phí nông dân thấp nhất nhưng khác 0, sắp theo số tiền bảo hiểm rồi phí.",
    "steps": [
     "WHERE FarmersPremiumAmount > 0.",
     "ORDER BY FarmersPremiumAmount ASC, SumInsured ASC.",
     "LIMIT 10."
    ],
    "code": "SELECT srcStateName, srcDistrictName, SumInsured, FarmersPremiumAmount\nFROM farmersinsurancedata\nWHERE FarmersPremiumAmount > 0\nORDER BY FarmersPremiumAmount ASC, SumInsured ASC\nLIMIT 10;",
    "lotus": "Bỏ những gói chưa phát sinh doanh thu, rồi lấy những gói nhỏ nhất.",
    "trap": "Câu hỏi nói «sắp theo SumInsured rồi phí» nhưng ý chính là phí thấp nhất: đọc kỹ thứ tự ưu tiên."
   },
   "en": {
    "think": "Ten districts with the lowest nonzero farmers' premium, ordered by sum insured then premium.",
    "steps": [
     "WHERE FarmersPremiumAmount > 0.",
     "ORDER BY FarmersPremiumAmount ASC, SumInsured ASC.",
     "LIMIT 10."
    ],
    "code": "SELECT srcStateName, srcDistrictName, SumInsured, FarmersPremiumAmount\nFROM farmersinsurancedata\nWHERE FarmersPremiumAmount > 0\nORDER BY FarmersPremiumAmount ASC, SumInsured ASC\nLIMIT 10;",
    "lotus": "Skip packages with no revenue yet, then take the smallest.",
    "trap": "The question says “ordered by SumInsured then premium” but the main idea is lowest premium: read the order of priority carefully."
   }
  },
  "Q12": {
   "vi": {
    "think": "Ba cặp bang-năm có tỷ lệ nông dân được bảo hiểm trên dân số cao nhất.",
    "steps": [
     "Tổng nông dân chia tổng dân số theo từng bang và năm.",
     "Nhân 1.0 để chia ra số thập phân.",
     "ORDER BY ratio DESC, LIMIT 3."
    ],
    "code": "SELECT srcStateName, srcYear,\n       SUM(TotalFarmersCovered) * 1.0 / SUM(TotalPopulation) AS ratio\nFROM farmersinsurancedata\nGROUP BY srcStateName, srcYear\nORDER BY ratio DESC\nLIMIT 3;",
    "lotus": "Như tỷ lệ khách mua gói trên tổng số khách đi qua từng chi nhánh.",
    "trap": "Chia hai số nguyên trong một số hệ SQL cho kết quả nguyên (0). Nhân 1.0 trước."
   },
   "en": {
    "think": "The three state-year pairs with the highest ratio of insured farmers to population.",
    "steps": [
     "Total farmers divided by total population per state and year.",
     "Multiply by 1.0 to get a decimal.",
     "ORDER BY ratio DESC, LIMIT 3."
    ],
    "code": "SELECT srcStateName, srcYear,\n       SUM(TotalFarmersCovered) * 1.0 / SUM(TotalPopulation) AS ratio\nFROM farmersinsurancedata\nGROUP BY srcStateName, srcYear\nORDER BY ratio DESC\nLIMIT 3;",
    "lotus": "Like the share of visitors who buy a package out of all who pass each branch.",
    "trap": "Integer division in some SQL engines gives 0. Multiply by 1.0 first."
   }
  },
  "Q13": {
   "vi": {
    "think": "Tạo tên viết tắt từ 3 chữ cái đầu của mỗi bang.",
    "steps": [
     "SUBSTR (hoặc SUBSTRING) srcStateName từ vị trí 1, dài 3.",
     "DISTINCT để mỗi bang một dòng.",
     "Chú ý: ANDAMAN và ANDHRA cùng ra AND."
    ],
    "code": "SELECT DISTINCT srcStateName, SUBSTR(srcStateName, 1, 3) AS StateShortName\nFROM farmersinsurancedata\nORDER BY srcStateName;",
    "lotus": "Như tạo mã chi nhánh từ ba chữ đầu: hai tên có thể trùng mã.",
    "trap": "Hai bang cho cùng mã «AND»: mã rút gọn không đảm bảo duy nhất."
   },
   "en": {
    "think": "Build a short name from the first 3 characters of each state.",
    "steps": [
     "SUBSTR (or SUBSTRING) srcStateName from position 1, length 3.",
     "DISTINCT so each state gets one row.",
     "Note: ANDAMAN and ANDHRA both give AND."
    ],
    "code": "SELECT DISTINCT srcStateName, SUBSTR(srcStateName, 1, 3) AS StateShortName\nFROM farmersinsurancedata\nORDER BY srcStateName;",
    "lotus": "Like building branch codes from the first three letters: two names can collide.",
    "trap": "Two states share the code “AND”: a shortened code is not guaranteed unique."
   }
  },
  "Q14": {
   "vi": {
    "think": "Các huyện có tên bắt đầu bằng B.",
    "steps": [
     "WHERE srcDistrictName LIKE 'B%'.",
     "DISTINCT và ORDER BY.",
     "Kết quả: 60 huyện."
    ],
    "code": "SELECT DISTINCT srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE 'B%' ORDER BY srcDistrictName;",
    "lotus": "Như lọc khách có tên bắt đầu bằng B.",
    "trap": "LIKE 'B%' trong MySQL không phân biệt hoa thường."
   },
   "en": {
    "think": "Districts whose names start with B.",
    "steps": [
     "WHERE srcDistrictName LIKE 'B%'.",
     "DISTINCT and ORDER BY.",
     "Result: 60 districts."
    ],
    "code": "SELECT DISTINCT srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE 'B%' ORDER BY srcDistrictName;",
    "lotus": "Like filtering customers whose names start with B.",
    "trap": "LIKE 'B%' in MySQL is case-insensitive."
   }
  },
  "Q15": {
   "vi": {
    "think": "Bang và huyện mà tên huyện kết thúc bằng «pur».",
    "steps": [
     "LIKE '%pur'.",
     "DISTINCT srcStateName, srcDistrictName.",
     "Kết quả: 59 cặp (ví dụ Raipur, Bilaspur)."
    ],
    "code": "SELECT DISTINCT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE '%pur' ORDER BY srcStateName, srcDistrictName;",
    "lotus": "Dấu % đứng trước nghĩa là «bất kỳ gì rồi kết thúc bằng pur».",
    "trap": "'%pur%' sẽ khớp cả tên chứa «pur» ở giữa. Câu hỏi chỉ muốn ở cuối."
   },
   "en": {
    "think": "State and district where the district name ends with “pur”.",
    "steps": [
     "LIKE '%pur'.",
     "DISTINCT srcStateName, srcDistrictName.",
     "Result: 59 pairs (for example Raipur, Bilaspur)."
    ],
    "code": "SELECT DISTINCT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE '%pur' ORDER BY srcStateName, srcDistrictName;",
    "lotus": "A leading % means “anything, ending in pur”.",
    "trap": "'%pur%' also matches “pur” in the middle. The question wants only the end."
   }
  },
  "Q16": {
   "vi": {
    "think": "INNER JOIN để gộp phí nông dân của các huyện có Insurance units trên 10 trong một năm.",
    "steps": [
     "Tìm các huyện có InsuranceUnits > 10 ở bất kỳ năm nào (bảng con).",
     "INNER JOIN với bảng gốc theo bang và huyện.",
     "SUM(FarmersPremiumAmount) theo huyện."
    ],
    "code": "SELECT a.srcStateName, a.srcDistrictName, SUM(a.FarmersPremiumAmount) AS FarmersPremiumAmount\nFROM farmersinsurancedata a\nINNER JOIN (SELECT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE InsuranceUnits > 10\n            GROUP BY srcStateName, srcDistrictName) b\n  ON a.srcStateName = b.srcStateName AND a.srcDistrictName = b.srcDistrictName\nGROUP BY a.srcStateName, a.srcDistrictName\nORDER BY FarmersPremiumAmount DESC;",
    "lotus": "Như chọn danh sách chi nhánh có ngày nào đó vượt 10 ca, rồi cộng doanh thu cả năm của những chi nhánh đó.",
    "trap": "Join chỉ theo tên huyện bỏ qua bang sẽ ghép nhầm huyện trùng tên."
   },
   "en": {
    "think": "INNER JOIN to total farmers' premium for districts with Insurance units above 10 in some year.",
    "steps": [
     "Find districts with InsuranceUnits > 10 in any year (subquery).",
     "INNER JOIN with the base table on state and district.",
     "SUM(FarmersPremiumAmount) per district."
    ],
    "code": "SELECT a.srcStateName, a.srcDistrictName, SUM(a.FarmersPremiumAmount) AS FarmersPremiumAmount\nFROM farmersinsurancedata a\nINNER JOIN (SELECT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE InsuranceUnits > 10\n            GROUP BY srcStateName, srcDistrictName) b\n  ON a.srcStateName = b.srcStateName AND a.srcDistrictName = b.srcDistrictName\nGROUP BY a.srcStateName, a.srcDistrictName\nORDER BY FarmersPremiumAmount DESC;",
    "lotus": "Like picking branches that exceeded 10 cases on some day, then summing those branches' revenue for the whole year.",
    "trap": "Joining on district name only, ignoring state, mismatches districts sharing a name."
   }
  },
  "Q17": {
   "vi": {
    "think": "Mỗi huyện: tên, năm, dân số và mức phí nông dân cao nhất mọi năm; chỉ huyện có mức cao nhất trên 20 crore.",
    "steps": [
     "20 crore = 20 × 10.000.000 INR = 2000 lakh.",
     "Bảng con: MAX(FarmersPremiumAmount) theo huyện, HAVING > 2000.",
     "JOIN lại bảng gốc để lấy năm và dân số."
    ],
    "code": "SELECT f.srcStateName, f.srcDistrictName, f.Year_, f.TotalPopulation, m.MaxPremium\nFROM farmersinsurancedata f\nJOIN (SELECT srcStateName, srcDistrictName, MAX(FarmersPremiumAmount) AS MaxPremium\n      FROM farmersinsurancedata GROUP BY srcStateName, srcDistrictName\n      HAVING MAX(FarmersPremiumAmount) > 2000) m   -- 20 crore = 2000 lakh\n  ON f.srcStateName = m.srcStateName AND f.srcDistrictName = m.srcDistrictName\nORDER BY m.MaxPremium DESC;",
    "lotus": "Như tìm tháng doanh thu cao nhất của mỗi chi nhánh rồi chỉ giữ chi nhánh có đỉnh vượt một ngưỡng.",
    "trap": "Đổi crore thành lakh sai: 1 crore = 100 lakh, nên 20 crore là 2000 lakh, không phải 20."
   },
   "en": {
    "think": "For each district: name, year, population and the highest farmers' premium over all years; only districts whose peak exceeds 20 crore.",
    "steps": [
     "20 crore = 20 × 10,000,000 INR = 2,000 lakh.",
     "Subquery: MAX(FarmersPremiumAmount) per district, HAVING > 2000.",
     "JOIN back to the base table to get year and population."
    ],
    "code": "SELECT f.srcStateName, f.srcDistrictName, f.Year_, f.TotalPopulation, m.MaxPremium\nFROM farmersinsurancedata f\nJOIN (SELECT srcStateName, srcDistrictName, MAX(FarmersPremiumAmount) AS MaxPremium\n      FROM farmersinsurancedata GROUP BY srcStateName, srcDistrictName\n      HAVING MAX(FarmersPremiumAmount) > 2000) m   -- 20 crore = 2000 lakh\n  ON f.srcStateName = m.srcStateName AND f.srcDistrictName = m.srcDistrictName\nORDER BY m.MaxPremium DESC;",
    "lotus": "Like finding each branch's best revenue month, then keeping only branches whose peak exceeds a threshold.",
    "trap": "Converting crore to lakh wrongly: 1 crore = 100 lakh, so 20 crore is 2,000 lakh, not 20."
   }
  },
  "Q18": {
   "vi": {
    "think": "LEFT JOIN gộp dân số với dữ liệu nông dân; trả tổng phí và dân số trung bình theo huyện, chỉ huyện có tổng trên 100 crore, xếp giảm dần.",
    "steps": [
     "100 crore = 10.000 lakh.",
     "GROUP BY bang, huyện; SUM(FarmersPremiumAmount), AVG(TotalPopulation).",
     "HAVING SUM(...) > 10000; ORDER BY giảm dần.",
     "Kết quả: chỉ 3 huyện (Bid, Ujjain, Latur)."
    ],
    "code": "SELECT srcStateName, srcDistrictName,\n       SUM(FarmersPremiumAmount) AS TotalFarmersPremium, AVG(TotalPopulation) AS AvgPopulation\nFROM farmersinsurancedata\nGROUP BY srcStateName, srcDistrictName\nHAVING SUM(FarmersPremiumAmount) > 10000   -- 100 crore = 10000 lakh\nORDER BY TotalFarmersPremium DESC;",
    "lotus": "Như chỉ giữ chi nhánh có tổng doanh thu cả bốn năm vượt mốc 100 crore.",
    "trap": "Điều kiện trên tổng phải đặt ở HAVING, không phải WHERE."
   },
   "en": {
    "think": "LEFT JOIN population with farmer data; return total premium and average population per district, only districts above 100 crore total, sorted descending.",
    "steps": [
     "100 crore = 10,000 lakh.",
     "GROUP BY state, district; SUM(FarmersPremiumAmount), AVG(TotalPopulation).",
     "HAVING SUM(...) > 10000; ORDER BY descending.",
     "Result: only 3 districts (Bid, Ujjain, Latur)."
    ],
    "code": "SELECT srcStateName, srcDistrictName,\n       SUM(FarmersPremiumAmount) AS TotalFarmersPremium, AVG(TotalPopulation) AS AvgPopulation\nFROM farmersinsurancedata\nGROUP BY srcStateName, srcDistrictName\nHAVING SUM(FarmersPremiumAmount) > 10000   -- 100 crore = 10000 lakh\nORDER BY TotalFarmersPremium DESC;",
    "lotus": "Like keeping only branches whose four-year total revenue exceeds 100 crore.",
    "trap": "A condition on a total goes in HAVING, not WHERE."
   }
  },
  "Q19": {
   "vi": {
    "think": "Các huyện có số nông dân lớn hơn mức trung bình của toàn bộ bản ghi.",
    "steps": [
     "Bảng con: SELECT AVG(TotalFarmersCovered).",
     "WHERE TotalFarmersCovered > (bảng con).",
     "DISTINCT để bỏ tên lặp."
    ],
    "code": "SELECT DISTINCT srcDistrictName\nFROM farmersinsurancedata\nWHERE TotalFarmersCovered > (SELECT AVG(TotalFarmersCovered) FROM farmersinsurancedata)\nORDER BY srcDistrictName;",
    "lotus": "Như tìm chi nhánh có số khách trên trung bình toàn chuỗi.",
    "trap": "Trung bình tính trên mọi bản ghi, không theo từng huyện: đọc kỹ đề."
   },
   "en": {
    "think": "Districts whose farmers covered exceed the average over all records.",
    "steps": [
     "Subquery: SELECT AVG(TotalFarmersCovered).",
     "WHERE TotalFarmersCovered > (subquery).",
     "DISTINCT to drop repeated names."
    ],
    "code": "SELECT DISTINCT srcDistrictName\nFROM farmersinsurancedata\nWHERE TotalFarmersCovered > (SELECT AVG(TotalFarmersCovered) FROM farmersinsurancedata)\nORDER BY srcDistrictName;",
    "lotus": "Like finding branches with above-chain-average customers.",
    "trap": "The average is over all records, not per district: read the question carefully."
   }
  },
  "Q20": {
   "vi": {
    "think": "Các bang có SumInsured cao hơn SumInsured của bản ghi có phí nông dân cao nhất.",
    "steps": [
     "Bảng con: SumInsured của dòng có FarmersPremiumAmount lớn nhất (ORDER BY ... DESC LIMIT 1).",
     "So sánh trong WHERE.",
     "Kết quả thật: 0 dòng, vì dòng có phí cao nhất cũng là dòng có SumInsured lớn nhất."
    ],
    "code": "SELECT DISTINCT srcStateName\nFROM farmersinsurancedata\nWHERE SumInsured > (SELECT SumInsured FROM farmersinsurancedata ORDER BY FarmersPremiumAmount DESC LIMIT 1);",
    "lotus": "Nếu gói đắt nhất cũng là gói có giá trị cao nhất thì không gói nào vượt nó.",
    "trap": "Kết quả trống không phải lỗi: kiểm tra dữ liệu để hiểu vì sao."
   },
   "en": {
    "think": "States with SumInsured above that of the record with the highest farmers' premium.",
    "steps": [
     "Subquery: SumInsured of the row with the highest FarmersPremiumAmount (ORDER BY ... DESC LIMIT 1).",
     "Compare in WHERE.",
     "Real result: 0 rows, because the highest-premium row also has the largest SumInsured."
    ],
    "code": "SELECT DISTINCT srcStateName\nFROM farmersinsurancedata\nWHERE SumInsured > (SELECT SumInsured FROM farmersinsurancedata ORDER BY FarmersPremiumAmount DESC LIMIT 1);",
    "lotus": "If the priciest package also has the highest value, nothing exceeds it.",
    "trap": "An empty result is not an error: inspect the data to see why."
   }
  },
  "Q21": {
   "vi": {
    "think": "Các huyện có phí nông dân cao hơn mức trung bình của bang đông dân nhất.",
    "steps": [
     "Bảng con 1: bang có SUM(TotalPopulation) lớn nhất.",
     "Bảng con 2: AVG(FarmersPremiumAmount) của bang đó.",
     "WHERE FarmersPremiumAmount > (bảng con 2)."
    ],
    "code": "SELECT DISTINCT srcDistrictName\nFROM farmersinsurancedata\nWHERE FarmersPremiumAmount > (\n    SELECT AVG(FarmersPremiumAmount) FROM farmersinsurancedata\n    WHERE srcStateName = (SELECT srcStateName FROM farmersinsurancedata\n                          GROUP BY srcStateName ORDER BY SUM(TotalPopulation) DESC LIMIT 1))\nORDER BY srcDistrictName;",
    "lotus": "Như so doanh thu từng chi nhánh với trung bình của khu vực đông khách nhất.",
    "trap": "Hai tầng bảng con lồng nhau: viết từng tầng riêng, chạy thử rồi mới ghép."
   },
   "en": {
    "think": "Districts whose farmers' premium exceeds the average of the most populous state.",
    "steps": [
     "Subquery 1: the state with the largest SUM(TotalPopulation).",
     "Subquery 2: AVG(FarmersPremiumAmount) of that state.",
     "WHERE FarmersPremiumAmount > (subquery 2)."
    ],
    "code": "SELECT DISTINCT srcDistrictName\nFROM farmersinsurancedata\nWHERE FarmersPremiumAmount > (\n    SELECT AVG(FarmersPremiumAmount) FROM farmersinsurancedata\n    WHERE srcStateName = (SELECT srcStateName FROM farmersinsurancedata\n                          GROUP BY srcStateName ORDER BY SUM(TotalPopulation) DESC LIMIT 1))\nORDER BY srcDistrictName;",
    "lotus": "Like comparing each branch's revenue with the average of the area with the most customers.",
    "trap": "Two nested subquery levels: write each separately, test, then combine."
   }
  },
  "Q22": {
   "vi": {
    "think": "Đánh số thứ tự mỗi dòng theo số nông dân giảm dần.",
    "steps": [
     "ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC).",
     "Mỗi dòng nhận một số duy nhất, kể cả khi bằng nhau."
    ],
    "code": "SELECT srcStateName, srcDistrictName, TotalFarmersCovered,\n       ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC) AS row_num\nFROM farmersinsurancedata\nLIMIT 10;",
    "lotus": "Như đánh số thứ tự các ngày theo số khách từ đông nhất.",
    "trap": "ROW_NUMBER không cho hai dòng cùng số dù giá trị bằng nhau, khác RANK."
   },
   "en": {
    "think": "Number each row by farmers covered descending.",
    "steps": [
     "ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC).",
     "Each row gets a unique number, even on ties."
    ],
    "code": "SELECT srcStateName, srcDistrictName, TotalFarmersCovered,\n       ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC) AS row_num\nFROM farmersinsurancedata\nLIMIT 10;",
    "lotus": "Like numbering days by customers, busiest first.",
    "trap": "ROW_NUMBER never gives two rows the same number even on ties, unlike RANK."
   }
  },
  "Q23": {
   "vi": {
    "think": "Xếp hạng huyện theo SumInsured giảm dần trong từng bang.",
    "steps": [
     "RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC).",
     "PARTITION BY chia nhóm theo bang, hạng tính lại từ 1 trong mỗi bang."
    ],
    "code": "SELECT srcStateName, srcDistrictName, SumInsured,\n       RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC) AS rnk\nFROM farmersinsurancedata\nORDER BY srcStateName, rnk\nLIMIT 12;",
    "lotus": "Như xếp hạng chi nhánh theo doanh thu bên trong từng quận.",
    "trap": "Quên PARTITION BY sẽ xếp một bảng hạng chung cho cả nước."
   },
   "en": {
    "think": "Rank districts by SumInsured descending within each state.",
    "steps": [
     "RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC).",
     "PARTITION BY groups by state; the rank restarts from 1 in each state."
    ],
    "code": "SELECT srcStateName, srcDistrictName, SumInsured,\n       RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC) AS rnk\nFROM farmersinsurancedata\nORDER BY srcStateName, rnk\nLIMIT 12;",
    "lotus": "Like ranking branches by revenue inside each district.",
    "trap": "Forgetting PARTITION BY gives one national ranking."
   }
  },
  "Q24": {
   "vi": {
    "think": "Tổng cộng dồn phí nông dân theo huyện, theo năm tăng dần, trong từng bang.",
    "steps": [
     "SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear).",
     "ORDER BY trong OVER tạo tổng dồn."
    ],
    "code": "SELECT srcStateName, srcDistrictName, srcYear, FarmersPremiumAmount,\n       SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear) AS cumulative_premium\nFROM farmersinsurancedata\nORDER BY srcStateName, srcDistrictName, srcYear\nLIMIT 12;",
    "lotus": "Như doanh thu cộng dồn từng tháng của một chi nhánh: tháng 3 = tháng 1 + 2 + 3.",
    "trap": "Không có ORDER BY trong OVER thì ra tổng cả nhóm cho mọi dòng, không phải cộng dồn."
   },
   "en": {
    "think": "Cumulative sum of farmers' premium per district, ascending by year, within each state.",
    "steps": [
     "SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear).",
     "ORDER BY inside OVER creates the running total."
    ],
    "code": "SELECT srcStateName, srcDistrictName, srcYear, FarmersPremiumAmount,\n       SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear) AS cumulative_premium\nFROM farmersinsurancedata\nORDER BY srcStateName, srcDistrictName, srcYear\nLIMIT 12;",
    "lotus": "Like a branch's running revenue by month: month 3 = months 1 + 2 + 3.",
    "trap": "Without ORDER BY in OVER you get the whole group's total on every row, not a running one."
   }
  },
  "Q25": {
   "vi": {
    "think": "Tạo hai bảng: districts (khoá chính DistrictCode) và states (khoá chính StateCode).",
    "steps": [
     "CREATE TABLE states (StateCode INT PRIMARY KEY, StateName VARCHAR(255)).",
     "CREATE TABLE districts (DistrictCode INT PRIMARY KEY, DistrictName VARCHAR(255), StateCode INT).",
     "Tạo states trước để districts tham chiếu được (Q26)."
    ],
    "code": "CREATE TABLE states (\n    StateCode INT PRIMARY KEY,\n    StateName VARCHAR(255)\n);\nCREATE TABLE districts (\n    DistrictCode INT PRIMARY KEY,\n    DistrictName VARCHAR(255),\n    StateCode INT\n);",
    "lotus": "Như lập danh mục chi nhánh và danh mục quận riêng, mỗi cái có mã duy nhất.",
    "trap": "Khoá chính không được trùng: hai dòng cùng DistrictCode sẽ bị từ chối."
   },
   "en": {
    "think": "Create two tables: districts (primary key DistrictCode) and states (primary key StateCode).",
    "steps": [
     "CREATE TABLE states (StateCode INT PRIMARY KEY, StateName VARCHAR(255)).",
     "CREATE TABLE districts (DistrictCode INT PRIMARY KEY, DistrictName VARCHAR(255), StateCode INT).",
     "Create states first so districts can reference it (Q26)."
    ],
    "code": "CREATE TABLE states (\n    StateCode INT PRIMARY KEY,\n    StateName VARCHAR(255)\n);\nCREATE TABLE districts (\n    DistrictCode INT PRIMARY KEY,\n    DistrictName VARCHAR(255),\n    StateCode INT\n);",
    "lotus": "Like making a separate branch directory and district directory, each with a unique code.",
    "trap": "A primary key cannot repeat: two rows with the same DistrictCode are rejected."
   }
  },
  "Q26": {
   "vi": {
    "think": "Thêm khoá ngoại để districts.StateCode tham chiếu states.StateCode.",
    "steps": [
     "ALTER TABLE districts ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode).",
     "Ghi chú: SQLite không cho ALTER ADD FOREIGN KEY; ở đây kết quả kiểm tra bằng bảng tạo sẵn khoá ngoại. MySQL chạy đúng câu ALTER."
    ],
    "code": "-- MySQL\nALTER TABLE districts\nADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode);",
    "lotus": "Mỗi quận phải thuộc một chi nhánh có thật: không thể gán quận cho chi nhánh chưa tồn tại.",
    "trap": "Chèn dòng vào districts với StateCode chưa có trong states sẽ bị từ chối."
   },
   "en": {
    "think": "Add a foreign key so districts.StateCode references states.StateCode.",
    "steps": [
     "ALTER TABLE districts ADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode).",
     "Note: SQLite does not allow ALTER ADD FOREIGN KEY; the check here uses a table created with the key. MySQL runs the ALTER as written."
    ],
    "code": "-- MySQL\nALTER TABLE districts\nADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode);",
    "lotus": "Every district must belong to a real branch: you cannot assign a district to a branch that does not exist.",
    "trap": "Inserting into districts a StateCode absent from states is rejected."
   }
  },
  "Q27": {
   "vi": {
    "think": "Cập nhật phí nông dân của dòng rowID = 1 thành 500,0.",
    "steps": [
     "UPDATE ... SET FarmersPremiumAmount = 500.0 WHERE rowID = 1.",
     "Luôn có WHERE, rồi SELECT lại để kiểm tra."
    ],
    "code": "UPDATE farmersinsurancedata SET FarmersPremiumAmount = 500.0 WHERE rowID = 1;",
    "lotus": "Như sửa một booking cụ thể bằng mã booking của nó.",
    "trap": "UPDATE không có WHERE sửa mọi dòng của bảng."
   },
   "en": {
    "think": "Update the farmers' premium of the row with rowID = 1 to 500.0.",
    "steps": [
     "UPDATE ... SET FarmersPremiumAmount = 500.0 WHERE rowID = 1.",
     "Always include WHERE, then SELECT again to check."
    ],
    "code": "UPDATE farmersinsurancedata SET FarmersPremiumAmount = 500.0 WHERE rowID = 1;",
    "lotus": "Like editing one specific booking by its booking ID.",
    "trap": "UPDATE without WHERE changes every row of the table."
   }
  },
  "Q28": {
   "vi": {
    "think": "Đổi năm thành 2021 cho mọi dòng của Himachal Pradesh.",
    "steps": [
     "UPDATE ... SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH'.",
     "Kiểm tra bằng GROUP BY năm."
    ],
    "code": "UPDATE farmersinsurancedata SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH';",
    "lotus": "Như đổi ngày cho cả lô booking của một chi nhánh.",
    "trap": "Cập nhật hàng loạt khó hoàn tác: SELECT với cùng WHERE trước để đếm số dòng."
   },
   "en": {
    "think": "Change the year to 2021 for all Himachal Pradesh rows.",
    "steps": [
     "UPDATE ... SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH'.",
     "Check with GROUP BY year."
    ],
    "code": "UPDATE farmersinsurancedata SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH';",
    "lotus": "Like changing the date for a whole batch of one branch's bookings.",
    "trap": "Bulk updates are hard to undo: SELECT with the same WHERE first to count rows."
   }
  },
  "Q29": {
   "vi": {
    "think": "Xóa các dòng có số nông dân dưới 10.000 trong năm 2020.",
    "steps": [
     "DELETE FROM ... WHERE TotalFarmersCovered < 10000 AND srcYear = 2020.",
     "Chạy SELECT COUNT với cùng WHERE trước để biết sẽ xóa bao nhiêu."
    ],
    "code": "DELETE FROM farmersinsurancedata WHERE TotalFarmersCovered < 10000 AND srcYear = 2020;",
    "lotus": "Như xóa các booking nhỏ của một tháng: phải chắc chắn trước khi xóa.",
    "trap": "DELETE không có WHERE xóa sạch bảng. Dùng cùng WHERE với SELECT để xem trước."
   },
   "en": {
    "think": "Delete rows with fewer than 10,000 farmers in 2020.",
    "steps": [
     "DELETE FROM ... WHERE TotalFarmersCovered < 10000 AND srcYear = 2020.",
     "Run SELECT COUNT with the same WHERE first to know how many will go."
    ],
    "code": "DELETE FROM farmersinsurancedata WHERE TotalFarmersCovered < 10000 AND srcYear = 2020;",
    "lotus": "Like deleting a month's small bookings: be sure before deleting.",
    "trap": "DELETE without WHERE wipes the table. Preview with SELECT using the same WHERE."
   }
  }
 },
 "results": {
  "Q1": {
   "code": "SELECT DISTINCT srcStateName FROM farmersinsurancedata ORDER BY srcStateName;",
   "text": "27 dòng\n               srcStateName\nANDAMAN AND NICOBAR ISLANDS\n             ANDHRA PRADESH\n                      ASSAM\n               CHHATTISGARH\n                        GOA\n                    GUJARAT\n                    HARYANA\n           HIMACHAL PRADESH\n          JAMMU AND KASHMIR\n                  JHARKHAND\n                  KARNATAKA\n                     KERALA\n             MADHYA PRADESH\n                MAHARASHTRA\n                    MANIPUR\n                  MEGHALAYA\n                     ODISHA\n                 PUDUCHERRY\n                     PUNJAB\n                  RAJASTHAN\n                     SIKKIM\n                 TAMIL NADU\n                  TELANGANA\n                    TRIPURA\n              UTTAR PRADESH\n                UTTARAKHAND\n                WEST BENGAL",
   "imgs": []
  },
  "Q2": {
   "code": "SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(SumInsured) AS SumInsured\nFROM farmersinsurancedata\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
   "text": "27 dòng\n  srcStateName  TotalFarmersCovered  SumInsured\nMADHYA PRADESH              9149678 8413198.330\n   MAHARASHTRA              8939015 4005734.659\n UTTAR PRADESH              7239576 3298970.934\n     RAJASTHAN              6822958 5363500.721\n    TAMIL NADU              3962760 3025519.440\n        ODISHA              2586332 1375248.579\n       HARYANA              2081990 2268958.581\n   WEST BENGAL              2054414  842893.120\n  CHHATTISGARH              1858973 1118190.176\nANDHRA PRADESH              1810317 1631182.110\n         ASSAM              1590716  813139.263\n     KARNATAKA               736375       3.177",
   "imgs": []
  },
  "Q3": {
   "code": "SELECT rowID, srcStateName, srcDistrictName, TotalFarmersCovered FROM farmersinsurancedata WHERE srcYear = 2020 LIMIT 10;\n-- đếm: SELECT COUNT(*) FROM farmersinsurancedata WHERE srcYear = 2020;",
   "text": "429 dòng có srcYear = 2020 (hiển thị 10 dòng đầu)\n rowID srcStateName srcDistrictName  TotalFarmersCovered\n     0    KARNATAKA DakshinaKannada                    0\n     1    KARNATAKA Bengaluru Urban                    0\n  1188    KARNATAKA  Chikkaballapur                   20\n  1316    KARNATAKA  Chikkamagaluru                    7\n  2063       ODISHA      Mayurbhanj                   19\n  2064       ODISHA    Nabarangapur                   80\n  2065       ODISHA        Nayagarh                   57\n  2066       ODISHA         Nuapada                  980\n  2067       ODISHA            Puri                 9588\n  2068       ODISHA        Rayagada                  562",
   "imgs": []
  },
  "Q4": {
   "code": "SELECT rowID, srcStateName, srcDistrictName, TotalPopulationRural\nFROM farmersinsurancedata\nWHERE TotalPopulationRural > 1000000 AND srcStateName = 'HIMACHAL PRADESH';",
   "text": "4 dòng\n rowID     srcStateName srcDistrictName  TotalPopulationRural\n     8 HIMACHAL PRADESH          Kangra               1423794\n  1073 HIMACHAL PRADESH          Kangra               1423794\n  2263 HIMACHAL PRADESH          Kangra               1423794\n  3144 HIMACHAL PRADESH          Kangra               1423794",
   "imgs": []
  },
  "Q5": {
   "code": "SELECT srcStateName, srcDistrictName, SUM(FarmersPremiumAmount) AS FarmersPremiumAmount\nFROM farmersinsurancedata\nWHERE srcYear = 2018\nGROUP BY srcStateName, srcDistrictName\nORDER BY FarmersPremiumAmount ASC;",
   "text": "525 dòng\nsrcStateName srcDistrictName  FarmersPremiumAmount\n   KARNATAKA Bengaluru Rural                   0.0\n   KARNATAKA Bengaluru Urban                   0.0\n   KARNATAKA  Chikkaballapur                   0.0\n   KARNATAKA  Chikkamagaluru                   0.0\n   KARNATAKA DakshinaKannada                   0.0\n   KARNATAKA          Kodagu                   0.0\n   KARNATAKA          Mysuru                   0.0\n   KARNATAKA      Ramanagara                   0.0\n   KARNATAKA      Shivamogga                   0.0\n   KARNATAKA        Tumakuru                   0.0\n   KARNATAKA           Udupi                   0.0\n   KARNATAKA    UttarKannada                   0.0",
   "imgs": []
  },
  "Q6": {
   "code": "SELECT srcStateName, SUM(TotalFarmersCovered) AS TotalFarmersCovered, SUM(GrossPremiumAmountToBePaid) AS GrossPremium\nFROM farmersinsurancedata\nWHERE InsuredLandArea > 5.0 AND srcYear = 2018\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
   "text": "17 dòng\n    srcStateName  TotalFarmersCovered  GrossPremium\n   UTTAR PRADESH              2614548      70172.93\n  MADHYA PRADESH              2523882     155228.19\n     MAHARASHTRA              2425998      90419.20\n     WEST BENGAL              2038418      49236.05\n       RAJASTHAN              1666703     114021.21\n      TAMIL NADU              1134011     157822.26\n         HARYANA               665511      26875.56\n  ANDHRA PRADESH               473849      36850.88\n    CHHATTISGARH               151742       6863.97\n       TELANGANA               150069       4464.03\nHIMACHAL PRADESH                64766        530.09\n          ODISHA                58010        833.58",
   "imgs": []
  },
  "Q7": {
   "code": "SELECT srcYear, AVG(InsuredLandArea) AS AvgInsuredLandArea\nFROM farmersinsurancedata\nGROUP BY srcYear\nORDER BY srcYear;",
   "text": "4 dòng\n srcYear  AvgInsuredLandArea\n    2018              37.879\n    2019              38.265\n    2020              46.924\n    2021              38.546",
   "imgs": []
  },
  "Q8": {
   "code": "SELECT srcDistrictName, SUM(TotalFarmersCovered) AS TotalFarmersCovered\nFROM farmersinsurancedata\nWHERE InsuranceUnits > 0\nGROUP BY srcDistrictName\nORDER BY TotalFarmersCovered DESC;",
   "text": "558 dòng\nsrcDistrictName  TotalFarmersCovered\n            Bid              1430532\n          Latur              1184066\n         Nanded               739712\n      Osmanabad               700623\n          Jalna               666086\n         Ujjain               630787\n        Solapur               563903\n        Rajgarh               557778\n          Dewas               549528\n       Parbhani               544741\n         Sehore               529484\n     Ahmadnagar               489329",
   "imgs": []
  },
  "Q9": {
   "code": "SELECT srcStateName,\n       SUM(FarmersPremiumAmount) AS FarmersPremium, SUM(StatePremiumAmount) AS StatePremium, SUM(GOVPremiumAmount) AS GovPremium,\n       SUM(TotalFarmersCovered) AS TotalFarmersCovered\nFROM farmersinsurancedata\nWHERE SumInsured > 5   -- 500,000 INR = 5 lakh, dữ liệu lưu theo đơn vị lakh\nGROUP BY srcStateName\nORDER BY TotalFarmersCovered DESC;",
   "text": "26 dòng\n  srcStateName  FarmersPremium  StatePremium  GovPremium  TotalFarmersCovered\nMADHYA PRADESH      139861.350    399901.493  399901.493              9149678\n   MAHARASHTRA       84293.080    376643.749  356388.469              8938932\n UTTAR PRADESH       60333.696     88796.800   88694.100              7239538\n     RAJASTHAN      104352.383    290076.310  276115.130              6822946\n    TAMIL NADU       51184.489    427455.427  306309.328              3962751\n        ODISHA       26987.247    112098.316  112098.316              2586219\n       HARYANA       49234.840     60606.442   60596.525              2081961\n   WEST BENGAL        8727.984     25480.180   15393.360              2054414\n  CHHATTISGARH       20947.272     68042.011   68042.011              1858549\nANDHRA PRADESH        5555.081     94441.740   57365.220              1810317\n         ASSAM         849.892     19693.115   13291.385              1590701\n     TELANGANA        5722.630      4008.280    4008.280               407890",
   "imgs": []
  },
  "Q10": {
   "code": "SELECT srcDistrictName, TotalPopulation\nFROM farmersinsurancedata\nWHERE srcYear = 2020\nORDER BY TotalPopulation DESC\nLIMIT 5;",
   "text": "5 dòng\nsrcDistrictName  TotalPopulation\nBengaluru Urban          9621551\n           Pune          9429408\n          Thane          8070032\n         Jaipur          6626178\n         Nashik          6107187",
   "imgs": []
  },
  "Q11": {
   "code": "SELECT srcStateName, srcDistrictName, SumInsured, FarmersPremiumAmount\nFROM farmersinsurancedata\nWHERE FarmersPremiumAmount > 0\nORDER BY FarmersPremiumAmount ASC, SumInsured ASC\nLIMIT 10;",
   "text": "10 dòng\nsrcStateName srcDistrictName  SumInsured  FarmersPremiumAmount\n   KARNATAKA       Kalaburgi       0.004                   0.0\n   KARNATAKA           Kolar       0.005                   0.0\n   KARNATAKA       Davangere       0.005                   0.0\n   KARNATAKA         Ballari       0.005                   0.0\n   KARNATAKA          Mandya       0.006                   0.0\n   KARNATAKA         YADGIRI       0.009                   0.0\n   KARNATAKA           Bidar       0.010                   0.0\n   KARNATAKA         Ballari       0.011                   0.0\n   KARNATAKA       Davangere       0.012                   0.0\n   KARNATAKA          Koppal       0.014                   0.0",
   "imgs": []
  },
  "Q12": {
   "code": "SELECT srcStateName, srcYear,\n       SUM(TotalFarmersCovered) * 1.0 / SUM(TotalPopulation) AS ratio\nFROM farmersinsurancedata\nGROUP BY srcStateName, srcYear\nORDER BY ratio DESC\nLIMIT 3;",
   "text": "3 dòng\nsrcStateName  srcYear  ratio\nCHHATTISGARH     2021  0.050\n     TRIPURA     2020  0.047\n     TRIPURA     2021  0.046",
   "imgs": []
  },
  "Q13": {
   "code": "SELECT DISTINCT srcStateName, SUBSTR(srcStateName, 1, 3) AS StateShortName\nFROM farmersinsurancedata\nORDER BY srcStateName;",
   "text": "27 dòng\n               srcStateName StateShortName\nANDAMAN AND NICOBAR ISLANDS            AND\n             ANDHRA PRADESH            AND\n                      ASSAM            ASS\n               CHHATTISGARH            CHH\n                        GOA            GOA\n                    GUJARAT            GUJ\n                    HARYANA            HAR\n           HIMACHAL PRADESH            HIM\n          JAMMU AND KASHMIR            JAM\n                  JHARKHAND            JHA\n                  KARNATAKA            KAR\n                     KERALA            KER\n             MADHYA PRADESH            MAD\n                MAHARASHTRA            MAH\n                    MANIPUR            MAN\n                  MEGHALAYA            MEG\n                     ODISHA            ODI\n                 PUDUCHERRY            PUD\n                     PUNJAB            PUN\n                  RAJASTHAN            RAJ\n                     SIKKIM            SIK\n                 TAMIL NADU            TAM\n                  TELANGANA            TEL\n                    TRIPURA            TRI\n              UTTAR PRADESH            UTT\n                UTTARAKHAND            UTT\n                WEST BENGAL            WES",
   "imgs": []
  },
  "Q14": {
   "code": "SELECT DISTINCT srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE 'B%' ORDER BY srcDistrictName;",
   "text": "60 dòng\nsrcDistrictName\n       Bagalkot\n      Bageshwar\n        Baghpat\n       Bahraich\n          Baksa\n       Balaghat\n       Balangir\n      Baleshwar\n        Ballari\n         Ballia\n          Balod\n   Baloda Bazar\n      Balrampur\n   Banas Kantha\n          Banda\n        Bankura\n       Banswara\n     Bara Banki\n          Baran\n       Bareilly\n        Bargarh\n         Barmer\n        Barnala\n        Barpeta\n        Barwani\n         Bastar\n          Basti\n       Bathinda\n          Baudh\n       Belagavi",
   "imgs": []
  },
  "Q15": {
   "code": "SELECT DISTINCT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE srcDistrictName LIKE '%pur' ORDER BY srcStateName, srcDistrictName;",
   "text": "59 dòng\n     srcStateName srcDistrictName\n   ANDHRA PRADESH       Anantapur\n            ASSAM       Lakhimpur\n            ASSAM        Sonitpur\n     CHHATTISGARH       Balrampur\n     CHHATTISGARH         Bijapur\n     CHHATTISGARH        Bilaspur\n     CHHATTISGARH         Jashpur\n     CHHATTISGARH      Narayanpur\n     CHHATTISGARH          Raipur\n     CHHATTISGARH        Surajpur\n HIMACHAL PRADESH        Bilaspur\n HIMACHAL PRADESH        Hamirpur\nJAMMU AND KASHMIR        Udhampur\n        KARNATAKA  Chikkaballapur\n   MADHYA PRADESH       Alirajpur",
   "imgs": []
  },
  "Q16": {
   "code": "SELECT a.srcStateName, a.srcDistrictName, SUM(a.FarmersPremiumAmount) AS FarmersPremiumAmount\nFROM farmersinsurancedata a\nINNER JOIN (SELECT srcStateName, srcDistrictName FROM farmersinsurancedata WHERE InsuranceUnits > 10\n            GROUP BY srcStateName, srcDistrictName) b\n  ON a.srcStateName = b.srcStateName AND a.srcDistrictName = b.srcDistrictName\nGROUP BY a.srcStateName, a.srcDistrictName\nORDER BY FarmersPremiumAmount DESC;",
   "text": "491 dòng\n  srcStateName srcDistrictName  FarmersPremiumAmount\n   MAHARASHTRA             Bid             14528.860\nMADHYA PRADESH          Ujjain             12385.230\n   MAHARASHTRA           Latur             11700.320\nMADHYA PRADESH         Rajgarh              9469.960\n       HARYANA           Sirsa              9313.889\nMADHYA PRADESH          Sehore              9253.490\nMADHYA PRADESH         Vidisha              9235.370\nMADHYA PRADESH           Dewas              8385.200\n     RAJASTHAN         Jodhpur              7862.443\n     RAJASTHAN     Hanumangarh              7572.810\nMADHYA PRADESH        Shajapur              7444.080\n       HARYANA           Hisar              7406.100",
   "imgs": []
  },
  "Q17": {
   "code": "SELECT f.srcStateName, f.srcDistrictName, f.Year_, f.TotalPopulation, m.MaxPremium\nFROM farmersinsurancedata f\nJOIN (SELECT srcStateName, srcDistrictName, MAX(FarmersPremiumAmount) AS MaxPremium\n      FROM farmersinsurancedata GROUP BY srcStateName, srcDistrictName\n      HAVING MAX(FarmersPremiumAmount) > 2000) m   -- 20 crore = 2000 lakh\n  ON f.srcStateName = m.srcStateName AND f.srcDistrictName = m.srcDistrictName\nORDER BY m.MaxPremium DESC;",
   "text": "132 dòng\nsrcStateName srcDistrictName                           Year_  TotalPopulation  MaxPremium\n MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2018          2583421     7244.42\n MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2019          2583421     7244.42\n MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2020          2583421     7244.42\n MAHARASHTRA             Bid Calendar Year (Jan - Dec), 2021          2583421     7244.42\n     HARYANA           Sirsa Calendar Year (Jan - Dec), 2018          1295189     5805.97\n     HARYANA           Sirsa Calendar Year (Jan - Dec), 2019          1295189     5805.97\n     HARYANA           Sirsa Calendar Year (Jan - Dec), 2020          1295189     5805.97\n     HARYANA           Sirsa Calendar Year (Jan - Dec), 2021          1295189     5805.97\n MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2018          2454196     4860.57\n MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2019          2454196     4860.57\n MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2020          2454196     4860.57\n MAHARASHTRA           Latur Calendar Year (Jan - Dec), 2021          2454196     4860.57",
   "imgs": []
  },
  "Q18": {
   "code": "SELECT srcStateName, srcDistrictName,\n       SUM(FarmersPremiumAmount) AS TotalFarmersPremium, AVG(TotalPopulation) AS AvgPopulation\nFROM farmersinsurancedata\nGROUP BY srcStateName, srcDistrictName\nHAVING SUM(FarmersPremiumAmount) > 10000   -- 100 crore = 10000 lakh\nORDER BY TotalFarmersPremium DESC;",
   "text": "3 dòng\n  srcStateName srcDistrictName  TotalFarmersPremium  AvgPopulation\n   MAHARASHTRA             Bid             14528.86      2583421.0\nMADHYA PRADESH          Ujjain             12385.23      1986864.0\n   MAHARASHTRA           Latur             11700.32      2454196.0",
   "imgs": []
  },
  "Q19": {
   "code": "SELECT DISTINCT srcDistrictName\nFROM farmersinsurancedata\nWHERE TotalFarmersCovered > (SELECT AVG(TotalFarmersCovered) FROM farmersinsurancedata)\nORDER BY srcDistrictName;",
   "text": "251 dòng\nsrcDistrictName\n     Agar Malwa\n           Agra\n     Ahmadnagar\n          Ajmer\n          Akola\n        Aligarh\n      Allahabad\n          Alwar\n Ambedkar Nagar\n         Amethi",
   "imgs": []
  },
  "Q20": {
   "code": "SELECT DISTINCT srcStateName\nFROM farmersinsurancedata\nWHERE SumInsured > (SELECT SumInsured FROM farmersinsurancedata ORDER BY FarmersPremiumAmount DESC LIMIT 1);",
   "text": "0 dòng\nEmpty DataFrame\nColumns: [srcStateName]\nIndex: []",
   "imgs": []
  },
  "Q21": {
   "code": "SELECT DISTINCT srcDistrictName\nFROM farmersinsurancedata\nWHERE FarmersPremiumAmount > (\n    SELECT AVG(FarmersPremiumAmount) FROM farmersinsurancedata\n    WHERE srcStateName = (SELECT srcStateName FROM farmersinsurancedata\n                          GROUP BY srcStateName ORDER BY SUM(TotalPopulation) DESC LIMIT 1))\nORDER BY srcDistrictName;",
   "text": "246 dòng\nsrcDistrictName\n     Agar Malwa\n           Agra\n     Ahmadnagar\n          Ajmer\n          Akola\n        Aligarh\n     Alipurduar\n      Allahabad\n          Alwar\n         Ambala",
   "imgs": []
  },
  "Q22": {
   "code": "SELECT srcStateName, srcDistrictName, TotalFarmersCovered,\n       ROW_NUMBER() OVER (ORDER BY TotalFarmersCovered DESC) AS row_num\nFROM farmersinsurancedata\nLIMIT 10;",
   "text": "10 dòng\nsrcStateName   srcDistrictName  TotalFarmersCovered  row_num\n MAHARASHTRA               Bid               548572        1\n MAHARASHTRA            Nanded               426801        2\n MAHARASHTRA             Latur               407452        3\n MAHARASHTRA               Bid               387806        4\n MAHARASHTRA             Latur               367746        5\n MAHARASHTRA               Bid               363412        6\n MAHARASHTRA             Latur               308841        7\n MAHARASHTRA         Osmanabad               286245        8\n WEST BENGAL   Purba Medinipur               283591        9\n WEST BENGAL Paschim Medinipur               283245       10",
   "imgs": []
  },
  "Q23": {
   "code": "SELECT srcStateName, srcDistrictName, SumInsured,\n       RANK() OVER (PARTITION BY srcStateName ORDER BY SumInsured DESC) AS rnk\nFROM farmersinsurancedata\nORDER BY srcStateName, rnk\nLIMIT 12;",
   "text": "12 dòng\n               srcStateName          srcDistrictName  SumInsured  rnk\nANDAMAN AND NICOBAR ISLANDS North and Middle Andaman     180.540    1\nANDAMAN AND NICOBAR ISLANDS            South Andaman      12.020    2\nANDAMAN AND NICOBAR ISLANDS North and Middle Andaman      11.620    3\nANDAMAN AND NICOBAR ISLANDS            South Andaman       8.180    4\nANDAMAN AND NICOBAR ISLANDS                 Nicobars       2.800    5\nANDAMAN AND NICOBAR ISLANDS                 Nicobars       0.679    6\n             ANDHRA PRADESH                  Kurnool  191968.810    1\n             ANDHRA PRADESH                   Y.S.R.  177442.110    2\n             ANDHRA PRADESH               Srikakulam  149882.040    3\n             ANDHRA PRADESH                 Prakasam  115234.930    4\n             ANDHRA PRADESH                  Krishna  110284.720    5\n             ANDHRA PRADESH                   Y.S.R.  107310.710    6",
   "imgs": []
  },
  "Q24": {
   "code": "SELECT srcStateName, srcDistrictName, srcYear, FarmersPremiumAmount,\n       SUM(FarmersPremiumAmount) OVER (PARTITION BY srcStateName, srcDistrictName ORDER BY srcYear) AS cumulative_premium\nFROM farmersinsurancedata\nORDER BY srcStateName, srcDistrictName, srcYear\nLIMIT 12;",
   "text": "12 dòng\n               srcStateName          srcDistrictName  srcYear  FarmersPremiumAmount  cumulative_premium\nANDAMAN AND NICOBAR ISLANDS                 Nicobars     2020                 0.003               0.003\nANDAMAN AND NICOBAR ISLANDS                 Nicobars     2021                 0.014               0.017\nANDAMAN AND NICOBAR ISLANDS North and Middle Andaman     2020                 0.058               0.058\nANDAMAN AND NICOBAR ISLANDS North and Middle Andaman     2021                 0.903               0.961\nANDAMAN AND NICOBAR ISLANDS            South Andaman     2020                 0.041               0.041\nANDAMAN AND NICOBAR ISLANDS            South Andaman     2021                 0.060               0.101\n             ANDHRA PRADESH                Anantapur     2018               541.830             541.830\n             ANDHRA PRADESH                Anantapur     2019                 0.189             542.019\n             ANDHRA PRADESH                 Chittoor     2018                99.650              99.650\n             ANDHRA PRADESH                 Chittoor     2019                 0.441             100.091\n             ANDHRA PRADESH            East Godavari     2018               102.600             102.600\n             ANDHRA PRADESH            East Godavari     2019                 1.830             104.430",
   "imgs": []
  },
  "Q25": {
   "code": "CREATE TABLE states (\n    StateCode INT PRIMARY KEY,\n    StateName VARCHAR(255)\n);\nCREATE TABLE districts (\n    DistrictCode INT PRIMARY KEY,\n    DistrictName VARCHAR(255),\n    StateCode INT\n);",
   "text": "     name\n   states\ndistricts",
   "imgs": []
  },
  "Q26": {
   "code": "-- MySQL\nALTER TABLE districts\nADD CONSTRAINT fk_districts_state FOREIGN KEY (StateCode) REFERENCES states(StateCode);",
   "text": "Bảng districts sau khi thêm khoá ngoại (kiểm tra trên SQLite):\n table      from        to\nstates StateCode StateCode",
   "imgs": []
  },
  "Q27": {
   "code": "UPDATE farmersinsurancedata SET FarmersPremiumAmount = 500.0 WHERE rowID = 1;",
   "text": "1 dòng bị ảnh hưởng\n rowID  FarmersPremiumAmount\n     1                 500.0",
   "imgs": []
  },
  "Q28": {
   "code": "UPDATE farmersinsurancedata SET srcYear = 2021 WHERE srcStateName = 'HIMACHAL PRADESH';",
   "text": "40 dòng bị ảnh hưởng\n    srcStateName  srcYear  rows_\nHIMACHAL PRADESH     2021     40",
   "imgs": []
  },
  "Q29": {
   "code": "DELETE FROM farmersinsurancedata WHERE TotalFarmersCovered < 10000 AND srcYear = 2020;",
   "text": "184 dòng bị ảnh hưởng\n rows_left\n      1686",
   "imgs": []
  }
 }
};
