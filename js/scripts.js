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
  $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedCounty = $(this).find("input.new-county").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
    newContact.addresses.push(newAddress);
    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
    $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.County + "</li>");
    
    $("input.new-country").val("");
    $("input.new-city").val("");
    $("input.new-street").val("");
    });
});
  
