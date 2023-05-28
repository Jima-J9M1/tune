import { createSlice } from "@reduxjs/toolkit"

const intialState ={
    songs : [],
    loading:false,
    error:null
}

const songSlice = createSlice({
    name:"song",
    initialState:intialState,

    reducers:{
        fetchSongList:(state)=>{
          state.loading = true;
          state.error= null;
        },

        fetchSongSuccess:(state,action)=>{
            state.songs = action.payload;
            state.loading = false;
            state.error= null;
        },

        fetchSongFailer:(state, action)=>{
            state.loading = false;
            state.error= action.payload;
        },

        addSong:(state,action)=>{
            state.songs.push(action.payload)
        },

        deleteSong:(state,action)=>{
            const songId = action.payload;
            state.songs = state.songs.filter((song)=>song.id != songId); 
        },

        updateSong:(state,action)=>{
            const updateSong = action.payload;
            const indexOfSong = state.songs.indexOf((song)=>song.id === updateSong.id);

            if(indexOfSong != -1){
                state.songs[indexOfSong] = updateSong
            }
        },
  }

}

)

export const {
    fetchSongFailer,
    fetchSongList,
    fetchSongSuccess,
    addSong,
    deleteSong,
    updateSong,
}  = songSlice.actions;

export default songSlice.reducer;