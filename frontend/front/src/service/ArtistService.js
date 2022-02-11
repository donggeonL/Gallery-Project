import React, {Component} from 'react';
import axios from "axios";


const Member_API_URL = 'http://localhost:10002/artistlist'

const ArtistService = {

    getAllArtist(){
        return axios.get(Member_API_URL)
    }

}
export default ArtistService;