# Error
| **Props** | **Type** | **Required?** | **Other Info** *(optional)* |
| -- | -- | -- | -- |
| copy | *string* | | |
| customClass | *string* | | |
| imageUrl | *string* | | |
| hasError | *boolean* | Yes | |
| redirect | *string* | | |
| setHasError | *function* Yes | |

| **className** | **Description** *(optional)* |
| -- | -- |
| CC-Error--container | Container for image and copy |
| CC-Error--image | Image |
| CC-Error--copy | Copy |
```
const [error, setError] = useState(false)
<Error copy="There has been an error" imageUrl="image.com" hasError={error} redirect="where.to-end-up.com" setHasError={setError} />
```
[BACK](../../../../README.md)