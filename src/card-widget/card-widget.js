import "./card-widget.css";
import Form from "./components/validator";

export default class CardWidget {
  constructor(title) {
    if (typeof title) {
      this.element = document.querySelector(`.${title}`);
    } else {
      throw new Error("Ошибка.");
    }
  }

  static get markup() {
    return `<div class="card-widget">
    <ul class="card-list">
        <li class="card-item"><img src="./card-widget/img/card-visa.gif" alt="card-visa" class="image"></li>
        <li class="card-item"><img src="./card-widget/img/card-mastercard.gif" alt="card-mastercard" class="image"></li>
        <li class="card-item"><img src="./card-widget/img/card-amex.gif" alt="card-americanexpress" class="image"></li>
        <li class="card-item"><img src="./card-widget/img/card-discover.gif" alt="card-discoverer" class="image"></li>
        <li class="card-item"><img src="./card-widget/img/card-jcb.gif" alt="card-jcb" class="image"></li>
        <li class="card-item"><img src="./card-widget/img/card-diners.gif" alt="card-diners" class="image"></li>   
        <li class="card-item"><img src="./card-widget/img/mir-logo_norm.png" alt="card-diners" class="image"></li>             
    </ul>
    <form class="form">
        <input class="input" placeholder="Credit card number">
        <button class="btn">Click to Validate</button>
    </form>
</div>`;
  }

  bindToDOM() {
    this.element.innerHTML = CardWidget.markup;
  }
}
