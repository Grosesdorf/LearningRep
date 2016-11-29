// // Работа с %
// // 1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

// var a = 10;
// var b = 3;

// var res = a % b;

// document.write(res);

// // 2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// var a, b; 
// var res = a % b;
// if (res == 0){
// 	document.write('Делится. Результат деления: ' + res);
// }
// else{
// 	document.write('Делится с остатком. Остаток от деления: ' + res);	
// }

// // Работа с модулем
// // Для решения задач данного блока вам понадобятся следующие методы: Math.abs.

// // 3. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

// var a = 2;
// var b = 10;

// document.write(Math.abs(a - b));

// // 4. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в 
// // переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

// var a = 6;
// var b = 1;
// var res = Math.abs(a - b);
// document.write(res);

// // Работа со степенью и корнем
// // Для решения задач данного блока вам понадобятся следующие методы: Math.pow, Math.sqrt.

// // 5. Возведите 2 в 10 степень. Результат запишите в переменную st.
// var base = 2;
// var exp = 10;
// var st = Math.pow(base, exp);

// document.write(st);

// // 6. Найдите квадратный корень из 245.
// var a = 245;

// document.write(Math.sqrt(a));
// // 7. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы квадратов его элементов. Для решения воспользуйтесь циклом for.
// var arr = [4, 2, 5, 19, 13, 0, 10];
// var tmp = 0;

// for (var i = 0; i < arr.length; i++){
// 	tmp += Math.pow(arr[i], 2); 
// }

// document.write(Math.sqrt(tmp));

// // Работа с методами округления
// // Для решения задач данного блока вам понадобятся следующие методы: Math.round, Math.ceil, Math.floor, toFixed, toPrecision.

// // 8. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// var a = 379;
// var res = Math.sqrt(a);
// document.write(res.toFixed());
// document.write(res.toFixed(1));
// document.write(res.toFixed(2));

// // 9. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// var a = 587;
// var res = Math.sqrt(a);
// var resF = Math.floor(res);
// var resC = Math.ceil(res);

// var obj = {
// 	'floor' : resF,
// 	'ceil' : resC
// }

// document.write(res);
// document.write(obj.floor);
// document.write(obj.ceil);

// // Нахождение максимального и минимального числа
// // Для решения задач данного блока вам понадобятся следующие методы: Math.max, Math.min.

// // 10. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// var arr = [4, -2, 5, 19, -130, 0, 10];

// document.write(Math.max.apply(null, arr));
// document.write(Math.min.apply(null, arr));

// Работа с рандомом
// Для решения задач данного блока вам понадобятся следующие методы: Math.random.

// // 11. Выведите на экран случайное число от 1 до 100.

// document.write(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

// // 12. Сделайте так, чтобы каждый раз при обновлении страницы на экран выводилась случайным образом одна из трех картинок.

// function randomImg(){
// 	var num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// 	document.write('<img src="images/' + num + '.png" width="100" height="100">');
// }

// randomImg();

// // 13. Заполните массив 10-ю случайными числами. (Подсказка: нужно воспользоваться циклами for или while).

// var arr = [];

// for (var i = 0; i < 10; i++){
// 	arr.push(Math.floor(Math.random() * 100));
// 	// or
// 	// arr[i] = Math.floor(Math.random() * 100);
// }

// // Задачи
// // 14. Напишите скрипт, который будет находить корни квадратного уравнения.

// function quadratic(a, b, c){
// 	var a = a;
// 	var b = b;
// 	var c = c;

// 	if ((a === undefined && b === undefined && c === undefined) || (a == 0 && b == 0 && c == 0)){
// 		document.write("Параметры не определены. Проверьте ввод параметров");
// 		return false;
// 	} 

// 	if (a == 0){
// 		document.write("Уравнение линейное");
// 		return false;
// 	}
// 	if (a == 1 && b != 0 && (c == 0 || c === undefined)){
// 		document.write("Корни уравнения: х1 = 0, х2 = " + b);
// 		return true;
// 	}
// 	if (a == 1 && (b == 0 || b === undefined) && c != 0){
// 		var tmp = Math.sqrt(c);
// 		document.write("Корни уравнения: х1 = -" + tmp.toFixed(2) + ", х2 = " + tmp.toFixed(2));
// 		return true;
// 	}
// 	if (a != 0 && b != 0 && c != 0){
// 		var x1 = 0;
// 		var x2 = 0;
// 		var D = Math.pow(b, 2) - (4 * a * c);
// 		if (D > 0){
// 			var sqrtD = Math.sqrt(D);
// 			x1 = (-b + sqrtD) / (2 * a);
// 			x2 = (-b - sqrtD) / (2 * a);
// 			document.write("Корни уравнения: х1 = " + x1.toFixed(2) + ", х2 = " + x2.toFixed(2));
// 			return true;
// 		}
// 		else if (D == 0){
// 			x = -b / (2 * a);
// 			document.write("Корни уравнения: х1 = " + x1.toFixed(2) + ", х2 = " + x2.toFixed(2));
// 			return true;
// 		}else{
// 			document.write("Корней нет...");
// 			return true;
// 		}

// 	}

// }

// quadratic();

// // 15. Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// function factorial(num) {
// 	var num = num;
// 	var f = (num != 1) ? num * factorial(num - 1) : 1;
// 	return f;
// }

// document.write(factorial(5));

// // 16. Напишите скрипт, который проверяет, является ли данное число простым (простое число - это то, которое делится только на 1 и на само себя).

// function isProstoe(num){
// 	var flag = 0;
// 	for (var i = 2; i < num; i++){
// 		if ((num % i) == 0){
// 			flag ++;
// 		}
// 	}
// 	if (flag == 0){
// 		document.write("Число простое");
// 		return true;
// 	}else{
// 		document.write("Число не совсем простое");
// 		return false;
// 	}
// }

// isProstoe(5);

// // 17. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

// var arr = [12, 15, 20, 25, 59, 79];
// var tmp = 0;
// for (var i = 0; i < arr.length; i++){
// 	tmp += arr[i];
// }
// var mean = tmp / arr.length;

// console.log(mean);

// // 18. Напишите скрипт-калькулятор единого налога. Налог считается так: если вы заработали менее, чем ставка stavka этого налога, умноженная на 30 - то платите ставку. 
// // Если же вы заработали более, чем 30*stavka, то платите не только ставку налога, но и 5% от той суммы, на которую вы превысили 30*stavka.

// var salary = 500;
// var stavka = 15;
// var tax = 0;

// if (salary < stavka * 30){
// 	console.log("Tax is " + stavka);
// }
// else{
// 	tax = stavka + (salary - stavka) / 100 * 5;
// 	console.log("Tax is " + tax.toFixed(2));	
// }

// // 19. Напишите скрипт-калькулятор оплаты за электроэнергию. Сумма считается так: если вы потратили за месяц менее 150 киловатт, то сумма считается по одной ставке $summ1 за 1 киловатт, 
// // всё, что больше 150 и меньше 300 киловатт считается по ставке $summ2, а все киловатты после 300 - по ставке $summ3.

// var facts = 180;
// var do150 = 0.70;
// var ot150do300 = 1.30;
// var ot300 = 1.65;

// if (!isNaN(parseFloat(facts)) && isFinite(facts) && facts > 0){
// 	if (facts <= 150){
// 		console.log("Необходимо оплатить " + facts*do150 + " денег");
// 	}
// 	else if(facts >= 151 && facts <= 300){
// 		console.log("Необходимо оплатить " + facts*ot150do300 + " денег");	
// 	}
// 	else{
// 		console.log("Необходимо оплатить " + facts*ot300 + " денег");
// 	}
// }else {
// 	console.log("Проверьте показания счетчика...")
// }

// // 20. Напишите скрипт, который найдет все простые числа в заданном промежутке. Проверьте его работу на промежутке от 1 до 1000.

// function arrSimple(start, finish){
// 	var arr = [];
// 	for (var k = start; k <= finish; k++){
// 		var flag = 0;
// 		for (var i = 2; i < k; i++){
// 			if ((k % i) == 0){
// 				flag ++;
// 			}
// 		}
// 		if (flag == 0) arr.push(k);
// 	}

// 	console.log(arr);	
// 	return arr;
// }

// arrSimple(1, 1000);

// // 21. Напишите скрипт, который реализует алгоритм 'решето Эратосфена' для поиска простых чисел в заданном промежутке. Алгоритм найдите самостоятельно в поисковых системах.

// function arrSimple(start, finish){

// 	var arr = [];

// 	for (var i = start; i <= finish; i++){
// 	  arr[i] = i;
// 	}

// 	var p = 2;

// 	do {
// 	  for (i = 2 * p; i <= finish; i += p){
// 	    arr[i] = false;
// 	  }
// 	  for (i = p + 1; i < finish; i++){
// 	    if (arr[i]){
// 	    	break
// 	    };
// 	  }
// 	  p = i;
// 	} 
// 	while (p * p < finish);

// 	for (var i = 0; i < arr.length; i++){
// 		if (arr[i] === false){
// 			delete arr[i];
// 		}
// 	}

// 	console.log(arr);
// }

// arrSimple(1, 1000);
// //22. Напишите скрипт, который будет разлагать заданное число на простые множители.

// var arrSimple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
// var arrSimpleDiv = [];

// var x = 2356;
// var index = 0;

// while (true){
// 	if (x > 1){
// 		if (x % arrSimple[index] == 0){
// 			x = x / arrSimple[index];
// 			arrSimpleDiv.push(arrSimple[index]);
// 		}
// 		else{
// 			index++;
// 		}
// 	}
// 	else{
// 		break;
// 	}	
// }

// console.log(arrSimpleDiv);

// 23. Напишите скрипт, который будет находить коэффициенты a, b и c квадратного уравнения для данных корней. То есть скрипт является генератором квадратных уравнений. 
// Подсказка: погуглите про дискриминант и теорему Виета.

// 24. Напишите скрипт, который будет находить тройки целых чисел, удовлетворяющих теореме Пифагора. Решите задачу двуми способами: 'в лоб' и воспользовавшись специальными формулами.
