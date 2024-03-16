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

function showNextPage(currentPageId) {
  

  if (currentPageId === 1) {
    document.getElementById('second-page').classList.remove('hidden');
  } else if (currentPageId === 2) {
    document.getElementById('third-page').classList.remove('hidden');
  } else if (currentPageId === 3) {
    document.getElementById('forth-page').classList.remove('hidden');
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
}
function nextpage (){
 if (step===3)
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