const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    console.log("We're in!")
    //access the main div 
    const root = document.querySelector("#root")
    console.log("element root created:",root)

    //Add the title h1 on the page
    const title = document.createElement("h1")//create element
    title.innerText = "FREELANCERS"//add title
    root.appendChild(title)//append new node to 
    console.log("Title:",title.innerText)

    //create an unorder list element
    const unorderList = document.createElement("ul")
    unorderList.innerText = "Users:" //channge innerText
    console.log("ul:", unorderList.innerText)

    //Loop thru our users and get the name property to render it on the page.
    users.forEach((element) =>{
        console.log("name:", element.name)
        //create list items and add them to the ul and render it.
        const li = document.createElement("li");// create an element list
        li.innerText = element.name; //change the innertext to name value
        unorderList.appendChild(li)//add list item to the ul.
    })
    console.log("Out of the loop.")

    //append list to root element
    root.appendChild(unorderList)
    console.log("html code", root.innerHTML)


}

//call the main function
main();