var step=0;
const pages=document.querySelectorAll('.page')
document.getElementById('main-btn').addEventListener('click', function() {
  document.getElementById('second-page').classList.remove('hidden');
});

document.getElementById('second-btn').addEventListener('click', function() {
  document.getElementById('third-page').classList.remove('hidden');
});
document.getElementById('third-btn1').addEventListener('click', function() {
  document.getElementById('forth-page').classList.remove('hidden');
});
document.getElementById('third-btn2').addEventListener('click', function() {
  document.getElementById('forth-page').classList.remove('hidden');
});
document.getElementById('third-btn3').addEventListener('click', function() {
  document.getElementById('forth-page').classList.remove('hidden');
});
document.getElementById('forth-btn').addEventListener('click', function() {
  document.getElementById('fifth-page').classList.remove('hidden');
});
document.getElementById('fifth-btn').addEventListener('click', function() {
  document.getElementById('sixth-page').classList.remove('hidden');
});


function showNextPage(currentPageId) {
  

  if (currentPageId === 1) {
    document.getElementById('second-page').classList.remove('hidden');
  } else if (currentPageId === 2) {
    document.getElementById('third-page').classList.remove('hidden');
  } else if (currentPageId === 3) {
    document.getElementById('forth-page').classList.remove('hidden');
  }
  else if (currentPageId === 4) {
    document.getElementById('forth-page').classList.remove('hidden');
  }
  else if (currentPageId === 5) {
    document.getElementById('fifth-page').classList.remove('hidden');
  }
  else if (currentPageId === 6) {
    document.getElementById('sixth-page').classList.remove('hidden');
  }
}

function showPrevPage(currentPageId) {
  addhidden(currentPageId)
  if (currentPageId === 1) {
    document.getElementById('main-page').classList.remove('hidden');
  } else if (currentPageId === 2) {
    document.getElementById('second-page').classList.remove('hidden');
  } else if (currentPageId === 3) {
    document.getElementById('third-page').classList.remove('hidden');
  }
  else if (currentPageId === 4) {
    document.getElementById('forth-page').classList.remove('hidden');
  }
  else if (currentPageId === 5) {
    document.getElementById('fifth-page').classList.remove('hidden');
  }
  else if (currentPageId === 6) {
    document.getElementById('sixth-page').classList.remove('hidden');
  }


  
}
function nextpage (){
 if (step===7)
 return ;
step=step+1;
showNextPage(step);

}
function prevpage (){
  if (step===0)
  return ;
 step=step-1;
 showPrevPage(step);
 
 }
 function addhidden (index)
 {
  pages.forEach((e,i)=>{
    if (i==index)
    return;
  e.classList.add('hidden')
  })
 }
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('third-btn1').addEventListener('click', function() {
    document.getElementById('checkmark1').classList.remove('hidden2');
  });
 
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('third-btn2').addEventListener('click', function() {
    document.getElementById('checkmark2').classList.remove('hidden2');
  });
 
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  var answer = document.getElementById("answer").value.trim();
  var errorMessage = document.getElementById("errorMessage");


  if (answer === "") {
    errorMessage.style.display = "block";
    event.preventDefault(); 
    document.getElementById('fifth-btn').style.display="none";
}  else {
    errorMessage.style.display = "none";
    document.getElementById('fifth-btn').style.display="block";
}
});





