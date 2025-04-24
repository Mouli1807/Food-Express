import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We'll get in touch soon.`);
        setFormData({ name: "", email: "" });
    };

    return (
        <div className="w-[50vw] h-[50vh] my-[30px] mx-auto p-[50px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-[10px] text-center">
            <h1 className="text-[30px] text-[#492e6b] mb-[20px]">Contact Us</h1>
            <div className="flex justify-center gap-[15px] mb-[20px]">
                <a className="flex items-center gap-[8px] text-[18px] text-[#333] no-underline transition-colors duration-300 ease-in-out hover:text-[#0077b5]"
            href="https://www.linkedin.com/in/mouli-tapadar-9ab6281a0/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-[24px]"
                /> LinkedIn
                </a>
                <a className="flex items-center gap-[8px] text-[18px] text-[#333] no-underline transition-colors duration-300 ease-in-out hover:text-[#0077b5]"
            href="https://github.com/Mouli1807" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" /> GitHub
                </a>
            </div>

            <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit}>
                <label className="text-[16px] text-[#444] text-left">Name</label>
                <input className="p-[10px] text-[16px] border border-[#ccc] rounded-[5px] outline-none transition-colors duration-300 focus:border-[#0077b5]"
                    type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label className="text-[16px] text-[#444] text-left">Email</label>
                <input className="p-[10px] text-[16px] border border-[#ccc] rounded-[5px] outline-none transition-colors duration-300 focus:border-[#0077b5]" type="email" name="email" value={formData.email} onChange={handleChange} required />

                <button className="bg-[#c6a8ed] text-black text-[16px] p-[10px] border-none rounded-[5px] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#492e6b] hover:text-white"
                     type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
