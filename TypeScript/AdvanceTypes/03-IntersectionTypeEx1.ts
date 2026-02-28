
/* case 1- useful if we want a particlar type/object implement more than one type. ex in below example i want textbox implement both method */
type Draggable = {
    drag: () => void;
};

type Resizable = {
   resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox : UIWidget = {
    drag: ()=> console.log("this is draggable"),
    resize: ()=> console.log("this is resizable")
}

textBox.drag();
textBox.resize();