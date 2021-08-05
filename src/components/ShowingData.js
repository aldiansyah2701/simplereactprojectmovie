
import React from 'react';
import { Row, Col, Card, Dropdown, Button, Table } from 'react-bootstrap';

class ShowingData extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: null,
        };
    }

    renderColor = value => {
        if(value >=  1000){
            return '#1be847'
        } else if (value < 1000 && value > 300){
            return '#e49012'
        } else {
            return '#d61010'
        }
    }

    renderDataList(){
        const { dataList, type } = this.props;
        return dataList.map((data,index) => {
            return (
                <tr>
                    <td>
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                             }}>
                            <b style={{color:'white'}}>{index + 1}</b>
                        </Card>
                    </td>
                    <td>
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                             }}>
                            <b style={{color:'white'}}>{type === 'movie' ? data.original_title : data.original_name}</b>
                        </Card>
                    </td>
                    <td>
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                             }}>
                            <b style={{color:'white'}}>{type === 'movie' ? data.overview : data.overview}</b>
                        </Card>
                    </td>
                    <td>
                        <Card
                            style={{
                            background: this.renderColor(data.popularity),
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                             }}>
                            <b style={{color:'white'}}>{type === 'movie' ? data.popularity : data.popularity}</b>
                        </Card>
                    </td>
                </tr>
            );

        });
    }

    render(){
        return (
        <Table>
            <thead>
                <tr>
                    <th> 
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                             }}>
                            <b style={{color:'white'}}>No</b>
                        </Card>
                    </th>
                    <th> 
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                            textAlign:'center'
                             }}>
                            <b style={{color:'white', textAlign:'center'}}>Title</b>
                        </Card>
                    </th>
                    <th> 
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                            textAlign:'center'
                             }}>
                            <b style={{color:'white', textAlign:'center'}}>Overview</b>
                        </Card>
                    </th>
                    <th> 
                        <Card
                            style={{
                            background: '#636060',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 10, margin: 10,
                             }}>
                            <b style={{color:'white'}}>Popularity</b>
                        </Card>
                    </th>
                </tr>
            </thead>
            <tbody>{this.renderDataList()}</tbody>
         </Table>
        );
    }

}

export default ShowingData;