
var vREQ = new Array (12)       // модель очереди на обработку
				// (внутренний массив переменных)	
var vPR1, vPR2, vPR3, vPR4	// проценты по типам (вероятности)
var vRand			// для получения случайных чисел
var vNext			// для моделирования очередного "клиента"
var vvI				// рабочая переменная

function fStart()
{
// "чистим очередь" - сбрасываем значения переменных внутреннего массива в 0
  for (vvI = 0; vvI <= 12; vvI++) { vREQ[vvI] = 0; };
// "чистим очередной эапрос"
   vNext = 0
// устанавливаем вероятности запросов разных типов
 vPR1=0.6;  vPR2 = 0.2;  vPR3=0.1;  vPR4=0.1;
// визуализация модели
   fVisual()
}


function fNext()
{
 // fSeeImages();

   vRand = Math.random()
       if (vRand < vPR1) vNext = 1
       if (vRand >= vPR1 && vRand < vPR1+vPR2) vNext = 2
       if (vRand >= vPR1+vPR2 && vRand < vPR1+vPR2+vPR3) vNext = 3
       if (vRand >= vPR1+vPR2+vPR3) vNext = 4
       fVisual();
}


function fTo(){
   for (vvI = 0; vvI < 12; vvI++)
   { if (vREQ[vvI] == 0)
     { if (vNext==1) vREQ[vvI] = 1
       if (vNext==2) vREQ[vvI] = 2
       if (vNext==3) vREQ[vvI] = 3
       if (vNext==4) vREQ[vvI] = 4
       break;
     }

   }
    if (vvI == 8) alert ("Стак полон")
    vNext = 0
    fVisual();

}


function fFrom()
{
   for (vvI = 0; vvI < 11; vvI++)
   { vREQ[vvI] = vREQ[vvI+1]
   }
        vREQ[11] = 0;
	fVisual();
}



function fVisual()
{
   if (vNext == 0) document.images[0].src = "111.jpg"
   if (vNext == 1) document.images[0].src = "21.gif"
   if (vNext == 2) document.images[0].src = "22.gif"
   if (vNext == 3) document.images[0].src = "1.gif"
   if (vNext == 4) document.images[0].src = "2.gif"


  for (vvI = 0; vvI < 12; vvI++)
  { 

    if (vREQ[vvI] == 0) document.images[vvI+1].src ="pusto.jpg";
    if (vREQ[vvI] == 1) document.images[vvI+1].src ="21.gif"
    if (vREQ[vvI] == 2) document.images[vvI+1].src ="22.gif";
    if (vREQ[vvI] == 3) document.images[vvI+1].src ="1.gif";
    if (vREQ[vvI] == 4) document.images[vvI+1].src ="2.gif";
  }
}


function fSeeImages()
{
 for (vvI = 0; vvI < 10; vvI++)
alert (document.images[vvI].name) 
}

