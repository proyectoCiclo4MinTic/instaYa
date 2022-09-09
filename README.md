<!-- https://www.markdownguide.org/cheat-sheet/ -->

# Proyecto Plataforma Recogida de Paquetes InstaYA

NRC:**2118**
Equipo No. **06**

## Integrantes

- Angel Ernesto De Moya Mugno
- Daniela Alejandra Ospina Rubio
- Daritza Andrea Teherán Viñas
- Javier Mauricio Torres Vargas
- Jesús Antonio Vela Arango

<!-- ### Tutor -->

<!-- • Luis Sebastian Caicedo Pimienta -->

---

## Tabla de Contenido

- [Proyecto Plataforma Recogida de Paquetes InstaYA](#proyecto-plataforma-recogida-de-paquetes-instaya)
  - [Integrantes](#integrantes)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Enunciado](#enunciado)
    - [Notas](#notas)
  - [Descripción de roles del equipo](#descripción-de-roles-del-equipo)
  - [Diagrama de despliegue](#diagrama-de-despliegue)
  - [Definición de Artefactos - Product Backlog](#definición-de-artefactos---product-backlog)
    - [Método de Estimación Fibonacci](#método-de-estimación-fibonacci)
    - [Backlog Sprint #1](#backlog-sprint-1)
    - [Backlog Sprint #2](#backlog-sprint-2)
    - [Backlog Sprint #3](#backlog-sprint-3)
    - [Backlog Sprint #4](#backlog-sprint-4)
  - [Cronograma de Tareas](#cronograma-de-tareas)

---

## Enunciado

La empresa **InstaYA** requiere un sistema por medio del cual los usuarios puedan programar la recogida de paquetes para su futuro envío.

Los datos mínimos que requiere la empresa por parte del usuario para recoger el paquete son los siguientes:

• **Dia** y **franja horaria** en la cual se encuentra disponible el `usuario` para atender al personal encargado (Se debe programar con mínimo `24 horas de anticipación`).
• Las dimensiones `ancho x alto x largo`, si es `mercancía delicada o no` y el `peso aproximado`.
• `Dirección` del _lugar de recogida_, incluyendo `ciudad`.
• Número de `identificación personal` y `nombre completo` de _quien envía_.
• `Dirección` del _lugar hacia donde se realiza el envío_, incluyendo `ciudad`, así como el `número de identificación` personal y `nombre completo` de quien _recibe_.
Deben tener en cuenta las siguientes funcionalidades:
• Solo se maneja el `usuario cliente`, quien es el que realizará la _solicitud del servicio_.
• _Por cada envío_ se genera un `código único de seguimiento`.
• Un envío puede tener tres posibles estados: `Guardado` (al crearse), `Cancelado` o `Cumplido`
• **_Los envíos automáticamente se cumplen en 24 horas_**.

### Notas

• Los datos suministrados por los usuarios deben cumplir la política de **_privacidad de datos vigente_**, es decir las **contraseñas** de los usuarios deben almacenarse de forma cifrada y la **conexión al servidor** debe realizarse de forma segura.

> _Se entiende por información personal aquella suministrada por el usuario para el registro, la cual incluye datos como nombre, identificación, edad, género, dirección, correo electrónico y teléfono._[^1]

[^1]: https://www.mincit.gov.co/servicio-ciudadano/politicas-de-tratamiento-de-datos-personales

• La base de datos debe ser **no relacional**.
• Se debe utilizar una **arquitectura desacoplada**, es decir, una API back end y un front end que consuma dicha API.
• La API back end debe estar desarrollada en **Express.js**
• El front end debe estar desarrollado en **React.js**
• Se debe utilizar **Bootstrap** como librería CSS para manejar los estilos de su aplicación.

![Propuestas Wireframe](/assets-documentacion/wireframe-propuesta.svg "Propuestas Wireframe")
**Imagen 1** - Propuesta para wireframe del proyecto

- <strong>[Regresar](#tabla-de-contenido)</strong>

---

## Descripción de roles del equipo

<!-- TODO NOTA Este es el método para diseñar tablas en markdown, no es muy cosmética pero se podría trabajar externo y después se convierte a markdown -->

| Rol            | Integrante                        | Descripción                                                                                                                             | Tareas |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Scrum Master   | Tutor<br>DanielaOR<br>DaritzaTV   | Encargados de gestionar y organizar el Scrum                                                                                            |        |
| Product Owner  | Tutor<br>JavierTV                 | Encargados de visionar & gestionar los objetivos a desarrollar en el proyecto además de mantener el product Backlog y gestionar el Team |        |
| UX Designer    | AngelDM                           | Encargado de generar y mantener una coherencia de la marca con el produco y de su experiencia con el usuario                            |        |
| UI Designer    | AngelDM<br>DanielaOR              | Encargados de diseñar los elementos visuales y de su interaccion con el usuario                                                         |        |
| Front-End Dev  | AngelDM<br>DanielaOR<br>DaritzaTV |                                                                                                                                         |        |
| Back-End Dev   | JavierTV<br>JesúsVA<br>DaritzaTV  |                                                                                                                                         |        |
| Full-Stack Dev | AngelDM<br>DaritzaTV<br>JesúsVA   |                                                                                                                                         |        |

**Tabla 1** - Descripción de Roles del Equipo

---

## Diagrama de despliegue

• Nombre Diagrama de despliegue #01

<!-- TODO ESTE ES UN EJEMPLO DE PLANTUML PERO NO FUNCIONA DIRECTAMENTE EN GIT. TOCA TRABAJARLO EXTERNO Y SE IMPORTA EL SVG o PNG-->

![Diagrama de Despliegue #1](/assets-documentacion/despliegue-ejemplo.svg "Ejemplo Diagrama Despliegue")
**Diagrama 1** - _Descripción_

<!-- TODO NOTA Este es un ejemplo de como se importa una imagen local-->

![Diagrama de Despliegue #2](/assets-documentacion/despliegue-ejemplo.png "Ejemplo Diagrama Despliegue")
**Diagrama 2** - _Descripción_

- <strong>[Regresar](#tabla-de-contenido)</strong>

---

## Definición de Artefactos - Product Backlog

### Método de Estimación Fibonacci

| Calificación | Significado              | Descripción                                                                                                                                                                                                                                                                                           |
| ------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0            | **No requiere esfuerzo** | Requiere muy poco o ningún esfuerzo, pero no hay valor agregado para el negocio, entonces no acumula puntos para el trabajo.                                                                                                                                                                          |
| 1            | **Extrapequeño**         | Los desarrolladores sienten que entienden la mayoría de los requerimientos y los consideran relativamente fáciles, posiblemente el ítem más corto/pequeño del Sprint y realizable en un día.                                                                                                          |
| 2            | **Pequeño**              | Requiere de un poco de esfuerzo, y habilidades de resolución de problemas, pero los Desarrolladores ya han resuelto casos similares anteriormente, y sienten confianza con los requerimientos.                                                                                                        |
| 3            | **Promedio**             | Los Desarrolladores han resuelto muchas veces estos casos; saben lo que se necesita para culminar esta labor. Posiblemente se realicen unos pasos extra para resolverlo, y se logre el objetivo. Requiere muy poca o ninguna labor de investigación.                                                  |
| 5            | **Grande**               | Es un trabajo complejo, o los desarrolladores no realizan esta labor muy a menudo. La mayoría de los desarrolladores necesitarían asistencia de alguien más en el equipo. Es probablemente uno de los ítems más grandes por completar en un Sprint.                                                   |
| 8            | **Extragrande**          | Este tipo de ítems conlleva mucho tiempo e investigación y probablemente más de un desarrollador para completar dentro de un rango de dos semanas. Además, los desarrolladores necesitan hacer ciertas suposiciones que incrementan el riesgo y la culminación del ítem.                              |
| 13           | **¡Advertencia!**        | Es un trabajo muy complejo con mucha incertidumbre y requiere de múltiples suposiciones para dimensionar. Es mucho para completar en un Sprint. En cambio, se debería dividir en múltiples ítems que puedan ser completados de manera independiente.                                                  |
| 21           | **¡Riesgoso!**           | Un “21” o “34” refleja mucha complejidad para realizar en un sprint. Necesita más refinamiento. El gran tamaño indica mayor riesgo, suposiciones, y más dependencias involucradas para completar este tipo de ítems                                                                                   |
| ?            | **¡Peligro!**            | Como desarrollador, no queremos hacer este tipo de trabajo de la forma que se encuentra escrito. Presenta un alto grado de complejidad y no se puede completar en el marco de tiempo de un ciclo, iteración o Sprint. Tal vez los requerimientos son demasiado confusos que están plagados de peligro |

**Tabla 2** - Calificación por Método de Estimación Fibonacci [^2]

[^2]: Everet, J. (2021). _Practical Fibonacci: A Beginner's Guide to Relative Sizing_ [Tabla]. > Recuperado de https://www.scrum.org/resources/blog/practical-fibonacci-beginners-guide-relative-sizing

- <strong>[Regresar](#tabla-de-contenido)</strong>

---

### Backlog Sprint #1

| Id  | User Story                                                                                                                                                                                                                                            | Descripción                                                                                                                                                                                                                                                                                         | Estimación     | Responsable                                                                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| 01  | Cómo **cliente** quiero ingresar a la plataforma de InstaYA, **registrarme**, con mis **datos de contacto y personales**, para acceder a los servicios de la plataforma y posteriormente **agendar mi entrega**                                       | <ul><li>Vista Login<li>Vista Registro Nuevo Usuario<li>Vista Agendar Entrega</ul>                                                                                                                                                                                                                   | 5 **Grande**   | AngelDM<br>DanielaOR<br>DaritzaTV                                                                       |
| 02  | Cómo **cliente** quiero tener la posibilidad ver las horas de entrega disponibles para así poder seleccionar a mi conveniencia la que se ajuste a mis necesidades.                                                                                    | <ul><li>BD Pedidos</li><ul><li>Fechas</li></ul><li>Vista Agendar Entrega</li><ul><li>Fechas Disponibles</li></ul></ul>                                                                                                                                                                              | 3 **Promedio** | Full-Stack<ul><li>AngelDM<li>DaritzaTV<li>JesúsVA</ul> Back-End<ul><li>DaritzaTV<li>JavierTV<li>JesúsVA |
| 03  | Cómo **Aministrador de InstaYA** requiero que el **cliente** realize el agendamiento con **24 horas de anticipación** con el **Día** y la **hora** requerida para la entrega, además que aporte los **datos** necesarios para cumplir con la entrega. | <ul><li>BD Lista Órdenes<ul><li>Mercancía</li><ul><li>Dimensiónes</li><li>Delicada/No Delicado</li><li>Peso</li></ul></li><li>Solicitante</li><ul><li>Identificación</li><li>Nombre Completo</li></ul><li>Lugar de Envío</li><ul><li>Dirección de Envío</li><li>Ciudad</li></ul><li>Fecha</li></ul> | 5 **Grande**   | Back-End<ul><li>DaritzaTV<li>JavierTV<li>JesúsVA                                                        |
| 04  | Cómo **Administrador de InstaYA** necesito poder hacer **seguimiento** a los pedidos además de **verificar** y **actualizar** los datos y el **estado actual del envío** y para así asegurarme que los pedidos se estén entregando a las **24 horas** | <ul><li>BD Actualización & Registro Listado Ordenes</li><ul><li>Código de Seguimiento</li><li>Estado Envio</li><ul><li>Guardado</li><li>Cancelado</li><li>Cumplido                                                                                                                                  | 3 **Promedio** | Back-End<ul><li>DaritzaTV<li>JavierTV<li>JesúsVA                                                        |
| 05  |                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                     |                |

**Tabla 3** - Backlog - User Stories Sprint 1

### Backlog Sprint #2

| Id  | Descripción | Estimación | Responsable |
| --- | ----------- | ---------- | ----------- |
| 01  |             |            |             |
| 02  |             |            |             |
| 03  |             |            |             |
| 04  |             |            |             |
| 05  |             |            |             |

**Tabla 4** - Backlog - User Stories Sprint 2

### Backlog Sprint #3

| Id  | Descripción | Estimación | Responsable |
| --- | ----------- | ---------- | ----------- |
| 01  |             |            |             |
| 02  |             |            |             |
| 03  |             |            |             |
| 04  |             |            |             |
| 05  |             |            |             |

**Tabla 5** - Backlog - User Stories Sprint 3

### Backlog Sprint #4

| Id  | Descripción | Estimación | Responsable |
| --- | ----------- | ---------- | ----------- |
| 01  |             |            |             |
| 02  |             |            |             |
| 03  |             |            |             |
| 04  |             |            |             |
| 05  |             |            |             |

**Tabla 6** - Backlog - User Stories Sprint 4

- <strong>[Regresar](#tabla-de-contenido)</strong>

---

## Cronograma de Tareas

<!-- TODO NOTA Este diagrama de gantt está realizado en plantuml pero al git no leer directamente este tipo de diagramas sino con una extensión que no he revisado bien, se puede trabajar externo e importarlo en SVG ó PNG -->
<!-- https://plantuml.com/gantt-diagram -->

![Diagrama de Despliegue #2](/assets-documentacion/cronograma-tareas.svg "Ejemplo Diagrama Despliegue")
**Diagrama 2** - _Diagrama Gantt - Cronograma/Rúbrica General del Proyecto_

- <strong>[Regresar](#tabla-de-contenido)</strong>

---
