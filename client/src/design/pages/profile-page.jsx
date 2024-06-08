import ProfileEditModal from "../../components/modals/edit-profile";
import NewReportModal from "../../components/modals/new report";
import HomeFooter from "../awesome-components/footers/footer-home";
import BubbleTransition from "../awesome-components/transitions/bubble-transition";
import CurveTransition from "../awesome-components/transitions/curve-transition";
import HomeTemplate from "../awesome-templates/home-template";
import LoginForm from "../awesome-templates/login-template";
import { useState } from "react";

function ProfilePage() {

    const [website, setwebsite] = useState("website.com");
    const [phonenum, setphonenum] = useState("+7(999)-999-99-99");
    const [mail, setmail] = useState("aboba@gmail.com");

    const [reportslist, setreportslist] = useState(["first", "second", "third"]);

    const [modalActive, setmodalActive] = useState(false);
    const [newrepmodalActive, setnewrepmodalActive] = useState(false);

    return (
        <div className="text-white">
            <HomeTemplate>
                <section class="white text-dark section-transition section-fullwindow">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 class= "align-left">Здравствуйте, User</h1>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-sm left-side badass-bold">
                                <img className="img-profpic" src="https://sun9-4.userapi.com/impg/19cP72iHoc_AwlMAvuPb_Z09oXuTvvjWRQukJA/0ZyU3-RGh28.jpg?size=1620x2160&quality=95&sign=80f5f8bca2dddd207da7c30265dac7d5&type=album" alt="" />
                                <br/>
                                <p><i class="fas fa-globe"></i> {website}</p>
                                <p><i class="fas fa-phone"></i> {phonenum}</p>
                                <p><i class="fas fa-envelope"></i> {mail}</p>
                                <button type="button" class="col btn btn-orange-moon btn-rounded" onClick={()=>setmodalActive(true)}>Редактировать</button>
                                <ProfileEditModal active={modalActive} setActive={setmodalActive} dataandmethods={{ website, setwebsite, phonenum, setphonenum, mail, setmail} }/>
                            </div>
                            <div class="col-sm-5  left-side">
                                <p className="badass-bold">Имя</p>
                                -
                                <p className="badass-bold">Предмет</p>
                                -
                                <p className="badass-bold">Квалификация</p>
                                -
                                <p className="badass-bold">Классное руководство</p>
                                -
                                <p className="badass-bold">Образование</p>
                                -
                                <p className="badass-bold">Методическая тема</p>
                                -
                            </div>
                            <div class="col-sm">
                                <h3 className="badass-bold">Отчеты</h3>
                                <ul className="left-side">
                                    {reportslist.map(report =>
                                        <li>{report}</li>
                                    )}
                                </ul>
                                <button type="button" class="col btn btn-orange-moon btn-rounded pull-right" onClick={() => setnewrepmodalActive(true)}>Новый отчет</button>
                                <NewReportModal active={newrepmodalActive} setActive={setnewrepmodalActive}/>
                            </div>
                        </div>
                    </div>
                </section>
            </HomeTemplate>
            <HomeFooter />
            
        </div>
    );
}

export default ProfilePage;