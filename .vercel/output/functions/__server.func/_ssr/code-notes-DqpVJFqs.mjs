//#region node_modules/.nitro/vite/services/ssr/assets/code-notes-DqpVJFqs.js
var a8211ee5 = {
	"s": ["Kiểm tra phiên bản các thư viện đang dùng để chắc môi trường khớp với bản khuyến nghị.", "Print the installed library versions to confirm the environment matches the recommended ones."],
	"r": [[
		8,
		11,
		"In ra phiên bản của numpy, pandas, matplotlib và seaborn để so với bản khuyến nghị, tránh lỗi do khác phiên bản.",
		"Prints the versions of numpy, pandas, matplotlib and seaborn to compare with the recommended ones and avoid version-related errors."
	]]
};
var efda9f4d = {
	"s": ["Khung để đọc file bản đồ vùng taxi bằng geopandas; dòng đọc file còn để trống.", "Template to read the taxi-zone map file with geopandas; the file-reading line is left blank."],
	"r": [[
		5,
		5,
		"Dòng chưa hoàn chỉnh: cần đọc file .shp (bản đồ) vào biến zones.",
		"Unfinished line: should read the .shp (map) file into the variable zones."
	], [
		6,
		6,
		"Xem vài dòng đầu của bảng vùng để kiểm tra đã đọc đúng.",
		"Shows the first few rows of the zone table to check it loaded correctly."
	]]
};
var af8247c1 = {
	"s": ["Lấy mẫu 5% các chuyến trong mỗi giờ của mỗi ngày ở từng file tháng, rồi gộp lại thành một bảng cả năm gọn nhẹ mà vẫn giữ đúng nhịp theo giờ.", "Sample 5% of trips within every hour of every day for each monthly file, then combine into one compact yearly table that keeps the hourly pattern."],
	"r": [
		[
			1,
			1,
			"Tạo bảng rỗng để gộp kết quả.",
			"Creates an empty table to collect the results."
		],
		[
			2,
			3,
			"Duyệt từng file và đọc nó vào bảng month. Lưu ý code đọc theo file_path, chứ không theo file_name của vòng lặp.",
			"Loops over files and reads each into month. Note the code reads file_path, not the loop's file_name."
		],
		[
			4,
			5,
			"Tạo hai cột phụ: ngày và giờ đón, lấy từ thời điểm đón khách.",
			"Creates two helper columns, pickup date and hour, taken from the pickup timestamp."
		],
		[
			6,
			8,
			"Với mỗi cặp (ngày, giờ), lấy ngẫu nhiên 5% dòng; random_state=42 cố định phép chọn để chạy lại ra đúng kết quả cũ.",
			"For each (date, hour) pair, randomly takes 5% of rows; random_state=42 fixes the draw so reruns give the same result."
		],
		[
			9,
			9,
			"Nối các phần mẫu của file này vào bảng chung df.",
			"Appends this file's sampled parts to the main df."
		],
		[
			10,
			10,
			"Bỏ hai cột phụ ngày và giờ vì chỉ cần để chia nhóm lấy mẫu.",
			"Drops the helper date and hour columns, which were only needed to group the sampling."
		]
	]
};
var c2851a6a = {
	"s": ["Gộp hai cột phí sân bay bị tách do khác chữ hoa/thường thành một cột duy nhất.", "Merge the two airport-fee columns, split only by capitalisation, into one column."],
	"r": [
		[
			1,
			1,
			"Đếm số ô có dữ liệu ở mỗi cột phí sân bay.",
			"Counts how many non-empty cells each airport-fee column has."
		],
		[
			2,
			3,
			"Tìm và đếm dòng có dữ liệu ở cả hai cột; mong đợi bằng 0, tức hai cột không chồng nhau nên gộp an toàn.",
			"Finds and counts rows filled in both columns; expected 0, meaning they do not overlap so merging is safe."
		],
		[
			4,
			4,
			"Lấy giá trị cột airport_fee, chỗ nào trống thì lấy từ Airport_fee, thành một cột đầy đủ hơn.",
			"Takes airport_fee and, where it is empty, fills from Airport_fee, giving one more complete column."
		],
		[
			5,
			5,
			"Bỏ cột Airport_fee thừa.",
			"Drops the now redundant Airport_fee column."
		]
	]
};
var ed31f140 = {
	"s": ["Kiểm tra các cột tiền có giá trị âm (thường do hoàn tiền/điều chỉnh) rồi chuyển hết thành số dương.", "Check the money columns for negative values (often refunds or adjustments) and turn them all positive."],
	"r": [
		[
			1,
			1,
			"Khai báo danh sách các cột tiền cần kiểm tra.",
			"Defines the list of money columns to check."
		],
		[
			2,
			2,
			"Đếm số giá trị âm ở mỗi cột tiền.",
			"Counts negative values in each money column."
		],
		[
			3,
			5,
			"Chọn các dòng có cước âm (giữ dòng điều kiện đúng) rồi xem chúng thuộc loại giá và hình thức thanh toán nào, để hiểu vì sao có số âm.",
			"Selects rows with a negative fare (keeps rows where the condition is true) and looks at their rate code and payment type to understand why they exist."
		],
		[
			6,
			6,
			"Lấy giá trị tuyệt đối các cột tiền, vì một khoản cước hay phụ phí không thể âm; phép này ghi đè lên chính các cột.",
			"Takes the absolute value of the money columns since a fare or surcharge cannot be negative; this overwrites those columns."
		]
	]
};
var c55287bc = {
	"s": ["Điền các ô trống của loại giá RatecodeID bằng giá trị phổ biến nhất.", "Fill missing RatecodeID (rate type) values with the most common one."],
	"r": [[
		1,
		1,
		"Đếm từng loại giá, kể cả ô trống, để xem mức độ thiếu.",
		"Counts each rate code, including blanks, to see how much is missing."
	], [
		2,
		2,
		"Điền ô trống bằng mode, vì đa số chuyến dùng giá chuẩn nên đây là lựa chọn hợp lý.",
		"Fills blanks with the mode, reasonable because most trips use the standard rate."
	]]
};
var f2775e07 = {
	"s": ["Loại bỏ các dòng vô lý (ngoại lai) như cước rất cao cho chuyến gần như không di chuyển, quãng đường quá dài, hình thức thanh toán 0, hơn 6 khách.", "Remove implausible rows (outliers): huge fares for near-zero distance, extreme distances, payment type 0, more than 6 passengers."],
	"r": [
		[
			1,
			1,
			"Xem bảng thống kê mô tả (nhỏ nhất, lớn nhất, trung bình...) để phát hiện giá trị lạ.",
			"Shows summary statistics (min, max, mean...) to spot odd values."
		],
		[
			2,
			2,
			"Lưu số dòng ban đầu để biết sau cùng đã bỏ bao nhiêu.",
			"Stores the starting row count so we know how many were removed at the end."
		],
		[
			3,
			3,
			"Bỏ chuyến dưới 0,1 dặm mà cước trên 300 đô; dấu ~ đảo điều kiện nên mask giữ những dòng không thuộc nhóm này.",
			"Drops trips under 0.1 mile with a fare over $300; the ~ inverts the condition so the mask keeps rows not in that group."
		],
		[
			4,
			4,
			"Bỏ chuyến quãng đường 0 và cước 0 mà đón và trả ở hai vùng khác nhau, vì như vậy là bản ghi lỗi.",
			"Drops trips with 0 distance and 0 fare between two different zones, which is a faulty record."
		],
		[
			5,
			5,
			"Giữ chuyến dài không quá 250 dặm, loại các quãng đường phi thực tế.",
			"Keeps trips of at most 250 miles, removing unrealistic distances."
		],
		[
			6,
			6,
			"Giữ các dòng có hình thức thanh toán khác 0, vì 0 là mã không xác định.",
			"Keeps rows whose payment type is not 0, an unidentified code."
		],
		[
			7,
			7,
			"Giữ chuyến có không quá 6 hành khách.",
			"Keeps trips with at most 6 passengers."
		],
		[
			8,
			8,
			"In số dòng đã bị loại.",
			"Prints how many rows were removed."
		]
	]
};
var cd022e9d = {
	"s": ["Phân loại các cột thành nhóm số (đo lường được) và nhóm phân loại (mã/nhãn) để chọn đúng cách phân tích.", "Sort columns into numerical (measurable) and categorical (codes/labels) groups to choose the right analysis."],
	"r": [[
		1,
		1,
		"Danh sách cột số: số khách, quãng đường, giờ đón, thời lượng chuyến.",
		"List of numerical columns: passengers, distance, pickup hour, trip duration."
	], [
		2,
		2,
		"Danh sách cột phân loại: hãng, loại giá, mã vùng đón/trả, hình thức thanh toán; các số này là mã, không phải đại lượng để cộng trừ.",
		"List of categorical columns: vendor, rate code, pickup/dropoff zone codes, payment type; these numbers are codes, not quantities."
	]]
};
var e32ebb62 = {
	"s": ["Tính tổng doanh thu theo tháng, vẽ đường xu hướng và tìm tháng cao nhất, thấp nhất.", "Compute total revenue per month, plot the trend and find the highest and lowest months."],
	"r": [
		[
			1,
			1,
			"Cộng tổng tiền của các chuyến theo từng tháng.",
			"Sums the total amount of trips for each month."
		],
		[
			2,
			2,
			"Vẽ đường doanh thu theo tháng, có chấm đánh dấu mỗi tháng.",
			"Plots a line of revenue by month with a marker at each month."
		],
		[
			3,
			3,
			"In ra tháng có doanh thu cao nhất và thấp nhất.",
			"Prints the months with the highest and lowest revenue."
		]
	]
};
var ff4a81a6 = {
	"s": ["Tính thời lượng chuyến đi rồi xem cước tương quan thế nào với thời lượng, số khách, và tip với quãng đường.", "Compute trip duration, then check how fare correlates with duration and passengers, and tip with distance."],
	"r": [
		[
			1,
			1,
			"Tính thời lượng chuyến bằng phút: giờ trả trừ giờ đón, đổi ra giây rồi chia 60.",
			"Computes trip duration in minutes: dropoff minus pickup time, converted to seconds, divided by 60."
		],
		[
			2,
			2,
			"Giữ chuyến dài trên 0 và dưới 180 phút để bỏ các giá trị vô lý.",
			"Keeps trips longer than 0 and under 180 minutes to drop implausible values."
		],
		[
			3,
			3,
			"Tương quan giữa cước và thời lượng.",
			"Correlation between fare and duration."
		],
		[
			4,
			4,
			"Tương quan giữa cước và số hành khách (thường rất thấp).",
			"Correlation between fare and passenger count (usually very low)."
		],
		[
			5,
			5,
			"Tương quan giữa tiền tip và quãng đường.",
			"Correlation between tip and trip distance."
		]
	]
};
var b07ffe97 = {
	"s": ["Đếm số chuyến theo từng vùng đón và xem 10 vùng đông nhất.", "Count trips per pickup zone and show the 10 busiest."],
	"r": [[
		1,
		1,
		"Nhóm theo mã vùng đón và đếm số chuyến, đặt tên cột là trips.",
		"Groups by pickup zone ID and counts trips, naming the column trips."
	], [
		2,
		2,
		"Sắp giảm dần theo số chuyến và lấy 10 vùng đầu.",
		"Sorts by trips descending and takes the top 10 zones."
	]]
};
var db1da471 = {
	"s": ["Vẽ bản đồ nhiệt NYC tô màu theo số chuyến đón của từng vùng và liệt kê 10 vùng đông nhất.", "Draw an NYC heat map coloured by pickups per zone and list the 10 busiest zones."],
	"r": [
		[
			1,
			1,
			"Tạo khung hình lớn 12x10 để bản đồ rõ ràng.",
			"Creates a large 12x10 figure so the map is readable."
		],
		[
			2,
			3,
			"Vẽ bản đồ tô màu theo cột trips, kèm thanh chú giải ngang ghi 'Number of trips'.",
			"Draws the map coloured by the trips column with a horizontal legend labelled 'Number of trips'."
		],
		[
			4,
			4,
			"Hiển thị biểu đồ.",
			"Displays the plot."
		],
		[
			5,
			5,
			"Sắp các vùng theo số chuyến giảm dần và hiện tên vùng cùng số chuyến của 10 vùng đầu.",
			"Sorts zones by trips descending and shows the name and trips of the top 10."
		]
	]
};
var e66cef2d = {
	"s": ["Đếm số chuyến theo giờ, vẽ biểu đồ và tìm giờ đông nhất.", "Count trips per hour, plot them and find the busiest hour."],
	"r": [
		[
			1,
			1,
			"Đếm số chuyến trong mỗi giờ đón.",
			"Counts trips in each pickup hour."
		],
		[
			2,
			2,
			"Vẽ biểu đồ cột theo giờ.",
			"Draws a bar chart by hour."
		],
		[
			3,
			3,
			"In giờ có nhiều chuyến nhất và số chuyến đó.",
			"Prints the hour with the most trips and its count."
		]
	]
};
var d6491ba8 = {
	"s": ["So sánh nhịp số chuyến theo giờ giữa ngày thường và cuối tuần, quy về trung bình mỗi ngày để công bằng.", "Compare hourly trip patterns between weekdays and weekends, normalised to a per-day average to be fair."],
	"r": [
		[
			1,
			1,
			"Đánh dấu cuối tuần: thứ trong tuần từ 5 (thứ Bảy) trở lên là True.",
			"Flags weekends: weekday number 5 (Saturday) or higher is True."
		],
		[
			2,
			2,
			"Đếm số ngày khác nhau của mỗi nhóm (ngày thường, cuối tuần), vì hai nhóm có số ngày khác nhau.",
			"Counts distinct dates in each group, since weekdays and weekends have different numbers of days."
		],
		[
			3,
			3,
			"Đếm chuyến theo (cuối tuần, giờ) và xoay nhóm cuối tuần thành hai cột.",
			"Counts trips by (weekend, hour) and pivots weekend flag into two columns."
		],
		[
			4,
			4,
			"Chia cho số ngày để ra số chuyến trung bình mỗi ngày rồi vẽ đường so sánh.",
			"Divides by number of days to get trips per day, then plots both lines."
		]
	]
};
var eb0ce231 = {
	"s": ["Tính tỷ lệ số chuyến đón trên số chuyến trả của mỗi vùng để thấy vùng nào chủ yếu là nơi đi, vùng nào chủ yếu là nơi đến.", "Compute pickups-to-dropoffs ratio per zone to see which zones are mainly origins versus destinations."],
	"r": [
		[
			1,
			2,
			"Đếm số chuyến đón và số chuyến trả của từng vùng.",
			"Counts pickups and dropoffs per zone."
		],
		[
			3,
			3,
			"Chia đón cho trả; vùng không có chuyến trả cho ra vô cực nên đổi thành trống rồi bỏ.",
			"Divides pickups by dropoffs; zones with no dropoffs give infinity, so these are set to missing and dropped."
		],
		[
			4,
			4,
			"In 10 vùng có tỷ lệ cao nhất và 10 vùng thấp nhất.",
			"Prints the 10 highest and 10 lowest ratios."
		]
	]
};
var cf1e5a1b = {
	"s": ["Tìm các vùng đón và trả khách nhiều nhất riêng vào ban đêm (23h–5h).", "Find the busiest pickup and dropoff zones during night hours (11pm-5am)."],
	"r": [
		[
			1,
			1,
			"Lọc chuyến có giờ đón từ 23h trở đi hoặc trước 5h (dấu | là 'hoặc'); mask giữ dòng nào đúng.",
			"Filters trips with pickup hour 23 or later or before 5 (| means 'or'); the mask keeps true rows."
		],
		[
			2,
			2,
			"Đếm top 10 vùng đón ban đêm.",
			"Counts the top 10 night pickup zones."
		],
		[
			3,
			3,
			"Đếm top 10 vùng trả ban đêm.",
			"Counts the top 10 night dropoff zones."
		]
	]
};
var bcd02c0d = {
	"s": ["Tính ban đêm đóng góp bao nhiêu phần trăm doanh thu.", "Calculate what share of revenue comes from night trips."],
	"r": [
		[
			1,
			1,
			"Tạo cột đánh dấu chuyến ban đêm (23h–5h).",
			"Creates a column flagging night trips (11pm-5am)."
		],
		[
			2,
			2,
			"Cộng tổng tiền cho nhóm đêm và nhóm không phải đêm.",
			"Sums total amount for night and non-night groups."
		],
		[
			3,
			3,
			"In tỷ trọng mỗi nhóm trên tổng doanh thu, làm tròn.",
			"Prints each group's share of total revenue, rounded."
		]
	]
};
var fda32b74 = {
	"s": ["Tính cước mỗi dặm và cước mỗi dặm mỗi hành khách rồi so sánh theo số người đi.", "Compute fare per mile and per mile per passenger, and compare by passenger count."],
	"r": [
		[
			1,
			1,
			"Giữ chuyến có quãng đường dương để không chia cho 0; copy() cho bảng độc lập.",
			"Keeps trips with positive distance to avoid dividing by 0; copy() gives an independent table."
		],
		[
			2,
			2,
			"Cước mỗi dặm = cước chia quãng đường.",
			"Fare per mile = fare divided by distance."
		],
		[
			3,
			3,
			"Chia tiếp cho số hành khách để ra cước mỗi dặm mỗi người.",
			"Divides again by passengers for fare per mile per person."
		],
		[
			4,
			4,
			"In trung bình theo từng số hành khách.",
			"Prints the average for each passenger count."
		]
	]
};
var da1bccce = {
	"s": ["So sánh cước mỗi dặm trung bình theo giờ trong ngày và theo thứ trong tuần.", "Compare average fare per mile by hour of day and by weekday."],
	"r": [[
		1,
		1,
		"Vẽ đường cước mỗi dặm trung bình theo từng giờ đón.",
		"Plots a line of average fare per mile by pickup hour."
	], [
		2,
		2,
		"Tính trung bình theo thứ, sắp theo thứ tự tuần (biến days từ bước trước) và vẽ cột.",
		"Averages by weekday, orders by the week order (the days list from an earlier step) and draws bars."
	]]
};
var dec1adb1 = {
	"s": ["Tính tỷ lệ tiền tip trên tiền cước cho các chuyến trả bằng thẻ, rồi xem tip thay đổi thế nào theo quãng đường, số hành khách và giờ đón.", "Computes tip as a percentage of fare for card-paid trips and checks how it varies by distance tier, passenger count and pickup hour."],
	"r": [
		[
			1,
			1,
			"Chỉ giữ chuyến trả bằng thẻ (payment_type = 1, vì tiền mặt thường không ghi tip) và có cước lớn hơn 0 để khỏi chia cho 0. Mặt nạ true/false giữ lại những dòng thỏa điều kiện; .copy() tạo bản riêng để sửa an toàn.",
			"Keeps only card payments (type 1, since cash tips are usually not recorded) with fare above 0 to avoid dividing by zero. The boolean mask keeps rows where the condition is true; .copy() makes an independent table."
		],
		[
			2,
			2,
			"Tạo cột tip_pct = tiền tip chia tiền cước nhân 100, tức tip chiếm bao nhiêu phần trăm cước.",
			"Adds tip_pct = tip divided by fare times 100, i.e. tip as a percent of the fare."
		],
		[
			3,
			5,
			"In tip trung bình theo nhóm quãng đường, theo số hành khách và theo giờ đón, để thấy nhóm nào boa hào phóng hơn.",
			"Prints average tip percent by distance tier, passenger count and pickup hour to see which groups tip more."
		]
	]
};
var d02d5096 = {
	"s": ["Tính số hành khách trung bình theo khu vực đón rồi gắn vào dữ liệu bản đồ để vẽ bản đồ màu theo từng khu của New York.", "Computes average passengers per pickup zone and attaches it to the zone map to colour New York zones by that value."],
	"r": [
		[
			1,
			1,
			"Tính số khách trung bình cho từng khu vực đón (PULocationID) và đặt tên cột là avg_passengers.",
			"Averages passengers for each pickup zone ID and names the result avg_passengers."
		],
		[
			2,
			2,
			"Ghép kết quả vào bảng khu vực theo mã LocationID. how='left' giữ mọi khu vực, kể cả khu không có chuyến (sẽ để trống).",
			"Joins the averages onto the zone table by LocationID; how='left' keeps every zone, leaving blanks for zones with no trips."
		],
		[
			3,
			3,
			"Vẽ bản đồ, tô màu mỗi khu theo số khách trung bình, kèm thanh chú giải màu.",
			"Plots the map, colouring each zone by average passengers with a colour legend."
		]
	]
};
var faf4658f = {
	"s": ["Đọc 12 file chuyến taxi của năm 2023, lấy mẫu 5% đều theo từng ngày và giờ rồi gộp lại, vì dữ liệu cả năm quá lớn để xử lý trực tiếp.", "Reads the twelve monthly 2023 taxi files, takes a 5% sample stratified by day and hour and combines them, since the full year is too big to handle directly."],
	"r": [
		[
			1,
			1,
			"Nạp các thư viện cần dùng: xử lý bảng, tính toán số, vẽ biểu đồ, bản đồ địa lý và tìm file.",
			"Imports the libraries for tables, numbers, charts, maps and file searching."
		],
		[
			2,
			3,
			"Tạo danh sách rỗng để chứa các mẫu và biến đếm tổng số chuyến của cả năm.",
			"Creates an empty list for the samples and a counter for total trips in the year."
		],
		[
			4,
			5,
			"Duyệt từng file tháng (đã sắp thứ tự) và đọc vào bảng m.",
			"Loops over each monthly file in order and reads it into table m."
		],
		[
			6,
			6,
			"Cộng số dòng của tháng vào tổng, để sau này biết tỷ lệ lấy mẫu thật.",
			"Adds this month's row count to the total so the real sampling fraction is known later."
		],
		[
			7,
			8,
			"Tạo cột ngày và giờ đón để dùng làm nhóm khi lấy mẫu.",
			"Creates pickup date and hour columns to use as sampling groups."
		],
		[
			9,
			9,
			"Trong mỗi nhóm (ngày, giờ) lấy ngẫu nhiên 5% dòng, nên mẫu giữ đúng nhịp theo thời gian. random_state=42 cố định kết quả để chạy lại ra y hệt.",
			"Draws a random 5% within each (date, hour) group so the sample keeps the time pattern; random_state=42 fixes the draw so reruns give the same rows."
		],
		[
			10,
			10,
			"Bỏ hai cột phụ vừa tạo rồi thêm mẫu vào danh sách.",
			"Drops the two helper columns and stores the sample."
		],
		[
			11,
			11,
			"In tên file, số dòng gốc và số dòng sau khi lấy mẫu để kiểm tra.",
			"Prints file name, original and sampled row counts as a check."
		],
		[
			12,
			12,
			"Gộp mọi mẫu thành một bảng duy nhất và đánh lại số thứ tự dòng.",
			"Concatenates all samples into one table with fresh row numbers."
		],
		[
			13,
			13,
			"Tính tỷ lệ lấy mẫu thực tế (số dòng mẫu chia tổng số chuyến), dùng sau này để nhân ngược lên cả năm.",
			"Computes the actual sampling fraction (sample rows over total trips), used later to scale results back up."
		],
		[
			14,
			14,
			"In tổng số chuyến cả năm, kích thước mẫu và tỷ lệ lấy mẫu.",
			"Prints the year's total trips, sample size and sampling fraction."
		]
	]
};
var c4f23ea5 = {
	"s": ["Hợp nhất hai cột phí sân bay bị viết khác hoa thường (airport_fee và Airport_fee) thành một cột duy nhất.", "Merges two airport fee columns that differ only in capitalisation into one."],
	"r": [
		[
			1,
			1,
			"In các cột có chữ 'irport' trong tên để thấy có mấy phiên bản.",
			"Prints columns containing 'irport' to see how many versions exist."
		],
		[
			2,
			2,
			"Nếu có cột Airport_fee, dùng nó để điền vào các ô trống của airport_fee; nếu không thì giữ nguyên.",
			"If an Airport_fee column exists, uses it to fill blanks in airport_fee; otherwise leaves it as is."
		],
		[
			3,
			3,
			"Xóa cột Airport_fee thừa (nếu tồn tại), kết quả gán lại vào df.",
			"Drops the redundant Airport_fee column if present, assigning the result back to df."
		],
		[
			4,
			4,
			"In thống kê mô tả cột phí sân bay đã hợp nhất để kiểm tra.",
			"Prints summary statistics of the merged column as a check."
		]
	]
};
var c71286a8 = {
	"s": ["Tìm và sửa các số tiền âm (thường là hoàn tiền hoặc ghi sai) bằng cách lấy giá trị tuyệt đối, vì một khoản phí không thể âm trong phân tích.", "Finds and fixes negative money values (refunds or entry errors) by taking absolute values, since fares and fees should not be negative here."],
	"r": [
		[
			1,
			1,
			"Liệt kê các cột tiền cần kiểm tra.",
			"Lists the money columns to check."
		],
		[
			2,
			3,
			"Đếm số giá trị âm ở mỗi cột và chỉ in những cột có ít nhất một giá trị âm.",
			"Counts negatives per column and prints only columns with at least one."
		],
		[
			4,
			4,
			"Với các chuyến có cước âm, xem chúng thuộc loại mã giá nào (kể cả giá trị trống) để hiểu nguyên nhân.",
			"For trips with negative fares, shows which rate codes they belong to (including missing) to understand the cause."
		],
		[
			5,
			5,
			"Với mỗi cột tiền, thay bằng giá trị tuyệt đối để biến số âm thành dương.",
			"For each money column, replaces values with their absolute value, turning negatives positive."
		]
	]
};
var bf84c0af = {
	"s": ["Xử lý số hành khách bị trống hoặc bằng 0 bằng giá trị trung vị, vì một chuyến taxi phải có ít nhất một khách.", "Replaces missing or zero passenger counts with the median, since a trip must carry at least one passenger."],
	"r": [
		[
			1,
			1,
			"In số chuyến theo từng giá trị số khách (kể cả trống), sắp theo số khách, để thấy sự bất thường.",
			"Prints trip counts per passenger value (including missing), sorted, to see anomalies."
		],
		[
			2,
			2,
			"Điền các ô trống bằng trung vị của số khách, giá trị ở giữa nên không bị lệch bởi ngoại lệ.",
			"Fills blanks with the median passenger count, which is robust to outliers."
		],
		[
			3,
			3,
			"Các dòng có 0 khách cũng được thay bằng trung vị, vì 0 khách là vô lý.",
			"Rows with 0 passengers are also set to the median because 0 is implausible."
		]
	]
};
var ef8c77f2 = {
	"s": ["Tính thời lượng chuyến rồi loại các dòng vô lý (quá nhiều khách, cước phi thực tế, thời gian âm hay quá dài, quãng đường cực lớn) để các thống kê sau không bị méo.", "Computes trip duration and removes impossible rows (too many passengers, absurd fares, bad durations, huge distances) so later statistics are not distorted."],
	"r": [
		[
			1,
			1,
			"Tạo cột thời lượng chuyến bằng phút: giờ trả khách trừ giờ đón, đổi ra giây rồi chia 60.",
			"Creates trip duration in minutes: dropoff minus pickup, converted to seconds then divided by 60."
		],
		[
			2,
			2,
			"In thống kê mô tả vài cột chính để nhìn ngay các giá trị bất thường.",
			"Prints summary statistics of key columns to spot odd values."
		],
		[
			3,
			3,
			"Lưu số dòng trước khi lọc để biết đã bỏ bao nhiêu.",
			"Stores the row count before filtering to know how many are removed."
		],
		[
			4,
			4,
			"Giữ chuyến có tối đa 6 khách, vì xe taxi không chở nhiều hơn thế.",
			"Keeps trips with at most 6 passengers, as a taxi cannot carry more."
		],
		[
			5,
			5,
			"Loại chuyến gần như không di chuyển (dưới 0,1 dặm) mà cước trên 300 USD, nhiều khả năng là lỗi nhập.",
			"Drops trips with almost no distance (under 0.1 mile) yet fares over 300 USD, likely entry errors."
		],
		[
			6,
			6,
			"Loại chuyến có 0 dặm và 0 cước nhưng điểm đón khác điểm trả, vì ghi nhận như vậy không hợp lý.",
			"Drops trips with 0 distance and 0 fare but different pickup and drop-off zones, which is inconsistent."
		],
		[
			7,
			7,
			"Giữ chuyến có thời lượng dương và dưới 24 giờ (24*60 phút), loại thời gian âm hoặc quá dài.",
			"Keeps durations above 0 and under 24 hours (24*60 minutes), removing negative or overlong trips."
		],
		[
			8,
			9,
			"Giữ chuyến dưới 100 dặm và cước dưới 500 USD để cắt bớt các ngoại lệ cực đoan.",
			"Keeps trips under 100 miles and fares under 500 USD to cut extreme outliers."
		],
		[
			10,
			10,
			"Loại chuyến có loại thanh toán 0 (không xác định).",
			"Drops trips with payment type 0 (unknown)."
		],
		[
			11,
			11,
			"Đánh lại số thứ tự dòng sau khi lọc.",
			"Renumbers rows after filtering."
		],
		[
			12,
			12,
			"In số dòng lỗi đã bỏ và số dòng còn lại.",
			"Prints how many bad rows were dropped and how many remain."
		]
	]
};
var cda79cf6 = {
	"s": ["Tạo các cột giờ, thứ, tháng từ thời điểm đón khách và phân loại cột nào là danh mục, cột nào là số, để chuẩn bị phân tích theo thời gian.", "Derives hour, weekday and month columns from pickup time and classifies columns as categorical or numerical, preparing time-based analysis."],
	"r": [
		[
			1,
			3,
			"Từ giờ đón tách ra giờ trong ngày, tên thứ trong tuần và số tháng thành ba cột mới.",
			"Extracts hour of day, weekday name and month number into three new columns."
		],
		[
			4,
			4,
			"Liệt kê các cột là mã danh mục (hãng, loại giá, khu đón, khu trả, hình thức thanh toán): số nhưng không dùng để cộng trừ.",
			"Lists columns that are category codes (vendor, rate, pickup/drop-off zone, payment type): numeric but not meant for arithmetic."
		],
		[
			5,
			5,
			"In ghi chú về phân loại biến danh mục và biến số.",
			"Prints a note on which variables are categorical and which numerical."
		]
	]
};
var e3b96c4d = {
	"s": ["Vẽ ba biểu đồ cột số chuyến theo giờ, theo thứ và theo tháng, rồi in ra giờ, thứ, tháng đông nhất.", "Draws three bar charts of trips by hour, weekday and month, then prints the busiest of each."],
	"r": [
		[
			1,
			1,
			"Tạo một khung hình gồm 3 biểu đồ nằm ngang, kích thước 17x4.",
			"Creates a figure with 3 side-by-side charts, sized 17x4."
		],
		[
			2,
			2,
			"Đếm số chuyến theo giờ, sắp theo giờ và vẽ cột ở ô đầu.",
			"Counts trips by hour, sorts by hour and plots bars in the first panel."
		],
		[
			3,
			4,
			"Đặt thứ tự các ngày từ thứ Hai đến Chủ nhật rồi đếm chuyến theo thứ và vẽ ở ô giữa; reindex ép đúng thứ tự này.",
			"Defines Monday-to-Sunday order, counts trips per weekday and plots in the middle panel; reindex enforces that order."
		],
		[
			5,
			5,
			"Đếm chuyến theo tháng, sắp theo tháng và vẽ ở ô cuối.",
			"Counts trips by month, sorts by month and plots in the last panel."
		],
		[
			6,
			6,
			"Căn khoảng cách để các biểu đồ không đè lên nhau.",
			"Adjusts spacing so charts do not overlap."
		],
		[
			7,
			7,
			"In giờ, thứ và tháng có nhiều chuyến nhất (idxmax trả về nhãn có số đếm lớn nhất).",
			"Prints the busiest hour, weekday and month (idxmax returns the label with the highest count)."
		]
	]
};
var a7b8ba3c = {
	"s": ["Xem quãng đường và cước có liên quan thế nào bằng biểu đồ điểm và hệ số tương quan, trên một mẫu 8.000 chuyến để vẽ cho nhẹ.", "Shows how distance and fare relate via a scatter plot and a correlation coefficient, using an 8,000-trip sample to keep the plot light."],
	"r": [
		[
			1,
			1,
			"Chỉ giữ chuyến có quãng đường lớn hơn 0 (mặt nạ giữ dòng thỏa điều kiện).",
			"Keeps trips with distance above 0 (the mask keeps rows where the condition holds)."
		],
		[
			2,
			2,
			"Lấy ngẫu nhiên 8.000 chuyến để vẽ; random_state=1 cố định mẫu nên chạy lại ra cùng kết quả.",
			"Randomly draws 8,000 trips to plot; random_state=1 fixes the draw so reruns match."
		],
		[
			3,
			3,
			"Vẽ biểu đồ điểm quãng đường – cước; alpha=0.3 làm điểm trong suốt để thấy chỗ nào dày đặc.",
			"Scatter plot of distance vs fare; alpha=0.3 makes points translucent to reveal dense areas."
		],
		[
			4,
			4,
			"In hệ số tương quan (từ -1 đến 1; gần 1 nghĩa là đi xa thì cước tăng theo).",
			"Prints the correlation (-1 to 1; near 1 means longer trips cost more)."
		]
	]
};
var a173d367 = {
	"s": ["Thống kê cách khách thanh toán: đổi mã số thành tên dễ hiểu, tính phần trăm và vẽ biểu đồ.", "Summarises payment methods: turns codes into readable names, computes percentages and plots them."],
	"r": [
		[
			1,
			1,
			"Đổi mã thanh toán thành tên (thẻ, tiền mặt, miễn phí, tranh chấp) rồi đếm số chuyến mỗi loại.",
			"Maps payment codes to names (card, cash, no charge, dispute) and counts trips per type."
		],
		[
			2,
			2,
			"In phần trăm mỗi loại trên tổng, làm tròn 1 chữ số.",
			"Prints each type's percent of the total, rounded to one decimal."
		],
		[
			3,
			3,
			"Vẽ biểu đồ cột số chuyến theo hình thức thanh toán.",
			"Draws a bar chart of trips per payment type."
		]
	]
};
var a0dab5fc = {
	"s": ["Đếm số chuyến đón ở mỗi khu và liệt kê 8 khu đông nhất.", "Counts pickups per zone and lists the 8 busiest zones."],
	"r": [[
		1,
		1,
		"Đếm số chuyến theo từng mã khu đón và đặt tên cột là trips.",
		"Counts trips per pickup zone ID and names the column trips."
	], [
		2,
		2,
		"Sắp giảm dần và in 8 khu đầu.",
		"Sorts descending and prints the top 8."
	]]
};
var dfda9991 = {
	"s": ["So sánh nhịp chuyến theo giờ giữa ngày thường và cuối tuần, dùng tỷ trọng để hai đường so sánh công bằng dù số chuyến khác nhau.", "Compares hourly trip patterns on weekdays versus weekends using shares, so the two lines are comparable despite different volumes."],
	"r": [
		[
			1,
			1,
			"Đánh dấu cuối tuần: thứ trong tuần từ 5 trở lên (thứ Bảy = 5, Chủ nhật = 6) cho giá trị đúng.",
			"Flags weekends: weekday number 5 or more (Saturday = 5, Sunday = 6) is True."
		],
		[
			2,
			2,
			"Đếm chuyến theo (giờ, cuối tuần hay không) rồi xoay thành hai cột.",
			"Counts trips per (hour, weekend flag) and pivots into two columns."
		],
		[
			3,
			3,
			"Đặt tên hai cột là Ngày thường và Cuối tuần.",
			"Names the columns weekday and weekend."
		],
		[
			4,
			4,
			"Chia mỗi cột cho tổng của nó để ra tỷ trọng theo giờ, rồi vẽ hai đường.",
			"Divides each column by its total to get hourly shares, then plots both lines."
		]
	]
};
var bd5e437f = {
	"s": ["Tìm các khu đón và trả đông nhất vào ban đêm (23h đến trước 5h) để biết nơi cần xe lúc khuya.", "Finds the busiest pickup and drop-off zones at night (23:00 to before 05:00) to see where late-night demand is."],
	"r": [
		[
			1,
			1,
			"Lọc chuyến đón từ 23h đến dưới 5h sáng; dấu | nghĩa là 'hoặc'.",
			"Filters pickups from 23:00 until before 05:00; | means 'or'."
		],
		[
			2,
			3,
			"Đếm chuyến ban đêm theo khu đón và khu trả, lấy 10 khu đầu của mỗi loại.",
			"Counts night trips per pickup and drop-off zone, keeping the top 10 of each."
		],
		[
			4,
			5,
			"In hai bảng, thay mã bằng tên khu.",
			"Prints both tables with zone names instead of IDs."
		]
	]
};
var d209e7e2 = {
	"s": ["Tính doanh thu ban đêm chiếm bao nhiêu phần trăm tổng doanh thu so với ban ngày.", "Computes what percent of revenue comes from night hours versus daytime."],
	"r": [
		[
			1,
			1,
			"Tạo mặt nạ đúng/sai cho giờ đón ban đêm (23h–5h).",
			"Creates a True/False flag for night pickups (23:00-05:00)."
		],
		[
			2,
			2,
			"Cộng tổng tiền theo nhóm đêm/ngày rồi chia cho tổng để ra phần trăm.",
			"Sums revenue by night/day group, then divides by the total to get percentages."
		],
		[
			3,
			3,
			"In tỷ trọng doanh thu ban ngày và ban đêm.",
			"Prints the day and night revenue shares."
		],
		[
			4,
			4,
			"Đổi nhãn False/True thành Ban ngày/Ban đêm và vẽ biểu đồ cột.",
			"Renames False/True to day/night labels and draws a bar chart."
		]
	]
};
var f3149e31 = {
	"s": ["Xem giá mỗi dặm biến động theo giờ trong ngày và theo thứ trong tuần để tìm thời điểm giá cao.", "Looks at how fare per mile varies by hour and weekday to find when prices are higher."],
	"r": [
		[
			1,
			1,
			"Tạo khung hình gồm 2 biểu đồ.",
			"Creates a figure with two charts."
		],
		[
			2,
			2,
			"Vẽ đường giá/dặm trung bình theo giờ.",
			"Plots average fare per mile by hour as a line."
		],
		[
			3,
			3,
			"Vẽ cột giá/dặm trung bình theo thứ, sắp đúng thứ tự tuần.",
			"Plots average fare per mile by weekday as bars in week order."
		],
		[
			4,
			4,
			"In giá/dặm theo giờ.",
			"Prints fare per mile by hour."
		]
	]
};
var d61e62b4 = {
	"s": ["Vẽ bản đồ nhiệt số khách trung bình theo giờ và thứ, rồi in vài giờ tiêu biểu để đọc số cụ thể.", "Draws a heatmap of average passengers by hour and weekday, then prints a few sample hours for exact values."],
	"r": [
		[
			1,
			1,
			"Lập bảng giờ x thứ với số khách trung bình, các cột theo thứ tự tuần.",
			"Builds an hour-by-weekday table of mean passengers, columns in week order."
		],
		[
			2,
			2,
			"Vẽ bản đồ nhiệt dải xanh lá-xanh dương, không ghi số trong ô.",
			"Draws a green-blue heatmap with no numbers in cells."
		],
		[
			3,
			3,
			"In các hàng giờ 0, 6, 12, 18, 23 (chọn theo vị trí) làm tròn 2 chữ số.",
			"Prints rows for hours 0, 6, 12, 18 and 23 (picked by position), rounded to 2 decimals."
		]
	]
};
var b1b159d1 = {
	"s": ["Tìm các khu đón có số khách trung bình cao nhất và vẽ bản đồ, chỉ xét khu có đủ chuyến để số liệu đáng tin.", "Finds pickup zones with the highest average passengers and maps them, only for zones with enough trips to be reliable."],
	"r": [
		[
			1,
			1,
			"Tính số khách trung bình avg và số chuyến n cho từng khu đón.",
			"Computes average passengers avg and trip count n per pickup zone."
		],
		[
			2,
			2,
			"Giữ khu có ít nhất 100 chuyến.",
			"Keeps zones with at least 100 trips."
		],
		[
			3,
			3,
			"Sắp giảm dần, lấy 5 khu đầu, thêm tên khu rồi in.",
			"Sorts descending, takes the top 5, adds zone names and prints."
		],
		[
			4,
			4,
			"Ghép giá trị avg vào bảng bản đồ; khu không đủ chuyến sẽ để trống.",
			"Joins avg onto the map table; zones without enough trips stay blank."
		],
		[
			5,
			5,
			"Vẽ bản đồ tô màu theo avg, khu thiếu dữ liệu màu xám nhạt, ẩn trục.",
			"Plots the map coloured by avg, zones without data in light grey, axes hidden."
		]
	]
};
var a2b8024b = {
	"s": ["Tạo biến mục tiêu: thời gian giao hàng tính bằng phút, rồi xem thống kê mô tả.", "Creates the target variable, delivery time in minutes, and summarises it."],
	"r": [[
		1,
		1,
		"Lấy giờ giao thực tế trừ giờ tạo đơn, đổi ra giây rồi chia 60 để ra phút.",
		"Subtracts order time from actual delivery time, converts to seconds and divides by 60 for minutes."
	], [
		2,
		2,
		"In thống kê mô tả (trung bình, nhỏ nhất, lớn nhất...) để kiểm tra giá trị hợp lý.",
		"Prints summary statistics (mean, min, max...) to check values look sensible."
	]]
};
var f1843aec = {
	"s": ["Tạo các đặc điểm thời gian (giờ, thứ, cuối tuần) từ thời điểm tạo đơn rồi bỏ hai cột ngày giờ gốc.", "Builds time features (hour, weekday, weekend) from order time, then drops the two raw datetime columns."],
	"r": [
		[
			1,
			1,
			"Lấy giờ trong ngày của đơn hàng.",
			"Extracts the order's hour of day."
		],
		[
			2,
			2,
			"Lấy thứ trong tuần dạng số (thứ Hai = 0 đến Chủ nhật = 6).",
			"Extracts weekday as a number (Monday = 0 to Sunday = 6)."
		],
		[
			3,
			3,
			"Tạo biến đúng/sai cho cuối tuần (thứ từ 5 trở lên) và coi nó là biến phân loại.",
			"Creates a True/False weekend flag (weekday 5 or more) stored as a category."
		],
		[
			4,
			4,
			"Bỏ hai cột ngày giờ gốc vì đã rút ra thông tin cần thiết, và mô hình không dùng được ngày giờ thô; kết quả gán lại df.",
			"Drops the raw datetime columns since the useful parts were extracted and models cannot use raw timestamps; result is assigned back to df."
		]
	]
};
var e4c52849 = {
	"s": ["Dùng biểu đồ hộp để tìm giá trị ngoại lệ ở thời gian giao và ba biến số chính.", "Uses box plots to spot outliers in delivery time and three key numeric features."],
	"r": [[
		1,
		2,
		"Vẽ biểu đồ hộp thời gian giao của tập huấn luyện rồi hiển thị.",
		"Draws a box plot of training delivery time and shows it."
	], [
		3,
		4,
		"Với số món, tổng tiền và quãng đường, vẽ biểu đồ hộp từng cột để thấy các điểm xa bất thường.",
		"For item count, subtotal and distance, draws a box plot each to reveal extreme points."
	]]
};
var b3ced9f4 = {
	"s": ["Đảm bảo tập kiểm tra có đúng các cột như tập huấn luyện và kiểm tra lại.", "Makes sure the test set has exactly the training columns and verifies it."],
	"r": [[
		1,
		1,
		"Bỏ các cột yếu khỏi X_test; errors='ignore' nghĩa là cột nào đã bị bỏ rồi thì bỏ qua, không báo lỗi.",
		"Drops the weak columns from X_test; errors='ignore' skips any already removed instead of failing."
	], [
		2,
		2,
		"In True nếu danh sách cột của hai tập giống hệt nhau, kể cả thứ tự.",
		"Prints True if both sets have identical column lists, including order."
	]]
};
var afbb5a8f = {
	"s": ["Huấn luyện hồi quy tuyến tính dự đoán thời gian giao rồi đo R2 và RMSE trên cả tập huấn luyện và tập kiểm tra.", "Fits a linear regression for delivery time and measures R2 and RMSE on both train and test sets."],
	"r": [
		[
			1,
			2,
			"Nạp mô hình hồi quy tuyến tính và hai thước đo R2 và sai số bình phương.",
			"Imports linear regression and the R2 and squared-error metrics."
		],
		[
			3,
			3,
			"Tạo mô hình và học từ tập huấn luyện.",
			"Creates the model and fits it on the training set."
		],
		[
			4,
			4,
			"Lặp qua hai tập: huấn luyện và kiểm tra.",
			"Loops over the two sets: training and validation."
		],
		[
			5,
			5,
			"Dự đoán thời gian giao cho tập đang xét.",
			"Predicts delivery time for the current set."
		],
		[
			6,
			6,
			"In R2 (mô hình giải thích được bao nhiêu biến thiên) và RMSE (sai số điển hình tính bằng phút, là căn bậc hai của sai số bình phương trung bình).",
			"Prints R2 (share of variation explained) and RMSE (typical error in minutes, the square root of mean squared error)."
		]
	]
};
var f18850b7 = {
	"s": ["Thử chọn k biến tốt nhất bằng RFE với k từ 1 đến tất cả, rồi vẽ R2 trên tập kiểm tra để chọn số biến hợp lý.", "Tries RFE feature selection for every k from 1 to all features and plots test R2 to pick a sensible number of features."],
	"r": [
		[
			1,
			2,
			"Nạp RFE (loại dần biến yếu nhất) và tạo từ điển lưu điểm.",
			"Imports RFE (removes the weakest features step by step) and creates a dict for scores."
		],
		[
			3,
			3,
			"Lặp k từ 1 đến tổng số cột.",
			"Loops k from 1 to the total number of columns."
		],
		[
			4,
			4,
			"Chạy RFE để giữ lại k biến tốt nhất theo hồi quy tuyến tính.",
			"Runs RFE to keep the k best features under linear regression."
		],
		[
			5,
			5,
			"Lấy tên k cột được giữ.",
			"Gets the names of the k kept columns."
		],
		[
			6,
			6,
			"Huấn luyện lại mô hình chỉ với các cột đó.",
			"Refits a model using only those columns."
		],
		[
			7,
			7,
			"Lưu R2 của mô hình trên tập kiểm tra cho giá trị k này.",
			"Stores the model's test-set R2 for this k."
		],
		[
			8,
			8,
			"Vẽ R2 theo số biến để tìm điểm mà thêm biến không còn cải thiện đáng kể.",
			"Plots R2 against number of features to find where adding more stops helping."
		]
	]
};
var ae729905 = {
	"s": ["Quy đổi hệ số của mô hình (đã chuẩn hoá) về đơn vị gốc để diễn giải được, ví dụ tăng 1 đơn vị khoảng cách thì thời gian giao tăng bao nhiêu phút.", "Convert the scaled model coefficients back to original units so they can be interpreted, e.g. minutes per extra unit of distance."],
	"r": [
		[
			1,
			1,
			"Gắn tên cột cho các hệ số của mô hình để dễ đọc.",
			"Label the model coefficients with their column names."
		],
		[
			2,
			2,
			"Lấy độ lệch chuẩn mà bộ chuẩn hoá đã dùng cho từng cột số.",
			"Get the standard deviation the scaler used for each numeric column."
		],
		[
			3,
			3,
			"Chia hệ số đã chuẩn hoá cho độ lệch chuẩn để ra hệ số theo đơn vị gốc; chỉ làm với cột số có trong mô hình.",
			"Divide scaled coefficients by the scale to get original-unit coefficients, only for numeric columns present in the model."
		],
		[
			4,
			4,
			"In bảng so sánh hệ số chuẩn hoá và hệ số gốc.",
			"Print a table comparing scaled and original coefficients."
		]
	]
};
var b149d678 = {
	"s": ["Tạo đặc trưng giờ trong ngày và cuối tuần từ thời điểm đặt đơn, xem thời gian giao thay đổi theo giờ, rồi bỏ các cột thời gian gốc.", "Create hour-of-day and weekend features from the order time, look at delivery time by hour, then drop the raw timestamp columns."],
	"r": [
		[
			1,
			1,
			"Lấy giờ (0–23) trong thời điểm đặt đơn vì giờ cao điểm ảnh hưởng thời gian giao.",
			"Extract the hour (0-23) of the order time, since rush hours affect delivery time."
		],
		[
			2,
			2,
			"Lấy thứ trong tuần (0 là thứ Hai, 6 là Chủ nhật).",
			"Extract the day of week (0 is Monday, 6 is Sunday)."
		],
		[
			3,
			3,
			"Đánh dấu cuối tuần là thứ 5 trở đi (Thứ Bảy, Chủ nhật), kết quả True/False rồi đổi thành kiểu phân loại.",
			"Flag weekends as day 5 or more (Saturday, Sunday), giving True/False stored as a category."
		],
		[
			4,
			4,
			"In thời gian giao trung bình theo từng giờ, làm tròn 1 chữ số.",
			"Print average delivery time for each hour, rounded to 1 decimal."
		],
		[
			5,
			5,
			"Bỏ hai cột thời gian gốc vì đã rút ra giờ và ngày, mô hình không dùng được cột ngày giờ thô.",
			"Drop the two raw timestamp columns now that hour and day are extracted; the model cannot use raw datetimes."
		],
		[
			6,
			6,
			"Vẽ đường thời gian giao trung bình theo giờ để thấy khung giờ giao chậm.",
			"Plot average delivery time by hour to spot slow hours."
		]
	]
};
var d7e66e9b = {
	"s": ["Vẽ biểu đồ cột cho các biến phân loại để xem mỗi nhóm có bao nhiêu đơn.", "Draw bar charts for categorical features to see how many orders fall in each group."],
	"r": [
		[
			1,
			1,
			"Tạo một hàng 4 khung biểu đồ.",
			"Create a row of 4 chart panels."
		],
		[
			2,
			3,
			"Với từng cột market_id, order_protocol, isWeekend: đếm số đơn mỗi giá trị, sắp theo thứ tự rồi vẽ cột vào từng khung.",
			"For market_id, order_protocol and isWeekend: count orders per value, sort by value, and draw bars in each panel."
		],
		[
			4,
			4,
			"Khung thứ 4 vẽ 15 loại cửa hàng phổ biến nhất vì có quá nhiều loại để vẽ hết.",
			"The 4th panel shows the 15 most common store categories since there are too many to plot all."
		],
		[
			5,
			5,
			"Căn bố cục để các khung không đè lên nhau.",
			"Adjust layout so panels do not overlap."
		]
	]
};
var bb841a93 = {
	"s": ["Xem phân phối của biến mục tiêu là thời gian giao hàng.", "Inspect the distribution of the target, delivery time."],
	"r": [[
		1,
		1,
		"Vẽ histogram kèm đường mật độ của thời gian giao để xem có lệch hay có điểm xa không.",
		"Histogram with density curve of delivery time to check skew or outliers."
	], [
		2,
		2,
		"In thống kê mô tả (trung bình, min, max, các phân vị).",
		"Print summary statistics (mean, min, max, quantiles)."
	]]
};
var b1d75d8c = {
	"s": ["Xem mối quan hệ giữa thời gian giao và các biến số chính, cùng thời gian giao theo giờ.", "Examine how delivery time relates to key numeric features and to hour of day."],
	"r": [
		[
			1,
			1,
			"Ghép đặc trưng huấn luyện với thời gian giao thành một bảng để vẽ cùng nhau.",
			"Combine training features with delivery time into one table for plotting."
		],
		[
			2,
			2,
			"Lấy ngẫu nhiên 5000 dòng cho biểu đồ nhanh và đỡ rối; random_state=42 giúp lần nào cũng lấy giống nhau.",
			"Randomly sample 5000 rows so plots are fast and less cluttered; random_state=42 makes the sample reproducible."
		],
		[
			3,
			5,
			"Vẽ 3 biểu đồ chấm giữa thời gian giao với khoảng cách, tổng tiền hàng và số đơn đang chờ; độ trong suốt 0.3 để thấy chỗ chấm dày.",
			"Draw 3 scatter plots of delivery time against distance, subtotal and outstanding orders; transparency 0.3 reveals dense areas."
		],
		[
			6,
			6,
			"Vẽ boxplot thời gian giao theo từng giờ để so mức trung vị và độ phân tán.",
			"Boxplot of delivery time by hour to compare medians and spread."
		]
	]
};
var b0fea5a6 = {
	"s": ["Bỏ các cột có quan hệ yếu với thời gian giao khỏi cả tập huấn luyện và kiểm tra.", "Drop weakly related columns from both training and test sets."],
	"r": [
		[
			1,
			1,
			"Liệt kê hai cột bị coi là ít hữu ích.",
			"List the two columns judged weak."
		],
		[
			2,
			3,
			"Bỏ hai cột đó ở cả tập huấn luyện và kiểm tra để hai tập vẫn có cùng cột.",
			"Drop them from train and test so both keep identical columns."
		],
		[
			4,
			4,
			"In danh sách cột còn lại để kiểm tra.",
			"Print the remaining columns to check."
		]
	]
};
var d647c220 = {
	"s": ["Dùng boxplot để tìm điểm xa trong thời gian giao, số món, tổng tiền và khoảng cách.", "Use boxplots to find outliers in delivery time, item count, subtotal and distance."],
	"r": [
		[
			1,
			1,
			"Ghép lại đặc trưng và thời gian giao thành một bảng.",
			"Rebuild a table of features plus delivery time."
		],
		[
			2,
			4,
			"Vẽ 4 boxplot cạnh nhau; các chấm nằm ngoài râu là điểm xa.",
			"Draw 4 side-by-side boxplots; dots beyond the whiskers are outliers."
		],
		[
			5,
			5,
			"In giá trị lớn nhất của 3 cột để thấy mức cực đoan.",
			"Print the maximum of the three columns to see how extreme they get."
		]
	]
};
var cc9a6e4d = {
	"s": ["Làm sạch tập huấn luyện: bỏ dòng có giá trị âm vô lý và cắt bỏ 1% giá trị lớn nhất của ba biến để giảm ảnh hưởng điểm xa.", "Clean the training set: drop rows with impossible negatives and trim the top 1% of three variables to limit outlier influence."],
	"r": [
		[
			1,
			1,
			"Ghi số dòng ban đầu để so sánh sau.",
			"Record the starting row count for comparison."
		],
		[
			2,
			3,
			"Giữ lại các dòng mà cả 3 cột số người/đơn đều không âm, vì giá trị âm là lỗi dữ liệu; mặt nạ giữ dòng nào điều kiện đúng.",
			"Keep rows where all three courier/order counts are non-negative, as negatives are data errors; the mask keeps rows where the condition is true."
		],
		[
			4,
			4,
			"Ghi số dòng sau khi bỏ giá trị âm.",
			"Record the row count after removing negatives."
		],
		[
			5,
			7,
			"Với từng cột, tính ngưỡng phân vị 99 rồi giữ các dòng không vượt ngưỡng, tức bỏ 1% điểm xa nhất.",
			"For each column compute the 99th percentile and keep rows at or below it, removing the top 1% extreme points."
		],
		[
			8,
			8,
			"In số dòng bị bỏ vì âm, vì quá xa, và số còn lại.",
			"Print how many rows were dropped for negatives, for being extreme, and how many remain."
		],
		[
			9,
			9,
			"Lưu ngưỡng phân vị 99 của từng cột (tính từ X_train hiện chưa lọc) để dùng lại sau.",
			"Store each column's 99th-percentile cap (computed from the not-yet-updated X_train) for later use."
		],
		[
			10,
			10,
			"Tách lại thành mục tiêu y_train và đặc trưng X_train từ bảng đã làm sạch.",
			"Split the cleaned table back into target y_train and features X_train."
		]
	]
};
var af07cd3a = {
	"s": ["Huấn luyện hồi quy tuyến tính trên toàn bộ biến và so điểm trên tập huấn luyện với tập kiểm tra để xem có quá khớp không.", "Train a linear regression on all features and compare train versus validation scores to spot overfitting."],
	"r": [
		[
			1,
			2,
			"Nạp mô hình hồi quy tuyến tính và các thước đo R2 (tỉ lệ biến thiên được giải thích) và sai số bình phương.",
			"Import linear regression and the metrics R2 (share of variation explained) and squared error."
		],
		[
			3,
			3,
			"Huấn luyện mô hình trên dữ liệu huấn luyện đã xử lý.",
			"Fit the model on the processed training data."
		],
		[
			4,
			6,
			"Với từng tập (huấn luyện, kiểm tra): dự đoán rồi in R2 và RMSE (sai số điển hình tính bằng phút, căn bậc hai của sai số bình phương trung bình); hai tập gần nhau nghĩa là mô hình không quá khớp.",
			"For each set (train, valid): predict then print R2 and RMSE (typical error in minutes, root of mean squared error); close values mean no overfitting."
		]
	]
};
var c343998f = {
	"s": ["Chốt mô hình cuối với 12 biến do RFE chọn, đo R2 trên tập kiểm tra và vẽ ba biểu đồ phần dư để kiểm tra giả định.", "Fix the final model with 12 RFE-selected features, report validation R2 and draw three residual plots to check assumptions."],
	"r": [
		[
			1,
			3,
			"Đặt số biến là 12, chạy RFE và lấy tên 12 biến được giữ.",
			"Set 12 features, run RFE and get the names of the kept ones."
		],
		[
			4,
			5,
			"Huấn luyện mô hình cuối chỉ với 12 biến, dự đoán trên tập kiểm tra và tính phần dư (thật trừ dự đoán).",
			"Fit the final model on those 12 features, predict on the test set and compute residuals (actual minus predicted)."
		],
		[
			6,
			7,
			"In danh sách biến được giữ và R2 trên tập kiểm tra.",
			"Print the kept variables and validation R2."
		],
		[
			8,
			9,
			"Nạp statsmodels và tạo hàng 3 khung biểu đồ.",
			"Import statsmodels and create a row of three panels."
		],
		[
			10,
			10,
			"Khung 1: phần dư theo giá trị dự đoán kèm đường 0; không nên thấy quy luật nào.",
			"Panel 1: residuals versus predictions with a zero line; no pattern should appear."
		],
		[
			11,
			11,
			"Khung 2: biểu đồ Q-Q xem phần dư có gần phân phối chuẩn không.",
			"Panel 2: Q-Q plot to see whether residuals are close to normal."
		],
		[
			12,
			12,
			"Khung 3: histogram phần dư, mong đợi hình chuông quanh 0.",
			"Panel 3: residual histogram, expected to be bell-shaped around 0."
		]
	]
};
var cf731703 = {
	"s": ["Nạp hai thư viện nền tảng cho phân tích dữ liệu.", "Import the two core data-analysis libraries."],
	"r": [[
		2,
		3,
		"Nạp numpy cho tính toán số và pandas cho làm việc với bảng dữ liệu.",
		"Import numpy for numeric work and pandas for tables."
	]]
};
var de645e23 = {
	"s": ["Nạp các thước đo của sklearn và kiểm tra độ chính xác tổng thể.", "Import sklearn metrics and check overall accuracy."],
	"r": [[
		1,
		2,
		"Nạp module metrics chứa các thước đo đánh giá mô hình.",
		"Import the metrics module holding model-evaluation measures."
	], [
		4,
		4,
		"Tính độ chính xác tổng thể: tỉ lệ dự đoán đúng trên toàn bộ.",
		"Compute overall accuracy, the share of correct predictions."
	]]
};
var eabab501 = {
	"s": ["Xem thống kê tóm tắt (trung bình, nhỏ nhất, lớn nhất...) của các cột số để nắm quy mô dữ liệu nhân viên.", "Shows summary statistics (mean, min, max...) of numeric columns to get a feel for the employee data."],
	"r": [[
		1,
		1,
		"Tính các số thống kê cơ bản cho từng cột số, giúp phát hiện giá trị lạ như tuổi hay lương quá cao/thấp.",
		"Computes basic statistics for each numeric column, helping spot odd values such as extreme ages or incomes."
	]]
};
var d6d9d010 = {
	"s": ["Nạp công cụ chia dữ liệu thành tập huấn luyện và tập kiểm tra.", "Imports the tool that splits data into training and validation sets."],
	"r": [[
		1,
		1,
		"Nhập hàm train_test_split của sklearn, dùng ở bước sau để tách dữ liệu.",
		"Imports sklearn's train_test_split, used later to split the data."
	]]
};
var e92c6c55 = {
	"s": ["Lấy danh sách các cột số của tập huấn luyện để vẽ và chuẩn hóa sau này.", "Collects the numeric columns of the training set for later plotting and scaling."],
	"r": [[
		1,
		1,
		"Chọn các cột có kiểu số nguyên hoặc số thực rồi lấy tên của chúng.",
		"Selects columns of integer or float type and takes their names."
	], [
		2,
		2,
		"Hiển thị danh sách tên cột đó.",
		"Displays that list of names."
	]]
};
var d246f289 = {
	"s": ["Vẽ biểu đồ đếm cho mỗi biến dạng chữ, tách theo nghỉ việc/ở lại, để xem nhóm nào hay nghỉ.", "Plots counts for each text variable split by attrition to see which groups tend to leave."],
	"r": [
		[
			1,
			1,
			"Lấy danh sách các cột dạng chữ của tập huấn luyện.",
			"Gets the list of text columns in the training set."
		],
		[
			2,
			3,
			"Lặp qua từng cột, ghép tạm cột Attrition vào bảng và vẽ số người mỗi nhóm, tô màu theo nghỉ/ở lại.",
			"Loops through each column, temporarily attaches Attrition and plots counts per category coloured by left/stayed."
		],
		[
			4,
			4,
			"Xoay nhãn trục x 45 độ cho khỏi chồng chữ rồi hiển thị hình.",
			"Rotates x labels 45 degrees to avoid overlap, then shows the plot."
		]
	]
};
var a1282f9f = {
	"s": ["Lấy danh sách cột số của tập kiểm tra.", "Gets the numeric column list of the validation set."],
	"r": [[
		1,
		1,
		"Chọn các cột kiểu số của tập kiểm tra để vẽ kiểm tra phân bố như tập huấn luyện.",
		"Selects the validation set's numeric columns so distributions can be compared with training."
	]]
};
var db1d857d = {
	"s": ["In tỷ lệ nghỉ việc/ở lại trong tập kiểm tra để so với tập huấn luyện.", "Prints the leave/stay proportions in the validation set for comparison with training."],
	"r": [[
		1,
		1,
		"Đếm tỷ lệ từng nhóm Attrition ở tập kiểm tra, làm tròn 3 chữ số; nếu gần với tập huấn luyện thì việc chia hợp lý.",
		"Prints each Attrition proportion in validation, rounded to 3 decimals; close to training means a fair split."
	]]
};
var d78d1022 = {
	"s": ["Lấy danh sách các cột dạng chữ cần chuyển thành số.", "Lists the text columns that must be converted to numbers."],
	"r": [[
		1,
		1,
		"Chọn các cột kiểu chữ (object) của tập huấn luyện vì mô hình chỉ hiểu số.",
		"Selects the text-type (object) columns of training since the model only understands numbers."
	], [
		2,
		2,
		"In tên các cột đó.",
		"Prints their names."
	]]
};
var e1dd5ab3 = {
	"s": ["Ghép các cột số với cột biến giả để có bảng đầu vào hoàn chỉnh cho mô hình.", "Joins numeric columns with dummy columns to form the final model input."],
	"r": [
		[
			1,
			1,
			"Bỏ các cột chữ gốc của tập huấn luyện rồi nối thêm các cột 0/1 theo chiều ngang (axis=1).",
			"Drops the original text columns from training and attaches the 0/1 columns side by side (axis=1)."
		],
		[
			2,
			2,
			"Làm tương tự cho tập kiểm tra.",
			"Does the same for validation."
		],
		[
			3,
			3,
			"In kích thước hai bảng để chắc số cột bằng nhau.",
			"Prints both shapes to confirm the column counts match."
		]
	]
};
var e460df9a = {
	"s": ["Chuẩn bị mô hình hồi quy logistic dùng cho bước chọn biến.", "Prepares a logistic regression model for feature selection."],
	"r": [[
		1,
		1,
		"Nhập LogisticRegression, mô hình dự đoán xác suất hai kết quả (nghỉ/ở).",
		"Imports LogisticRegression, a model predicting probability of two outcomes (left/stayed)."
	], [
		2,
		2,
		"Tạo mô hình với max_iter=1000 để cho phép tối đa 1000 vòng tính đến khi hội tụ.",
		"Creates it with max_iter=1000, allowing up to 1000 rounds until it converges."
	]]
};
var e261eb02 = {
	"s": ["Dùng RFE để chọn ra 15 biến quan trọng nhất.", "Uses RFE to pick the 15 most important features."],
	"r": [
		[
			1,
			1,
			"Nhập RFE, phương pháp loại dần biến yếu nhất.",
			"Imports RFE, which repeatedly removes the weakest variable."
		],
		[
			2,
			2,
			"Cấu hình RFE dùng mô hình logistic và giữ lại 15 biến.",
			"Sets RFE to use the logistic model and keep 15 variables."
		],
		[
			3,
			3,
			"Chạy trên tập huấn luyện; ravel() làm phẳng cột mục tiêu thành một dãy.",
			"Runs it on training; ravel() flattens the target column into a 1-D array."
		],
		[
			4,
			4,
			"Hiển thị tên 15 biến được chọn.",
			"Shows the names of the 15 chosen variables."
		]
	]
};
var d0ec4a5e = {
	"s": ["Chỉ giữ 15 biến đã chọn trong tập huấn luyện.", "Keeps only the 15 selected variables in training."],
	"r": [[
		1,
		1,
		"Cắt bảng huấn luyện còn các cột trong col.",
		"Subsets the training table to the columns in col."
	], [
		2,
		2,
		"Xem vài dòng đầu.",
		"Shows the first rows."
	]]
};
var c2ea247d = {
	"s": ["Huấn luyện mô hình logistic bằng statsmodels để xem hệ số và mức ý nghĩa.", "Fits a logistic model in statsmodels to read coefficients and significance."],
	"r": [
		[
			1,
			1,
			"Khai báo mô hình GLM họ nhị thức (Binomial) cho kết quả 0/1.",
			"Declares a GLM with a Binomial family for a 0/1 outcome."
		],
		[
			2,
			2,
			"fit() huấn luyện mô hình.",
			"fit() trains the model."
		],
		[
			3,
			3,
			"In bảng tóm tắt: hệ số, p-value cho biết biến nào thực sự có ý nghĩa.",
			"Prints the summary: coefficients and p-values showing which variables really matter."
		]
	]
};
var f0a9eb6d = {
	"s": ["Tính VIF để phát hiện biến bị trùng thông tin với nhau (đa cộng tuyến).", "Computes VIF to detect variables that overlap with each other (multicollinearity)."],
	"r": [
		[
			1,
			1,
			"Nhập hàm tính VIF.",
			"Imports the VIF function."
		],
		[
			2,
			3,
			"Với mỗi biến tính VIF, cho biết biến đó được các biến khác giải thích nhiều đến đâu, rồi gom vào bảng.",
			"For each variable computes VIF, showing how much the others explain it, and collects results in a table."
		],
		[
			4,
			4,
			"Sắp xếp VIF từ cao xuống thấp; VIF lớn (thường trên 5) nghĩa là nên cân nhắc bỏ biến.",
			"Sorts VIF from high to low; large values (commonly above 5) suggest considering dropping the variable."
		]
	]
};
var e3c04a3f = {
	"s": ["Dự đoán xác suất ở lại cho từng nhân viên trong tập huấn luyện.", "Predicts each training employee's probability of staying."],
	"r": [[
		1,
		1,
		"Dùng mô hình đã huấn luyện cho ra xác suất từ 0 đến 1.",
		"Uses the fitted model to output probabilities between 0 and 1."
	], [
		2,
		2,
		"Xem vài giá trị đầu.",
		"Shows the first values."
	]]
};
var fa8f014c = {
	"s": ["Chuyển kết quả dự đoán thành mảng một chiều.", "Converts predictions into a flat 1-D array."],
	"r": [[
		1,
		1,
		"Lấy giá trị thuần và làm phẳng để dễ ghép vào bảng.",
		"Takes the raw values and flattens them so they fit into a table."
	]]
};
var b1f15d2e = {
	"s": ["Biến xác suất thành dự đoán 0/1 với ngưỡng 0,5.", "Turns probabilities into 0/1 predictions using a 0.5 cutoff."],
	"r": [[
		1,
		1,
		"Nếu xác suất lớn hơn 0,5 thì đoán là ở lại (1), ngược lại là nghỉ (0).",
		"If probability is above 0.5 predict stayed (1), otherwise left (0)."
	], [
		2,
		2,
		"Xem kết quả.",
		"Shows the result."
	]]
};
var d17eb9fa = {
	"s": ["Lập ma trận nhầm lẫn để thấy loại đúng và loại sai cụ thể.", "Builds a confusion matrix to see the kinds of right and wrong predictions."],
	"r": [[
		1,
		1,
		"Đếm số dòng theo cặp (thực tế, dự đoán): hàng là thực tế, cột là dự đoán.",
		"Counts rows by (actual, predicted) pair: rows are actual, columns predicted."
	], [
		2,
		2,
		"In ma trận.",
		"Prints the matrix."
	]]
};
var d2a7ad9b = {
	"s": ["Tạo dự đoán 0/1 ứng với nhiều ngưỡng từ 0 đến 0,9.", "Creates 0/1 predictions for many cutoffs from 0 to 0.9."],
	"r": [
		[
			1,
			1,
			"Lập danh sách ngưỡng 0,0; 0,1; ... 0,9.",
			"Builds the cutoff list 0.0, 0.1, ... 0.9."
		],
		[
			2,
			3,
			"Với mỗi ngưỡng thêm một cột dự đoán: xác suất lớn hơn ngưỡng thì là 1.",
			"For each cutoff adds a prediction column: probability above the cutoff gives 1."
		],
		[
			4,
			4,
			"Xem bảng.",
			"Shows the table."
		]
	]
};
var c222e796 = {
	"s": ["Tính độ chính xác, độ nhạy, độ đặc hiệu cho từng ngưỡng và vẽ để chọn ngưỡng tốt nhất.", "Computes accuracy, sensitivity, specificity per cutoff and plots them to choose the best cutoff."],
	"r": [
		[
			1,
			1,
			"Tạo bảng rỗng để chứa kết quả.",
			"Creates an empty table for results."
		],
		[
			2,
			4,
			"Với mỗi ngưỡng lập ma trận nhầm lẫn và tách TN, FP, FN, TP.",
			"For each cutoff builds the confusion matrix and unpacks TN, FP, FN, TP."
		],
		[
			5,
			5,
			"Ghi một dòng: ngưỡng, độ chính xác, độ nhạy, độ đặc hiệu.",
			"Stores a row: cutoff, accuracy, sensitivity, specificity."
		],
		[
			6,
			6,
			"Vẽ ba đường theo ngưỡng; chỗ ba đường gặp nhau là ngưỡng cân bằng.",
			"Plots three lines against cutoff; where they meet is a balanced cutoff."
		],
		[
			7,
			7,
			"Hiển thị hình.",
			"Shows the plot."
		]
	]
};
var aa286749 = {
	"s": ["Chốt ngưỡng cuối cùng và tạo dự đoán theo ngưỡng đó.", "Fixes the final cutoff and makes predictions with it."],
	"r": [[
		1,
		1,
		"Đặt ngưỡng 0,5 (nên thay bằng giá trị đọc từ biểu đồ).",
		"Sets the cutoff to 0.5 (should be replaced by the value read from the plot)."
	], [
		2,
		2,
		"Xác suất lớn hơn ngưỡng thì đoán là ở lại (1), ngược lại là nghỉ (0).",
		"Probability above the cutoff predicts stayed (1), else left (0)."
	]]
};
var d0b78a0b = {
	"s": ["Lập lại ma trận nhầm lẫn với ngưỡng cuối.", "Rebuilds the confusion matrix with the final cutoff."],
	"r": [[
		1,
		1,
		"Đếm các cặp (thực tế, dự đoán) theo ngưỡng mới.",
		"Counts (actual, predicted) pairs using the new cutoff."
	], [
		2,
		2,
		"In ma trận.",
		"Prints it."
	]]
};
var c56e7a2c = {
	"s": ["Vẽ precision và recall theo ngưỡng để thấy sự đánh đổi giữa hai chỉ số.", "Plots precision and recall against cutoff to show their trade-off."],
	"r": [
		[
			1,
			1,
			"Nhập hàm precision_recall_curve.",
			"Imports precision_recall_curve."
		],
		[
			2,
			2,
			"Tính precision và recall ở nhiều ngưỡng.",
			"Computes precision and recall at many cutoffs."
		],
		[
			3,
			3,
			"Vẽ precision (xanh lá) và recall (đỏ); bỏ giá trị cuối của mỗi mảng cho khớp độ dài với ngưỡng.",
			"Plots precision (green) and recall (red); the last value of each array is dropped to match the cutoff length."
		]
	]
};
var e0211374 = {
	"s": ["Dự đoán xác suất ở lại cho tập kiểm tra bằng mô hình đã huấn luyện.", "Predicts stay probabilities for validation with the fitted model."],
	"r": [[
		1,
		1,
		"Dùng mô hình học từ tập huấn luyện để đoán dữ liệu chưa từng thấy.",
		"Applies the model learned on training to unseen data."
	]]
};
var cb266e28 = {
	"s": ["Ghép giá trị thật và xác suất dự đoán của tập kiểm tra vào bảng.", "Combines validation actuals and predicted probabilities into a table."],
	"r": [[
		1,
		1,
		"Tạo bảng hai cột Stayed (thực tế) và Stayed_Prob (xác suất).",
		"Builds a table with Stayed (actual) and Stayed_Prob (probability)."
	], [
		2,
		2,
		"Xem vài dòng đầu.",
		"Shows the first rows."
	]]
};
var adad1f07 = {
	"s": ["Lập ma trận nhầm lẫn cho tập kiểm tra.", "Builds the confusion matrix for validation."],
	"r": [
		[
			1,
			1,
			"Đếm các cặp (thực tế, dự đoán) của tập kiểm tra.",
			"Counts (actual, predicted) pairs on validation."
		],
		[
			2,
			2,
			"Tách TN, FP, FN, TP để tính các chỉ số tiếp.",
			"Unpacks TN, FP, FN, TP for later metrics."
		],
		[
			3,
			3,
			"In ma trận.",
			"Prints the matrix."
		]
	]
};
var efedf952 = {
	"s": ["Nạp thư viện, đọc file dữ liệu nhân viên và xem nhanh kích thước cùng vài dòng đầu.", "Loads libraries, reads the employee file and takes a first look at its size and sample rows."],
	"r": [
		[
			1,
			1,
			"Nhập pandas, numpy (tính toán), matplotlib và seaborn (vẽ biểu đồ) với tên viết tắt quen dùng.",
			"Imports pandas, numpy (maths), matplotlib and seaborn (charts) under their usual short names."
		],
		[
			2,
			2,
			"Đọc file CSV dữ liệu nhân viên vào bảng df.",
			"Reads the employee CSV into the table df."
		],
		[
			3,
			3,
			"In số dòng và số cột.",
			"Prints the number of rows and columns."
		],
		[
			4,
			4,
			"Xem 3 dòng đầu, xoay ngang (.T) để mỗi cột nằm một hàng cho dễ đọc.",
			"Shows the first 3 rows transposed (.T) so each column sits on its own line for easy reading."
		]
	]
};
var f335efba = {
	"s": ["Bỏ cột mã nhân viên vì không giúp dự đoán.", "Drops the employee ID column since it has no predictive value."],
	"r": [[
		1,
		1,
		"Xóa cột 'Employee ID' và gán lại vào df.",
		"Removes 'Employee ID' and reassigns to df."
	], [
		2,
		2,
		"In kích thước bảng để xác nhận đã bớt một cột.",
		"Prints the shape to confirm one column fewer."
	]]
};
var ee2876a3 = {
	"s": ["Chia dữ liệu 70% huấn luyện, 30% kiểm tra.", "Splits data 70% training, 30% validation."],
	"r": [
		[
			1,
			1,
			"Nhập hàm chia dữ liệu.",
			"Imports the splitting function."
		],
		[
			2,
			2,
			"Chia ngẫu nhiên theo tỷ lệ 70/30; random_state=100 cố định cách chia để kết quả lặp lại được.",
			"Splits randomly 70/30; random_state=100 fixes the split so results are repeatable."
		],
		[
			3,
			3,
			"In số dòng mỗi tập.",
			"Prints each set's size."
		]
	]
};
var ee8a96d6 = {
	"s": ["Vẽ histogram các biến số của tập huấn luyện để xem phân bố.", "Draws histograms of training numeric variables to see distributions."],
	"r": [[
		1,
		1,
		"Vẽ histogram 30 cột cho mỗi biến, rồi tight_layout xếp lại cho các ô không đè nhau.",
		"Draws 30-bin histograms per variable, then tight_layout spaces panels so they do not overlap."
	]]
};
var a0900eda = {
	"s": ["Tính và vẽ tỷ lệ nghỉ việc theo từng nhóm của sáu yếu tố chính để thấy yếu tố nào làm tăng nghỉ việc.", "Computes and plots the attrition rate per group for six key factors to see which raise leaving."],
	"r": [
		[
			1,
			1,
			"Lấy các cột dạng chữ của tập huấn luyện.",
			"Gets the text columns of the training set."
		],
		[
			2,
			2,
			"Ghép tạm cột Attrition vào bảng.",
			"Temporarily attaches Attrition to the table."
		],
		[
			3,
			3,
			"Với mỗi cột chữ, nhóm theo từng giá trị và tính phần người có Attrition là 'Left', tức tỷ lệ nghỉ.",
			"For each text column, groups by value and computes the share with Attrition 'Left', i.e. the leave rate."
		],
		[
			4,
			4,
			"Chọn sáu yếu tố cần xem: làm thêm giờ, hôn nhân, cấp bậc, làm từ xa, cân bằng công việc, hài lòng.",
			"Picks six factors: overtime, marital status, job level, remote work, work-life balance, satisfaction."
		],
		[
			5,
			5,
			"Tạo lưới 2 hàng 3 cột để chứa sáu biểu đồ.",
			"Creates a 2x3 grid for six charts."
		],
		[
			6,
			7,
			"Vẽ cột tỷ lệ nghỉ cho từng yếu tố, đặt trục y từ 0 đến 1 và kẻ vạch đỏ ở 0,479 (tỷ lệ nghỉ chung) để so sánh.",
			"Draws rate bars per factor, fixes the y-axis to 0-1 and adds a red line at 0.479 (overall leave rate) for comparison."
		],
		[
			8,
			8,
			"Xếp gọn bố cục.",
			"Tidies the layout."
		],
		[
			9,
			9,
			"In số tỷ lệ cụ thể cho mỗi yếu tố.",
			"Prints the exact rates for each factor."
		]
	]
};
var d6948cca = {
	"s": ["Biến các cột chữ của tập huấn luyện thành cột 0/1 và xem trước kết quả.", "Turns training text columns into 0/1 columns and previews them."],
	"r": [
		[
			1,
			1,
			"get_dummies tạo cột 0/1 cho mỗi nhóm; drop_first=True bỏ nhóm đầu để tránh thông tin thừa; dtype=int cho số 0/1.",
			"get_dummies makes 0/1 columns per category; drop_first=True drops the first to avoid redundancy; dtype=int gives 0/1."
		],
		[
			2,
			2,
			"In kích thước bảng biến giả.",
			"Prints the dummy table's shape."
		],
		[
			3,
			3,
			"Xem 3 dòng đầu, xoay ngang và lấy 12 hàng đầu cho gọn.",
			"Shows 3 rows transposed, keeping the first 12 lines to stay short."
		]
	]
};
var dc50c185 = {
	"s": ["Tạo biến giả cho tập kiểm tra khớp đúng cột của tập huấn luyện.", "Builds validation dummies matching training columns."],
	"r": [
		[
			1,
			1,
			"Chuyển cột chữ của tập kiểm tra thành 0/1.",
			"Converts validation text columns to 0/1."
		],
		[
			2,
			2,
			"Sắp lại cột theo tập huấn luyện, nhóm thiếu điền 0, để mô hình nhận cùng bộ cột.",
			"Reorders to training's columns, filling missing categories with 0 so the model gets the same columns."
		],
		[
			3,
			3,
			"In kích thước để so sánh.",
			"Prints the shape to compare."
		]
	]
};
var f419de10 = {
	"s": ["Chuẩn hóa các biến số bằng thang đo học từ tập huấn luyện và kiểm tra lại kết quả.", "Scales numeric variables with a scale learned on training and verifies the result."],
	"r": [
		[
			1,
			1,
			"Nhập công cụ chuẩn hóa.",
			"Imports the scaler."
		],
		[
			2,
			2,
			"Tạo bộ chuẩn hóa.",
			"Creates the scaler."
		],
		[
			3,
			3,
			"Học trung bình, độ lệch chuẩn từ tập huấn luyện và áp dụng ngay.",
			"Learns mean and standard deviation from training and applies them."
		],
		[
			4,
			4,
			"Áp dụng cùng số của tập huấn luyện cho tập kiểm tra, không học lại, để tránh rò rỉ dữ liệu.",
			"Applies training's numbers to validation without refitting, avoiding data leakage."
		],
		[
			5,
			5,
			"In trung bình và độ lệch chuẩn sau chuẩn hóa; nên gần 0 và 1.",
			"Prints mean and standard deviation after scaling; they should be near 0 and 1."
		]
	]
};
var cf11c4b6 = {
	"s": ["Dự đoán xác suất ở lại trên tập huấn luyện và đổi thành dự đoán 0/1 với ngưỡng 0,5.", "Predicts training stay-probabilities and converts to 0/1 at a 0.5 cutoff."],
	"r": [
		[
			1,
			1,
			"Nhập module metrics.",
			"Imports the metrics module."
		],
		[
			2,
			2,
			"Cho mô hình dự đoán xác suất.",
			"Has the model predict probabilities."
		],
		[
			3,
			3,
			"Lập bảng gồm giá trị thật (Stayed) và xác suất dự đoán.",
			"Builds a table of actual (Stayed) and predicted probability."
		],
		[
			4,
			4,
			"Xác suất lớn hơn 0,5 thì đoán ở lại (1), không thì nghỉ (0).",
			"Probability above 0.5 predicts stayed (1), else left (0)."
		],
		[
			5,
			5,
			"In 8 dòng đầu, làm tròn 3 chữ số.",
			"Prints the first 8 rows rounded to 3 decimals."
		]
	]
};
var f6e4aeeb = {
	"s": ["In độ chính xác của mô hình trên tập huấn luyện.", "Prints the model's training accuracy."],
	"r": [[
		1,
		1,
		"Tính tỷ lệ dự đoán đúng, làm tròn 4 chữ số.",
		"Computes the share predicted correctly, rounded to 4 decimals."
	]]
};
var c482363b = {
	"s": ["Tính và in độ nhạy và độ đặc hiệu.", "Computes and prints sensitivity and specificity."],
	"r": [[
		1,
		1,
		"Độ nhạy là tỷ lệ người ở lại được đoán đúng; độ đặc hiệu là tỷ lệ người nghỉ được đoán đúng.",
		"Sensitivity is the share of stayers caught; specificity the share of leavers caught."
	], [
		2,
		2,
		"In hai số làm tròn 3 chữ số.",
		"Prints both rounded to 3 decimals."
	]]
};
var b166c435 = {
	"s": ["Vẽ đường ROC trên tập huấn luyện và ghi AUC.", "Draws the training ROC curve and shows AUC."],
	"r": [
		[
			1,
			1,
			"Tính tỷ lệ dương giả và dương thật ở nhiều ngưỡng, giữ mọi điểm.",
			"Computes false- and true-positive rates at many cutoffs, keeping every point."
		],
		[
			2,
			2,
			"Tính AUC, diện tích dưới đường cong; càng gần 1 càng phân biệt tốt.",
			"Computes AUC, the area under the curve; nearer 1 means better separation."
		],
		[
			3,
			3,
			"Vẽ đường ROC kèm AUC trong chú thích và đường chéo đứt nét cho đoán ngẫu nhiên.",
			"Plots the ROC with AUC in the legend plus a dashed diagonal for random guessing."
		],
		[
			4,
			4,
			"Gắn nhãn trục, chú thích và tiêu đề.",
			"Adds axis labels, legend and title."
		]
	]
};
var e31370c2 = {
	"s": ["Chốt ngưỡng 0,5 và tạo dự đoán cuối cho tập huấn luyện.", "Fixes the 0.5 cutoff and makes final training predictions."],
	"r": [
		[
			1,
			1,
			"Đặt ngưỡng bằng 0,5.",
			"Sets the cutoff to 0.5."
		],
		[
			2,
			2,
			"Xác suất lớn hơn ngưỡng thì là 1 (ở lại), ngược lại là 0 (nghỉ).",
			"Probability above the cutoff gives 1 (stayed), else 0 (left)."
		],
		[
			3,
			3,
			"In ngưỡng đang dùng.",
			"Prints the cutoff in use."
		]
	]
};
var b5acc660 = {
	"s": ["Tính độ chính xác và ma trận nhầm lẫn của tập huấn luyện ở ngưỡng cuối.", "Computes training accuracy and confusion matrix at the final cutoff."],
	"r": [
		[
			1,
			1,
			"Lập ma trận nhầm lẫn theo dự đoán cuối.",
			"Builds the confusion matrix from final predictions."
		],
		[
			2,
			2,
			"In độ chính xác làm tròn 4 chữ số.",
			"Prints accuracy rounded to 4 decimals."
		],
		[
			3,
			3,
			"In ma trận.",
			"Prints the matrix."
		]
	]
};
var a160252e = {
	"s": ["Dự đoán trên tập kiểm tra bằng mô hình đã huấn luyện và đổi thành dự đoán 0/1.", "Predicts on validation with the fitted model and converts to 0/1."],
	"r": [
		[
			1,
			1,
			"Chỉ lấy 15 biến đã chọn và thêm hằng số.",
			"Takes only the 15 chosen variables and adds the intercept."
		],
		[
			2,
			2,
			"Cho mô hình tính xác suất ở lại cho dữ liệu chưa từng thấy.",
			"Gets stay probabilities for unseen data."
		],
		[
			3,
			3,
			"Lập bảng giá trị thật và xác suất.",
			"Builds a table of actual and probability."
		],
		[
			4,
			4,
			"Dùng ngưỡng cutoff đã chốt để tạo dự đoán 0/1.",
			"Uses the fixed cutoff to make 0/1 predictions."
		],
		[
			5,
			5,
			"Xem 6 dòng đầu.",
			"Shows the first 6 rows."
		]
	]
};
var bbf02471 = {
	"s": ["Tắt các cảnh báo không cần thiết cho bản báo cáo gọn hơn.", "Silences non-essential warnings to keep the output clean."],
	"r": [[
		2,
		2,
		"Nhập module warnings của Python.",
		"Imports Python's warnings module."
	], [
		3,
		3,
		"Ra lệnh bỏ qua mọi cảnh báo, để màn hình không bị rối; lưu ý nó cũng che cả cảnh báo hữu ích.",
		"Tells Python to ignore all warnings so output stays uncluttered; note it also hides useful warnings."
	]]
};
var cb765f8b = {
	"s": ["Nạp các thư viện cơ bản: numpy và pandas để xử lý bảng số liệu, seaborn và matplotlib để vẽ biểu đồ.", "Load the core libraries: numpy and pandas for tables and numbers, seaborn and matplotlib for charts."],
	"r": [[
		2,
		3,
		"Nạp numpy (tính toán số) và pandas (bảng dữ liệu) với tên viết tắt np, pd để dùng cho cả bài.",
		"Load numpy (number maths) and pandas (data tables) under the usual short names np and pd."
	], [
		4,
		5,
		"Nạp seaborn và matplotlib để vẽ biểu đồ khám phá dữ liệu về các vụ bồi thường bảo hiểm.",
		"Load seaborn and matplotlib for the charts used to explore the insurance claims."
	]]
};
var ae5017f7 = {
	"s": ["Đọc file dữ liệu bồi thường bảo hiểm và xem kích thước cùng vài dòng đầu.", "Load the insurance claims file and look at its size and first rows."],
	"r": [
		[
			1,
			1,
			"Nạp pandas, numpy, matplotlib, seaborn: bộ công cụ xử lý bảng và vẽ biểu đồ.",
			"Load pandas, numpy, matplotlib and seaborn: the toolkit for tables and charts."
		],
		[
			2,
			2,
			"Đọc file CSV các vụ bồi thường vào bảng df.",
			"Read the claims CSV file into a table called df."
		],
		[
			3,
			3,
			"In số dòng và số cột để biết quy mô dữ liệu.",
			"Print the row and column counts to know the data's size."
		],
		[
			4,
			4,
			"Hiển thị 3 dòng đầu của 12 cột đầu để xem sơ bộ nội dung; iloc chọn theo vị trí.",
			"Show the first 3 rows of the first 12 columns for a quick look; iloc selects by position."
		]
	]
};
var cc7954b9 = {
	"s": ["Quét các cột chữ có ít giá trị khác nhau và đếm dấu '?', để phát hiện giá trị lạ hoặc thừa.", "Scan text columns with few distinct values and count '?' marks, to spot odd or redundant values."],
	"r": [[
		1,
		2,
		"Với mỗi cột chữ có dưới 12 giá trị khác nhau, in số lần xuất hiện của từng giá trị để nhìn ra giá trị bất thường.",
		"For each text column with under 12 distinct values, print how often each value appears to reveal anomalies."
	], [
		3,
		3,
		"Đếm số ô bằng dấu '?' (cách ghi thiếu dữ liệu) ở từng cột và chỉ giữ cột có ít nhất một ô như vậy.",
		"Count cells equal to '?' (a way of marking missing data) per column and keep only columns with at least one."
	]]
};
var c3121418 = {
	"s": ["Tìm các cột có gần như mỗi dòng một giá trị riêng (mã định danh) và bỏ chúng, vì không giúp dự đoán gian lận.", "Find columns where almost every row is unique (identifiers) and drop them, as they do not help predict fraud."],
	"r": [
		[
			1,
			2,
			"Tính tỷ lệ giá trị khác nhau trên tổng dòng của từng cột, sắp giảm dần và in 6 cột đầu; tỷ lệ gần 1 là dấu hiệu mã định danh.",
			"Compute the share of distinct values per column, sort descending and print the top 6; a ratio near 1 signals an identifier."
		],
		[
			3,
			3,
			"Chọn tay các cột định danh: số hợp đồng, địa điểm sự cố, mã bưu chính.",
			"Hand-pick the identifier columns: policy number, incident location, zip code."
		],
		[
			4,
			5,
			"Xoá các cột đó và in kích thước bảng mới.",
			"Drop those columns and print the new table size."
		]
	]
};
var ef9e1be4 = {
	"s": ["Đổi hai cột ngày từ dạng chữ sang kiểu ngày để sau này tính được khoảng cách giữa các ngày.", "Convert two date columns from text to real dates so intervals between them can be computed later."],
	"r": [[
		1,
		2,
		"Chuyển ngày mua bảo hiểm và ngày xảy ra sự cố sang kiểu datetime.",
		"Convert policy start date and incident date to datetime type."
	], [
		3,
		3,
		"In kiểu dữ liệu để xác nhận đã đổi đúng.",
		"Print the data types to confirm the conversion."
	]]
};
var c4ed9222 = {
	"s": ["Lấy danh sách các cột số của tập huấn luyện để phân tích riêng.", "Get the list of numeric columns in the training set for separate analysis."],
	"r": [[
		1,
		1,
		"Chọn các cột có kiểu số và lưu tên vào num_cols.",
		"Select numeric columns and store their names in num_cols."
	], [
		2,
		2,
		"In danh sách tên cột.",
		"Print the list of names."
	]]
};
var ba6939b5 = {
	"s": ["Vẽ phân bố các cột số của tập kiểm tra để đối chiếu với tập huấn luyện.", "Plot the numeric column distributions of the validation set to compare with training."],
	"r": [[
		1,
		1,
		"Lấy danh sách cột số của tập kiểm tra.",
		"Get the numeric column names of the validation set."
	], [
		2,
		2,
		"Vẽ histogram từng cột số; hình dạng nên giống tập huấn luyện nếu việc chia hợp lý.",
		"Draw a histogram per numeric column; shapes should resemble training if the split is sound."
	]]
};
var b685d500 = {
	"s": ["Tạo các cột mới có ý nghĩa từ ngày và số tiền, cho cả tập huấn luyện và kiểm tra.", "Create new meaningful columns from dates and amounts for both training and validation sets."],
	"r": [
		[
			1,
			1,
			"Lặp cùng một bước cho cả hai tập để hai tập có cột giống nhau.",
			"Repeat the same steps on both sets so they end up with identical columns."
		],
		[
			2,
			2,
			"Tuổi hợp đồng tính bằng ngày: từ ngày mua bảo hiểm đến ngày sự cố; sự cố xảy ra quá sớm sau khi mua có thể đáng ngờ.",
			"Policy age in days: from policy start to incident; an incident very soon after purchase can look suspicious."
		],
		[
			3,
			4,
			"Lấy tháng và thứ trong tuần của sự cố để bắt quy luật theo thời gian.",
			"Take the incident's month and weekday to catch time patterns."
		],
		[
			5,
			5,
			"Tiền bồi thường chia cho số xe liên quan, để biết mức mỗi xe.",
			"Claim amount divided by vehicles involved, giving the amount per vehicle."
		],
		[
			6,
			6,
			"Xem thống kê mô tả của bốn cột mới ở tập huấn luyện để kiểm tra giá trị hợp lý.",
			"Show summary statistics of the four new columns in training to check the values look sensible."
		]
	]
};
var d32e2a3e = {
	"s": ["Bỏ các cột không cần nữa vì đã dùng xong hoặc trùng thông tin, ở cả hai tập.", "Drop columns no longer needed because they are used up or duplicate information, in both sets."],
	"r": [
		[
			1,
			1,
			"Danh sách cột bỏ: hai cột ngày gốc (đã tạo cột mới từ chúng), các khoản bồi thường thành phần (đã có tổng), mẫu xe và tuổi.",
			"Columns to drop: the two original dates (new features were built from them), the component claim amounts (the total exists), car model and age."
		],
		[
			2,
			2,
			"Xoá các cột đó khỏi hai tập, sửa trực tiếp tại chỗ.",
			"Drop them from both sets, modifying the tables in place."
		],
		[
			3,
			3,
			"In kích thước tập huấn luyện sau khi xoá.",
			"Print the training shape after dropping."
		]
	]
};
var ddbc54a1 = {
	"s": ["Gộp các nhóm quá hiếm của bang và sở thích thành 'Other', để mô hình không phải học từ vài dòng lẻ.", "Merge rare state and hobby groups into 'Other' so the model does not learn from a handful of rows."],
	"r": [
		[
			2,
			2,
			"Tìm các bang có dưới 60 dòng trong tập huấn luyện.",
			"Find states with fewer than 60 rows in the training set."
		],
		[
			3,
			3,
			"Chọn tay hai sở thích giữ lại: cờ vua và cross-fit, vì chúng liên quan gian lận mạnh.",
			"Hand-pick two hobbies to keep: chess and cross-fit, which relate strongly to fraud."
		],
		[
			4,
			6,
			"Áp cho cả hai tập: thay bang hiếm bằng 'Other'; với sở thích, giữ giá trị nếu thuộc danh sách, còn lại đổi thành 'other'.",
			"Apply to both sets: replace rare states with 'Other'; for hobbies, keep the value if it is in the list, otherwise set 'other'."
		],
		[
			7,
			7,
			"In số dòng mỗi nhóm mới của bang và sở thích để kiểm tra.",
			"Print the counts of the new state and hobby groups to check."
		]
	]
};
var b64f0057 = {
	"s": ["Liệt kê các cột chữ còn lại cần chuyển thành biến giả.", "List the remaining text columns that need to become dummy variables."],
	"r": [[
		1,
		1,
		"Chọn các cột kiểu chữ của tập huấn luyện.",
		"Select the text-type columns of the training set."
	], [
		2,
		2,
		"In tên các cột này.",
		"Print their names."
	]]
};
var e3e65d3b = {
	"s": ["Biến các cột chữ của tập huấn luyện thành các cột 0/1 và ghép lại với phần số.", "Turn the training text columns into 0/1 columns and join them to the numeric part."],
	"r": [
		[
			1,
			1,
			"get_dummies tạo mỗi nhóm một cột 0/1; drop_first=True bỏ một nhóm để tránh các cột phụ thuộc nhau hoàn toàn.",
			"get_dummies makes one 0/1 column per group; drop_first=True drops one group to avoid perfectly dependent columns."
		],
		[
			2,
			2,
			"Bỏ cột chữ gốc rồi nối các cột 0/1 vào bên cạnh.",
			"Remove the original text columns and attach the 0/1 columns alongside."
		],
		[
			3,
			3,
			"In kích thước mới.",
			"Print the new shape."
		]
	]
};
var a1be0368 = {
	"s": ["Chốt ngưỡng 0,5 và gán nhãn cuối cùng cho tập huấn luyện.", "Fix the cutoff at 0.5 and set the final labels for the training set."],
	"r": [
		[
			1,
			1,
			"Chọn ngưỡng 0,5 sau khi xem bảng thử ngưỡng.",
			"Choose 0.5 after reviewing the cutoff table."
		],
		[
			2,
			2,
			"Tạo cột 'final': 1 nếu xác suất lớn hơn ngưỡng.",
			"Create a 'final' column: 1 if the probability exceeds the cutoff."
		],
		[
			3,
			3,
			"In ngưỡng đã chọn.",
			"Print the chosen cutoff."
		]
	]
};
var f5d9c075 = {
	"s": ["Huấn luyện lại rừng ngẫu nhiên chỉ với các biến đã chọn để xem mô hình gọn có đủ tốt không.", "Retrain the random forest using only the selected variables to see if the slimmer model is good enough."],
	"r": [[
		1,
		1,
		"Tạo rừng 100 cây giống trước nhưng chỉ học trên các cột đã chọn.",
		"Build the same 100-tree forest but fit it on the selected columns only."
	], [
		2,
		2,
		"In số biến được dùng để huấn luyện.",
		"Print how many variables were used."
	]]
};
var ccd2d2eb = {
	"s": ["Lập ma trận nhầm lẫn của rừng ngẫu nhiên trên tập train để thấy đoán đúng/sai từng loại.", "Build the random forest's confusion matrix on the training set to see correct and wrong calls per class."],
	"r": [[
		1,
		1,
		"Đếm số hồ sơ theo cặp (thực tế, dự đoán).",
		"Count claims by (actual, predicted) pair."
	], [
		2,
		2,
		"Đặt tên hàng/cột bằng tiếng Việt (sạch/gian lận) cho dễ đọc rồi in bảng.",
		"Label rows and columns (clean/fraud) for readability and print the table."
	]]
};
var b154c4bc = {
	"s": ["Tách 4 ô của ma trận nhầm lẫn và in các chỉ số tổng hợp.", "Unpack the four confusion-matrix cells and print summary metrics."],
	"r": [[
		1,
		1,
		"Làm phẳng ma trận thành 4 số: đúng-sạch, báo nhầm, bỏ sót, bắt đúng gian lận; rồi gọi hàm rep để in các chỉ số như độ nhạy, độ đặc hiệu.",
		"Flatten the matrix into true clean, false alarm, missed fraud, caught fraud, then call the rep helper to print metrics such as sensitivity and specificity."
	]]
};
var eeec5a33 = {
	"s": ["Huấn luyện mô hình cuối với bộ tham số tốt nhất vừa tìm được.", "Train the final model with the best parameters just found."],
	"r": [[
		1,
		1,
		"Tạo rừng mới dùng đúng bộ tham số tốt nhất (dấu ** bung từ điển thành tham số) và học trên các biến đã chọn.",
		"Create a new forest using the best parameters (** unpacks the dictionary) and fit it on the selected variables."
	], [
		2,
		2,
		"In cấu hình mô hình để kiểm tra.",
		"Print the model settings to check them."
	]]
};
var a9855f5f = {
	"s": ["In các chỉ số tổng hợp từ ma trận nhầm lẫn của mô hình đã dò tham số.", "Print summary metrics from the tuned model's confusion matrix."],
	"r": [[
		1,
		1,
		"Tách 4 ô (đúng-sạch, báo nhầm, bỏ sót, bắt đúng gian lận) rồi gọi hàm rep để in độ nhạy, độ đặc hiệu...",
		"Unpack the four cells and call rep to print sensitivity, specificity and so on."
	]]
};
var dcbbf610 = {
	"s": ["In các chỉ số tổng hợp của hồi quy logistic trên validation.", "Print summary metrics of the logistic regression on validation."],
	"r": [[
		1,
		1,
		"Tách 4 ô ma trận và gọi hàm rep để in độ nhạy, độ đặc hiệu... trên dữ liệu chưa thấy.",
		"Unpack the four cells and call rep to print sensitivity, specificity and so on on unseen data."
	]]
};
var c2db0d01 = {
	"s": ["Cho rừng ngẫu nhiên đã dò tham số dự đoán trên tập validation.", "Let the tuned random forest predict on the validation set."],
	"r": [[
		1,
		1,
		"Dự đoán nhãn cho hồ sơ validation (chỉ dùng các biến đã chọn) rồi in số hồ sơ và số ca bị đoán là gian lận (cộng các nhãn 1).",
		"Predict labels for validation claims (selected variables only) and print the claim count and how many are predicted fraud (sum of 1s)."
	]]
};
var faa1317d = {
	"s": ["Đo accuracy của rừng ngẫu nhiên trên validation.", "Measure the random forest's accuracy on validation."],
	"r": [[
		1,
		1,
		"In tỷ lệ đoán đúng trên dữ liệu chưa từng thấy để so với hồi quy logistic.",
		"Print the share correct on unseen data to compare with logistic regression."
	]]
};
var af2b00dc = {
	"s": ["Lập ma trận nhầm lẫn của rừng ngẫu nhiên trên validation.", "Build the random forest confusion matrix on validation."],
	"r": [[
		1,
		1,
		"Đếm số hồ sơ validation theo cặp (thực tế, dự đoán).",
		"Count validation claims by (actual, predicted) pair."
	], [
		2,
		2,
		"In bảng với nhãn tiếng Việt sạch/gian lận.",
		"Print the table with clean/fraud labels."
	]]
};
var e1764753 = {
	"s": ["In chỉ số tổng hợp và báo cáo phân loại đầy đủ của rừng ngẫu nhiên trên validation.", "Print summary metrics and the full classification report of the random forest on validation."],
	"r": [[
		1,
		1,
		"Tách 4 ô ma trận và gọi hàm rep để in độ nhạy, độ đặc hiệu...",
		"Unpack the four cells and call rep to print sensitivity, specificity and so on."
	], [
		2,
		2,
		"In precision, recall, F1 riêng cho lớp sạch và lớp gian lận để thấy mô hình bắt gian lận tốt cỡ nào.",
		"Print precision, recall and F1 for the clean and fraud classes to see how well fraud is caught."
	]]
};
var cbe6f8ac = {
	"s": ["Chọn cơ sở dữ liệu ndap làm nơi chạy mọi truy vấn phía sau.", "Select the ndap database as the place where all later queries run."],
	"r": [[
		1,
		1,
		"Chuyển sang cơ sở dữ liệu ndap, chứa bảng dữ liệu bảo hiểm cây trồng; nếu không chọn, các truy vấn sẽ không biết lấy bảng ở đâu.",
		"Switch to the ndap database that holds the crop-insurance table; without it, queries would not know where to find the table."
	]]
};
var ce7ab558 = {
	"s": ["Tổng hợp số nông dân và số tiền bảo hiểm theo từng bang để thấy bang nào phủ rộng nhất.", "Total farmers and sum insured per state to see which states have the widest coverage."],
	"r": [
		[
			1,
			1,
			"Cộng số nông dân và số tiền bảo hiểm, đặt tên cột kết quả cho rõ.",
			"Add up farmers and sum insured and name the result columns."
		],
		[
			2,
			2,
			"Lấy dữ liệu từ bảng bảo hiểm nông dân.",
			"Read from the farmer insurance table."
		],
		[
			3,
			3,
			"Gom các dòng cùng bang lại thành một nhóm để cộng.",
			"Group rows of the same state so they can be summed."
		],
		[
			4,
			4,
			"Xếp bang có nhiều nông dân nhất lên đầu.",
			"Put the state with the most farmers first."
		]
	]
};
var a813ed0b = {
	"s": ["Tính tổng phí nông dân đóng theo từng huyện trong năm 2018, xếp từ thấp lên cao.", "Total the farmers' premium per district for 2018, sorted low to high."],
	"r": [
		[
			1,
			2,
			"Lấy bang, huyện và tổng phí nông dân từ bảng dữ liệu.",
			"Select state, district and the total farmer premium from the table."
		],
		[
			3,
			3,
			"Chỉ giữ dữ liệu năm 2018.",
			"Keep only 2018 data."
		],
		[
			4,
			4,
			"Gom theo từng cặp bang-huyện để cộng phí.",
			"Group by state-district pair so premiums can be summed."
		],
		[
			5,
			5,
			"Xếp tăng dần để thấy huyện đóng ít nhất trước.",
			"Sort ascending so the district paying least comes first."
		]
	]
};
var a366e11c = {
	"s": ["Tính số nông dân và tổng phí gộp theo bang, chỉ cho các dòng năm 2018 có diện tích bảo hiểm trên 5.0.", "Compute farmers and gross premium per state, only for 2018 rows with insured area above 5.0."],
	"r": [
		[
			1,
			2,
			"Cộng số nông dân và phí gộp phải trả, đặt tên cột kết quả.",
			"Sum farmers and gross premium payable and name the result columns."
		],
		[
			3,
			3,
			"Lọc dòng có diện tích được bảo hiểm trên 5.0 và năm 2018 trước khi cộng.",
			"Filter rows with insured area above 5.0 and year 2018 before summing."
		],
		[
			4,
			5,
			"Gom theo bang rồi xếp bang có nhiều nông dân nhất lên đầu.",
			"Group by state and put the state with most farmers first."
		]
	]
};
var d63fd863 = {
	"s": ["Tìm 3 cặp bang-năm có tỷ lệ nông dân được bảo hiểm trên dân số cao nhất.", "Find the 3 state-year pairs with the highest insured-farmers-to-population ratio."],
	"r": [
		[
			1,
			2,
			"Với mỗi bang-năm, chia tổng nông dân cho tổng dân số; nhân 1.0 để phép chia ra số thập phân thay vì làm tròn xuống số nguyên.",
			"For each state-year divide total farmers by total population; multiplying by 1.0 forces decimal division instead of integer rounding."
		],
		[
			3,
			4,
			"Lấy từ bảng dữ liệu và gom theo bang và năm.",
			"Read from the table and group by state and year."
		],
		[
			5,
			6,
			"Xếp tỷ lệ giảm dần rồi lấy 3 dòng đầu.",
			"Sort ratio descending and take the first 3."
		]
	]
};
var f647afa7 = {
	"s": ["Tạo tên viết tắt của mỗi bang từ 3 ký tự đầu.", "Create a short code for each state from its first 3 characters."],
	"r": [[
		1,
		1,
		"Lấy tên bang không lặp cùng cột mới gồm 3 ký tự đầu (từ vị trí 1, dài 3).",
		"Select each state once with a new column of its first 3 characters (start at position 1, length 3)."
	], [
		2,
		3,
		"Từ bảng dữ liệu, xếp theo tên bang.",
		"From the table, sorted by state name."
	]]
};
var fd689f19 = {
	"s": ["Dùng INNER JOIN để chỉ cộng phí nông dân của những huyện từng có hơn 10 đơn vị bảo hiểm.", "Use an INNER JOIN so only districts that ever had more than 10 insurance units get their farmer premium summed."],
	"r": [
		[
			1,
			2,
			"Lấy bảng gốc (bí danh a) và tính tổng phí nông dân.",
			"Take the main table (alias a) and compute the total farmer premium."
		],
		[
			3,
			4,
			"Truy vấn con b liệt kê các cặp bang-huyện có đơn vị bảo hiểm trên 10; INNER JOIN chỉ giữ dòng của a khớp với danh sách này.",
			"Subquery b lists state-district pairs with insurance units above 10; INNER JOIN keeps only rows of a that match this list."
		],
		[
			5,
			5,
			"Điều kiện nối: cả bang và huyện phải trùng.",
			"Join condition: both state and district must match."
		],
		[
			6,
			7,
			"Gom theo bang-huyện và xếp phí giảm dần.",
			"Group by state-district and sort premium descending."
		]
	]
};
var ee7abb8f = {
	"s": ["Tính tổng phí nông dân và dân số trung bình theo huyện, chỉ giữ huyện có tổng phí trên 100 crore.", "Compute total farmer premium and average population per district, keeping districts above 100 crore."],
	"r": [
		[
			1,
			3,
			"Lấy bang, huyện, tổng phí nông dân và dân số trung bình.",
			"Select state, district, total farmer premium and average population."
		],
		[
			4,
			4,
			"Gom theo bang-huyện để gộp các năm lại.",
			"Group by state-district to combine years."
		],
		[
			5,
			5,
			"HAVING lọc sau khi cộng: chỉ giữ tổng trên 10000 lakh (= 100 crore). Dùng HAVING vì điều kiện nằm trên kết quả tổng hợp.",
			"HAVING filters after summing: keep totals above 10000 lakh (= 100 crore). HAVING is used because the condition is on an aggregate."
		],
		[
			6,
			6,
			"Xếp tổng phí giảm dần.",
			"Sort total premium descending."
		]
	]
};
var c9525132 = {
	"s": ["Tìm các huyện có số nông dân được bảo hiểm cao hơn mức trung bình của toàn bộ dữ liệu.", "Find districts whose farmers covered exceeds the overall average."],
	"r": [
		[
			1,
			2,
			"Lấy tên huyện không lặp từ bảng dữ liệu.",
			"Select distinct district names from the table."
		],
		[
			3,
			3,
			"Truy vấn con tính một con số trung bình duy nhất, rồi giữ các dòng lớn hơn số đó.",
			"The subquery computes a single average, and rows above it are kept."
		],
		[
			4,
			4,
			"Xếp tên huyện A-Z.",
			"Sort district names A-Z."
		]
	]
};
var bac7bb1d = {
	"s": ["Tạo hai bảng mới states và districts, mỗi bảng có khoá chính.", "Create two new tables, states and districts, each with a primary key."],
	"r": [[
		1,
		4,
		"Tạo bảng states: mã bang là khoá chính (mỗi bang một mã duy nhất, không để trống) và tên bang.",
		"Create the states table: state code as primary key (unique, never empty) and the state name."
	], [
		5,
		9,
		"Tạo bảng districts: mã huyện là khoá chính, tên huyện và mã bang để sau này nối về bảng states.",
		"Create the districts table: district code as primary key, district name and state code to link back to states later."
	]]
};
var b20b7aec = {
	"s": ["Đọc file Excel Namma Yatri gồm nhiều sheet và ghép chúng thành một bảng chuyến đi duy nhất kèm khu vực, giờ và hình thức thanh toán dễ đọc.", "Load the Namma Yatri Excel workbook and join its sheets into one trip table with readable zones, hour slots and payment methods."],
	"r": [
		[
			1,
			1,
			"Nạp các thư viện xử lý bảng, số, vẽ biểu đồ.",
			"Import the table, number and plotting libraries."
		],
		[
			2,
			2,
			"Đọc mọi sheet của file Excel (sheet_name=None) thành một từ điển các bảng.",
			"Read every sheet of the Excel file (sheet_name=None) into a dictionary of tables."
		],
		[
			3,
			3,
			"Đặt tên ngắn cho từng bảng: chi tiết chuyến, chuyến hoàn thành, khung giờ, khu vực, thanh toán.",
			"Give short names to each table: trip details, completed trips, hour slots, zones, payments."
		],
		[
			4,
			4,
			"In kích thước từng bảng để biết dữ liệu có bao nhiêu dòng, cột.",
			"Print each table's shape to know its rows and columns."
		],
		[
			6,
			10,
			"Ghép dần các bảng vào bảng chi tiết chuyến theo mã chuyến (left merge giữ mọi chuyến, chuyến chưa hoàn thành sẽ để trống phần của Trips); đổi tên cột mã để thành giờ, hình thức thanh toán, khu đón và khu trả (bảng khu vực được dùng hai lần).",
			"Join tables onto trip details by trip id (a left merge keeps every trip, so unfinished trips get blanks from Trips); rename code columns into hour slot, payment, pickup zone and drop zone (the zone table is used twice)."
		],
		[
			11,
			11,
			"In kích thước bảng đã ghép.",
			"Print the merged table's shape."
		],
		[
			12,
			12,
			"Xem thử 5 chuyến đã hoàn thành (end_ride bằng 1) với các cột chính để kiểm tra phép ghép đúng.",
			"Preview 5 completed trips (end_ride equal to 1) with key columns to check the join worked."
		]
	]
};
var ba7cd28a = {
	"s": ["Phân loại các cột thành nhóm phân loại và nhóm số rồi xem thống kê mô tả của tiền cước và quãng đường.", "Sort columns into categorical and numeric groups and view summary statistics for fare and distance."],
	"r": [
		[
			1,
			2,
			"Liệt kê tay cột nào mang tính nhãn (khu, hình thức thanh toán, mã) và cột nào là số hoặc cờ 0/1.",
			"Hand-list which columns are labels (zones, payment, ids) and which are numbers or 0/1 flags."
		],
		[
			3,
			3,
			"In hai danh sách ra để ghi vào báo cáo.",
			"Print both lists for the report."
		],
		[
			4,
			4,
			"Thống kê mô tả (trung bình, độ lệch, min, max...) cho tiền cước và quãng đường, làm tròn 1 số lẻ.",
			"Descriptive statistics (mean, spread, min, max...) for fare and distance, rounded to 1 decimal."
		]
	]
};
var aa73d8db = {
	"s": ["Xếp hạng khu theo doanh thu từ chuyến hoàn thành.", "Rank zones by revenue from completed trips."],
	"r": [
		[
			1,
			1,
			"Với mỗi khu đón, tính tổng, số chuyến và trung bình tiền cước, xếp theo tổng giảm dần.",
			"For each pickup zone compute total, trip count and average fare, sorted by total descending."
		],
		[
			2,
			2,
			"Vẽ thanh ngang doanh thu của 10 khu hàng đầu.",
			"Plot revenue of the top 10 zones as horizontal bars."
		],
		[
			3,
			3,
			"In 8 khu đầu.",
			"Print the top 8 zones."
		]
	]
};
var c8745a47 = {
	"s": ["Lập hồ sơ 5 khu đông chuyến nhất và so với tỷ lệ yêu cầu được hoàn thành của chính khu đó.", "Profile the top 5 busiest zones and compare with each zone's own request completion rate."],
	"r": [
		[
			1,
			1,
			"Gom theo khu đón: số chuyến, doanh thu, quãng đường và cước trung bình; lấy 5 khu nhiều chuyến nhất.",
			"Group by pickup zone for trips, revenue, average distance and fare; keep the 5 zones with most trips."
		],
		[
			2,
			2,
			"In bảng làm tròn 1 số lẻ.",
			"Print the table rounded to 1 decimal."
		],
		[
			3,
			3,
			"Vẽ cột số chuyến của 5 khu.",
			"Plot trips of the 5 zones as bars."
		],
		[
			5,
			5,
			"Tính số yêu cầu và số chuyến hoàn thành theo khu từ toàn bộ bảng chi tiết, ghép tên khu.",
			"Compute requests and completed trips per zone from the whole details table and attach zone names."
		],
		[
			6,
			6,
			"Chia hoàn thành cho yêu cầu để ra phần trăm của 5 khu hàng đầu, cho biết khu đông có thực sự chốt được chuyến.",
			"Divide completed by requests for the top 5 zones to show whether busy zones really close trips."
		]
	]
};
var code_notes_default = {
	a8211ee5,
	"11093bcc": {
		"s": ["Khung (mẫu) để đọc 12 file tháng và lấy mẫu 5% mỗi giờ của mỗi ngày rồi gộp thành một bảng cho cả năm; phần lõi còn để trống cho học viên tự điền.", "Template for reading the 12 monthly files, sampling 5% of each hour of each day and combining them into one yearly table; the core steps are left blank for the learner."],
		"r": [
			[
				7,
				7,
				"Nạp module os để làm việc với thư mục và tên file.",
				"Imports the os module to work with folders and file names."
			],
			[
				10,
				10,
				"Chuyển thư mục làm việc sang nơi chứa các file chuyến taxi, để đọc file dễ hơn.",
				"Switches the working folder to where the taxi trip files are stored so they can be read easily."
			],
			[
				13,
				13,
				"Lấy danh sách tên các file trong thư mục (12 file của 12 tháng).",
				"Gets the list of file names in the folder (the 12 monthly files)."
			],
			[
				16,
				16,
				"Tạo bảng rỗng để về sau gộp dữ liệu đã lấy mẫu vào.",
				"Creates an empty table that the sampled data will be combined into later."
			],
			[
				20,
				21,
				"Duyệt lần lượt từng file; try giúp một file lỗi không làm dừng cả vòng lặp.",
				"Loops over each file; the try block means one bad file does not stop the whole loop."
			],
			[
				23,
				23,
				"Ghép đường dẫn đầy đủ tới file hiện tại.",
				"Builds the full path to the current file."
			],
			[
				31,
				31,
				"Tạo bảng rỗng tạm để chứa dữ liệu lấy mẫu của file này.",
				"Creates a temporary empty table to hold the sampled data for this file."
			],
			[
				42,
				42,
				"Dòng chưa hoàn chỉnh: chỗ này sẽ gộp dữ liệu mẫu vào bảng chung df.",
				"Unfinished line: this is where the sampled data gets added to the main df table."
			],
			[
				44,
				45,
				"Nếu đọc file bị lỗi thì in tên file và lỗi ra rồi đi tiếp file sau.",
				"If reading a file fails, prints the file name and the error and moves on to the next file."
			]
		]
	},
	"1d1132da": {
		"s": ["Liệt kê tên tất cả các cột hiện có để kiểm tra tên cột có thống nhất không.", "List all current column names to check whether they are consistent."],
		"r": [[
			1,
			1,
			"Trả về danh sách tên cột của bảng, giúp nhìn xem cột nào cần đổi tên hoặc chuẩn hoá.",
			"Returns the list of the table's column names, helping spot which need renaming or standardising."
		]]
	},
	efda9f4d,
	"4815bc00": {
		"s": ["Chuẩn bị tỷ lệ lấy mẫu để nhân ngược số chuyến mẫu lên số chuyến thực tế của cả năm.", "Set the sampling fraction so sample trip counts can be scaled back up to real full-year numbers."],
		"r": [[
			4,
			4,
			"Dòng chưa hoàn chỉnh: cần điền tỷ lệ đã lấy mẫu (5% = 0.05) để chia lại ra số thực.",
			"Unfinished line: needs the sampling fraction (5% = 0.05) to divide back to real totals."
		]]
	},
	af8247c1,
	"1ca27543": {
		"s": ["Dọn bảng ban đầu: đánh lại số thứ tự dòng và bỏ cột không cần dùng.", "Initial tidy-up: renumber the rows and drop a column that is not needed."],
		"r": [[
			1,
			1,
			"Đánh lại số thứ tự dòng từ 0 sau khi gộp mẫu (drop=True để không giữ số cũ thành cột mới).",
			"Resets row numbers from 0 after combining samples (drop=True avoids keeping the old index as a new column)."
		], [
			3,
			3,
			"Bỏ cột cờ lưu-và-chuyển store_and_fwd_flag vì nó chỉ là chi tiết kỹ thuật của thiết bị, không giúp phân tích.",
			"Drops store_and_fwd_flag, a device technical detail that does not help the analysis."
		]]
	},
	c2851a6a,
	ed31f140,
	"44f4b700": {
		"s": ["Tính tỷ lệ ô trống của từng cột và kiểm tra xem các cột thiếu có cùng nằm trên một số dòng không.", "Compute the share of missing values per column and check whether the gaps sit on the same rows."],
		"r": [[
			1,
			2,
			"Tính phần trăm ô trống mỗi cột, sắp giảm dần, và chỉ in những cột có thiếu.",
			"Computes the percentage of empty cells per column, sorted high to low, and prints only columns with gaps."
		], [
			4,
			5,
			"Tính tỷ lệ dòng thiếu đồng thời cả bốn cột; nếu cao nghĩa là các ô thiếu cùng một nhóm chuyến (có thể do cách ghi dữ liệu).",
			"Computes the share of rows missing all four columns at once; a high value means the gaps hit the same set of trips, likely a recording quirk."
		]]
	},
	"950f1d05": {
		"s": ["Xử lý số hành khách: coi 0 là không hợp lý nên đổi thành thiếu, rồi điền bằng giá trị phổ biến nhất.", "Clean passenger counts: treat 0 as invalid (set to missing), then fill gaps with the most common value."],
		"r": [
			[
				1,
				1,
				"Đếm từng giá trị số hành khách, kể cả ô trống, để thấy phân bố.",
				"Counts each passenger value, including blanks, to see the distribution."
			],
			[
				2,
				2,
				"Đổi giá trị 0 thành trống, vì chuyến taxi phải có ít nhất một hành khách.",
				"Turns 0 into missing, because a taxi trip must carry at least one passenger."
			],
			[
				3,
				3,
				"Điền các ô trống bằng mode (giá trị xuất hiện nhiều nhất), thường là 1 người.",
				"Fills blanks with the mode (the most frequent value), typically 1 passenger."
			]
		]
	},
	c55287bc,
	"8922013c": {
		"s": ["Điền các ô trống của phụ phí tắc đường bằng giá trị phổ biến nhất.", "Fill missing congestion surcharge values with the most common one."],
		"r": [[
			1,
			1,
			"Đếm từng giá trị phụ phí, kể cả ô trống.",
			"Counts each surcharge value, including blanks."
		], [
			2,
			2,
			"Điền ô trống bằng mode (giá trị hay gặp nhất) để không mất dòng nào.",
			"Fills blanks with the mode (most frequent value) so no rows are lost."
		]]
	},
	f2775e07,
	cd022e9d,
	"99013464": {
		"s": ["Tạo các cột giờ, thứ, tháng từ thời điểm đón và vẽ số chuyến theo giờ, theo thứ, theo tháng để thấy nhịp của nhu cầu taxi.", "Create hour, weekday and month columns from the pickup time and plot trips by each to see the rhythm of taxi demand."],
		"r": [
			[
				1,
				3,
				"Tách giờ, tên thứ và tháng ra từ thời điểm đón khách thành ba cột mới.",
				"Extracts hour, weekday name and month from the pickup time into three new columns."
			],
			[
				4,
				4,
				"Danh sách thứ theo đúng thứ tự trong tuần để sắp xếp biểu đồ.",
				"Weekday list in proper order, used to sort the chart."
			],
			[
				5,
				5,
				"Vẽ biểu đồ cột số chuyến theo từng giờ.",
				"Draws a bar chart of trips per hour."
			],
			[
				6,
				6,
				"Đếm chuyến theo thứ, sắp lại theo thứ tự tuần rồi vẽ biểu đồ cột.",
				"Counts trips per weekday, reorders them Monday-to-Sunday and plots bars."
			],
			[
				7,
				7,
				"Vẽ biểu đồ cột số chuyến theo tháng.",
				"Draws a bar chart of trips per month."
			]
		]
	},
	"71a2a548": {
		"s": ["Kiểm tra các giá trị bằng 0 hoặc âm ở cột tiền và quãng đường, rồi tạo bảng chỉ giữ chuyến có cước dương.", "Check for zero or negative values in money and distance columns, then build a table keeping only trips with positive fares."],
		"r": [
			[
				1,
				2,
				"Đếm số dòng có giá trị từ 0 trở xuống ở bốn cột chính.",
				"Counts rows with values of 0 or below in the four key columns."
			],
			[
				3,
				3,
				"Giữ dòng có cả cước và tổng tiền lớn hơn 0 (điều kiện đúng thì giữ); copy() tạo bảng độc lập tránh cảnh báo khi sửa sau này.",
				"Keeps rows where both fare and total are above 0 (true means kept); copy() makes an independent table to avoid warnings on later edits."
			],
			[
				5,
				5,
				"Đếm chuyến có quãng đường 0 nhưng đón và trả cùng một vùng, để xem có phải chuyến hợp lệ (đi vòng, huỷ) trước khi bỏ.",
				"Counts trips with 0 distance but same pickup and dropoff zone, to judge if they are legitimate before dropping."
			]
		]
	},
	e32ebb62,
	"72336d2e": {
		"s": ["Tính mỗi quý chiếm bao nhiêu phần trăm doanh thu cả năm và vẽ biểu đồ cột.", "Compute each quarter's share of yearly revenue and plot it as bars."],
		"r": [
			[
				1,
				1,
				"Tạo cột quý (1–4) từ thời điểm đón.",
				"Creates a quarter column (1-4) from the pickup time."
			],
			[
				2,
				2,
				"Cộng tổng tiền theo từng quý.",
				"Sums total amount by quarter."
			],
			[
				3,
				3,
				"Chia doanh thu mỗi quý cho tổng để ra tỷ trọng.",
				"Divides each quarter's revenue by the total to get its share."
			],
			[
				4,
				4,
				"In tỷ trọng làm tròn và tổng của chúng (phải bằng 1) để kiểm tra.",
				"Prints the rounded shares and their sum (should be 1) as a sanity check."
			],
			[
				5,
				5,
				"Vẽ biểu đồ cột tỷ trọng các quý.",
				"Plots the quarter shares as a bar chart."
			]
		]
	},
	"2ff9cda8": {
		"s": ["Xem cước taxi tăng thế nào theo quãng đường bằng biểu đồ điểm và hệ số tương quan.", "See how taxi fare grows with distance using a scatter plot and a correlation coefficient."],
		"r": [
			[
				1,
				1,
				"Giữ các chuyến có quãng đường lớn hơn 0 để mối liên hệ có ý nghĩa.",
				"Keeps trips with distance above 0 so the relationship is meaningful."
			],
			[
				2,
				2,
				"Lấy ngẫu nhiên 5000 chuyến (random_state cố định để lặp lại được) và vẽ điểm quãng đường – cước; alpha=0.3 làm điểm mờ để thấy chỗ dày đặc.",
				"Takes a random 5000 trips (fixed random_state for repeatability) and plots distance vs fare; alpha=0.3 makes points translucent to show dense areas."
			],
			[
				3,
				3,
				"In hệ số tương quan giữa quãng đường và cước (gần 1 nghĩa là tăng cùng nhau).",
				"Prints the correlation between distance and fare (near 1 means they rise together)."
			]
		]
	},
	ff4a81a6,
	"488893fd": {
		"s": ["Đổi mã hình thức thanh toán thành tên dễ hiểu, tính tỷ lệ mỗi loại và vẽ biểu đồ cột.", "Turn payment codes into readable names, compute each type's share and plot bars."],
		"r": [
			[
				1,
				1,
				"Bảng đổi mã số thành tên: thẻ tín dụng, tiền mặt, miễn phí, tranh chấp.",
				"Lookup mapping codes to names: credit card, cash, no charge, dispute."
			],
			[
				2,
				2,
				"Đổi mã thành tên rồi đếm theo tỷ lệ (normalize=True cho ra phần trăm dạng 0–1).",
				"Maps codes to names and counts as proportions (normalize=True gives 0-1 shares)."
			],
			[
				3,
				3,
				"In tỷ lệ làm tròn 3 chữ số.",
				"Prints the shares rounded to 3 decimals."
			],
			[
				4,
				4,
				"Vẽ biểu đồ cột tỷ lệ các hình thức thanh toán.",
				"Plots the payment-type shares as bars."
			]
		]
	},
	"20168ce5": {
		"s": ["Nạp file bản đồ các vùng taxi NYC bằng geopandas, xem vài dòng đầu và vẽ nhanh bản đồ.", "Load the NYC taxi-zone map file with geopandas, peek at the first rows and draw a quick map."],
		"r": [
			[
				1,
				1,
				"Nạp thư viện geopandas để xử lý dữ liệu bản đồ.",
				"Imports geopandas to handle map data."
			],
			[
				2,
				2,
				"Đọc file hình dạng .shp của các vùng taxi vào bảng zones.",
				"Reads the .shp shapefile of taxi zones into the zones table."
			],
			[
				3,
				3,
				"Xem vài dòng đầu để kiểm tra các cột như mã vùng, tên vùng, quận.",
				"Shows the first rows to check columns like zone ID, name, borough."
			],
			[
				4,
				4,
				"Vẽ bản đồ các vùng để chắc dữ liệu đúng.",
				"Draws the zone map to confirm the data looks right."
			]
		]
	},
	"5d56143c": {
		"s": ["Ghép tên vùng và quận vào bảng chuyến đi theo mã vùng đón, và kiểm tra không bị mất hay nhân đôi dòng.", "Attach zone name and borough to trips via pickup zone ID, and check no rows were lost or duplicated."],
		"r": [
			[
				1,
				1,
				"Lưu số dòng trước khi ghép.",
				"Stores the row count before merging."
			],
			[
				2,
				2,
				"Ghép bảng vùng vào chuyến đi: mã đón PULocationID khớp LocationID; how='left' giữ mọi chuyến dù không tìm thấy vùng.",
				"Joins zones to trips: PULocationID matches LocationID; how='left' keeps every trip even without a zone match."
			],
			[
				3,
				3,
				"In số dòng trước và sau, phải bằng nhau thì phép ghép không làm nhân dòng.",
				"Prints row counts before and after; they must match so the join did not duplicate rows."
			]
		]
	},
	b07ffe97,
	"37ade305": {
		"s": ["Gắn số chuyến vào bảng bản đồ vùng để có thể vẽ bản đồ nhiệt; vùng không có chuyến được coi là 0.", "Attach trip counts to the zone map table so a heat map can be drawn; zones with no trips count as 0."],
		"r": [
			[
				1,
				1,
				"Ghép số chuyến vào bảng vùng theo mã vùng; left giữ mọi vùng kể cả vùng không có chuyến nào.",
				"Joins trip counts onto the zones by zone ID; left keeps every zone, even those with no trips."
			],
			[
				2,
				2,
				"Điền 0 cho vùng không có chuyến, vì ô trống ở đó thật ra là không có chuyến.",
				"Fills 0 for zones without trips, since a blank there really means no trips."
			],
			[
				3,
				3,
				"In kiểu dữ liệu để chắc kết quả vẫn là bảng bản đồ (GeoDataFrame).",
				"Prints the type to confirm it is still a map table (GeoDataFrame)."
			]
		]
	},
	db1da471,
	"8bca5695": {
		"s": ["Tìm các tuyến (vùng đón – vùng trả – giờ) chậm nhất bằng cách tính tốc độ trung bình, chỉ xét tuyến có đủ dữ liệu.", "Find the slowest routes (pickup zone, dropoff zone, hour) by computing average speed, using only routes with enough data."],
		"r": [
			[
				1,
				2,
				"Nhóm theo tuyến và giờ, tính quãng đường trung bình, thời lượng trung bình và số chuyến n.",
				"Groups by route and hour, computing average distance, average duration and trip count n."
			],
			[
				3,
				3,
				"Tốc độ dặm/giờ = quãng đường chia cho thời gian đã đổi từ phút sang giờ.",
				"Speed in mph = distance divided by duration converted from minutes to hours."
			],
			[
				4,
				4,
				"Chỉ giữ tuyến có ít nhất 30 chuyến để số liệu đáng tin, sắp tăng dần theo tốc độ và lấy 10 tuyến chậm nhất.",
				"Keeps routes with at least 30 trips for reliability, sorts by speed ascending and takes the 10 slowest."
			],
			[
				5,
				5,
				"In kết quả.",
				"Prints the result."
			]
		]
	},
	e66cef2d,
	"0dac05b5": {
		"s": ["Nhân ngược số chuyến mẫu lên quy mô thật vì dữ liệu chỉ là mẫu 5%.", "Scale sample trip counts up to real size since the data is only a 5% sample."],
		"r": [
			[
				1,
				1,
				"Khai báo tỷ lệ lấy mẫu là 5%.",
				"Sets the sampling fraction to 5%."
			],
			[
				2,
				2,
				"Chia số chuyến theo giờ cho tỷ lệ mẫu để ước tính số chuyến thật.",
				"Divides hourly trip counts by the fraction to estimate real counts."
			],
			[
				3,
				3,
				"In 5 giờ đông nhất sau khi quy đổi, làm tròn.",
				"Prints the 5 busiest hours after scaling, rounded."
			]
		]
	},
	d6491ba8,
	"47180eda": {
		"s": ["Tìm 10 vùng đón và 10 vùng trả đông nhất, rồi vẽ nhịp theo giờ của 10 vùng đón đó.", "Find the 10 busiest pickup and dropoff zones, then plot the hourly pattern of the top pickup zones."],
		"r": [
			[
				1,
				2,
				"Lấy mã 10 vùng đón và 10 vùng trả nhiều chuyến nhất.",
				"Gets the IDs of the 10 most frequent pickup and dropoff zones."
			],
			[
				3,
				3,
				"Chỉ giữ chuyến đón ở top 10 vùng, đếm theo (giờ, vùng) rồi xoay vùng thành cột.",
				"Keeps trips from the top-10 pickup zones, counts by (hour, zone) and pivots zones into columns."
			],
			[
				4,
				4,
				"Vẽ đường số chuyến theo giờ cho mỗi vùng.",
				"Plots hourly trips as a line per zone."
			]
		]
	},
	eb0ce231,
	cf1e5a1b,
	bcd02c0d,
	fda32b74,
	da1bccce,
	"38ae3cac": {
		"s": ["So sánh cước mỗi dặm trung bình giữa các hãng (VendorID) theo từng giờ.", "Compare average fare per mile between vendors (VendorID) across hours."],
		"r": [[
			1,
			1,
			"Tạo bảng tổng hợp: hàng là giờ, cột là hãng, giá trị là cước mỗi dặm trung bình, rồi vẽ đường cho mỗi hãng.",
			"Builds a pivot table with hours as rows, vendors as columns and average fare per mile as values, then plots a line per vendor."
		]]
	},
	"292749f8": {
		"s": ["Chia chuyến đi thành 3 nhóm theo quãng đường (ngắn, vừa, dài) rồi so sánh giá cước trung bình mỗi dặm giữa hai hãng taxi (VendorID), để xem hãng nào tính giá cao hơn ở từng nhóm.", "Bins trips into three distance tiers and compares average fare per mile between the two vendors in each tier, to see who charges more for similar trips."],
		"r": [[
			1,
			1,
			"Tạo cột 'tier' bằng cách cắt quãng đường thành 3 khoảng: 0–2 dặm, 2–5 dặm và trên 5 dặm (np.inf nghĩa là không giới hạn trên), rồi gắn nhãn cho từng nhóm để dễ đọc.",
			"Creates a 'tier' column by cutting trip distance into 0-2, 2-5 and over-5 miles (np.inf means no upper limit) and labels each band."
		], [
			2,
			2,
			"Tính giá cước trung bình mỗi dặm theo từng cặp (nhóm quãng đường, hãng), rồi xoay hãng thành cột để nhìn hai hãng cạnh nhau. observed=True chỉ giữ các nhóm thực sự có dữ liệu.",
			"Averages fare per mile for each tier and vendor, then pivots vendors into columns so they sit side by side; observed=True keeps only groups that actually occur."
		]]
	},
	dec1adb1,
	"66004afd": {
		"s": ["Vẽ bản đồ nhiệt thể hiện số hành khách trung bình theo giờ trong ngày và thứ trong tuần, để nhận ra khung giờ nào chở đông người nhất.", "Draws a heatmap of average passengers by hour of day and weekday to spot when trips carry the most people."],
		"r": [[
			1,
			1,
			"Tạo bảng tổng hợp: mỗi hàng là một giờ đón, mỗi cột là một thứ, ô là số hành khách trung bình; [days] sắp các cột theo đúng thứ tự trong tuần.",
			"Builds a pivot table with pickup hour as rows, weekday as columns and mean passengers as cells; [days] puts the columns in weekday order."
		], [
			2,
			2,
			"Vẽ bảng đó thành bản đồ nhiệt với dải màu vàng-cam-đỏ; màu càng đậm thì số khách trung bình càng cao.",
			"Draws the table as a yellow-orange-red heatmap; darker means more passengers on average."
		]]
	},
	d02d5096,
	"4023d89d": {
		"s": ["Kiểm tra mỗi loại phụ phí xuất hiện ở bao nhiêu phần trăm chuyến, rồi xem tỷ lệ chuyến bị tính phụ phí thay đổi theo giờ, để biết nên điều chỉnh giá thế nào.", "Checks what share of trips carry each surcharge and how that share moves by hour, to inform pricing decisions."],
		"r": [
			[
				1,
				1,
				"Liệt kê các cột phụ phí cần xem xét.",
				"Lists the surcharge columns to examine."
			],
			[
				2,
				2,
				"Với mỗi cột, đánh dấu chuyến có phụ phí lớn hơn 0, lấy trung bình (tức tỷ lệ chuyến có phụ phí) và làm tròn 3 chữ số.",
				"Flags trips whose surcharge is above 0; the mean of those flags is the share of trips with that surcharge, rounded to 3 decimals."
			],
			[
				3,
				4,
				"Lặp qua ba loại phụ phí chính: tạo cột cờ tạm thời bằng assign (không sửa df gốc), tính tỷ lệ có phụ phí theo từng giờ đón và vẽ đường cho từng loại.",
				"Loops over three key surcharges: assign adds a temporary flag column (df itself is unchanged), computes the hourly share with the surcharge and plots one line per type."
			]
		]
	},
	faf4658f,
	"2fda2c05": {
		"s": ["Chỉ giữ các chuyến đón trong năm 2023 (dữ liệu có thể lẫn ngày sai) và xem cấu trúc bảng.", "Keeps only trips picked up in 2023 (the files can contain stray dates) and inspects the table structure."],
		"r": [[
			1,
			1,
			"Giữ dòng có năm đón là 2023 (mặt nạ giữ dòng thỏa điều kiện) rồi đánh lại số thứ tự dòng.",
			"Keeps rows whose pickup year is 2023 (the mask keeps rows where the condition is true) and renumbers the index."
		], [
			2,
			2,
			"In thông tin các cột: kiểu dữ liệu và số ô có giá trị, để phát hiện cột thiếu hoặc sai kiểu.",
			"Prints column types and non-null counts to spot missing or mistyped columns."
		]]
	},
	c4f23ea5,
	c71286a8,
	"47d0597e": {
		"s": ["Liệt kê tỷ lệ phần trăm ô trống của các cột có thiếu dữ liệu để biết cần xử lý cột nào.", "Lists the percentage of missing values for columns that have any, to decide what needs handling."],
		"r": [[
			1,
			1,
			"Tính tỷ lệ ô trống mỗi cột nhân 100, làm tròn 2 chữ số, và chỉ in các cột có ít nhất một ô trống.",
			"Computes each column's missing share times 100, rounded to 2 decimals, and shows only columns with at least one missing value."
		]]
	},
	bf84c0af,
	"6dde6c4d": {
		"s": ["Điền nốt các ô trống còn lại ở phụ phí tắc đường và phí sân bay, rồi kiểm tra không còn ô trống nào.", "Fills the remaining blanks in congestion surcharge and airport fee, then confirms no missing values remain."],
		"r": [
			[
				1,
				1,
				"In số lần xuất hiện từng giá trị phụ phí tắc đường (kể cả trống) để chọn cách điền.",
				"Prints value counts of the congestion surcharge, including missing, to choose a fill rule."
			],
			[
				2,
				2,
				"Điền ô trống bằng giá trị xuất hiện nhiều nhất (mode); [0] lấy giá trị đầu tiên trong danh sách mode.",
				"Fills blanks with the most frequent value (mode); [0] takes the first mode."
			],
			[
				3,
				3,
				"Ô trống phí sân bay được điền 0, vì trống nghĩa là không có phí.",
				"Blank airport fees become 0, as missing means no fee."
			],
			[
				4,
				4,
				"Cộng tổng số ô trống còn lại trong cả bảng và in ra; mong đợi là 0.",
				"Sums all remaining missing cells and prints it; expected to be 0."
			]
		]
	},
	ef8c77f2,
	cda79cf6,
	e3b96c4d,
	"25b0c480": {
		"s": ["Đếm số giá trị bằng 0 ở các cột tiền và quãng đường, rồi tạo bản dữ liệu chỉ gồm chuyến có cước và tổng tiền dương để tính doanh thu hợp lý.", "Counts zeros in money and distance columns, then builds a version with positive fare and total only for sensible revenue figures."],
		"r": [
			[
				1,
				2,
				"Đếm số dòng bằng 0 ở bốn cột chính (tip bằng 0 là bình thường, nhưng cước bằng 0 thì đáng ngờ).",
				"Counts rows equal to 0 in four key columns (zero tip is normal, zero fare is suspicious)."
			],
			[
				3,
				3,
				"Giữ chuyến có cả cước và tổng tiền lớn hơn 0 (.all(axis=1) yêu cầu đúng cho mọi cột), .copy() tạo bản riêng.",
				"Keeps trips where both fare and total are above 0 (.all(axis=1) requires every column to pass); .copy() makes an independent table."
			],
			[
				4,
				4,
				"In số dòng trước và sau để thấy bao nhiêu chuyến bị loại.",
				"Prints row counts before and after to show how many were removed."
			]
		]
	},
	"2994d554": {
		"s": ["Ước tính doanh thu cả năm theo tháng bằng cách cộng tổng tiền trong mẫu rồi nhân ngược theo tỷ lệ lấy mẫu, và vẽ biểu đồ.", "Estimates monthly revenue for the full year by summing the sample's totals and scaling back up by the sampling fraction, then plots it."],
		"r": [
			[
				1,
				1,
				"Cộng tổng tiền theo tháng rồi nhân 1/tỷ lệ mẫu, vì mẫu chỉ là một phần nhỏ nên phải nhân lại mới ra doanh thu thật.",
				"Sums total amount per month and multiplies by 1/sample fraction, since the sample is only a small part and must be scaled up."
			],
			[
				2,
				2,
				"Chia cho một triệu và vẽ cột doanh thu theo tháng (triệu USD).",
				"Divides by one million and plots monthly revenue bars (millions of USD)."
			],
			[
				3,
				3,
				"In doanh thu từng tháng, làm tròn 1 chữ số thập phân.",
				"Prints monthly revenue rounded to one decimal."
			]
		]
	},
	"1c85f4f4": {
		"s": ["Chia doanh thu theo quý và vẽ biểu đồ tròn để thấy quý nào đóng góp nhiều nhất.", "Splits revenue by quarter and draws a pie chart to see which quarter contributes most."],
		"r": [
			[
				1,
				1,
				"Tạo cột quý (1–4) từ thời điểm đón khách.",
				"Creates a quarter column (1-4) from pickup time."
			],
			[
				2,
				2,
				"Cộng tổng tiền theo từng quý.",
				"Sums total amount per quarter."
			],
			[
				3,
				3,
				"In tỷ trọng phần trăm của mỗi quý trên tổng doanh thu (chia cho tổng rồi nhân 100).",
				"Prints each quarter's percent share of total revenue (divide by the total, times 100)."
			],
			[
				4,
				4,
				"Vẽ biểu đồ tròn tỷ trọng, hiển thị phần trăm một chữ số thập phân trên mỗi lát.",
				"Draws a pie chart of the shares with one-decimal percentages on each slice."
			]
		]
	},
	a7b8ba3c,
	"5d5814ae": {
		"s": ["Kiểm tra cước phụ thuộc vào thời lượng và số khách, và tip phụ thuộc vào quãng đường, bằng ba biểu đồ và ba hệ số tương quan.", "Checks how fare depends on duration and passenger count, and tip on distance, with three plots and three correlations."],
		"r": [
			[
				1,
				1,
				"Lấy mẫu ngẫu nhiên 8.000 chuyến (random_state=2 để lặp lại được).",
				"Draws a random 8,000-trip sample (random_state=2 for repeatability)."
			],
			[
				2,
				2,
				"Tạo khung hình gồm 3 biểu đồ cạnh nhau.",
				"Creates a figure with three side-by-side charts."
			],
			[
				3,
				3,
				"Biểu đồ điểm thời lượng – cước.",
				"Scatter of duration vs fare."
			],
			[
				4,
				4,
				"Biểu đồ hộp cước theo số khách, cho thấy trung vị và độ phân tán từng nhóm.",
				"Box plot of fare by passenger count, showing median and spread per group."
			],
			[
				5,
				5,
				"Biểu đồ điểm quãng đường – tip.",
				"Scatter of distance vs tip."
			],
			[
				6,
				8,
				"In ba hệ số tương quan (cước–thời lượng, cước–số khách, tip–quãng đường) tính trên toàn bộ dữ liệu, không chỉ mẫu.",
				"Prints three correlations (fare-duration, fare-passengers, tip-distance) computed on the full data, not just the sample."
			]
		]
	},
	a173d367,
	"41fd1535": {
		"s": ["Giải nén và đọc file bản đồ các khu taxi của New York, xem vài dòng đầu và vẽ thử bản đồ.", "Unzips and reads the NYC taxi zone map file, previews a few rows and plots it."],
		"r": [
			[
				1,
				1,
				"Nạp thư viện giải nén file zip.",
				"Imports the zip-handling library."
			],
			[
				2,
				2,
				"Giải nén file taxi_zones.zip vào thư mục zones.",
				"Extracts taxi_zones.zip into a zones folder."
			],
			[
				3,
				3,
				"Tìm file .shp (định dạng bản đồ) trong thư mục vừa giải nén và đọc thành bảng địa lý bằng geopandas.",
				"Finds the .shp map file in the extracted folder and reads it as a geographic table with geopandas."
			],
			[
				4,
				4,
				"In 3 dòng đầu, bỏ cột hình học vì nó dài khó đọc, để xem mã khu, tên khu và quận.",
				"Prints the first 3 rows without the long geometry column, to see zone ID, name and borough."
			],
			[
				5,
				5,
				"Vẽ nhanh bản đồ các khu để kiểm tra đã đọc đúng.",
				"Quick plot of the zones to confirm they loaded correctly."
			]
		]
	},
	"44f802ec": {
		"s": ["Gắn tên khu và tên quận vào từng chuyến dựa trên mã khu đón, để các kết quả đọc được bằng tên thay vì số.", "Attaches zone and borough names to each trip via the pickup zone ID so results read as names instead of numbers."],
		"r": [[
			1,
			1,
			"Ghép bảng chuyến với bảng khu: nối mã khu đón (PULocationID) với LocationID. how='left' giữ mọi chuyến kể cả khi không tìm thấy khu.",
			"Joins trips with zones, matching PULocationID to LocationID; how='left' keeps every trip even if no zone matches."
		], [
			2,
			2,
			"In vài dòng đầu để kiểm tra phép ghép đúng.",
			"Prints the first rows to check the join."
		]]
	},
	a0dab5fc,
	"450eaff1": {
		"s": ["Gắn số chuyến vào bảng bản đồ khu và liệt kê 8 khu đông nhất kèm tên, để chuẩn bị vẽ bản đồ.", "Adds trip counts to the zone map table and lists the top 8 zones with names, ready for mapping."],
		"r": [[
			1,
			1,
			"Ghép số chuyến vào bảng khu theo mã khu; khu không có chuyến (trống sau khi ghép) được điền 0 vì thực tế là 0 chuyến.",
			"Joins trip counts onto zones by ID; zones with no trips (blank after the join) are filled with 0 because they truly had none."
		], [
			2,
			2,
			"In tên khu, quận và số chuyến của 8 khu đông nhất, không in số thứ tự dòng.",
			"Prints zone, borough and trips for the top 8, without the row index."
		]]
	},
	"0e041c10": {
		"s": ["Vẽ bản đồ nhiệt New York tô màu theo số chuyến đón của từng khu, để thấy khu nào nóng nhất.", "Draws a New York map coloured by pickups per zone to show the hot spots."],
		"r": [
			[
				1,
				1,
				"Tạo khung hình vuông 10x10.",
				"Creates a 10x10 square figure."
			],
			[
				2,
				2,
				"Vẽ bản đồ tô màu theo cột trips, dải vàng-cam-đỏ, kèm thanh chú giải nằm ngang có nhãn 'Số chuyến đón (mẫu)'.",
				"Plots the map coloured by trips in yellow-orange-red with a horizontal legend labelled as sample pickups."
			],
			[
				3,
				3,
				"Ẩn các trục tọa độ vì không cần cho bản đồ.",
				"Hides the axes, which are unnecessary on a map."
			]
		]
	},
	"8106c6b8": {
		"s": ["Tính tốc độ trung bình theo giờ để biết lúc nào đường tắc nhất, và tìm các tuyến đường chậm nhất.", "Computes average speed by hour to see when traffic is worst, and finds the slowest routes."],
		"r": [
			[
				1,
				1,
				"Giữ chuyến có quãng đường dương và .copy() thành bảng riêng.",
				"Keeps trips with positive distance and copies them into an independent table."
			],
			[
				2,
				2,
				"Tính tốc độ dặm/giờ: quãng đường chia thời lượng (đổi từ phút sang giờ).",
				"Computes speed in miles per hour: distance divided by duration converted from minutes to hours."
			],
			[
				3,
				3,
				"Loại tốc độ từ 80 dặm/giờ trở lên vì không thực tế trong thành phố.",
				"Drops speeds of 80 mph or more as unrealistic in the city."
			],
			[
				4,
				4,
				"Tốc độ trung bình theo giờ đón.",
				"Average speed per pickup hour."
			],
			[
				5,
				5,
				"Vẽ đường tốc độ theo giờ, có chấm đánh dấu từng giờ.",
				"Plots hourly speed as a line with markers."
			],
			[
				6,
				6,
				"Gom theo (khu đón, khu trả, giờ): đếm số chuyến n và tính tốc độ trung bình của từng tuyến-giờ.",
				"Groups by (pickup zone, drop-off zone, hour) counting trips n and averaging speed for each route-hour."
			],
			[
				7,
				7,
				"Giữ tuyến có ít nhất 30 chuyến để số liệu đáng tin, sắp tốc độ tăng dần và lấy 8 tuyến chậm nhất.",
				"Keeps routes with at least 30 trips so averages are reliable, sorts by speed ascending and takes the 8 slowest."
			],
			[
				8,
				9,
				"In tốc độ theo giờ và bảng 8 tuyến chậm nhất.",
				"Prints hourly speeds and the 8 slowest routes."
			]
		]
	},
	"5bafbfb1": {
		"s": ["Đếm số chuyến theo giờ, vẽ biểu đồ và nêu giờ đông nhất trong mẫu.", "Counts trips per hour, plots them and reports the busiest hour in the sample."],
		"r": [
			[
				1,
				1,
				"Đếm chuyến theo giờ đón, sắp theo giờ.",
				"Counts trips per pickup hour, sorted by hour."
			],
			[
				2,
				2,
				"Vẽ biểu đồ cột.",
				"Draws a bar chart."
			],
			[
				3,
				3,
				"In giờ đông nhất (idxmax) và số chuyến lớn nhất (max) trong mẫu.",
				"Prints the busiest hour (idxmax) and its trip count (max) in the sample."
			]
		]
	},
	"4f51f05a": {
		"s": ["Quy 5 giờ đông nhất về số chuyến ước tính cả năm bằng cách chia cho tỷ lệ lấy mẫu.", "Scales the five busiest hours to estimated full-year trips by dividing by the sampling fraction."],
		"r": [[
			1,
			1,
			"Sắp số chuyến giảm dần, lấy 5 giờ đầu, chia cho tỷ lệ mẫu để ước lượng số chuyến thật rồi làm tròn.",
			"Sorts counts descending, takes the top 5, divides by the sampling fraction to estimate real trips and rounds."
		], [
			2,
			2,
			"Đổi sang số nguyên và in.",
			"Converts to integers and prints."
		]]
	},
	dfda9991,
	"1dc87e7d": {
		"s": ["Tìm 10 khu đón và 10 khu trả đông nhất kèm tên, và xem giờ đón thay đổi thế nào ở 5 khu đón đông nhất.", "Finds the top 10 pickup and drop-off zones by name and shows how pickup hours vary in the top 5 pickup zones."],
		"r": [
			[
				1,
				1,
				"Đếm chuyến theo khu đón, sắp giảm dần, lấy 10 khu đầu.",
				"Counts trips per pickup zone, sorts descending, keeps the top 10."
			],
			[
				2,
				2,
				"Làm tương tự cho khu trả.",
				"Does the same for drop-off zones."
			],
			[
				3,
				3,
				"Tạo bảng tra mã khu sang tên khu.",
				"Builds a lookup from zone ID to zone name."
			],
			[
				4,
				5,
				"In hai bảng top 10 điểm đón và điểm trả, thay mã bằng tên khu.",
				"Prints the top-10 pickup and drop-off tables with names instead of codes."
			],
			[
				6,
				6,
				"Lọc chuyến đón ở 5 khu đông nhất, đếm theo (giờ, khu) và xoay mỗi khu thành một cột.",
				"Filters pickups in the 5 busiest zones, counts per (hour, zone) and pivots each zone into a column."
			],
			[
				7,
				7,
				"Đổi tên cột từ mã sang tên khu (giữ mã nếu không có tên).",
				"Renames columns from IDs to zone names (keeping the ID if no name)."
			],
			[
				8,
				8,
				"Vẽ đường số chuyến theo giờ cho từng khu.",
				"Plots hourly trips as one line per zone."
			]
		]
	},
	"642c245d": {
		"s": ["Tính tỷ lệ số chuyến đón trên số chuyến trả của từng khu để tìm khu đón nhiều hơn trả (nơi nên đặt xe) và ngược lại.", "Computes pickups-to-drop-offs ratio per zone to find zones that generate more pickups than arrivals (where to position cabs) and vice versa."],
		"r": [
			[
				1,
				1,
				"Đếm số chuyến đón và số chuyến trả theo từng khu.",
				"Counts pickups and drop-offs per zone."
			],
			[
				2,
				2,
				"Chia số đón cho số trả, bỏ khu thiếu một trong hai, và chỉ giữ khu có ít nhất 50 chuyến mỗi loại để tỷ lệ không bị nhiễu.",
				"Divides pickups by drop-offs, drops zones missing either, and keeps zones with at least 50 of each so ratios are not noisy."
			],
			[
				3,
				3,
				"Tạo bảng gồm tên khu (Unknown nếu thiếu) và tỷ lệ.",
				"Builds a table with zone name (Unknown if missing) and ratio."
			],
			[
				4,
				4,
				"In 10 khu có tỷ lệ cao nhất.",
				"Prints the 10 highest-ratio zones."
			],
			[
				5,
				5,
				"In 10 khu có tỷ lệ thấp nhất.",
				"Prints the 10 lowest-ratio zones."
			]
		]
	},
	bd5e437f,
	d209e7e2,
	"46943628": {
		"s": ["Tính giá cước mỗi dặm và mỗi hành khách theo số khách, để xem đi đông người có rẻ hơn tính theo đầu người không.", "Computes fare per mile, and per mile per person, by passenger count to see if group rides are cheaper per head."],
		"r": [
			[
				1,
				1,
				"Giữ chuyến dài hơn 0,5 dặm để tránh chia cho quãng đường quá nhỏ làm giá/dặm phình to.",
				"Keeps trips over 0.5 mile to avoid tiny distances inflating fare per mile."
			],
			[
				2,
				2,
				"Tính giá mỗi dặm bằng cước chia quãng đường.",
				"Computes fare per mile as fare divided by distance."
			],
			[
				3,
				3,
				"Loại giá trên 100 USD/dặm vì là ngoại lệ vô lý.",
				"Drops values above 100 USD per mile as absurd outliers."
			],
			[
				4,
				4,
				"Giá/dặm trung bình theo số khách.",
				"Average fare per mile by passenger count."
			],
			[
				5,
				5,
				"Lập bảng gồm giá/dặm và giá/dặm/người (chia cho số khách, lấy từ chỉ số bảng).",
				"Builds a table of fare/mile and fare/mile/person (dividing by the passenger count taken from the index)."
			],
			[
				6,
				6,
				"In bảng, làm tròn 2 chữ số.",
				"Prints the table rounded to 2 decimals."
			],
			[
				7,
				7,
				"Vẽ cột giá mỗi dặm mỗi người.",
				"Draws bars of fare per mile per person."
			]
		]
	},
	f3149e31,
	"451d3911": {
		"s": ["So sánh giá mỗi dặm giữa hai hãng taxi theo từng giờ và trung bình chung.", "Compares fare per mile between the two vendors by hour and overall."],
		"r": [
			[
				1,
				1,
				"Tính giá/dặm trung bình theo (giờ, hãng) rồi xoay hãng thành cột.",
				"Averages fare per mile per (hour, vendor) and pivots vendors into columns."
			],
			[
				2,
				2,
				"Vẽ một đường cho mỗi hãng.",
				"Plots one line per vendor."
			],
			[
				3,
				3,
				"In giá/dặm trung bình chung của từng hãng.",
				"Prints each vendor's overall average fare per mile."
			]
		]
	},
	"825c0f79": {
		"s": ["So sánh giá mỗi dặm theo cự ly (ngắn, vừa, dài) và theo hãng, rồi vẽ cột để thấy khác biệt.", "Compares fare per mile by distance band and vendor, then bar-plots the differences."],
		"r": [
			[
				1,
				1,
				"Chia quãng đường thành 3 nhóm: đến 2 dặm, 2–5 dặm, trên 5 dặm (1000 là cận trên đủ lớn) và gắn nhãn tiếng Việt.",
				"Cuts distance into three bands (up to 2, 2-5, over 5 miles; 1000 is a large upper bound) with Vietnamese labels."
			],
			[
				2,
				2,
				"Tính giá/dặm trung bình theo (nhóm, hãng) và xoay hãng thành cột; observed=True chỉ giữ nhóm có dữ liệu.",
				"Averages fare per mile per (band, vendor) and pivots vendors into columns; observed=True keeps only existing groups."
			],
			[
				3,
				3,
				"In bảng làm tròn 2 chữ số.",
				"Prints the table rounded to 2 decimals."
			],
			[
				4,
				4,
				"Vẽ biểu đồ cột nhóm theo cự ly và hãng.",
				"Draws grouped bars by band and vendor."
			]
		]
	},
	"935376aa": {
		"s": ["Phân tích tỷ lệ tip của khách trả thẻ theo cự ly, số khách và giờ, sau khi loại các tip bất thường.", "Analyses card customers' tip percentage by distance, passengers and hour after removing odd tips."],
		"r": [
			[
				1,
				1,
				"Giữ chuyến trả thẻ (tiền mặt không ghi tip) có cước dương, bản copy riêng.",
				"Keeps card-paid trips (cash tips are not recorded) with positive fare, in an independent copy."
			],
			[
				2,
				2,
				"Tính tip bằng phần trăm của cước.",
				"Computes tip as a percent of fare."
			],
			[
				3,
				3,
				"Loại tip từ 100% cước trở lên vì nhiều khả năng là lỗi hoặc ngoại lệ.",
				"Drops tips of 100% of fare or more as probable errors or outliers."
			],
			[
				4,
				4,
				"Tạo 3 biểu đồ cạnh nhau.",
				"Creates three side-by-side charts."
			],
			[
				5,
				5,
				"Cắt quãng đường thành các khoảng 0–1, 1–2, 2–5, 5–10, 10–100 dặm, lấy tip% trung bình mỗi khoảng và vẽ cột.",
				"Cuts distance into 0-1, 1-2, 2-5, 5-10, 10-100 mile bands, averages tip percent in each and draws bars."
			],
			[
				6,
				6,
				"Cột tip% trung bình theo số khách.",
				"Bars of average tip percent by passenger count."
			],
			[
				7,
				7,
				"Đường tip% trung bình theo giờ.",
				"Line of average tip percent by hour."
			],
			[
				8,
				8,
				"In tip% trung bình chung của khách trả thẻ.",
				"Prints the overall average tip percent for card payers."
			]
		]
	},
	d61e62b4,
	b1b159d1,
	"2980b7ca": {
		"s": ["Tính phần trăm chuyến có từng loại phụ phí và xem tỷ lệ phụ phí extra thay đổi theo giờ.", "Computes the percent of trips carrying each surcharge and how the extra surcharge share changes by hour."],
		"r": [
			[
				1,
				1,
				"Với mỗi loại phụ phí, tạo cờ đúng/sai cho chuyến có phụ phí lớn hơn 0.",
				"For each surcharge, creates a True/False flag for trips with an amount above 0."
			],
			[
				2,
				2,
				"Trung bình của cờ nhân 100 chính là phần trăm chuyến có phụ phí đó.",
				"The mean of the flag times 100 is the percent of trips with that surcharge."
			],
			[
				3,
				3,
				"In các tỷ lệ làm tròn 1 chữ số.",
				"Prints the rates rounded to one decimal."
			],
			[
				4,
				4,
				"Tạo khung hình 2 biểu đồ.",
				"Creates a figure with two charts."
			],
			[
				5,
				5,
				"Vẽ cột tỷ lệ phụ phí.",
				"Bar chart of surcharge rates."
			],
			[
				6,
				6,
				"Với mỗi giờ đón, tính phần trăm chuyến có phụ phí extra rồi vẽ đường theo giờ.",
				"For each pickup hour, computes the percent of trips with the extra surcharge and plots it as a line."
			]
		]
	},
	"2394ffdb": {
		"s": ["Đổi hai cột thời gian từ chữ sang kiểu ngày giờ thật để có thể tính khoảng cách giữa chúng.", "Converts the two time columns from text to real datetimes so durations can be computed."],
		"r": [[
			1,
			2,
			"Chuyển cột giờ tạo đơn và giờ giao thực tế sang kiểu ngày giờ.",
			"Converts order-created and actual-delivery columns to datetime."
		], [
			3,
			3,
			"In kiểu dữ liệu hai cột để xác nhận đã đổi đúng.",
			"Prints their types to confirm the conversion."
		]]
	},
	"3aee1d7a": {
		"s": ["Đổi ba cột mã (thị trường, giao thức đặt đơn, loại cửa hàng) sang kiểu phân loại vì số trong đó chỉ là nhãn, không có ý nghĩa cộng trừ.", "Converts three code columns to category type because their numbers are labels, not quantities."],
		"r": [
			[
				1,
				1,
				"Liệt kê ba cột phân loại.",
				"Lists the three categorical columns."
			],
			[
				2,
				2,
				"Đổi các cột đó sang kiểu category.",
				"Casts them to the category type."
			],
			[
				3,
				3,
				"In số giá trị khác nhau của mỗi cột để biết mỗi cột có bao nhiêu nhóm.",
				"Prints the number of distinct values per column to know how many groups each has."
			]
		]
	},
	a2b8024b,
	f1843aec,
	"8218a4f1": {
		"s": ["Tách biến cần dự đoán (thời gian giao) khỏi các biến đầu vào.", "Separates the target (delivery time) from the input features."],
		"r": [
			[
				1,
				1,
				"y là cột thời gian giao, thứ mô hình phải dự đoán.",
				"y is the delivery-time column the model must predict."
			],
			[
				2,
				2,
				"X là mọi cột còn lại, dùng làm đầu vào.",
				"X is every other column, used as inputs."
			],
			[
				3,
				3,
				"In kích thước X và y để chắc số dòng khớp nhau.",
				"Prints shapes of X and y to confirm row counts match."
			]
		]
	},
	"11bc6708": {
		"s": ["Chia dữ liệu 80% để huấn luyện và 20% để kiểm tra, để đánh giá mô hình trên dữ liệu nó chưa từng thấy.", "Splits data 80% for training and 20% for testing so the model is judged on unseen data."],
		"r": [
			[
				1,
				1,
				"Nạp hàm chia dữ liệu của sklearn.",
				"Imports sklearn's split function."
			],
			[
				2,
				2,
				"Chia ngẫu nhiên, test_size=0.2 là 20% cho kiểm tra; random_state=42 cố định cách chia nên chạy lại ra đúng như cũ.",
				"Splits randomly, test_size=0.2 reserves 20% for testing; random_state=42 fixes the split so reruns are identical."
			],
			[
				3,
				3,
				"In số dòng của hai tập.",
				"Prints the size of each set."
			]
		]
	},
	"5909a343": {
		"s": ["Vẽ biểu đồ phân phối (histogram) cho mọi cột số của tập huấn luyện để xem hình dạng và độ lệch.", "Draws histograms of all numerical training columns to see shape and skew."],
		"r": [[
			1,
			1,
			"Chọn tên các cột có kiểu số.",
			"Selects the names of numeric columns."
		], [
			2,
			2,
			"Vẽ histogram 40 khoảng cho các cột đó trong một khung lớn.",
			"Draws 40-bin histograms for those columns in one large figure."
		]]
	},
	"8209b69f": {
		"s": ["Xem số đơn theo từng nhóm của các cột phân loại, và 15 loại cửa hàng phổ biến nhất.", "Looks at order counts per group in categorical columns and the 15 most common store categories."],
		"r": [
			[
				1,
				1,
				"Lặp qua ba cột phân loại.",
				"Loops over three categorical columns."
			],
			[
				2,
				3,
				"Đếm số đơn từng nhóm, sắp theo nhóm, vẽ cột rồi hiển thị.",
				"Counts orders per group, sorts by group, draws bars and shows them."
			],
			[
				4,
				4,
				"Liệt kê 15 loại cửa hàng có nhiều đơn nhất (cột này có quá nhiều nhóm để vẽ hết).",
				"Lists the 15 store categories with most orders (too many groups to plot all)."
			]
		]
	},
	"435761f7": {
		"s": ["Xem phân phối thời gian giao hàng của tập huấn luyện để biết có lệch hay có giá trị lạ.", "Views the training delivery-time distribution to check skew or odd values."],
		"r": [[
			1,
			2,
			"Vẽ histogram 40 khoảng kèm đường mật độ (kde) và hiển thị.",
			"Draws a 40-bin histogram with a density curve (kde) and shows it."
		], [
			3,
			3,
			"In thống kê mô tả của thời gian giao.",
			"Prints summary statistics for delivery time."
		]]
	},
	"737905a1": {
		"s": ["Xem quãng đường và giờ đặt ảnh hưởng thế nào đến thời gian giao hàng.", "Explores how distance and order hour relate to delivery time."],
		"r": [
			[
				1,
				1,
				"Gộp lại X_train và y_train thành một bảng để vẽ cùng nhau, dùng .copy() để không sửa X_train.",
				"Rejoins X_train and y_train into one table for plotting; .copy() leaves X_train untouched."
			],
			[
				2,
				2,
				"Lấy mẫu ngẫu nhiên 5.000 dòng cho nhẹ (random_state=42 để lặp lại được).",
				"Takes a random 5,000-row sample for lighter plotting (random_state=42 for repeatability)."
			],
			[
				3,
				4,
				"Vẽ biểu đồ điểm quãng đường – thời gian giao với điểm hơi trong suốt rồi hiển thị.",
				"Plots distance vs delivery time with translucent points and shows it."
			],
			[
				5,
				5,
				"Vẽ biểu đồ hộp thời gian giao theo từng giờ để thấy giờ nào giao lâu hơn.",
				"Box plot of delivery time per hour to see which hours are slower."
			]
		]
	},
	"813d0ded": {
		"s": ["Vẽ bản đồ nhiệt tương quan giữa các cột số và xếp hạng mối liên quan với thời gian giao, để chọn biến giữ hoặc bỏ.", "Plots a correlation heatmap of numeric columns and ranks their link to delivery time, to decide which features to keep or drop."],
		"r": [
			[
				1,
				1,
				"Tính ma trận tương quan giữa các cột số.",
				"Computes the correlation matrix of numeric columns."
			],
			[
				2,
				3,
				"Vẽ bản đồ nhiệt có ghi số 2 chữ số thập phân, dải màu lạnh-nóng, lấy 0 làm điểm giữa.",
				"Draws a heatmap with 2-decimal numbers on a cool-warm scale centred at 0."
			],
			[
				4,
				4,
				"In tương quan của mọi cột với thời gian giao, sắp từ thấp đến cao.",
				"Prints each column's correlation with delivery time, sorted low to high."
			]
		]
	},
	"7aa82a21": {
		"s": ["Bỏ các cột tương quan yếu khỏi cả tập huấn luyện và tập kiểm tra để hai tập có cùng cột.", "Drops weakly correlated columns from both train and test sets so they keep identical columns."],
		"r": [[
			1,
			1,
			"Chọn danh sách cột yếu cần bỏ (cần lý giải lựa chọn 3–5 cột).",
			"Chooses the weak columns to remove (the choice should be justified)."
		], [
			2,
			3,
			"Bỏ các cột đó khỏi X_train và X_test, gán lại kết quả.",
			"Drops those columns from X_train and X_test, assigning the results back."
		]]
	},
	e4c52849,
	"115d47e7": {
		"s": ["Làm sạch tập huấn luyện: bỏ dòng có số âm vô lý và cắt 1% giá trị lớn nhất của ba biến, để ngoại lệ không kéo lệch mô hình.", "Cleans the training set: drops rows with impossible negative counts and trims the top 1% of three variables so outliers do not skew the model."],
		"r": [
			[
				1,
				1,
				"Gộp X_train và y_train để lọc đồng thời, giữ nhãn đi kèm đúng dòng.",
				"Combines X_train and y_train so rows are filtered together with their labels."
			],
			[
				2,
				2,
				"Lưu số dòng trước khi lọc.",
				"Stores the row count before filtering."
			],
			[
				3,
				3,
				"Liệt kê các cột đếm người giao và đơn hàng, vốn không thể âm.",
				"Lists dasher and order count columns, which cannot be negative."
			],
			[
				4,
				4,
				"Giữ dòng mà mọi cột trong danh sách đều không âm (.all(axis=1) đòi đúng cho tất cả cột).",
				"Keeps rows where all listed columns are non-negative (.all(axis=1) requires every column to pass)."
			],
			[
				5,
				7,
				"Với số món, tổng tiền và quãng đường: tính ngưỡng phân vị 99% rồi chỉ giữ dòng không vượt ngưỡng.",
				"For items, subtotal and distance: computes the 99th-percentile cap and keeps rows at or below it."
			],
			[
				8,
				8,
				"In số dòng đã bị loại.",
				"Prints how many rows were removed."
			]
		]
	},
	"6c8b358f": {
		"s": ["Vẽ histogram các cột số của tập kiểm tra để so hình dạng với tập huấn luyện.", "Draws histograms of the test set's numeric columns to compare their shape with training."],
		"r": [[
			1,
			1,
			"Chọn tên các cột số của tập kiểm tra.",
			"Selects the numeric column names of the test set."
		], [
			2,
			2,
			"Vẽ histogram 40 khoảng cho các cột đó.",
			"Draws 40-bin histograms for them."
		]]
	},
	"6762fa82": {
		"s": ["So sánh tỷ lệ từng thị trường giữa tập huấn luyện và tập kiểm tra để chắc hai tập có cơ cấu giống nhau.", "Compares market proportions between train and test sets to confirm they have a similar mix."],
		"r": [[
			1,
			1,
			"Tính tỷ lệ từng thị trường ở mỗi tập (normalize=True cho ra phần trăm thay vì số đếm) rồi đặt cạnh nhau thành hai cột 'train' và 'valid'.",
			"Computes each market's proportion in both sets (normalize=True gives shares instead of counts) and places them side by side as 'train' and 'valid'."
		]]
	},
	"1e328126": {
		"s": ["In thống kê thời gian giao của tập huấn luyện và tập kiểm tra để thấy hai tập có phân phối tương tự.", "Prints delivery-time statistics for train and test to confirm similar distributions."],
		"r": [[
			1,
			1,
			"In bảng thống kê mô tả của y_train rồi của y_test, làm tròn 1 chữ số.",
			"Prints summary statistics of y_train then y_test, rounded to one decimal."
		]]
	},
	"55dbe8c3": {
		"s": ["Vẽ lại biểu đồ quãng đường – thời gian giao cho tập kiểm tra để xem quan hệ có giống tập huấn luyện không.", "Replots distance vs delivery time for the test set to see if the relationship matches training."],
		"r": [[
			1,
			1,
			"Gộp X_test và y_test thành một bảng, bản copy riêng.",
			"Combines X_test and y_test in a separate copy."
		], [
			2,
			2,
			"Lấy mẫu 5.000 dòng (random_state=42) và vẽ biểu đồ điểm quãng đường – thời gian giao.",
			"Samples 5,000 rows (random_state=42) and draws the distance vs delivery-time scatter."
		]]
	},
	b3ced9f4,
	"2f96b2b4": {
		"s": ["Chuẩn hóa các cột số về cùng thang đo (trung bình 0, độ lệch chuẩn 1), học thang đo từ tập huấn luyện rồi áp dụng sang tập kiểm tra.", "Standardises numeric columns (mean 0, standard deviation 1), learning the scale from training and applying it to test."],
		"r": [
			[
				1,
				1,
				"Nạp bộ chuẩn hóa StandardScaler.",
				"Imports StandardScaler."
			],
			[
				2,
				2,
				"Chọn các cột số.",
				"Selects the numeric columns."
			],
			[
				3,
				3,
				"Tạo bộ chuẩn hóa.",
				"Creates the scaler."
			],
			[
				4,
				4,
				"fit_transform học trung bình và độ lệch chuẩn từ tập huấn luyện rồi biến đổi nó.",
				"fit_transform learns mean and standard deviation from training and transforms it."
			],
			[
				5,
				5,
				"Tập kiểm tra chỉ transform bằng thông số của tập huấn luyện, để không rò rỉ thông tin từ dữ liệu kiểm tra.",
				"The test set is only transformed with training parameters, so no test information leaks."
			]
		]
	},
	afbb5a8f,
	f18850b7,
	"22a9d266": {
		"s": ["Kiểm tra phần dư (sai số = giá trị thật trừ dự đoán) của mô hình cuối để xem các giả định hồi quy tuyến tính có ổn không.", "Check the residuals (actual minus predicted) of the final model to see whether linear regression assumptions hold."],
		"r": [
			[
				1,
				2,
				"Dự đoán thời gian giao trên tập kiểm tra rồi tính phần dư = giá trị thật trừ dự đoán; phần dư cho biết mô hình sai bao nhiêu ở từng đơn.",
				"Predict delivery time on the test set and compute residuals = actual minus predicted, showing how far off each order is."
			],
			[
				3,
				3,
				"Vẽ phần dư theo giá trị dự đoán kèm đường ngang tại 0; nếu các chấm tản đều quanh 0, không có quy luật, thì mô hình ổn.",
				"Plot residuals against predictions with a line at 0; a patternless cloud around 0 means the model is behaving well."
			],
			[
				4,
				5,
				"Vẽ biểu đồ Q-Q để so phần dư với phân phối chuẩn; các điểm nằm sát đường chéo nghĩa là phần dư gần chuẩn.",
				"Draw a Q-Q plot comparing residuals with a normal distribution; points close to the diagonal mean near-normal residuals."
			],
			[
				6,
				6,
				"Vẽ histogram phần dư kèm đường mật độ để nhìn hình dạng, mong đợi hình chuông quanh 0.",
				"Histogram of residuals with a density curve to see the shape; a bell around 0 is expected."
			]
		]
	},
	ae729905,
	"32d174fb": {
		"s": ["Nạp dữ liệu giao hàng và đổi hai cột thời gian từ chữ sang kiểu ngày giờ để tính toán được.", "Load the delivery data and convert the two timestamp columns from text to real datetimes so they can be computed on."],
		"r": [
			[
				1,
				1,
				"Nạp các thư viện xử lý bảng, tính toán số, vẽ biểu đồ.",
				"Import the libraries for tables, numbers and charts."
			],
			[
				2,
				2,
				"Đọc file CSV đơn giao hàng vào bảng df.",
				"Read the delivery orders CSV into the table df."
			],
			[
				3,
				4,
				"Đổi giờ tạo đơn và giờ giao thực tế sang kiểu ngày giờ, vì khi còn là chữ thì không trừ hay lấy giờ được.",
				"Convert order-creation and actual-delivery times to datetime, since text cannot be subtracted or split into hours."
			],
			[
				5,
				6,
				"In kiểu dữ liệu và 3 dòng đầu để kiểm tra việc chuyển đổi đã thành công.",
				"Print the data types and first 3 rows to confirm the conversion worked."
			]
		]
	},
	b149d678,
	"5a6a1e35": {
		"s": ["Xem phân phối của các biến số trong tập huấn luyện và đếm giá trị âm bất thường.", "Look at the distributions of numeric features in the training set and count suspicious negative values."],
		"r": [
			[
				1,
				1,
				"Chọn các cột số, trừ hour và day vì chúng chỉ là mã giờ/ngày.",
				"Select the numeric columns, excluding hour and day since they are time codes."
			],
			[
				2,
				3,
				"Vẽ histogram từng cột số để thấy độ lệch và điểm xa, rồi căn bố cục cho gọn.",
				"Draw a histogram of each numeric column to see skew and outliers, then tidy the layout."
			],
			[
				4,
				4,
				"Đếm số dòng âm ở mỗi cột, vì số lượng người giao hay đơn đang xử lý không thể âm.",
				"Count negative rows per column, since counts of couriers or orders cannot be negative."
			]
		]
	},
	d7e66e9b,
	bb841a93,
	b1d75d8c,
	"25e0344d": {
		"s": ["Tính tương quan giữa các biến số và vẽ bản đồ nhiệt để thấy biến nào liên quan đến thời gian giao.", "Compute correlations among numeric variables and plot a heatmap to see which relate to delivery time."],
		"r": [
			[
				1,
				1,
				"Tính ma trận tương quan giữa mọi cặp cột số (từ -1 đến 1).",
				"Compute the correlation matrix for all pairs of numeric columns (-1 to 1)."
			],
			[
				2,
				3,
				"Vẽ bản đồ nhiệt có ghi số 2 chữ số thập phân, màu lạnh–nóng với 0 làm điểm giữa.",
				"Draw a heatmap with 2-decimal numbers and a cool-warm palette centred at 0."
			],
			[
				4,
				4,
				"In tương quan của từng biến với thời gian giao, xếp từ thấp đến cao để thấy biến mạnh nhất.",
				"Print each variable's correlation with delivery time, sorted low to high to spot the strongest."
			]
		]
	},
	b0fea5a6,
	d647c220,
	cc9a6e4d,
	"24e93551": {
		"s": ["Xem phân phối các biến số quan trọng trong tập kiểm tra.", "Look at the distributions of key numeric features in the validation set."],
		"r": [[
			1,
			2,
			"Vẽ histogram 4 cột số của tập kiểm tra rồi căn bố cục, để so với tập huấn luyện.",
			"Draw histograms of four numeric columns of the test set and tidy the layout, to compare with training."
		]]
	},
	"8e07614a": {
		"s": ["So sánh tỉ lệ các khu vực (market_id) giữa tập huấn luyện và tập kiểm tra.", "Compare market_id proportions between the training and validation sets."],
		"r": [[
			1,
			1,
			"Tính tỉ lệ mỗi khu vực ở hai tập, ghép cạnh nhau và làm tròn; nếu hai cột gần nhau thì hai tập có cùng cơ cấu.",
			"Compute each market's share in both sets, put them side by side and round; similar columns mean the sets have the same mix."
		]]
	},
	"8a36f11c": {
		"s": ["Áp dụng cùng quy tắc làm sạch giá trị âm cho tập kiểm tra và kiểm tra hai tập có cùng cột.", "Apply the same negative-value cleaning to the test set and confirm both sets have the same columns."],
		"r": [
			[
				1,
				2,
				"Tạo mặt nạ giữ các dòng mà 3 cột đếm đều không âm.",
				"Build a mask keeping rows where all three count columns are non-negative."
			],
			[
				3,
				3,
				"Lọc đồng thời X_test và y_test bằng cùng mặt nạ để đặc trưng và nhãn vẫn khớp nhau.",
				"Filter X_test and y_test with the same mask so features and labels stay aligned."
			],
			[
				4,
				4,
				"In xem danh sách cột hai tập có giống nhau không và số dòng kiểm tra còn lại.",
				"Print whether the column lists match and how many test rows remain."
			]
		]
	},
	"16c29592": {
		"s": ["Chuẩn hoá các biến số và mã hoá các biến phân loại thành cột 0/1 để dùng cho hồi quy tuyến tính.", "Scale numeric features and one-hot encode categorical ones so they suit linear regression."],
		"r": [
			[
				1,
				1,
				"Nạp công cụ chuẩn hoá.",
				"Import the standardiser."
			],
			[
				2,
				3,
				"Chọn các cột số và tạo bộ chuẩn hoá (đưa về trung bình 0, độ lệch chuẩn 1) để các biến cùng thang đo.",
				"Pick numeric columns and create a scaler (mean 0, standard deviation 1) so variables share a scale."
			],
			[
				4,
				4,
				"Sao chép dữ liệu để không sửa bản gốc.",
				"Copy the data so the originals are untouched."
			],
			[
				5,
				5,
				"Học trung bình và độ lệch chuẩn trên tập huấn luyện rồi áp lên cả hai tập; tập kiểm tra chỉ dùng transform để không rò rỉ thông tin.",
				"Learn mean and std on training and apply to both; test only uses transform to avoid data leakage."
			],
			[
				6,
				6,
				"Biến các cột phân loại thành cột 0/1, bỏ một cột mỗi nhóm để tránh trùng lặp thông tin, rồi đổi sang số thực.",
				"Turn categorical columns into 0/1 columns, dropping one per group to avoid redundancy, then convert to floats."
			],
			[
				7,
				7,
				"Cho tập kiểm tra có đúng các cột như tập huấn luyện (cột thiếu được điền 0), để mô hình nhận đủ đầu vào.",
				"Force the test set to have exactly the training columns (missing ones filled with 0) so the model gets matching inputs."
			],
			[
				8,
				8,
				"In trung bình và độ lệch chuẩn của các cột số huấn luyện để kiểm tra chúng gần 0 và 1.",
				"Print mean and std of the scaled training columns to confirm they are about 0 and 1."
			]
		]
	},
	af07cd3a,
	"57423484": {
		"s": ["Dùng RFE chọn biến cho từng số lượng biến từ 1 đến tất cả, và xem R2 trên tập kiểm tra thay đổi ra sao để chọn số biến hợp lý.", "Use RFE to select features for every count from 1 to all, and track validation R2 to choose a sensible number of features."],
		"r": [
			[
				1,
				2,
				"Nạp RFE (loại dần biến yếu nhất) và tạo từ điển lưu điểm.",
				"Import RFE (repeatedly drops the weakest feature) and create a dictionary for scores."
			],
			[
				3,
				4,
				"Với mỗi số biến k, chạy RFE để chọn đúng k biến tốt nhất.",
				"For each feature count k, run RFE to pick the best k features."
			],
			[
				5,
				7,
				"Lấy tên k biến được chọn, huấn luyện lại mô hình chỉ với chúng và ghi R2 trên tập kiểm tra.",
				"Get the k chosen names, refit using only them and record validation R2."
			],
			[
				8,
				10,
				"Vẽ R2 theo số biến và in bảng điểm; chỗ đường đi ngang là lúc thêm biến không còn giúp ích.",
				"Plot R2 against feature count and print the table; where the curve flattens, extra variables stop helping."
			]
		]
	},
	c343998f,
	"528b8f42": {
		"s": ["Đổi hệ số của mô hình cuối về đơn vị gốc để nói được, ví dụ thêm một đơn vị khoảng cách thì thời gian giao đổi bao nhiêu phút.", "Convert final-model coefficients to original units to state effects such as minutes per extra unit of distance."],
		"r": [
			[
				1,
				1,
				"Lọc ra những biến số (đã chuẩn hoá) có mặt trong mô hình cuối, vì biến 0/1 không bị chuẩn hoá.",
				"Pick the scaled numeric variables present in the final model; 0/1 dummies were never scaled."
			],
			[
				2,
				3,
				"Gắn tên cho các hệ số và lấy độ lệch chuẩn của bộ chuẩn hoá.",
				"Name the coefficients and fetch the scaler's standard deviations."
			],
			[
				4,
				4,
				"Chia hệ số cho độ lệch chuẩn để có hệ số theo đơn vị gốc.",
				"Divide coefficients by the scale to get original-unit coefficients."
			],
			[
				5,
				6,
				"In bảng hệ số chuẩn hoá và hệ số gốc rồi một dòng trống.",
				"Print the table of scaled and original coefficients, then a blank line."
			],
			[
				7,
				8,
				"Với số món và khoảng cách, in câu diễn giải: tăng 1 đơn vị thì thời gian giao đổi bao nhiêu phút, kèm dấu cộng/trừ.",
				"For item count and distance, print a sentence stating the minutes change per +1 unit, with sign."
			]
		]
	},
	"8aa43d4b": {
		"s": ["Tắt các cảnh báo của Python để notebook gọn hơn.", "Silence Python warnings to keep the notebook output clean."],
		"r": [[
			2,
			3,
			"Nạp module cảnh báo và đặt bỏ qua mọi cảnh báo, để đầu ra không bị rối bởi thông báo không quan trọng.",
			"Import the warnings module and ignore all warnings so output is not cluttered."
		]]
	},
	cf731703,
	"795ed3a7": {
		"s": ["Vẽ phân phối của các cột số để hiểu hình dạng dữ liệu.", "Plot numeric column distributions to understand the data's shape."],
		"r": [[
			1,
			1,
			"Mục đích: vẽ phân phối từng cột số để thấy độ lệch và điểm xa.",
			"Purpose: plot each numeric column's distribution to see skew and outliers."
		], [
			4,
			5,
			"Nạp seaborn và matplotlib, hai thư viện vẽ biểu đồ.",
			"Import seaborn and matplotlib, the plotting libraries."
		]]
	},
	"49720c47": {
		"s": ["Nạp công cụ tính VIF để phát hiện đa cộng tuyến, tức các biến lặp lại thông tin của nhau.", "Import the VIF tool to detect multicollinearity, i.e. variables duplicating each other's information."],
		"r": [[
			1,
			2,
			"Nạp hàm tính hệ số phóng đại phương sai (VIF); VIF cao nghĩa là biến bị các biến khác giải thích gần hết.",
			"Import the variance inflation factor function; a high VIF means other variables almost fully explain that one."
		]]
	},
	de645e23,
	"5ecc7052": {
		"s": ["Nạp hàm tạo đường precision-recall, một cách khác xem sự đánh đổi giữa hai thước đo.", "Import the function for the precision-recall curve, another view of the trade-off between the two measures."],
		"r": [[
			2,
			2,
			"Nạp hàm precision_recall_curve của sklearn, hàm tính precision và recall ở nhiều ngưỡng.",
			"Import sklearn's precision_recall_curve, which computes precision and recall at many cut-offs."
		]]
	},
	"1f3d5fe1": {
		"s": ["Nạp file dữ liệu nhân viên, xem kích thước và vài dòng đầu.", "Load the employee file and look at its size and first rows."],
		"r": [
			[
				1,
				1,
				"Đọc file CSV dữ liệu nhân viên vào bảng df.",
				"Read the employee CSV into the table df."
			],
			[
				2,
				2,
				"In số dòng và số cột để biết quy mô dữ liệu.",
				"Print rows and columns to know the data size."
			],
			[
				3,
				3,
				"Hiển thị 5 dòng đầu để làm quen với các cột.",
				"Show the first 5 rows to get familiar with the columns."
			]
		]
	},
	eabab501,
	"6c96e0fc": {
		"s": ["Xem cấu trúc bảng: tên cột, kiểu dữ liệu và số dòng không bị thiếu.", "Shows the table structure: column names, data types and non-missing counts."],
		"r": [[
			1,
			1,
			"In danh sách cột cùng kiểu dữ liệu (số hay chữ) và số ô có giá trị, để biết cột nào cần xử lý trước khi dựng mô hình.",
			"Lists each column with its type (number or text) and how many cells are filled, showing what needs fixing before modelling."
		]]
	},
	"92a618d7": {
		"s": ["Đếm số ô bị thiếu ở từng cột.", "Counts missing cells in each column."],
		"r": [[
			1,
			1,
			"Đánh dấu ô trống rồi cộng theo cột, cho biết cột nào thiếu dữ liệu và thiếu bao nhiêu.",
			"Flags empty cells and adds them up per column, showing which columns have gaps and how many."
		]]
	},
	"62bba116": {
		"s": ["Tính phần trăm ô thiếu ở mỗi cột để quyết định bỏ hay điền.", "Computes the percentage of missing values per column to decide whether to drop or fill."],
		"r": [[
			1,
			1,
			"Lấy tỷ lệ ô trống của từng cột nhân 100 rồi làm tròn 2 chữ số; tỷ lệ nhỏ thì có thể bỏ dòng, tỷ lệ lớn thì phải cân nhắc.",
			"Takes each column's share of empty cells times 100, rounded to 2 decimals; a small share means rows can be dropped, a large share needs more thought."
		]]
	},
	"0d046a16": {
		"s": ["Xóa các dòng có ô thiếu và xem bảng còn lại bao nhiêu dòng, cột.", "Drops rows with missing values and checks the remaining size."],
		"r": [[
			1,
			1,
			"Loại mọi dòng có ít nhất một ô trống và gán kết quả lại vào df (không sửa tại chỗ), vì mô hình không chạy được với ô trống.",
			"Removes every row with at least one empty cell and reassigns the result to df (not in place), since the model cannot handle blanks."
		], [
			2,
			2,
			"In kích thước (số dòng, số cột) để biết đã mất bao nhiêu dòng.",
			"Prints the shape (rows, columns) to see how many rows were lost."
		]]
	},
	"2de131ba": {
		"s": ["Tính xem còn giữ lại bao nhiêu phần trăm dữ liệu gốc sau khi xóa dòng thiếu.", "Works out what share of the original data remains after dropping missing rows."],
		"r": [[
			1,
			1,
			"In số dòng còn lại và tỷ lệ so với 74.610 dòng ban đầu; nếu giữ lại gần hết thì việc xóa không làm lệch dữ liệu đáng kể.",
			"Prints the remaining row count and its percentage of the original 74,610; if almost all is kept, dropping rows barely distorts the data."
		]]
	},
	"5f4fba6e": {
		"s": ["Kiểm tra các giá trị chữ có trong từng cột và sửa lỗi mã hóa ký tự ở cột trình độ học vấn.", "Inspects the distinct text values per column and fixes a character-encoding glitch in Education Level."],
		"r": [[
			1,
			2,
			"Với mỗi cột chữ, in ra các giá trị khác nhau để phát hiện lỗi chính tả hoặc nhóm trùng lặp.",
			"For each text column, prints the distinct values to spot typos or duplicate categories."
		], [
			3,
			3,
			"Thay chuỗi ký tự lỗi 'â€™' bằng dấu nháy đơn thật, vì nếu không 'Bachelor's' sẽ bị tách thành hai nhóm khác nhau.",
			"Replaces the garbled 'â€™' with a real apostrophe, otherwise the same education level would be split into two groups."
		]]
	},
	"3c47b6b0": {
		"s": ["Bỏ cột mã nhân viên vì nó chỉ là số nhận dạng, không giúp dự đoán nghỉ việc.", "Drops the employee ID column, as it is just an identifier and has no predictive value."],
		"r": [[
			1,
			1,
			"Xóa cột 'Employee ID' (gán lại vào df) để mô hình không học nhầm theo số thứ tự.",
			"Removes 'Employee ID' (reassigned to df) so the model does not learn from a meaningless number."
		], [
			2,
			2,
			"Xem 5 dòng đầu để chắc cột đã mất và dữ liệu vẫn đúng.",
			"Shows the first 5 rows to confirm the column is gone and data looks right."
		]]
	},
	d6d9d010,
	"8b60a13f": {
		"s": ["Tách bảng thành biến đầu vào X và biến cần dự đoán y (nghỉ việc hay ở lại).", "Separates the inputs X from the target y (whether the employee left or stayed)."],
		"r": [
			[
				1,
				1,
				"Lấy cột Attrition làm y, đây là điều ta muốn dự đoán.",
				"Takes the Attrition column as y, the thing we want to predict."
			],
			[
				2,
				2,
				"X là toàn bộ các cột còn lại sau khi bỏ Attrition, tức các đặc điểm của nhân viên.",
				"X is everything left after dropping Attrition, i.e. the employee characteristics."
			],
			[
				3,
				3,
				"In kích thước hai phần để chắc số dòng của X và y bằng nhau.",
				"Prints both shapes to confirm X and y have the same number of rows."
			]
		]
	},
	"65c263fc": {
		"s": ["Chia dữ liệu 70% để huấn luyện và 30% để kiểm tra mô hình trên dữ liệu chưa từng thấy.", "Splits the data 70% for training and 30% for validation to test on unseen data."],
		"r": [[
			1,
			1,
			"Chia ngẫu nhiên với train_size=0.7; random_state=100 cố định cách chia nên chạy lại vẫn ra đúng kết quả cũ.",
			"Randomly splits with train_size=0.7; random_state=100 fixes the split so reruns give the same result."
		], [
			2,
			2,
			"In số dòng mỗi tập để kiểm tra tỷ lệ 70/30.",
			"Prints each set's size to check the 70/30 ratio."
		]]
	},
	e92c6c55,
	"48cccbe2": {
		"s": ["Vẽ biểu đồ cột (histogram) cho từng biến số để xem phân bố.", "Draws a histogram for each numeric variable to see its distribution."],
		"r": [[
			1,
			1,
			"Vẽ histogram 30 cột cho mỗi biến số trong tập huấn luyện, giúp thấy lệch, ngoại lệ; figsize là kích thước hình.",
			"Draws 30-bin histograms for every numeric variable in the training set to reveal skew and outliers; figsize sets the picture size."
		], [
			2,
			2,
			"Hiển thị hình.",
			"Shows the figure."
		]]
	},
	"68cbb4ff": {
		"s": ["Vẽ bản đồ nhiệt tương quan giữa các biến số để tìm biến đi cùng nhau.", "Plots a correlation heatmap of numeric variables to find variables that move together."],
		"r": [
			[
				1,
				1,
				"Tạo khung hình lớn 9x7 inch cho dễ đọc.",
				"Creates a 9x7 inch canvas so labels are readable."
			],
			[
				2,
				2,
				"Tính tương quan từng cặp biến và tô màu (đỏ dương, xanh âm, 0 ở giữa), ghi số với 2 chữ số thập phân; tương quan cao báo hiệu biến trùng thông tin.",
				"Computes pairwise correlations and colours them (red positive, blue negative, 0 at centre) with 2-decimal numbers; high values hint at redundant variables."
			],
			[
				3,
				3,
				"Hiển thị hình.",
				"Shows the plot."
			]
		]
	},
	"513f5831": {
		"s": ["Kiểm tra tỷ lệ người nghỉ và người ở lại trong tập huấn luyện để biết dữ liệu có cân bằng không.", "Checks the share of leavers vs stayers in training to see if classes are balanced."],
		"r": [[
			1,
			1,
			"In tỷ lệ phần trăm (dạng 0-1) của từng nhóm Attrition, làm tròn 3 chữ số.",
			"Prints each Attrition group's proportion (0-1 scale), rounded to 3 decimals."
		], [
			2,
			2,
			"Vẽ biểu đồ cột số lượng từng nhóm để nhìn trực quan mức cân bằng.",
			"Draws a bar chart of the group counts to see the balance visually."
		]]
	},
	d246f289,
	a1282f9f,
	"71055d54": {
		"s": ["Vẽ histogram các biến số của tập kiểm tra để so với tập huấn luyện.", "Draws histograms of validation numeric variables to compare with training."],
		"r": [[
			1,
			1,
			"Vẽ histogram 30 cột cho từng biến số; nếu hình giống tập huấn luyện thì phép chia đại diện tốt.",
			"Draws 30-bin histograms per variable; if they look like training, the split is representative."
		], [
			2,
			2,
			"Hiển thị hình.",
			"Shows the figure."
		]]
	},
	"4d4d3bf3": {
		"s": ["Vẽ bản đồ nhiệt tương quan cho tập kiểm tra.", "Plots the correlation heatmap for the validation set."],
		"r": [[
			1,
			1,
			"Tính và tô màu tương quan giữa các biến số của tập kiểm tra để so với tập huấn luyện; hai hình nên giống nhau.",
			"Computes and colours correlations of the validation numeric variables to compare with training; the two should look alike."
		]]
	},
	db1d857d,
	"129f2808": {
		"s": ["Vẽ biểu đồ đếm các biến dạng chữ theo nghỉ/ở lại cho tập kiểm tra.", "Plots counts of text variables by attrition for the validation set."],
		"r": [
			[
				1,
				1,
				"Lấy các cột dạng chữ của tập kiểm tra.",
				"Gets the text columns of the validation set."
			],
			[
				2,
				3,
				"Với mỗi cột, ghép tạm Attrition và vẽ số người mỗi nhóm, tô màu theo nghỉ/ở lại để so với tập huấn luyện.",
				"For each column, temporarily attaches Attrition and plots counts coloured by left/stayed to compare with training."
			],
			[
				4,
				4,
				"Xoay nhãn 45 độ và hiển thị hình.",
				"Rotates labels 45 degrees and shows the plot."
			]
		]
	},
	d78d1022,
	"9f88964b": {
		"s": ["Biến các cột chữ của tập huấn luyện thành các cột 0/1 (biến giả).", "Turns training text columns into 0/1 dummy columns."],
		"r": [[
			1,
			1,
			"get_dummies tạo mỗi nhóm một cột 0/1; drop_first=True bỏ nhóm đầu của mỗi cột để tránh thông tin thừa; dtype=int cho ra số 0/1 thay vì True/False.",
			"get_dummies makes a 0/1 column per category; drop_first=True drops the first category of each column to avoid redundancy; dtype=int gives 0/1 instead of True/False."
		], [
			2,
			2,
			"Xem 5 dòng đầu của bảng biến giả.",
			"Shows the first 5 rows of the dummy table."
		]]
	},
	"1fc9bb84": {
		"s": ["Tạo biến giả cho tập kiểm tra sao cho có đúng các cột như tập huấn luyện.", "Builds dummies for validation so the columns match training exactly."],
		"r": [[
			1,
			1,
			"Chuyển các cột chữ của tập kiểm tra thành 0/1 theo cùng cách.",
			"Converts the validation text columns to 0/1 the same way."
		], [
			2,
			2,
			"Sắp xếp lại cột đúng thứ tự của tập huấn luyện, nhóm nào thiếu thì điền 0, vì mô hình cần cùng bộ cột ở hai tập.",
			"Reorders columns to match training, filling any missing category with 0, since the model needs identical columns in both sets."
		]]
	},
	"6edea6d3": {
		"s": ["Chuyển biến mục tiêu thành bảng DataFrame để chuyển thành 0/1.", "Wraps the target series into DataFrames so it can be dummy-encoded."],
		"r": [[
			1,
			1,
			"Đặt y của tập huấn luyện vào một bảng.",
			"Puts the training y into a table."
		], [
			2,
			2,
			"Làm tương tự cho y của tập kiểm tra.",
			"Does the same for the validation y."
		]]
	},
	"1a80d1a1": {
		"s": ["Mã hóa biến mục tiêu của tập huấn luyện thành 0/1.", "Encodes the training target as 0/1."],
		"r": [[
			1,
			1,
			"get_dummies với drop_first=True để còn một cột 0/1 (theo thứ tự chữ cái 'Left' bị bỏ, 'Stayed' = 1).",
			"get_dummies with drop_first=True leaves one 0/1 column (alphabetically 'Left' is dropped, 'Stayed' = 1)."
		], [
			2,
			2,
			"Xem vài dòng đầu.",
			"Shows the first rows."
		]]
	},
	"2d9af9af": {
		"s": ["Mã hóa biến mục tiêu của tập kiểm tra thành 0/1 theo cùng cách.", "Encodes the validation target as 0/1 the same way."],
		"r": [[
			1,
			1,
			"Chuyển cột nghỉ/ở lại của tập kiểm tra thành một cột 0/1, cùng quy ước với tập huấn luyện.",
			"Turns the validation left/stayed column into one 0/1 column, same convention as training."
		]]
	},
	e1dd5ab3,
	"03fe1d77": {
		"s": ["Nạp công cụ chuẩn hóa thang đo.", "Imports the scaling tool."],
		"r": [[
			1,
			1,
			"Nhập StandardScaler, công cụ đưa các biến số về cùng thang đo (trung bình 0, độ lệch chuẩn 1).",
			"Imports StandardScaler, which puts numeric variables on one scale (mean 0, standard deviation 1)."
		]]
	},
	"9b8e7168": {
		"s": ["Chuẩn hóa các cột số, học thang đo chỉ từ tập huấn luyện để không rò rỉ thông tin.", "Scales numeric columns, learning the scale from training only to avoid leakage."],
		"r": [
			[
				1,
				1,
				"Tạo bộ chuẩn hóa.",
				"Creates the scaler."
			],
			[
				2,
				2,
				"fit_transform học trung bình và độ lệch chuẩn từ tập huấn luyện rồi áp dụng luôn.",
				"fit_transform learns the mean and standard deviation from training and applies them at once."
			],
			[
				3,
				3,
				"Tập kiểm tra chỉ dùng transform, tức dùng số của tập huấn luyện, để không nhìn trước dữ liệu kiểm tra.",
				"Validation uses only transform, i.e. training's numbers, so it never peeks at validation data."
			]
		]
	},
	e460df9a,
	e261eb02,
	"7cfe05f4": {
		"s": ["Lưu danh sách 15 biến được chọn vào biến col.", "Saves the 15 selected variable names into col."],
		"r": [[
			1,
			1,
			"Lấy tên các cột mà RFE giữ lại (support_ là True).",
			"Takes the names of columns RFE kept (support_ is True)."
		], [
			2,
			2,
			"In ra dạng danh sách.",
			"Prints them as a list."
		]]
	},
	d0ec4a5e,
	"867a083c": {
		"s": ["Chuẩn bị đầu vào cho statsmodels bằng cách thêm hằng số (điểm cắt).", "Prepares input for statsmodels by adding a constant (intercept)."],
		"r": [[
			1,
			1,
			"Nhập thư viện statsmodels.",
			"Imports statsmodels."
		], [
			2,
			2,
			"Thêm cột toàn số 1 làm hệ số chặn, vì statsmodels không tự thêm.",
			"Adds a column of 1s as the intercept, because statsmodels does not add it automatically."
		]]
	},
	c2ea247d,
	f0a9eb6d,
	e3c04a3f,
	fa8f014c,
	"0b0b3b16": {
		"s": ["Ghép giá trị thật và xác suất dự đoán vào một bảng để so sánh.", "Combines actual outcomes and predicted probabilities in one table."],
		"r": [[
			1,
			1,
			"Tạo bảng hai cột: Stayed (thực tế 0/1) và Stayed_Prob (xác suất mô hình đoán).",
			"Builds a two-column table: Stayed (actual 0/1) and Stayed_Prob (model probability)."
		], [
			2,
			2,
			"Xem vài dòng đầu.",
			"Shows the first rows."
		]]
	},
	b1f15d2e,
	"77811523": {
		"s": ["Đo độ chính xác tổng thể của mô hình trên tập huấn luyện.", "Measures the model's overall accuracy on training."],
		"r": [[
			1,
			1,
			"Nhập module metrics của sklearn.",
			"Imports sklearn's metrics module."
		], [
			2,
			2,
			"Tính tỷ lệ dòng đoán đúng trên tổng số dòng.",
			"Computes the share of rows predicted correctly."
		]]
	},
	d17eb9fa,
	"46fbabe1": {
		"s": ["Tách ma trận nhầm lẫn thành bốn con số TN, FP, FN, TP.", "Splits the confusion matrix into TN, FP, FN, TP."],
		"r": [[
			1,
			1,
			"ravel() làm phẳng ma trận để gán TN (đoán nghỉ đúng), FP (đoán ở nhưng thực nghỉ), FN (đoán nghỉ nhưng thực ở), TP (đoán ở đúng).",
			"ravel() flattens the matrix to assign TN (left correctly), FP (predicted stay, actually left), FN (predicted left, actually stayed), TP (stayed correctly)."
		], [
			2,
			2,
			"In bốn số.",
			"Prints the four numbers."
		]]
	},
	"60bceacd": {
		"s": ["Tính độ nhạy và độ đặc hiệu của mô hình.", "Computes sensitivity and specificity."],
		"r": [
			[
				1,
				1,
				"Độ nhạy = tỷ lệ người thực sự ở lại mà mô hình đoán đúng.",
				"Sensitivity = share of real stayers the model caught."
			],
			[
				2,
				2,
				"Độ đặc hiệu = tỷ lệ người thực sự nghỉ mà mô hình đoán đúng.",
				"Specificity = share of real leavers the model caught."
			],
			[
				3,
				3,
				"In hai số làm tròn 3 chữ số.",
				"Prints both rounded to 3 decimals."
			]
		]
	},
	"1089596d": {
		"s": ["Tính precision và recall của mô hình.", "Computes precision and recall."],
		"r": [
			[
				1,
				1,
				"Precision = trong số người được đoán ở lại, bao nhiêu phần đúng.",
				"Precision = of those predicted to stay, how many truly did."
			],
			[
				2,
				2,
				"Recall = trong số người thực sự ở lại, bao nhiêu phần được tìm ra (giống độ nhạy).",
				"Recall = of those who truly stayed, how many were found (same as sensitivity)."
			],
			[
				3,
				3,
				"In hai số làm tròn.",
				"Prints both rounded."
			]
		]
	},
	"6b72ccd7": {
		"s": ["Vẽ đường ROC và tính AUC để đánh giá khả năng phân biệt của mô hình ở mọi ngưỡng.", "Draws the ROC curve and AUC to judge how well the model separates classes at every cutoff."],
		"r": [
			[
				1,
				1,
				"Định nghĩa hàm vẽ ROC nhận giá trị thật và xác suất.",
				"Defines a function to draw ROC from actuals and probabilities."
			],
			[
				2,
				2,
				"Tính tỷ lệ dương giả (FPR) và dương thật (TPR) ở nhiều ngưỡng, không bỏ bớt điểm.",
				"Computes false- and true-positive rates at many cutoffs, keeping all points."
			],
			[
				3,
				3,
				"AUC là diện tích dưới đường cong; càng gần 1 càng tốt, 0,5 là đoán bừa.",
				"AUC is the area under the curve; closer to 1 is better, 0.5 is guessing."
			],
			[
				4,
				4,
				"Vẽ đường ROC và đường chéo đứt nét tham chiếu cho việc đoán ngẫu nhiên.",
				"Plots the ROC and a dashed diagonal for random guessing."
			],
			[
				5,
				5,
				"Gắn nhãn trục, chú thích rồi hiển thị.",
				"Labels axes, adds a legend and shows the plot."
			],
			[
				6,
				6,
				"Gọi hàm với dữ liệu huấn luyện.",
				"Calls the function on the training data."
			]
		]
	},
	d2a7ad9b,
	c222e796,
	aa286749,
	"32707de8": {
		"s": ["Đo độ chính xác tập huấn luyện với ngưỡng đã chọn.", "Measures training accuracy at the chosen cutoff."],
		"r": [[
			1,
			1,
			"Tính tỷ lệ dự đoán đúng sau khi dùng ngưỡng cuối.",
			"Computes the share of correct predictions using the final cutoff."
		]]
	},
	d0b78a0b,
	"59e07a95": {
		"s": ["Tách bốn số TN, FP, FN, TP từ ma trận mới.", "Unpacks TN, FP, FN, TP from the new matrix."],
		"r": [[
			1,
			1,
			"Làm phẳng ma trận để tính tiếp các chỉ số ở ngưỡng cuối.",
			"Flattens the matrix so metrics can be recomputed for the final cutoff."
		]]
	},
	c56e7a2c,
	"9648ed06": {
		"s": ["Chỉ giữ 15 biến đã chọn trong tập kiểm tra.", "Keeps only the 15 selected variables in validation."],
		"r": [[
			1,
			1,
			"Dùng đúng danh sách col từ tập huấn luyện để hai tập cùng cột.",
			"Uses the same col list from training so both sets share columns."
		]]
	},
	"77c05e88": {
		"s": ["Thêm hằng số vào tập kiểm tra giống tập huấn luyện.", "Adds the intercept column to validation like training."],
		"r": [[
			1,
			1,
			"Thêm cột toàn số 1 vì mô hình đã học cùng với hệ số chặn.",
			"Adds a column of 1s because the model was fitted with an intercept."
		]]
	},
	e0211374,
	cb266e28,
	"3e4bf873": {
		"s": ["Chuyển xác suất tập kiểm tra thành dự đoán 0/1 bằng ngưỡng đã chọn.", "Converts validation probabilities to 0/1 using the chosen cutoff."],
		"r": [[
			1,
			1,
			"Lớn hơn ngưỡng cutoff thì đoán ở lại (1), không thì nghỉ (0); dùng cùng ngưỡng với tập huấn luyện.",
			"Above cutoff predicts stayed (1), otherwise left (0); same cutoff as training."
		]]
	},
	"1373fb06": {
		"s": ["Đo độ chính xác trên tập kiểm tra.", "Measures accuracy on the validation set."],
		"r": [[
			1,
			1,
			"Tính tỷ lệ dự đoán đúng trên dữ liệu chưa thấy; nếu gần với tập huấn luyện thì mô hình không bị quá khớp.",
			"Computes the share correct on unseen data; if close to training the model is not overfitting."
		]]
	},
	adad1f07,
	efedf952,
	"2e7b6451": {
		"s": ["Xem thống kê tóm tắt các cột số, xoay ngang cho dễ đọc.", "Shows summary statistics of numeric columns, transposed for readability."],
		"r": [[
			1,
			1,
			"Tính trung bình, nhỏ nhất, lớn nhất... làm tròn 1 chữ số, xoay ngang để mỗi biến là một hàng.",
			"Computes mean, min, max... rounded to 1 decimal, transposed so each variable is one row."
		]]
	},
	"85c380f7": {
		"s": ["Liệt kê chỉ các cột có ô bị thiếu và số lượng thiếu.", "Lists only columns with missing cells and how many."],
		"r": [[
			1,
			1,
			"Đếm ô trống theo cột rồi lọc giữ lại các cột có số đếm lớn hơn 0 (mặt nạ true thì giữ).",
			"Counts blanks per column then keeps only columns whose count is above 0 (the mask keeps where true)."
		]]
	},
	"0a5c7ea1": {
		"s": ["Xóa dòng thiếu dữ liệu và ghi lại số dòng trước, sau.", "Drops rows with missing data and records row counts before and after."],
		"r": [
			[
				1,
				1,
				"Lưu số dòng ban đầu vào n0.",
				"Stores the original row count in n0."
			],
			[
				2,
				2,
				"Bỏ mọi dòng có ô trống, gán lại vào df.",
				"Drops every row with an empty cell, reassigning to df."
			],
			[
				3,
				3,
				"In số dòng trước và sau để thấy mất bao nhiêu.",
				"Prints before and after counts to see the loss."
			]
		]
	},
	"340ee541": {
		"s": ["Tính phần trăm dòng còn lại so với ban đầu.", "Computes the percentage of rows remaining versus the start."],
		"r": [[
			1,
			1,
			"In số dòng còn lại và tỷ lệ so với n0; tỷ lệ cao nghĩa là việc xóa ít ảnh hưởng.",
			"Prints remaining rows and their share of n0; a high share means dropping had little impact."
		]]
	},
	"59f76a1b": {
		"s": ["Kiểm tra giá trị của các cột chữ và sửa lỗi ký tự ở trình độ học vấn, rồi in lại để xác nhận.", "Checks text column values, fixes a character glitch in Education Level, then prints again to confirm."],
		"r": [
			[
				1,
				2,
				"Với mỗi cột chữ, in các giá trị khác nhau để phát hiện nhóm lỗi.",
				"For each text column prints distinct values to spot bad categories."
			],
			[
				3,
				3,
				"Thay chuỗi lỗi 'â€™' bằng dấu nháy đơn thật để một trình độ không bị tách thành hai nhóm.",
				"Replaces the garbled 'â€™' with a real apostrophe so one education level is not split in two."
			],
			[
				4,
				4,
				"In dòng trống cho dễ nhìn.",
				"Prints a blank line for spacing."
			],
			[
				5,
				5,
				"In lại các giá trị cột học vấn để chắc đã sửa.",
				"Prints the Education Level values again to confirm the fix."
			]
		]
	},
	f335efba,
	ee2876a3,
	"664d8eda": {
		"s": ["Lấy và in tên các cột số của tập huấn luyện.", "Collects and prints the numeric column names of training."],
		"r": [[
			1,
			1,
			"Chọn cột kiểu số nguyên hoặc số thực.",
			"Selects integer or float columns."
		], [
			2,
			2,
			"In tên dưới dạng danh sách.",
			"Prints the names as a list."
		]]
	},
	ee8a96d6,
	"264ed5e5": {
		"s": ["Vẽ bản đồ nhiệt tương quan giữa các biến số để tìm biến đi cùng nhau.", "Plots a correlation heatmap to find variables moving together."],
		"r": [[
			1,
			1,
			"Tạo khung hình 8x6 inch.",
			"Creates an 8x6 inch canvas."
		], [
			2,
			2,
			"Tính tương quan từng cặp và tô màu (đỏ dương, xanh âm), ghi số 2 chữ số thập phân.",
			"Computes pairwise correlations and colours them (red positive, blue negative) with 2-decimal labels."
		]]
	},
	"4e6c3d4d": {
		"s": ["Xem tỷ lệ nghỉ việc/ở lại trong tập huấn luyện để biết dữ liệu có cân bằng không.", "Checks the leave/stay split in training to judge class balance."],
		"r": [[
			1,
			1,
			"In tỷ lệ từng nhóm Attrition, làm tròn 3 chữ số.",
			"Prints each Attrition group's proportion, rounded to 3 decimals."
		], [
			2,
			2,
			"Vẽ biểu đồ cột số lượng, tô hai màu riêng cho hai nhóm.",
			"Draws a bar chart of counts with a separate colour per group."
		]]
	},
	a0900eda,
	d6948cca,
	dc50c185,
	"4404f406": {
		"s": ["Mã hóa biến mục tiêu của cả hai tập thành 0/1 và kiểm tra quy ước.", "Encodes the target of both sets as 0/1 and checks the convention."],
		"r": [
			[
				1,
				1,
				"Chuyển y huấn luyện thành bảng rồi mã hóa 0/1, bỏ nhóm đầu theo chữ cái nên 'Stayed' là 1.",
				"Wraps training y in a table and encodes 0/1, dropping the first alphabetical group so 'Stayed' is 1."
			],
			[
				2,
				2,
				"Làm tương tự cho tập kiểm tra.",
				"Does the same for validation."
			],
			[
				3,
				3,
				"In tên cột và trung bình (tỷ lệ người ở lại) để chắc quy ước đúng.",
				"Prints the column name and mean (share who stayed) to confirm the convention."
			]
		]
	},
	f419de10,
	"8a272fe9": {
		"s": ["Dùng RFE với hồi quy logistic để chọn 15 biến quan trọng nhất và liệt kê tên.", "Uses RFE with logistic regression to select the 15 most important features and list them."],
		"r": [
			[
				1,
				2,
				"Nhập mô hình logistic và công cụ chọn biến RFE.",
				"Imports logistic regression and the RFE selector."
			],
			[
				3,
				3,
				"Tạo mô hình logistic cho phép tối đa 1000 vòng tính.",
				"Creates a logistic model allowed up to 1000 iterations."
			],
			[
				4,
				4,
				"Cho RFE loại dần biến yếu cho đến khi còn 15, huấn luyện trên tập huấn luyện; ravel() làm phẳng cột mục tiêu.",
				"Has RFE drop weak variables until 15 remain, fitting on training; ravel() flattens the target."
			],
			[
				5,
				5,
				"Lấy tên 15 cột được giữ.",
				"Takes the names of the 15 kept columns."
			],
			[
				6,
				6,
				"In từng tên.",
				"Prints each name."
			]
		]
	},
	"6748d6fe": {
		"s": ["Huấn luyện mô hình logistic bằng statsmodels trên 15 biến đã chọn và in bảng hệ số.", "Fits a statsmodels logistic model on the 15 chosen variables and prints the coefficient table."],
		"r": [
			[
				1,
				1,
				"Nhập statsmodels.",
				"Imports statsmodels."
			],
			[
				2,
				2,
				"Chỉ giữ 15 biến đã chọn.",
				"Keeps only the 15 selected variables."
			],
			[
				3,
				3,
				"Thêm cột hằng số làm hệ số chặn.",
				"Adds a constant column as intercept."
			],
			[
				4,
				4,
				"Khai báo GLM họ nhị thức cho kết quả 0/1 và huấn luyện.",
				"Declares a Binomial GLM for a 0/1 outcome and fits it."
			],
			[
				5,
				5,
				"In bảng hệ số, sai số và p-value để biết biến nào có ý nghĩa.",
				"Prints coefficients, errors and p-values to see which variables matter."
			]
		]
	},
	"077caf22": {
		"s": ["Tính VIF cho từng biến để phát hiện đa cộng tuyến.", "Computes VIF for each variable to detect multicollinearity."],
		"r": [
			[
				1,
				1,
				"Nhập hàm tính VIF.",
				"Imports the VIF function."
			],
			[
				2,
				2,
				"Với mỗi biến tính VIF (mức bị các biến khác giải thích) và gom vào bảng.",
				"For each variable computes VIF (how much others explain it) and collects them in a table."
			],
			[
				3,
				3,
				"Sắp từ cao xuống thấp, làm tròn 2 chữ số, in không kèm số thứ tự; VIF trên 5 là đáng lo.",
				"Sorts high to low, rounds to 2 decimals and prints without the index; above 5 is a concern."
			]
		]
	},
	cf11c4b6,
	f6e4aeeb,
	"5f668511": {
		"s": ["In ma trận nhầm lẫn có nhãn tiếng Việt cho dễ đọc.", "Prints a confusion matrix with Vietnamese labels for readability."],
		"r": [[
			1,
			1,
			"Đếm các cặp (thực tế, dự đoán).",
			"Counts (actual, predicted) pairs."
		], [
			2,
			2,
			"Đặt tên hàng là thực tế và cột là dự đoán (nghỉ / ở) rồi in; thứ tự 0 = nghỉ, 1 = ở.",
			"Labels rows as actual and columns as predicted (left / stayed) and prints; order is 0 = left, 1 = stayed."
		]]
	},
	"0cbb98d9": {
		"s": ["Tách và in bốn số TP, TN, FP, FN từ ma trận nhầm lẫn.", "Unpacks and prints TP, TN, FP, FN from the confusion matrix."],
		"r": [[
			1,
			1,
			"Làm phẳng ma trận để gán bốn con số.",
			"Flattens the matrix to assign the four counts."
		], [
			2,
			2,
			"In bốn số có nhãn.",
			"Prints the four labelled numbers."
		]]
	},
	c482363b,
	"2cae980d": {
		"s": ["Tính và in precision và recall.", "Computes and prints precision and recall."],
		"r": [[
			1,
			1,
			"Precision là trong những người được đoán ở lại thì đúng bao nhiêu; recall là trong những người thực sự ở lại thì tìm ra bao nhiêu.",
			"Precision is how many predicted stayers truly stayed; recall is how many actual stayers were found."
		], [
			2,
			2,
			"In hai số làm tròn.",
			"Prints both rounded."
		]]
	},
	b166c435,
	"618f6351": {
		"s": ["Thử nhiều ngưỡng, tính độ chính xác, độ nhạy, độ đặc hiệu cho từng ngưỡng, vẽ và in bảng để chọn ngưỡng.", "Tries many cutoffs, computes accuracy, sensitivity and specificity for each, plots and prints them to choose a cutoff."],
		"r": [
			[
				1,
				1,
				"Tạo ngưỡng 0,0 đến 0,9.",
				"Creates cutoffs 0.0 to 0.9."
			],
			[
				2,
				2,
				"Với mỗi ngưỡng thêm một cột dự đoán 0/1 (xác suất lớn hơn ngưỡng thì là 1).",
				"For each cutoff adds a 0/1 prediction column (probability above it gives 1)."
			],
			[
				3,
				3,
				"Tạo danh sách rỗng để lưu kết quả.",
				"Creates an empty list to store results."
			],
			[
				4,
				6,
				"Với mỗi ngưỡng tính ma trận nhầm lẫn rồi lưu độ chính xác, độ nhạy, độ đặc hiệu.",
				"For each cutoff builds the confusion matrix and stores accuracy, sensitivity, specificity."
			],
			[
				7,
				7,
				"Đưa kết quả vào bảng có tên cột rõ ràng.",
				"Puts results into a table with clear column names."
			],
			[
				8,
				8,
				"Vẽ ba đường theo ngưỡng; chỗ giao nhau gợi ý ngưỡng cân bằng.",
				"Plots three lines by cutoff; where they cross suggests a balanced cutoff."
			],
			[
				9,
				9,
				"In bảng số làm tròn 3 chữ số.",
				"Prints the table rounded to 3 decimals."
			]
		]
	},
	e31370c2,
	b5acc660,
	"8a620d48": {
		"s": ["Vẽ precision và recall theo ngưỡng để thấy sự đánh đổi.", "Plots precision and recall by cutoff to show the trade-off."],
		"r": [
			[
				1,
				1,
				"Nhập hàm precision_recall_curve.",
				"Imports precision_recall_curve."
			],
			[
				2,
				2,
				"Tính precision và recall ở nhiều ngưỡng.",
				"Computes precision and recall at many cutoffs."
			],
			[
				3,
				3,
				"Vẽ precision (xanh lá) và recall (đỏ), bỏ giá trị cuối cho khớp độ dài, ghi chú trục x là ngưỡng.",
				"Plots precision (green) and recall (red), dropping the last value to match lengths, with the x-axis labelled as the cutoff."
			]
		]
	},
	a160252e,
	"61c3f8e5": {
		"s": ["So sánh độ chính xác giữa tập kiểm tra và tập huấn luyện để xem mô hình có quá khớp không.", "Compares validation and training accuracy to check for overfitting."],
		"r": [[
			1,
			1,
			"In độ chính xác của tập kiểm tra cạnh độ chính xác của tập huấn luyện; hai số gần nhau là tín hiệu tốt.",
			"Prints validation accuracy next to training accuracy; similar numbers are a good sign."
		]]
	},
	"3175e504": {
		"s": ["Lập và in ma trận nhầm lẫn của tập kiểm tra có nhãn tiếng Việt.", "Builds and prints the validation confusion matrix with Vietnamese labels."],
		"r": [
			[
				1,
				1,
				"Đếm các cặp (thực tế, dự đoán) của tập kiểm tra.",
				"Counts (actual, predicted) pairs on validation."
			],
			[
				2,
				2,
				"Tách TN, FP, FN, TP.",
				"Unpacks TN, FP, FN, TP."
			],
			[
				3,
				3,
				"In ma trận với nhãn hàng là thực tế và cột là dự đoán.",
				"Prints it with rows as actual and columns as predicted."
			]
		]
	},
	"92915242": {
		"s": ["Tính độ nhạy và độ đặc hiệu trên tập kiểm tra.", "Computes sensitivity and specificity on validation."],
		"r": [[
			1,
			1,
			"Độ nhạy là tỷ lệ người ở lại được tìm ra, độ đặc hiệu là tỷ lệ người nghỉ được tìm ra, làm tròn 3 chữ số.",
			"Sensitivity is the share of stayers found, specificity the share of leavers found, rounded to 3 decimals."
		]]
	},
	"200a7672": {
		"s": ["Tính precision và recall trên tập kiểm tra.", "Computes precision and recall on validation."],
		"r": [[
			1,
			1,
			"Precision là độ đúng trong số người được đoán ở lại; recall là tỷ lệ người ở lại được tìm ra, làm tròn 3 chữ số.",
			"Precision is the accuracy among predicted stayers; recall is the share of actual stayers found, rounded to 3 decimals."
		]]
	},
	bbf02471,
	cb765f8b,
	"0e1ed854": {
		"s": ["Nạp hàm chia dữ liệu thành tập huấn luyện và tập kiểm tra của sklearn.", "Import sklearn's function for splitting data into training and validation sets."],
		"r": [[
			2,
			2,
			"Nạp train_test_split, công cụ chia ngẫu nhiên dữ liệu thành phần để học và phần để kiểm tra mô hình.",
			"Import train_test_split, the tool that randomly separates data into a part to learn from and a part to test on."
		]]
	},
	"45558fc4": {
		"s": ["Nạp công cụ nhân bản ngẫu nhiên nhóm thiểu số để cân bằng dữ liệu huấn luyện, vì vụ gian lận hiếm hơn vụ bình thường.", "Import the random over-sampler used to balance the training data, since fraud cases are rarer than normal ones."],
		"r": [[
			2,
			2,
			"Nạp RandomOverSampler, công cụ sao chép ngẫu nhiên các dòng của nhóm ít để hai nhóm có số lượng bằng nhau.",
			"Import RandomOverSampler, which randomly duplicates rows of the smaller class so both classes have equal counts."
		]]
	},
	"9314d6b3": {
		"s": ["Nạp module metrics của sklearn và tính độ chính xác của mô hình.", "Import sklearn's metrics module and measure model accuracy."],
		"r": [[
			2,
			2,
			"Nạp metrics, bộ công cụ đo chất lượng mô hình như accuracy, ma trận nhầm lẫn, ROC.",
			"Import metrics, the toolbox for scoring models: accuracy, confusion matrix, ROC and so on."
		], [
			4,
			4,
			"Phần tính accuracy (tỷ lệ đoán đúng) do học viên tự viết.",
			"The accuracy (share of correct predictions) calculation is left for the learner."
		]]
	},
	"80c97be0": {
		"s": ["Nạp các công cụ rừng ngẫu nhiên, báo cáo phân loại, kiểm chứng chéo và tìm tham số tối ưu.", "Import random forest, classification report, cross-validation and grid search tools."],
		"r": [
			[
				2,
				2,
				"Nạp RandomForestClassifier, mô hình gồm nhiều cây quyết định bỏ phiếu cùng nhau.",
				"Import RandomForestClassifier, a model made of many decision trees that vote together."
			],
			[
				3,
				3,
				"Nạp classification_report để in precision, recall, F1 theo từng lớp.",
				"Import classification_report to print precision, recall and F1 per class."
			],
			[
				4,
				4,
				"Nạp cross_val_score (kiểm chứng chéo) và GridSearchCV (thử nhiều bộ tham số) để kiểm tra quá khớp và chọn tham số.",
				"Import cross_val_score (cross-validation) and GridSearchCV (try many parameter sets) to check overfitting and tune settings."
			]
		]
	},
	ae5017f7,
	"1af6beb8": {
		"s": ["Điền 'None' vào ô trống của cột cơ quan được liên hệ, vì ô trống ở đây có nghĩa là chưa liên hệ ai chứ không phải mất dữ liệu.", "Fill blanks in the authorities-contacted column with 'None', since blank here means nobody was contacted, not lost data."],
		"r": [[
			2,
			2,
			"Thay các ô trống bằng chữ 'None' (gán lại vào cột, không sửa tại chỗ), giữ lại các dòng thay vì xoá.",
			"Replace blanks with the text 'None' (assigned back to the column), keeping the rows instead of deleting them."
		], [
			3,
			3,
			"Đếm số lần mỗi giá trị xuất hiện để kiểm tra kết quả điền.",
			"Count how often each value appears to verify the fill."
		]]
	},
	cc7954b9,
	"5641e31f": {
		"s": ["Tìm và xoá các cột hoàn toàn trống, vì chúng không có thông tin gì.", "Find and drop columns that are completely empty, since they hold no information."],
		"r": [
			[
				1,
				1,
				"Lập danh sách cột mà mọi ô đều trống.",
				"Build a list of columns where every cell is empty."
			],
			[
				2,
				2,
				"In danh sách đó để biết cột nào bị loại.",
				"Print that list to see which columns will go."
			],
			[
				3,
				3,
				"Xoá các cột này khỏi bảng và gán lại vào df.",
				"Drop those columns from the table and assign the result back to df."
			]
		]
	},
	"31bb8696": {
		"s": ["Kiểm tra giá trị âm ở các cột số và loại dòng có umbrella_limit âm, vì hạn mức bảo hiểm không thể âm.", "Check for negatives in numeric columns and drop rows with negative umbrella_limit, since a coverage limit cannot be negative."],
		"r": [
			[
				1,
				2,
				"Chọn các cột số và đếm số giá trị âm ở mỗi cột, chỉ hiện cột có giá trị âm.",
				"Select numeric columns and count negative values per column, showing only those that have any."
			],
			[
				3,
				3,
				"Xem các dòng umbrella_limit âm để biết cụ thể.",
				"List the rows with negative umbrella_limit to see them."
			],
			[
				4,
				4,
				"Giữ lại các dòng có umbrella_limit từ 0 trở lên (mặt nạ giữ dòng thoả điều kiện), tức bỏ dòng âm.",
				"Keep rows where umbrella_limit is 0 or more (the mask keeps rows where the condition is true), dropping the negative ones."
			],
			[
				5,
				5,
				"In số dòng còn lại để biết đã loại bao nhiêu.",
				"Print the remaining row count to see how many were removed."
			]
		]
	},
	c3121418,
	ef9e1be4,
	"6a41f64f": {
		"s": ["Tách cột mục tiêu (có gian lận hay không) khỏi các biến dùng để dự đoán.", "Separate the target (fraud or not) from the predictor variables."],
		"r": [
			[
				1,
				1,
				"y là cột cần dự đoán: có báo gian lận hay không.",
				"y is the column to predict: whether fraud was reported."
			],
			[
				2,
				2,
				"X là mọi cột còn lại, dùng làm đầu vào cho mô hình.",
				"X is every other column, used as model input."
			],
			[
				3,
				3,
				"In kích thước X và y để chắc số dòng khớp nhau.",
				"Print the shapes of X and y to confirm the row counts match."
			]
		]
	},
	"2dd868ce": {
		"s": ["Chia dữ liệu 70% huấn luyện và 30% kiểm tra, giữ tỷ lệ gian lận đều ở hai phần.", "Split data 70% train and 30% validation, keeping the fraud proportion equal in both."],
		"r": [
			[
				1,
				1,
				"Nạp hàm chia dữ liệu của sklearn.",
				"Import sklearn's split function."
			],
			[
				2,
				2,
				"Chia với 70% để huấn luyện; stratify=y giữ tỷ lệ gian lận giống nhau ở hai phần, và random_state=42 cố định cách chia để kết quả lặp lại được.",
				"Split with 70% for training; stratify=y keeps the fraud ratio the same in both parts, and random_state=42 fixes the split so results are repeatable."
			],
			[
				3,
				3,
				"Đánh lại số thứ tự dòng từ 0 cho cả bốn phần, sửa trực tiếp tại chỗ (inplace), vì sau khi chia số dòng bị xáo.",
				"Reset row numbers from 0 on all four parts, in place, since the split left them shuffled."
			],
			[
				4,
				4,
				"In số dòng mỗi tập và tỷ lệ gian lận trong train và validation để kiểm tra hai tập giống nhau.",
				"Print each set's size and the fraud share in train and validation to check they match."
			]
		]
	},
	c4ed9222,
	"0c821167": {
		"s": ["Vẽ biểu đồ cột phân bố của từng cột số trong tập huấn luyện để xem hình dạng và giá trị lệch.", "Draw a histogram for each numeric training column to see its shape and any skew."],
		"r": [[
			1,
			1,
			"Vẽ histogram 25 khoảng cho mỗi cột số trên một khung lớn, tight_layout chỉnh để các biểu đồ không chồng nhau.",
			"Draw 25-bin histograms for every numeric column on one big canvas; tight_layout stops the plots overlapping."
		]]
	},
	"6e5d2836": {
		"s": ["Vẽ bản đồ nhiệt tương quan giữa các cột số và liệt kê các cặp tương quan mạnh nhất để phát hiện biến trùng thông tin.", "Draw a correlation heatmap of numeric columns and list the strongest pairs to spot variables carrying the same information."],
		"r": [
			[
				1,
				1,
				"Vẽ bản đồ nhiệt hệ số tương quan, ghi số trong từng ô, màu lạnh-nóng với 0 ở giữa.",
				"Draw a heatmap of correlation coefficients with numbers in each cell, cool-to-warm colours centred on 0."
			],
			[
				2,
				2,
				"Lấy giá trị tuyệt đối của tương quan, chỉ giữ nửa tam giác trên để mỗi cặp xuất hiện một lần, rồi sắp giảm dần.",
				"Take absolute correlations, keep only the upper triangle so each pair appears once, then sort descending."
			],
			[
				3,
				3,
				"In 6 cặp tương quan cao nhất.",
				"Print the 6 highest-correlated pairs."
			]
		]
	},
	"2dc247ff": {
		"s": ["Kiểm tra mức mất cân bằng giữa vụ gian lận và không gian lận ở tập huấn luyện.", "Check how imbalanced fraud versus non-fraud is in the training set."],
		"r": [[
			1,
			1,
			"In tỷ lệ phần trăm mỗi lớp của biến mục tiêu.",
			"Print each target class's share."
		], [
			2,
			2,
			"Vẽ biểu đồ cột số vụ mỗi lớp; thấy lớp gian lận ít hơn nhiều sẽ cần cân bằng lại.",
			"Bar-chart the count per class; if fraud is much rarer it will need rebalancing."
		]]
	},
	"28ac5648": {
		"s": ["Tính tỷ lệ gian lận theo từng nhóm của mọi cột chữ, xếp hạng cột nào tách nhóm rõ nhất rồi vẽ ba cột tiêu biểu.", "Compute the fraud rate per group for every text column, rank which columns separate groups most, and plot three key ones."],
		"r": [
			[
				1,
				1,
				"Lấy danh sách các cột chữ của tập huấn luyện.",
				"Get the list of text columns in the training set."
			],
			[
				2,
				2,
				"Tạo bảng tạm thêm cột 'fraud' bằng 1 nếu gian lận (Y), 0 nếu không, để lấy trung bình ra tỷ lệ.",
				"Make a temporary table with a 'fraud' column of 1 for fraud (Y) and 0 otherwise, so averages become rates."
			],
			[
				3,
				4,
				"Định nghĩa hàm trả về tỷ lệ gian lận của mỗi nhóm trong một cột, sắp từ cao xuống thấp.",
				"Define a function returning the fraud rate of each group in a column, sorted high to low."
			],
			[
				5,
				5,
				"Tính tỷ lệ gian lận chung làm mốc so sánh.",
				"Compute the overall fraud rate as a benchmark."
			],
			[
				6,
				9,
				"Lặp qua từng cột chữ, ghi nhóm có tỷ lệ cao nhất, tỷ lệ cao nhất, tỷ lệ thấp nhất (lấy giá trị cuối của danh sách đã sắp) và khoảng cách giữa hai đầu.",
				"Loop over each text column, recording the top group, highest rate, lowest rate (the last item of the sorted list) and the gap between the two."
			],
			[
				10,
				10,
				"Gom kết quả thành bảng và sắp theo khoảng cách giảm dần: khoảng cách lớn nghĩa là cột đó phân biệt gian lận tốt.",
				"Put results in a table sorted by gap, largest first: a large gap means the column separates fraud well."
			],
			[
				11,
				11,
				"In tỷ lệ chung và 8 cột có khoảng cách lớn nhất.",
				"Print the overall rate and the 8 columns with the largest gaps."
			],
			[
				12,
				15,
				"Vẽ ba biểu đồ cột (mức độ sự cố, sở thích, kiểu va chạm) với đường đỏ nét đứt là tỷ lệ chung để so từng nhóm với mức trung bình.",
				"Draw three bar charts (incident severity, hobbies, collision type) with a red dashed line at the overall rate to compare groups with the average."
			]
		]
	},
	"5b64963a": {
		"s": ["So sánh các cột số giữa nhóm gian lận và không gian lận bằng biểu đồ hộp và bảng trung bình.", "Compare numeric columns between fraud and non-fraud with box plots and a table of averages."],
		"r": [
			[
				1,
				1,
				"Gắn cột kết quả gian lận vào bảng huấn luyện.",
				"Attach the fraud outcome column to the training table."
			],
			[
				2,
				5,
				"Vẽ 4 biểu đồ hộp (tổng tiền bồi thường, tiền sửa xe, số tháng là khách, phí bảo hiểm năm) theo nhóm gian lận để xem phân bố khác nhau không.",
				"Draw 4 box plots (total claim, vehicle claim, months as customer, annual premium) by fraud group to see if distributions differ."
			],
			[
				6,
				6,
				"In trung bình các khoản bồi thường theo nhóm gian lận, làm tròn đến đơn vị.",
				"Print average claim amounts per fraud group, rounded to whole numbers."
			]
		]
	},
	ba6939b5,
	"2b0e31a7": {
		"s": ["Cân bằng tập huấn luyện bằng cách nhân bản ngẫu nhiên các vụ gian lận cho bằng số vụ bình thường.", "Balance the training set by randomly duplicating fraud cases up to the number of normal ones."],
		"r": [
			[
				1,
				1,
				"Nạp công cụ nhân bản ngẫu nhiên nhóm thiểu số.",
				"Import the random minority over-sampler."
			],
			[
				2,
				2,
				"Tạo bộ cân bằng; random_state=42 cố định phần ngẫu nhiên để lặp lại được.",
				"Create the balancer; random_state=42 fixes the randomness so it is repeatable."
			],
			[
				3,
				3,
				"Áp dụng chỉ lên tập huấn luyện (không đụng tập kiểm tra) và gán lại X_train, y_train.",
				"Apply it to training only (validation untouched) and assign back X_train and y_train."
			],
			[
				4,
				4,
				"In số vụ mỗi lớp và tổng số dòng sau cân bằng.",
				"Print each class count and total rows after balancing."
			]
		]
	},
	b685d500,
	d32e2a3e,
	ddbc54a1,
	b64f0057,
	e3e65d3b,
	"848d66d3": {
		"s": ["Làm tương tự cho tập kiểm tra và ép nó có đúng các cột như tập huấn luyện.", "Do the same for validation and force it to have exactly the training columns."],
		"r": [
			[
				1,
				1,
				"Tạo cột 0/1 cho tập kiểm tra bằng cùng cách.",
				"Create 0/1 columns for validation the same way."
			],
			[
				2,
				2,
				"Ghép với phần số rồi reindex theo cột của tập huấn luyện; cột thiếu được điền 0, cột thừa bị bỏ, để mô hình nhận đúng thứ tự cột.",
				"Join with the numeric part then reindex to training's columns; missing ones are filled with 0 and extras dropped, so the model gets the right column order."
			],
			[
				3,
				3,
				"In kích thước để kiểm tra khớp.",
				"Print the shape to confirm it matches."
			]
		]
	},
	"39d0fe0b": {
		"s": ["Đổi nhãn gian lận Y/N thành 1/0 cho cả hai tập.", "Convert the fraud label Y/N into 1/0 for both sets."],
		"r": [[
			1,
			1,
			"So sánh với 'Y' ra đúng/sai rồi đổi thành 1/0, cho cả train và validation.",
			"Compare with 'Y' to get true/false, then turn it into 1/0, for both train and validation."
		], [
			2,
			2,
			"In trung bình (tỷ lệ gian lận) của mỗi tập; tập huấn luyện sẽ khoảng 0,5 vì đã cân bằng.",
			"Print each set's mean (fraud rate); training should be near 0.5 because it was balanced."
		]]
	},
	"441a104b": {
		"s": ["Chuẩn hoá các cột số về cùng thang đo, học thang từ tập huấn luyện rồi áp cho tập kiểm tra.", "Standardise numeric columns to a common scale, learning it from training and applying it to validation."],
		"r": [
			[
				1,
				1,
				"Nạp StandardScaler, đưa mỗi cột về trung bình 0 và độ lệch chuẩn 1.",
				"Import StandardScaler, which sets each column to mean 0 and standard deviation 1."
			],
			[
				2,
				2,
				"Chọn các cột có hơn 2 giá trị khác nhau, tức bỏ qua cột 0/1.",
				"Pick columns with more than 2 distinct values, skipping the 0/1 columns."
			],
			[
				3,
				3,
				"Tạo bộ chuẩn hoá.",
				"Create the scaler."
			],
			[
				4,
				4,
				"fit_transform học trung bình và độ lệch từ tập huấn luyện rồi áp dụng; tập kiểm tra chỉ dùng transform với số đã học, để không rò rỉ thông tin từ tập kiểm tra.",
				"fit_transform learns mean and spread from training and applies them; validation only uses transform with those learned numbers, so no validation information leaks in."
			],
			[
				5,
				5,
				"In số cột đã chuẩn hoá.",
				"Print how many columns were scaled."
			]
		]
	},
	"84d32236": {
		"s": ["Dùng RFECV để chọn số biến tối ưu cho hồi quy logistic bằng kiểm chứng chéo và xếp hạng các biến.", "Use RFECV to find the best number of variables for logistic regression via cross-validation, and rank the variables."],
		"r": [
			[
				1,
				2,
				"Nạp hồi quy logistic và RFECV (loại dần biến yếu có kiểm chứng chéo).",
				"Import logistic regression and RFECV (step-by-step removal of weak variables with cross-validation)."
			],
			[
				3,
				3,
				"Chạy RFECV: bỏ mỗi lần 1 biến, kiểm chứng chéo 5 phần, đo bằng accuracy, giữ tối thiểu 5 biến; max_iter=2000 cho mô hình đủ vòng lặp để hội tụ.",
				"Run RFECV: remove one variable at a time, 5-fold cross-validation scored by accuracy, keep at least 5 variables; max_iter=2000 lets the model iterate enough to converge."
			],
			[
				4,
				4,
				"In số biến tối ưu.",
				"Print the optimal number of variables."
			],
			[
				5,
				5,
				"Vẽ accuracy kiểm chứng chéo theo số biến để thấy điểm đạt đỉnh.",
				"Plot cross-validated accuracy against number of variables to see where it peaks."
			],
			[
				6,
				7,
				"Lập bảng thứ hạng từng biến (1 là được giữ) và in 12 biến đứng đầu.",
				"Build a ranking table (rank 1 means kept) and print the top 12 variables."
			]
		]
	},
	"8a6f422f": {
		"s": ["Lấy tên các biến mà RFECV giữ lại.", "Get the names of the variables RFECV kept."],
		"r": [[
			1,
			1,
			"Dùng mặt nạ đúng/sai của RFECV để chọn tên cột được giữ, lưu vào col.",
			"Use RFECV's true/false mask to pick the kept column names and store them in col."
		], [
			2,
			2,
			"In số biến và 20 tên đầu.",
			"Print the count and the first 20 names."
		]]
	},
	"85372389": {
		"s": ["Huấn luyện mô hình hồi quy logistic bằng statsmodels trên các biến đã chọn để đọc hệ số và mức ý nghĩa.", "Fit a statsmodels logistic regression on the selected variables to read coefficients and significance."],
		"r": [
			[
				1,
				1,
				"Nạp statsmodels.",
				"Import statsmodels."
			],
			[
				2,
				2,
				"Chỉ lấy cột đã chọn, đổi sang số thực và thêm cột hằng số (hệ số chặn).",
				"Take only the selected columns, convert to floats and add a constant column (the intercept)."
			],
			[
				3,
				3,
				"Huấn luyện GLM họ nhị thức, tức hồi quy logistic cho kết quả 0/1.",
				"Fit a binomial-family GLM, i.e. logistic regression for a 0/1 outcome."
			],
			[
				4,
				4,
				"In bảng hệ số, sai số và p-value; p-value cao cho thấy biến có thể không có ý nghĩa.",
				"Print the table of coefficients, errors and p-values; a high p-value suggests the variable may not matter."
			]
		]
	},
	"666f6000": {
		"s": ["Tính VIF để kiểm tra các biến có trùng thông tin nhau (đa cộng tuyến) không.", "Compute VIF to check whether variables overlap in information (multicollinearity)."],
		"r": [
			[
				1,
				1,
				"Nạp hàm tính VIF.",
				"Import the VIF function."
			],
			[
				2,
				2,
				"Lấy các biến đã chọn dưới dạng số thực.",
				"Take the selected variables as floats."
			],
			[
				3,
				3,
				"Tính VIF cho từng biến rồi sắp giảm dần; VIF lớn nghĩa là biến đó gần như suy ra được từ các biến khác.",
				"Compute VIF per variable and sort descending; a large VIF means the variable can almost be predicted from the others."
			],
			[
				4,
				4,
				"In 8 biến VIF cao nhất.",
				"Print the 8 variables with the highest VIF."
			]
		]
	},
	"59cbed88": {
		"s": ["Dự đoán xác suất gian lận cho tập huấn luyện và gán nhãn 1/0 theo ngưỡng 0,5.", "Predict fraud probabilities on training and label 1/0 using a 0.5 cutoff."],
		"r": [
			[
				1,
				1,
				"Nạp metrics để đánh giá sau này.",
				"Import metrics for evaluation later."
			],
			[
				2,
				2,
				"Lập bảng gồm giá trị thật và xác suất mô hình dự đoán.",
				"Build a table of the actual values and the model's predicted probabilities."
			],
			[
				3,
				3,
				"Xác suất lớn hơn 0,5 thì dự đoán gian lận (1), ngược lại 0.",
				"Probability above 0.5 is predicted as fraud (1), otherwise 0."
			],
			[
				4,
				4,
				"Xem 6 dòng đầu để kiểm tra.",
				"View the first 6 rows to check."
			]
		]
	},
	"326c9405": {
		"s": ["In độ chính xác tổng thể: tỷ lệ dự đoán đúng trên tập huấn luyện.", "Print overall accuracy: the share of correct predictions on training."],
		"r": [[
			1,
			1,
			"So nhãn thật với nhãn dự đoán và in tỷ lệ đúng, làm tròn 4 chữ số.",
			"Compare actual with predicted labels and print the share correct, rounded to 4 decimals."
		]]
	},
	"9c837865": {
		"s": ["Lập ma trận nhầm lẫn để thấy mô hình đoán đúng và sai ở từng loại.", "Build the confusion matrix to see right and wrong predictions per class."],
		"r": [[
			1,
			1,
			"Đếm số dòng theo từng cặp (thật, dự đoán).",
			"Count rows for each (actual, predicted) pair."
		], [
			2,
			2,
			"In thành bảng có nhãn tiếng Việt: hàng là thực tế, cột là dự đoán.",
			"Print it as a labelled table: rows are actual, columns are predicted."
		]]
	},
	"653a4699": {
		"s": ["Tính các chỉ số từ ma trận nhầm lẫn: sensitivity, specificity, precision và F1.", "Compute scores from the confusion matrix: sensitivity, specificity, precision and F1."],
		"r": [
			[
				1,
				1,
				"Tách bốn số: đúng-âm, sai-dương, sai-âm, đúng-dương.",
				"Unpack four counts: true negatives, false positives, false negatives, true positives."
			],
			[
				2,
				4,
				"Định nghĩa hàm: sensitivity là tỷ lệ gian lận thật bị bắt, specificity là tỷ lệ vụ sạch được nhận đúng, precision là tỷ lệ báo gian lận mà đúng, F1 là trung bình hài hoà của precision và recall.",
				"Define a function: sensitivity is the share of real fraud caught, specificity the share of clean cases correctly cleared, precision the share of fraud alerts that were right, F1 the harmonic mean of precision and recall."
			],
			[
				5,
				5,
				"Gọi hàm và in kết quả.",
				"Call the function and print the result."
			]
		]
	},
	"2b06e6ba": {
		"s": ["Vẽ đường ROC và tính AUC để đo khả năng phân biệt gian lận với bình thường ở mọi ngưỡng.", "Plot the ROC curve and compute AUC to measure how well the model separates fraud from normal at every cutoff."],
		"r": [
			[
				1,
				1,
				"Tính tỷ lệ báo nhầm và tỷ lệ bắt đúng ở từng ngưỡng; drop_intermediate=False giữ mọi điểm.",
				"Compute false-positive and true-positive rates at each cutoff; drop_intermediate=False keeps every point."
			],
			[
				2,
				2,
				"Tính AUC, diện tích dưới đường ROC; càng gần 1 càng tốt.",
				"Compute AUC, the area under the ROC curve; closer to 1 is better."
			],
			[
				3,
				3,
				"Vẽ đường ROC kèm đường chéo đứt (đoán mò) để so sánh, thêm chú thích và nhãn trục.",
				"Plot the ROC with a dashed diagonal (random guessing) for comparison, plus legend and axis labels."
			]
		]
	},
	"72f797d1": {
		"s": ["Thử các ngưỡng từ 0 đến 0,9 và đo accuracy, sensitivity, specificity ở mỗi ngưỡng để chọn ngưỡng cân bằng nhất.", "Try cutoffs from 0 to 0.9 and measure accuracy, sensitivity and specificity at each to pick the best balance."],
		"r": [
			[
				1,
				1,
				"Chuẩn bị danh sách rỗng để chứa kết quả.",
				"Prepare an empty list for results."
			],
			[
				2,
				3,
				"Với mỗi ngưỡng, gán nhãn 1 nếu xác suất lớn hơn ngưỡng.",
				"For each cutoff, label 1 where the probability exceeds it."
			],
			[
				4,
				4,
				"Lấy bốn số trong ma trận nhầm lẫn.",
				"Get the four counts from the confusion matrix."
			],
			[
				5,
				5,
				"Ghi ngưỡng cùng accuracy, sensitivity, specificity.",
				"Record the cutoff with accuracy, sensitivity and specificity."
			],
			[
				6,
				6,
				"Gom kết quả thành bảng.",
				"Collect results into a table."
			],
			[
				7,
				7,
				"Vẽ ba chỉ số theo ngưỡng; chỗ các đường gặp nhau là điểm cân bằng.",
				"Plot the three scores against cutoff; where the lines meet is the balance point."
			],
			[
				8,
				8,
				"In bảng số liệu.",
				"Print the table."
			]
		]
	},
	a1be0368,
	"6fcebc88": {
		"s": ["Đánh giá lại với nhãn cuối: ma trận nhầm lẫn và các chỉ số tương ứng.", "Re-evaluate with the final labels: confusion matrix and its scores."],
		"r": [[
			1,
			1,
			"Lập ma trận nhầm lẫn từ nhãn cuối và tách bốn số.",
			"Build the confusion matrix from the final labels and unpack the four counts."
		], [
			2,
			2,
			"In ma trận và các chỉ số sensitivity, specificity, precision, F1 bằng hàm đã định nghĩa trước.",
			"Print the matrix and the sensitivity, specificity, precision and F1 using the function defined earlier."
		]]
	},
	"9ab359a9": {
		"s": ["Vẽ đường precision và recall theo từng ngưỡng cắt xác suất để chọn ngưỡng cân bằng giữa bắt được gian lận và báo nhầm.", "Plot precision and recall against each probability cutoff to pick a sensible balance between catching fraud and false alarms."],
		"r": [
			[
				1,
				1,
				"Nạp hàm tính precision/recall cho mọi ngưỡng có thể.",
				"Import the function that computes precision/recall at every possible cutoff."
			],
			[
				2,
				2,
				"Tính precision (đoán gian lận thì đúng bao nhiêu) và recall (bắt được bao nhiêu ca gian lận thật) ứng với từng ngưỡng t, dựa trên nhãn thật và xác suất mô hình dự đoán trên tập train.",
				"Compute precision (how often a fraud call is right) and recall (how many real frauds are caught) at each cutoff t, from true labels and predicted probabilities on the training set."
			],
			[
				3,
				3,
				"Vẽ hai đường trên cùng một biểu đồ, bỏ giá trị cuối vì nó không có ngưỡng đi kèm; chỗ hai đường cắt nhau gợi ý ngưỡng cân bằng.",
				"Draw both curves on one chart (the last value is dropped because it has no cutoff); where they cross suggests a balanced cutoff."
			]
		]
	},
	"1d936b77": {
		"s": ["Huấn luyện mô hình rừng ngẫu nhiên (nhiều cây quyết định bỏ phiếu) làm mô hình thứ hai để dự đoán gian lận.", "Train a random forest (many decision trees voting) as a second model for predicting fraud."],
		"r": [
			[
				1,
				3,
				"Nạp rừng ngẫu nhiên, báo cáo phân loại, và công cụ kiểm tra chéo/dò tham số dùng ở các bước sau.",
				"Import the random forest, the classification report, and the cross-validation / tuning tools used later."
			],
			[
				4,
				4,
				"Tạo rừng 100 cây và học trên dữ liệu train; random_state=42 giúp kết quả lặp lại y hệt mỗi lần chạy.",
				"Build a forest of 100 trees and fit it on the training data; random_state=42 makes the result repeatable."
			],
			[
				5,
				5,
				"In ra số cây để xác nhận mô hình đã huấn luyện xong.",
				"Print the number of trees to confirm training finished."
			]
		]
	},
	"6c4c5d7e": {
		"s": ["Xếp hạng biến theo mức đóng góp của rừng ngẫu nhiên và giữ lại những biến quan trọng hơn mức trung bình để mô hình gọn hơn.", "Rank variables by how much the forest relies on them and keep those above average to simplify the model."],
		"r": [
			[
				1,
				1,
				"Gom mức quan trọng của từng biến thành một bảng, sắp từ cao xuống thấp.",
				"Collect each variable's importance into a series, sorted high to low."
			],
			[
				2,
				2,
				"Vẽ 12 biến quan trọng nhất dạng thanh ngang (đảo thứ tự để biến mạnh nhất nằm trên cùng).",
				"Plot the top 12 as horizontal bars (order reversed so the strongest sits on top)."
			],
			[
				3,
				3,
				"Chọn các biến có mức quan trọng lớn hơn mức trung bình; điều kiện này giữ lại những dòng đúng.",
				"Select variables whose importance exceeds the average; the condition keeps only the true ones."
			],
			[
				4,
				4,
				"In số biến được chọn và 10 biến đứng đầu (làm tròn 3 số lẻ).",
				"Print how many variables were kept and the top 10 (rounded to 3 decimals)."
			]
		]
	},
	f5d9c075,
	"76aeff8f": {
		"s": ["Dự đoán trên chính tập train và đo accuracy (tỷ lệ đoán đúng) để biết mô hình học tốt đến đâu.", "Predict on the training set and measure accuracy (share correct) to see how well the model learned."],
		"r": [[
			1,
			1,
			"Cho mô hình dự đoán nhãn gian lận/sạch cho các hồ sơ train.",
			"Have the model predict fraud/clean labels for the training claims."
		], [
			2,
			2,
			"So với nhãn thật rồi in tỷ lệ đoán đúng; con số quá cao có thể là dấu hiệu học vẹt, cần so với tập validation.",
			"Compare with true labels and print the share correct; a very high value may mean memorising, so it needs checking against validation."
		]]
	},
	ccd2d2eb,
	b154c4bc,
	"19fcbca4": {
		"s": ["Kiểm tra chéo 5 lần để đo accuracy ổn định hơn một lần chia train/test duy nhất.", "Run 5-fold cross-validation to get a steadier accuracy estimate than a single split."],
		"r": [[
			1,
			1,
			"Chia dữ liệu train thành 5 phần, lần lượt giữ 1 phần để thử và học trên 4 phần còn lại, ghi accuracy từng lần.",
			"Split the training data into 5 parts, each time testing on one and training on the other four, recording accuracy."
		], [
			2,
			2,
			"In accuracy 5 lần và giá trị trung bình; nếu các lần gần nhau thì mô hình ổn định.",
			"Print the 5 scores and their mean; similar scores mean a stable model."
		]]
	},
	"44e46d66": {
		"s": ["Dò tham số tốt nhất cho rừng ngẫu nhiên bằng cách thử mọi tổ hợp và chấm điểm bằng kiểm tra chéo.", "Tune the random forest by trying every parameter combination and scoring each with cross-validation."],
		"r": [[
			1,
			1,
			"Thử mọi tổ hợp số cây (100/200), độ sâu tối đa (5/10/không giới hạn) và số mẫu tối thiểu mỗi lá (1/5/10), mỗi tổ hợp kiểm tra chéo 5 lần theo accuracy; n_jobs=-1 dùng mọi lõi CPU cho nhanh.",
			"Try every combination of tree count, maximum depth and minimum samples per leaf, cross-validating each 5 times on accuracy; n_jobs=-1 uses all CPU cores."
		], [
			2,
			2,
			"In bộ tham số tốt nhất và accuracy kiểm tra chéo tương ứng.",
			"Print the best parameter set and its cross-validated accuracy."
		]]
	},
	eeec5a33,
	"4a47e3e1": {
		"s": ["Đo accuracy của mô hình đã dò tham số trên tập train.", "Measure the tuned model's accuracy on the training set."],
		"r": [[
			1,
			1,
			"Dự đoán trên tập train rồi in tỷ lệ đoán đúng.",
			"Predict on the training set and print the share correct."
		]]
	},
	"110068f2": {
		"s": ["Lập ma trận nhầm lẫn của mô hình đã dò tham số trên tập train.", "Build the confusion matrix of the tuned model on the training set."],
		"r": [[
			1,
			1,
			"Đếm số hồ sơ theo cặp (thực tế, dự đoán).",
			"Count claims by (actual, predicted) pair."
		], [
			2,
			2,
			"In bảng với nhãn tiếng Việt sạch/gian lận.",
			"Print the table with clean/fraud labels."
		]]
	},
	a9855f5f,
	"6dcca031": {
		"s": ["Áp mô hình hồi quy logistic đã xây lên tập validation (dữ liệu chưa thấy) để lấy xác suất gian lận và nhãn dự đoán.", "Apply the fitted logistic regression to the validation set (unseen data) to get fraud probabilities and predicted labels."],
		"r": [
			[
				1,
				1,
				"Chọn đúng các cột mô hình dùng, chuyển sang số thực và thêm cột hằng số (intercept) để khớp với cách mô hình được huấn luyện.",
				"Pick the model's columns, convert to float and add the constant column so it matches how the model was trained."
			],
			[
				2,
				2,
				"Tạo bảng gồm nhãn gian lận thật và xác suất mô hình dự đoán cho từng hồ sơ validation.",
				"Build a table of true fraud labels and the model's predicted probability per validation claim."
			],
			[
				3,
				3,
				"Gán nhãn 1 (gian lận) khi xác suất lớn hơn ngưỡng cutoff đã chọn từ tập train, ngược lại 0.",
				"Label 1 (fraud) when the probability exceeds the cutoff chosen on the training set, otherwise 0."
			],
			[
				4,
				4,
				"Xem thử 6 dòng đầu.",
				"Preview the first 6 rows."
			]
		]
	},
	"5833e791": {
		"s": ["So accuracy của hồi quy logistic giữa validation và train để phát hiện overfitting.", "Compare logistic regression accuracy on validation vs train to spot overfitting."],
		"r": [[
			1,
			1,
			"In tỷ lệ đoán đúng trên validation cạnh train; hai số gần nhau nghĩa là mô hình tổng quát hoá tốt.",
			"Print validation accuracy beside train; close values mean the model generalises well."
		]]
	},
	"51955bbd": {
		"s": ["Lập ma trận nhầm lẫn của hồi quy logistic trên tập validation.", "Build the logistic regression confusion matrix on the validation set."],
		"r": [[
			1,
			1,
			"Đếm số hồ sơ validation theo cặp (thực tế, dự đoán).",
			"Count validation claims by (actual, predicted) pair."
		], [
			2,
			2,
			"In bảng với nhãn tiếng Việt sạch/gian lận.",
			"Print the table with clean/fraud labels."
		]]
	},
	dcbbf610,
	c2db0d01,
	faa1317d,
	af2b00dc,
	e1764753,
	cbe6f8ac,
	"33819a23": {
		"s": ["Liệt kê danh sách bang không trùng lặp, xếp theo bảng chữ cái.", "List each state once, in alphabetical order."],
		"r": [[
			1,
			1,
			"Lấy tên bang, DISTINCT loại bỏ lặp (mỗi bang có rất nhiều dòng), rồi xếp A-Z cho dễ đọc.",
			"Select state names, DISTINCT removes repeats (each state has many rows), then sort A-Z for readability."
		]]
	},
	ce7ab558,
	"87f38332": {
		"s": ["Xem thử 10 bản ghi của năm 2020 (đề bài chỉ yêu cầu lọc theo năm).", "Peek at 10 records from 2020 (the task is just filtering by year)."],
		"r": [[
			1,
			1,
			"Chọn vài cột chính, chỉ giữ dòng có năm 2020 (điều kiện đúng thì giữ) và giới hạn 10 dòng để khỏi in cả bảng lớn.",
			"Pick a few key columns, keep only rows where the year is 2020 (rows where the condition is true), and limit to 10 rows so the big table is not fully printed."
		]]
	},
	"77829c84": {
		"s": ["Lọc các dòng ở Himachal Pradesh có dân số nông thôn trên 1 triệu.", "Filter Himachal Pradesh rows with rural population above 1 million."],
		"r": [[
			1,
			2,
			"Chọn các cột nhận diện và dân số nông thôn từ bảng dữ liệu.",
			"Select the identifying columns and rural population from the table."
		], [
			3,
			3,
			"Chỉ giữ dòng thoả cả hai điều kiện: dân số nông thôn trên 1.000.000 và đúng bang HIMACHAL PRADESH (AND đòi hỏi cả hai cùng đúng).",
			"Keep only rows meeting both conditions: rural population above 1,000,000 and state HIMACHAL PRADESH (AND needs both true)."
		]]
	},
	a813ed0b,
	a366e11c,
	"924c90f5": {
		"s": ["Tính diện tích được bảo hiểm trung bình cho mỗi năm để xem xu hướng theo thời gian.", "Compute average insured land area per year to see the trend over time."],
		"r": [[
			1,
			2,
			"Lấy năm và diện tích bảo hiểm trung bình từ bảng dữ liệu.",
			"Select the year and the average insured area from the table."
		], [
			3,
			4,
			"Gom theo năm rồi xếp theo thứ tự năm.",
			"Group by year and order by year."
		]]
	},
	"2629451e": {
		"s": ["Tổng số nông dân theo huyện, bỏ các dòng không có đơn vị bảo hiểm.", "Total farmers per district, ignoring rows with no insurance units."],
		"r": [
			[
				1,
				2,
				"Cộng số nông dân theo huyện từ bảng dữ liệu.",
				"Sum farmers per district from the table."
			],
			[
				3,
				3,
				"Chỉ giữ dòng có số đơn vị bảo hiểm lớn hơn 0.",
				"Keep only rows with insurance units above 0."
			],
			[
				4,
				5,
				"Gom theo huyện và xếp huyện nhiều nông dân nhất lên đầu.",
				"Group by district and put the one with most farmers first."
			]
		]
	},
	"7f6ac4c5": {
		"s": ["Tổng hợp các loại phí và số nông dân theo bang, chỉ cho các dòng có số tiền bảo hiểm trên 500.000 INR.", "Total premium types and farmers per state, only for rows with sum insured above 500,000 INR."],
		"r": [
			[
				1,
				3,
				"Cộng phí nông dân, phí của bang, phí của chính phủ và số nông dân theo từng bang.",
				"Sum farmer, state and government premiums and the farmer count per state."
			],
			[
				4,
				4,
				"Lấy từ bảng dữ liệu bảo hiểm.",
				"Read from the insurance table."
			],
			[
				5,
				5,
				"Lọc SumInsured > 5 vì dữ liệu tính theo đơn vị lakh (1 lakh = 100.000), nên 500.000 INR chính là 5 lakh; quên đổi đơn vị sẽ ra kết quả sai.",
				"Filter SumInsured > 5 because data is stored in lakh (1 lakh = 100,000), so 500,000 INR equals 5 lakh; forgetting the scale would give wrong results."
			],
			[
				6,
				7,
				"Gom theo bang và xếp bang nhiều nông dân nhất lên đầu.",
				"Group by state and put the state with most farmers first."
			]
		]
	},
	"98689652": {
		"s": ["Tìm 5 huyện đông dân nhất năm 2020.", "Find the 5 most populous districts in 2020."],
		"r": [
			[
				1,
				2,
				"Lấy tên huyện và dân số từ bảng dữ liệu.",
				"Select district name and population from the table."
			],
			[
				3,
				3,
				"Chỉ giữ năm 2020.",
				"Keep only 2020."
			],
			[
				4,
				5,
				"Xếp dân số giảm dần rồi cắt lấy 5 dòng đầu.",
				"Sort population descending and cut to the first 5 rows."
			]
		]
	},
	"960b1c0a": {
		"s": ["Lấy 10 huyện có phí nông dân thấp nhất nhưng lớn hơn 0.", "Get the 10 districts with the lowest farmer premium above zero."],
		"r": [
			[
				1,
				2,
				"Chọn bang, huyện, số tiền bảo hiểm và phí nông dân.",
				"Select state, district, sum insured and farmer premium."
			],
			[
				3,
				3,
				"Loại các dòng phí bằng 0 vì chúng làm sai lệch việc tìm mức thấp nhất.",
				"Drop rows with zero premium since they would distort the 'lowest' search."
			],
			[
				4,
				5,
				"Xếp phí tăng dần rồi tới số tiền bảo hiểm tăng dần, lấy 10 dòng đầu.",
				"Sort by premium ascending then sum insured ascending and take the first 10."
			]
		]
	},
	d63fd863,
	f647afa7,
	"37a8e947": {
		"s": ["Lấy danh sách huyện có tên bắt đầu bằng chữ B.", "List districts whose names start with B."],
		"r": [[
			1,
			1,
			"Lọc bằng LIKE 'B%' (% là bất kỳ ký tự nào theo sau), bỏ trùng và xếp A-Z.",
			"Filter with LIKE 'B%' (% means anything after), remove duplicates and sort A-Z."
		]]
	},
	"66cd6fae": {
		"s": ["Lấy các huyện có tên kết thúc bằng 'pur' kèm bang của chúng.", "List districts whose names end in 'pur' with their states."],
		"r": [[
			1,
			1,
			"LIKE '%pur' khớp mọi tên kết thúc bằng pur (% đứng trước nghĩa là bất kỳ ký tự nào phía trước); bỏ trùng và xếp theo bang rồi huyện.",
			"LIKE '%pur' matches any name ending in pur (the leading % means anything before); remove duplicates and sort by state then district."
		]]
	},
	fd689f19,
	"6c5b6e7c": {
		"s": ["Gắn mức phí nông dân cao nhất của mỗi huyện vào từng dòng và chỉ giữ huyện có mức đó vượt 20 crore.", "Attach each district's highest farmer premium to its rows, keeping districts whose peak exceeds 20 crore."],
		"r": [
			[
				1,
				2,
				"Chọn bang, huyện, năm, dân số của bảng gốc cùng cột mức phí cao nhất lấy từ truy vấn con m.",
				"Select state, district, year, population from the main table plus the peak premium from subquery m."
			],
			[
				3,
				5,
				"Truy vấn con m tìm phí lớn nhất của mỗi huyện qua các năm và HAVING chỉ giữ huyện vượt 2000 lakh (= 20 crore); đổi đơn vị vì dữ liệu tính theo lakh.",
				"Subquery m finds each district's maximum premium over years and HAVING keeps those above 2000 lakh (= 20 crore); the conversion is needed because data is in lakh."
			],
			[
				6,
				6,
				"Nối với bảng gốc theo bang và huyện.",
				"Join back to the main table on state and district."
			],
			[
				7,
				7,
				"Xếp theo mức phí cao nhất giảm dần.",
				"Sort by peak premium, descending."
			]
		]
	},
	ee7abb8f,
	c9525132,
	"4b543019": {
		"s": ["Tìm bang có số tiền bảo hiểm vượt số tiền bảo hiểm của dòng có phí nông dân cao nhất.", "Find states whose sum insured exceeds that of the row with the highest farmer premium."],
		"r": [[
			1,
			2,
			"Lấy tên bang không lặp từ bảng dữ liệu.",
			"Select distinct state names from the table."
		], [
			3,
			3,
			"Truy vấn con xếp theo phí nông dân giảm dần, lấy dòng đầu và trả về số tiền bảo hiểm của nó làm mốc so sánh. Lưu ý đây là một dòng bản ghi chứ không phải tổng cả huyện.",
			"The subquery sorts by farmer premium descending, takes the first row and returns its sum insured as the benchmark. Note it is one record, not a whole-district total."
		]]
	},
	"2373c806": {
		"s": ["Tìm huyện có phí nông dân cao hơn phí trung bình của bang đông dân nhất.", "Find districts whose farmer premium exceeds the average of the most populous state."],
		"r": [
			[
				1,
				2,
				"Lấy tên huyện không lặp từ bảng dữ liệu.",
				"Select distinct district names from the table."
			],
			[
				3,
				4,
				"Giữ dòng có phí nông dân lớn hơn mức trung bình tính ở truy vấn con.",
				"Keep rows whose premium is above the average computed in the subquery."
			],
			[
				5,
				6,
				"Mức trung bình chỉ tính trong bang đông dân nhất, được tìm bằng truy vấn con lồng bên trong: gom theo bang, xếp tổng dân số giảm dần, lấy bang đầu.",
				"The average is taken only within the most populous state, found by a nested subquery: group by state, sort total population descending, take the first."
			],
			[
				7,
				7,
				"Xếp tên huyện A-Z.",
				"Sort district names A-Z."
			]
		]
	},
	"236f5390": {
		"s": ["Đánh số thứ tự các bản ghi theo số nông dân giảm dần bằng ROW_NUMBER().", "Number records by farmers covered, descending, with ROW_NUMBER()."],
		"r": [
			[
				1,
				2,
				"Chọn bang, huyện, số nông dân và thêm cột số thứ tự; ROW_NUMBER() OVER (ORDER BY ...) đánh 1, 2, 3... theo số nông dân giảm dần, không có hai dòng trùng số.",
				"Select state, district, farmers and add a sequence column; ROW_NUMBER() OVER (ORDER BY ...) numbers 1, 2, 3... by farmers descending with no ties."
			],
			[
				3,
				3,
				"Từ bảng dữ liệu.",
				"From the data table."
			],
			[
				4,
				4,
				"Giới hạn 10 dòng để xem thử.",
				"Limit to 10 rows for a preview."
			]
		]
	},
	"31563bdd": {
		"s": ["Xếp hạng huyện theo số tiền bảo hiểm trong từng bang bằng RANK().", "Rank districts by sum insured within each state using RANK()."],
		"r": [
			[
				1,
				2,
				"PARTITION BY srcStateName chia riêng từng bang, mỗi bang xếp hạng lại từ 1 theo số tiền bảo hiểm giảm dần; RANK cho cùng hạng khi bằng nhau.",
				"PARTITION BY srcStateName splits by state so each state is ranked from 1 by sum insured descending; RANK gives equal values the same rank."
			],
			[
				3,
				3,
				"Từ bảng dữ liệu.",
				"From the data table."
			],
			[
				4,
				5,
				"Xếp theo bang rồi hạng, giới hạn 12 dòng để xem thử.",
				"Order by state then rank, limited to 12 rows for a preview."
			]
		]
	},
	"914acea5": {
		"s": ["Tính phí nông dân cộng dồn qua các năm cho từng huyện.", "Compute a running total of farmer premium over years per district."],
		"r": [
			[
				1,
				2,
				"SUM() OVER với PARTITION BY bang-huyện và ORDER BY năm cho ra tổng cộng dồn: mỗi dòng bằng tổng các năm từ đầu đến năm đó của cùng huyện.",
				"SUM() OVER with PARTITION BY state-district and ORDER BY year gives a running total: each row equals the sum of that district's years up to this one."
			],
			[
				3,
				3,
				"Từ bảng dữ liệu.",
				"From the data table."
			],
			[
				4,
				5,
				"Xếp theo bang, huyện, năm cho dễ đọc, giới hạn 12 dòng.",
				"Order by state, district and year for readability, limited to 12 rows."
			]
		]
	},
	bac7bb1d,
	"9d8741d9": {
		"s": ["Thêm khoá ngoại để mã bang trong districts bắt buộc phải tồn tại trong states.", "Add a foreign key so every state code in districts must exist in states."],
		"r": [[
			2,
			3,
			"Sửa bảng districts, thêm ràng buộc đặt tên fk_districts_state: StateCode tham chiếu tới StateCode của states, nhờ đó không thể có huyện thuộc bang không tồn tại. Cú pháp này dành cho MySQL.",
			"Alter districts to add a constraint named fk_districts_state: StateCode refers to states.StateCode, so a district cannot belong to a non-existent state. This syntax is for MySQL."
		]]
	},
	"91dc2cde": {
		"s": ["Sửa phí nông dân của một bản ghi cụ thể thành 500.0.", "Change one specific record's farmer premium to 500.0."],
		"r": [[
			1,
			1,
			"UPDATE đổi giá trị cột phí; WHERE rowID = 1 giới hạn chỉ đúng một dòng, nếu thiếu WHERE thì mọi dòng sẽ bị đổi.",
			"UPDATE changes the premium column; WHERE rowID = 1 limits it to one row, and without WHERE every row would change."
		]]
	},
	"248f84d2": {
		"s": ["Đổi năm thành 2021 cho mọi dòng của bang Himachal Pradesh.", "Set the year to 2021 for all Himachal Pradesh rows."],
		"r": [[
			1,
			1,
			"UPDATE gán năm 2021 chỉ cho các dòng mà bang là HIMACHAL PRADESH; thiếu WHERE sẽ sửa cả bảng.",
			"UPDATE sets year 2021 only for rows where the state is HIMACHAL PRADESH; without WHERE the whole table would change."
		]]
	},
	"1edbb212": {
		"s": ["Xoá các bản ghi năm 2020 có dưới 10.000 nông dân được bảo hiểm.", "Delete 2020 records with fewer than 10,000 farmers covered."],
		"r": [[
			1,
			1,
			"DELETE xoá vĩnh viễn những dòng thoả cả hai điều kiện (dưới 10.000 nông dân và năm 2020); luôn kiểm tra WHERE trước vì xoá không hoàn tác được.",
			"DELETE permanently removes rows meeting both conditions (under 10,000 farmers and year 2020); always check WHERE first since deletion cannot be undone."
		]]
	},
	b20b7aec,
	"4d4bb6d6": {
		"s": ["Kiểm tra chất lượng dữ liệu (ô trống, trùng, logic huỷ/hoàn thành) rồi tạo cột giờ và khung giờ trong ngày.", "Run data-quality checks (blanks, duplicates, cancel/complete logic), then create hour and time-of-day columns."],
		"r": [
			[
				1,
				1,
				"Đếm ô trống và dòng trùng ở từng bảng gốc.",
				"Count blank cells and duplicate rows in each source table."
			],
			[
				2,
				2,
				"Kiểm tra mã chuyến là duy nhất và mọi chuyến trong Trips đều có trong Trip_Details, tức khoá nối đáng tin.",
				"Check trip ids are unique and every trip in Trips exists in Trip_Details, so the join key is reliable."
			],
			[
				3,
				3,
				"Đối chiếu số chuyến hoàn thành với số dòng của Trips; hai số phải bằng nhau.",
				"Compare completed trips with the row count of Trips; they should match."
			],
			[
				5,
				5,
				"Lọc riêng các chuyến hoàn thành để kiểm tra logic.",
				"Filter completed trips to test the logic."
			],
			[
				6,
				6,
				"Đếm chuyến hoàn thành nhưng vẫn bị ghi là khách huỷ hay tài xế huỷ, đó sẽ là mâu thuẫn dữ liệu.",
				"Count completed trips still flagged as cancelled by customer or driver, which would be a data contradiction."
			],
			[
				7,
				7,
				"Chuyến chưa hoàn thành mà vẫn có tiền cước cũng là điều bất thường, nên đếm thử.",
				"A fare on an unfinished trip would also be odd, so count them."
			],
			[
				8,
				8,
				"Đếm số chuyến có khu xuất phát là nhóm 'Other Assemblies' (khu gộp chung).",
				"Count trips whose pickup zone is the catch-all 'Other Assemblies'."
			],
			[
				9,
				9,
				"Mã khung giờ chạy từ 1 nên trừ 1 để có giờ thực 0-23.",
				"The hour-slot code starts at 1, so subtract 1 to get the real hour 0-23."
			],
			[
				10,
				10,
				"Chia giờ thành 4 khung (đêm, sáng, chiều, tối) bằng các mốc cắt; ví dụ -1 đến 5 là 0-6h.",
				"Cut hours into 4 periods (night, morning, afternoon, evening) with bin edges; for example -1 to 5 means 0-6h."
			],
			[
				11,
				11,
				"Đếm chuyến hoàn thành theo khung giờ, xếp theo thứ tự khung.",
				"Count completed trips per period in period order."
			]
		]
	},
	ba7cd28a,
	"85154f37": {
		"s": ["Xem nhu cầu theo giờ: số chuyến hoàn thành mỗi giờ, giờ đông nhất và vắng nhất.", "Look at demand by hour: completed trips per hour, the busiest and quietest hours."],
		"r": [
			[
				1,
				1,
				"Lấy riêng các chuyến hoàn thành.",
				"Take only completed trips."
			],
			[
				2,
				2,
				"Đếm số chuyến theo từng giờ.",
				"Count trips for each hour."
			],
			[
				3,
				3,
				"Tạo khung có hai biểu đồ cạnh nhau.",
				"Create a canvas with two charts side by side."
			],
			[
				4,
				4,
				"Vẽ cột số chuyến theo giờ.",
				"Draw bars of trips per hour."
			],
			[
				5,
				5,
				"Vẽ biểu đồ thứ hai theo mã giờ gốc từ bảng Trips, đủ 24 mã (reindex bổ sung mã thiếu) để đối chiếu với biểu đồ đầu.",
				"Draw the second chart by the original hour code from Trips, covering all 24 codes (reindex fills missing ones) to cross-check the first."
			],
			[
				6,
				6,
				"Căn chỉnh khoảng cách để các biểu đồ không đè nhau.",
				"Adjust spacing so the charts do not overlap."
			],
			[
				7,
				7,
				"In 3 giờ đông nhất.",
				"Print the 3 busiest hours."
			],
			[
				8,
				8,
				"In giờ vắng nhất và số chuyến của giờ đó.",
				"Print the quietest hour and its trip count."
			]
		]
	},
	"7a8d7233": {
		"s": ["Tính tỷ trọng doanh thu của từng khung giờ để biết khung nào mang lại nhiều tiền nhất.", "Compute each period's revenue share to see which part of the day earns the most."],
		"r": [
			[
				1,
				1,
				"Cộng tiền cước theo khung giờ (observed=True chỉ giữ khung có dữ liệu).",
				"Sum fares per period (observed=True keeps only periods that have data)."
			],
			[
				2,
				2,
				"Đổi sang phần trăm trên tổng doanh thu.",
				"Convert to percent of total revenue."
			],
			[
				3,
				3,
				"In bảng gồm doanh thu và phần trăm.",
				"Print a table of revenue and percent."
			],
			[
				4,
				4,
				"Vẽ biểu đồ tròn có ghi phần trăm.",
				"Draw a pie chart labelled with percentages."
			]
		]
	},
	"56828723": {
		"s": ["Kiểm tra giờ có liên quan đến tiền cước và doanh thu không, và giờ nào kiếm nhiều nhất.", "Check whether hour relates to fare and revenue, and which hours earn the most."],
		"r": [
			[
				1,
				1,
				"Với mỗi giờ tính tổng, trung bình và số chuyến của tiền cước.",
				"For each hour compute the total, mean and count of fare."
			],
			[
				2,
				2,
				"Tương quan giữa giờ và tiền cước từng chuyến (gần 0 nghĩa là gần như không liên quan).",
				"Correlation between hour and per-trip fare (near 0 means almost unrelated)."
			],
			[
				3,
				3,
				"Tương quan giữa giờ và tổng doanh thu theo giờ.",
				"Correlation between hour and hourly total revenue."
			],
			[
				4,
				4,
				"Tạo hai biểu đồ cạnh nhau.",
				"Create two charts side by side."
			],
			[
				5,
				5,
				"Vẽ đường tổng doanh thu và đường fare trung bình theo giờ.",
				"Draw lines for total revenue and mean fare by hour."
			],
			[
				6,
				6,
				"In 4 giờ có doanh thu cao nhất.",
				"Print the 4 highest-revenue hours."
			]
		]
	},
	"26bd0319": {
		"s": ["Phân tích hình thức thanh toán: tỷ lệ chung và sự khác biệt theo khung giờ.", "Analyse payment methods: overall mix and how it differs by time of day."],
		"r": [
			[
				1,
				1,
				"Đếm số chuyến hoàn thành theo hình thức thanh toán.",
				"Count completed trips by payment method."
			],
			[
				2,
				2,
				"In phần trăm từng hình thức.",
				"Print the percent for each method."
			],
			[
				3,
				3,
				"Tạo hai biểu đồ cạnh nhau.",
				"Create two charts side by side."
			],
			[
				4,
				4,
				"Vẽ cột số chuyến theo hình thức thanh toán.",
				"Draw bars of trips by payment method."
			],
			[
				5,
				5,
				"Lập bảng chéo khung giờ và hình thức thanh toán rồi vẽ cột chồng để thấy cơ cấu thanh toán mỗi khung.",
				"Cross-tabulate period by payment method and draw stacked bars to see the payment mix per period."
			],
			[
				6,
				6,
				"Căn chỉnh khoảng cách biểu đồ.",
				"Adjust chart spacing."
			]
		]
	},
	"25ce9629": {
		"s": ["Tìm 10 khu có nhiều yêu cầu đặt xe nhất (tính cả chuyến chưa hoàn thành).", "Find the 10 zones with the most ride requests (including unfinished trips)."],
		"r": [
			[
				1,
				1,
				"Đếm yêu cầu theo khu xuất phát trong bảng chi tiết chuyến, ghép tên khu từ bảng khu vực và xếp giảm dần.",
				"Count requests per pickup zone in trip details, attach zone names from the zone table and sort descending."
			],
			[
				2,
				2,
				"Vẽ thanh ngang 10 khu đầu (đảo thứ tự để khu nhiều nhất nằm trên).",
				"Plot the top 10 zones as horizontal bars (order reversed so the largest is on top)."
			],
			[
				3,
				3,
				"In 8 khu đầu dạng bảng.",
				"Print the top 8 zones as a table."
			]
		]
	},
	aa73d8db,
	"26cd750c": {
		"s": ["Lập bản đồ nhiệt số chuyến theo khu và khung giờ để thấy nơi nào đông vào lúc nào.", "Build a heatmap of trips by zone and period to see where and when demand peaks."],
		"r": [
			[
				1,
				1,
				"Bảng chéo khu đón và khung giờ đếm số chuyến, ô không có chuyến điền 0.",
				"Cross table of pickup zone by period counting trips, filling empty cells with 0."
			],
			[
				2,
				2,
				"Chọn 12 khu có tổng chuyến nhiều nhất.",
				"Pick the 12 zones with most trips overall."
			],
			[
				3,
				3,
				"Vẽ bản đồ nhiệt có số liệu trong ô, màu càng đậm càng đông.",
				"Draw a heatmap with numbers in cells; darker means busier."
			],
			[
				4,
				4,
				"In bảng số liệu của 6 khu đầu.",
				"Print the numbers for the top 6 zones."
			]
		]
	},
	c8745a47,
	"77e7b828": {
		"s": ["Tính tỷ lệ yêu cầu bị khách huỷ, tài xế huỷ và hoàn thành.", "Compute the share of requests cancelled by customers, by drivers, and completed."],
		"r": [
			[
				1,
				1,
				"Lấy tổng số yêu cầu làm mẫu số.",
				"Take the total number of requests as the denominator."
			],
			[
				2,
				2,
				"Đếm yêu cầu khách huỷ, tài xế huỷ (cờ not_cancelled bằng 0) và số hoàn thành.",
				"Count customer-cancelled, driver-cancelled (flag not_cancelled equal to 0) and completed requests."
			],
			[
				3,
				3,
				"Đổi sang phần trăm trên tổng và làm tròn.",
				"Convert to percent of total and round."
			],
			[
				4,
				4,
				"In kết quả kèm tổng số yêu cầu.",
				"Print the result with the total requests."
			],
			[
				5,
				5,
				"Vẽ cột ba nhóm với màu riêng (đỏ gạch, vàng, xanh lục).",
				"Draw three bars with their own colours (brick red, amber, green)."
			]
		]
	},
	"2ae61554": {
		"s": ["Đo tỷ lệ hoàn thành của những yêu cầu có tìm báo giá, và chia theo khu vì chuyến huỷ không có giờ.", "Measure the completion rate of requests that asked for quotes, split by zone because cancelled trips have no hour."],
		"r": [
			[
				1,
				1,
				"Lọc các yêu cầu có tìm báo giá.",
				"Filter requests that asked for quotes."
			],
			[
				2,
				2,
				"In số lượng, số hoàn thành và tỷ lệ hoàn thành.",
				"Print the count, completed count and completion rate."
			],
			[
				3,
				3,
				"Ghi chú giới hạn: giờ chỉ có ở chuyến hoàn thành nên không thể chia chuyến huỷ theo khung giờ.",
				"Note the limit: hour exists only for completed trips so cancelled ones cannot be split by period."
			],
			[
				5,
				5,
				"Thay vào đó tính tỷ lệ hoàn thành theo khu xuất phát (trung bình của cờ 0/1 nhân 100), ghép tên khu và sắp tăng dần.",
				"Instead compute completion rate per pickup zone (mean of the 0/1 flag times 100), attach zone names and sort ascending."
			],
			[
				6,
				6,
				"In 3 khu cao nhất và 3 khu thấp nhất.",
				"Print the 3 highest and 3 lowest zones."
			],
			[
				7,
				7,
				"Tạo hai biểu đồ cạnh nhau.",
				"Create two charts side by side."
			],
			[
				8,
				8,
				"Vẽ cột so sánh số yêu cầu tìm báo giá với số hoàn thành.",
				"Draw bars comparing quote requests with completions."
			],
			[
				9,
				9,
				"Vẽ histogram phân bố tỷ lệ hoàn thành giữa các khu.",
				"Draw a histogram of completion rates across zones."
			],
			[
				10,
				10,
				"Căn chỉnh khoảng cách biểu đồ.",
				"Adjust chart spacing."
			]
		]
	},
	"07ff7786": {
		"s": ["Soi chi tiết một khu được chọn: số chuyến, doanh thu và cước trung bình theo khung giờ.", "Drill into one chosen zone: trips, revenue and average fare by period."],
		"r": [
			[
				1,
				1,
				"Đặt khu cần xem là Hebbal, đổi tên này là xem khu khác.",
				"Set the zone to Hebbal; change the name to inspect another zone."
			],
			[
				2,
				2,
				"Lọc các chuyến hoàn thành xuất phát từ khu đó.",
				"Filter completed trips starting in that zone."
			],
			[
				3,
				3,
				"In số chuyến, tổng doanh thu và cước trung bình của khu.",
				"Print the zone's trips, total revenue and mean fare."
			],
			[
				4,
				4,
				"Vẽ cột số chuyến và doanh thu theo khung giờ.",
				"Plot trips and revenue by period as bars."
			],
			[
				5,
				5,
				"In bảng số liệu tương ứng.",
				"Print the matching table."
			]
		]
	},
	"4f9ac425": {
		"s": ["Dựng phễu chuyển đổi từ tìm kiếm đến hoàn thành chuyến để thấy khách rơi rụng ở bước nào.", "Build a conversion funnel from search to completed ride to see where customers drop off."],
		"r": [
			[
				1,
				1,
				"Cộng các cờ ở từng bước: tìm kiếm, có ước tính, tìm báo giá, có báo giá, nhập OTP, hoàn thành.",
				"Sum the flags at each step: searches, estimates, quote searches, quotes, OTP entered, completed."
			],
			[
				2,
				2,
				"In mỗi bước dưới dạng phần trăm so với số tìm kiếm.",
				"Print each step as a percent of searches."
			],
			[
				3,
				3,
				"In tỷ lệ huỷ bởi khách và bởi tài xế (cờ bằng 0 nghĩa là có huỷ) để giải thích chỗ rơi.",
				"Print cancellation rates by customers and drivers (flag 0 means cancelled) to explain the drop."
			],
			[
				4,
				4,
				"Vẽ cột phễu.",
				"Draw the funnel as bars."
			]
		]
	},
	"875f3569": {
		"s": ["Rút ra các con số chính cho kết luận: giờ cao điểm, tỷ lệ UPI và mức tập trung doanh thu ở top khu.", "Pull the key numbers for conclusions: peak hours, UPI share and revenue concentration in top zones."],
		"r": [
			[
				1,
				1,
				"Lấy 3 giờ có nhiều chuyến nhất.",
				"Take the 3 hours with the most trips."
			],
			[
				2,
				2,
				"Tính phần trăm chuyến trả bằng UPI.",
				"Compute the percent of trips paid by UPI."
			],
			[
				3,
				3,
				"In giờ cao điểm và tỷ lệ UPI.",
				"Print peak hours and the UPI share."
			],
			[
				4,
				4,
				"Tính phần trăm doanh thu của từng khu đón, xếp giảm dần.",
				"Compute each pickup zone's percent of revenue, sorted descending."
			],
			[
				5,
				5,
				"In phần trăm doanh thu của 5 và 10 khu hàng đầu để thấy mức tập trung.",
				"Print the revenue percent of the top 5 and top 10 zones to show concentration."
			],
			[
				6,
				6,
				"Vẽ thanh ngang 10 khu hàng đầu.",
				"Plot the top 10 zones as horizontal bars."
			]
		]
	}
};
//#endregion
export { a0900eda, a0dab5fc, a1282f9f, a160252e, a173d367, a1be0368, a2b8024b, a366e11c, a7b8ba3c, a813ed0b, a8211ee5, a9855f5f, aa286749, aa73d8db, adad1f07, ae5017f7, ae729905, af07cd3a, af2b00dc, af8247c1, afbb5a8f, b07ffe97, b0fea5a6, b149d678, b154c4bc, b166c435, b1b159d1, b1d75d8c, b1f15d2e, b20b7aec, b3ced9f4, b5acc660, b64f0057, b685d500, ba6939b5, ba7cd28a, bac7bb1d, bb841a93, bbf02471, bcd02c0d, bd5e437f, bf84c0af, c222e796, c2851a6a, c2db0d01, c2ea247d, c3121418, c343998f, c482363b, c4ed9222, c4f23ea5, c55287bc, c56e7a2c, c71286a8, c8745a47, c9525132, cb266e28, cb765f8b, cbe6f8ac, cc7954b9, cc9a6e4d, ccd2d2eb, cd022e9d, cda79cf6, ce7ab558, cf11c4b6, cf1e5a1b, cf731703, d02d5096, d0b78a0b, d0ec4a5e, d17eb9fa, d209e7e2, d246f289, d2a7ad9b, d32e2a3e, d61e62b4, d63fd863, d647c220, d6491ba8, d6948cca, d6d9d010, d78d1022, d7e66e9b, da1bccce, db1d857d, db1da471, dc50c185, dcbbf610, ddbc54a1, de645e23, dec1adb1, code_notes_default as default, dfda9991, e0211374, e1764753, e1dd5ab3, e261eb02, e31370c2, e32ebb62, e3b96c4d, e3c04a3f, e3e65d3b, e460df9a, e4c52849, e66cef2d, e92c6c55, eabab501, eb0ce231, ed31f140, ee2876a3, ee7abb8f, ee8a96d6, eeec5a33, ef8c77f2, ef9e1be4, efda9f4d, efedf952, f0a9eb6d, f1843aec, f18850b7, f2775e07, f3149e31, f335efba, f419de10, f5d9c075, f647afa7, f6e4aeeb, fa8f014c, faa1317d, faf4658f, fd689f19, fda32b74, ff4a81a6 };
