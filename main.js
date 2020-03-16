//JavaScript Document

class houses{
	constructor(name, price, rating, location, rooms,availablity,features){
		this.name = name;
		this.price = price;
		this.rating = rating;
		this.location = location;
		this.rooms = rooms;
		this.availability = availability;
		this.features = features;

	}

}
 let houses1 = new houses('Motells', 80.00, 4 ,'beach side, barrie', 'Delux', false, 'internet'); 
 let houses2 = new houses('Hotells', 60.00, 3 ,'downtown', 'one person', true, 'tv'); 
 let houses3 = new houses('Exspensive', 100.00, 5,'beachside', 'suite', false, 'internet');
 let houses4 = new houses('Alright', 40.00, 2,'midtown barrie', 'four people', true , 'tv');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let p = document.createElement('p');
let sentence = this.name + ' Costs: '+this.price+', Is rated at:'+this.rating+' stars, is located at '+this.location+' it is a '+this.rooms+' room, there are '+this.availability+ ' rooms left the rooms come with '+this.features+'.';
console.log(sentence);

class houses3 extends houses{
	constructor(name, price, rating, location, rooms,availablity,features){
		super(name, rating, location, rooms,availablity,features);
		this.price =  super(price)*0.2;
	}
}