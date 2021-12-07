# **Hover HOC**
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
[BACK](../../../../README.md)