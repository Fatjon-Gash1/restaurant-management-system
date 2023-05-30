import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddMsgModal } from './AddMsgModal';

export class Msg extends Component {

    constructor(props) {
        super(props);
        this.state = { msgs: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('https://localhost:44365/api/msg')
            .then(response => response.json())
            .then(data => {
                this.setState({ msgs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleMsg(msgid) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:44365/api/msg/' + msgid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });

 

        return (
            <div>               
                <br />
                <b />

                <ButtonToolbar>

                    
                    <Button variant='primary' 
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Msg</Button>

                    <AddMsgModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Msg;