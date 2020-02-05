var menu=['home',"sevices",'about','contact'];

var container = document.createElement('div');
 document.body.appendChild(container);
 container.setAttribute('id','container');
 var x=menu.length;
for(x=0;x<menu.length;x++)
{
 var link=document.createElement("a");
 container.appendChild(link);
 link.setAttribute('href',menu[x]+".html");
 link.setAttribute("target","_blank");
 var text=document.createTextNode(menu[x]);
 link.appendChild(text);
}