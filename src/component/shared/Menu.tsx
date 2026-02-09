const Menu = () => {
  return (
    <section className="py-10">
      <a href="/images/menu.pdf" target="_blank">
        <div className="flex items-center justify-center">
          <img
            src="/images/menu.png"
            alt="menu"
            className="object-center md:h-150 h-100 w-auto object-cover"
          />
        </div>
      </a>
    </section>
  );
};

export default Menu;
