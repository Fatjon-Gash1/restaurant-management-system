import React from 'react';
import { Table } from 'react-bootstrap';




const Info = () => {
    return (
        <div>
            <br />
                <b />
            <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                <thead>



                    <tr>

                        <th>Informacion per perdorim!</th>

                    </tr>

                    <tr>

                        <th>Klikoni ne:</th>

                    </tr>
                    <tr>
                        <ul>
                            <li>Restaurantet - Tek opsioni "Restaurantet" mund te gjeni Restaurantin perkates. </li>
                            <li>Ushqimet - Tek opsioni "Ushqimet" mund te gjeni menute ushqimore. </li>
                            <li>Pijet - Tek opsioni "Pijet" mund te gjeni pijet. </li>
                            <li>Porosit - Tek opsioni "Porosit" ju mund te beni porosite e deshiruara.</li>
                            <li>Staf - Tek opsioni "Staf" mund te gjeni pjestaret e stafit te cilet sherbejne ne kete restaurant. </li>
                            <li>Shkruaj Mesazh - Tek opsioni "Shkruaj Mesazh" ju mund te lini mesazhin e deshiruar ne menyre qe ne te dijme mendimin tuaj per ne! </li>
                        </ul>
                        {/* <th>Info rreth Aplikacionoit...</th> */}
                    </tr>


                </thead>


            </Table>
        </div>
    );
};
export default Info;