import { useState } from "react";

function ProfileEditModal({ active, setActive, dataandmethods }) {
    
    function sendapi(){
        //api using code
    }
    return ( 
        <>
            <div className={active ? "popup active" : "popup"} onClick={() => { setActive(false); sendapi(); }}>
                <div className="modal modal-dialog modal-content" onClick={e=>e.stopPropagation()}>
                    <div class="modal-header">
                        <h5 class="modal-title">Редактирование</h5>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <form>
                                <fieldset>
                                    <div class="row">
                                        <input
                                            class="form-control round-input"
                                            onChange={e => dataandmethods.setwebsite(e.target.value)}
                                            value={dataandmethods.website}
                                            type="text"
                                            placeholder="website"
                                        />
                                        <br />
                                        <input
                                            class="form-control round-input"
                                            onChange={e => dataandmethods.setphonenum(e.target.value)}
                                            value={dataandmethods.phonenum}
                                            type="tel"
                                            placeholder="контактный телефон"
                                        />
                                        <br />
                                        <input
                                            class="form-control round-input"
                                            onChange={e => dataandmethods.setmail(e.target.value)}
                                            value={dataandmethods.mail}
                                            type="text"
                                            placeholder="электронная почта"
                                        />
                                        <br/>
                                    </div>
                                </fieldset>
                            </form>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="col btn btn-orange-moon btn-rounded" onClick={() => { setActive(false); sendapi(); }}>Сохранить и закрыть</button>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default ProfileEditModal;