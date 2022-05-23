# Die Technik hinter Log4Shell & Co. ![Logo of Log4Shell](Log4Shell_logo.png)

## Folien zum Vortrag

In diesem Projekt findet ihr die Folien zum Vortrag. Die Folien wurden mit Hilfe von [reveal.js](https://revealjs.com/) erstellt.

* Direkt öffnen unter https://diva-e.github.io/talk-log4shell
* Als [PDF](Die%20Technik%20hinter%20Log4Shell%20&%20Co.pdf)
* Oder lokal mit:
  ```shell
  npm install
  npm start
  ```
* Öffnen der Folien im Browser: http://localhost:3000/
* Zum drucken unter folgender URL öffnen: http://localhost:3000/?print-pdf

## Zusammenfassung

Es ist Vorweihnachtszeit, alle freuen sich auf den baldigen Urlaub, Amazon hat vor kurzem einen der größten Ausfälle im AWS hinter sich gebracht und dann erschüttert plötzlich eine
Sicherheitslücke in Log4j 2 die loggende Java-Welt ([CVE-2021-44228](https://www.randori.com/blog/cve-2021-44228/)).

Ein paar Tage später sind die Applikationen gepatched, hoffentlich nicht erfolgreich angegriffen worden und die Aufregung und die Lücke sind schnell vergessen.
Aber was steckt eigentlich hinter dieser und ähnlichen Lücken? Wie schleuse ich Bytecode in eine JVM? Was ist Remote Class Loading oder ein Deserialisierungs-Angriff?

Nach an ein paar Grundlagen nehmen wir euch mit in die IDE und demonstrieren verschiedene Angriffe über eine verwundbare Log4j 2 Version.
Also macht euch gefasst auf wenig Theorie und viel Code den man so im Entwickleralltag eigentlich nicht schreiben würde :grin:

## Konferenzen

Der Vortrag war auf folgenden Konferenzen zu sehen:

* [Karlsruher Entwicklertag 2022](https://entwicklertag.de/karlsruhe/2022/Die_Technik_hinter_Log4Shell_&_Co.html) 
