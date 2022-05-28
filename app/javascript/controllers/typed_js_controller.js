import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  static targets = ["headingOne", "headingTwo"]

  initialize() {
    console.log("HI")
    new Typed(this.headingOneTarget, {
      strings: ["Your Movies"],
      typeSpeed: 70,
    });

    new Typed(this.headingTwoTarget, {
      strings: ["your way"],
      typeSpeed: 70,
      startDelay: 1700
    });
  }
}
