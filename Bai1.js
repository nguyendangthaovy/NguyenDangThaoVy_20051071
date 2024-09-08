 // Hàm tính BMI
 function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Dữ liệu 1
const markMass1 = 78; // khối lượng tính bằng kg
const markHeight1 = 1.69; // chiều cao tính bằng mét
const johnMass1 = 92; // khối lượng tính bằng kg
const johnHeight1 = 1.95; // chiều cao tính bằng mét

const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);
const markHigherBMI1 = markBMI1 > johnBMI1;

// Hiển thị kết quả cho dữ liệu 1
document.getElementById('markBMI1').textContent = `BMI của Mark: ${markBMI1.toFixed(2)}`;
document.getElementById('johnBMI1').textContent = `BMI của John: ${johnBMI1.toFixed(2)}`;
document.getElementById('markHigherBMI1').textContent = `Mark có BMI cao hơn John: ${markHigherBMI1}`;

// Dữ liệu 2
const markMass2 = 95; // khối lượng tính bằng kg
const markHeight2 = 1.88; // chiều cao tính bằng mét
const johnMass2 = 85; // khối lượng tính bằng kg
const johnHeight2 = 1.76; // chiều cao tính bằng mét

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
const markHigherBMI2 = markBMI2 > johnBMI2;

// Hiển thị kết quả cho dữ liệu 2
document.getElementById('markBMI2').textContent = `BMI của Mark: ${markBMI2.toFixed(2)}`;
document.getElementById('johnBMI2').textContent = `BMI của John: ${johnBMI2.toFixed(2)}`;
document.getElementById('markHigherBMI2').textContent = `Mark có BMI cao hơn John: ${markHigherBMI2}`;