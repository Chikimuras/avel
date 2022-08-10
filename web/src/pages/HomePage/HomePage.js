import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import LogoLine from "src/components/LogoLine/LogoLine";
import ServiceCard from "src/components/ServiceCard/ServiceCard";

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <LogoLine></LogoLine>
      <section className="my-24">
        <div className="grid grid-cols-10 place-content-center place-items-center">
          <div className="col-span-4">
            <img src="/img/alex.png" alt=""/>
          </div>
          <div className="col-span-6 pl-20">
            <h2 className="text-[3.125rem] font-bold">À propos de moi</h2>
            <div className="text-[1rem]">
            <p className="pb-5">
              A l'origine soudeur spécial pour de nombreuses entreprise réputée, j'ai décider de me reconvertir en 2017.<br/>
              Le monde du dev ne m'était pas inconnu puisque depuis très jeune je me suis investi dans plusieurs projet tel que la gestion et la création de serveur minecraft, la création de site web marchant en rapport avec ces serveur.
              Après l'obtention de mon DUT en informatique, j'ai su trouver une place dans une agence web qui m'a permis d'évoluer et de monter en compétence rapidement.</p>
            <p className="pb-5">
              Je suis aujourd'hui développeur full-stack sur Laravel et Vue.js à Aix-les-bains en Savoie⛰.
            </p>
            </div>
            <p className="pb-5">
              <a className="py-2 px-4 text-sm bg-light-gradient transition-all duration-300 border-2 border-transparent rounded-full bg-cover leading-none " download="CV d'Alexandre Velia" href="/docs/cv.pdf">
                Télécharger mon cv <i className="fa-solid fa-download"></i>
              </a>
            </p>
          </div>
        </div>
      </section>
    <section id='services' className="services">
      <h2 className='text-5xl font-bold text-center mb-8'>Mes principaux services</h2>
      <div className="grid grid-cols-3 gap-5">
        <ServiceCard class="col-span-1" title="Code review & Debug" description="Je vous propose mon expertise dans les différent languages web pour du code review ou encore une séance de debug" icon="fa-bug"></ServiceCard>
        <ServiceCard class="col-span-1" title="Création de site vitrine" description="Fort de mes 5 années d'expérience dans le domaine, je saurais répondre à chacun de vos demande" icon="fa-desktop"></ServiceCard>
        <ServiceCard class="col-span-1" title="Site e-Commerce" description="Je vous propose mon expertise dans les différent languages web pour du code review ou encore une séance de debug" icon="fa-store"></ServiceCard>
        <ServiceCard class="col-span-1" title="Saas sur mesure" description="Vous avez une idée de business en ligne mais il vous manque les compétences techniques. TADAAAM, me voici !" icon="fa-comment-dollar"></ServiceCard>
        <ServiceCard class="col-span-1" title="CRM & ERP" description="Votre entreprise est en pleine croissance et vous avez besoin d'outils adapter? Parlons de vos besoins et des solutions idéal." icon="fa-users"></ServiceCard>
        <ServiceCard class="col-span-1" title="API & application mobile" description="La création d'API est une étape crucial pour votre application mobile ou web. Ma rigueur dans la réalisation de celle-ci saura vous satisfaire" icon="fa-mobile"></ServiceCard>
      </div>
    </section>
    </>
  )
}

export default HomePage
