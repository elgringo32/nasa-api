const url = 'https://api.nasa.gov/planetary/apod?api_key=ER0thjIWiQXWLmev33zo4nD76cVZRY8iZLIIqf08'

fetch(url) 
    .then(res => res.json())
    .then (data => {
        console.log(data.explanation)
        
    })
    .catch(err=> {
        console.log(err)
    })    

