import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Removed `useLocation`
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        reenterPassword: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            navigate("/Dash");  // Redirect to Dash.jsx if already logged in
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                    email: formData.email,
                    password: formData.password,
                });

                localStorage.setItem("loggedInUser", response.data.email);
                navigate("/Dash"); // Redirect to Dash.jsx after login
            } else {
                if (formData.password !== formData.reenterPassword) {
                    alert("Passwords do not match");
                    return;
                }

                const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                });

                alert(response.data.message);
                setIsLogin(true);
            }
        } catch (error) {
            alert(error.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <div className={styles.sublogcontain}>
            <div className={styles.containerForLogin}>
                <div className={styles.buttonCont}>
                    <button className={isLogin ? styles.active : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? styles.active : ""} onClick={() => setIsLogin(false)}>Signup</button>
                </div>

                {isLogin ? (
                    <div className={styles.formContainer}>
                        <h1 className={styles.h1forlog}>Login</h1>
                        <form onSubmit={handleSubmit} className={styles.formerlogeroflo}>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>Email:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>Password:</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <button type="submit" className={styles.submitforlog}>Login</button>
                        </form>
                    </div>
                ) : (
                    <div className={styles.formContainer}>
                        <h1 className={styles.h1forlog}>Signup</h1>
                        <form onSubmit={handleSubmit} className={styles.formerlogeroflo}>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>First Name:</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>Last Name:</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>Email:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>Password:</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.labelforlog}>Re-enter Password:</label>
                                <input type="password" name="reenterPassword" value={formData.reenterPassword} onChange={handleChange} className={styles.inputforlog} required />
                            </div>
                            <button type="submit" className={styles.submitforlog}>Signup</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
