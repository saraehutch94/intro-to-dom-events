// alert("Temporary alert for testing!");

// IPO Pattern (below) --> "Input, Process, Output"
// Machine takes input, processes them, and gives an
// output

// Variables


// Cached (DOM) Element References
// btn --> DOM element reference
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

// Event Listeners --> this entire function is an algorithm
btn.addEventListener("click", handleAddComment);
// We are registering an event listener to a parent element
// so we can take advantage of event bubbling
ul.addEventListener("click", handleClick);

// event.target is what triggered the event
// In this case, the element that was clicked on (button
// event can also be referred to as "evt" or "e"

// Functions

function handleClick(evt) {
    // we delegate some action based on which element triggered
    // the event using an if statement
    if (evt.target.tagName === "LI") {
        evt.target.style.backgroundColor = "yellow";
    }
}

function handleAddComment(evt) {
    // console.log("Clicked!", evt.target);
    const li = document.createElement("li");
    const inp = document.querySelector("input");
    li.textContent = inp.value;
    // console.log(li);
    // function will stop running right when we return something
    // if (inp.value === "") return;
    
    // the if statement above also equals:
    if (inp.value !== "") {
        ul.appendChild(li);
        inp.value = "";
    }

    document.querySelector("ul").appendChild(li);
    // how do we set the input value to an empty value?
    inp.value = "";
}
