# Component Documentation
## [**Contact**](src/lib/components/Contact/README.md)
## [**Contact Form**](src/lib/components/Contact/README.md)
## [**Display Button Functional**](src/lib/components/DisplayButtonFunctional/README.md)
## [**Display Button Link**](src/lib/components/DisplayButtonLink/README.md)
## [**Drawer**](src/lib/components/Drawer/README.md)
## [**Error**](src/lib/components/Error/README.md)
## [**Hover HOC**](src/lib/components/Hover/README.md)
## [**Interstitial**](src/lib/components/Interstitial/README.md)
## [**Navigation Header**](src/lib/components/NavigationHeader/README.md)
## [**Router**](src/lib/components/Router/README.md)
## [**Scroll On Navigation**](src/lib/components/ScrollOnNavigate/README.md)
## [**Social Footer**](src/lib/components/SocialFooter/README.md)
## [**Video Display HOC**](src/lib/components/VideoDisplay/README.md)
---
# Coding Standards
## Exporting components
Components should be exported as default from their file but as a part of the global export object from the app.
## Styling
The className naming convention used in this app is `CC-<COMPONENT_NAME>--Modifier`.
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
## Publishing

- Update the package.json file with a new version number.
  - Major versions are for new features and integrations.
  - Minor versions are for new components or extant feature expansions.
- Run: `yarn babel` then `npm publish`
---
---