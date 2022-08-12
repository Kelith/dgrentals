import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {  
        headers: {
            'X-RapidAPI-Key': '5c3d0a199bmsh8d3edddc8225bd6p13e94ajsnaed9841933af',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
   }