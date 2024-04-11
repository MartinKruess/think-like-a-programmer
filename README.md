# Think like a Programmer!

Bei manchen Aufgaben scheitert es nicht an den Fachkenntnissen oder den Codingfähigkeiten, sondern ehr daran das Problem zu sehen und den Fehler zu finden. Das hier ist eine kleine Übung um ein wenig an diesem Problem zu arbeiten. Es gibt insgesamt 5 Tasks wobei wir bei leicht anfangen und uns dann langsam steigern. Es gibt bestimmte Codezeilen, die nicht verändert werden dürfen, diese sind durch ein Commi // Dont touch! gekennzeichnet.

## Stelle dir folgende Fragen bei Problemen

Wer die letzten Monate mit mir zusammen nach Fehlern gesucht hat, hat sicher gemerkt dass ich immer einen ähnlichen Ansatz verfolge. Ich stelle mir zuerst folgende Fragen:

- Woher kommt die Fehlermeldung? (Datei/Zeile)
  Dadurch haben wir einen Ansatz an dem wir mit der Fehlerbehebung beginnen können.
- Welche Art Fehler ist es? Einiges lässt sich bereits durch die Art des Fehlers ausgrenzen oder leicht erkennen (Propeties of undefined, variableName does not exist, ...)
- Wo kommen die Daten ursprünglich her? (Liegt der Fehler schon am Anfang, können wir uns eine lange Suche ersparen)
- Wo verliere ich die Daten? (CONSOLE.LOG!!! ist ein Freund)
- welcher type, wie ist der Aufbau? Sprechen wir die Daten richtig an? data.key data[i]
- wenn, dann, dadurch Jetzt prüfen wir die Logik, da wir wissen dass die Daten eigentlich ankommen müssten, muss es ein Logikfehler sein (return, break, async und mehr)

Natürlich gibt es viele weitere Fehlerquellen, wie falsche Syntax oder so, aber die eigentliche Fehlerbehebung ohne dass man einen Schreibfehler hat oder .map falsch aufgebaut ist, sollte in 80% der Fälle mit den obriegen Fragen abgedeckt sein.

## Aufgaben

Bearbeite die 5 Aufgaben der reihe nach, da sonst weitere Fehler auftreten.
Kommentiere eine neue Aufgabe erst dann ein, wenn die vorherige fertig ist. (siehe app.jsx)

Die eigentlichen Aufgaben stehen in den Tasks und teilweise in den unter Komponenten als Kommentar.
