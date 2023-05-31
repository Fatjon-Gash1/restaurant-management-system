import React, { Component } from 'react';
import { Table } from 'react-bootstrap';



export class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {teams:[]}
    }

    refreshList() {
        fetch('https://localhost:44365/api/team')
            .then(response => response.json())
            .then(data => {
                this.setState({ teams: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

   
    render() {
        const {teams} = this.state;
      
        return (
            <div>
               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm"  className="big-screen" variant="dark">
                    <thead>
                        <tr>                            
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Pozita</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map(teams =>
                        <tr>                          
                               
                                <td>{teams.TeamName}</td>
                                <td>{teams.TeamSurname}</td>
                                <td>{teams.Position}</td>
                                                                  

                            </tr>)}
                    </tbody>

                </Table>

               
            </div>
        )
    }
}

export default Team;