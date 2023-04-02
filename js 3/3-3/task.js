const bookControl= document.querySelector(".book")
const fontControl= document.querySelector(".book__control_font-size")
const colorControl= document.querySelector(".book__control_color")
const bgControl= document.querySelector(".book__control_background")
const fonts = Array.from(document.querySelectorAll(".font-size"))
const colors = (Array.from(colorControl.children)).slice(1)
const bgColors = (Array.from(bgControl.children)).slice(1)

const fontsizeChange = function(event){
   let index = fonts.findIndex((font) =>
   font.classList.contains("font-size_active"));
   let target = event.target;
   event.preventDefault();

fonts[index].classList.remove("font-size_active");
target.classList.toggle("font-size_active")
bookControl.classList.remove("book_fs-small", "book_fs-big")
if (target.classList.contains("font-size_small")){
    bookControl.classList.add("book_fs-small")  
} else if (target.classList.contains("font-size_big")){
    bookControl.classList.add("book_fs-big")
}
}


const colorChange = function(event){
    if (event.target.tagName == 'SPAN') {
        return
    }
   let index = colors.findIndex((color) =>
   color.classList.contains("color_active"));
   let target = event.target;
   event.preventDefault();

colors[index].classList.remove("color_active");
target.classList.toggle("color_active")
bookControl.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke")
if (target.classList.contains("text_color_black")){
    bookControl.classList.add("book_color-black")  
} else if (target.classList.contains("text_color_gray")){
    bookControl.classList.add("book_color-gray")
} else if (target.classList.contains("text_color_whitesmoke")){
    bookControl.classList.add("book_color-whitesmoke")
}
}


const bgColorChange = function(event){
    if (event.target.tagName == 'SPAN') {
        return
    }
   let index = bgColors.findIndex((color) =>
   color.classList.contains("color_active"));
   let target = event.target;
   event.preventDefault();

bgColors[index].classList.remove("color_active");
target.classList.toggle("color_active")
bookControl.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white")
if (target.classList.contains("bg_color_gray")){
    bookControl.classList.add("book_bg-gray")  
} else if (target.classList.contains("bg_color_black")){
    bookControl.classList.add("book_bg-black")
} else if (target.classList.contains("bg_color_white")){
    bookControl.classList.add("book_bg-white")
}
}



fontControl.addEventListener("click", fontsizeChange)
colorControl.addEventListener("click", colorChange)
bgControl.addEventListener("click", bgColorChange)