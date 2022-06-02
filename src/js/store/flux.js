const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url_api: "https://swapi.dev/api",
			characters: [],
			planets: [],
			Favorites: [],
			CharacterDetail: {},
			PlanetDetail: {}
		},
		actions: {
			getCharacters: async () => {
				try{
					const response = await fetch(`${getStore().url_api}/people`)
					let data = await response.json();
					console.log(data)
					setStore({characters: data.results });
				} catch(error){
					console.log(error);
				};
			},
			getPlanets: async () => {
					const response = await fetch(`${getStore().url_api}/planets`)
					let data = await response.json();
					console.log(data)
					setStore({planets: data.results });
			},	
			getCharacterDetail: async (id) =>{
				try{
					const response = await fetch(`${getStore().url_api}/people/${id}`)
					const data = await response.json();
					console.log(data)
					setStore({CharacterDetail: data})
				} catch (error){
					console.log(error);
				}
			},
			getPlanetDetail: async (id) =>{
				try{
					const response = await fetch(`${getStore().url_api}/planets/${id}`)
					const data = await response.json();
					console.log(data)
					setStore({PlanetDetail: data})
				} catch (error){
					console.log(error);
				}
			},
			addFavorites: id => {
				const store = getStore();
					(store.Favorites.includes(id)) ? console.log("Ya esta agregado") : setStore(store.Favorites.push(id))
			},
			deleteFav: id => {
				const store = getStore();
				setStore({Favorites: store.Favorites.filter((item, ind) => ind !== id)})
			}
		}
	}
}

export default getState;
