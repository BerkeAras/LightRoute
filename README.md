> **Warning:**

> LightRoute is still in development. A few functions are not working yet.

# **LightRoute**

## What is LightRoute?
LightRoute is a small and lightweight javascript router.

## How can I install LightRoute?
You can install LightRoute by:

 - Downloading Source Files at GitHub
 - Using the CDN.

### Using GitHub:
[Here](https://github.com/BerkeAras/LightRoute) is our GitHub Repository

### Using CDN:
Here is our CDN:
```
https://cdn.jsdelivr.net/npm/light-route/js/lightroute.min.js
```

Add the `lightroute.js` or `lightroute.min.js` at the end of your HTML File.

## How can I use LightRoute?

> **Warning:**

> LightRoute is still in development. ``error404`` is the only configuration option at the moment.

That is a example configuration:

```javascript
lightRoute.init({
	error404: '/404'
});
```

## Events

At the moment, LightRoute has two Events.

### lrRouteBegin:
Executed as soon as a route is loading.
Use ``event.detail`` to get loading Route.

### lrRouteEnd:
Executed as soon as a route is loaded.
Use ``event.detail`` to get loaded Route.

### When can events be used?
You can use Events for preloaders, ... 
