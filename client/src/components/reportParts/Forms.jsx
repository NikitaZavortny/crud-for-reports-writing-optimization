import { useState } from "react";

function Forms() {
    
    const [formsin, setformsin] = useState(true);

    return (
        <>
            <h3 class="align-left badass-bold"><input class="form-check-input" type="checkbox" checked={formsin} onChange={()=>{setformsin(!formsin)}}/>Классы</h3>
            {formsin ? 
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" rowSpan={2}>Класс</th>
                            <th scope="col" rowSpan={2}>Предмет</th>
                            <th scope="col" rowSpan={2}>% успеваемости</th>
                            <th scope="col" rowSpan={2}>Качество знаний</th>
                            <th scope="col" colspan="4">Кол-во обучающихся, успевающих</th>
                        </tr>
                        <tr>
                            <th>На "5"</th>
                            <th>На "4"</th>
                            <th>На "3"</th>
                            <th>На "2"</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            : "Классы отсутствуют"}
            
        </> 
    );
}

export default Forms;