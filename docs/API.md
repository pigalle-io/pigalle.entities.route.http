# API reference of :

An entity for HTTP route usable with the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_http-route-entity"></a>

### http-route-entity
An entity to define HTTP route.

**Example**  
```js
const {HttpRouteEntity} = require('@pigalle/entities.route.http')

const httpRoute = HttpRouteEntity.factory('/api/', 'GET', () => { return {rs: 1}; })
```

* [http-route-entity](#module_http-route-entity)
    * [~HttpRouteEntity](#module_http-route-entity..HttpRouteEntity)
        * [new HttpRouteEntity()](#new_module_http-route-entity..HttpRouteEntity_new)

<a name="module_http-route-entity..HttpRouteEntity"></a>

#### http-route-entity~HttpRouteEntity
An HTTP route.

**Kind**: inner class of [<code>http-route-entity</code>](#module_http-route-entity)  
**Access**: public  
<a name="new_module_http-route-entity..HttpRouteEntity_new"></a>

##### new HttpRouteEntity()
Create a new instance of {HttpRoute}.

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Thu, 22 Feb 2018 17:39:06 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
