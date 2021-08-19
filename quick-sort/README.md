## Quick Sort - Sắp xếp nhanh

- Được phát triển bởi nhà khoa học máy tính người Anh Tony Hoare vào năm 1959 và xuất bản vào năm 1961.
- Quick sort là thuật toán sắp xếp được phát triển dựa trên kỹ thuật chia để trị. Thuật toán có thể mô tả đệ quy như sau:

1. Neo đệ quy (Base case): Nếu dãy chỉ còn không quá một phần tử thì nó là dãy đã được sắp xếp và trả lại ngay dãy này mà không phải làm gì cả.
2. Chia (Divide):
   - Chọn một phần tử trong dãy và gọi nó là phần tử chốt/trục (pivot).
   - Chia dãy đã cho ra thành 2 dãy con: Dãy con trái (L) gồm những phần tử không lớn hơn phần tử chốt, còn dãy con phải (R) gồm các phần tử không nhỏ hơn phần tử chốt. Thao tác này được gọi là "Phân đoạn" (Partition).
3. Trị (Conquer): Lặp lại một cách đệ quy thuật toán đối với hai dãy con L và R.
4. Tổng hợp (Combine): Dãy được sắp xếp là L pivot R.

![quicksort](https://i.ibb.co/3MPrrjC/quicksort.png)

- Có bốn cách khác nhau của quicksort để chọn pivot:
  - First element as a pivot.
  - Last element as a pivot.
  - Middle element as a pivot.
  - Random element as a pivot.
- Time Complexity:
  | Average | Worst | Best |
  | --------|:------:|---------|
  | O(nlogn)| O(n^2) | O(nlogn)|
- Mặc dù trường hợp xấu nhất của quicksort là O(n^2) có vẻ tệ hơn so với merge sort và heap sort. Trong thực tế, Quicksort nhanh hơn vì vòng lặp bên trong của nó có thể được triển khai hiệu quả trên hầu hết các kiến ​​trúc và trong hầu hết các dữ liệu trong thế giới thực.
