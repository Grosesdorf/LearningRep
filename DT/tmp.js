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

//!!! 23. Напишите скрипт, который будет находить коэффициенты a, b и c квадратного уравнения для данных корней. То есть скрипт является генератором квадратных уравнений. 
// Подсказка: погуглите про дискриминант и теорему Виета.

//!!! 24. Напишите скрипт, который будет находить тройки целых чисел, удовлетворяющих теореме Пифагора. Решите задачу двуми способами: 'в лоб' и воспользовавшись специальными формулами.

// // Работа с регистром символов
// // Для решения задач данного блока вам понадобятся следующие методы: toUpperCase, toLowerCase.
// // 1. Дана строка 'js'. Сделайте из нее строку 'JS'. Показать решение.

// var str = "js";
// str = str.toUpperCase();
// console.log(str);

// // 2. Дана строка 'JS'. Сделайте из нее строку 'js'. Показать решение.

// var str = "JS";
// str = str.toLowerCase();
// console.log(str);

// // Работа с length, substr, substring, slice. Работа с indexOf
// // Для решения задач данного блока вам понадобятся следующие методы: length, substr, substring, slice, indexOf.

// // 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. Показать решение.

// var str = "я учу javascript!";
// var countSymbols = str.length;
// console.log(countSymbols);

// // 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). Показать решение.

// var str = "я учу javascript!";
// var s1 = str.substr(2, 3);
// var s2 = str.substring(2, 5);
// var s3 = str.slice(2, 5);

// console.log(s1, s2, s3);

// // 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'. Показать решение.

// var str = "я учу javascript!";
// str = str.toLowerCase();
// var pos1 = str.indexOf('учу');
// var pos2 = str.lastIndexOf('учу');
// console.log(pos1, pos2);

// // 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
// // если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
// //В противном случае в переменную result запишем содержимое переменной str. Показать решение.

// var str = "я учу javascript!";
// var n = 10;
// var res = '';
// if (str.length > n){
// 	res = str.substr(0, n);
// 	res += '...';
// }
// else{
// 	res = str;
// }

// console.log(res);

// // Работа с replace
// // Для решения задач данного блока вам понадобятся следующие методы: replace.

// // 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены. Показать решение.

// var str = 'Я-учу-javascript!';
// str = str.replace(/-/g, '!');
// console.log(str);

// // Работа с split
// // Для решения задач данного блока вам понадобятся следующие методы: split.

// // 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. Показать решение.

// var str = 'я учу javascript!';
// var arr = str.split(' ');
// for (var i = 0; i < arr.length; i++){
// 	arr[i] = arr[i].replace(/!/g, '');
// }
// console.log(arr);

// // 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. Показать решение.

// var str = 'я учу javascript!';
// var arr = str.split('');
// console.log(arr);

// // 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. Показать решение.

// var str = '2025-12-31';
// var arr = str.split('-');
// var newStr = '';
// for (var i = arr.length - 1; i >= 0; i--){
// 	if (i > 0){
// 		newStr += arr[i] + '.';	
// 	}
// 	else{
// 		newStr += arr[i];
// 	}
// }
// console.log(newStr);

// // Работа с join
// // Для решения задач данного блока вам понадобятся следующие методы: join.

// // 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. Показать решение.

// var arr = ['я', 'учу', 'javascript', '!'];
// var str = arr.join('+');
// console.log(str);

// // Задачи
// // 12. Преобразуйте первую букву строки в верхний регистр. Показать решение.

// var str = 'я учу javascript!';
// var letter = str.slice(0, 1);
// var res = letter.toUpperCase() + str.slice(1);
// console.log(res);

// // 13. Преобразуйте первую букву каждого слова строки в верхний регистр. Показать решение.

// var str = 'я учу javascript!';
// var arr = str.split(' ');
// for (var i = 0; i < arr.length; i++)
// {
// 	var letter = arr[i].slice(0, 1);
// 	arr[i] = letter.toUpperCase() + arr[i].slice(1);
// }

// str = arr.join(' ');

// console.log(str);

// // 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками. Показать решение.

// var str = 'var_test_some_text';
// var arr = str.split('_');
// for (var i = 1; i < arr.length; i++)
// {
// 	var letter = arr[i].slice(0, 1);
// 	arr[i] = letter.toUpperCase() + arr[i].slice(1);
// }

// str = arr.join('');

// console.log(str);

// Работа с concat
// Для решения задач данного блока вам понадобятся следующие методы: concat.

// // 1.	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. Показать решение.

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var res1 = arr1.concat(arr2);
// var res2 = arr2.concat(arr1);

// console.log(res1, res2);

// // Работа с reverse
// // Для решения задач данного блока вам понадобятся следующие методы: reverse.

// // 2.	Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. Показать решение.

// var arr = [1, 2, 3];
// arr.reverse();

// console.log(arr);

// // Работа с push, unshift
// // Для решения задач данного блока вам понадобятся следующие методы: push, unshift.

// // 3.	Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. Показать решение.

// var arr = [1, 2, 3];
// var count = arr.push(4, 5, 6);

// console.log(arr, count);

// // 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. Показать решение.

// var arr = [1, 2, 3];
// var count = arr.unshift(4, 5, 6);

// console.log(arr, count);

// // Работа с shift, pop
// // Для решения задач данного блока вам понадобятся следующие методы: shift, pop.

// // 5.	Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. Показать решение.

// var arr = ['js', 'css', 'jq'];
// var i = arr.shift();

// console.log(i, arr);

// // 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. Показать решение.

// var arr = ['js', 'css', 'jq'];
// var i = arr.pop();

// console.log(i, arr);

// // Работа с slice
// // Для решения задач данного блока вам понадобятся следующие методы: slice.

// // 7.	Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. Показать решение.

// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.slice(0, 3);

// console.log(newArr);

// // 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Показать решение.

// var arr = [1, 2, 3, 4, 5];
// // var newArr = arr.slice(3, 5);
// var newArr = arr.slice(3);

// console.log(newArr);

// // Работа с splice
// // Для решения задач данного блока вам понадобятся следующие методы: splice.

// // 9.	Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. Показать решение.

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);

// console.log(arr);

// // 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.

// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.splice(1, 3);

// console.log(newArr);

// // 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.

// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');

// console.log(arr);

// // 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение.

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// console.log(arr);

// Работа с sort
// Для решения задач данного блока вам понадобятся следующие методы: sort.

// // 13.	Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. Показать решение.

// var arr = [3, 4, 1, 2, 7];
// arr.sort();

// console.log(arr);

// Пример 3
// В данном примере в массиве была произведена сортировка по созданной функции:

// function sortArr(a,b){
// 	if(a > b)
// 		return -1; //или указать число меньше 0 
// 	if(a < b)
// 		return 1; //или указать цифру больше 0 
// 	if(a==b)
// 		return 0 ;
// }

// var arr = [43,-3, 10, 100];
// console.log(arr.sort(sortArr));
// Результат выполнения кода:

// [-3, 10, 43, 100]

// Работа с Object.keys
// Для решения задач данного блока вам понадобятся следующие методы: Object.keys.

// // 14.	Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. Показать решение.

// var obj = {js:'test', jq: 'hello', css: 'world'};
// var arr = Object.keys(obj);

// console.log(arr);

