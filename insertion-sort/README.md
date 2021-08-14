## Insertion Sort

- Bắt đầu từ phần tử thứ 2 trở đi của mảng cần sort. Mảng ban đầu thành 2 mảng con: mảng đầu tiên gồm 1 phần tử đầu đã đc sắp xếp và mảng còn lại gồm các phần tử chưa được sắp xếp.
- Lần lượt so sánh giá trị các phần tử của mảng chưa được sort với phần tử cuối cùng của mảng đã đc sort. Sau đó chèn phần tử so sánh đó vào (trước/sau) mảng đã đc sort tùy thuộc vào yêu cầu sắp xếp tăng dần hay giảm dần.
- Độ phức tạp: O(n^2)
