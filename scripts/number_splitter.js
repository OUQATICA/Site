let number, dozens, ones;
number = parseInt(prompt('Введите число')); //вводим число с клавиатуры
dozens = parseInt(number/10);
ones = number % 10;
alert('десятки: ' + dozens + '\nединицы: ' + ones)