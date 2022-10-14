import React from "react";
import { Accordion } from "./Accordion";
import faq from "../../assets/faq.gif";

export const Accordions = () => {
  return (
    <>
      <div className="faqHeader">
        <img src={faq} alt="faq" />
      </div>
      <div className="accordions">
        <Accordion
          title="Kimlər psixoloq ola bilər?"
          content="▶️ Qarşıdaki insanın travmalarını çözəcək biri olduğu üçün əvvəla öz travmaları ilə üzləşib həll yolu tapan və bunları sağaltmağı bacaran , psixologiya üçün ali təhsilini tamamlamış, etik qaydaları  bilib tətbiq edən , empatiya, ünsiyyət, sosial bacarığı olan insanlar."
        />
        <Accordion
          title="Psixologiyanı bilib tətbiq etmək nə üçün lazımdır?"
          content="▶️ Hər birimizin cisim sağlığı önəmli olduğu kimi, ruh sağlığımızı da qoruyub saxlamamız üçün ."
        />
        <Accordion
          title="Fərqindəlik qazanmaq üçün nə etməliyəm?"
          content="▶️ Sənin harada olduğunu tapmalısan . <br/><br/>
                  ▶️ Daim arayış içində olub yeniliklər öyrənərək dünya görüşünü artırmalısan. <br/><br/>
                  ▶️ Səbəblər deyil nəticələrə yönəlməlisən <br/><br/>
                  ▶️ Özünə dəyər verməyin səbəblərini tapmalısan. ( Mən dəyərliyəm, çünki ……..) <br/><br/>
                  ▶️ Yaraların, travmaların , zəif yönlərinlə üzləşməlisən və onların sənə nə öyrətdiyini anlamaq üçün əlindən gələn qədər çaba göstərməlisən <br/><br/>" 
        />
        
      </div>
    </>
  );
};
