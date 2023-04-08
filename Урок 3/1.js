celsius = Number.parseInt(prompt("Введите температуру в градусах Цельсия"));
roundDigit = 2;
coefficient = Math.pow(10, roundDigit);
fahrenheit = (9 / 5) * celsius + 32;
fahrenheit = Math.round(fahrenheit * coefficient);
fahrenheit /= coefficient;
alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit}`);
