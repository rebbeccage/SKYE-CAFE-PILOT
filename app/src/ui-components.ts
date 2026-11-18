/** Presentation only. Icon cell coordinates can change without touching game data. */
export const watercolorIcons={people:[0,0],menu:[1,0],warehouse:[2,0],decor:[3,0],garden:[0,1],explore:[1,1],sun:[2,1],rain:[3,1],snow:[0,2],coin:[1,2],sprout:[2,2],sound:[3,2]} as const;
export type WatercolorIcon=keyof typeof watercolorIcons;
export function watercolorIcon(name:WatercolorIcon,extra=''){
 const [x,y]=watercolorIcons[name];
 return `<span class="wc-icon ${extra}" data-icon="${name}" aria-hidden="true" style="--icon-x:${x*100/3}%;--icon-y:${y*50}%"></span>`;
}
export function navigationButton(id:string,label:string,icon:WatercolorIcon,description:string){
 return `<button class="paper-control nav-tile" data-open="${id}" aria-label="${label}" title="${description}" aria-haspopup="dialog">${watercolorIcon(icon)}<span class="nav-label">${label}</span><i class="nav-leaf" aria-hidden="true" hidden></i><span class="nav-lock" aria-hidden="true" hidden></span></button>`;
}
export function avatarBadge(name:string,url:string){
 return `<span class="avatar-crop"><img src="${url}" alt="${name}的水彩头像"><i class="story-leaf" aria-hidden="true" hidden></i></span><span class="avatar-name">${name}</span>`;
}
export function taskProgress(){return `<div class="goal-meter">${watercolorIcon('sprout')}<progress hidden aria-label="当前目标进度"></progress></div>`}
export function weatherLabel(weather:'sun'|'rain'|'snow'){
 return watercolorIcon(weather)+`<span class="weather-name">${{sun:'晴天',rain:'雨天',snow:'雪天'}[weather]}</span>`;
}
