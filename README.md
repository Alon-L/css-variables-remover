# CSS Variables Remover
I recently ran into a problem where I had to use plain CSS, and also had to add compatibility for Internet Explorer. My CSS code included a bunch of variables that are not supported in Internet Explorer, so I made a script that removes them all.

# How to run?
- Clone the repository
- Run: ```npm start```

# How does it work?
The script simply finds every place a variable is used and replaces it with the initialised value for that variable.
The script does not affect any additional values or white-spaces included in your CSS code. 