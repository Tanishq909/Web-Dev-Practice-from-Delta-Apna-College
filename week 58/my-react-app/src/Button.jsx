function handleClik(event) {
    console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleDblClick() {
    console.log("you double clicked");
}
export default function Button() {
    return (
    <div>
        <button onClick={handleClik}>Click me!</button>
        <p onClick={handleMouseOver}>this parah is for event demo</p>
        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam, ratione reiciendis culpa sed praesentium tempora quas repellendus et, voluptatibus assumenda possimus temporibus dolorem in ut iste dolor. Maiores, enim.</p>
        <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>
    );
}