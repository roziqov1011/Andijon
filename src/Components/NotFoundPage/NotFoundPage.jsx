import { NavLink as Link } from "react-router-dom"
import "./NotFoundPage.scss"


function NotFoundPage() {
    return (
        <section className="not-found-page">
            <div className="not-found-page__box">
                <h1 className="not-found-page__title">404</h1>
                <p>USHBU SAHIFA TOPILMADI!</p>
                <Link to={"/"}>Bosh Safivaga qaytish</Link>
            </div>

            <div class="cont_aura_1"></div>
            <div class="cont_aura_2"></div>
        </section>
    )
}

export default NotFoundPage