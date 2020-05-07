> **Warnung:**

> LightRoute ist derzeit in Entwicklung. Es sind derzeit wenige Funktionen, Konfigurationen und Event Trigger nutzbar.

# **Willkommen bei LightRoute**

## Was ist LightRoute?
LightRoute ist eine kleine und leichte JavaScript Router Library. Sie wird genutzt, um das Erstellen von WebApps zu vereinfachen.

## Wie installiere ich LightRoute?
Sie können LightRoute über folgende Wege installieren:

 - Über GitHub LightRoute herunterladen
 - Über die CDN, ohne LightRoute herunterzuladen

### Über GitHub:
[Hier](#https://github.com/) finden Sie die GitHub Repository

### Über die CDN:
Hier finden Sie die LightRoute CDN:
```
https://lightroute.berkearas.de/...-min.js
```

Binden Sie die Datei ``lightroute.js`` oder ``lightroute.min.js`` an das Ende der HTML Datei an.

## Wie konfiguriere ich LightRoute?

Hier finden Sie eine Minimal-Konfiguration:

```javascript
lightRoute.init({
	error404: '/404'
});
```

Hierbei wird LightRoute Initialisiert, und als 404 Seite wird `/404` hinterlegt.

## Event Triggers

LightRoute bietet zwei Events an:

### lrRouteBegin:
Wird ausgeführt, sobald eine Route geladen wird.
Über ``event.detail`` wird geladene Route ausgegeben

### lrRouteEnd:
Wird ausgeführt, sobald eine Route geladen wurde.
Über ``event.detail`` wird geladene Route ausgegeben.

### Wann können Events genutzt werden?
Events können genutzt werden, um beispielsweise Lade-Animationen zu gestalten.
Bei `lrRouteBegin` wird die Animation angezeigt, bei `lrRouteEnd` beendet.