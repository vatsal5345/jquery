$(document).ready(function(){
    $("#fname").blur(function(){
        let fname = $('#fname').val();
        let fname_pattern = "[a-zA-Z]{2,30}$";

        if(!fname.match(fname_pattern)){
        let text;
        text = 'Enter valid First name';
        $('#OP1').text(text); 
        }
        
    });
    $("#lname").blur(function(){
      let lname = $('#lname').val();
      let lname_pattern = "[a-zA-z]{2,30}$";
      if(!lname.match(lname_pattern)){
        let text;
        text = 'Enter valid Last name'
        $('#OP2').text(text);
      }
    });
    $("#staddress").blur(function(){
      let address = $('#staddress').val();
      let address_pattern = "[a-zA-Z0-9]{3,600}$";
      if(!address.match(address_pattern)){
        let text;
        text = 'Enter valid address'
        $('#OPa').text(text);
      }
    });
    $("#staddress2").blur(function(){
      let address = $('#staddress2').val();
      let address_pattern = "[a-zA-Z0-9]{3,600}$";
      if(!address.match(address_pattern)){
        let text;
        text = 'Enter valid address'
        $('#OP3').text(text);
      }
    });
    $("#city").blur(function(){
      let city = $('#city').val();
      let city_pattern = "[a-zA-Z]$";
      if(!city.match(city_pattern)){
        let text;
        text = 'Enter valid city name'
        $('#OP4').text(text);
      }
    });
    $("#state").blur(function(){
      let state = $('#state').val();
      let state_pattern = "[a-zA-Z]$";
      if(!state.match(state_pattern)){
        let text;
        text = 'Enter valid state name'
        $('#OP5').text(text);
      }
    });
    $("#zipcode").blur(function(){
      let zipcode = $('#zipcode').val();
      let zipcode_pattern = "^[1-9]{1}[0-9]{5}$";
      if(!zipcode.match(zipcode_pattern)){
        let text;
        text = 'Enter valid 6 digit zipcode'
        $('#OP6').text(text);
      }
    });
    $("#phone").blur(function(){
      let phone = $('#phone').val();
      let phone_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
      if(!phone.match(phone_pattern)){
        let text;
        text = 'Enter valid phone number'
        $('#OP7').text(text);
      }
    });
    $("#email").blur(function(){
      let email = $('#email').val();
      let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
      if(!email.match(email_pattern)){
        let text;
        text = 'Enter valid Email-id'
        $('#OP8').text(text);
      }
    });
    $("#feedback").blur(function(){
      let feedback = $('#feedback').val();
      let feedback_pattern = ".{3,100}";
      if(!feedback.match(feedback_pattern)){
        let text;
        text = 'please give feedback to us...'
        $('#OP9').text(text);
      }
    });
    $("#suggestion").blur(function(){
      let suggestion = $('#suggestion').val();
      let suggestion_pattern = ".{3,100}";
      if(!suggestion.match(suggestion_pattern)){
        let text;
        text = 'please give suggestion to us...'
        $('#OP10').text(text);
        
      }
    });
    $("#submit").click(function(event) {
      event.preventDefault();    
      if($('input[type=radio][name=gender]:checked').length == 0)
      {
          let text = 'Please select any one';
          $('#genderErr').text(text); 
      }
       
    });
});