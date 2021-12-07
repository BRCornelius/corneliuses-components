# Router
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| routes | *array* | Yes | **Element Schema:** { path: *string*, element: *ElementType* } |
``` App.js
import { SplashPage, ContactPage, AboutUsPage } from './views

const routes = [{
  path: '',
  element: SplashPage
}, {
  path: '/contact',
  element: ContactPage
}, {
  path: '/about',
  element: AboutUsPage
}];

<Router routes={routes} />
```
[BACK](../../../../README.md)