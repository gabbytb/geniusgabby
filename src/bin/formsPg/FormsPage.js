import React, { useState } from "react";




const FormsPage = () => {
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // console.log(startDate);
    // console.log(endDate);
    // console.log("Start Date: ", startDate);
    // console.log("End Date: ", endDate);
    

    return (
        <>
        <pre className="d-none">
            {startDate}
            {endDate}
        </pre>

            <div className="row justify-content-xl-between mx-0">

                <div className="col-6 col-xl-6 col-lg-6 col-md-12 ps-0 pe-3">
                    <div className="row row-gap-5 mx-0">
                        <div className="col-12 px-0 mx-0 bg-white">
                            <div className="row mx-0 px-0 row-gap-4 shadow-sm rounded">
                                <div className="col-12 mb-0 py-3 px-4 border-bottom">
                                    <div className="text-dark mb-0 h6">Input Fields</div>
                                </div>

                                <div className="col-12 d-flex px-4 mx-0 pb-5">
                                    <div className="row row-gap-4 mx-0">
                                        <label className="mx-0 px-0" htmlFor="default-input">Default input
                                            <input className="form-control px-3 py-2 mt-2 border" type="text" name="default-input" placeholder="Default input text" />
                                        </label>
                                        <label className="mx-0 px-0" htmlFor="active-input">Active input
                                            <input className="form-control px-3 py-2 mt-2 border border-primary" type="text" name="active-input" placeholder="Active input text" />
                                        </label>
                                        <label className="mx-0 px-0" htmlFor="disabled-input">Disabled input
                                            <input className="form-control px-3 py-2 mt-2" type="text" name="disabled-input" placeholder="Disabled input text" disabled={true} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 px-0 mx-0 bg-white">
                            <div className="row mx-0 px-0 row-gap-4 shadow-sm rounded">
                                <div className="col-12 mb-0 py-3 px-4 border-bottom">
                                    <div className="text-dark mb-0 h6">Toggle switch input</div>
                                </div>

                                <div className="col-12 d-flex px-4 pb-5">
                                    <div className="row row-gap-3 mx-0">
                                        <div className="row mx-0 px-0 column-gap-4">
                                            <div className="col-2 d-flex px-0 mx-0">
                                                <div className="form-check form-switch d-flex my-0 px-0 w-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckDefault">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div className="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckChecked">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 px-0 column-gap-4">
                                            <div className="col-2 d-flex px-0 mx-0">
                                                <div className="form-check form-switch d-flex my-0 px-0 w-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckDefault">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div className="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckChecked">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 px-0 column-gap-4">
                                            <div className="col-2 d-flex px-0 mx-0">
                                                <div className="form-check form-switch d-flex my-0 px-0 w-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckDefault">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div className="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckChecked">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 px-0 column-gap-4">
                                            <div className="col-2 d-flex px-0 mx-0">
                                                <div className="form-check form-switch d-flex my-0 px-0 w-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckDefault">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-2 d-flex px-0">
                                                <div className="form-check form-switch d-flex w-100 px-0 h-100">
                                                    <label className="form-check-label d-flex w-100" htmlFor="flexSwitchCheckChecked">
                                                        <input className="form-check-input mx-0 mt-0 w-100 h-100" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>

                        <div className="col-12 px-0 mx-0 bg-white">
                            <div className="row mx-0 px-0 row-gap-4 shadow-sm rounded">
                                
                                {/* Fixed */}
                                <div className="col-12 mb-0 py-3 px-4 border-bottom">
                                    <div className="text-dark mb-0 h6">Time and Date</div>
                                </div>

                                {/* Fixed */}
                                <div className="col-12 d-flex px-4 pb-4">
                                    <div className="row row-gap-4 mx-0 w-100">
                                        <div className="col-12 px-0 d-flex">
                                            <label htmlFor="startDate" className="w-100">
                                                <input type="date" className="w-100 px-3 py-2 rounded shadow-sm border border-light" id="startDate" onChange={(e) => setStartDate(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className="col-12 px-0 d-flex">
                                            <label htmlFor="endDate" className="w-100">
                                                <input type="date" className="w-100 px-3 py-2 rounded shadow-sm border border-light" id="endDate" onChange={(e) => setEndDate(e.target.value)} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>        


                <div className="col-6 col-xl-6 col-lg-6 col-md-12 ps-3 pe-0">
                    <div className="row row-gap-5 mx-0">

                        <div className="col-xl-12 col-md-12 bg-white shadow-sm px-0 rounded">
                            <div className="row mx-0 px-0 row-gap-4">
                                <div className="col-12 mb-0 py-3 px-4 border-bottom">
                                    <div className="text-dark mb-0 h6">Textarea Fields</div>
                                </div>

                                <div className="col-12 d-flex px-4 pb-4">
                                    <div className="row row-gap-3 mx-auto">
                                        <div className="col-12 px-0">
                                            <label className="px-0 mb-0 w-100" htmlFor="default-textarea">Default textarea
                                                <textarea className="form-control px-3 py-2 mt-2 border h-5 pt-2 " id="default-textarea" name="default-textarea" placeholder="Default input textarea" rows="4"></textarea>
                                            </label>
                                        </div>
                                        <div className="col-12 px-0">
                                            <label className="px-0 mb-0 w-100" htmlFor="active-textarea">Active textarea
                                                <textarea className="form-control px-3 py-2 mt-2 h-5 border-primary pt-2" id="active-textarea" name="active-textarea" placeholder="Active input textarea" rows="4"></textarea>
                                            </label>
                                        </div>
                                        <div className="col-12 px-0">
                                            <label className="px-0 mb-0 w-100"htmlFor="disabled-textarea">Disabled textarea
                                                <textarea className="form-control px-3 py-2 mt-2 h-5 pt-2" id="disabled-textarea" name="disabled-textarea" placeholder="Disabled input textarea" disabled={true} rows="4"></textarea>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-12 col-md-12 bg-white shadow-sm px-0 rounded">
                            <div className="row mx-0 px-0">

                                <div className="col-12 mb-0 py-3 px-4 border-bottom">
                                    <div className="text-dark mb-0 h6">Checkbox and radio</div>
                                </div>

                                <div className="col-12 px-0 d-flex flex-column row-gap-2 pt-3 pb-4 rounded">
                                    <div className="row mx-0 px-4 justify-content-start">
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckDefault" />
                                            <label className="text-secondary" htmlFor="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckChecked" defaultChecked />
                                            <label className="text-secondary" htmlFor="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-4 justify-content-start">
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckDefault" />
                                            <label className="text-secondary" htmlFor="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckChecked" defaultChecked />
                                            <label className="text-secondary" htmlFor="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-4 justify-content-start">
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckDefault" />
                                            <label className="text-secondary" htmlFor="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckChecked" defaultChecked />
                                            <label className="text-secondary" htmlFor="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-4 justify-content-start">
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckDefault" />
                                            <label className="text-dark" htmlFor="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckChecked" defaultChecked />
                                            <label className="text-dark" htmlFor="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-4 justify-content-start">
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckDefault" />
                                            <label className="text-dark" htmlFor="flexCheckDefault">Checkbox Text</label>
                                        </div>
                                        <div className="col-xl-5 col-md-6 d-flex mx-0 align-items-center column-gap-2 px-0">
                                            <input className="d-flex mx-0 px-0" type="checkbox" id="flexCheckChecked" defaultChecked />
                                            <label className="text-dark" htmlFor="flexCheckChecked">Checkbox Text</label>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>
 
            </div>
        </>
    );
}


export default FormsPage;