import { memo, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom";
import { registerCustomer } from "../../../utils/user.utils";
import './Register.css'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState({ files: [], img: "" });

    const handleRegister = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("confirmPassword", confirmPassword);
        data.append("username", username);
        data.append("avatar", avatar.files[0]);
        data.append("role", "customer");
        const res = await registerCustomer(data);
        console.log(res);
    };
    return (
        <div className="wall">
            {window.scrollTo(0, 0)}
            <div className="res__ctn">
                <Container className="w-200">
                    <div className="res__title">Đăng kí</div>
                    <div className="res__slogan">Nhanh chóng và dễ dàng.</div>
                    <Form onSubmit={(e) => { handleRegister(e) }} className='form__ctn'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Your email" className="mb-3" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Label>Fullname:</Form.Label>
                        <Form.Control type="text" placeholder="Your Full name" className="mb-3" onChange={(e) => setUsername(e.target.value)} />
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Your password" className="mb-3" onChange={(e) => setPassword(e.target.value)} />
                        <Form.Label>Confirm password:</Form.Label>
                        <Form.Control type="password" placeholder="Your confirm password" className="mb-3" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <Form.Label>Avatar :</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="file"
                            // @ts-ignore
                            onChange={(e) => { setAvatar(() => ({ files: e.target.files, img: URL.createObjectURL(e.target.files[0]) })) }}
                        />
                        {avatar.img &&
                            <div className="d-flex w-100 mb-3 mt-3" style={{ height: 100 }}>
                                <img src={avatar.img} />
                            </div>
                        }
                        <div className="btn____section">
                            <Button className="mt-3" variant="primary" type="submit">
                                Đăng kí ngay
                            </Button>
                            <button className="btn___item">
                                <Link to='/login' className="btn__txt">Bạn đã có tài khoản, Đăng nhập ngay</Link>
                            </button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default memo(Register)