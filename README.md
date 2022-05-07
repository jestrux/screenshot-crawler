# Screenshot and Crawl site content

### Screenshot

#### Test it out
Go to [https://www.earthr.co/team](https://www.earthr.co/team)

Press Screenshot then try the following

```
.teammembers // a screenshot of all team members
.teammemberimage // screenshots of individual team member memojis
.teammemberimagebox // screenshots of individual team member with surrounding background

.teammember => name::.teammembername|position::.teammemberposition
.teammember => color::.teammemberimagebox::backgroundColor|image::img::src|name::.teammembername|position::.teammemberposition
```

### Crawler

#### Text data
Go to [https://www.earthr.co/team](https://www.earthr.co/team)

Press Crawl then try the following

```
.teammembername // a screenshot of all team members
.teammemberimage img::src // links team member memojis
```

### JSON
```
.teammember => name::.teammembername|position::.teammemberposition // json of team member name and position
.teammember => color::.teammemberimagebox::backgroundColor|image::img::src|name::.teammembername|position::.teammemberposition // json of team member image background color, image link, name and position
```