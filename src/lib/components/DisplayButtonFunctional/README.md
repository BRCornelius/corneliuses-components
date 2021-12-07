# **Display Button Functional**
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
[BACK](../../../../README.md)