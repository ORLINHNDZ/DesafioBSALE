# Prueba Técnica Bsale Orlin Hernandez

Hola, te agradezco por tomarte el tiempo en ver mi solución al ejercicio técnico.

Dentro de la carpetar raíz del proyecto podras encontrar un documento PDF con la Documentación Técnica del Proyecto.

---

## Arquitectura

Para el desarrollo de la aplicación opté por el patrón MVC;
Patrón de diseño de la capa de presentación, pues define la forma en que se organizan los componentes de presentación en sistemas distribuidos.

## Requirimientos

Para el desarrollo y ejecución del proyecto deberás instalar las dependencias con el comando

```
$npm install
```

Para ejecutar el proyecto de manera local deberás ejecutar el siguiente comando

```
$node ./backend/index.js
```

### Node
- #### Instalar Node en Windows

  Visita [official Node.js website](https://nodejs.org/) y descarga el instalador.


- #### Instalación en otros sistemas operativos
  Puedes encontrar información en el sitio oficial(https://nodejs.org/) y[Sitio Oficial de NPM ](https://npmjs.org/).

### Dependencias
Express: Framework de preferencia para trabajar las APIs en Node js

Mysql2: Compatible con la mayoría de apis, aparte que ofrece caracteristicas adicionales.

EJS: EJS nos permite generar aplicaciones rápidas cuando no necesitamos algo demasiado complejo

Dotenv: Para facilitar el acceso a nuestras variables de entorno.

- #### Dependencias de seguridad extra para nuestro servidor
RateLimiter: Con esta dependencia limitamos las peticiones a nuestra API

Helmet: Nos brinda una poliza de seguridad para mitigar ataques cross-site enre otras cosas.

Cors: Provee caracteristicas de seguridad al navegador para mitigar peticiones cross-origin desde HTTP.

Xss: Middleware oara sanitizar el input de los usuarios provenientes del POST body, Get y parametros URL.


## Deploy
Para el deployment se utilizó la herramienta de Heroku

Enlace a la previsualizacion:
https://bsaleorlin.herokuapp.com/


##  Información
Puedes seguirme en mis perfiles por si deseas ponerte en contacto conmigo, gracias por tu tiempo. Espero esta prueba sea de tu agrado. Saludos!!


