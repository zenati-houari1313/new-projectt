var step = 1;
const pages = document.querySelectorAll(".page");
const mainBtn = document.getElementById("main-btn");
const secondBtn = document.getElementById("second-btn");
const thirdBtn1 = document.getElementById("third-btn1");
const thirdBtn2 = document.getElementById("third-btn2");
const thirdBtn3 = document.getElementById("third-btn3");
const forthBtn = document.getElementById("forth-btn");
const fifthBtn = document.getElementById("fifth-btn");
const sixthBtn = document.getElementById("sixth-btn");
const seventhBtn = document.getElementById("btn7");


mainBtn.addEventListener("click", function () {
    document.getElementById("second-page").classList.remove("hidden");
});

secondBtn.addEventListener("click", function () {
    document.getElementById("third-page").classList.remove("hidden");
});

thirdBtn1.addEventListener("click", function () {
    document.getElementById("alert").style.opacity = "1";
    document.getElementById("forth-page").classList.remove("hidden");
});

thirdBtn2.addEventListener("click", function () {
    document.getElementById("forth-page").classList.remove("hidden");
});
thirdBtn3.addEventListener("click", function () {
    document.getElementById("forth-page").classList.remove("hidden");
});

forthBtn.addEventListener("click", function () {
    document.getElementById("alert").style.animation =
        "message 1s ease-in forwards";
    document.getElementById("fifth-page").classList.remove("hidden");
});
fifthBtn.addEventListener("click", function () {
   
    if (validateInput()) {
        document.getElementById("sixth-page").classList.remove("hidden");
    }
});
sixthBtn.addEventListener("click", function () {
    
    if (validateInput2()) {
        document.getElementById("seventh-page").classList.remove("hidden");
    }
});

seventhBtn.addEventListener("click", function () {
   
    if (validateInput3()) {
        document.getElementById("eighth-page").classList.remove("hidden");
    }
});

function showNextPage(step) {
    switch (step) {
        case 1:
            document.getElementById("second-page").classList.remove("hidden");

            break;
        case 2:
            document.getElementById("third-page").classList.remove("hidden");

            break;
        case 3:
            document.getElementById("forth-page").classList.remove("hidden");
            break;
        case 4:
            document.getElementById("alert").style.animation =
                "message 1s ease-in forwards";
            document.getElementById("fifth-page").classList.remove("hidden");
            break;
        case 5:
            document.getElementById("fifth-page").classList.remove("hidden");
            
            break;
        case 6:
            if (step === 6 && validateInput()) {
                document
                    .getElementById("sixth-page")
                    .classList.remove("hidden");
            }

            break;
        case 7:
            if (step === 7 && validateInput3()) {
                document
                    .getElementById("seventh-page")
                    .classList.remove("hidden");
            }

            break;
    }
}
function showPrevPage(step) {
    addhidden(step);
    switch (step) {
        case 1:
            document.getElementById("main-page").classList.remove("hidden");
            break;
        case 2:
            document.getElementById("second-page").classList.remove("hidden");
            break;
        case 3:
            document.getElementById("third-page").classList.remove("hidden");
            break;
        case 4:
            document.getElementById("forth-page").classList.remove("hidden");
            break;
        case 5:
            document.getElementById("fifth-page").classList.remove("hidden");
            
            break;
        case 6:
            if (step === 6 && validateInput()) {
                document
                    .getElementById("sixth-page")
                    .classList.remove("hidden");
            }
            break;
        case 7:
            document.getElementById("seventh-page").classList.remove("hidden");
            break;
    }
}

function nextpage() {
    if (step === 7) return;
    step = step + 1;
    showNextPage(step);
}

function prevpage() {
    if (step === 0) return;
    step = step - 1;
    showPrevPage(step);
}

function addhidden(index) {
    pages.forEach((e, i) => {
        if (i == index) return;
        e.classList.add("hidden");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    thirdBtn1.addEventListener("click", function () {
        document.getElementById("checkmark1").classList.remove("hidden2");
    });

    thirdBtn2.addEventListener("click", function () {
        document.getElementById("checkmark2").classList.remove("hidden2");
    });

    thirdBtn2.addEventListener("click", function () {
        this.style.border = "2px solid white";
    });

    thirdBtn1.addEventListener("click", function () {
        this.style.border = "2px solid white";
    });
});

document.getElementById("myForm").addEventListener("input", validateInput);

fifthBtn.addEventListener("click", function () {
    const result = validateInput();
    if (!result) return;
    document.getElementById("sixth-page").classList.remove("hidden");
});

function validateInput(event) {
    var answer = document.getElementById("answer").value.trim();
    var errorMessage = document.getElementById("errorMessage");
    var fifthBtn = document.getElementById("fifth-btn");

    if (answer === "") {
        errorMessage.style.display = "block";
        fifthBtn.style.display = "none";
        const button = document.getElementById("x");
        button.addEventListener("click", function (event) {
            event.preventDefault();
        });
        return false;
    } else {
        errorMessage.style.display = "none";
        fifthBtn.style.display = "block";
        return true;
    }
}

document.getElementById("myForm2").addEventListener("input", validateInput2);

sixthBtn.addEventListener("click", function () {
    const result = validateInput2();
    if (!result) return;
    document.getElementById("seventh-page").classList.remove("hidden");
});

function validateInput2(event) {
    var answer = document.getElementById("answer2").value.trim();
    var errorMessage = document.getElementById("errorMessage2");
    var fifthBtn = document.getElementById("sixth-btn");

    if (answer === "") {
        errorMessage.style.display = "block";
        sixthBtn.style.display = "none";
        const button = document.getElementById("x");
        button.addEventListener("click", function (event) {
            event.preventDefault();
        });
        return false;
    } else {
        errorMessage.style.display = "none";
        sixthBtn.style.display = "block";
        return true;
    }
}
document.getElementById("myForm3").addEventListener("input", validateInput3);

function validateInput3(event) {
    var answer = document.getElementById("answer3").value.trim();
    var errorMessage = document.getElementById("errorMessage3");
    var btn = document.getElementById("btn7");
    var message4 = document.getElementById("error-message4");

    if (answer === "") {
        errorMessage.style.display = "block";
        btn.style.display = "none";
        message4.style.display = "none";
        return false;
    } else if (!isWebsite(answer)) {

        errorMessage.style.display = "none";
       
        btn.style.display = "block"; 
        btn.addEventListener('click',()=>{
        message4.style.display = "block"; 
        btn.style.display="none"
        })
        return false;
    } else {
        errorMessage.style.display = "none";
        btn.style.display = "block"; 
        message4.style.display = "none"; 
        btn.addEventListener('click',()=>{
        message4.style.display = "none"; 
      
            })
        return true;
    }
}

function isWebsite(input) {
    return input.includes(".com") || input.includes(".net") || input.includes(".org");
}
/////////////////////////////////////////////////////////////////////
var countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "Japan", "China", "Brazil"
    // Add more countries as needed
  ];

  var countryInput = document.getElementById('countryInput');
  var countryList = document.getElementById('countryList');

  // Function to display the country list
  function displayCountryList() {
    countryList.innerHTML = '';
    countries.forEach(function(country) {
      var option = document.createElement('div');
      option.textContent = country;
      option.classList.add('countryOption');
      option.addEventListener('click', function() {
        countryInput.value = country;
        countryList.style.display = 'none';
      });
      countryList.appendChild(option);
    });
    countryList.style.display = 'block';
  }

  // Show country list when form is clicked
  document.getElementById('form4').addEventListener('click', function(event) {
    event.stopPropagation();
    displayCountryList();
  });

  // Filter country list based on user input
  countryInput.addEventListener('input', function() {
    var input = this.value.trim().toLowerCase();
    var options = countryList.getElementsByClassName('countryOption');
    Array.from(options).forEach(function(option) {
      var country = option.textContent.toLowerCase();
      if (country.indexOf(input) !== -1) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  });

  // Close country list when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('form')) {
      countryList.style.display = 'none';
    }
  });