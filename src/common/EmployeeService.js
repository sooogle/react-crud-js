export default class EmployeeService {
  static findList() {
    return this.empList;
  }

  static find(id) {
    return this.empList.find(emp => emp.id === id);
  }

  static create(emp) {
    this.empList.push(emp);
  }

  static update(emp) {
    let target = this.empList.find(e => e.id === emp.id);
    if (target) {
      target = emp;
    }
  }

  static delete(id) {
    const tmp = this.empList;
    this.empList = tmp.filter(emp => emp.id !== id);
  }

  static empList = [
    { id: "A0001", name: "Satoh", age: 25, sex: "1" },
    { id: "A0002", name: "Suzuki", age: 25, sex: "2" },
    { id: "A0003", name: "Tanaka", age: 30, sex: "1" },
    { id: "A0004", name: "Matsumoto", age: 27, sex: "1" }
  ];
}
