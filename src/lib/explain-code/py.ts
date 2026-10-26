import { Parser, lex, type Node, type Arg } from "./py-parse";
import { fmt, type Ctx, type Explained, type Lg, type Row, type Tpl } from "./tpl";

/* ───────── bảng mẫu ───────── */
const M: Record<string, Tpl> = {
  head: ["{0|5} dòng đầu của {o}", "the first {0|5} rows of {o}"],
  tail: ["{0|5} dòng cuối của {o}", "the last {0|5} rows of {o}"],
  describe: ["bảng thống kê mô tả (đếm, trung bình, độ lệch chuẩn, nhỏ nhất, tứ phân vị, lớn nhất) của {o}", "summary statistics of {o} (count, mean, std, min, quartiles, max)"],
  info: ["*In cấu trúc của {o}: tên cột, kiểu dữ liệu, số ô không trống", "*Print the structure of {o}: columns, types, non-null counts"],
  groupby: ["{o} chia thành các nhóm theo {0/by}", "{o} split into groups by {0/by}"],
  agg: ["{o} tính gộp theo {0/func}", "{o} aggregated with {0/func}"],
  aggregate: ["{o} tính gộp theo {0/func}", "{o} aggregated with {0/func}"],
  mean: ["trung bình của {o}", "mean of {o}"],
  median: ["trung vị của {o}", "median of {o}"],
  sum: ["tổng của {o}", "sum of {o}"],
  min: ["giá trị nhỏ nhất của {o}", "minimum of {o}"],
  max: ["giá trị lớn nhất của {o}", "maximum of {o}"],
  std: ["độ lệch chuẩn của {o}", "standard deviation of {o}"],
  var: ["phương sai của {o}", "variance of {o}"],
  count: ["số ô có giá trị của {o}", "count of non-empty cells in {o}"],
  size: ["số dòng của mỗi nhóm trong {o}", "size of each group in {o}"],
  nunique: ["số giá trị khác nhau của {o}", "number of distinct values in {o}"],
  unique: ["các giá trị khác nhau của {o}", "distinct values of {o}"],
  value_counts: ["số lần xuất hiện của từng giá trị trong {o}", "how many times each value appears in {o}"],
  idxmax: ["nhãn của dòng có giá trị lớn nhất trong {o}", "label of the row with the largest value in {o}"],
  idxmin: ["nhãn của dòng có giá trị nhỏ nhất trong {o}", "label of the row with the smallest value in {o}"],
  mode: ["giá trị xuất hiện nhiều nhất của {o}", "most frequent value of {o}"],
  quantile: ["phân vị {0} của {o}", "quantile {0} of {o}"],
  corr: ["tương quan giữa các cột số của {o}", "correlations between the numeric columns of {o}"],
  cumsum: ["tổng cộng dồn của {o}", "running total of {o}"],
  diff: ["chênh lệch giữa mỗi dòng và dòng trước của {o}", "difference between each row and the previous one in {o}"],
  shift: ["{o} dịch xuống {0|1} dòng", "{o} shifted down by {0|1} row(s)"],
  pct_change: ["phần trăm thay đổi so với dòng trước của {o}", "percent change from the previous row in {o}"],
  rank: ["thứ hạng của từng giá trị trong {o}", "rank of each value in {o}"],
  abs: ["giá trị tuyệt đối của {o}", "absolute value of {o}"],
  round: ["{o} làm tròn đến {0/decimals|0} chữ số thập phân", "{o} rounded to {0/decimals|0} decimals"],
  astype: ["{o} đổi sang kiểu {0}", "{o} converted to type {0}"],
  copy: ["bản sao của {o} (sửa bản sao không ảnh hưởng bản gốc)", "a copy of {o} (editing it leaves the original alone)"],
  reset_index: ["{o} đánh lại chỉ số 0, 1, 2…", "{o} with the index reset to 0, 1, 2…"],
  set_index: ["{o} lấy cột {0} làm chỉ số dòng", "{o} using column {0} as the row index"],
  sort_values: ["{o} sắp xếp theo {0/by}", "{o} sorted by {0/by}"],
  sort_index: ["{o} sắp xếp theo chỉ số dòng", "{o} sorted by its index"],
  dropna: ["{o} bỏ các dòng có ô trống", "{o} without rows that have empty cells"],
  fillna: ["{o} với ô trống được điền bằng {0/value}", "{o} with empty cells filled by {0/value}"],
  isna: ["bảng đánh dấu ô trống của {o}", "a map of the empty cells in {o}"],
  isnull: ["bảng đánh dấu ô trống của {o}", "a map of the empty cells in {o}"],
  notna: ["bảng đánh dấu ô có giá trị của {o}", "a map of the filled cells in {o}"],
  notnull: ["bảng đánh dấu ô có giá trị của {o}", "a map of the filled cells in {o}"],
  duplicated: ["đánh dấu các dòng trùng của {o}", "flags for the duplicate rows of {o}"],
  drop_duplicates: ["{o} bỏ các dòng trùng", "{o} without duplicate rows"],
  apply: ["{o} sau khi áp dụng {0} lên từng phần tử", "{o} after applying {0} to each element"],
  map: ["{o} sau khi đổi từng giá trị bằng {0}", "{o} after mapping each value with {0}"],
  replace: ["{o} sau khi thay {0} bằng {1}", "{o} with {0} replaced by {1}"],
  rename: ["{o} đổi tên theo {0/columns}", "{o} renamed as {0/columns}"],
  isin: ["kiểm tra giá trị của {o} có nằm trong {0}", "whether each value of {o} is in {0}"],
  between: ["kiểm tra {o} có nằm trong khoảng từ {0} đến {1}", "whether {o} lies between {0} and {1}"],
  select_dtypes: ["bảng chỉ gồm các cột có kiểu {include/exclude} của {o}", "{o} reduced to the columns of type {include/exclude}"],
  sample: ["{0/n|một số} dòng lấy ngẫu nhiên của {o}", "{0/n|some} randomly chosen rows of {o}"],
  reindex: ["{o} sắp lại theo thứ tự {0}", "{o} reordered as {0}"],
  unstack: ["{o} xoay mức chỉ số trong cùng thành cột", "{o} with its innermost index level pivoted into columns"],
  stack: ["{o} xếp các cột thành một cột dài", "{o} with its columns stacked into one long column"],
  pivot_table: ["bảng tổng hợp (pivot) từ {o}: dòng theo {index}, cột theo {columns}, giá trị {values}, gộp bằng {aggfunc|trung bình}", "pivot table of {o}: rows by {index}, columns by {columns}, values {values}, aggregated by {aggfunc|mean}"],
  to_string: ["{o} dạng chữ (để in ra đầy đủ)", "{o} as plain text (so it prints in full)"],
  to_dict: ["{o} chuyển thành từ điển", "{o} converted to a dictionary"],
  tolist: ["{o} chuyển thành danh sách", "{o} as a list"],
  ravel: ["{o} trải phẳng thành một dãy", "{o} flattened into one row"],
  reshape: ["{o} đổi hình thành {0}", "{o} reshaped to {0}"],
  fit: ["{o} sau khi học[ từ {0}][ và {1}]", "{o} after learning[ from {0}][ and {1}]"],
  predict: ["dự đoán của {o} cho {0}", "predictions of {o} for {0}"],
  predict_proba: ["xác suất dự đoán của {o} cho {0}", "predicted probabilities of {o} for {0}"],
  transform: ["{0} sau khi {o} biến đổi", "{0} after {o} transforms it"],
  fit_transform: ["{0} sau khi {o} học rồi biến đổi", "{0} after {o} learns from it and transforms it"],
  fit_resample: ["dữ liệu {0}, {1} sau khi {o} cân bằng lại", "data {0}, {1} after {o} rebalances it"],
  score: ["điểm của {o} trên {0}[ và {1}]", "score of {o} on {0}[ and {1}]"],
  summary: ["*In bảng tóm tắt kết quả của {o}", "*Print the summary of {o}"],
  get: ["giá trị của khóa {0} trong {o} (nếu không có thì {1|rỗng})", "value of key {0} in {o} (else {1|nothing})"],
  items: ["các cặp (khóa, giá trị) của {o}", "the (key, value) pairs of {o}"],
  keys: ["các khóa của {o}", "the keys of {o}"],
  append: ["*Thêm {0} vào cuối {o}", "*Append {0} to the end of {o}"],
  extend: ["*Nối thêm các phần tử của {0} vào {o}", "*Add the elements of {0} to {o}"],
  pop: ["lấy {0|phần tử cuối} ra khỏi {o}", "remove {0|the last element} from {o}"],
  split: ["{o} tách thành các phần theo {0|khoảng trắng}", "{o} split on {0|whitespace}"],
  upper: ["{o} viết hoa", "{o} in capitals"],
  lower: ["{o} viết thường", "{o} in lowercase"],
  strip: ["{o} bỏ khoảng trắng đầu và cuối", "{o} without leading and trailing spaces"],
  startswith: ["kiểm tra {o} có bắt đầu bằng {0}", "whether {o} starts with {0}"],
  contains: ["kiểm tra {o} có chứa {0}", "whether {o} contains {0}"],
  isalnum: ["kiểm tra {o} chỉ gồm chữ và số", "whether {o} is only letters and digits"],
  join: ["các phần tử của {0} nối lại, giữa chúng là {o}", "the elements of {0} joined with {o} between them"],
  format: ["{o} sau khi điền {0} vào chỗ trống", "{o} with {0} filled in"],
  total_seconds: ["{o} đổi sang số giây", "{o} in seconds"],
  day_name: ["tên thứ trong tuần của {o}", "weekday name of {o}"],
  intersection: ["phần chung của {o} và {0}", "the overlap of {o} and {0}"],
  combine_first: ["{o}, chỗ trống lấy từ {0}", "{o}, gaps taken from {0}"],
  query: ["các dòng của {o} thỏa điều kiện {0}", "rows of {o} matching {0}"],
  lt: ["kiểm tra {o} nhỏ hơn {0}", "whether {o} is less than {0}"],
  nlargest: ["{0} dòng có giá trị lớn nhất của {o}", "the {0} largest of {o}"],
  nsmallest: ["{0} dòng có giá trị nhỏ nhất của {o}", "the {0} smallest of {o}"],
  assign: ["{o} thêm các cột mới", "{o} with new columns added"],
  drop: ["{o} bỏ {columns/labels/0}", "{o} without {columns/labels/0}"],
  merge: ["{o} ghép với {0/right}[ theo cột {on}][ kiểu {how}]", "{o} merged with {0/right}[ on {on}][ ({how} join)]"],
  join_df: ["{o} ghép với {0}", "{o} joined with {0}"],
  add_constant: ["{0} thêm một cột hằng số 1 (để có hệ số chặn)", "{0} with a constant column of 1s (for the intercept)"],
  mount: ["*Kết nối Google Drive", "*Mount Google Drive"],
  extractall: ["*Giải nén tất cả vào {0}", "*Extract everything into {0}"],
  create: ["*Gửi yêu cầu tới dịch vụ AI", "*Send a request to the AI service"],
  set_title: ["*Đặt tiêu đề {0} cho {o}", "*Set the title {0} on {o}"],
  set_ylim: ["*Đặt giới hạn trục dọc của {o} là {0} đến {1}", "*Set the vertical limits of {o} to {0}–{1}"],
  set_xlabel: ["*Đặt nhãn trục ngang của {o}: {0}", "*Label the x-axis of {o}: {0}"],
  set_ylabel: ["*Đặt nhãn trục dọc của {o}: {0}", "*Label the y-axis of {o}: {0}"],
  set_axis_off: ["*Tắt khung trục của {o}", "*Hide the axes of {o}"],
  legend: ["*Hiện chú giải của {o}", "*Show the legend of {o}"],
  set_xticklabels: ["*Đặt nhãn trục ngang của {o}", "*Set the x tick labels of {o}"],
  axhline: ["*Vẽ đường ngang tại {0|y} trên {o}", "*Draw a horizontal line at {0|y} on {o}"],
  axvline: ["*Vẽ đường dọc tại {0|x} trên {o}", "*Draw a vertical line at {0|x} on {o}"],
  hist: ["*Vẽ histogram của {o}", "*Draw a histogram of {o}"],
  boxplot: ["*Vẽ biểu đồ hộp của {o}", "*Draw a box plot of {o}"],
  summary_frame: ["bảng tóm tắt của {o}", "summary table of {o}"],
};

const F: Record<string, Tpl> = {
  len: ["số phần tử của {0}", "number of elements in {0}"],
  list: ["danh sách tạo từ {0}", "list made from {0}"],
  set: ["tập hợp từ {0} (bỏ trùng)", "set from {0} (duplicates removed)"],
  dict: ["từ điển tạo từ {0}", "dictionary built from {0}"],
  tuple: ["bộ giá trị từ {0}", "tuple from {0}"],
  int: ["{0} đổi sang số nguyên", "{0} as an integer"],
  float: ["{0} đổi sang số thực", "{0} as a decimal number"],
  str: ["{0} đổi sang chữ", "{0} as text"],
  bool: ["{0} đổi sang đúng/sai", "{0} as true/false"],
  round: ["{0} làm tròn đến {1/ndigits|0} chữ số thập phân", "{0} rounded to {1/ndigits|0} decimals"],
  abs: ["giá trị tuyệt đối của {0}", "absolute value of {0}"],
  sum: ["tổng của {0}", "sum of {0}"],
  min: ["giá trị nhỏ nhất trong {0}[ và {1}]", "smallest of {0}[ and {1}]"],
  max: ["giá trị lớn nhất trong {0}[ và {1}]", "largest of {0}[ and {1}]"],
  sorted: ["{0} đã sắp xếp", "{0} sorted"],
  zip: ["ghép từng cặp phần tử của {0} và {1}", "pairs of elements from {0} and {1}"],
  enumerate: ["{0} kèm số thứ tự", "{0} with a counter"],
  type: ["kiểu dữ liệu của {0}", "the type of {0}"],
  isinstance: ["kiểm tra {0} có thuộc kiểu {1}", "whether {0} is of type {1}"],
  any: ["có phần tử nào đúng trong {0}", "whether any element of {0} is true"],
  all: ["mọi phần tử của {0} đều đúng", "whether all elements of {0} are true"],
  open: ["*Mở file {0}", "*Open the file {0}"],
  "pd.read_csv": ["bảng đọc từ file CSV {0}", "table read from the CSV file {0}"],
  "pd.read_excel": ["bảng đọc từ file Excel {0}", "table read from the Excel file {0}"],
  "pd.read_parquet": ["bảng đọc từ file Parquet {0}", "table read from the Parquet file {0}"],
  "gpd.read_file": ["bảng bản đồ đọc từ file {0}", "map table read from {0}"],
  "pd.DataFrame": ["bảng (DataFrame) tạo từ {0}", "table (DataFrame) built from {0}"],
  "pd.Series": ["dãy (Series) tạo từ {0}", "series built from {0}"],
  "pd.concat": ["các bảng {0} nối lại với nhau", "the tables {0} stacked together"],
  "pd.merge": ["ghép bảng {0} với bảng {1}[ theo {on}]", "table {0} merged with {1}[ on {on}]"],
  "pd.to_datetime": ["{0} đổi sang kiểu ngày giờ", "{0} converted to dates"],
  "pd.to_numeric": ["{0} đổi sang số", "{0} converted to numbers"],
  "pd.get_dummies": ["{0} mã hóa thành các cột 0/1 (one-hot)", "{0} one-hot encoded into 0/1 columns"],
  "pd.cut": ["{0} chia vào các khoảng {1/bins}", "{0} bucketed into the ranges {1/bins}"],
  "pd.qcut": ["{0} chia thành {1/q} nhóm có số dòng bằng nhau", "{0} split into {1/q} equal-sized groups"],
  "pd.crosstab": ["bảng chéo đếm số dòng theo {0} và {1}", "cross-tab counting rows by {0} and {1}"],
  "pd.pivot_table": ["bảng tổng hợp (pivot) từ {0}", "pivot table from {0}"],
  "pd.isna": ["đánh dấu ô trống của {0}", "empty-cell flags of {0}"],
  "pd.notna": ["đánh dấu ô có giá trị của {0}", "filled-cell flags of {0}"],
  "pd.set_option": ["*Đổi cách pandas hiển thị: {0} = {1}", "*Change how pandas displays: {0} = {1}"],
  "np.mean": ["trung bình của {0}", "mean of {0}"],
  "np.median": ["trung vị của {0}", "median of {0}"],
  "np.std": ["độ lệch chuẩn của {0}", "standard deviation of {0}"],
  "np.sum": ["tổng của {0}", "sum of {0}"],
  "np.log": ["lôgarit tự nhiên của {0}", "natural log of {0}"],
  "np.log1p": ["lôgarit tự nhiên của (1 + {0})", "natural log of (1 + {0})"],
  "np.sqrt": ["căn bậc hai của {0}", "square root of {0}"],
  "np.exp": ["e mũ {0}", "e to the power {0}"],
  "np.abs": ["giá trị tuyệt đối của {0}", "absolute value of {0}"],
  "np.array": ["mảng số tạo từ {0}", "array built from {0}"],
  "np.where": ["với mỗi phần tử: nếu {0} thì lấy {1}, ngược lại lấy {2}", "for each element: if {0} take {1}, otherwise {2}"],
  "np.select": ["chọn giá trị theo từng điều kiện {0} tương ứng {1}[, còn lại {default}]", "pick values by the conditions {0} matched to {1}[, otherwise {default}]"],
  "np.arange": ["dãy số từ {0} đến {1} (bước {2|1})", "numbers from {0} to {1} (step {2|1})"],
  "np.linspace": ["{2} điểm cách đều từ {0} đến {1}", "{2} evenly spaced points from {0} to {1}"],
  "np.ones": ["mảng toàn số 1 cỡ {0}", "array of ones with shape {0}"],
  "np.zeros": ["mảng toàn số 0 cỡ {0}", "array of zeros with shape {0}"],
  "np.triu": ["nửa tam giác phía trên của {0}", "upper triangle of {0}"],
  "np.corrcoef": ["hệ số tương quan của {0}", "correlation coefficients of {0}"],
  "np.percentile": ["phân vị {1}% của {0}", "{1}th percentile of {0}"],
  "np.array_equal": ["kiểm tra hai mảng {0} và {1} có bằng nhau", "whether arrays {0} and {1} are equal"],
  "plt.figure": ["*Tạo khung vẽ mới[ cỡ {figsize}]", "*Create a new figure[ sized {figsize}]"],
  "plt.show": ["*Hiện biểu đồ", "*Show the chart"],
  "plt.title": ["*Đặt tiêu đề biểu đồ: {0}", "*Set the chart title: {0}"],
  "plt.xlabel": ["*Đặt nhãn trục ngang: {0}", "*Label the x-axis: {0}"],
  "plt.ylabel": ["*Đặt nhãn trục dọc: {0}", "*Label the y-axis: {0}"],
  "plt.legend": ["*Hiện chú giải", "*Show the legend"],
  "plt.tight_layout": ["*Tự căn khoảng cách để các biểu đồ không đè nhau", "*Auto-adjust spacing so charts do not overlap"],
  "plt.savefig": ["*Lưu biểu đồ ra file {0}", "*Save the chart to {0}"],
  "plt.xticks": ["*Đặt vị trí hoặc nhãn trục ngang[ xoay {rotation} độ]", "*Set x-axis ticks or labels[ rotated {rotation}°]"],
  "plt.yticks": ["*Đặt vị trí hoặc nhãn trục dọc", "*Set y-axis ticks or labels"],
  "plt.xlim": ["*Giới hạn trục ngang từ {0} đến {1}", "*Limit the x-axis to {0}–{1}"],
  "plt.ylim": ["*Giới hạn trục dọc từ {0} đến {1}", "*Limit the y-axis to {0}–{1}"],
  "plt.hist": ["*Vẽ histogram của {0}", "*Draw a histogram of {0}"],
  "plt.plot": ["*Vẽ đường nối các điểm ({0}, {1})", "*Draw a line through the points ({0}, {1})"],
  "plt.bar": ["*Vẽ biểu đồ cột: vị trí {0}, độ cao {1}", "*Draw a bar chart: positions {0}, heights {1}"],
  "plt.scatter": ["*Vẽ biểu đồ phân tán: x = {0}, y = {1}", "*Draw a scatter plot: x = {0}, y = {1}"],
  "plt.axhline": ["*Vẽ đường ngang tại {0|y}", "*Draw a horizontal line at {0|y}"],
  "plt.axvline": ["*Vẽ đường dọc tại {0|x}", "*Draw a vertical line at {0|x}"],
  "plt.grid": ["*Bật lưới nền", "*Turn on the grid"],
  "plt.pie": ["*Vẽ biểu đồ tròn của {0}", "*Draw a pie chart of {0}"],
  "plt.boxplot": ["*Vẽ biểu đồ hộp của {0}", "*Draw a box plot of {0}"],
  "plt.text": ["*Viết chữ {2} tại vị trí ({0}, {1})", "*Write {2} at ({0}, {1})"],
  "plt.annotate": ["*Ghi chú {0} lên biểu đồ", "*Annotate the chart with {0}"],
  "plt.colorbar": ["*Thêm thanh thang màu", "*Add a colour bar"],
  "plt.close": ["*Đóng biểu đồ", "*Close the chart"],
  "plt.fill_between": ["*Tô vùng giữa hai đường", "*Shade the area between two lines"],
  "plt.stackplot": ["*Vẽ biểu đồ vùng chồng", "*Draw a stacked area chart"],
  "plt.imshow": ["*Hiện ảnh {0}", "*Display the image {0}"],
  "plt.style.use": ["*Chọn kiểu giao diện biểu đồ {0}", "*Pick the chart style {0}"],
  "sns.histplot": ["*Vẽ histogram[ của {x}][ từ bảng {data}][ chia màu theo {hue}]", "*Draw a histogram[ of {x}][ from {data}][ coloured by {hue}]"],
  "sns.boxplot": ["*Vẽ biểu đồ hộp[ của {y}][ theo {x}][ từ bảng {data}]", "*Draw a box plot[ of {y}][ by {x}][ from {data}]"],
  "sns.countplot": ["*Vẽ biểu đồ đếm số dòng[ theo {x}][ từ bảng {data}][ chia màu theo {hue}]", "*Draw a count plot[ by {x}][ from {data}][ coloured by {hue}]"],
  "sns.scatterplot": ["*Vẽ biểu đồ phân tán[ x = {x}][, y = {y}][ từ bảng {data}][ chia màu theo {hue}]", "*Draw a scatter plot[ x = {x}][, y = {y}][ from {data}][ coloured by {hue}]"],
  "sns.heatmap": ["*Vẽ bản đồ nhiệt của {0}", "*Draw a heatmap of {0}"],
  "sns.barplot": ["*Vẽ biểu đồ cột[ của {y}][ theo {x}][ từ bảng {data}]", "*Draw a bar chart[ of {y}][ by {x}][ from {data}]"],
  "sns.pairplot": ["*Vẽ lưới biểu đồ cho từng cặp cột của {0}", "*Draw a grid of charts for each pair of columns in {0}"],
  "sns.lineplot": ["*Vẽ biểu đồ đường[ x = {x}][, y = {y}][ từ bảng {data}]", "*Draw a line chart[ x = {x}][, y = {y}][ from {data}]"],
  "sns.kdeplot": ["*Vẽ đường mật độ của {0/x}", "*Draw a density curve of {0/x}"],
  "sns.violinplot": ["*Vẽ biểu đồ violin[ của {y}][ theo {x}]", "*Draw a violin plot[ of {y}][ by {x}]"],
  "sns.regplot": ["*Vẽ điểm và đường hồi quy[ x = {x}][, y = {y}]", "*Draw points and a regression line[ x = {x}][, y = {y}]"],
  "sns.set": ["*Chọn kiểu giao diện seaborn", "*Pick the seaborn style"],
  "sns.set_style": ["*Chọn kiểu giao diện seaborn {0}", "*Pick the seaborn style {0}"],
  "sm.OLS": ["mô hình hồi quy OLS với biến phụ thuộc {0} và biến giải thích {1}", "OLS regression with outcome {0} and predictors {1}"],
  "sm.GLM": ["mô hình tuyến tính suy rộng với biến phụ thuộc {0} và biến giải thích {1}[, họ mô hình: {family}]", "generalised linear model with outcome {0} and predictors {1}[, family: {family}]"],
  "sm.Logit": ["mô hình logistic với biến phụ thuộc {0} và biến giải thích {1}", "logistic model with outcome {0} and predictors {1}"],
  "sm.add_constant": ["{0} thêm một cột hằng số 1 (để có hệ số chặn)", "{0} with a constant column of 1s (for the intercept)"],
  "sm.families.Binomial": ["họ nhị phân (dùng cho logistic)", "binomial family (used for logistic)"],
  "sm.qqplot": ["*Vẽ biểu đồ Q-Q của {0}", "*Draw a Q-Q plot of {0}"],
  train_test_split: ["{0}[, {1}] chia thành tập học và tập kiểm tra[ (kiểm tra chiếm {test_size})][, cố định random_state = {random_state}]", "{0}[, {1}] split into a training set and a test set[ (test share {test_size})][, fixed random_state = {random_state}]"],
  LinearRegression: ["mô hình hồi quy tuyến tính (chưa học gì)", "a linear regression model (not trained yet)"],
  LogisticRegression: ["mô hình hồi quy logistic (chưa học gì)", "a logistic regression model (not trained yet)"],
  RandomForestClassifier: ["mô hình rừng ngẫu nhiên[ gồm {n_estimators} cây] (chưa học gì)", "a random forest model[ of {n_estimators} trees] (not trained yet)"],
  DecisionTreeClassifier: ["mô hình cây quyết định (chưa học gì)", "a decision tree model (not trained yet)"],
  StandardScaler: ["bộ chuẩn hóa: trừ trung bình rồi chia độ lệch chuẩn", "a scaler: subtract the mean, divide by the standard deviation"],
  MinMaxScaler: ["bộ co giãn về khoảng 0 đến 1", "a scaler into the range 0 to 1"],
  RFE: ["bộ chọn cột RFE dùng {0}[, giữ {n_features_to_select} cột]", "RFE column selector using {0}[, keeping {n_features_to_select} columns]"],
  RFECV: ["bộ chọn cột RFE có kiểm tra chéo dùng {0}", "cross-validated RFE column selector using {0}"],
  KMeans: ["mô hình gom cụm K-means[ với {n_clusters} cụm]", "a K-means model[ with {n_clusters} clusters]"],
  GridSearchCV: ["bộ dò tham số tốt nhất cho {0} trên lưới {1}", "a grid search for the best settings of {0} over {1}"],
  cross_val_score: ["điểm kiểm tra chéo của {0} trên {1}, {2}", "cross-validation scores of {0} on {1}, {2}"],
  accuracy_score: ["độ chính xác (accuracy) giữa nhãn thật {0} và dự đoán {1}", "accuracy between true labels {0} and predictions {1}"],
  confusion_matrix: ["ma trận nhầm lẫn giữa nhãn thật {0} và dự đoán {1}", "confusion matrix of true labels {0} vs predictions {1}"],
  roc_curve: ["đường ROC (tỷ lệ báo nhầm, độ nhạy, ngưỡng) từ {0} và {1}", "ROC curve (false-positive rate, sensitivity, thresholds) from {0} and {1}"],
  roc_auc_score: ["diện tích dưới đường ROC (AUC) từ {0} và {1}", "area under the ROC curve (AUC) from {0} and {1}"],
  auc: ["diện tích dưới đường cong theo {0} và {1}", "area under the curve of {0} against {1}"],
  precision_recall_curve: ["đường precision–recall (precision, recall, ngưỡng) từ {0} và {1}", "precision–recall curve (precision, recall, thresholds) from {0} and {1}"],
  classification_report: ["báo cáo precision, recall, F1 giữa {0} và {1}", "precision, recall and F1 report for {0} vs {1}"],
  mean_squared_error: ["sai số bình phương trung bình (MSE) giữa {0} và {1}", "mean squared error between {0} and {1}"],
  r2_score: ["R² giữa giá trị thật {0} và dự đoán {1}", "R² between actual {0} and predicted {1}"],
  f1_score: ["điểm F1 giữa {0} và {1}", "F1 score between {0} and {1}"],
  precision_score: ["precision giữa {0} và {1}", "precision between {0} and {1}"],
  recall_score: ["recall giữa {0} và {1}", "recall between {0} and {1}"],
  variance_inflation_factor: ["hệ số phóng đại phương sai (VIF) của cột số {1} trong {0}", "variance inflation factor (VIF) of column number {1} in {0}"],
  silhouette_score: ["điểm silhouette của {0} với nhãn cụm {1}", "silhouette score of {0} with cluster labels {1}"],
  RandomOverSampler: ["bộ nhân bản ngẫu nhiên lớp thiểu số", "a random oversampler of the minority class"],
  SMOTE: ["bộ tạo mẫu tổng hợp SMOTE cho lớp thiểu số", "a SMOTE synthetic-sample generator for the minority class"],
  "warnings.filterwarnings": ["*Tắt các cảnh báo", "*Silence warnings"],
  "glob.glob": ["danh sách file khớp mẫu {0}", "files matching {0}"],
  "os.listdir": ["danh sách file trong thư mục {0}", "files in the folder {0}"],
  "os.chdir": ["*Chuyển sang thư mục {0}", "*Switch to the folder {0}"],
  "os.getcwd": ["thư mục đang làm việc", "the current working folder"],
  ZipFile: ["file nén {0}", "the zip file {0}"],
  OpenAI: ["kết nối tới dịch vụ OpenAI", "a connection to the OpenAI service"],
  exec: ["*Chạy đoạn code {0}", "*Run the code {0}"],
  input: ["chữ người dùng gõ vào", "text typed by the user"],
};

const ATTR: Record<string, Tpl> = {
  shape: ["kích thước (số dòng, số cột) của {o}", "shape (rows, columns) of {o}"],
  columns: ["tên các cột của {o}", "column names of {o}"],
  dtypes: ["kiểu dữ liệu của từng cột trong {o}", "data type of each column in {o}"],
  index: ["chỉ số dòng của {o}", "row index of {o}"],
  values: ["giá trị của {o} dạng mảng", "values of {o} as an array"],
  T: ["{o} xoay ngang thành dọc (chuyển vị)", "{o} transposed"],
  size: ["số phần tử của {o}", "number of elements in {o}"],
  empty: ["{o} có trống không", "whether {o} is empty"],
  year: ["năm của {o}", "year of {o}"],
  month: ["tháng của {o}", "month of {o}"],
  day: ["ngày trong tháng của {o}", "day of month of {o}"],
  hour: ["giờ của {o}", "hour of {o}"],
  dayofweek: ["thứ trong tuần của {o} (0 = thứ Hai)", "weekday of {o} (0 = Monday)"],
  date: ["phần ngày của {o}", "date part of {o}"],
  days: ["số ngày của {o}", "number of days in {o}"],
  coef_: ["hệ số của {o} sau khi học", "coefficients of {o} after training"],
  intercept_: ["hệ số chặn của {o} sau khi học", "intercept of {o} after training"],
  params: ["các hệ số ước lượng của {o}", "estimated coefficients of {o}"],
  pvalues: ["các p-value của {o}", "p-values of {o}"],
  rsquared: ["R² của {o}", "R² of {o}"],
  feature_importances_: ["mức quan trọng của từng cột trong {o}", "importance of each column in {o}"],
  classes_: ["các nhãn mà {o} biết", "the labels {o} knows"],
  inertia_: ["tổng bình phương khoảng cách trong cụm của {o}", "within-cluster sum of squares of {o}"],
  labels_: ["nhãn cụm của từng dòng theo {o}", "cluster label of each row from {o}"],
  cluster_centers_: ["tọa độ tâm cụm của {o}", "cluster centres of {o}"],
  support_: ["các cột được {o} giữ lại", "the columns kept by {o}"],
  best_params_: ["bộ tham số tốt nhất của {o}", "best settings of {o}"],
  best_score_: ["điểm tốt nhất của {o}", "best score of {o}"],
  is_unique: ["{o} có không trùng lặp", "whether {o} has no duplicates"],
  name: ["tên của {o}", "name of {o}"],
};

const NAMES: Record<string, Tpl> = {
  True: ["đúng", "true"], False: ["sai", "false"], None: ["rỗng (None)", "nothing (None)"],
  "np.nan": ["giá trị trống (NaN)", "an empty value (NaN)"], "np.inf": ["vô cực", "infinity"], "np.pi": ["số π", "π"],
};

const BIN: Record<string, Tpl> = {
  "+": ["cộng", "plus"], "-": ["trừ", "minus"], "*": ["nhân", "times"], "/": ["chia", "divided by"],
  "//": ["chia lấy phần nguyên", "floor-divided by"], "%": ["chia lấy phần dư", "modulo"], "**": ["lũy thừa", "to the power"],
  "&": ["và", "and"], "|": ["hoặc", "or"], "^": ["xor", "xor"], "@": ["nhân ma trận với", "matrix-times"],
  "<<": ["dịch trái", "shifted left"], ">>": ["dịch phải", "shifted right"],
};
const CMP: Record<string, Tpl> = {
  ">": ["lớn hơn", "greater than"], ">=": ["lớn hơn hoặc bằng", "at least"], "<": ["nhỏ hơn", "less than"], "<=": ["nhỏ hơn hoặc bằng", "at most"],
  "==": ["bằng", "equal to"], "!=": ["khác", "not equal to"], in: ["nằm trong", "in"], "not in": ["không nằm trong", "not in"],
  is: ["là", "is"], "is not": ["không phải", "is not"],
};

/* ───────── bộ mô tả ───────── */
export function makeDescriber(lg: Lg) {
  const i = lg === "vi" ? 0 : 1;
  const P = (t: Tpl) => t[i];
  const alias: Record<string, string> = { pandas: "pd", numpy: "np", seaborn: "sns", "statsmodels.api": "sm", sm: "sm" };

  const dotted = (n: Node): string | null => {
    if (n.t === "name") return alias[n.v] ?? n.v;
    if (n.t === "attr") { const o = dotted(n.o); return o ? `${o}.${n.n}` : null; }
    return null;
  };
  const wrap = (n: Node, s: string) => (n.t === "bin" || n.t === "cmp" || n.t === "bool" || n.t === "cond" || n.t === "lambda" ? `(${s})` : s);
  const strv = (n: Node): string | null => (n.t === "str" ? n.v : null);
  const plain = (n: Node): string => {
    if (n.t === "str") return n.v;
    if ((n.t === "list" || n.t === "tuple") && n.v.length <= 8) return n.v.map(plain).join(", ");
    return D(n);
  };
  const isBool = (n: Node): boolean => {
    if (n.t === "cmp" || n.t === "bool") return true;
    if (n.t === "un") return n.op === "not" || n.op === "~";
    if (n.t === "bin") return (n.op === "&" || n.op === "|") && (isBool(n.l) || isBool(n.r));
    if (n.t === "call" && n.fn.t === "attr") return ["isin", "isna", "isnull", "notna", "notnull", "between", "contains", "startswith", "duplicated", "endswith"].includes(n.fn.n);
    return false;
  };

  const callCtx = (args: Arg[], o?: string): Ctx => {
    const pos: string[] = [];
    const kw: Record<string, string> = {};
    for (const a of args) {
      if (a.k) kw[a.k] = D(a.v);
      else pos.push(D(a.v));
    }
    return { o, pos, kw };
  };
  const stripStar = (s: string) => s.replace(/^\*/, "");

  function dictPhrase(n: Extract<Node, { t: "dict" }>): string {
    const items = n.v.slice(0, 6).map(([k, v]) => (k ? `${plain(k)} → ${D(v)}` : `…${D(v)}`));
    return `{${items.join("; ")}${n.v.length > 6 ? "; …" : ""}}`;
  }

  function special(fnName: string, o: Node | null, args: Arg[]): string | null {
    const kw = (k: string) => args.find((a) => a.k === k)?.v;
    const pos = args.filter((a) => !a.k).map((a) => a.v);
    const objS = o ? D(o) : "";
    switch (fnName) {
      case "print": {
        if (!args.length) return P(["*In một dòng trống", "*Print an empty line"]);
        const parts = args.filter((a) => !a.k).map((a) => (a.v.t === "str" && !a.v.f ? `«${a.v.v}»` : D(a.v)));
        return P([`*In ra ${parts.join(", ")}`, `*Print ${parts.join(", ")}`]);
      }
      case "range": {
        const p = pos.map(D);
        const s = p.length === 1 ? P([`từ 0 đến ${p[0]} − 1`, `from 0 to ${p[0]} − 1`]) : P([`từ ${p[0]} đến ${p[1]} − 1${p[2] ? `, bước ${p[2]}` : ""}`, `from ${p[0]} to ${p[1]} − 1${p[2] ? `, step ${p[2]}` : ""}`]);
        return P([`dãy số nguyên ${s}`, `the integers ${s}`]);
      }
      case "plot": case "bar": case "barh": case "line": case "area": case "pie": case "kde": {
        if (!o) return null;
        const kind = strv(kw("kind") ?? ({ t: "str", v: fnName === "plot" ? "line" : fnName } as Node)) ?? "line";
        const KN: Record<string, Tpl> = { line: ["đường", "line"], bar: ["cột", "bar"], barh: ["cột ngang", "horizontal bar"], pie: ["tròn", "pie"], hist: ["histogram", "histogram"], box: ["hộp", "box"], scatter: ["phân tán", "scatter"], area: ["vùng", "area"], kde: ["mật độ", "density"] };
        const kn = KN[kind] ? P(KN[kind]) : kind;
        const title = kw("title") ? D(kw("title")!) : "";
        const ax = kw("ax") ? D(kw("ax")!) : "";
        return P([`*Vẽ biểu đồ ${kn} từ ${objS}${title ? `, tiêu đề ${title}` : ""}${ax ? `, đặt vào ô ${ax}` : ""}`, `*Draw a ${kn} chart from ${objS}${title ? `, titled ${title}` : ""}${ax ? `, placed in ${ax}` : ""}`]);
      }
      case "subplots": {
        const r = pos[0] ? D(pos[0]) : "1";
        const c = pos[1] ? D(pos[1]) : "1";
        const fs = kw("figsize") ? D(kw("figsize")!) : "";
        return P([`*Tạo khung vẽ gồm ${r} hàng × ${c} cột ô biểu đồ${fs ? `, cỡ ${fs}` : ""}; trả về khung và các ô`, `*Create a figure with ${r} row(s) × ${c} column(s) of chart cells${fs ? `, sized ${fs}` : ""}; returns the figure and its cells`]);
      }
      case "sort_values": {
        const by = (pos[0] ?? kw("by")) ? plain(pos[0] ?? kw("by")!) : "";
        const asc = kw("ascending");
        const desc = asc && asc.t === "name" && asc.v === "False";
        return P([`${objS} sắp xếp theo ${by}${desc ? ", từ lớn đến nhỏ" : ", từ nhỏ đến lớn"}`, `${objS} sorted by ${by}${desc ? ", largest first" : ", smallest first"}`]);
      }
      case "drop": {
        if (!o) return null;
        const t = kw("columns") ?? kw("labels") ?? pos[0];
        const ax = kw("axis");
        const axv = ax && ax.t === "num" ? ax.v : null;
        const isCol = !!kw("columns") || axv === "1";
        const what = t ? plain(t) : "";
        return P([`${objS} bỏ ${isCol ? "cột" : "dòng/cột"} ${what}`, `${objS} without ${isCol ? "column(s)" : "row(s)/column(s)"} ${what}`]);
      }
      case "assign": {
        if (!o) return null;
        const names = args.filter((a) => a.k).map((a) => `${a.k} = ${D(a.v)}`).join("; ");
        return P([`${objS} thêm các cột mới: ${names}`, `${objS} with new columns: ${names}`]);
      }
      case "agg": case "aggregate": {
        if (!o) return null;
        const a = pos[0];
        if (a && a.t === "dict") return P([`${objS} tính gộp: ${a.v.map(([k, v]) => `${k ? plain(k) : ""} → ${plain(v)}`).join("; ")}`, `${objS} aggregated: ${a.v.map(([k, v]) => `${k ? plain(k) : ""} → ${plain(v)}`).join("; ")}`]);
        if (!a && args.some((x) => x.k)) {
          const named = args.filter((x) => x.k).map((x) => `${x.k} = ${D(x.v)}`).join("; ");
          return P([`${objS} tính gộp thành các cột đặt tên: ${named}`, `${objS} aggregated into named columns: ${named}`]);
        }
        return null;
      }
      case "value_counts": {
        if (!o) return null;
        const nm = kw("normalize");
        const dn = kw("dropna");
        const asPct = nm && nm.t === "name" && nm.v === "True";
        const withNa = dn && dn.t === "name" && dn.v === "False";
        return P([`số lần xuất hiện của từng giá trị trong ${objS}${asPct ? ", tính theo tỷ lệ" : ""}${withNa ? ", tính cả ô trống" : ""}`, `how many times each value appears in ${objS}${asPct ? ", as shares" : ""}${withNa ? ", counting empty cells too" : ""}`]);
      }
      case "isinstance": return null;
      case "round": {
        if (!o && pos.length) {
          const d = pos[1] ?? kw("ndigits");
          return P([`${D(pos[0])} làm tròn ${d ? `đến ${D(d)} chữ số thập phân` : "thành số nguyên"}`, `${D(pos[0])} rounded ${d ? `to ${D(d)} decimals` : "to a whole number"}`]);
        }
        return null;
      }
    }
    return null;
  }

  function describeCall(n: Extract<Node, { t: "call" }>): string {
    const f = n.fn;
    // phương thức: obj.method(...)
    if (f.t === "attr") {
      const full = dotted(f);
      const sp0 = full && special(full, null, n.args);
      if (sp0) return sp0;
      if (full && F[full]) return fmt(P(F[full]), callCtx(n.args));
      const method = f.n;
      // bỏ qua bộ truy cập str/dt/loc trong chuỗi
      const objNode = f.o.t === "attr" && ["str", "dt"].includes(f.o.n) ? f.o.o : f.o;
      const sp = special(method, objNode, n.args);
      if (sp) return sp;
      const last = full ? full.split(".").pop()! : method;
      if (!(method in M) && F[last] && f.o.t === "name" && /^(metrics|sklearn|np|pd|plt|sns|sm)$/.test(dotted(f.o) ?? "")) return fmt(P(F[last]), callCtx(n.args));
      const key = method === "join" && !(objNode.t === "str") ? "join_df" : method;
      const t = M[key];
      const objS = D(objNode);
      const ctx = callCtx(n.args, wrap(objNode, objS));
      if (t) return fmt(P(t), ctx);
      const args = n.args.map((a) => (a.k ? `${a.k} = ${D(a.v)}` : D(a.v))).join(", ");
      return P([`kết quả của ${method}${args ? `(${args})` : ""} trên ${objS}`, `result of ${method}${args ? `(${args})` : ""} on ${objS}`]);
    }
    if (f.t === "name") {
      const nm = alias[f.v] ?? f.v;
      const sp = special(nm, null, n.args);
      if (sp) return sp;
      if (F[nm]) return fmt(P(F[nm]), callCtx(n.args));
      const args = n.args.map((a) => (a.k ? `${a.k} = ${D(a.v)}` : D(a.v))).join(", ");
      return P([`kết quả của hàm ${f.v}${args ? ` với ${args}` : ""}`, `result of the function ${f.v}${args ? ` with ${args}` : ""}`]);
    }
    // gọi kết quả của một biểu thức: f(x)(y)
    return P([`kết quả của ${D(f)} áp lên ${n.args.map((a) => D(a.v)).join(", ")}`, `${D(f)} applied to ${n.args.map((a) => D(a.v)).join(", ")}`]);
  }

  function describeSub(n: Extract<Node, { t: "sub" }>): string {
    const o = n.o;
    const idx = n.i;
    const oS = D(o);
    const oW = o.t === "call" || o.t === "bin" ? `(${oS})` : oS;
    if (o.t === "attr" && (o.n === "loc" || o.n === "iloc" || o.n === "at" || o.n === "iat")) {
      const base = D(o.o);
      const rowP = (r: Node): string => {
        if (r.t === "slice" && !r.a && !r.b) return P(["mọi dòng", "all rows"]);
        if (isBool(r)) return P([`các dòng thỏa ${D(r)}`, `the rows where ${D(r)}`]);
        if (r.t === "slice") return P([`các dòng từ ${r.a ? D(r.a) : "đầu"} đến ${r.b ? D(r.b) : "cuối"}`, `rows ${r.a ? D(r.a) : "from the start"} to ${r.b ? D(r.b) : "the end"}`]);
        return P([`dòng ${plain(r)}`, `row ${plain(r)}`]);
      };
      const colP = (c: Node): string => {
        if (c.t === "slice" && !c.a && !c.b) return P(["mọi cột", "all columns"]);
        if (c.t === "list") return P([`các cột ${plain(c)}`, `columns ${plain(c)}`]);
        return P([`cột ${plain(c)}`, `column ${plain(c)}`]);
      };
      if (idx.t === "tuple" && idx.v.length === 2) return P([`${rowP(idx.v[0])}, ${colP(idx.v[1])} của ${base}`, `${rowP(idx.v[0])}, ${colP(idx.v[1])} of ${base}`]);
      return P([`${rowP(idx)} của ${base}`, `${rowP(idx)} of ${base}`]);
    }
    if (idx.t === "str") return P([`cột ${idx.v} của ${oW}`, `column ${idx.v} of ${oW}`]);
    if (idx.t === "list" && idx.v.every((x) => x.t === "str")) return P([`các cột ${plain(idx)} của ${oW}`, `columns ${plain(idx)} of ${oW}`]);
    if (isBool(idx)) return P([`các dòng của ${oW} thỏa điều kiện: ${D(idx)}`, `the rows of ${oW} where ${D(idx)}`]);
    if (idx.t === "slice") {
      const a = idx.a ? D(idx.a) : "";
      const b = idx.b ? D(idx.b) : "";
      return P([`các phần tử của ${oW} từ ${a || "đầu"} đến ${b ? `trước ${b}` : "cuối"}${idx.c ? `, bước ${D(idx.c)}` : ""}`, `elements of ${oW} from ${a || "the start"} to ${b ? `before ${b}` : "the end"}${idx.c ? `, step ${D(idx.c)}` : ""}`]);
    }
    if (idx.t === "num") {
      if (idx.v === "0") return P([`phần tử đầu của ${oW}`, `the first element of ${oW}`]);
      return P([`phần tử số ${idx.v} của ${oW}`, `element number ${idx.v} of ${oW}`]);
    }
    if (idx.t === "un" && idx.op === "-" && idx.x.t === "num" && idx.x.v === "1") return P([`phần tử cuối của ${oW}`, `the last element of ${oW}`]);
    if (idx.t === "tuple") return P([`phần tử (${idx.v.map(D).join(", ")}) của ${oW}`, `element (${idx.v.map(D).join(", ")}) of ${oW}`]);
    if (idx.t === "name") return P([`phần của ${oW} được chọn bởi ${D(idx)}`, `the part of ${oW} picked by ${D(idx)}`]);
    return P([`phần tử ${D(idx)} của ${oW}`, `element ${D(idx)} of ${oW}`]);
  }

  function D(n: Node): string {
    switch (n.t) {
      case "name": { const nm = NAMES[alias[n.v] ?? n.v]; return nm ? P(nm) : n.v; }
      case "num": return n.v;
      case "str": return n.f ? P([`chữ «${n.v}» (có chèn giá trị)`, `text “${n.v}” (with values inserted)`]) : `«${n.v}»`;
      case "list": case "tuple": case "set": {
        const items = n.v.slice(0, 6).map(D);
        const more = n.v.length > 6 ? ", …" : "";
        if (!n.v.length) return P(["rỗng", "empty"]);
        return n.t === "list" ? `[${items.join(", ")}${more}]` : n.t === "tuple" ? `(${items.join(", ")}${more})` : `{${items.join(", ")}${more}}`;
      }
      case "dict": return dictPhrase(n);
      case "call": return describeCall(n);
      case "attr": {
        const full = dotted(n);
        if (full && NAMES[full]) return P(NAMES[full]);
        if (n.o.t === "attr" && ["str", "dt"].includes(n.o.n) && ATTR[n.n]) return fmt(P(ATTR[n.n]), { o: D(n.o.o), pos: [], kw: {} });
        if (ATTR[n.n]) return fmt(P(ATTR[n.n]), { o: wrap(n.o, D(n.o)), pos: [], kw: {} });
        if (n.o.t === "name" && !["pd", "np", "plt", "sns", "sm"].includes(n.o.v)) return `${n.o.v}.${n.n}`;
        return full ?? `${D(n.o)}.${n.n}`;
      }
      case "sub": return describeSub(n);
      case "slice": return `${n.a ? D(n.a) : ""}:${n.b ? D(n.b) : ""}`;
      case "bin": {
        const op = BIN[n.op];
        const l = wrap(n.l, D(n.l));
        const r = wrap(n.r, D(n.r));
        return `${l} ${op ? P(op) : n.op} ${r}`;
      }
      case "un":
        if (n.op === "not" || n.op === "~") return P([`không phải (${D(n.x)})`, `not (${D(n.x)})`]);
        return n.op === "-" ? `−${wrap(n.x, D(n.x))}` : D(n.x);
      case "cmp": {
        let out = D(n.v[0]);
        n.ops.forEach((op, k) => { out += ` ${P(CMP[op] ?? [op, op])} ${D(n.v[k + 1])}`; });
        return out;
      }
      case "bool": return n.v.map((x) => wrap(x, D(x))).join(P([n.op === "and" ? " và " : " hoặc ", n.op === "and" ? " and " : " or "]));
      case "lambda": return P([`hàm nhận ${n.p.join(", ") || "không gì"} và trả về ${D(n.b)}`, `a function taking ${n.p.join(", ") || "nothing"} and returning ${D(n.b)}`]);
      case "cond": return P([`${D(n.a)} nếu ${D(n.c)}, ngược lại ${D(n.b)}`, `${D(n.a)} if ${D(n.c)}, otherwise ${D(n.b)}`]);
      case "comp": {
        const ifs = n.ifs.length ? P([`, chỉ khi ${n.ifs.map(D).join(" và ")}`, `, only when ${n.ifs.map(D).join(" and ")}`]) : "";
        const e = n.k === "dict" ? `${D(n.e)}: ${D(n.e2!)}` : D(n.e);
        const kind = n.k === "dict" ? P(["từ điển", "dictionary"]) : n.k === "set" ? P(["tập hợp", "set"]) : n.k === "list" ? P(["danh sách", "list"]) : P(["dãy", "sequence"]);
        return P([`${kind} gồm ${e} với mỗi ${plain(n.v)} trong ${D(n.it)}${ifs}`, `${kind} of ${e} for each ${plain(n.v)} in ${D(n.it)}${ifs}`]);
      }
      case "star": return n.d ? P([`toàn bộ cặp của ${D(n.x)}`, `all pairs of ${D(n.x)}`]) : P([`tất cả phần tử của ${D(n.x)}`, `all elements of ${D(n.x)}`]);
    }
  }

  /* ───────── câu lệnh ───────── */
  const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);
  const end = (s: string) => (/[.:!?…]$/.test(s) ? s : s + ".");
  const clauseNoun = (n: Node): string => {
    const s = D(n);
    return s.startsWith("*") ? stripStar(s) : s;
  };
  const exprStmt = (n: Node): string => {
    const s = D(n);
    if (s.startsWith("*")) return end(cap(stripStar(s)));
    return end(P([`Tính ${s}`, `Compute ${s}`]));
  };
  const target = (n: Node): string => {
    if (n.t === "name") return n.v;
    if (n.t === "tuple" || n.t === "list") return n.v.map(target).join(", ");
    if (n.t === "sub") {
      const o = n.o;
      if (o.t === "attr" && (o.n === "loc" || o.n === "iloc")) return D(n);
      if (n.i.t === "str") return P([`cột ${n.i.v} của ${D(o)}`, `column ${n.i.v} of ${D(o)}`]);
      if (n.i.t === "list") return P([`các cột ${plain(n.i)} của ${D(o)}`, `columns ${plain(n.i)} of ${D(o)}`]);
      return D(n);
    }
    return D(n);
  };

  /* ───────── chuỗi gọi nối tiếp → các bước ───────── */
  const PH_VI = "kết quả bước trước";
  const PH_EN = "the previous result";
  const isAcc = (n: Node) => n.t === "attr" && (n.n === "str" || n.n === "dt");
  const isLoc = (n: Node) => n.t === "attr" && (n.n === "loc" || n.n === "iloc");
  const innerOf = (n: Node): Node | null => {
    if (n.t === "call" && n.fn.t === "attr") return isAcc(n.fn.o) ? (n.fn.o as Extract<Node, { t: "attr" }>).o : n.fn.o;
    if (n.t === "sub") return isLoc(n.o) ? (n.o as Extract<Node, { t: "attr" }>).o : n.o;
    if (n.t === "attr" && !isAcc(n)) return n.o;
    return null;
  };
  const withBase = (n: Node, b: Node): Node => {
    if (n.t === "call" && n.fn.t === "attr") return { ...n, fn: { ...n.fn, o: isAcc(n.fn.o) ? { ...(n.fn.o as Extract<Node, { t: "attr" }>), o: b } : b } };
    if (n.t === "sub") return { ...n, o: isLoc(n.o) ? { ...(n.o as Extract<Node, { t: "attr" }>), o: b } : b };
    if (n.t === "attr") return { ...n, o: b };
    return n;
  };
  function stepsOf(n: Node): string[] | undefined {
    const ops: Node[] = [];
    let cur: Node = n;
    for (;;) {
      const inn = innerOf(cur);
      if (!inn) break;
      // dừng khi gặp lời gọi hàm của thư viện (pd.read_csv...) làm gốc
      if (cur.t === "call" && cur.fn.t === "attr" && dottedPublic(cur.fn) && F[dottedPublic(cur.fn)!]) break;
      ops.push(cur);
      cur = inn;
    }
    const calls = ops.filter((o) => o.t === "call").length;
    if (ops.length < 3 && calls < 2) return undefined;
    const ph: Node = { t: "name", v: lg === "vi" ? PH_VI : PH_EN };
    const out: string[] = [P([`Bắt đầu từ ${D(cur)}`, `Start from ${D(cur)}`])];
    for (const op of ops.reverse()) {
      const d = D(withBase(op, ph));
      out.push(cap(d.replace(/^\*/, "")));
    }
    return out;
  }
  const dottedPublic = (n: Node): string | null => dotted(n);
  let chainNode: Node | null = null;

  function explainStatement(s: string): string {
    const text = s.trim();
    if (text.startsWith("%")) return P([`Lệnh riêng của notebook: ${text.slice(1)} (không phải Python thường).`, `Notebook-only command: ${text.slice(1)} (not plain Python).`]);
    if (text.startsWith("!")) return P([`Chạy lệnh hệ thống: ${text.slice(1)}.`, `Run a shell command: ${text.slice(1)}.`]);
    const toks = lex(text);
    const first = toks[0];
    const kw = first.k === "name" ? first.v : "";
    const p = new Parser(toks);
    const textAfterColon = (t: string): string => {
      let depth = 0; let q = "";
      for (let k = 0; k < t.length; k++) {
        const c = t[k];
        if (q) { if (c === q) q = ""; continue; }
        if (c === "'" || c === '"') { q = c; continue; }
        if ("([{".includes(c)) depth++;
        else if (")]}".includes(c)) depth--;
        else if (c === ":" && depth === 0) return t.slice(k + 1).trim();
      }
      return "";
    };
    const bodyOf = (): string => {
      const rest = textAfterColon(text);
      return rest ? " " + explainStatement(rest) : "";
    };
    try {
      if (kw === "import") {
        p.p++;
        const parts: string[] = [];
        do {
          let name = "";
          while (p.cur.k === "name" && !p.isKw("as") || p.isOp(".")) { name += p.cur.v; p.p++; }
          let as = "";
          if (p.eat("as")) { as = p.cur.v; p.p++; }
          parts.push(as ? P([`${name} (gọi tắt là ${as})`, `${name} (nicknamed ${as})`]) : name);
        } while (p.eat(","));
        return P([`Nạp thư viện ${parts.join(", ")} để dùng các hàm của nó.`, `Load the library ${parts.join(", ")} so its functions can be used.`]);
      }
      if (kw === "from") {
        p.p++;
        let mod = "";
        while ((p.cur.k === "name" && !p.isKw("import")) || p.isOp(".")) { mod += p.cur.v; p.p++; }
        p.expect("import");
        const names: string[] = [];
        while (!p.atEnd()) { if (p.cur.k === "name" && !p.isKw("as")) names.push(p.cur.v); else if (p.isOp("*")) names.push("*"); p.p++; }
        return P([`Từ thư viện ${mod}, lấy ra ${names.join(", ")} để dùng trực tiếp.`, `From the library ${mod}, bring in ${names.join(", ")} for direct use.`]);
      }
      if (kw === "for") {
        p.p++;
        const t = p.targetList();
        p.expect("in");
        const it = p.exprList();
        return P([`Lặp: với mỗi ${plain(t)} trong ${D(it)}, chạy các dòng thụt vào bên dưới.${bodyOf()}`, `Loop: for each ${plain(t)} in ${D(it)}, run the indented lines below.${bodyOf()}`]);
      }
      if (kw === "while") {
        p.p++;
        const c = p.expr();
        return P([`Lặp: chừng nào ${D(c)} còn đúng thì chạy các dòng thụt vào bên dưới.${bodyOf()}`, `Loop: while ${D(c)} stays true, run the indented lines below.${bodyOf()}`]);
      }
      if (kw === "if" || kw === "elif") {
        p.p++;
        const c = p.expr();
        const word = kw === "if" ? P(["Nếu", "If"]) : P(["Nếu không, nhưng nếu", "Otherwise, if"]);
        return P([`${word} ${D(c)} thì chạy các dòng thụt vào bên dưới.${bodyOf()}`, `${word} ${D(c)}, run the indented lines below.${bodyOf()}`]);
      }
      if (kw === "else") return P([`Nếu không có điều kiện nào ở trên đúng thì chạy các dòng thụt vào bên dưới.${bodyOf()}`, `If none of the conditions above held, run the indented lines below.${bodyOf()}`]);
      if (kw === "try") return P([`Thử chạy các dòng thụt vào bên dưới; nếu lỗi thì nhảy sang phần except.${bodyOf()}`, `Try the indented lines below; if they fail, jump to the except part.${bodyOf()}`]);
      if (kw === "except") return P(["Nếu khối try ở trên báo lỗi thì chạy các dòng thụt vào bên dưới.", "If the try block above raised an error, run the indented lines below."]);
      if (kw === "finally") return P(["Luôn chạy các dòng thụt vào bên dưới, dù có lỗi hay không.", "Always run the indented lines below, error or not."]);
      if (kw === "with") {
        p.p++;
        const e = p.expr();
        let as = "";
        if (p.eat("as")) { as = p.cur.v; }
        return P([`Mở ${D(e)}${as ? `, đặt tên ${as}` : ""}, dùng trong các dòng thụt vào bên dưới rồi tự đóng lại.`, `Open ${D(e)}${as ? ` as ${as}` : ""}, use it in the indented lines below, then close it automatically.`]);
      }
      if (kw === "def") {
        p.p++;
        const name = p.cur.v;
        const params = text.slice(text.indexOf("(") + 1, text.lastIndexOf(")")).split(",").map((x) => x.trim().split("=")[0].split(":")[0].trim()).filter(Boolean);
        return P([`Định nghĩa hàm ${name}${params.length ? ` nhận ${params.join(", ")}` : ""}; sau này gọi ${name}(…) là chạy các dòng thụt vào bên dưới.`, `Define the function ${name}${params.length ? ` taking ${params.join(", ")}` : ""}; calling ${name}(…) later runs the indented lines below.`]);
      }
      if (kw === "class") return P([`Định nghĩa một kiểu đối tượng mới tên ${toks[1]?.v}.`, `Define a new kind of object called ${toks[1]?.v}.`]);
      if (kw === "return") { p.p++; if (p.atEnd()) return P(["Kết thúc hàm, không trả giá trị.", "End the function without a value."]); const rv = clauseNoun(p.exprList()); return P([`Kết thúc hàm và trả về ${rv}.`, `End the function and return ${rv}.`]); }
      if (kw === "pass") return P(["Không làm gì (giữ chỗ).", "Do nothing (placeholder)."]);
      if (kw === "break") return P(["Thoát khỏi vòng lặp ngay.", "Leave the loop right now."]);
      if (kw === "continue") return P(["Bỏ qua phần còn lại của vòng này, sang vòng kế.", "Skip the rest of this round and go to the next."]);
      if (kw === "raise") return P(["Cố ý báo lỗi để dừng chương trình.", "Raise an error on purpose to stop the program."]);
      if (kw === "assert") { p.p++; const av = D(p.expr()); return P([`Kiểm tra ${av} đúng; nếu sai thì dừng và báo lỗi.`, `Check that ${av} holds; if not, stop with an error.`]); }
      if (kw === "del") { p.p++; const dv = D(p.exprList()); return P([`Xóa ${dv}.`, `Delete ${dv}.`]); }
      if (kw === "global" || kw === "nonlocal") return P([`Cho phép hàm sửa biến ${toks.slice(1).map((x) => x.v).join(" ")} ở ngoài.`, `Allow the function to change the outer variable ${toks.slice(1).map((x) => x.v).join(" ")}.`]);
      // gán / biểu thức
      const lhs = p.exprList();
      const AUG: Record<string, Tpl> = { "+=": ["Cộng thêm", "Add"], "-=": ["Trừ bớt", "Subtract"], "*=": ["Nhân thêm", "Multiply by"], "/=": ["Chia cho", "Divide by"], "//=": ["Chia lấy phần nguyên cho", "Floor-divide by"], "%=": ["Chia lấy dư cho", "Take the remainder by"], "**=": ["Lũy thừa với", "Raise to the power"] };
      if (p.cur.k === "op" && AUG[p.cur.v]) {
        const op = p.cur.v;
        p.p++;
        const r = p.exprList();
        return end(P([`${P(AUG[op])} ${D(r)} ${op === "-=" ? "khỏi" : op === "+=" ? "vào" : "đối với"} ${target(lhs)}`, `${P(AUG[op])} ${D(r)} ${op === "+=" ? "to" : op === "-=" ? "from" : "for"} ${target(lhs)}`]));
      }
      if (p.isOp("=")) {
        const targets = [lhs];
        let rhs: Node = lhs;
        while (p.eat("=")) { rhs = p.exprList(); if (p.isOp("=")) targets.push(rhs); }
        const rs = D(rhs);
        chainNode = rhs;
        const tgt = targets.map(target).join(" = ");
        if (rs.startsWith("*")) return end(P([`${cap(stripStar(rs))}, lưu vào ${tgt}`, `${cap(stripStar(rs))}, stored in ${tgt}`]));
        return end(P([`Lưu vào ${tgt}: ${rs}`, `Store in ${tgt}: ${rs}`]));
      }
      if (p.isOp(":")) { // chú thích kiểu
        p.p++;
        return P([`Khai báo ${D(lhs)}.`, `Declare ${D(lhs)}.`]);
      }
      if (!p.atEnd()) throw new Error("rest");
      chainNode = lhs.t === "call" && lhs.fn.t === "name" && lhs.fn.v === "print" && lhs.args[0] ? lhs.args[0].v : lhs;
      return exprStmt(lhs);
    } catch {
      if (/=\s*$/.test(text)) return P(["Dòng này để trống phần bên phải dấu =: chỗ bạn tự điền code.", "This line leaves the right side of = empty: the spot where you write your own code."]);
      return P(["Dòng này chạy đúng như được viết; đọc từng tên hàm trong dòng để biết nó làm gì.", "This line runs exactly as written; read each function name in it to see what it does."]);
    }
  }

  function explainFull(s: string): { text: string; steps?: string[] } {
    chainNode = null;
    const text = explainStatement(s);
    const node = chainNode as Node | null;
    let steps: string[] | undefined;
    try { steps = node ? stepsOf(node) : undefined; } catch { steps = undefined; }
    return { text, steps };
  }

  return { explainStatement, explainFull, D };
}

/* ───────── tách câu lệnh ───────── */
export type Stmt = { text: string; indent: string; raw: string; note?: boolean };

export function splitStatements(code: string): Stmt[] {
  const out: Stmt[] = [];
  const lines = code.replace(/\r/g, "").split("\n");
  let k = 0;
  while (k < lines.length) {
    const line = lines[k];
    if (!line.trim()) { k++; continue; }
    const indent = /^\s*/.exec(line)![0];
    if (line.trim().startsWith("#")) { out.push({ text: line.trim().replace(/^#+\s*/, ""), indent, raw: line, note: true }); k++; continue; }
    // gom các dòng vật lý thành một câu lệnh
    let buf = line;
    const raws = [line];
    const state = () => {
      let depth = 0; let q = ""; let esc = false;
      for (let i = 0; i < buf.length; i++) {
        const c = buf[i];
        if (q) {
          if (esc) { esc = false; continue; }
          if (c === "\\" && q.length === 1) { esc = true; continue; }
          if (buf.startsWith(q, i)) { i += q.length - 1; q = ""; }
          continue;
        }
        if (c === "#") { while (i < buf.length && buf[i] !== "\n") i++; continue; }
        if (c === '"' || c === "'") { q = buf.startsWith(c.repeat(3), i) ? c.repeat(3) : c; i += q.length - 1; continue; }
        if ("([{".includes(c)) depth++;
        else if (")]}".includes(c)) depth--;
      }
      return { depth, q, cont: /\\\s*$/.test(buf) };
    };
    while (k + 1 < lines.length) {
      const s = state();
      if (s.depth > 0 || s.q || s.cont) { k++; buf += "\n" + lines[k]; raws.push(lines[k]); } else break;
    }
    k++;
    // tách theo ; ngoài chuỗi và ngoài ngoặc
    const parts: string[] = [];
    let depth = 0; let q = ""; let cur = "";
    for (let i = 0; i < buf.length; i++) {
      const c = buf[i];
      if (q) { cur += c; if (c === "\\" ) { cur += buf[++i] ?? ""; continue; } if (buf.startsWith(q, i)) { cur += q.slice(1); i += q.length - 1; q = ""; } continue; }
      if (c === "#") { while (i < buf.length && buf[i] !== "\n") i++; i--; continue; }
      if (c === '"' || c === "'") { q = buf.startsWith(c.repeat(3), i) ? c.repeat(3) : c; cur += q; i += q.length - 1; continue; }
      if ("([{".includes(c)) depth++;
      else if (")]}".includes(c)) depth--;
      if (c === ";" && depth === 0) { parts.push(cur); cur = ""; continue; }
      cur += c;
    }
    parts.push(cur);
    const clean = parts.map((x) => x.trim().replace(/\s+→\s+.*$/s, "")).filter(Boolean);
    clean.forEach((t, idx) => out.push({ text: t, indent, raw: idx === 0 ? raws.join("\n") : t }));
  }
  return out;
}

export function explainPython(code: string, lg: Lg): Explained {
  const { explainFull } = makeDescriber(lg);
  const stmts = splitStatements(code);
  const rows: Row[] = stmts.map((s) =>
    s.note
      ? { code: s.raw, text: lg === "vi" ? `Dòng ghi chú, máy bỏ qua: ${s.text}` : `A comment, ignored by the computer: ${s.text}`, kind: "note" as const }
      : { code: s.raw, ...explainFull(s.text) },
  );
  const real = rows.filter((r) => r.kind !== "note");
  if (!real.length) return null;
  const summary =
    lg === "vi"
      ? `Đoạn code có ${real.length} lệnh; máy chạy từ trên xuống, mỗi lệnh được nói lại bằng lời bên dưới.`
      : `This code has ${real.length} statement${real.length === 1 ? "" : "s"}; the computer runs them top to bottom, and each is restated in words below.`;
  return { lang: "Python", summary, rows };
}
