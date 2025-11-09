const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Site Name */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Payooo</h2>
          <p className="text-sm">
            Your trusted digital payment solution. Fast, secure, and easy to
            use.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Payooo. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Built with ❤️ using React + Firebase.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
