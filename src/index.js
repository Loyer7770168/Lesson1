function Student(firstName, lastName, birthYear, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.course = course;
  this.grades = [];
  this.attendance = [];

  this.addGrade = function (grade) {
    this.grades.push(grade);
  };


  this.addAttendance = function (attended) {
    this.attendance.push(attended);
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  };

  this.getAverageAttendance = function () {
    if (this.attendance.length === 0) {
      return 0;
    }
    const sum = this.attendance.reduce((total, attended) => total + attended, 0);
    return (sum / this.attendance.length) * 100;
  };

  this.getNumberOfLectures = function () {
    return this.attendance.length;
  };


  this.changeCourse = function (newCourse) {
    this.course = newCourse;
  };

  this.getStudentInfo = function () {
    return `Ім'я: ${this.firstName} ${this.lastName}, Рік народження: ${this.birthYear}, Курс: ${this.course}, Оцінки: ${this.grades.join(', ')}, Відвідування: ${this.attendance.join(', ')}`;
  };
}

const student1 = new Student("Іван", "Петров", 1998, 2);

student1.addGrade(85);
student1.addGrade(92);
student1.addAttendance(1);
student1.addAttendance(1);

console.log(student1.getStudentInfo());
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Середнє відвідування: ${student1.getAverageAttendance()}%`);
console.log(`Кількість пройдених занять: ${student1.getNumberOfLectures()}`);



