# **Navigation Header**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| customClass | *string* | | |
| icon | *string* | | The url of the icon to be used for the svp menu |
| logo | *string* | Yes | The url of the logo to be used |
| links | *array* | Yes | **Element schema:** { label: *string*, path: *string* } |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Navigation-Header--top_bar  | In SVP, the container for the logo |
| CC-Navigation-Header--logo     | |
| CC-Navigation-Header--hamburger_open | The menu button when the menu is open |
| CC-Navigation-Header--hamburger_menu | The menu button when the menu is closed |
| CC-Navigation-Header--hamburger_icon | |
| CC-Navigation-Header--links-menu | In SVP, the container for the nav links |
| CC-Navigation-Header--nav-link | Nav links |
| CC-Navigation-Header--nav_menu | In LVP, the container for the logo and the nav links |
| CC-Navigation-Header--nav-link-container | In LVP, the container for the nav links |
```
const links = [{label: 'Home', path: 'home'},{label: 'New World', path: 'new-world'}]

<NavigationHeader icon="https://hamburger.icon.com" logo="https://fun.image.com" links={links} />
```
[BACK](../../../../README.md)