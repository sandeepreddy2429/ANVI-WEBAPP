import React from 'react';
import { Link } from 'react-router-dom';
import { Menu,MenuButton,MenuItems,MenuItem } from '@headlessui/react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-white py-10 px-6 md:px-20">
    
                <div className="flex justify-center md:justify-start max-w-[900px] w-full pb-3">
                    <img src="https://static.wixstatic.com/media/261091_3dffa092b24a49678092350d6dab657b~mv2.png/v1/fill/w_1220,h_280,fp_0.50_0.48,q_85,enc_avif,quality_auto/anvi%20logo%20new_edited.png" alt="Anvi Logo" className="w-fit" />
                </div>
        

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 max-md:gap-8">



                {/* Navigation Links */}
                <div className="space-y-2 text-sm text-left">
                    <Link to="/about" className="block hover:underline">About</Link>
                    <Link to="/solutions" className="block hover:underline">Solutions</Link>

                    {/* Expertise Dropdown */}
                    <Menu as="div" className="">
                        <MenuButton className=""
                            style={{ backgroundColor: 'transprent' }}>
                            <Link >Expertise</Link>  <span className="text-gray-900">&#8964;</span>
                        </MenuButton>

                        <MenuItems className=" ">
                            <div className="">
                                {[
                                    { label: 'Robotics', to: '/robotics' },
                                    { label: 'Space', to: '/space' },
                                    { label: 'Textiles', to: '/textiles' },
                                    { label: 'Semi-Conductors', to: '/semiconductors' },
                                    { label: 'Entertainment', to: '/entertainment' },
                                    { label: 'Life Sciences', to: '/life-sciences' },
                                ].map((item) => (
                                    <MenuItem key={item.to}>
                                        {({ active }) => (
                                            <Link
                                                to={item.to}
                                                className={`block px-4 py-2  ${active ? 'bg-gray-200' : ''}`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </MenuItem>
                                ))}
                            </div>
                        </MenuItems>
                    </Menu>

                    <Link to="/insights" className="block hover:underline">Insights</Link>
                    <Link to="/contact" className="block hover:underline">Contact</Link>
                </div>
                <section className='text-sm space-y-2'> {/* Address */}
                    <div className="text-sm space-y-2  text-gray-900  text-left ">
                        <div>Profound Builders,</div>
                        <div>Whitefields, Kondapur,</div>
                        <div>Telangana 500081</div>
                        <a href="mailto:info@anvi.co" className="block text-blue-600 hover:underline">info@anvi.co</a>
                    </div>
                </section>

                {/* Social Links */}
                <div className="text-sm space-y-2">
                    <a href="" target="_blank" rel="noreferrer" className="block hover:underline">LinkedIn</a>
                    <a href="" target="_blank" rel="noreferrer" className="block hover:underline">Instagram</a>
                    <a href="" target="_blank" rel="noreferrer" className="block hover:underline">Facebook</a>
                </div>

                <div className="text-sm space-y-2 text-left " >
                    <Link to="/privacy-policy" className="block hover:underline ">Privacy Policy</Link>
                    {/* Footer Bottom */}

                </div>


            </div>
            <div className="text-center text-xs text-gray-500 mt-4">
                &copy;2025 Anvi.co
            </div>
        </footer>
    );
}
