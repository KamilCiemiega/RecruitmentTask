Zadanie
Wyznacz medianę wydatków do pierwszej niedzieli (włącznie) każdego miesiąca
(np. dla 2023-09 i 2023-10 są to dni 1, 2, 3 wrz i 1 paź).

Rozwiązanie należy podzielić na dwie funkcje:

solution1 → rozwiązanie niezoptymalizowane (tzw. pierwsza wersja)

solution2 → rozwiązanie zoptymalizowane z użyciem jednej z metod

kolejki priorytetowej (priority queues)
szybkiego partycjonowania (quick select)
szybkiego sortowania (quick sort)
innej
W komentarzu funkcji solution2 należy umieścić słowne uzasadnienie
obranej metodologii (jej wady i zalety).

Należy zastosować rozwiązanie zgodnie z poniższym pseudokodem.

expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

func solution1(expenses) {
    result = null;
    // ...
    return result;
}
func solution2(expenses) {
    result = null;
    // ...
    return result;
}
Uwagi
Należy użyć tylko funkcji/modułów ze standardowej biblioteki (np. math).
Dane są znormalizowane.
Wynik to jedna liczba dla danych spełniających kryteria lub null.
Zadanie może zostać wykonane w języku Python (*.py) lub JavaScript (*.js).
W pierwszym etapie po przesłaniu pliku z poprawnym wynikiem,
uruchomione zostaną testy automatyczne sprawdzające
(dla przykładowych danych oraz zestawów z milionem wydatków):

poprawne wyniki dla różnych przypadków
zużycie procesora
zużycie pamięci
Przesłany plik jest finalnym rozwiązaniem.

Wynik testów automatycznych (dopuszczamy pewną ilość błędów):

negatywny - aplikacja zostanie automatycznie odrzucona
bez dodatkowych informacji zwrotnych
(ponowna aplikacja możliwa jest po 90 dniach)
pozytywny - kod zostanie przekierowany do weryfikacji przez programistów
Jest to pierwszy etap rekrutacji. Po jego pomyślnym zaliczeniu przesłane zostanie
drugie zadanie (weryfikujące wiedzę z zakresu budowy aplikacji z użyciem frameworka).

Szczegółowy opis procesu rekrutacji znajduje się na naszej stronie www.
Pytania do zadania?
Analiza treści stanowi część testu i jest ważną umiejętnością programisty.

Treść zadania jest kompletna i zweryfikowana przez programistów.

Dodatkowe pytania, jeśli odpowiedź jest w zadaniu, wpływają na końcową ocenę.
