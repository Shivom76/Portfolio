import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        const phone = "917636991476"; 
        const text = `*Message from Portfolio* 🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Note:* ${formData.message}`;
        
        const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(waLink, "_blank");
    };

    return (
        <section className="flex flex-col items-center justify-center p-6 text-white">
            <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                
                <form onSubmit={submitForm} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                        <input 
                            type="text"
                            id="name"
                            required
                            placeholder="Monkey D Luffy" 
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 outline-none focus:border-cyan-400 transition-all placeholder:text-gray-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                        <input 
                            type="email"
                            id="email"
                            required
                            placeholder="luffy@example.com" 
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 outline-none focus:border-cyan-400 transition-all placeholder:text-gray-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                        <textarea 
                            id="message"
                            rows="3"
                            placeholder="I'd like to talk about a project..." 
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 outline-none focus:border-cyan-400 transition-all placeholder:text-gray-500 resize-none"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="mt-4 w-full py-3 rounded-lg font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-blue-500/20"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}