import { useState } from "react";

function SWOTAnalysis() {
    
    const [formsin, setformsin] = useState(true);

    return (
        <>
            <h3 class="align-left badass-bold"><input class="form-check-input" type="checkbox" checked={formsin} onChange={() => { setformsin(!formsin) }} />SWOT анализ</h3>
            {formsin ? 
            <>
            <div class="row">
                <div className="col-sm">
                    <h5 className="text-start">Strengths</h5>
                    <div class="input-group">
                        <textarea rows="5" type="text" class="form-control" aria-label="Text input with segmented dropdown button"/>
                        <button type="button" class="btn btn-outline-secondary">Сгенерировать</button>
                    </div>
                    <input type="text" placeholder="Ключевые слова"/>

                    <br />
                    <h5 className="text-start">Weaknesses</h5>
                    <div class="input-group">
                        <textarea type="text" rows="5" class="form-control" aria-label="Text input with segmented dropdown button" />
                        <button type="button" class="btn btn-outline-secondary">Сгенерировать</button>
                    </div>
                    <input type="text" placeholder="Ключевые слова" />
                </div>
                <div className="col-sm">
                    <h5 className="text-start">Opportunities</h5>
                    <div class="input-group">
                        <textarea type="text" rows="5"class="form-control" aria-label="Text input with segmented dropdown button" />
                        <button type="button" class="btn btn-outline-secondary">Сгенерировать</button>
                    </div>
                    <input type="text" placeholder="Ключевые слова" />
                    <br />
                    <h5 className="text-start">Threats </h5>
                    <div class="input-group">
                        <textarea type="text" rows="5" class="form-control" aria-label="Text input with segmented dropdown button" />
                        <button type="button" class="btn btn-outline-secondary">Сгенерировать</button>
                    </div>
                    <input type="text" placeholder="Ключевые слова" />
                </div>
            </div>
            <div className="text-end">
                <button type="button" align="right" class="col btn btn-orange-moon btn-rounded">Сгенерировать pdf</button>
            </div>
            </>
            : "неа" }
            
            
        </>
    );
}

export default SWOTAnalysis;