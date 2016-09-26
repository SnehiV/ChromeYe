ChromeYe
------
###Background
Kanye West is beloved by many fans. Enriching the browser experience by
Kanye images and quotes by taking advantage of [yepi.io](https://yepi.io/).
This extension will provide a new tab page with a background image of Kanye
West and a Kanye quote at the top to inspire or entertain you during your web session. It will also include more functional components like a google search bar and weather widget. There are some lyrics
that mention the different weather types so that could be included with the
weather widget also.


###Functionality MVP
With this extension:

- when the user open a new tap there will be an image and quite from Kanye
- the new tab page will also include a Google search bar
- also an optional weather widget that will describe the weather with a Kanye
  lyric when applicable

Bonus:
 - Ye Button: The ye button could sit next to the url bar and when pressed it
replaces all the sentences in the document with Kanye lyrics.

 - Goals: Kanye wants people to achieve their goals so I could create a goals widget that
appears on the new tab as well. The user would input goals.

###Wireframe
![wireframe][wireframe.png]

###Technologies and Technical Challenges

This extension will be implemented using the standard Chrome extension technology: Javascript, HTML, CSS, and jQuery to make ajax calls easier. In addition to the `manifest.json` and `package.json` files there will be two scripts:

- `util.js` file for all the ajax calls
- `chromeYe.js` to handle the logic of inserting the weather quote based on the weather. Also any other logic necessary for the new tab page.

two html filea:

- `newtab.html` for the new tab html. (Not sure if I need this but I will look up whats the  best process of setting up the new tab page)
- `newtab.css` for styling the new tab page

2-3 apis used:

- [yepi.io](https://yepi.io/) for the kanye background and quote
- [openweathermap](http://www.openweathermap.com/API) for the weather data
- google search api??

There shouldn't be too many technical challenges. I don't have a lot of experience making
API calls so this will be good practice. Perhaps matching a quote to the weather data could take
a little time to figure out exactly how to implement it.


###Implementation Timeline:

####Day1:
Get started on the infrastructure of the extension, following the guide from Chrome. By the end of the day, I will have:

- A completed package.json
- A completed manifest.json
- Understand the basics of how to setup a new tab page

####Day2:
Have the new tab page call an api request to [yepi.io](https://yepi.io/) to have the background image and quote display. By the end of the day:

- A new tab will have a background image and quote from the api
- a google search bar on the new tab page

##Day3:
Setup the weather widget and and figure out how to apply the weather data and decide which weather related lyrics I should use. By the end of the day:

- A new tab will have the weather widget
- It will also apply a lyric as part of the display of the weather widget if applicable

##Day4:
Work on styling and packaging the code as extension. Bonus features.

- A working, ready to submit chrome extension
