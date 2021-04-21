import { Controller } from "stimulus"

export default class extends Controller {
  initialize(){
    console.log("hi books")
  }

  validate_form(){
    $("#books-form").validate();
  }
}
