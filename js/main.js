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
    },
    {
        label: "Week 4 code and notes",
        url: "wk04/"
    },
    {
        label: "Week 5 code and notes",
        url: "wk05/"
    },
    {
        label: "Week 6 code and notes",
        url: "wk06/"
    },
    {
        label: "Week 7 code and notes",
        url: "wk07/"
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