# **Video Display HOC**
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
[BACK](../../../../README.md)