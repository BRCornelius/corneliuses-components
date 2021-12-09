# **Social Footer**
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
[BACK](../../../../README.md)