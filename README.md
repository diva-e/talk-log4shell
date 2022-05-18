# Die Technik hinter Log4Shell & Co. ![Logo of Log4Shell](Log4Shell_logo.png)

# Folien zum Vortrag

In diesem Projekt findet ihr die Folien zum Vortrag. Die Folien wurden mit Hilfe von [reveal.js](https://revealjs.com/) erstellt.

Starten der Präsentation:
```shell
npm install
npm start
```

# Zusammenfassung

Es ist Vorweihnachtszeit, alle freuen sich auf den baldigen Urlaub, Amazon hat vor kurzem einen der größten Ausfälle im AWS hinter sich gebracht und dann erschüttert plötzlich eine
Sicherheitslücke in Log4j 2 die loggende Java-Welt ([CVE-2021-44228](https://www.randori.com/blog/cve-2021-44228/)).

Ein paar Tage später sind die Applikationen gepatched, hoffentlich nicht erfolgreich angegriffen worden und die Aufregung und die Lücke sind schnell vergessen.
Aber was steckt eigentlich hinter dieser und ähnlichen Lücken? Wie schleuse ich Bytecode in eine JVM? Was ist Remote Class Loading oder ein Deserialisierungs-Angriff?

Nach an ein paar Grundlagen nehmen wir euch mit in die IDE und demonstrieren verschiedene Angriffe über eine verwundbare Log4j 2 Version.
Also macht euch gefasst auf wenig Theorie und viel Code den man so im Entwickleralltag eigentlich nicht schreiben würde :grin: