const heading=React.createElement("h1",{id:"heading"},"hello react");
      

/*
<div id=parent
<div id=child
<h1></h1>
</div>
</div>
*/
const paren=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"i am h1 tag")));
const root=ReactDOM.createRoot(document.getElementById("root"));  
root.render(paren);
console.log(paren);