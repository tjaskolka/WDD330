const links = [
    {
        label: "Week 1 code and notes",
        url: "wk01/index.html"
    },
    {
        label: "Week 2 code and notes",
        url: "wk02/"
    },
    {
        label: "Week 3 code and notes",
        url: "wk03/"
    }
]

links.forEach(element => {
 
    
    let item = document.createElement('li');

    let li = document.createElement('a');
    li.setAttribute('href', `${element.url}`); 
    li.innerHTML = `${element.label}`;

    item.append(li);
    

    document.querySelector('ol#links').appendChild(item);


    
});