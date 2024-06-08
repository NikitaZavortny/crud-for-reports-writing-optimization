import { useState } from "react";

function NewReportModal({ active, setActive }) {
    
    const [reportname, setreportname] = useState("");

    function sendapi(){
        //api using code
    }
    return ( 
        <>
            <div className={active ? "popup active" : "popup"} tabindex="-1" onClick={() => { setActive(false); sendapi(); }}>
                <div className="modal modal-dialog modal-content" onClick={e=>e.stopPropagation()}>
                    <div class="modal-header">
                        <h5 class="modal-title">Создание нового отчета</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <input
                                class="form-control round-input"
                                onChange={e => setreportname(e.target.value)}
                                value={reportname}
                                type="text"
                                placeholder='Название отчета'
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="col btn btn-orange-moon btn-rounded" onClick={() => { setActive(false); sendapi(); }}>Сохранить и закрыть</button>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default NewReportModal;