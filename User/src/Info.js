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

                        <th>INFO</th>

                    </tr>

                    <tr>

                        <th>Klikoni ne:</th>

                    </tr>
                    <tr>
                        <ul>
                            <li>Restaurant - Tek opsioni Restaurant mund te gjeni Restaurantin perkates. </li>
                            <li>Foods - Tek opsioni Food Menu mund te gjeni menute ushqimore. </li>
                            <li>Drinks - Tek opsioni Drink Menu mund te gjeni pijet. </li>
                            <li>Porosit - Tek opsioni Porosit ju mund te beni porosite e deshiruara.</li>
                            <li>Team - Tek opsioni Team mund te gjeni pjestaret e stafit te cilet sherbejne ne kete restaurant. </li>
                            <li>Message - Tek opsioni Message ju mund te lini mesazhin e deshiruar ne menyre qe restauranti te dije mendimet e konsumatoreve. </li>
                        </ul>
                        {/* <th>Info rreth Aplikacionoit...</th> */}
                    </tr>


                </thead>


            </Table>
        </div>
    );
};
export default Info;