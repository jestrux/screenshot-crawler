# Screenshot and Crawl site content

### Screenshot Feature

#### Test it out
Go to [https://www.earthr.co/team](https://www.earthr.co/team)

Press Screenshot then try the following

```
.teammembers
```
Result: A screenshot of all team members.

```
.teammemberimage
``` 
Result: Screenshots of individual team member memojis.

```
.teammemberimagebox
```
Result: Screenshots of individual team member with surrounding background.

----

### Crawler Feature

#### Test it out

Go to [https://www.earthr.co/team](https://www.earthr.co/team)

Press Crawl then try the following

#### Simple Text

**Query**: 
```
.teammembername
```

**Result**:
```
Eren
Ayda
Gurkan

...

```

**Query**: 
```
.teammemberimage img:first-child::src
```

**Result**:
```
https://assets.website-files.com/5fb9a7bda8f88a1d771d5dc2/61c23e36496d5db54e52cd69_TEAM%20(14).png
https://assets.website-files.com/5fb9a7bda8f88a1d771d5dc2/61c23dd69a63fcc73c3de028_TEAM%20(13).png
https://assets.website-files.com/5fb9a7bda8f88a1d771d5dc2/61c23e367adee10fa2cb7b5b_TEAM%20(15).png

...

```

### JSON

**Query**: 
```
.teammember => name::.teammembername|position::.teammemberposition
```

**Result**:
```json
[
	{
		"name": "Eren",
		"position": "Co-founder & Dev Lead"
	},
	{
		"name": "Ayda",
		"position": "Co-founder & Design Lead"
	},
    ...
]
```

**Query**: 
```
.teammember => color::.teammemberimagebox::backgroundColor|image::img::src|name::.teammembername|position::.teammemberposition
```

**Result**:
```json
[
	{
		"color": "rgb(238, 245, 252)",
		"image": "https://assets.website-files.com/5fb9a7bda8f88a1d771d5dc2/61c23e36496d5db54e52cd69_TEAM%20(14).png",
		"name": "Eren",
		"position": "Co-founder & Dev Lead"
	},
	{
		"color": "rgb(255, 237, 229)",
		"image": "https://assets.website-files.com/5fb9a7bda8f88a1d771d5dc2/61c23dd69a63fcc73c3de028_TEAM%20(13).png",
		"name": "Ayda",
		"position": "Co-founder & Design Lead"
	},
    ...
]
```