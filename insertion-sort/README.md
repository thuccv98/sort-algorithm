## Insertion Sort

- Bắt đầu từ phần tử thứ 2 trở đi của mảng cần sort. Mảng ban đầu thành 2 mảng con: mảng đầu tiên gồm 1 phần tử đầu đã đc sắp xếp và mảng còn lại gồm các phần tử chưa được sắp xếp.
- Lần lượt so sánh giá trị các phần tử của mảng chưa được sort với phần tử cuối cùng của mảng đã đc sort. Ví dụ sắp xếp tăng dần:
  - Nếu lớn hơn phần tử cuối cùng của mảng đã được sort thì nghiễm nhiên nó lớn hơn tất cả các phần tử trong mảng đã đc sort. -> chèn vào sau phần tử cuối cùng của mảng đã đc sort.
  - Nếu nhỏ hơn phần tử cuối cùng của mảng đã đc sort thì ta đẩy lùi phần tử cuối cùng của mảng đã đc sort về phía sau 1 đơn vị và tiếp tục so sánh với phần tử trong mảng đã đc sort.
- Độ phức tạp: O(n^2)
- NOTE: Phươc thước sort() trong javascript sử dụng thuật toán insertion sort nếu có it hơn 20 phần tử.
