import HomeFooter from "../awesome-components/footers/footer-home";
import BubbleTransition from "../awesome-components/transitions/bubble-transition";
import CurveTransition from "../awesome-components/transitions/curve-transition";
import HomeTemplate from "../awesome-templates/home-template";
import LoginTemplate from "../awesome-templates/login-template";

function LoginFormPage() {
    return (
        <div className="text-white">
            <HomeTemplate>
                <section class="section-transition section-fullwindow">
                    <h1>Пожалуйста, войдите или зарегистрируйтесь</h1>
                    <br/>
                    <LoginTemplate />
                </section>
                <HomeFooter />
            </HomeTemplate>
        </div>
    );
}

export default LoginFormPage;