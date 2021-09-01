let movies = [

			 {
				title: "John Wick",
				genre: "Action",
				releasedDate: d = new Date(2014, 9, 29),
				rating: 5,
				displayRatingandTitle: function(){
				return(`the movie ${this.title} has ${this.rating} Stars`)
				},

				displayTitleandGenre: function(){
				console.log(`${this.title} is an ${this.genre} movie`)
				},
				
			},


			 {
				title: "John Wick 2",
				genre: "Action",
				releasedDate: d = new Date(2017, 1, 8),
				rating: 5,
				
				displayTitleandGenre: function(){
				console.log(`${this.title} is an ${this.genre} movie`)
				},
				
				
			},

			 {
				title: "John Wick 3",
				genre: "Action",
				releasedDate: d = new Date(2019, 4, 9),
				rating: 4,
				
				displayTitleandGenre: function(){
				console.log(`${this.title} is an ${this.genre} movie`)
				},
				
			},

			 {
				title: "The Equalizer 1",
				genre: "Action",
				releasedDate: d = new Date(2014, 10, 26),
				rating: 10,
				
				displayTitleandGenre: function(){
				console.log(`${this.title} is an ${this.genre} movie`)
				},
			
				
			},

				{
				title: "The Equalizer 2",
				genre: "Action",
				releasedDate: d = new Date(2018, 6, 17),
				rating: 8,
				
				displayTitleandGenre: function(){
				console.log(`${this.title} is an ${this.genre}  movie`)
				},
				

				
			}

			

]

// Activity 2

const showTitles = (num) => {
	if (movies[0].rating > num || movies[(movies.length-1)].rating < num) {
		console.log("No movies with that rating.")
	}else {
			console.log(`Movies with ${num} and above ratings`);
			for(i=0;i<movies.length;i++){
			if (num <= movies[i].rating) {
			console.log(`${movies[i].title} ${movies[i].rating} stars`);
			}
		}
	}
}




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


/*
Write a function called showTitles 
that accepts a single 
numeric parameter

Example:
showTitles(4)

Output
Movies with 4 and above ratings
1) Exorcist 4 stars
2) Godfather 5 stars

No movies with that rating
*/