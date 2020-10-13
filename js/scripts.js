// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
Contact.prototype.fullName = function(){
    return this.firstName + " "+ this.lastName
}
  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();

  
      var inputtedFirstName = $("input#new-first-name").val();

      var firstName = $("input#new-first-name").val()

      var inputtedLastName = $("input#new-last-name").val();

      
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      
    //   console.log("new-contact", newContact.fullName())

      $("ul#contacts").append(
          "<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");


      $("#contacts").last().click(function() {
          $("#show-contact").show();
          $("#show-contact h2").text(newContact.fullName);
          $(".first-name").text(newContact.firstName);
          $(".last-name").text(newContact.lastName);
        });  
    });

  }); 