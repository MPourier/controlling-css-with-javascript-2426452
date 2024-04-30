const styleSheet = document.styleSheets[0];

console.log(styleSheet.cssRules[2]);

let maxInlineValue = styleSheet.cssRules[2].styleMap.get("max-inline-size").value;
let maxInlineUnit = styleSheet.cssRules[2].styleMap.get("max-inline-size").unit;

console.log('maxInlineValue = ${maxInlineValue}, maxInlineUnit = ${maxInlineUnit}'); 