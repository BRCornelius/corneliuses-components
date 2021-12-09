# **Contact Form**
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
# **Contact**
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
| CC-Contact--close | Closes the modal |
| CC-Contact--top_row | Top row includes email/text buttons and close |
```
const handleTextSubmit = inputs => console.log('text', inputs)
const handleRmsilSubmit = inputs => console.log('email', inputs)

<Contact buttonLabel="Open the modal" handleTextSubmit={handleTextSubmit} handleEmailSubmit={handleEmailSubmit} />
```
[BACK](../../../../README.md)