export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
}

export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: string
	slug: string
}

export interface IParameters {
	year: string
	duration: string
	country: string
}

export interface IMovie {
	_id: string
	poster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}

export interface IMoviesEditInput extends Omit<IMovie, '_id'> {}
