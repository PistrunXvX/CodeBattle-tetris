# CodeBattle-tetris

## Описание функций **Board**

- `board.getAt(x,y)` - Получаем *elements.NONE*, если на данных координатах нет элемента. Иначе 0.
- `board.pt(x,y)` - Получаем позицию на *board*
- `board.isAt(x,y,elements)` - Получаем *true*, если на этих координатах находится элемент. Иначе *false*
- `board.getFigures()` - Возвращает массив фигур, расположенных на поле
- `board.getFreeSpace()` - Возвращает массив свободных участков на поле
- `board.getCurrentFigureType()` - Получаем значение текущего элемента
- `board.getCurrentFigurePosition()` - Получаем значение позиции текущего элемента
- `board.getFutureFigures()` - Получаем значение 4 будущих элементов
- `board.isNear(x,y,element)` - Возвращает *true*, если элемент находится рядом с другим. Иначе *false*
- `board.size()` - Возвращает размер поля
- `board.getAllExtended()` - Возвращает массив со значением всех клеток поля
