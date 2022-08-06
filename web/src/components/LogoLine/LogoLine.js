import Logo from "src/components/Logo/Logo";
const LogoLine = () => {
  return (
    <div className="grid grid-cols-5 place-content-center place-items-center">
      <Logo img={'/img/laravel.svg'} alt={'Logo du framework php Laravel'}/>
      <Logo img={'/img/javascript.svg'} alt={'Logo de Javascript'}/>
      <Logo img={'/img/python.svg'} alt={'Logo du language python'}/>
      <Logo img={'/img/react.svg'} alt={'Logo de la librairie javascript React'}/>
      <Logo img={'/img/vue-js.svg'} alt={'Logo de la librairie javascript VueJs'}/>
    </div>
  )
}

export default LogoLine
