import React, { FC, useContext, useState } from 'react';
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

function LoginTemplate() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);

    return (
        <div>
            <form>
                <fieldset>
                    <div class="row">
                        <input
                            class="form-control round-input"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            placeholder='Email'
                        />
                        <p></p>
                        <input
                            class="form-control round-input"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder='Password'
                        />
                        <p></p>
                        <button type="button" class="btn btn-info" onClick={() => store.login(email, password)}>
                            Войти
                        </button>
                        <p></p>
                        <button type="button" class="btn btn-info" onClick={() => store.registration(email, password)}>
                            Зарегистрироваться
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default observer(LoginTemplate);