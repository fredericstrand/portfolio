import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-center space-x-6">
                {/* Github */}
                <a
                    href="https://github.com/fredericstrand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    aria-label="Github"
                >
                    <i className="fab fa-github text-2x1"></i>
                </a>
                {/* linkedIn */}
                <a
                    href="https://www.linkedin.com/in/frederic-ljosland-strand-472aa92ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    aria-label="linkedIn"
                >
                    <i className="fab fa-linkedin text-2x1"></i>
                </a>
                {/* Facebook */}
                <a
                    href="https://www.facebook.com/frederic.strand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook text-2x1"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;