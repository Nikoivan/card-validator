export default class Validator {
  constructor(parent) {
    this.form = parent.querySelector(".form");
    this.input = this.form.querySelector("input");
    this.btn = this.form.querySelector(".btn");

    this.onBtnClick = this.onBtnClick.bind(this);

    this.form.addEventListener("submit", this.onBtnClick);
  }

  onBtnClick(e) {
    e.preventDefault();

    const value = this.input.value;
    const test = this.validateLength(value);
    console.log(test);
  }

  validateLength(value) {
    return /^\d{15,16}$/.test(value);
  }

  validateType(value) {
    return typeof value === number;
  }
}
