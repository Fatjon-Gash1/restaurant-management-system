import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './big-screen.styles.css';
import './bigbutton.css';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddTeamModal } from './AddTeamModal';
import { EditTeamModal } from './EditTeamModal';

export class Team extends Component {

    constructor(props) {
        super(props);
        this.state = { teamss: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('https://localhost:44365/api/team')
            .then(response => response.json())
            .then(data => {
                this.setState({ teamss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTeams(tid) {
        if (window.confirm('A jeni i Sigurt?')) {
            fetch('https://localhost:44365/api/team/' + tid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { teamss, teamsid, teamsname,teamsurname,position } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>
               
                <br />
                <b />
                <Table className="big-screen" striped bordered hover size="sm" variant="dark">
                    <thead>
                        <tr>
                            <th>Numri</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Pozita</th>
                            <th>Opsionet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamss.map(teams =>
                            <tr key={teams.TeamId}>
                                <td>{teams.TeamId}</td>
                                <td>{teams.TeamName}</td>
                                <td>{teams.TeamSurname}</td>
                                <td>{teams.Position}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                teamsid: teams.TeamId, teamsname: teams.TeamName,teamsurname: teams.TeamSurname, position: teams.Position
                                            })}>
                                            Editoni
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTeams(teams.TeamId)}>
                                            Fshij
        </Button>

                                        <EditTeamModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            teamsid={teamsid}
                                            teamsname={teamsname} 
                                            teamsurname={teamsurname} 
                                            position={position}/>
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    < Button variant='primary' className="bigbutton"
                        onClick={() => this.setState({ addModalShow: true })}>
                        Shtoni Anëtar</Button>

                    <AddTeamModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Team;