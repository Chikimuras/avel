const Footer = () => {
  return (
    <div className='text-center text-gray-500 py-10'>
      <p>Créé par <a href='https://www.linkedin.com/in/alexandre-velia/' target='__blank' className='text-white underline hover:bg-light-gradient hover:bg-clip-text hover:text-transparent'>Alexandre Velia</a> | Tous droits réservés - {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
