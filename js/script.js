let movies = [

			 {
				title: "John Wick",
				genre: "Action",
				releasedDate: d = new Date(2014, 9, 29),
				rating: 100,
				displayRatingandTitle: function(){
				return("the movie " + this.title + " has " + this.rating + " Stars")
				},
				displayTitleandGenre: function(){
				console.log(this.title + " is an " + this.genre + " movie")
				}
			},


			 {
				title: "John Wick 2",
				genre: "Action",
				releasedDate: d = new Date(2017, 1, 8),
				rating: 100,
				
				displayTitleandGenre: function(){
				console.log (this.title + " is an " + this.genre + " movie")
				}
				
			},

			 {
				title: "John Wick 3",
				genre: "Action",
				releasedDate: d = new Date(2019, 4, 9),
				rating: 100,
				
				displayTitleandGenre: function(){
				console.log (this.title + " is an " + this.genre + " movie")
				}
			},

			 {
				title: "The Equalizer 1",
				genre: "Action",
				releasedDate: d = new Date(2014, 10, 26),
				rating: 100,
				
				displayTitleandGenre: function(){
				console.log(this.title + " is an " + this.genre + " movie")
				}
				
			},

				{
				title: "The Equalizer 2",
				genre: "Action",
				releasedDate: d = new Date(2018, 6, 17),
				rating: 100,
				
				displayTitleandGenre: function(){
				console.log(this.title + " is an " + this.genre + " movie")
				}
			},

			

]

const showallmovies = () => {
	for (let i = 0 ; i < movies.length; i++){
 movies[i].displayTitleandGenre()
}
}


console.log(movies[0].displayRatingandTitle());
// console.log(movies[0].displayTitleandGenre());
// console.log(movies[1].displayTitleandGenre());
// console.log(movies[2].displayTitleandGenre());
// console.log(movies[3].displayTitleandGenre());
// console.log(movies[4].displayTitleandGenre());