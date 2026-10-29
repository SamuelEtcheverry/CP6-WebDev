function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-6 text-center text-sm text-slate-300">
      <p>Prime Imports - Locacao de Carros Importados</p>
      <p className="mt-1">contato@primeimports.com | (11) 99999-9999</p>
      <p className="mt-1 text-xs text-slate-500">
        &copy; {ano} Todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;
