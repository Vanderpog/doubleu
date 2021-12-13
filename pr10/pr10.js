var vREQ = new Array (8)
var vREQ1 = new Array (8)        // модель очереди на обработку
				// (внутренний массив переменных)	
var vPR1, vPR2, vPR3, vPR4	// проценты по типам (вероятности)
var vRand	= 0		// для получения случайных чисел
var vNext			// для моделирования очередного "клиента"
var vvI				// рабочая переменная
var nolik = 0
var nolik1 = 0
clickk = 0
var vRizhiyiIn, vCherniyiIn, vSeriyeIn, vBeliyiIn
var startik = 0

function fStart()
{
// "чистим очередь" - сбрасываем значения переменных внутреннего массива в 0
  for (vvI = 0; vvI <= 8; vvI++) { vREQ[vvI] = 0; };
  for (vvI = 0; vvI <= 8; vvI++) { vREQ1[vvI] = 0; };
// "чистим очередной эапрос"
   vNext = 0
// устанавливаем вероятности запросов разных типов
 vPR1=0.6;  vPR2 = 0.2;  vPR3=0.1;  vPR4=0.1;
 vRizhiyi=0; vCherniyi=0; vSeriye=0; vBeliyi=0;
// визуализация модели
nolik = 0

   fVisual()
}


function fNext()
{
 // fSeeImages();

   vRand = Math.random()
       if (vRand < vPR1) 
          { vNext = 1; vRizhiyi++; }
       if (vRand >= vPR1 && vRand < vPR1+vPR2)
          { vNext = 2; vCherniyi++;}
       if (vRand >= vPR1+vPR2 && vRand < vPR1+vPR2+vPR3)
          { vNext = 3; vSeriye++;}
       if (vRand >= vPR1+vPR2+vPR3)
          { vNext = 4; vBeliyi++;}
      if (clickk == 16) {
      $('.cto').removeClass('stop1')}
      if(clickk < 16){$('.cto').addClass('stop1')}
       fVisual();
       startik = 1;

}


function fTo(){
	if(nolik==0){
   for (vvI = 0; vvI < 8; vvI++)
   if (vREQ[vvI] == 0)
   {vREQ[vvI] = vNext; 
	break;}
   nolik = 1
}
	else{
   for (vvI = 0; vvI < 8; vvI++)
   if (vREQ1[vvI] == 0)
   {vREQ1[vvI] = vNext; 
	break;}
   nolik = 0
}
    clickk++
    vNext = 0;
    fVisual();
    startik = 0
$('.cto').removeClass('stop1');
}

//alert ("В очередях больше нет места( Ждем пока кто нибудь выйдет")

function fFrom()
{

   if (nolik == 1){
   for (vvI = 0; vvI < 8; vvI++)
    vREQ[vvI] = vREQ[vvI+1]
        vREQ[7] = 0;
		nolik1 = 1;
    $('.cto').removeClass('stop1');
    nolik = 0;
   }
   
    else
   { for (vvI = 0; vvI < 8; vvI++)
		vREQ1[vvI] = vREQ1[vvI+1]
        vREQ1[7] = 0;
		nolik1 = 0;
    $('.cto').removeClass('stop1');
    nolik = 1;
   }
  clickk--
  $('.cto').addClass('stop1');
	fVisual();
}



function fVisual()
{
   d_Rnd.innerText = "Случайное число: " + vRand.toFixed(2)
   d_Vorob.innerText = "Рыжих: " + vRizhiyi
   d_Sinica.innerText = "Черных: " + vCherniyi
   d_Golub.innerText = "Серых:" + vSeriye
   d_Vorona.innerText = "Белых: " + vBeliyi

   if (vNext == 0) document.images[0].src = "222.jpg"
   if (vNext == 1) document.images[0].src = "21.gif"
   if (vNext == 2) document.images[0].src = "22.gif"
   if (vNext == 3) document.images[0].src = "1.gif"
   if (vNext == 4) document.images[0].src = "2.gif"


  for (vvI = 0; vvI < 8; vvI++)
  { 
//alert (vvI + "__" + vREQ[vvI] + "__" + document.images[vvI].name)
	document.images[vvI+1].src = ""
    if (vREQ[vvI] == 0) document.images[vvI+1].src="222.jpg";
    if (vREQ[vvI] == 1) document.images[vvI+1].src="21.gif";
    if (vREQ[vvI] == 2) document.images[vvI+1].src="22.gif";
    if (vREQ[vvI] == 3) document.images[vvI+1].src="1.gif";
    if (vREQ[vvI] == 4) document.images[vvI+1].src="2.gif";
  }
    for (vvI = 0; vvI < 8; vvI++)
  { document.images[vvI+1+8].src = ""
//alert (vvI + "__" + vREQ[vvI] + "__" + document.images[vvI].name)
    if (vREQ1[vvI] == 0) document.images[vvI+1+8].src="222.jpg";
    if (vREQ1[vvI] == 1) document.images[vvI+1+8].src="21.gif";
    if (vREQ1[vvI] == 2) document.images[vvI+1+8].src="22.gif";
    if (vREQ1[vvI] == 3) document.images[vvI+1+8].src="1.gif";
    if (vREQ1[vvI] == 4) document.images[vvI+1+8].src="2.gif";
  }

}
