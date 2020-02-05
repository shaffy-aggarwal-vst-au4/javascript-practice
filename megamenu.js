var megamenu = { 				//megamenu starts
	menu: [ 					//menu array
		{ 						//men starts here
			men: [ 				//men array starts
				{ 				// inside men topwear  start
					topwear: [ 	//topwear array start
						{ 		//shirt starts
							shirts: [{
									image: "url1", //shirt property starts
									brand: 4,
									price: 500
								},

								{
									image: "url1",
									brand: "4",
									price: 500
								}
							] //property ends

						}, //shirt ends
						{ //tshirts starts
							tshirts: [{ //tshirts property start
									image: "url3",
									brand: "p",
									price: 6600
								},
								{
									image: "url9",
									brand: "7",
									price: 6500
								}
							] //tshirts property ends


						} //tshirts ends
					] //topwear array ends
				}, //topwear ends

				{ //Bottomwear starts
					bottomwear: [ //Bottomwear  array starts
						{ //jeans starts
							jeans: [{
									image: "url7", //jeans property
									brand: "7",
									price: 600
								},

								{
									image: "url8",
									brand: "8",
									price: 800
								} //jenas property ends
							]
						}, //jeans ends
						{ //trousers start
							trousers: [{
									image: "url6", //trousers property
									brand: "6",
									price: 1600
								},

								{
									image: "url5",
									brand: "5",
									price: 1500
								}, //trousers property ends
							]
						} //trousers ends				

					] //Bottomwear array ends

				}, //Bottomwear ends

				{ //footwear starts		
					footwear: [ //footwear array starts
						{ //casual shoes starts
							casualshoes: [{
									image: "url4", //property starts		
									brand: "4",
									price: 1400
								},

								{
									image: "url2",
									brand: "8",
									price: 2800
								} //property ends	
							]

						}, //casual shoes ends

						{ //sports shoe start
							sportsshoe: [{
									image: "url0", //property starts		
									brand: "5",
									price: 2500
								},

								{
									image: "url8",
									brand: "8",
									price: 2800
								} //property ends
							]

						} //sports shoe ends

					] //footwear array ends

				} //footwear ends

			] //men array ends here
		}, //men ends 

		{ //women starts
			women: [ //women array starts
				{ //western starts
					Western: [{
							image: "url01", //property starts		
							brand: "f",
							price: 2500
						},

						{
							image: "url02",
							brand: "h",
							price: 2200
						}
					] //property ends

				}, //western ends
				{ //ethnic starts
					ethnic: [{
							image: "url05", //property starts		
							brand: "e",
							price: 1500
						},

						{
							image: "url2",
							brand: "e",
							price: 2700
						} //property ends
					]
				} //ethnic ends

			] //women array ends
		} //women ends
	] //menu array ends



} //megamenu ends

console.log(megamenu.menu[0].men[1].shirts[0].brand);
console.log(megamenu.menu[1].women[0].western[1].price);