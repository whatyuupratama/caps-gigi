const Footer = () => {
  return (
    <footer className='footer flex items-center justify-center py-8 sm:py-16 bg-base-300 text-base-content px-4 sm:px-8'>
      <aside className='text-center'>
        <p className='text-[#870132]'>
          Copyright © {new Date().getFullYear()} - by CavityCheck.co.id
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
