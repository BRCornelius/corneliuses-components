## Available Scripts
In the project directory, you can run:
### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `yarn babel`
Builds the app for production to the `dist` folder.\
It correctly bundles the React components and optimizes the build for the best performance.
---
# Coding Standards
### Exporting components
Components should be exported as default from their file but as a part of the global export object from the app.
### Styling
The className naming convention used in this app is `CC-<COMPONENT_NAME>--Modifier`.
### Publishing

- Update the package.json file with a new version number.
-- Major versions are for new features and integrations.
-- Minor versions are for new components or extant feature expansions.
- Run: `yarn babel` then `npm publish`
---
# Component Documentation
## Display Button
| **Props**     | **Type**      | **Other Info** *(optional)*      |
| --            | --            | -- |
| buttonLabel   | *string*      | |
| children      | *React node*  | |
| value         | *string*      | |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Display_Button--container  | |
| CC-Display_Button--button     | |
## Header
| **Props**     | **Type**      | **Other Info** *(optional)*      |
| --            | --            | -- |
| icon          | *string*      | The url of the icon to be used for the svp menu |
| logo          | *string*      | The url of the logo to be used |
| links         | *object*      | { label: *string*, path: *string* } |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Header--top_bar  | In SVP, the container for the logo |
| CC-Header--logo     | |
| CC-Header--hamburger_open | The menu button when the menu is open |
| CC-Header--hamburger_menu | The menu button when the menu is closed |
| CC-Header--hamburger_icon | |
| CC-Header--links-menu | In SVP, the container for the nav links |
| CC-Header--nav-link | Nav links |
| CC-Header--nav_menu | In LVP, the container for the logo and the nav links |
| CC-Header--nav-link-container | In LVP, the container for the nav links |
