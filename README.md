## NOTA IMPORTANTE
Esta aplicación esta hecho con Angular 17. Al momento de generar nuestra aplicación con el 
comando por ejemplo: `ng new AppTest`, al momento de generarlo notaremos que ya no esta
el módulo principal, sin embargo tenemos el app.routes.ts que nos ayudara a controlar todos nuestros componentes, al igual que nuestras configuraciones. Si abrimos el arhcivo `app.config.ts`, veremos que tenemos la configuración global de Angular que nos va a permitir a nosotros hacer inyección de modulos o otros proveedores para tener el mismo comportamiento de antes. El app.config.ts esta siendo usado en el bootstrap de la aplicación. Ahora por defecto al momento de crear un componente siempre sera en standalone en true. También al crear la aplicación no escontraremos con el app.routes.ts

## EditorConfig for VS
Es una extensión que nos permite sobrescribir valores por defecto en nuestro editor de código.
Cuando visual studio code encuentra un archivo .editorconfig basicamente establece esas configuraciones
por defecto para ese proyecto. Veasé en el .editorconfig en la carpeta src.

## Angular.json
Es un archivo que le decimos a Angular ciertas configuraciones para la ejecución de nuestra aplicación.
Como cual es el build, directorio, archivo que se usará para la ejecución de nuestra aplicación, cual es
el archivo index.html, donde estará el archivo principal, el main en javascript, cual son los archivos de
configuración de nuestra aplicación, cuales son los asets, estilos globales de nuestra aplicación.

## Package-lock.json
Es un archivo que no se tocará manualmente, y solamente se manipulará cuando se haga comandos de instalación o remover 
dependencias en el package.json.

## Package.json
Es un archivo propio de node, este proyecto de angular esta contruido sobre node por eso instalamos node.js
Aquí dice la versión, cuales son los scripts, se pueden agregar más script y convinarlos.
Private es un paquete privado. 
Dependencies son paquetes que son requeridos para crear la aplicación de producción.
Cuando usamos ng-build va a tomar todas la dependencias y quitará todo lo que no necesite. 
Quitará la comunicación con el app.server y quitará cosas que no se van utilizar.
El forms viene con este proyecto al momento de crear la aplicación.
en el devDepencias son solamente herramientas de desarrollo.
# Extensiones útiles para VS CODE
1. Bookmarks -> "Marca las lineas y saltos y mucho mas"
2. Bracket Pair Color DLW

3. EditorConfig for VS Code

4. Error Lens

5. Git Graph

6. Live Share

7. Material Icon Theme

8. Paste JSON as Code (Refresh)

10. Thunder Client

11. WLS

12. JavaScript and TypeScript Nighly

# Comandos para creación de componentes en Angular
- `ng g component [name]`: 
  Genera un nuevo componente en el [name], que puede ser también 
  [paht/name]
  Ejemplo: ng g component productos/producto.

- `ng g m [name | path/name]` :
  Genera un nuevo module con el nombre especificado o en la [path/name]
  Ejemplo: ng g module home/home o ng g m products/product

# PRE-REQUISITOS 
## INSTALACIÓN DE NODE.JS v20.9.0
1. Descargar nvm (Node Version Manager) desde este link, en el apartado de los `Assets`:
[nvm](https://github.com/coreybutler/nvm-windows/releases)

2. Descomprimimos carpeta.

3. Ejecutamos el `nvm-setup.exe`

4. Damos siguiente a todo por defecto. No hay problema por que esta versión ya tiene un instalador para actualizar.

5. Abrimos la terminal y Ejecutar como administrador.

6. Ejecutamos el siguiente comando: `nvm`. Este mostrará la versión en que esta corriendo y que se puede usar.
   NOTA: Si no aparece, vuelve intentarlo

7. Instalamos Node v20.9.0 con el siguiente comando: `nvm install 20.9.0` 

8. Cerramos terminal, volvemos abrir el cmd y Ejecutar como Administtrador.

9. Ingresamos el siguiente comando:` node -v` y debe aparecer la versión de Node.js. Caso contrario vuelve al paso 1.

## INSTALACIÓN DE ANGULAR v17.3.5
1. Abrir teminal y Ejecutar como Administrador.

2. Ingresar el siguiente comando: `npm install -g @angular/cli@17.3.5` y lo ejecutamos.

3. Cerramos terminal y volvemos a abrirlo y Ejecutarlo como Administrador.

4. Ingresamos el siguiente comando: `ng version` y debe aparecer algo como esto:

![Instalación Correcta de Angular](./src/image/installCorrectAngular.png)

# EJECUTAR APLICACIÓN 

1. Abrir VS Code en donde se encuentra ubicado el proyecto.

2. Abrimos terminal ya sea de Windows o de VS Code.

3. Ejecutamos el siguiente comando: `npm i`

4. Se instalarán los `node_modules` de esta aplicación.

5. Luego podemos correr nuestra aplicación con el siguiente comando: `ng serve -o`

6. Y solo se desplegará la aplicación.

# Extension.json
Usualmente en esta extensión se pueden añadir paquetes recomendados y le recomiende un set de aplicaciones

# Node_modules
El .gitignore no sube esta carpeta al git. Todos esos node_modules se construyen cuando ejecuta el npm i.
Ya que este comando reconstruye los node_modules.

# Directivas Incluidas en Angular
Las siguientes directivas vienen incluidas dentro dle módulo `"CommonModule"` de `@angular/common`
1. `*ngIf`: Remueve o crea una parte del DOM basado en la expresión "showSection".
2. `*ngFor`: Convierte el `<li>` en un template, y lo usa para duplicarlo basado en la cantidad de elementos dentro de la lista.
3. `ngSwitch`: Condicionalmente cambia el contendio del `<div>` por el template que cumpla la condición.

# NgClass
Este nos permite agregar clase de manera condicional
`[ngClass] = "{'list-group-item-dark':isLast,'list-group-item-primary':isEven}`
# Folder app. Estructura común al generar un nuevo componente
En este folder es donde se construira la lógica de negocio. 
Aquí se ubicarán los servicios y modulos.
Y son los mismos archivos que la estan afuera de la raiz.
  - app.component.css => Archivo .css
  - app.component.html => Archivo .html
  - app.component.spec.ts => Archivo que me ayudarán a ser el Testing.
  - app.component.ts => Este archivo de typescript que tiene unos decoradores y referencias al html y al css.
   que por defecto tiene un decorador y es una simple clase
  y aquí se define el app-root, y 
  - app.module.ts => Este es un modulo principal e importante. Hay cosas en las cuales hay que tener cuidado a
  la hora de utilizarlo. 

# app.module.ts
Un módulo es una simple clase que tiene un decorador y en si mismo es un agrupador.
Osea que encapsula una funcionalidad de tal manera que si se necesita compartirla
le facilitará y protegerá del mundo exterior.
Son contenedores para realizar la cohesión de código que tiene un funcionamiento en común, este funcionamiento en común puede ser un flujo de trabajo o un conjunto de capacidades o código 
dedicado a un dominio de aplicación

# Decoradores de clase para componentes 
- ` @Input`: Define una propiedad que puede ser enviada desde el padre hacia el componente hijo.
Ejemplo: `<my-cmp [myProperty]=“someExpression"> `

- `@Output`: Define una salida del componente que el componente padre puede suscribirse para escuchar.
Ejemplo: `@Output() myEvent = new EventEmitter(); `

- `@HostBinding`: Enlaza el elemento anfitrión (host) a la propiedad de la clase:
    `@HostBinding('class.valid').isValid`

# [(ngModel)] : Two Way Data Binding
Cuando tenemos un (clic) el parentesis indica un evento y cuando tenemos
[ ] es para asociar un atributo. Entonces [()] indica que se esta asignando un evento
y un atributo al mismo tiempo.

# Uso de los arias en HTML
  - data-bs-toggle -> Indicamos que cuando se presione el botón para el menú el menú móvil, se va ejecutar la función de Collapse.

  - data-bs-target -> Indicamos cual va a ser el menú que se quiere colapsar. Ponemos la almohadilla y el nombre del id.

  - aria-controls  -> La propiedad global aria-controls identifica el elemento (o elementos) cuyo contenido o presencia está controlado por el
                    elemento en el que se estableve este atributo.

  - aria-expanded  -> El atributo aria-expanded se establece en un elemento para indicar si un control está expandido o contraído,
                    y si los elementos controlados se muestran u ocultan o no.

  - aria-label     -> El atributo aria-label se utiliza para definir una cadena que etiqueta el elemento actual.
                    Úselo en los casos en que no haya una etiqueta de texto visible en pantalla. Si hay texto
                    visible etiquetando el elemento, utilice aria-labelledby en su lugar.
# Singleton Services
Servicios como Singleton. Como lo maneja Angular es con inyección de dependencias. Nosotros no nos vamos a preocupar de hacer una instancia del servicio. 
Lo que vamos a hacer es inyectar el servio y ya podemos usar la instancia.

# Folder Assets
Son recursos estaticos que nosotros vamos a subir.

# .gitkeep
Este archivo indica que el folder es importante y lo va a mantener

# Pipes JSON
Este nos convierte un objeto a JSON
`<pre>{{product | json}}</pre>`

# SAAS
SASS = Syntatically Awesome Stylesheet
Ya se le considera un estándar en la industria.
Compatible con muchos frameworks incluyendo Boostrap
Prácticamente es un lenguaje de programación ya que tiene variables, funciones y mucho más.
SASS Y Custom Properties (CSS)
Ambos ofrecen variables y algunas funciones como calc() o min() max() etc en el caso de SASS son
similares per también se puede utilizar.
Boostrap esta agregando cada vez más custom properties.

# VENTAJAS DE SASS
Separación y orden en tus archivos.
Mixins para evitar repetir código.
Condicionales, Funciones y Mapas para poder crear componentes más avanzadas.

# Animaciones y transiciones con CSS
### HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
    </head>
    <body>
        <div class="pulser"></div>
    </body>
</html>
```

### CSS
<pre>
.pulser{
  width: 50px;
  height: 50px;
  background-color: #09f;
  border-radius:50%; /*Como el ancho y alto es igual no importa si ocupa el 100%*/
  position: relative;
  transition-duration: 2s;/*Indicamos cuanto dura la transición, por defecto ya sabe que hay dos estados diferentes. Indicamos que la transición sera x segundo*/
  /*transition-property:background, scale; Aquí controlamos las animaciones que queremos*/
  transition-timing-function: ease; /*La velocidad de la transición que ocurre en un estado inicial y el siguiente.
  Siempre tendra la misma velocidad. 
    linear -> La velocidad es de forma lineal.
    ease-in -> Inicia la velocidad lentamente y luego rápido.
    ease-out -> Inicia la rápidamente la velocidad y luego lento.
    ease-in-out -> Tanto la entrada como la salida la velocidad es lento. Y en medio en donde va con la máxima velocidad.
    ease -> Este es parecido al ease-in, pero este comienza un poco más rapido la velocidad.

  Tenemos un método que nos permite indicar cuantos pasos se tiene que hacer para terminar la animación. Ejemplo:
    transition-timing-function: steps(10);

  Tenemos también cubic bezier(x1, y1, x2, y2).
  Lo importante es que esta función nos permite personalizar la curva bezier cúbica de la animación.
  */
  /*Podemos jugar con el delay para se muestre de una forma más bonita. Imagenemos que tenemos más de un elemento*/
  opacity: 0;
}

section{
  display: flex;
  gap:16px;
  justify-content: center;
  align-items: center;
}

/*Cuando en el seccion hacemos el hover vamos a enseñar todos los pulser y mostrará la opacidad de 1*/
section:hover .pulser{
  opacity:1;
}
/* Hover(Estado) sigfica que el usuario tiene encima ese elemento */
.pulser:hover{
  scale:2;
  background: red;
  box-shadow: 0 0 10px red;
}

body{
  display: grid;
  place-content: center;
  min-height: 50vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.pulser:first-child{
  transition-delay:0s;
}

.pulser:nth-child(2){
  transition-delay: 300ms;
}

.pulser:nth-child(3){
  transition-delay: 600ms;
}

</pre>

# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




# Admixion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Directorio AUTH
Este directorio contiene los componentes para el login y el registro
para después aprovechar el lazyload, de igual manera aquí estarán sus modulos para estos dos componentes. 

