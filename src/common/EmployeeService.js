export default class EmployeeService {
  static findList() {
    return this.empList.slice();
  }

  static find(id) {
    return Object.assign({}, this.empList.find(x => x.id === id));
  }

  static create(emp) {
    this.empList.push(emp);
  }

  static update(emp) {
    this.empList = this.empList.map(x => (x.id === emp.id ? emp : x));
  }

  static delete(id) {
    this.empList = this.empList.filter(x => x.id !== id);
  }

  static empList = [
    { id: "A0001", name: "Satoh", age: "25", sex: "1" },
    { id: "A0002", name: "Suzuki", age: "25", sex: "2" },
    { id: "A0003", name: "Tanaka", age: "30", sex: "1" },
    { id: "A0004", name: "Matsumoto", age: "27", sex: "1" }
  ];
}
