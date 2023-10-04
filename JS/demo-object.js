console.log("\tDemo Object");

// cấu trúc khai báo object
let tenObject = {
    tenThuocTinh: "Giá trị thuộc tính",
    tenThuocTinh02: "Giá trị thuộc tính 02",
    tenThuocTinh03: 2000,
    tenPhuongThuc: function() {
        console.log("Đây là phương thức 01");
    }
}

console.log(tenObject);

// gọi phương thức của object
tenObject.tenPhuongThuc();

// in ra giá trị của thuộc tính
console.log(tenObject.tenThuocTinh);
console.log(tenObject["tenThuocTinh02"]);

// ví dụ về mảng object
// [object1, object2, object3]
// object1 = {ten: "day la ten", tuoi: 20}

// ví dụ thực tế mảng dssv

let sinhVien01 = {
    ten: "Nguyen Van A",
    namSinh: "2000",
    diaChi: "Ha Noi"
}

let sinhVien02 = {
    ten: "Nguyen Thi A",
    namSinh: "2001",
    diaChi: "Ha Nam"
}

let sinhVien03 = {
    ten: "Nguyen Van B",
    namSinh: "2000",
    diaChi: "Nam Dinh"
}

let sinhVienArr = [sinhVien01, sinhVien02, sinhVien03];
console.log(sinhVienArr);

// duyệt các giá trị thuộc tính của object
// ứng dụng for in
for (let thuocTinh in sinhVien01) {
    console.log(thuocTinh);

    // in ra giá trị từng thuộc tính
    console.log(sinhVien01[thuocTinh]);
}

// đổi giá trị của thuộc tính
sinhVien01.diaChi = "Ha Noi 2"
console.log(sinhVien01);

console.log("\tVí dụ");
// duyệt qua tất cả giá trị của 1 mảng object
// mảng object: sinhVienArr
for (let sinhVien of sinhVienArr) {
    // in ra giá trị của từng phần tử sinh viên trong mảng sinhvienarr
    console.log(sinhVien);
    // đổi địa chỉ
    sinhVien.diaChi = "Ha Noi";
}
console.log(sinhVienArr);