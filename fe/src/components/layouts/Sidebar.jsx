import React from 'react';
import { X } from 'lucide-react';
import { sidebarLinks } from '@/data/data';
import NavLink from './NavLink';

const Sidebar = ({ isOpen, onClose, currentPath }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed lg:static inset-y-0 left-0 z-30 w-64 transform bg-white border-r 
          transition-transform duration-300 ease-in-out lg:translate-x-0 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <span className="text-primer">Metro</span>
                        <span>Wise</span>
                    </h1>
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
                    {sidebarLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            {...link}
                            isActive={link.path === currentPath}
                            onClick={() => {
                                if (window.innerWidth < 1024) {
                                    onClose();
                                }
                            }}
                        />
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar