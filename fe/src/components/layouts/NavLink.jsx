const NavLink = ({ icon: Icon, label, path, isActive, onClick }) => {
    return (
      <a 
        href={path}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
          isActive 
            ? 'bg-secunder text-primer font-medium' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        onClick={onClick}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    );
  };
  export default NavLink