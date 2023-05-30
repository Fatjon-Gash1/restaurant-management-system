import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './big-screen.styles.css';
import './bigbutton.css';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddKodiModal } from './AddKodiModal';
import { EditKodiModal } from './EditKodiModal';

export class Kodi extends Component {

    constructor(props) {
        super(props);
        this.state = { tavs: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('https://localhost:44365/api/kodi ')
            .then(response => response.json())
            .then(data => {
                this.setState({ tavs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTav(tid) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:44365/api/kodi/' + tid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { tavs, tavid, tavname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>
               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>KodiId</th>
                            <th>KodiName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tavs.map(tav =>
                            <tr key={tav.KodiId}>
                                <td>{tav.KodiId}</td>
                                <td>{tav.KodiName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                tavid: tav.KodiId, tavname: tav.KodiName
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTav(tav.KodiId)}>
                                            Delete
        </Button>

                                        <EditKodiModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            tavid={tavid}
                                            tavname={tavname} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Shto Tavolinen</Button>

                    <AddKodiModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Kodi;