## Selection Sort

- Lần duyệt đầu tiên, tìm phần tử (nhỏ nhất/lớn nhất) từ ​​mảng và hoán đổi nó với phần tử ở vị trí đầu tiên. Lần duyệt tiếp theo sẽ tìm phần tử nhỏ nhất hoặc lớn nhất tiếp theo và hoán đổi nó ở vị trí thứ hai. Nó lặp lại điều này cho đến khi tất cả các phần tử được sắp xếp theo thứ tự nhất định.
- Sử dụng 2 vòng lặp lồng nhau để sắp xếp dãy theo thứ tự mong muốn: vòng lặp bên ngoài ta sẽ lặp cho đến phần tử cuối cùng thứ hai vì nếu lặp tới phần tử cuối cùng thì sẽ không còn phần tử nào để so sánh, vòng lặp bên trong sẽ bắt đầu từ 1 phần tử sau phần tử của vòng lặp đầu tiên cho đến phần tử cuối cùng của mảng.
- Trong khi sắp xếp, nó duy trì 2 mảng con: Mảng với các phần tử được sắp xếp và mảng có các phần tử chưa được sắp xếp.
- Đây là thuật toán sắp xếp đơn giản nhất và chậm nhất, độ phức tạp O(n^2).
