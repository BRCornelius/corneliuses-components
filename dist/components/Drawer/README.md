# **Drawer**
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
[BACK](../../../../README.md)