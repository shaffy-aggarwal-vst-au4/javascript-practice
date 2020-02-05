var deals = [
	{
		img:"accessories.jpg",
		brand:"vega",
		price:1000,
		category:"accessories"
	},
	
	{
		img:"earphones.jpg.",
		brand:"boss",
		price:1000,
		category:"earphones"
	},
	
	{
		img:"keyring.jpg",
		brand:"archies",
		price:1000,
		category:"Gifts"
	},
	
	{
		img:"watch.jpg",
		brand:"fossil",
		price:1000,
		category:"electronics"
	}
]

var dealContainer=document.getElementById(dealCont);
var dealOfTheDay="";
for(deal of deals){
	//console.log(deal.img);
	dealOfTheDay+="<div class='product'><img src='images/"+ deal.img+"'><div class='brand'>"+deal.brand+"</div><div class='price'>"+deal.price+"</div><div class='category'>"+deal.category+"</div></div>"
	
}
dealCont.innerHTML=dealOfTheDay;