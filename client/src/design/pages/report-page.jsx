import HomeTemplate from "../awesome-templates/home-template";
import HomeFooter from "../awesome-components/footers/footer-home";
import Forms from "../../components/reportParts/Forms";
import SWOTAnalysis from "../../components/reportParts/swot-analysis";
function ReportPage() {
    return (
        <div className="text-white">
            <HomeTemplate>
                <br/>
                <section class="white text-dark section-fullwindow">
                    <div class="container">
                        <h1 class="align-left badass-bold">//название отчета//</h1>
                        <ul className="list-unstyled">
                            <li>
                                <Forms/>
                            </li>
                            <li>
                                <SWOTAnalysis/>
                            </li>
                        </ul>
                    </div>
                </section>
            </HomeTemplate>
            <HomeFooter />

        </div>
    );
}

export default ReportPage;