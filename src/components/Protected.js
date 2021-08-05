import React from 'react';
import axios from 'axios';
import ShowingData from './ShowingData';
import { Row, Col, Card, Dropdown, Button, Table } from 'react-bootstrap';
import Select from 'react-select';

const optionData = [
    { label: 'Movie', value: 'MOVIE' },
    { label: 'Tv', value: 'TV' },
];

class Protected extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movie: [],
            tv: [],
            option: {
                label: 'Movie',
                value: 'MOVIE',
            },
        };
    }
    componentDidMount() {
        this.getAllMovie();
        this.getAllTv();
    }

    getAllMovie = () => {
        const config = {
            headers: {
            },
        };
        
        return axios
            .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=5e0981d8c0cd0848bf351ca105a5974f`, config)
            .then(response => {
                this.setState({ movie: response.data.results });
                // console.log('response movie', response);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    };

    getAllTv = () => {
        const config = {
            headers: {
            },
        };
        
        return axios
            .get(`https://api.themoviedb.org/3/tv/popular?api_key=5e0981d8c0cd0848bf351ca105a5974f`, config)
            .then(response => {
                this.setState({ tv: response.data.results });
                // console.log('response tv', response);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleFormChange = ( newValue: any) => {
        this.setState({ option: newValue });
    };

    render(){
        const { movie, tv, option,  } = this.state;

        return(
        <div style={{textAlign:'Left'}}>   
        <div style={{padding:10, maxWidth : 300}}>
            <Select
                name="entertain"
                value={option}
                options={optionData}
                onChange={option =>
                    this.handleFormChange(option)
                }
             /> 
        </div>
        { option.value === "MOVIE" && (
            <ShowingData
            dataList={movie}
            type='movie'/> 
        )}
        { option.value !== "MOVIE" && (
            <ShowingData
            dataList={tv}
            type='tv'/> 
        )}
        </div>
        );
    }


}

export default Protected;