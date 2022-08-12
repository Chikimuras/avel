import SocialNetworkIcon from "src/components/SocialNetworkIcon/SocialNetworkIcon";

const SocialNetwork = () => {
  return (
    <div className='social-network'>
        <div className="header mb-10">
          <div className="icon mx-auto w-[80px] h-[80px] bg-light-gradient text-white font-bold flex items-center justify-center text-4xl rounded-full mb-6">AV</div>
          <h2 className="text-center text-5xl font-bold">Restons en contact !</h2>
        </div>
        <div className="body mb-16">
        <div className={'mb-10'}>
          <p className="w-3/5 mx-auto text-gray-300 text-xl text-center mb-12">
            Je suis toujours ouvert pour discuter de vos idées et vos projets. N'hésitez pas à venir me rendre visite sur l'un de mes réseaux et à m'envoyer un message.
          </p>
          <div className="grid grid-cols-2 place-items-center place-content-center w-2/3 mx-auto">
            <div className="col-span-1 mb-3">
              <a href='tel:+33783063262' className={'hover:bg-light-gradient hover:bg-clip-text hover:text-transparent'}><i className={'bg-light-gradient bg-clip-text text-transparent mr-3 fas fa-phone'}></i>+330 783 063 262</a>
          </div>
          <div className="col-span-1 mb-3">
              <a href='mailto:alexandre.m.velia@gmail.com' className={'hover:bg-light-gradient hover:bg-clip-text hover:text-transparent'}><i className={'bg-light-gradient bg-clip-text text-transparent mr-3 fas fa-envelope'}></i>alexandre.m.velia@gmail.com</a>
          </div>
        </div>
        </div>
          <div className="social-network-links grid grid-cols-6 w-2/3 mx-auto place-content-center place-items-center">
            <SocialNetworkIcon iconStyle="text-gray-500 hover:text-[#3b5998] transition" class="facebook" target="_blank" href="https://www.facebook.com/profile.php?id=100083696675665" icon="fab fa-facebook-f" />
            <SocialNetworkIcon iconStyle="text-gray-500 hover:text-[#0e76a8] transition" class="linkedin" target="_blank" href="https://www.linkedin.com/in/alexandre-velia/" icon="fab fa-linkedin-in" />
            <SocialNetworkIcon iconStyle="text-gray-500 hover:text-[#171515] transition" class="github" target="_blank" href="https://github.com/Chikimuras" icon="fab fa-github" />
            <SocialNetworkIcon iconStyle="text-gray-500 hover:text-[#1DA1F2] transition" class="twitter" target="_blank" href="https://twitter.com/Chikimuras" icon="fab fa-twitter" />
            <SocialNetworkIcon iconStyle="text-gray-500 hover:text-[#C32AA3] transition" class="instagram" target="_blank" href="https://www.instagram.com/chikimuras/" icon="fab fa-instagram" />
            <SocialNetworkIcon iconStyle="text-gray-500 hover:text-[#738ADB] transition" class="discord" target="_blank" href="https://discord.gg/uWdxKbTMRb" icon="fab fa-discord" />
          </div>
        </div>
    </div>
  )
}
export default SocialNetwork
