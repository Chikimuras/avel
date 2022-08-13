import Logo from "src/components/Logo/Logo";
const LogoLine = () => {
  return (
    <div className="grid grid-cols-5 place-content-center place-items-center">
      <Logo img={'/img/laravel.svg'} alt={'Logo du framework php Laravel'} delay={'150'}/>
      <Logo img={'/img/javascript.svg'} alt={'Logo de Javascript'} delay={'300'}/>
      <Logo img={'/img/python.svg'} alt={'Logo du language python'} delay={"400"}/>
      <Logo img={'/img/react.svg'} alt={'Logo de la librairie javascript React'} delay={'500'}/>
      <Logo img={'/img/vue-js.svg'} alt={'Logo de la librairie javascript VueJs'} delay={'600'}/>
    </div>
  )
}

export default LogoLine
