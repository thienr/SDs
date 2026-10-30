import type { Assignment } from "@/data/assign/types";

export const asg: Assignment = {
 "id": "namma-yatri",
 "course": "C5 · Data Visualisation",
 "title": [
  "Bài tập: Trực quan hoá dữ liệu Namma Yatri",
  "Assignment: Visualising Namma Yatri data"
 ],
 "file": "Starter Methodology Report ADV Namma Yatri.docx",
 "story": [
  "Starter gốc là báo cáo trực quan hoá dữ liệu gọi xe Namma Yatri ở Bangalore (2.161 yêu cầu, 983 chuyến hoàn thành). Đề dùng Tableau/Power BI, ở đây mỗi mục đều có kết quả thật chạy bằng Python trên đúng file nammayatri.xlsx để bạn so với báo cáo của mình. Trong Lotus Spa: chuyến = lượt đặt lịch, khu = chi nhánh/khu vực, huỷ chuyến = khách bỏ lịch, fare = hoá đơn.",
  "The original starter is a visualisation report on Namma Yatri ride-hailing data from Bangalore (2,161 requests, 983 completed). The brief uses Tableau/Power BI; here every task has real results run in Python on the actual nammayatri.xlsx so you can compare with your own report. In Lotus Spa: a ride = a booking, a zone = a branch/area, a cancellation = a customer no-show, fare = the bill."
 ],
 "concepts": [
  "d-c471822424f5"
 ],
 "cells": [
  {
   "t": "md",
   "s": "Methodology Report:\n\nVisualisation & Analysis on Namma Yatri Data\n\nInclude your visualisations, analysis, results, insights, and outcomes.\n\nExplain your methodology and approach to the tasks. Add your conclusions to the sections.\n\nTable 1: Data Description\n\n| Table Name | Column Name | Description |\n|---|---|---|\n| Assembly | Assembly_ID | Unique identifier |\n| Assembly | Assembly | Specific assembly zone name |\n| Duration | duration_id | Unique identifier of time periods |\n| Duration | duration | Hour of trip (e.g., \"0-1\" for 12 AM to 1 AM) |\n| Payment | id | Unique identifier |\n| Payment | method | Payment method (e.g., Cash, UPI, Credit Card) |\n| Trip Details | tripid | Unique identifier of trips |\n| Trip Details | loc_from | Source Location code |\n| Trip Details | searches | Trip request count |\n| Trip Details | searches_got_estimate | Got an estimated price (1 = user gets an estimate, 0 = does not get an estimate) |\n| Trip Details | searches_for_quotes | Searched for drivers after estimate (1 - searched, 0 - not searched) |\n| Trip Details | searches_got_quotes | Got quotes (1 = Driver allotted, 0 = not allotted) |\n| Trip Details | customer_not_cancelled | Whether customer cancelled or not (1 = Not cancelled) |\n| Trip Details | driver_not_cancelled | Whether driver cancelled or not (1 = Not cancelled) |\n| Trip Details | otp_entered | (1 = OTP entered, 0 = not entered) |\n| Trip Details | end_ride | Whether ride was completed (1 = Completed) |\n| Trips | tripid | Links to Trip Details |\n| Trips | faremethod | Payment method ID, links to Payment table |\n| Trips | fare | Fare amount |\n| Trips | loc_from | Location ID of source |\n| Trips | loc_to | Location ID of destination, links to Assembly table |\n| Trips | driverid | Driver ID |\n| Trips | custid | Customer ID |\n| Trips | distance | Distance in KM from source to destination |\n| Trips | duration | Unique identifier of time periods like duration_id |\n\n#### Points to Note:\n\nWithout this methodology document, the other parts of your case study will not be evaluated.\n\nThis assignment is different from the ones you have solved before. \nMake sure that you treat this case study as a storytelling exercise and not an analysis/visualisation one. This will help you be better prepared for the presentations.\n\nOnce you are done with the analysis and visualisations, there will be many insights at your hand. \nMake sure that you map the right visuals and takeaways with the right audience since some of these insights might be relevant to one group but not to the other group.\n\nDO NOT change the text or numbering of any task, as it may cause problems with grading. Write your solutions to a task in the space provided below the respective task.\n\n#### Tasks to be performed\n\nPresent the overall approach of the analysis.\n\nMention the problem statement and the analysis approach briefly.\n\nTo solve a task, you have to create relevant visualisations and derive appropriate insights from the visualisations.\n\nAdd all the plots, insights, calculated field commands, results and outcomes for a task with proper numbering and sequence in the report.\n\nThe scores for all tasks (except conclusions) comprise both analysis work in the visualisation tool and its outcome in the report.\n\nYou will be awarded a score for a task only if the Tableau/PowerBI analysis is correct and is included in the report along with the subsequent insights.\n\nFinally, draw conclusions based on the analysis.\n\n#### Scoring:\n\nReport Total Marks: 70\n\nSections: 3 sections (10 marks + 40 marks + 20 marks)\n\n#### Analysis and Visualisation\n\n#### 1. Data Preparation\t\t\t\t\t\t\t[10 Marks]\n\n**1.1** Import and Join Tables Correctly [5 Mark]\n\nImport the Namma Yatri dataset into Tableau/Power BI.\n\nEnsure that you correctly join all tables to create a unified dataset for analysis.\n\nVerify the relationships between different tables and confirm that data from various sources is properly aligned for accurate insights.\n\nSolution:",
   "ref": "1.1"
  },
  {
   "t": "md",
   "s": "<your answer here, include all analysis, graphs, results etc> (the length of the solution is not fixed, ie, this box can vary in size)\n\n**1.2** Find and Resolve Inconsistencies [5 Marks]\n\nIdentify and resolve any inconsistencies or issues in the dataset that might affect the analysis.\n\nClean the data to ensure it is structured properly for analysis, removing any irrelevant, duplicate, or erroneous entries.\n\nWhile performing the analysis, create calculated fields as needed to ensure the accuracy and relevance of the insights.\n\nSolution:",
   "ref": "1.2"
  },
  {
   "t": "md",
   "s": "#### 2. Exploratory Data Analysis\t\t\t\t\t[40 Marks]\n\n**2.1** Classify Variables into Categorical and Numerical [2 Marks]\n\nClassify all the variables in the dataset into numerical and categorical types.\n\nSolution:",
   "ref": "2.1"
  },
  {
   "t": "md",
   "s": "**2.2** Analyse Ride Demand Over Time [3 Marks]\n\nExplore the distribution of ride demand over time, including trends across different periods.\n\nIdentify the peak demand periods. Choose an appropriate parameter for demand based on your own understanding.\n\nSolution:",
   "ref": "2.2"
  },
  {
   "t": "md",
   "s": "**2.3** Proportion of Total Revenue from Different Time Periods   [3 Marks]\n\nCalculate the proportion of revenue generated during different time periods and visualise how it contributes to total revenue.\n\nSolution:",
   "ref": "2.3"
  },
  {
   "t": "md",
   "s": "**2.4** Explore the Relationship Between Trip Hour and Revenue   [3 Marks]\n\nInvestigate the correlation between trip hour and total fare.\n\nExplain any trends or patterns that emerge.\n\nSolution:",
   "ref": "2.4"
  },
  {
   "t": "md",
   "s": "**2.5** Examine the Popularity of Different Payment Methods    [3 Marks]\n\nAnalyse the distribution of various payment methods used by customers.\n\nIdentify the most common payment methods and their relationship to ride frequency.\n\nSolution:",
   "ref": "2.5"
  },
  {
   "t": "md",
   "s": "**2.6** Identify High-Performing Zones   [6 Marks] Identify zones with the highest number of rides and revenue generation. Analyse factors contributing to their performance:\n\n**2.6.1** Rides: Identify pickup zones with the highest number of trip requests. [3 marks]\n\nSolution:",
   "ref": "2.6.1"
  },
  {
   "t": "md",
   "s": "**2.6.2** Revenue: Identify pickup zones generating the highest revenue. [3 marks]\n\nSolution:",
   "ref": "2.6.2"
  },
  {
   "t": "md",
   "s": "**2.7** Analyse Ride Time Periods Across Zones [4 Marks]\n\nCompare the trip trends for different time periods across pickup zones.\n\nSolution:",
   "ref": "2.7"
  },
  {
   "t": "md",
   "s": "**2.8** Top Zones with Highest Trip Volume [3 Marks]\n\nIdentify the top 5 pickup zones with the highest total number of completed trips.\n\nAnalyse factors contributing to the higher number of trips.\n\nSolution:",
   "ref": "2.8"
  },
  {
   "t": "md",
   "s": "**2.9** Basic Analytical Tasks [8 Marks]\n\n**2.9.1** What are the percentages of cancellations and successful rides by both driver and customer? [3 marks]\n\nSolution:",
   "ref": "2.9.1"
  },
  {
   "t": "md",
   "s": "**2.9.2** Analyse the percentage of people who completed trips after searching for quotes. Visualise the variation of this ratio by time periods. [5 marks]\n\nSolution:",
   "ref": "2.9.2"
  },
  {
   "t": "md",
   "s": "**2.10** Create a Parameter and Use Filters [5 Marks]\n\nCreate a parameter and use it as a filter on an appropriate subset of the data to interactively analyse and visualise different subsets of the data.\n\nExplain your choice of filter and insights drawn from this step.\n\nSolution:",
   "ref": "2.10"
  },
  {
   "t": "md",
   "s": "#### 3. Conclusion \t\t\t\t\t\t\t[20 Marks]\n\n**3.1** Recommendations for Operational Efficiency    [10 Marks]\n\nBased on your findings from the analysis, provide recommendations on how Namma Yatri can optimise its operations.\n\nThis could include strategies for improving resource allocation, reducing cancellations, or optimising ride durations.\n\nAdd supporting dashboards.\n\nSolution:",
   "ref": "3.1"
  },
  {
   "t": "md",
   "s": "**3.2** Marketing and Operational Strategy Improvements    [10 Marks]\n\nSuggest improvements to Namma Yatri’s marketing or operational strategies based on your analysis.\n\nRecommendations could involve promotional efforts, driver incentives, or regional targeting to increase customer satisfaction and service efficiency.\n\nAdd supporting dashboards.\n\nSolution:",
   "ref": "3.2"
  }
 ],
 "guides": {
  "1.1": {
   "vi": {
    "think": "Gộp 5 bảng thành một bảng phẳng để mọi câu sau chỉ phải đọc một nơi.",
    "steps": [
     "Trip_Details (2.161 yêu cầu) là bảng gốc, vì nó chứa cả chuyến bị huỷ.",
     "Nối Trips (983 chuyến hoàn thành) vào theo tripid, dùng left join để không mất yêu cầu bị huỷ.",
     "Đổi các mã số thành chữ: Duration → khung giờ, Payment → hình thức thanh toán, Assembly → tên khu (nối hai lần: khu đón và khu trả).",
     "Kết quả: 2.161 dòng × 21 cột, ví dụ chuyến 1 từ Gandhi Nagar đi Byatarayanapura, trả bằng UPI, 776 rupee."
    ],
    "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\nx = pd.read_excel('/tmp/asg/all/4/Dataset and Starter Resources/nammayatri.xlsx', sheet_name=None)\ntd, tr, du, asm, pay = x['Trip_Details'], x['Trips'], x['Duration'], x['Assembly'], x['Payment']\nfor k, v in x.items(): print(f'{k:13s}', v.shape)\n# nối: Trips (983 chuyến hoàn thành) <- Trip_Details theo tripid; mã giờ, mã thanh toán, mã khu\ndf = (td.merge(tr.drop(columns='loc_from'), on='tripid', how='left')\n        .merge(du.rename(columns={'id': 'duration', 'duration': 'hour_slot'}), on='duration', how='left')\n        .merge(pay.rename(columns={'id': 'faremethod', 'method': 'payment'}), on='faremethod', how='left')\n        .merge(asm.rename(columns={'ID': 'loc_from', 'Assembly': 'pickup_zone'}), on='loc_from', how='left')\n        .merge(asm.rename(columns={'ID': 'loc_to', 'Assembly': 'drop_zone'}), on='loc_to', how='left'))\nprint(df.shape)\nprint(df.loc[df['end_ride'] == 1, ['tripid', 'pickup_zone', 'drop_zone', 'payment', 'fare', 'distance', 'hour_slot']].head(5).to_string(index=False))",
    "lotus": "Như ghép sổ booking (mọi yêu cầu đặt lịch) với sổ hoá đơn (chỉ những lượt đã làm xong), rồi thay mã chi nhánh/phương thức thanh toán bằng tên cho dễ đọc.",
    "trap": "Dùng inner join: bạn mất hơn 1.100 yêu cầu bị huỷ và mọi tỷ lệ huỷ sau đó sai.",
    "read": [
     "Dòng đầu in kích thước từng bảng: Trip_Details 2.161 dòng, Trips 983 dòng, ba bảng mã nhỏ (24, 37, 4 dòng).",
     "Dòng «(2161, 21)» là bảng sau khi nối: số dòng không đổi nghĩa là left join không làm mất hay nhân đôi yêu cầu nào.",
     "Năm dòng mẫu cho thấy mã đã thành chữ: nhìn cột pickup_zone, drop_zone, payment thay vì số."
    ],
    "remark": "Sau khi nối còn nguyên 2.161 dòng nên không mất yêu cầu nào; 21 cột gồm cả thông tin tìm kiếm lẫn thông tin chuyến, và các mã đã đổi thành tên khu, giờ, cách thanh toán.",
    "howRemark": [
     "Số dòng sau nối phải bằng số dòng bảng gốc (2.161).",
     "Mở vài dòng mẫu và kiểm tra tên đã thay mã đúng chưa.",
     "Viết một câu: nối theo khoá nào, kiểu join gì, vì sao."
    ]
   },
   "en": {
    "think": "Merge five tables into one flat table so every later task reads from a single place.",
    "steps": [
     "Trip_Details (2,161 requests) is the base because it includes cancelled ones.",
     "Join Trips (983 completed rides) by tripid with a left join so cancelled requests stay.",
     "Turn codes into words: Duration → time slot, Payment → method, Assembly → zone name (joined twice: pickup and drop).",
     "Result: 2,161 rows × 21 columns, e.g. trip 1 from Gandhi Nagar to Byatarayanapura, paid by UPI, 776 rupees."
    ],
    "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\nx = pd.read_excel('/tmp/asg/all/4/Dataset and Starter Resources/nammayatri.xlsx', sheet_name=None)\ntd, tr, du, asm, pay = x['Trip_Details'], x['Trips'], x['Duration'], x['Assembly'], x['Payment']\nfor k, v in x.items(): print(f'{k:13s}', v.shape)\n# nối: Trips (983 chuyến hoàn thành) <- Trip_Details theo tripid; mã giờ, mã thanh toán, mã khu\ndf = (td.merge(tr.drop(columns='loc_from'), on='tripid', how='left')\n        .merge(du.rename(columns={'id': 'duration', 'duration': 'hour_slot'}), on='duration', how='left')\n        .merge(pay.rename(columns={'id': 'faremethod', 'method': 'payment'}), on='faremethod', how='left')\n        .merge(asm.rename(columns={'ID': 'loc_from', 'Assembly': 'pickup_zone'}), on='loc_from', how='left')\n        .merge(asm.rename(columns={'ID': 'loc_to', 'Assembly': 'drop_zone'}), on='loc_to', how='left'))\nprint(df.shape)\nprint(df.loc[df['end_ride'] == 1, ['tripid', 'pickup_zone', 'drop_zone', 'payment', 'fare', 'distance', 'hour_slot']].head(5).to_string(index=False))",
    "lotus": "Like joining the booking log (every request) with the invoice log (only finished sessions), then replacing branch/payment codes with names.",
    "trap": "An inner join drops 1,100+ cancelled requests and every cancellation rate afterwards is wrong.",
    "read": [
     "The first lines print each table's shape: Trip_Details 2,161 rows, Trips 983, three small code tables (24, 37, 4 rows).",
     "“(2161, 21)” is the joined table: same row count means the left join lost or duplicated no request.",
     "Five sample rows show codes turned into words: look at pickup_zone, drop_zone, payment instead of numbers."
    ],
    "remark": "After the join all 2,161 rows remain, so no request was lost; the 21 columns hold both search and trip info, with codes replaced by zone, hour and payment names.",
    "howRemark": [
     "Row count after the join must equal the base table (2,161).",
     "Open a few sample rows and check names replaced the codes correctly.",
     "Write one sentence: which key, which join type, why."
    ]
   }
  },
  "1.2": {
   "vi": {
    "think": "Kiểm tra dữ liệu có sạch và logic không trước khi phân tích.",
    "steps": [
     "Đếm ô trống và dòng trùng ở từng bảng: đều bằng 0.",
     "tripid duy nhất, và mọi chuyến trong Trips đều có trong Trip_Details.",
     "Đối chiếu logic: 983 chuyến hoàn thành = đúng số dòng Trips; không có chuyến hoàn thành nào bị huỷ; chuyến chưa xong không có fare.",
     "Còn một điểm cần nhớ: 70 yêu cầu đón ở «Other Assemblies» (gom nhóm), khi xếp hạng khu nên bỏ dòng này.",
     "Tạo cột mới: hour = mã khung giờ − 1, và period gồm 4 khung (đêm, sáng, chiều, tối, mỗi khung gần 250 chuyến)."
    ],
    "code": "print('ô trống từng bảng:', {k: int(v.isna().sum().sum()) for k, v in x.items()}, '| dòng trùng:', {k: int(v.duplicated().sum()) for k, v in x.items()})\nprint('tripid là duy nhất:', td.tripid.is_unique, tr.tripid.is_unique, '| mọi chuyến của Trips có trong Trip_Details:', set(tr.tripid) <= set(td.tripid))\nprint('chuyến hoàn thành (end_ride=1):', int(td.end_ride.sum()), '= số dòng Trips:', len(tr))\n# kiểm tra logic: chuyến hoàn thành mà bị huỷ?\ndone = df[df.end_ride == 1]\nprint('hoàn thành nhưng khách huỷ:', int((done.customer_not_cancelled == 0).sum()), '| tài xế huỷ:', int((done.driver_not_cancelled == 0).sum()))\nprint('chuyến chưa hoàn thành có fare:', int(df[df.end_ride == 0].fare.notna().sum()))\nprint('khu xuất phát = Other Assemblies:', int((df.pickup_zone == 'Other Assemblies').sum()))\ndf['hour'] = df['duration'] - 1\ndf['period'] = pd.cut(df['hour'], [-1, 5, 11, 17, 23], labels=['Đêm 0-6h', 'Sáng 6-12h', 'Chiều 12-18h', 'Tối 18-24h'])\nprint(df.loc[df.end_ride == 1, 'period'].value_counts().sort_index().to_string())",
    "lotus": "Như đối chiếu sổ trước khi chốt tháng: không dòng trống, không hoá đơn trùng, mọi hoá đơn đều có booking tương ứng.",
    "trap": "Giữ «Other Assemblies» trong bảng xếp hạng khu rồi kết luận đó là khu tốt nhất.",
    "read": [
     "Hai dòng đầu: toàn bộ giá trị 0 nghĩa là không ô trống, không dòng trùng.",
     "«983 = 983» là phép đối chiếu: số chuyến hoàn thành khớp số dòng Trips.",
     "Các số 0 ở «hoàn thành nhưng bị huỷ» là bằng chứng dữ liệu không mâu thuẫn.",
     "Bảng cuối là số chuyến của 4 khung giờ, gần bằng nhau."
    ],
    "remark": "Dữ liệu sạch: không trống, không trùng, các cờ nhất quán (983 chuyến hoàn thành đều không bị huỷ). Chỉ cần lưu ý nhóm «Other Assemblies» gồm 70 yêu cầu, và mỗi khung giờ có 231–258 chuyến.",
    "howRemark": [
     "Báo từng loại kiểm tra và kết quả (số dòng trống, trùng, mâu thuẫn).",
     "Nếu có điểm cần xử lý, nói bạn đã xử lý thế nào và vì sao.",
     "Nếu không có lỗi, vẫn viết rõ đã kiểm tra những gì."
    ]
   },
   "en": {
    "think": "Check that the data is clean and logical before analysing.",
    "steps": [
     "Count blanks and duplicates in every table: all zero.",
     "tripid is unique and every Trips row exists in Trip_Details.",
     "Logic checks: 983 completed = exactly the Trips row count; no completed ride was cancelled; unfinished rides have no fare.",
     "One thing to remember: 70 requests are from “Other Assemblies” (a bucket), so drop it when ranking zones.",
     "Create new columns: hour = slot id − 1 and a 4-part period (night, morning, afternoon, evening, about 250 rides each)."
    ],
    "code": "print('ô trống từng bảng:', {k: int(v.isna().sum().sum()) for k, v in x.items()}, '| dòng trùng:', {k: int(v.duplicated().sum()) for k, v in x.items()})\nprint('tripid là duy nhất:', td.tripid.is_unique, tr.tripid.is_unique, '| mọi chuyến của Trips có trong Trip_Details:', set(tr.tripid) <= set(td.tripid))\nprint('chuyến hoàn thành (end_ride=1):', int(td.end_ride.sum()), '= số dòng Trips:', len(tr))\n# kiểm tra logic: chuyến hoàn thành mà bị huỷ?\ndone = df[df.end_ride == 1]\nprint('hoàn thành nhưng khách huỷ:', int((done.customer_not_cancelled == 0).sum()), '| tài xế huỷ:', int((done.driver_not_cancelled == 0).sum()))\nprint('chuyến chưa hoàn thành có fare:', int(df[df.end_ride == 0].fare.notna().sum()))\nprint('khu xuất phát = Other Assemblies:', int((df.pickup_zone == 'Other Assemblies').sum()))\ndf['hour'] = df['duration'] - 1\ndf['period'] = pd.cut(df['hour'], [-1, 5, 11, 17, 23], labels=['Đêm 0-6h', 'Sáng 6-12h', 'Chiều 12-18h', 'Tối 18-24h'])\nprint(df.loc[df.end_ride == 1, 'period'].value_counts().sort_index().to_string())",
    "lotus": "Like reconciling the books before month end: no blank lines, no duplicate invoices, every invoice has a booking.",
    "trap": "Leaving “Other Assemblies” in a zone ranking and calling it the best zone.",
    "read": [
     "The first two lines: all zeros mean no blanks and no duplicates.",
     "“983 = 983” is a reconciliation: completed rides match the Trips row count.",
     "Zeros under “completed but cancelled” prove the data does not contradict itself.",
     "The last table is ride counts for the 4 periods, close to each other."
    ],
    "remark": "Data is clean: no blanks, no duplicates, flags consistent (all 983 completed rides were uncancelled). One note: “Other Assemblies” bundles 70 requests, and each period has 231–258 rides.",
    "howRemark": [
     "Report each check and its result (blank, duplicate, contradiction counts).",
     "If something needed fixing, say how you fixed it and why.",
     "If no errors, still state what you checked."
    ]
   }
  },
  "2.1": {
   "vi": {
    "think": "Chia cột thành loại chữ/nhóm (categorical) và loại số đo được (numerical).",
    "steps": [
     "Categorical: khu đón, khu trả, hình thức thanh toán, khung giờ, mã tài xế, mã khách, mã chuyến.",
     "Numerical: fare, distance và các cột đếm/cờ 0-1 như searches, end_ride.",
     "Mã tài xế, mã khách, tripid là số nhưng thực chất là nhãn, không cộng trừ được nên xếp categorical.",
     "describe(): fare trung bình 764, distance trung bình 14,4 km, fare tối đa 1.500."
    ],
    "code": "cat = ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']\nnum = ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']\nprint('Phân loại (categorical):', cat); print('Số (numerical):', num)\nprint(df[['fare', 'distance']].describe().round(1).to_string())",
    "lotus": "Mã khách hàng giống số thẻ thành viên: là số nhưng không ai đi tính trung bình thẻ thành viên.",
    "trap": "Thấy cột là số nên cho là numerical, rồi tính trung bình mã tài xế.",
    "read": [
     "Hai dòng đầu liệt kê các cột theo loại; kiểm tra mỗi cột nằm đúng một nhóm.",
     "Bảng describe chỉ có ý nghĩa với cột số: đọc count, mean, min, max.",
     "fare chạy 44–1.500 và distance 2–27 km, nên không có giá trị âm hay phi lý."
    ],
    "remark": "Có 7 cột phân loại và 10 cột số. Cước trung bình 764, quãng đường trung bình 14,4 km, trung vị gần bằng trung bình nên phân bố khá cân.",
    "howRemark": [
     "Giải thích lý do cho các cột dễ nhầm (mã tài xế, mã khách là số nhưng là nhãn).",
     "Dùng mean và median để nói phân bố lệch hay cân.",
     "Dùng min, max để xác nhận không có giá trị vô lý."
    ]
   },
   "en": {
    "think": "Split columns into categorical (labels) and numerical (measurable).",
    "steps": [
     "Categorical: pickup zone, drop zone, payment method, time slot, driver id, customer id, trip id.",
     "Numerical: fare, distance and the 0/1 count columns like searches, end_ride.",
     "Driver id, customer id, tripid are numbers but really labels, so categorical.",
     "describe(): mean fare 764, mean distance 14.4 km, max fare 1,500."
    ],
    "code": "cat = ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']\nnum = ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']\nprint('Phân loại (categorical):', cat); print('Số (numerical):', num)\nprint(df[['fare', 'distance']].describe().round(1).to_string())",
    "lotus": "A customer id is like a membership card number: numeric, but nobody averages card numbers.",
    "trap": "Treating any numeric-looking column as numerical and averaging driver ids.",
    "read": [
     "The first two lines list columns by type; check each sits in exactly one group.",
     "describe() only makes sense for numeric columns: read count, mean, min, max.",
     "fare spans 44–1,500 and distance 2–27 km, so no negative or absurd values."
    ],
    "remark": "There are 7 categorical and 10 numerical columns. Mean fare is 764 and mean distance 14.4 km; median is close to mean so the distribution is fairly balanced.",
    "howRemark": [
     "Justify the tricky columns (driver id, customer id are numbers but labels).",
     "Use mean vs median to say whether the distribution is skewed.",
     "Use min and max to confirm there are no absurd values."
    ]
   }
  },
  "2.2": {
   "vi": {
    "think": "Nhìn lượng chuyến theo giờ để tìm giờ cao điểm. Chọn «số chuyến hoàn thành» làm thước đo cầu.",
    "steps": [
     "Đếm chuyến hoàn thành theo hour.",
     "Vẽ cột theo 24 giờ.",
     "Top 3: 0h (53 chuyến), 13h (52), 11h (48). Vắng nhất 20h (32).",
     "Đường cầu khá phẳng, không có hai đỉnh sáng/chiều như taxi thành phố thường thấy: nên báo là «không có giờ cao điểm rõ rệt»."
    ],
    "code": "done = df[df.end_ride == 1]\ndemand = done.groupby('hour').size()\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\ndemand.plot(kind='bar', ax=ax[0], title='Số chuyến hoàn thành theo giờ')\npd.Series(td.merge(tr[['tripid', 'duration']], on='tripid', how='left').groupby('duration').size()).reindex(range(1, 25)).plot(ax=ax[1], title='Số chuyến hoàn thành theo mã giờ (Trips.duration)')\nplt.tight_layout()\nprint('3 giờ đông nhất:'); print(demand.sort_values(ascending=False).head(3).to_string())\nprint('giờ vắng nhất:', demand.idxmin(), demand.min(), 'chuyến')",
    "lotus": "Như xem spa đông nhất mấy giờ: ở đây là 0h và 13h, nhưng chênh với giờ khác không quá lớn.",
    "trap": "Kể ra 3 giờ cao điểm như thể chúng vượt trội, trong khi 53 so với 32 là chênh nhẹ.",
    "read": [
     "Biểu đồ trái: trục ngang là giờ trong ngày (0–23), trục dọc là số chuyến hoàn thành.",
     "Tìm cột cao nhất và thấp nhất, rồi xem các cột còn lại có sát chúng không.",
     "Biểu đồ phải là cách đếm theo mã khung giờ để đối chiếu, hình dạng phải giống biểu đồ trái.",
     "Dòng chữ: ba giờ đông nhất và giờ vắng nhất."
    ],
    "remark": "Đông nhất lúc 0h (53 chuyến), 13h (52) và 11h (48); vắng nhất 20h (32). Chênh nhẹ, không có hai đỉnh sáng và chiều rõ rệt.",
    "howRemark": [
     "Chọn thước đo cầu và nói rõ (ở đây: chuyến hoàn thành).",
     "Nêu giờ cao nhất và thấp nhất kèm số.",
     "Nhận xét độ chênh: lớn hay nhỏ so với mức thường.",
     "Đề xuất: không cần tăng người đột biến theo giờ."
    ]
   },
   "en": {
    "think": "Look at ride counts by hour to find peaks. Use completed rides as the demand measure.",
    "steps": [
     "Count completed rides by hour.",
     "Bar chart over 24 hours.",
     "Top 3: 00h (53 rides), 13h (52), 11h (48). Quietest 20h (32).",
     "The curve is fairly flat, no clear morning/evening double peak: say “no sharp peak”."
    ],
    "code": "done = df[df.end_ride == 1]\ndemand = done.groupby('hour').size()\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\ndemand.plot(kind='bar', ax=ax[0], title='Số chuyến hoàn thành theo giờ')\npd.Series(td.merge(tr[['tripid', 'duration']], on='tripid', how='left').groupby('duration').size()).reindex(range(1, 25)).plot(ax=ax[1], title='Số chuyến hoàn thành theo mã giờ (Trips.duration)')\nplt.tight_layout()\nprint('3 giờ đông nhất:'); print(demand.sort_values(ascending=False).head(3).to_string())\nprint('giờ vắng nhất:', demand.idxmin(), demand.min(), 'chuyến')",
    "lotus": "Like asking when the spa is busiest: 00h and 13h here, but not by a lot.",
    "trap": "Calling out three peak hours as if they stand far above the rest when 53 vs 32 is modest.",
    "read": [
     "Left chart: x axis is hour of day (0–23), y axis is completed rides.",
     "Find the tallest and shortest bars, then see how close the rest are.",
     "Right chart counts by the slot code as a cross-check; its shape should match the left.",
     "Text: the three busiest hours and the quietest."
    ],
    "remark": "Busiest at 00h (53 rides), 13h (52) and 11h (48); quietest at 20h (32). The gap is mild, with no clear morning and evening double peak.",
    "howRemark": [
     "Choose the demand measure and say so (here: completed rides).",
     "Quote the highest and lowest hours with numbers.",
     "Judge the spread: large or small versus the usual level.",
     "Suggest: no need for sharp hourly staffing surges."
    ]
   }
  },
  "2.3": {
   "vi": {
    "think": "Tính mỗi khung giờ đóng góp bao nhiêu phần trăm tổng doanh thu.",
    "steps": [
     "Gộp 24 giờ thành 4 khung.",
     "Cộng fare theo khung, chia cho tổng.",
     "Kết quả: đêm 25,2%, sáng 24,9%, chiều 26,6%, tối 23,4%.",
     "Biểu đồ tròn gần như bốn phần bằng nhau: doanh thu không phụ thuộc khung giờ."
    ],
    "code": "rev = done.groupby('period', observed=True)['fare'].sum()\nshare = rev / rev.sum() * 100\nprint(pd.DataFrame({'doanh thu': rev, '% tổng': share.round(1)}).to_string())\nrev.plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo khung giờ')",
    "lotus": "Như xem doanh thu spa chia thế nào giữa sáng, trưa, chiều, tối: gần như đều.",
    "trap": "Kết luận «chiều là khung vàng» chỉ vì 26,6% so với 23,4%.",
    "read": [
     "Bảng: cột «doanh thu» là tiền mỗi khung, cột «% tổng» cộng lại thành 100.",
     "Biểu đồ tròn: so độ lớn bốn miếng với 25% mỗi miếng.",
     "Tìm miếng lớn nhất và nhỏ nhất và xem chênh bao nhiêu điểm phần trăm."
    ],
    "remark": "Chiều đóng góp nhiều nhất (26,6%) và tối ít nhất (23,4%); chênh chỉ 3,2 điểm phần trăm nên doanh thu gần như chia đều bốn khung.",
    "howRemark": [
     "Nêu tỷ trọng của khung cao nhất và thấp nhất.",
     "Đo chênh bằng điểm phần trăm, không bằng cảm giác.",
     "Kết luận: có hay không khung nào nổi trội."
    ]
   },
   "en": {
    "think": "Compute each time period's share of total revenue.",
    "steps": [
     "Group 24 hours into 4 periods.",
     "Sum fare per period, divide by the total.",
     "Result: night 25.2%, morning 24.9%, afternoon 26.6%, evening 23.4%.",
     "The pie is almost four equal slices: revenue does not depend on time of day."
    ],
    "code": "rev = done.groupby('period', observed=True)['fare'].sum()\nshare = rev / rev.sum() * 100\nprint(pd.DataFrame({'doanh thu': rev, '% tổng': share.round(1)}).to_string())\nrev.plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo khung giờ')",
    "lotus": "Like splitting spa revenue across morning, noon, afternoon, evening: nearly even.",
    "trap": "Declaring afternoon the golden slot over a 26.6% vs 23.4% gap.",
    "read": [
     "Table: “doanh thu” is money per period, “% tổng” sums to 100.",
     "Pie chart: compare each slice with 25%.",
     "Find the biggest and smallest slice and how many points apart they are."
    ],
    "remark": "Afternoon contributes most (26.6%) and evening least (23.4%); only a 3.2-point gap, so revenue splits almost evenly across the four periods.",
    "howRemark": [
     "State the share of the top and bottom period.",
     "Measure the gap in percentage points, not by feel.",
     "Conclude whether any period stands out."
    ]
   }
  },
  "2.4": {
   "vi": {
    "think": "Kiểm tra giờ đi có liên quan đến tiền cước không.",
    "steps": [
     "Tính tương quan giờ – fare từng chuyến: −0,01, tức là không có.",
     "Tính tổng doanh thu và fare trung bình theo giờ để xem hình dạng.",
     "Giờ doanh thu cao nhất là 0h (45.019 rupee, 53 chuyến), nhưng do có nhiều chuyến chứ không phải cước cao.",
     "Kết luận: cước phụ thuộc quãng đường, không phụ thuộc giờ."
    ],
    "code": "h = done.groupby('hour')['fare'].agg(['sum', 'mean', 'count'])\nprint('tương quan giờ - fare (từng chuyến):', round(done['hour'].corr(done['fare']), 3))\nprint('tương quan giờ - tổng doanh thu theo giờ:', round(h.reset_index()['hour'].corr(h['sum']), 3))\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\nh['sum'].plot(marker='o', ax=ax[0], title='Tổng doanh thu theo giờ'); h['mean'].plot(marker='o', ax=ax[1], title='Fare trung bình theo giờ')\nprint(h.round(0).sort_values('sum', ascending=False).head(4).to_string())",
    "lotus": "Như hỏi «đặt lúc nào thì hoá đơn cao hơn?»: không, hoá đơn tuỳ dịch vụ khách chọn.",
    "trap": "Nhìn đường doanh thu lên xuống rồi nói «giờ ảnh hưởng cước», trong khi đó chỉ là số chuyến.",
    "read": [
     "Hai số tương quan đầu: gần 0 nghĩa là gần như không có quan hệ (thang −1 đến 1).",
     "Biểu đồ trái là tổng doanh thu theo giờ, phải là cước trung bình theo giờ: so hai hình dạng.",
     "Bảng cuối là 4 giờ có doanh thu cao nhất kèm cước trung bình và số chuyến."
    ],
    "remark": "Tương quan giờ – cước là −0,01 nên giờ không ảnh hưởng cước. Giờ 0h có doanh thu cao nhất (45.019) chủ yếu vì có 53 chuyến, không vì cước cao.",
    "howRemark": [
     "Báo hệ số tương quan và nói nó mạnh hay yếu.",
     "Tách hai thứ dễ nhầm: doanh thu theo giờ (số chuyến) và cước mỗi chuyến.",
     "Kết luận về cách định giá."
    ]
   },
   "en": {
    "think": "Check whether trip hour relates to the fare.",
    "steps": [
     "Per-ride hour–fare correlation: −0.01, meaning none.",
     "Total revenue and mean fare by hour to see the shape.",
     "Top revenue hour is 00h (45,019 rupees, 53 rides): driven by volume, not price.",
     "Conclusion: fare depends on distance, not on hour."
    ],
    "code": "h = done.groupby('hour')['fare'].agg(['sum', 'mean', 'count'])\nprint('tương quan giờ - fare (từng chuyến):', round(done['hour'].corr(done['fare']), 3))\nprint('tương quan giờ - tổng doanh thu theo giờ:', round(h.reset_index()['hour'].corr(h['sum']), 3))\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\nh['sum'].plot(marker='o', ax=ax[0], title='Tổng doanh thu theo giờ'); h['mean'].plot(marker='o', ax=ax[1], title='Fare trung bình theo giờ')\nprint(h.round(0).sort_values('sum', ascending=False).head(4).to_string())",
    "lotus": "Like asking “does booking time change the bill?”: no, the bill depends on the service chosen.",
    "trap": "Reading ups and downs of the revenue line as “hour affects fare” when it is just ride count.",
    "read": [
     "The first correlation numbers: near 0 means almost no relationship (scale −1 to 1).",
     "Left chart is total revenue by hour, right is mean fare by hour: compare the shapes.",
     "The last table shows the 4 top-revenue hours with mean fare and ride count."
    ],
    "remark": "Hour–fare correlation is −0.01, so hour does not affect fare. 00h has the top revenue (45,019) mainly because of 53 rides, not high fares.",
    "howRemark": [
     "Quote the correlation and say if it is strong or weak.",
     "Separate two easily confused things: revenue by hour (ride count) and fare per ride.",
     "Conclude about pricing."
    ]
   }
  },
  "2.5": {
   "vi": {
    "think": "Xem khách trả bằng cách nào và có kiểu thanh toán nào vượt trội không.",
    "steps": [
     "Đếm chuyến theo hình thức thanh toán.",
     "Chia %: thẻ tín dụng 26,7%, UPI 24,7%, thẻ ghi nợ 24,7%, tiền mặt 23,9%.",
     "Biểu đồ cột chồng theo khung giờ để xem có giờ nào chuộng tiền mặt hơn không.",
     "Bốn cách trả gần như bằng nhau."
    ],
    "code": "pm = done['payment'].value_counts()\nprint((pm / pm.sum() * 100).round(1).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(13, 4))\npm.plot(kind='bar', ax=ax[0], title='Số chuyến theo hình thức thanh toán')\ndone.pivot_table(index='period', columns='payment', values='tripid', aggfunc='count', observed=True).plot(kind='bar', stacked=True, ax=ax[1], title='Hình thức thanh toán theo khung giờ')\nplt.tight_layout()",
    "lotus": "Như thống kê khách Lotus Spa trả tiền mặt, chuyển khoản hay quẹt thẻ: ở đây chia đều bốn phần.",
    "trap": "Nói «thẻ tín dụng phổ biến nhất» mà không nói chênh chỉ 3 điểm phần trăm.",
    "read": [
     "Danh sách %: bốn hình thức cộng lại 100%.",
     "Cột trái: số chuyến mỗi hình thức; so độ cao các cột.",
     "Cột chồng phải: mỗi cột là một khung giờ, các màu là cách trả; xem tỷ lệ màu có đổi theo khung không."
    ],
    "remark": "Thẻ tín dụng 26,7%, UPI và thẻ ghi nợ 24,7%, tiền mặt 23,9%: chênh chỉ ~3 điểm, không có cách trả nào áp đảo, và tỷ lệ gần như giống nhau ở mọi khung giờ.",
    "howRemark": [
     "Nêu hình thức đứng đầu và cuối kèm %.",
     "Đo chênh bằng điểm phần trăm.",
     "Kiểm tra theo khung giờ xem có khác không.",
     "Kết luận cho khuyến mãi thanh toán."
    ]
   },
   "en": {
    "think": "See how customers pay and whether any method dominates.",
    "steps": [
     "Count rides per payment method.",
     "Percentages: credit card 26.7%, UPI 24.7%, debit card 24.7%, cash 23.9%.",
     "Stacked bars by time period to see if any slot favours cash.",
     "All four methods are almost equal."
    ],
    "code": "pm = done['payment'].value_counts()\nprint((pm / pm.sum() * 100).round(1).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(13, 4))\npm.plot(kind='bar', ax=ax[0], title='Số chuyến theo hình thức thanh toán')\ndone.pivot_table(index='period', columns='payment', values='tripid', aggfunc='count', observed=True).plot(kind='bar', stacked=True, ax=ax[1], title='Hình thức thanh toán theo khung giờ')\nplt.tight_layout()",
    "lotus": "Like counting Lotus Spa customers who pay cash, transfer or card: four equal quarters.",
    "trap": "Saying “credit card is most popular” without noting the gap is only 3 points.",
    "read": [
     "The % list: four methods sum to 100%.",
     "Left bars: rides per method; compare heights.",
     "Right stacked bars: each bar is a period, colours are methods; see if colour proportions change by period."
    ],
    "remark": "Credit card 26.7%, UPI and debit card 24.7%, cash 23.9%: only ~3 points apart, no method dominates, and the mix is similar in every period.",
    "howRemark": [
     "Name the top and bottom method with %.",
     "Measure the gap in percentage points.",
     "Check by period whether it differs.",
     "Conclude for payment promotions."
    ]
   }
  },
  "2.6.1": {
   "vi": {
    "think": "Tìm khu có nhiều yêu cầu chuyến nhất. Dùng Trip_Details (mọi yêu cầu), không chỉ chuyến hoàn thành.",
    "steps": [
     "Đếm yêu cầu theo loc_from, nối tên khu.",
     "Sắp giảm dần, vẽ cột ngang 10 khu đầu.",
     "Top: Mahadevapura 75, Ramanagaram 74, Gandhi Nagar 71, Yeshwantpur 69."
    ],
    "code": "z = td.groupby('loc_from').size().rename('requests').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').sort_values('requests', ascending=False)\nz.head(10).set_index('Assembly')['requests'].iloc[::-1].plot(kind='barh', title='10 khu có nhiều yêu cầu chuyến nhất')\nprint(z.head(8)[['Assembly', 'requests']].to_string(index=False))",
    "lotus": "Như chi nhánh nhận nhiều lượt đặt lịch nhất, kể cả lịch sau đó bị huỷ.",
    "trap": "Đếm trên bảng Trips: bạn sẽ xếp hạng theo chuyến hoàn thành, là một câu hỏi khác (xem 2.8).",
    "read": [
     "Biểu đồ ngang: mỗi thanh là một khu, thanh dài hơn là nhiều yêu cầu hơn; khu trên cùng là cao nhất.",
     "Bảng 8 khu đầu cho số chính xác.",
     "Nhìn khoảng cách giữa khu thứ nhất và thứ tám để biết top có nổi bật không."
    ],
    "remark": "Mahadevapura (75), Ramanagaram (74), Gandhi Nagar (71) và Yeshwantpur (69) dẫn đầu; khoảng cách từ khu 1 đến khu 8 chỉ khoảng 10 yêu cầu nên nhu cầu phân tán, không dồn vào một khu.",
    "howRemark": [
     "Nêu tên 3–5 khu đầu kèm số.",
     "Nhận xét khoảng cách giữa các khu.",
     "Nhắc đây là số yêu cầu, chưa phải chuyến hoàn thành.",
     "Nhớ bỏ «Other Assemblies» khi nói tên khu."
    ]
   },
   "en": {
    "think": "Find the zones with the most trip requests. Use Trip_Details (all requests), not just completed.",
    "steps": [
     "Count requests by loc_from and join the zone names.",
     "Sort descending, horizontal bar of the top 10.",
     "Top: Mahadevapura 75, Ramanagaram 74, Gandhi Nagar 71, Yeshwantpur 69."
    ],
    "code": "z = td.groupby('loc_from').size().rename('requests').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').sort_values('requests', ascending=False)\nz.head(10).set_index('Assembly')['requests'].iloc[::-1].plot(kind='barh', title='10 khu có nhiều yêu cầu chuyến nhất')\nprint(z.head(8)[['Assembly', 'requests']].to_string(index=False))",
    "lotus": "Like the branch with the most booking requests, including ones later cancelled.",
    "trap": "Counting on the Trips table: you would rank by completed rides, a different question (see 2.8).",
    "read": [
     "Horizontal bars: each bar is a zone, longer = more requests; the top bar is the highest.",
     "The 8-zone table gives exact numbers.",
     "Look at the gap between 1st and 8th to see if the top stands out."
    ],
    "remark": "Mahadevapura (75), Ramanagaram (74), Gandhi Nagar (71) and Yeshwantpur (69) lead; the gap from 1st to 8th is only about 10 requests, so demand is spread out rather than concentrated.",
    "howRemark": [
     "Name the top 3–5 zones with numbers.",
     "Comment on the gaps between zones.",
     "Remind that this counts requests, not completed rides.",
     "Remember to exclude “Other Assemblies” when naming zones."
    ]
   }
  },
  "2.6.2": {
   "vi": {
    "think": "Tìm khu đón mang lại doanh thu cao nhất.",
    "steps": [
     "Trên các chuyến hoàn thành, cộng fare theo khu đón.",
     "Sắp giảm dần: Bangalore South 30.295, Yeshwantpur 29.035, Hebbal 28.097.",
     "Thứ hạng khác với 2.6.1: khu nhiều yêu cầu chưa chắc nhiều tiền, vì cước trung bình mỗi khu khác nhau (Bangalore South 918, Ramanagaram chỉ 672)."
    ],
    "code": "r = done.groupby('pickup_zone')['fare'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)\nr.head(10)['sum'].iloc[::-1].plot(kind='barh', title='10 khu có doanh thu cao nhất')\nprint(r.head(8).round(0).to_string())",
    "lotus": "Chi nhánh đông khách nhất chưa chắc thu nhiều nhất, nếu khách ở đó làm dịch vụ rẻ.",
    "trap": "Gán «đông = nhiều tiền».",
    "read": [
     "Thanh dài là doanh thu cao; bảng bên dưới có tổng (sum), số chuyến (count) và cước trung bình (mean).",
     "So thứ hạng với biểu đồ 2.6.1: khu nào lên hoặc xuống.",
     "Cột mean cho biết doanh thu cao vì đông chuyến hay vì cước cao."
    ],
    "remark": "Bangalore South dẫn đầu với 30.295 (33 chuyến, cước trung bình 918); Ramanagaram có nhiều chuyến hơn (39) nhưng cước trung bình chỉ 672 nên doanh thu thấp hơn. Khu đông chưa chắc là khu nhiều tiền.",
    "howRemark": [
     "Nêu khu doanh thu cao nhất kèm số.",
     "Dùng count và mean để giải thích nguồn doanh thu.",
     "So với thứ hạng theo số yêu cầu và chỉ ra chỗ khác.",
     "Gợi ý hành động theo từng loại khu."
    ]
   },
   "en": {
    "think": "Find the pickup zones with the highest revenue.",
    "steps": [
     "On completed rides, sum fare by pickup zone.",
     "Sorted: Bangalore South 30,295, Yeshwantpur 29,035, Hebbal 28,097.",
     "The ranking differs from 2.6.1: busy is not always rich, since mean fare varies (Bangalore South 918, Ramanagaram just 672)."
    ],
    "code": "r = done.groupby('pickup_zone')['fare'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)\nr.head(10)['sum'].iloc[::-1].plot(kind='barh', title='10 khu có doanh thu cao nhất')\nprint(r.head(8).round(0).to_string())",
    "lotus": "The busiest branch need not earn the most if its customers pick cheaper services.",
    "trap": "Assuming busy = high revenue.",
    "read": [
     "Long bar = high revenue; the table gives total (sum), rides (count) and mean fare (mean).",
     "Compare the order with chart 2.6.1: which zones moved up or down.",
     "The mean column shows whether revenue comes from many rides or high fares."
    ],
    "remark": "Bangalore South leads with 30,295 (33 rides, mean fare 918); Ramanagaram has more rides (39) but a mean of only 672, hence lower revenue. A busy zone is not necessarily a rich one.",
    "howRemark": [
     "Name the top revenue zone with its figure.",
     "Use count and mean to explain the source of revenue.",
     "Compare with the request ranking and point out differences.",
     "Suggest actions per type of zone."
    ]
   }
  },
  "2.7": {
   "vi": {
    "think": "So sánh các khung giờ giữa các khu đón.",
    "steps": [
     "Bảng chéo khu × khung giờ, đếm chuyến hoàn thành.",
     "Lấy 12 khu nhiều chuyến nhất, vẽ heatmap.",
     "Ví dụ: Ramanagaram đông nhất buổi tối (14), Bangalore South đông nhất buổi chiều (13), Dasarahalli đông nhất buổi sáng (11).",
     "Mỗi khu có khung giờ mạnh riêng, nên lịch tài xế nên chia theo khu."
    ],
    "code": "pv = done.pivot_table(index='pickup_zone', columns='period', values='tripid', aggfunc='count', observed=True).fillna(0)\ntop = pv.sum(axis=1).sort_values(ascending=False).head(12).index\nsns.heatmap(pv.loc[top], annot=True, fmt='.0f', cmap='YlOrRd')\nprint(pv.loc[top[:6]].astype(int).to_string())",
    "lotus": "Như xem chi nhánh nào đông vào buổi nào để xếp nhân viên.",
    "trap": "Mỗi ô chỉ có vài chuyến, nên chênh 1–2 chuyến chỉ là ngẫu nhiên.",
    "read": [
     "Mỗi hàng là một khu, mỗi cột là một khung giờ, mỗi ô là số chuyến; màu đậm là nhiều.",
     "Đọc theo hàng để biết khung mạnh của một khu, theo cột để biết khu nào mạnh vào khung đó.",
     "Bảng chữ liệt kê 6 khu đầu để bạn kiểm số trong ô."
    ],
    "remark": "Mỗi khu có khung mạnh riêng: Ramanagaram buổi tối (14), Bangalore South buổi chiều (13), Dasarahalli buổi sáng (11). Nhưng mỗi ô chỉ vài chuyến nên chỉ nên kết luận ở chỗ chênh rõ.",
    "howRemark": [
     "Chọn 2–3 khu và nêu khung mạnh nhất của từng khu kèm số.",
     "Nhắc cỡ mẫu nhỏ mỗi ô.",
     "Đề xuất xếp tài xế theo khu và khung giờ."
    ]
   },
   "en": {
    "think": "Compare time periods across pickup zones.",
    "steps": [
     "Cross-tab zone × period of completed rides.",
     "Take the 12 busiest zones and draw a heatmap.",
     "E.g. Ramanagaram peaks in the evening (14), Bangalore South in the afternoon (13), Dasarahalli in the morning (11).",
     "Each zone has its own strong slot, so schedule drivers per zone."
    ],
    "code": "pv = done.pivot_table(index='pickup_zone', columns='period', values='tripid', aggfunc='count', observed=True).fillna(0)\ntop = pv.sum(axis=1).sort_values(ascending=False).head(12).index\nsns.heatmap(pv.loc[top], annot=True, fmt='.0f', cmap='YlOrRd')\nprint(pv.loc[top[:6]].astype(int).to_string())",
    "lotus": "Like seeing which branch is busy at which time to roster staff.",
    "trap": "Each cell holds only a few rides, so 1–2 differences are noise.",
    "read": [
     "Each row is a zone, each column a period, each cell a ride count; darker = more.",
     "Read across a row for a zone's strong period, down a column for the zones strong in that period.",
     "The text table lists 6 zones so you can check the cell numbers."
    ],
    "remark": "Each zone has its own strong period: Ramanagaram in the evening (14), Bangalore South in the afternoon (13), Dasarahalli in the morning (11). But each cell holds only a few rides, so conclude only where the gap is clear.",
    "howRemark": [
     "Pick 2–3 zones and name each one's strongest period with numbers.",
     "Note the small sample per cell.",
     "Suggest rostering drivers by zone and period."
    ]
   }
  },
  "2.8": {
   "vi": {
    "think": "Chọn 5 khu có nhiều chuyến hoàn thành nhất rồi tìm lý do.",
    "steps": [
     "Đếm chuyến hoàn thành theo khu, lấy 5 khu đầu: Ramanagaram 39, Yeshwantpur 36, Dasarahalli 33, Bangalore South 33, Gandhi Nagar 32.",
     "Bảng so sánh doanh thu, quãng đường và cước trung bình.",
     "Tính % yêu cầu của khu được hoàn thành: Bangalore South 57,9%, Ramanagaram 52,7%, Gandhi Nagar chỉ 45,1%.",
     "Lý do: 4 trong 5 khu top vừa có nhiều yêu cầu vừa hoàn thành cao hơn mức chung 45,5% (Gandhi Nagar chỉ nhỉnh vì có rất nhiều yêu cầu)."
    ],
    "code": "t5 = done.groupby('pickup_zone').agg(trips=('tripid', 'count'), revenue=('fare', 'sum'), avg_distance=('distance', 'mean'), avg_fare=('fare', 'mean')).sort_values('trips', ascending=False).head(5)\nprint(t5.round(1).to_string())\nt5['trips'].plot(kind='bar', title='5 khu có nhiều chuyến hoàn thành nhất')\n# so sánh với tỷ lệ hoàn thành của chính khu đó\nrate = td.groupby('loc_from').agg(req=('tripid', 'count'), done=('end_ride', 'sum')).merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')\nprint((rate.loc[t5.index, 'done'] / rate.loc[t5.index, 'req'] * 100).round(1).rename('% yêu cầu hoàn thành').to_string())",
    "lotus": "Như chi nhánh có nhiều lượt làm xong nhất vì vừa đông đặt lịch, vừa ít bị huỷ.",
    "trap": "Giải thích bằng «khu đó đông dân» khi dữ liệu không có dân số.",
    "read": [
     "Bảng đầu: 5 khu top với chuyến, doanh thu, quãng đường và cước trung bình.",
     "Bảng thứ hai: % yêu cầu của khu được hoàn thành, so với mức chung 45,5%.",
     "Biểu đồ cột: độ cao 5 khu."
    ],
    "remark": "Ramanagaram dẫn đầu (39 chuyến), tiếp theo Yeshwantpur (36). Bốn trong năm khu hoàn thành trên mức chung 45,5% (Bangalore South 57,9%); Gandhi Nagar chỉ 45,1% nên nằm trong top nhờ lượng yêu cầu lớn.",
    "howRemark": [
     "Nêu top 5 kèm số chuyến.",
     "Tìm yếu tố giải thích trong dữ liệu có sẵn (tỷ lệ hoàn thành, cước, quãng đường).",
     "Nhắc điều dữ liệu không nói được (dân số, đối thủ).",
     "Gợi ý học từ khu hoàn thành tốt."
    ]
   },
   "en": {
    "think": "Pick the top 5 zones by completed rides and find out why.",
    "steps": [
     "Count completed rides by zone, top 5: Ramanagaram 39, Yeshwantpur 36, Dasarahalli 33, Bangalore South 33, Gandhi Nagar 32.",
     "Comparison table of revenue, distance and mean fare.",
     "Completion rate per zone: Bangalore South 57.9%, Ramanagaram 52.7%, Gandhi Nagar only 45.1%.",
     "Reason: 4 of the 5 top zones have many requests and complete above the 45.5% average (Gandhi Nagar is there on sheer request volume)."
    ],
    "code": "t5 = done.groupby('pickup_zone').agg(trips=('tripid', 'count'), revenue=('fare', 'sum'), avg_distance=('distance', 'mean'), avg_fare=('fare', 'mean')).sort_values('trips', ascending=False).head(5)\nprint(t5.round(1).to_string())\nt5['trips'].plot(kind='bar', title='5 khu có nhiều chuyến hoàn thành nhất')\n# so sánh với tỷ lệ hoàn thành của chính khu đó\nrate = td.groupby('loc_from').agg(req=('tripid', 'count'), done=('end_ride', 'sum')).merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')\nprint((rate.loc[t5.index, 'done'] / rate.loc[t5.index, 'req'] * 100).round(1).rename('% yêu cầu hoàn thành').to_string())",
    "lotus": "Like the branch with the most finished sessions because many bookings and few cancellations.",
    "trap": "Explaining with “it is a populous area” when the data has no population.",
    "read": [
     "First table: 5 top zones with rides, revenue, distance and mean fare.",
     "Second table: share of the zone's requests completed, vs the overall 45.5%.",
     "Bar chart: heights of the 5 zones."
    ],
    "remark": "Ramanagaram leads (39 rides), then Yeshwantpur (36). Four of five zones complete above the 45.5% average (Bangalore South 57.9%); Gandhi Nagar is only 45.1% and ranks on sheer request volume.",
    "howRemark": [
     "Name the top 5 with ride counts.",
     "Find explanations in available data (completion rate, fare, distance).",
     "State what the data cannot say (population, competition).",
     "Suggest learning from the best-completing zone."
    ]
   }
  },
  "2.9.1": {
   "vi": {
    "think": "Tính % yêu cầu bị khách huỷ, bị tài xế huỷ và được hoàn thành.",
    "steps": [
     "Mẫu số là toàn bộ 2.161 yêu cầu.",
     "Khách huỷ 48,2%, tài xế huỷ 47,2%, hoàn thành 45,5%.",
     "Ba số cộng hơn 100% vì các cờ này chồng nhau (một yêu cầu có thể bị cả hai huỷ ở các bước khác nhau), nên đừng đặt chung một biểu đồ tròn.",
     "Nghĩa là gần một nửa yêu cầu mất đi vì mỗi bên."
    ],
    "code": "n = len(td)\ncust = (td.customer_not_cancelled == 0).sum(); drv = (td.driver_not_cancelled == 0).sum(); ok = td.end_ride.sum()\nout = pd.Series({'Khách huỷ': cust / n * 100, 'Tài xế huỷ': drv / n * 100, 'Hoàn thành': ok / n * 100}).round(1)\nprint(out.to_string(), '\\n(tổng yêu cầu:', n, ')')\nout.plot(kind='bar', color=['#b5543c', '#d99a3e', '#2f6f5e'], title='% yêu cầu: huỷ và hoàn thành')",
    "lotus": "Như tỷ lệ khách tự huỷ lịch, spa huỷ lịch và lượt làm xong.",
    "trap": "Vẽ biểu đồ tròn ba phần cho tổng 100%: các cờ chồng nhau nên sai.",
    "read": [
     "Ba dòng %: mẫu số là mọi yêu cầu (2.161).",
     "Cộng ba số được hơn 100%, đó là dấu hiệu các nhóm chồng nhau.",
     "Biểu đồ cột có 3 cột; đừng đọc như phần của một cái bánh."
    ],
    "remark": "Khách huỷ 48,2%, tài xế huỷ 47,2%, hoàn thành 45,5%. Gần một nửa yêu cầu bị mỗi bên huỷ nên huỷ chuyến là chỗ rò rỉ lớn nhất của dịch vụ.",
    "howRemark": [
     "Nêu từng tỷ lệ kèm mẫu số.",
     "Giải thích vì sao tổng vượt 100% (cờ chồng nhau).",
     "Nói tác động: mất bao nhiêu yêu cầu.",
     "Đề xuất giảm huỷ từ cả hai phía."
    ]
   },
   "en": {
    "think": "Compute the % of requests cancelled by customer, by driver and completed.",
    "steps": [
     "The denominator is all 2,161 requests.",
     "Customer cancelled 48.2%, driver cancelled 47.2%, completed 45.5%.",
     "They add to more than 100% because the flags overlap, so do not put them in one pie.",
     "Roughly half of requests are lost to each side."
    ],
    "code": "n = len(td)\ncust = (td.customer_not_cancelled == 0).sum(); drv = (td.driver_not_cancelled == 0).sum(); ok = td.end_ride.sum()\nout = pd.Series({'Khách huỷ': cust / n * 100, 'Tài xế huỷ': drv / n * 100, 'Hoàn thành': ok / n * 100}).round(1)\nprint(out.to_string(), '\\n(tổng yêu cầu:', n, ')')\nout.plot(kind='bar', color=['#b5543c', '#d99a3e', '#2f6f5e'], title='% yêu cầu: huỷ và hoàn thành')",
    "lotus": "Like the share of bookings cancelled by customers, by the spa, and sessions completed.",
    "trap": "Drawing a three-slice pie that must sum to 100%: the flags overlap.",
    "read": [
     "Three % lines: the denominator is all requests (2,161).",
     "They sum to more than 100%, a sign the groups overlap.",
     "The bar chart has 3 bars; do not read it as slices of one pie."
    ],
    "remark": "Customers cancelled 48.2%, drivers 47.2%, completed 45.5%. Nearly half of requests are cancelled by each side, so cancellations are the service's biggest leak.",
    "howRemark": [
     "State each rate with its denominator.",
     "Explain why the total exceeds 100% (overlapping flags).",
     "State the impact: how many requests are lost.",
     "Propose reducing cancellations on both sides."
    ]
   }
  },
  "2.9.2": {
   "vi": {
    "think": "Trong số người đã hỏi báo giá, bao nhiêu % hoàn thành chuyến, và biến động ra sao.",
    "steps": [
     "Lọc searches_for_quotes = 1: 1.455 yêu cầu, 983 hoàn thành, tức 67,6%.",
     "Giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung. Vì vậy ta chia theo khu đón.",
     "Tỷ lệ theo khu dao động từ 47,5% (Anekal) đến 85,7% (Yeshwantpur).",
     "Khi làm trên Tableau/Power BI, hãy ghi rõ giới hạn dữ liệu này trong báo cáo."
    ],
    "code": "q = td[td.searches_for_quotes == 1]\nprint('Tìm báo giá:', len(q), '| hoàn thành:', int(q.end_ride.sum()), '|', round(q.end_ride.mean() * 100, 1), '%')\nprint('Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.')\n# thay vào đó chia theo khu xuất phát (có đủ cho mọi yêu cầu)\nzr = (q.groupby('loc_from')['end_ride'].mean() * 100).rename('pct').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')['pct'].sort_values()\nprint(zr.round(1).tail(3).to_string(), '\\n...', '\\n', zr.round(1).head(3).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(13, 4))\npd.Series({'Tìm báo giá': len(q), 'Hoàn thành': int(q.end_ride.sum())}).plot(kind='bar', ax=ax[0], title='Tìm báo giá -> hoàn thành')\nzr.plot(kind='hist', bins=10, ax=ax[1], title='% hoàn thành sau khi tìm báo giá, theo khu')\nplt.tight_layout()",
    "lotus": "Như trong số khách đã hỏi giá liệu trình, bao nhiêu người cuối cùng làm.",
    "trap": "Chia theo khung giờ rồi bỏ qua việc chuyến huỷ không có giờ, ra tỷ lệ 100% giả.",
    "read": [
     "Dòng đầu: 1.455 người hỏi báo giá, 983 hoàn thành, 67,6%.",
     "Biểu đồ trái: hai cột, cột «hoàn thành» thấp hơn cột «tìm báo giá».",
     "Biểu đồ phải: mỗi cột là số khu có tỷ lệ hoàn thành trong khoảng đó; xem hình dạng tập trung ở đâu.",
     "Dòng cuối bảng cho khu thấp nhất và cao nhất."
    ],
    "remark": "Trong số người hỏi báo giá, 67,6% hoàn thành. Tỷ lệ giữa các khu rộng, từ 47,5% (Anekal) đến 85,7% (Yeshwantpur), phần lớn quanh 65–75%. Chuyến huỷ không có giờ nên không chia theo khung giờ được.",
    "howRemark": [
     "Nêu tỷ lệ chung kèm hai số tạo ra nó.",
     "Nêu khu thấp nhất và cao nhất.",
     "Nói rõ giới hạn dữ liệu (không có giờ cho chuyến huỷ).",
     "Gợi ý tìm hiểu nguyên nhân ở khu thấp."
    ]
   },
   "en": {
    "think": "Of people who asked for quotes, what % completed a ride, and how does it vary.",
    "steps": [
     "Filter searches_for_quotes = 1: 1,455 requests, 983 completed, i.e. 67.6%.",
     "Hour exists only in Trips (completed rides), so cancelled ones have no time slot. Hence we split by pickup zone.",
     "The rate by zone ranges from 47.5% (Anekal) to 85.7% (Yeshwantpur).",
     "In Tableau/Power BI, state this data limit in the report."
    ],
    "code": "q = td[td.searches_for_quotes == 1]\nprint('Tìm báo giá:', len(q), '| hoàn thành:', int(q.end_ride.sum()), '|', round(q.end_ride.mean() * 100, 1), '%')\nprint('Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.')\n# thay vào đó chia theo khu xuất phát (có đủ cho mọi yêu cầu)\nzr = (q.groupby('loc_from')['end_ride'].mean() * 100).rename('pct').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')['pct'].sort_values()\nprint(zr.round(1).tail(3).to_string(), '\\n...', '\\n', zr.round(1).head(3).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(13, 4))\npd.Series({'Tìm báo giá': len(q), 'Hoàn thành': int(q.end_ride.sum())}).plot(kind='bar', ax=ax[0], title='Tìm báo giá -> hoàn thành')\nzr.plot(kind='hist', bins=10, ax=ax[1], title='% hoàn thành sau khi tìm báo giá, theo khu')\nplt.tight_layout()",
    "lotus": "Like how many people who asked the price of a treatment finally booked it.",
    "trap": "Splitting by hour while ignoring that cancelled rides have no hour: a fake 100%.",
    "read": [
     "First line: 1,455 asked for quotes, 983 completed, 67.6%.",
     "Left chart: two bars, “completed” lower than “asked for quote”.",
     "Right chart: each bar counts zones with a completion rate in that range; see where it clusters.",
     "The last table lines give the lowest and highest zones."
    ],
    "remark": "Among those who asked for quotes, 67.6% completed. Rates vary widely by zone, from 47.5% (Anekal) to 85.7% (Yeshwantpur), mostly around 65–75%. Cancelled rides have no hour, so a split by hour is impossible.",
    "howRemark": [
     "State the overall rate with the two numbers behind it.",
     "Name the lowest and highest zones.",
     "State the data limit (no hour for cancelled rides).",
     "Suggest investigating the low zones."
    ]
   }
  },
  "2.10": {
   "vi": {
    "think": "Tạo một tham số để lọc, ví dụ chọn một khu và xem riêng khu đó.",
    "steps": [
     "Đặt tham số khu = Hebbal (đổi được).",
     "Lọc chuyến hoàn thành theo tham số.",
     "Hebbal có 31 chuyến, doanh thu 28.097, cước trung bình 906, cao hơn mức chung 764.",
     "Theo khung giờ: nhiều nhất buổi chiều (11 chuyến, 9.433)."
    ],
    "code": "zone_pick = 'Hebbal'   # tham số: chọn khu để lọc\nsub = done[done.pickup_zone == zone_pick]\nprint(f'Khu {zone_pick}:', len(sub), 'chuyến hoàn thành, doanh thu', int(sub.fare.sum()), ', fare trung bình', round(sub.fare.mean(), 0))\nsub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).plot(kind='bar', title=f'{zone_pick}: chuyến và doanh thu theo khung giờ')\nprint(sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).to_string())",
    "lotus": "Như một công tắc «chọn chi nhánh» trên báo cáo của chị Lan, chọn Quận 3 thì cả bảng đổi theo.",
    "trap": "Lọc xong mà quên ghi lý do chọn khu đó (đề bài yêu cầu giải thích).",
    "read": [
     "Dòng đầu: số chuyến, doanh thu và cước trung bình của khu được chọn.",
     "Biểu đồ: cột theo khung giờ cho khu đó.",
     "Đổi tên khu trong code rồi chạy lại để xem khu khác."
    ],
    "remark": "Hebbal có 31 chuyến, doanh thu 28.097 và cước trung bình 906, cao hơn mức chung 764; đông nhất buổi chiều (11 chuyến, 9.433). Chọn Hebbal vì nằm trong top doanh thu của 2.6.2.",
    "howRemark": [
     "Giải thích vì sao chọn khu (đề bài yêu cầu).",
     "So các số của khu với mức chung.",
     "Chỉ ra khung giờ mạnh của khu.",
     "Nói lọc này giúp quyết định gì."
    ]
   },
   "en": {
    "think": "Create a parameter and use it as a filter, e.g. pick a zone and view only that zone.",
    "steps": [
     "Set zone = Hebbal (changeable).",
     "Filter completed rides by the parameter.",
     "Hebbal: 31 rides, revenue 28,097, mean fare 906, higher than the overall 764.",
     "By period: afternoon is highest (11 rides, 9,433)."
    ],
    "code": "zone_pick = 'Hebbal'   # tham số: chọn khu để lọc\nsub = done[done.pickup_zone == zone_pick]\nprint(f'Khu {zone_pick}:', len(sub), 'chuyến hoàn thành, doanh thu', int(sub.fare.sum()), ', fare trung bình', round(sub.fare.mean(), 0))\nsub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).plot(kind='bar', title=f'{zone_pick}: chuyến và doanh thu theo khung giờ')\nprint(sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).to_string())",
    "lotus": "Like a “choose branch” switch on Lan's report: pick District 3 and the whole table follows.",
    "trap": "Filtering and forgetting to explain why that zone was chosen (the task asks for it).",
    "read": [
     "First line: rides, revenue and mean fare of the chosen zone.",
     "Chart: bars by period for that zone.",
     "Change the zone name in code and rerun to see another zone."
    ],
    "remark": "Hebbal has 31 rides, revenue 28,097 and mean fare 906, above the overall 764; busiest in the afternoon (11 rides, 9,433). Hebbal was chosen because it is in the top revenue of 2.6.2.",
    "howRemark": [
     "Explain why you chose the zone (the task asks).",
     "Compare the zone's numbers with the overall.",
     "Point out the zone's strong period.",
     "Say what decision this filter supports."
    ]
   }
  },
  "3.1": {
   "vi": {
    "think": "Viết khuyến nghị vận hành dựa trên số thật vừa tìm được.",
    "steps": [
     "Phễu: tìm kiếm 100% → có ước tính 81,4% → hỏi báo giá 67,3% → có báo giá 59,1% → nhập OTP 45,5% → hoàn thành 45,5%.",
     "Mất lớn nhất ở hai chỗ: sau báo giá (59,1% → 45,5%) và huỷ từ cả hai phía (~48%).",
     "Khuyến nghị: giảm huỷ (phạt/thưởng tài xế, rút ngắn thời gian chờ); điều tài xế theo khu và khung giờ mạnh (2.7); không tăng giá theo giờ vì cước không phụ thuộc giờ (2.4)."
    ],
    "code": "funnel = td[['searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'otp_entered', 'end_ride']].sum()\nprint((funnel / funnel['searches'] * 100).round(1).to_string())\nprint('rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách', round((td.customer_not_cancelled == 0).mean() * 100, 1), '%, huỷ bởi tài xế', round((td.driver_not_cancelled == 0).mean() * 100, 1), '%')\n(funnel / funnel['searches'] * 100).plot(kind='bar', title='Phễu chuyển đổi (% so với số tìm kiếm)')",
    "lotus": "Như chị Lan đọc phễu từ khách hỏi đến khách làm xong và chọn chỗ rò rỉ nhiều nhất để sửa trước.",
    "trap": "Khuyến nghị chung chung không gắn số nào.",
    "read": [
     "Danh sách %: mỗi bước so với 100% là số tìm kiếm; đọc từ trên xuống.",
     "Tìm bước tụt mạnh nhất: 59,1% → 45,5% (sau khi có báo giá).",
     "Biểu đồ cột là cùng dữ liệu theo hình phễu."
    ],
    "remark": "Phễu mất nhiều nhất sau bước có báo giá (59,1% xuống 45,5%) và vì huỷ ở cả hai phía (~48%). Khuyến nghị: giảm huỷ bằng ưu đãi và phạt tài xế, rút ngắn thời gian chờ; xếp tài xế theo khu và khung giờ mạnh; không tăng giá theo giờ vì cước không phụ thuộc giờ.",
    "howRemark": [
     "Chỉ ra bước tụt mạnh nhất trong phễu kèm số.",
     "Liên kết với phát hiện khác (2.4, 2.7, 2.9.1).",
     "Mỗi khuyến nghị phải gắn với một con số.",
     "Sắp khuyến nghị theo tác động."
    ]
   },
   "en": {
    "think": "Write operational recommendations from the real numbers found.",
    "steps": [
     "Funnel: searches 100% → estimate 81.4% → quote requested 67.3% → got quote 59.1% → OTP 45.5% → completed 45.5%.",
     "Biggest losses: after the quote (59.1% → 45.5%) and cancellations from both sides (~48%).",
     "Recommend: cut cancellations (driver incentives/penalties, shorter waits); allocate drivers by zone and strong period (2.7); do not use hourly surge since fare does not depend on hour (2.4)."
    ],
    "code": "funnel = td[['searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'otp_entered', 'end_ride']].sum()\nprint((funnel / funnel['searches'] * 100).round(1).to_string())\nprint('rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách', round((td.customer_not_cancelled == 0).mean() * 100, 1), '%, huỷ bởi tài xế', round((td.driver_not_cancelled == 0).mean() * 100, 1), '%')\n(funnel / funnel['searches'] * 100).plot(kind='bar', title='Phễu chuyển đổi (% so với số tìm kiếm)')",
    "lotus": "Like Lan reading the funnel from enquiry to completed session and fixing the biggest leak first.",
    "trap": "Generic advice not tied to any number.",
    "read": [
     "The % list: each step vs 100% = searches; read top to bottom.",
     "Find the steepest drop: 59.1% → 45.5% (after the quote).",
     "The bar chart is the same data as a funnel."
    ],
    "remark": "The funnel loses most after the quote step (59.1% to 45.5%) and through two-sided cancellations (~48%). Recommend: cut cancellations with incentives and driver penalties, shorten waits; roster drivers by zone and strong period; no hourly surge since fare ignores hour.",
    "howRemark": [
     "Point to the steepest drop in the funnel with numbers.",
     "Tie in other findings (2.4, 2.7, 2.9.1).",
     "Every recommendation must hang on a number.",
     "Order recommendations by impact."
    ]
   }
  },
  "3.2": {
   "vi": {
    "think": "Đề xuất marketing và chiến lược dựa trên khu, giờ và thanh toán.",
    "steps": [
     "5 khu đầu chiếm 18,7% doanh thu, 10 khu đầu 34,8%: doanh thu khá phân tán, không có khu nào quá lớn.",
     "Giờ cao điểm 0h, 13h, 11h; thanh toán chia đều bốn kiểu, nên không cần khuyến mãi riêng cho một kiểu.",
     "Gợi ý: khuyến mãi tập trung vào khu có tỷ lệ hoàn thành thấp (Gandhi Nagar, Anekal); thưởng tài xế ở các khu có doanh thu/chuyến cao như Bangalore South.",
     "Nhớ kèm dashboard hỗ trợ như đề bài yêu cầu."
    ],
    "code": "peak = done.groupby('hour').size().sort_values(ascending=False).head(3).index.tolist()\nupi = (done.payment == 'upi').mean() * 100\nprint('Giờ cao điểm:', peak, '| UPI chiếm', round(upi, 1), '% chuyến')\nshare = done.groupby('pickup_zone')['fare'].sum().sort_values(ascending=False); share = share / share.sum() * 100\nprint('5 khu đầu chiếm', round(share.head(5).sum(), 1), '% doanh thu; 10 khu đầu', round(share.head(10).sum(), 1), '%')\nshare.head(10).iloc[::-1].plot(kind='barh', title='% doanh thu của 10 khu hàng đầu')",
    "lotus": "Như chọn chi nhánh có tỷ lệ khách bỏ lịch cao để chạy ưu đãi, thay vì giảm giá đại trà.",
    "trap": "Đề xuất giảm giá cho tất cả: dữ liệu cho thấy vấn đề ở huỷ chuyến chứ không ở giá.",
    "read": [
     "Dòng đầu: giờ cao điểm và tỷ lệ UPI.",
     "Dòng hai: 5 khu đầu và 10 khu đầu chiếm bao nhiêu % doanh thu.",
     "Biểu đồ: tỷ trọng doanh thu từng khu trong top 10."
    ],
    "remark": "5 khu đầu chỉ chiếm 18,7% doanh thu, 10 khu đầu 34,8%: doanh thu phân tán. Đề xuất ưu đãi nhắm khu hoàn thành thấp (Gandhi Nagar, Anekal), thưởng tài xế ở khu cước cao như Bangalore South, không cần khuyến mãi riêng cho một cách thanh toán.",
    "howRemark": [
     "Dùng tỷ trọng để nói mức tập trung.",
     "Đề xuất nhắm vào khu hoặc nhóm cụ thể thay vì đại trà.",
     "Gắn đề xuất với số từ các mục trước.",
     "Nhắc đính kèm dashboard hỗ trợ."
    ]
   },
   "en": {
    "think": "Suggest marketing and strategy improvements from zone, hour and payment findings.",
    "steps": [
     "Top 5 zones are 18.7% of revenue, top 10 are 34.8%: revenue is spread out, no dominant zone.",
     "Peak hours 00h, 13h, 11h; payments split evenly, so no method-specific promo is needed.",
     "Ideas: target promos at low-completion zones (Gandhi Nagar, Anekal); reward drivers in high-fare zones like Bangalore South.",
     "Remember to attach supporting dashboards as the task asks."
    ],
    "code": "peak = done.groupby('hour').size().sort_values(ascending=False).head(3).index.tolist()\nupi = (done.payment == 'upi').mean() * 100\nprint('Giờ cao điểm:', peak, '| UPI chiếm', round(upi, 1), '% chuyến')\nshare = done.groupby('pickup_zone')['fare'].sum().sort_values(ascending=False); share = share / share.sum() * 100\nprint('5 khu đầu chiếm', round(share.head(5).sum(), 1), '% doanh thu; 10 khu đầu', round(share.head(10).sum(), 1), '%')\nshare.head(10).iloc[::-1].plot(kind='barh', title='% doanh thu của 10 khu hàng đầu')",
    "lotus": "Like running offers at branches with a high no-show rate instead of discounting everywhere.",
    "trap": "Proposing blanket discounts: the data says the problem is cancellations, not price.",
    "read": [
     "First line: peak hours and the UPI share.",
     "Second line: what % of revenue the top 5 and top 10 zones hold.",
     "Chart: revenue share of each top-10 zone."
    ],
    "remark": "The top 5 zones hold only 18.7% of revenue and the top 10 hold 34.8%: revenue is dispersed. Target offers at low-completion zones (Gandhi Nagar, Anekal), reward drivers in high-fare zones like Bangalore South, no payment-specific promo needed.",
    "howRemark": [
     "Use shares to describe concentration.",
     "Target specific zones or groups instead of blanket offers.",
     "Tie each proposal to numbers from earlier tasks.",
     "Remember to attach supporting dashboards."
    ]
   }
  }
 },
 "results": {
  "1.1": {
   "code": "import pandas as pd, numpy as np, matplotlib.pyplot as plt, seaborn as sns\nx = pd.read_excel('/tmp/asg/all/4/Dataset and Starter Resources/nammayatri.xlsx', sheet_name=None)\ntd, tr, du, asm, pay = x['Trip_Details'], x['Trips'], x['Duration'], x['Assembly'], x['Payment']\nfor k, v in x.items(): print(f'{k:13s}', v.shape)\n# nối: Trips (983 chuyến hoàn thành) <- Trip_Details theo tripid; mã giờ, mã thanh toán, mã khu\ndf = (td.merge(tr.drop(columns='loc_from'), on='tripid', how='left')\n        .merge(du.rename(columns={'id': 'duration', 'duration': 'hour_slot'}), on='duration', how='left')\n        .merge(pay.rename(columns={'id': 'faremethod', 'method': 'payment'}), on='faremethod', how='left')\n        .merge(asm.rename(columns={'ID': 'loc_from', 'Assembly': 'pickup_zone'}), on='loc_from', how='left')\n        .merge(asm.rename(columns={'ID': 'loc_to', 'Assembly': 'drop_zone'}), on='loc_to', how='left'))\nprint(df.shape)\nprint(df.loc[df['end_ride'] == 1, ['tripid', 'pickup_zone', 'drop_zone', 'payment', 'fare', 'distance', 'hour_slot']].head(5).to_string(index=False))",
   "text": "Duration      (24, 2)\nAssembly      (37, 2)\nPayment       (4, 2)\nTrip_Details  (2161, 10)\nTrips         (983, 9)\n(2161, 21)\n tripid  pickup_zone       drop_zone     payment   fare  distance hour_slot\n      1 Gandhi Nagar Byatarayanapura         upi  776.0      23.0     19-20\n      2  Vijay Nagar          Magadi         upi 1479.0      26.0     14-15\n      3  Yeshwantpur     Devanahalli credit card  152.0       3.0     23-24\n      4   Chamrajpet    Malleshwaram  debit card  153.0       5.0       3-4\n      5 Basavanagudi          Anekal         upi  366.0       5.0       1-2",
   "imgs": []
  },
  "1.2": {
   "code": "print('ô trống từng bảng:', {k: int(v.isna().sum().sum()) for k, v in x.items()}, '| dòng trùng:', {k: int(v.duplicated().sum()) for k, v in x.items()})\nprint('tripid là duy nhất:', td.tripid.is_unique, tr.tripid.is_unique, '| mọi chuyến của Trips có trong Trip_Details:', set(tr.tripid) <= set(td.tripid))\nprint('chuyến hoàn thành (end_ride=1):', int(td.end_ride.sum()), '= số dòng Trips:', len(tr))\n# kiểm tra logic: chuyến hoàn thành mà bị huỷ?\ndone = df[df.end_ride == 1]\nprint('hoàn thành nhưng khách huỷ:', int((done.customer_not_cancelled == 0).sum()), '| tài xế huỷ:', int((done.driver_not_cancelled == 0).sum()))\nprint('chuyến chưa hoàn thành có fare:', int(df[df.end_ride == 0].fare.notna().sum()))\nprint('khu xuất phát = Other Assemblies:', int((df.pickup_zone == 'Other Assemblies').sum()))\ndf['hour'] = df['duration'] - 1\ndf['period'] = pd.cut(df['hour'], [-1, 5, 11, 17, 23], labels=['Đêm 0-6h', 'Sáng 6-12h', 'Chiều 12-18h', 'Tối 18-24h'])\nprint(df.loc[df.end_ride == 1, 'period'].value_counts().sort_index().to_string())",
   "text": "ô trống từng bảng: {'Duration': 0, 'Assembly': 0, 'Payment': 0, 'Trip_Details': 0, 'Trips': 0} | dòng trùng: {'Duration': 0, 'Assembly': 0, 'Payment': 0, 'Trip_Details': 0, 'Trips': 0}\ntripid là duy nhất: True True | mọi chuyến của Trips có trong Trip_Details: True\nchuyến hoàn thành (end_ride=1): 983 = số dòng Trips: 983\nhoàn thành nhưng khách huỷ: 0 | tài xế huỷ: 0\nchuyến chưa hoàn thành có fare: 0\nkhu xuất phát = Other Assemblies: 70\nperiod\nĐêm 0-6h        244\nSáng 6-12h      250\nChiều 12-18h    258\nTối 18-24h      231",
   "imgs": []
  },
  "2.1": {
   "code": "cat = ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']\nnum = ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']\nprint('Phân loại (categorical):', cat); print('Số (numerical):', num)\nprint(df[['fare', 'distance']].describe().round(1).to_string())",
   "text": "Phân loại (categorical): ['pickup_zone', 'drop_zone', 'payment', 'hour_slot', 'driverid', 'custid', 'tripid']\nSố (numerical): ['fare', 'distance', 'searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'customer_not_cancelled', 'driver_not_cancelled', 'otp_entered', 'end_ride']\n         fare  distance\ncount   983.0     983.0\nmean    764.3      14.4\nstd     423.8       7.4\nmin      44.0       2.0\n25%     401.5       8.0\n50%     740.0      14.0\n75%    1138.0      21.0\nmax    1500.0      27.0",
   "imgs": []
  },
  "2.2": {
   "code": "done = df[df.end_ride == 1]\ndemand = done.groupby('hour').size()\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\ndemand.plot(kind='bar', ax=ax[0], title='Số chuyến hoàn thành theo giờ')\npd.Series(td.merge(tr[['tripid', 'duration']], on='tripid', how='left').groupby('duration').size()).reindex(range(1, 25)).plot(ax=ax[1], title='Số chuyến hoàn thành theo mã giờ (Trips.duration)')\nplt.tight_layout()\nprint('3 giờ đông nhất:'); print(demand.sort_values(ascending=False).head(3).to_string())\nprint('giờ vắng nhất:', demand.idxmin(), demand.min(), 'chuyến')",
   "text": "3 giờ đông nhất:\nhour\n0.0     53\n13.0    52\n11.0    48\ngiờ vắng nhất: 20.0 32 chuyến",
   "imgs": [
    "/assign/namma-yatri/2_2-1.png"
   ]
  },
  "2.3": {
   "code": "rev = done.groupby('period', observed=True)['fare'].sum()\nshare = rev / rev.sum() * 100\nprint(pd.DataFrame({'doanh thu': rev, '% tổng': share.round(1)}).to_string())\nrev.plot(kind='pie', autopct='%1.1f%%', title='Tỷ trọng doanh thu theo khung giờ')",
   "text": "              doanh thu  % tổng\nperiod                         \nĐêm 0-6h       189234.0    25.2\nSáng 6-12h     186808.0    24.9\nChiều 12-18h   199506.0    26.6\nTối 18-24h     175795.0    23.4",
   "imgs": [
    "/assign/namma-yatri/2_3-1.png"
   ]
  },
  "2.4": {
   "code": "h = done.groupby('hour')['fare'].agg(['sum', 'mean', 'count'])\nprint('tương quan giờ - fare (từng chuyến):', round(done['hour'].corr(done['fare']), 3))\nprint('tương quan giờ - tổng doanh thu theo giờ:', round(h.reset_index()['hour'].corr(h['sum']), 3))\nfig, ax = plt.subplots(1, 2, figsize=(14, 4))\nh['sum'].plot(marker='o', ax=ax[0], title='Tổng doanh thu theo giờ'); h['mean'].plot(marker='o', ax=ax[1], title='Fare trung bình theo giờ')\nprint(h.round(0).sort_values('sum', ascending=False).head(4).to_string())",
   "text": "tương quan giờ - fare (từng chuyến): -0.01\ntương quan giờ - tổng doanh thu theo giờ: -0.155\n          sum   mean  count\nhour                       \n0.0   45019.0  849.0     53\n6.0   39624.0  826.0     48\n22.0  38880.0  810.0     48\n13.0  37897.0  729.0     52",
   "imgs": [
    "/assign/namma-yatri/2_4-1.png"
   ]
  },
  "2.5": {
   "code": "pm = done['payment'].value_counts()\nprint((pm / pm.sum() * 100).round(1).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(13, 4))\npm.plot(kind='bar', ax=ax[0], title='Số chuyến theo hình thức thanh toán')\ndone.pivot_table(index='period', columns='payment', values='tripid', aggfunc='count', observed=True).plot(kind='bar', stacked=True, ax=ax[1], title='Hình thức thanh toán theo khung giờ')\nplt.tight_layout()",
   "text": "payment\ncredit card    26.7\nupi            24.7\ndebit card     24.7\ncash           23.9",
   "imgs": [
    "/assign/namma-yatri/2_5-1.png"
   ]
  },
  "2.6.1": {
   "code": "z = td.groupby('loc_from').size().rename('requests').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').sort_values('requests', ascending=False)\nz.head(10).set_index('Assembly')['requests'].iloc[::-1].plot(kind='barh', title='10 khu có nhiều yêu cầu chuyến nhất')\nprint(z.head(8)[['Assembly', 'requests']].to_string(index=False))",
   "text": "           Assembly  requests\n       Mahadevapura        75\n        Ramanagaram        74\n       Gandhi Nagar        71\n   Other Assemblies        70\n        Yeshwantpur        69\n        Dasarahalli        66\n          Jayanagar        65\nRajarajeshwarinagar        64",
   "imgs": [
    "/assign/namma-yatri/2_6_1-1.png"
   ]
  },
  "2.6.2": {
   "code": "r = done.groupby('pickup_zone')['fare'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)\nr.head(10)['sum'].iloc[::-1].plot(kind='barh', title='10 khu có doanh thu cao nhất')\nprint(r.head(8).round(0).to_string())",
   "text": "                         sum  count   mean\npickup_zone                               \nBangalore South      30295.0     33  918.0\nYeshwantpur          29035.0     36  807.0\nHebbal               28097.0     31  906.0\nRajarajeshwarinagar  26509.0     32  828.0\nRamanagaram          26225.0     39  672.0\nChannapatna          25656.0     30  855.0\nOther Assemblies     24642.0     30  821.0\nChickpet             24026.0     28  858.0",
   "imgs": [
    "/assign/namma-yatri/2_6_2-1.png"
   ]
  },
  "2.7": {
   "code": "pv = done.pivot_table(index='pickup_zone', columns='period', values='tripid', aggfunc='count', observed=True).fillna(0)\ntop = pv.sum(axis=1).sort_values(ascending=False).head(12).index\nsns.heatmap(pv.loc[top], annot=True, fmt='.0f', cmap='YlOrRd')\nprint(pv.loc[top[:6]].astype(int).to_string())",
   "text": "period               Đêm 0-6h  Sáng 6-12h  Chiều 12-18h  Tối 18-24h\npickup_zone                                                        \nRamanagaram                10           9             6          14\nYeshwantpur                 7           9             8          12\nDasarahalli                 8          11            10           4\nBangalore South             4           7            13           9\nGandhi Nagar                7           7            11           7\nRajarajeshwarinagar         9           5             9           9",
   "imgs": [
    "/assign/namma-yatri/2_7-1.png"
   ]
  },
  "2.8": {
   "code": "t5 = done.groupby('pickup_zone').agg(trips=('tripid', 'count'), revenue=('fare', 'sum'), avg_distance=('distance', 'mean'), avg_fare=('fare', 'mean')).sort_values('trips', ascending=False).head(5)\nprint(t5.round(1).to_string())\nt5['trips'].plot(kind='bar', title='5 khu có nhiều chuyến hoàn thành nhất')\n# so sánh với tỷ lệ hoàn thành của chính khu đó\nrate = td.groupby('loc_from').agg(req=('tripid', 'count'), done=('end_ride', 'sum')).merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')\nprint((rate.loc[t5.index, 'done'] / rate.loc[t5.index, 'req'] * 100).round(1).rename('% yêu cầu hoàn thành').to_string())",
   "text": "                 trips  revenue  avg_distance  avg_fare\npickup_zone                                            \nRamanagaram         39  26225.0          14.5     672.4\nYeshwantpur         36  29035.0          13.8     806.5\nDasarahalli         33  23624.0          13.6     715.9\nBangalore South     33  30295.0          13.7     918.0\nGandhi Nagar        32  23065.0          16.2     720.8\npickup_zone\nRamanagaram        52.7\nYeshwantpur        52.2\nDasarahalli        50.0\nBangalore South    57.9\nGandhi Nagar       45.1",
   "imgs": [
    "/assign/namma-yatri/2_8-1.png"
   ]
  },
  "2.9.1": {
   "code": "n = len(td)\ncust = (td.customer_not_cancelled == 0).sum(); drv = (td.driver_not_cancelled == 0).sum(); ok = td.end_ride.sum()\nout = pd.Series({'Khách huỷ': cust / n * 100, 'Tài xế huỷ': drv / n * 100, 'Hoàn thành': ok / n * 100}).round(1)\nprint(out.to_string(), '\\n(tổng yêu cầu:', n, ')')\nout.plot(kind='bar', color=['#b5543c', '#d99a3e', '#2f6f5e'], title='% yêu cầu: huỷ và hoàn thành')",
   "text": "Khách huỷ     48.2\nTài xế huỷ    47.2\nHoàn thành    45.5 \n(tổng yêu cầu: 2161 )",
   "imgs": [
    "/assign/namma-yatri/2_9_1-1.png"
   ]
  },
  "2.9.2": {
   "code": "q = td[td.searches_for_quotes == 1]\nprint('Tìm báo giá:', len(q), '| hoàn thành:', int(q.end_ride.sum()), '|', round(q.end_ride.mean() * 100, 1), '%')\nprint('Lưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.')\n# thay vào đó chia theo khu xuất phát (có đủ cho mọi yêu cầu)\nzr = (q.groupby('loc_from')['end_ride'].mean() * 100).rename('pct').reset_index().merge(asm.rename(columns={'ID': 'loc_from'}), on='loc_from').set_index('Assembly')['pct'].sort_values()\nprint(zr.round(1).tail(3).to_string(), '\\n...', '\\n', zr.round(1).head(3).to_string())\nfig, ax = plt.subplots(1, 2, figsize=(13, 4))\npd.Series({'Tìm báo giá': len(q), 'Hoàn thành': int(q.end_ride.sum())}).plot(kind='bar', ax=ax[0], title='Tìm báo giá -> hoàn thành')\nzr.plot(kind='hist', bins=10, ax=ax[1], title='% hoàn thành sau khi tìm báo giá, theo khu')\nplt.tight_layout()",
   "text": "Tìm báo giá: 1455 | hoàn thành: 983 | 67.6 %\nLưu ý: giờ chỉ có ở bảng Trips (chuyến hoàn thành), nên chuyến huỷ không có giờ để chia khung giờ.\nAssembly\nChickpet               80.0\nRajarajeshwarinagar    82.1\nYeshwantpur            85.7 \n... \n Assembly\nAnekal               47.5\nC. V. Raman Nagar    50.0\nMahadevapura         53.1",
   "imgs": [
    "/assign/namma-yatri/2_9_2-1.png"
   ]
  },
  "2.10": {
   "code": "zone_pick = 'Hebbal'   # tham số: chọn khu để lọc\nsub = done[done.pickup_zone == zone_pick]\nprint(f'Khu {zone_pick}:', len(sub), 'chuyến hoàn thành, doanh thu', int(sub.fare.sum()), ', fare trung bình', round(sub.fare.mean(), 0))\nsub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).plot(kind='bar', title=f'{zone_pick}: chuyến và doanh thu theo khung giờ')\nprint(sub.groupby('period', observed=True)['fare'].agg(['count', 'sum']).to_string())",
   "text": "Khu Hebbal: 31 chuyến hoàn thành, doanh thu 28097 , fare trung bình 906.0\n              count     sum\nperiod                     \nĐêm 0-6h          5  4524.0\nSáng 6-12h        6  6367.0\nChiều 12-18h     11  9433.0\nTối 18-24h        9  7773.0",
   "imgs": [
    "/assign/namma-yatri/2_10-1.png"
   ]
  },
  "3.1": {
   "code": "funnel = td[['searches', 'searches_got_estimate', 'searches_for_quotes', 'searches_got_quotes', 'otp_entered', 'end_ride']].sum()\nprint((funnel / funnel['searches'] * 100).round(1).to_string())\nprint('rơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách', round((td.customer_not_cancelled == 0).mean() * 100, 1), '%, huỷ bởi tài xế', round((td.driver_not_cancelled == 0).mean() * 100, 1), '%')\n(funnel / funnel['searches'] * 100).plot(kind='bar', title='Phễu chuyển đổi (% so với số tìm kiếm)')",
   "text": "searches                 100.0\nsearches_got_estimate     81.4\nsearches_for_quotes       67.3\nsearches_got_quotes       59.1\notp_entered               45.5\nend_ride                  45.5\nrơi nhiều nhất ở bước: tìm báo giá -> có báo giá, huỷ bởi khách 48.2 %, huỷ bởi tài xế 47.2 %",
   "imgs": [
    "/assign/namma-yatri/3_1-1.png"
   ]
  },
  "3.2": {
   "code": "peak = done.groupby('hour').size().sort_values(ascending=False).head(3).index.tolist()\nupi = (done.payment == 'upi').mean() * 100\nprint('Giờ cao điểm:', peak, '| UPI chiếm', round(upi, 1), '% chuyến')\nshare = done.groupby('pickup_zone')['fare'].sum().sort_values(ascending=False); share = share / share.sum() * 100\nprint('5 khu đầu chiếm', round(share.head(5).sum(), 1), '% doanh thu; 10 khu đầu', round(share.head(10).sum(), 1), '%')\nshare.head(10).iloc[::-1].plot(kind='barh', title='% doanh thu của 10 khu hàng đầu')",
   "text": "Giờ cao điểm: [0.0, 13.0, 11.0] | UPI chiếm 24.7 % chuyến\n5 khu đầu chiếm 18.7 % doanh thu; 10 khu đầu 34.8 %",
   "imgs": [
    "/assign/namma-yatri/3_2-1.png"
   ]
  }
 }
};
