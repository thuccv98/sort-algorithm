## Bubble Sort

- Thuật toán sắp xếp đơn giản nhất bằng cách hoán đổi nhiều lần các phần tử liền kề nếu chúng sai thứ tự.

- Các phần tử sẽ được duyệt từ đầu dãy tới cuối dãy (k1 -> kn). Nếu 2 phần tử liền kề bị ngược thứ tự thì đổi chỗ chúng cho nhau. Sau lần duyệt như vậy, phần tử (nhỏ nhất/lớn nhất) trong dãy sẽ chuyển đến vị trí cuối cùng và vấn đề trở thành sắp xếp dãy từ k1 -> k(n-1).
- Sử dụng 2 vòng lặp lồng nhau để sắp xếp dãy theo thứ tự mong muốn: vòng lặp bên ngoài là số lần duyệt, vòng lặp bên trong sẽ lặp qua các phần tử của dãy và hoán đổi các phần tử liền kề có thứ tự sai.
- Độ phức tạp O(n^2) -> chỉ phù hợp với việc sắp xếp dãy nhỏ.

- NOTE: Với array sẽ là: arr[0] -> arr[n-1] và arr[0] -> arr[(n-1)-1]
