# Component Documentation
## **Display Button Link**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| buttonLabel | *string* | | |
| children | *React node* | | |
| customClass | *string* | | |
| value | *string* | Yes | |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Display_Button_Link--container  | |
| CC-Display_Button_Link--button     | |
```
<DisplayButtonLink buttonLabel="Navigate to the New World" value="new-world">
    <h1>Hello NEW World</h1>
</DisplayButtonLink>
```
## **Display Button Functional**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| children | *React node* | | |
| clickFunction | *function* | Yes | |
| customClass | *string* | | |
| isActive | *boolean* | | |
| item | *array* | Yes | **Element schema:** { label: *string*, url: *string* } |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Display_Button_Functional--container_active | The button when it is set as active |
| CC-Display_Button_Functional--container_inactive | The button when it is set as inactive |
| CC-Display_Button_Functional--image | |
```
const clickFunction = () => console.log('Item clicked')
const item = {label: "This is a button.", url: "item.image.com"};

<DisplayButtonFunctional clickFunction={clickFunction} isActive={checkIfActive()} item={item}>
  <h1>{item.label}</h1>
</DisplayButtonFunctional>
```
## **Navigation Header**
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
## **Social Footer**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| children | *node* | | |
| customClass | *string* | | |
| isCorneliuses | *boolean* | | |
| socialLinks | *array* |  | **Element schema:** {id: *string*, label: *string*, path: *string*} |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Social_Footer--container | The entire footer container |
| CC-Social_Footer--links_primary | Holds the social media site links |
| CC-Social_Footer--links_secondary | Holds the alternate contact info |
| CC-Social_Footer--link | Text link to social media site |
```
const socialLinks = [{id: 'twitter', label: 'Twitter', path: 'www.twitter.com'}, {id: 'facebook', label: 'facebook', path: 'www.facebook.com'}]

<SocialFooter socialLinks={socialLinks} isCorneliuses>
  <AlternateContactComponent />
</SocialFooter>
```
## **Contact Form**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| customClass | *string* | | |
| handleSubmit | *function* | Yes | Function to run on submit of form with form contents as parameter object |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Contact_Form--form | Outer wrapping form component |
| CC-Contact_Form--names | Container for first and last name inputs |
| CC-Contact_Form--input | All text input boxes |
| CC-Contact_Form--message | Message input box |
| CC-Contact_Form--submit | Submit button |
```
const handleSubmit = (inputs) => console.log(inputs);

<ContactForm handleSubmit={handleSubmit} />
```
## **Contact**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| buttonLabel | *string* | | |
| customClass | *string* | | |
| handleTextSubmit | *function* | Yes | Will execute with form info as parameters on text submit |
| handleEmailSubmit | *function* | Yes | Will execute with form info as parameters on email submit |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Contact--modal | The modal container |
| CC-Contact--methods | Container for contact method buttons |
| CC-Contact--method_active | The contact method button when it is active |
| CC-Contact--method_inactive | The contact method button when it is inactive |
| CC-Contact--button | Button that opens the contact modal |
```
const handleTextSubmit = inputs => console.log('text', inputs)
const handleRmsilSubmit = inputs => console.log('email', inputs)

<Contact buttonLabel="Open the modal" handleTextSubmit={handleTextSubmit} handleEmailSubmit={handleEmailSubmit} />
```
## **Hover HOC**
| **Parameters** | **Type** | **Other Info** *(optional)* |
| -- | -- | -- |
| Setup Object | *object* | { customClass: *string* } |
| HoverComponent | *React component* | The component to be displayed on hover |
| DisplayComponent | *React component* | The component with the hover behavior |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Hover--display | Container for the Display Component|
| CC-Hover--modal | Container for the Modal Component|
```
const Label = () => <h1>Hover over me</h1>;
const Display = () => <p>This is working and displaying correctly</p>;
const setupObject = { customClass: 'example-hover' };
const ConnectedLabel = () => withHover(setupObject)(Display)(Label);

<ConnectedLabel />
```
## **Video Display HOC**
| **Parameters** | **Type** | **Other Info** *(optional)* |
| -- | -- | -- |
| Initial setup object | *object* | { customClass: *string*, initialVideoSource: *string* } |
| ListComponent | *React component* | The component with the list of videos |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Video_Display--container | Container for the Video Display and the list |
| CC-Video_Display--video | Actual video tag|
```
const Videos = {{clickFunction, videos}) => <>
  {videos.map(video => <div onClick={() => clickFunction(video.url)}>video.title<div/>)}
</>;
const initalSetup = { initialVideoSourse: '' };
const ConnectedVideoList = () => withVideoDisplay(initialSetup)(Videos);

<ConnectedVideoList />
```
## **Scroll On Navigation**
Place this component within the Router on App.js to automatically send the user to the top of the page when they navigate from one page to the next.
```App.js
function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <PageView />
        <Footer />
      </Router>
    </div>
  );
}
```
## **Drawer**
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| children | *node* | | |
| customClass | *string* | | |
| imageUrl | *string* | | For the image alongside the label |
| label | *string* | Yes | |
| closeIcon | *node* | | The icon to close the drawer |
| openIcon | *node* | | The icon to open the drawer |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Drawer--display_container | The container for the label and contents |
| CC-Drawer--label_container | Container for the label |
| CC-Drawer--label_image | Image displayed beside the label |
| CC-Drawer--expanded_container | Container for expanded content |
| CC-Drawer--icon | Default open and close icon |
```
<Drawer imageUrl="product.image.com" label="Product Name">
  <h1>See this content</>
  <p>But only when the drawer is open</p>
</Drawer>
```
## Interstitial
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| condition | *bool* | Yes | |
| customClass | *string* | | |
| imageSource | *string* | | |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Interstitial--container | Contains the image |
| CC-Interstitial--image | The image used as the interstitial |
```
<Interstitial condition={true} imageSource="sample.image.com" />
```

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