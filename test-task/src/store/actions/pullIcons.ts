import { Dispatch } from "redux";

export const pullicon = (icon:any)=>({
    type: 'GET_ICON',
    payload: icon
})

export const fetchIcons = () => async (dispatch: Dispatch)=>{
    const response = await fetch('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.json')
            
    const data = await response.json();
    const allIcons = Object.keys(data);
    
    const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
    let word = randomIcon;
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);  
    
    dispatch(pullicon(word))     
}




// fetch('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.json')
// .then(response => response.json())
// .then(data => {
//   const allIcons = Object.keys(data);
//   console.log('qweqwe',allIcons); // Выводит список всех иконок
// });