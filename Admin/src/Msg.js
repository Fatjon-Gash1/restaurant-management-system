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

    deleteMsg(msgid) {
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
        const { msgs } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });

 

        return(
            
            <div>    
                <br />
                <b />           
                
                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>                   
                        <tr>
                            <th>Numri</th>
                            <th width="19%">Emri i Dërguesit</th>                            
                            <th>Mesazhi</th>                            
                            <th>Opsionet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {msgs.map(msg =>
                            <tr key={msg.MsgId}>
                             <td>{msg.MsgId}</td>
                                <td width="13%">{msg.Emri}</td>
                                <td>{msg.MsgName}</td>                              
                                <td width="10%">


                                    <ButtonToolbar>
                                       
                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteMsg(msg.MsgId)}>
                                            Fshij
        </Button>                                      
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

               
            </div>
        )
    }
}

export default Msg;