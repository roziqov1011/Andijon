import "../AssideForm/AssideForm.scss";

function AssideForm() {
    return (
        <>
            <section className="asside-form">

                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="asside-form__ok-btn btn btn-outline-secondary" type="button" id="button-addon2">OK</button>
                    </div>

                    <div className="asside-form__radio-box">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Obuna bo’lish
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Obunadan chiqish
                            </label>
                        </div>
                    </div>

                    <button className="asside-form__btn">Matndan xatolik topdizmi?</button>

                </form>

            </section>
        </>
    )
}

export default AssideForm