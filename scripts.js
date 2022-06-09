const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}








function btn_remove(parentDiv, beneficiaryTableDiv){
  var child = document.getElementById(beneficiaryTableDiv);
  var parent = document.getElementById(parentDiv);
  parent.removeChild(child);
}

$(document).ready(function () {
   $("#addBeneficiarybtn").click(function() {
      var newElement = ' <div class="input-group beneficiary_fullname">\
      <label for="beneficiary_fullname">Full Name *</label>\
      <input type="text" name="person_beneficiary_fullname[]" class="person_beneficiary_fullname" id="beneficiary_fullname" style="padding-left:5px;" ></div>'+
            '<div class="input-group beneficiary_address">\
            <label for="beneficiary_address">Address *</label>\
            <input type="text" name="person_beneficiary_address[]"  class="person_beneficiary_address" id="beneficiary_address"  > </div>'+
            '<div class="input-group beneficiary_phone">\
            <label for="beneficiary_phone">Phone *</label>\
            <input type="text" name="person_beneficiary_phone[]" class="person_beneficiary_phone"  id="beneficiary_phone"  ></div>'+
            '<div class="input-group beneficiary_email">\
            <label for="beneficiary_email">Email *</label>\
            <input type="text" name="person_beneficiary_email[]"  class="person_beneficiary_email" id="beneficiary_email" ></div>'+
            '<div class="input-group beneficiary_shareValues">\
            <label for=beneficiary_shareValues>values *</label>\
            <input type="text" class="person_beneficiary_shareValues" name="person_beneficiary_shareValues[]" ></div>';
      $( "#beneficiaryTable" ).append( $(newElement) );
   });
      
  
      
       
      var x = 1; 
      var max_fields = 10; //maximum input boxes allowed
     $("#addBankbtn").click(function(e) {
     
         e.preventDefault();
        if (x <= max_fields) 
        { 
         var newElement = ' <div class="input-group bankName">'+
        '<label for="bankname">Bank Name *</label>'+
         '<select type="text" name="person_bankName[]" class="person_bankName" id="person_bankName"  placeholder="Select Bank" >'+
         '<option value="">--Select Bank--</option>' +
         '<option value="Access Bank">Access Bank</option>' +
         '<option value="Diamond Bank">Diamond Bank</option>' +  
         '<option value="EcoBank">EcoBank</option>'   +
         '<option value="FirstBank">First Bank</option> ' +
         '<option value="FCMB Bank">FCMB Bank</option>' +  
         '<option value="Fidelity Bank">Fidelity Bank</option> ' +
         '<option value="GTBank">GTBank</option>' +  
         '<option value="Stanbic IBTC Bank">Stanbic IBTC Bank</option>' +
         '<option value="Sterling Bank">Sterling Bank</option>' +
         '<option value="Unity Bank">Unity Bank</option>' +
         '<option value="Union Bank">Union Bank</option>' + 
         '<option value="UBA Bank">UBA Bank</option>' + 
         '<option value="Wema Bank">Wema Bank</option>' +
         '<option value="Zenith Bank">Zenith Bank</option>' +
         '</select>'+
       '</div>' +
      ' <div class="input-group accountNumber">'+
         '<label for="accounnumber">Account Number *</label>'+
         '<input type="number" name="person_accountNumber[]" class="person_accountNumber"  id="person_accountNumber"  placeholder="Account Number"/>'+
       '</div>'+
       '<div class="input-group accountBranch">'+
         '<label for="branch">Branch *</label>'+
         '<input type="text" name="person_accountBranch[]" class="person_accountBranch" id="person_accountBranch" />'+
       '</div>';
        
         $( "#bankDetails" ).append( $(newElement) );
         x++;
       }
       else{
           alert("maximum bank reached .....")
       }
        });
     
      });

      // Radio Toggle
      const box = document.getElementById('hidden-row');
    
      function handleRadioClick() {
        if (document.getElementById('show').checked) {
          box.style.display = 'table-row';
          document.getElementById("table-design").innerHTML = "₦35,000";
        } else {
          box.style.display = 'none';
          document.getElementById("table-design").innerHTML = "₦15,000";
        }
      } 
    
      const radioButtons = document.querySelectorAll('input[name="yes"]');
      
      radioButtons.forEach(radio => {
        radio.addEventListener('click', handleRadioClick);
      
    });

  

  // SECOND STEP  (personal Information)


  
 var btnDisplay = document.querySelector(".btn-display");
 var person_title = document.querySelector(".person_title");
 var person_surname = document.querySelector(".person_surname");
 var person_othername = document.querySelector(".person_othername");
 var person_firstname = document.querySelector(".person_firstname");


 

deactivate()

function activate() { 
  btnDisplay.disabled = false;
  btnDisplay.style.cursor =  "pointer";

}
function deactivate() {
  btnDisplay.disabled = true;
  btnDisplay.style.cursor =  "not-allowed";
 

}



function check() { 
  if(person_title.value != '' && person_surname.value != '' && person_othername.value != '' && person_firstname.value != '') { 
    activate()
  } else { 
    deactivate();
  }
}
person_title.addEventListener('input', check)
person_surname.addEventListener('input', check)
person_othername.addEventListener('input', check)
person_firstname.addEventListener('input', check)



// Third step {Name of Spouse $ Beneficiary}
 var btnDisplay2 = document.querySelector(".btn-display2");
 var person_nameofspouse = document.querySelector(".person_nameofspouse");
 var person_address = document.querySelector(".person_address");
 var person_noofdependents = document.querySelector(".person_noofdependents");
 var person_namesofdependents = document.querySelector(".person_namesofdependents");
 var person_beneficiary_fullname = document.querySelector(".person_beneficiary_fullname");
 var person_beneficiary_address = document.querySelector(".person_beneficiary_address");
 var person_beneficiary_phone = document.querySelector(".person_beneficiary_phone");
 var person_beneficiary_email = document.querySelector(".person_beneficiary_email");
 var person_beneficiary_shareValues= document.querySelector(".person_beneficiary_shareValues");


deactivate2()

function activate2() { 
   btnDisplay2.disabled = false;
   btnDisplay2.style.cursor = "pointer";

}
function deactivate2() {
   btnDisplay2.disabled = true;
   btnDisplay2.style.cursor =  "not-allowed";
 

}

function check2() { 
  if(person_nameofspouse.value != '' && person_address.value != '' && person_noofdependents.value != '' && person_namesofdependents.value != '' && person_beneficiary_fullname != '' && person_beneficiary_address != '' && person_beneficiary_phone != '' && person_beneficiary_email != '' && person_beneficiary_shareValues != '') { 
    activate2()
  } else { 
    deactivate2();
  }
}

person_nameofspouse.addEventListener('input', check2)
person_address.addEventListener('input', check2)
person_noofdependents.addEventListener('input', check2)
person_namesofdependents.addEventListener('input', check2)
person_beneficiary_fullname.addEventListener('input', check2)
person_beneficiary_address.addEventListener('input', check2)
person_beneficiary_phone.addEventListener('input', check2)
person_beneficiary_email.addEventListener('input', check2)
person_beneficiary_shareValues.addEventListener('input', check2)





// FOURTH STEP (Asset Detail)
const btnDisplay3 = document.querySelector(".btn-display3");
const person_psa = document.querySelector(".person_psa");
const person_rsanumber = document.querySelector(".person_rsanumber");
const person_bankname = document.querySelector(".person_bankname");
const person_accountNumber = document.querySelector(".person_accountNumber");
const person_accountBranch = document.querySelector(".person_accountBranch");


deactivate3()

function activate3() { 
 btnDisplay3.disabled = false;
 btnDisplay3.style.cursor = "pointer";



}
function deactivate3() {
 btnDisplay3.disabled= true;
 btnDisplay3.style.cursor = "not-allowed";


}

function check3() { 
 if(person_psa.value != '' && person_rsanumber.value != '' && person_bankname.value != '' && person_accountNumber.value != '' && person_accountBranch.value != '') { 
   activate3()
 } else { 
   deactivate3();
 }
}

person_psa.addEventListener('input', check3)
person_rsanumber.addEventListener('input', check3)
person_bankname.addEventListener('input', check3)
person_accountNumber.addEventListener('input', check3)
person_accountBranch.addEventListener('input', check3)


// Fifth

$(".checkbox").click(function () {
  //check if checkbox is checked
  if ($(this).is(":checked")) {

      $(".pay_button").removeAttr("disabled"); //enable input
      $(".btn_submit").removeAttr("disabled");
      $(".pay_button").css("background-color", "#5091CD");
      $(".btn_submit").css("background-color", "#5091CD");
      $(".pay_button").css("cursor", "pointer");
      $(".btn_submit").css("cursor", "pointer");
  } else {
      $(".pay_button").attr("disabled", true); //disable input
      $(".btn_submit").attr("disabled", true);
      $(".pay_button").css("background-color", "#cdd5da");
      $(".btn_submit").css("background-color", "#cdd5da");
      $(".pay_button").css("cursor", "not-allowed");
      $(".btn_submit").css("cursor", "not-allowed");
  }
});


