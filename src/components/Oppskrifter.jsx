import React, { useState } from "react";
import { styles } from "../styles";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { OppskriftsKort } from "./Oppskriftskort";

import konf from "./bilder/konfkaker.jpg";
import retter from "./bilder/letteretter.jpg";
import friske from "./bilder/friskesommer.jpg";

import baktlok from "./bilder/Oppskriftbilder/Bakt_lok_med_Nyr.jpg";
import blaabaerpai from "./bilder/Oppskriftbilder/blaabaerpai.jpg";
import bringebaermousse from "./bilder/Oppskriftbilder/Bringebermousse-735x1030.jpg";
import dressing from "./bilder/Oppskriftbilder/Dressing_med_Nyr.jpg";
import fruktsalat from "./bilder/Oppskriftbilder/Fruktsalat med Nyrkrem.jpg";
import guacamole from "./bilder/Oppskriftbilder/Guacomole.jpg";
import iskake from "./bilder/Oppskriftbilder/Iskake_av_Nyr-scaled.jpg";
import iskrem from "./bilder/Oppskriftbilder/Iskrem-e1384983715740.jpg";
import smoothie from "./bilder/Oppskriftbilder/Jordbersmoothie_med_Nyr-1024x682.jpg";
import kremet_rosen from "./bilder/Oppskriftbilder/Kremet_rosenkal.png";
import smoreost from "./bilder/Oppskriftbilder/Nyr_som_smoreost.png";
import suppetopping from "./bilder/Oppskriftbilder/Nyr_som_topping_supper_og_gryter.jpg";
import nyrbrod from "./bilder/Oppskriftbilder/Nyrbrod-Web1-1024x682.jpg";
import cocktail from "./bilder/Oppskriftbilder/Nyrcoctail.jpg";
import nyreplekake from "./bilder/Oppskriftbilder/Nyreplekake-Web-1024x682.jpg";
import nyrkake from "./bilder/Oppskriftbilder/nyrkake.jpg";
import nyrkrem_egg from "./bilder/Oppskriftbilder/nyrkrem-med-eggeplomme.jpg";
import nyrkrem_sitron from "./bilder/Oppskriftbilder/Nyrkrem-med-sitron.jpg";
import pannekaker from "./bilder/Oppskriftbilder/Nyrpannekaker-Web1-1024x729.jpg";
import ostekake from "./bilder/Oppskriftbilder/Ostekake - Nyr.jpg";
import pannacotta from "./bilder/Oppskriftbilder/Pannacotta med Nyr.png";
import potetsalat from "./bilder/Oppskriftbilder/Potetsalat_med_Nyr.png";
import potetsuppe from "./bilder/Oppskriftbilder/Potetsuppe.jpg";
import rabarbrapai from "./bilder/Oppskriftbilder/rabarbrapai.jpg";
import rabarbrasuppe from "./bilder/Oppskriftbilder/rabarbrasuppe.jpg";
import roykelaks from "./bilder/Oppskriftbilder/Roykelaks-med-Nyrkrem-Web1-1024x682.jpg";
import bondepike from "./bilder/Oppskriftbilder/Tilslorte bondepiker med Nyr.jpg";
import tzatsiki from "./bilder/Oppskriftbilder/Tzatsiki.jpg";
import vafler from "./bilder/Oppskriftbilder/Vafler.jpg";
import stangselleri from "./bilder/Oppskriftbilder/stangselleri.jpg";
import smaakaker from "./bilder/Oppskriftbilder/Nyrkakersmaa.jpg";
import dipp from "./bilder/Oppskriftbilder/Nyrdipp.jpg";

export const Oppskrifter = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
    opacity: 0.5,
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "300px",
  };

  const oppskrift = [
    {
      name: "Bakt Løk med Nýr",
      image: baktlok,
      details: `Passer til 4 porsjoner.
      Bak løken med skall i stekeovnen i ca 1 time ved 175 gr, tas ut og toppen skjæres av. Ta ut innholdet uten å ødelegge skallet. Hakk innmaten fra løk og ha dette i en gryte. Damp vekk væsken fra løk-innmaten. Ha i rosemarin, sitron og Nýr. Smak til med salt og pepper. Fyll blandingen tilbake i løkskallene. Dryss over parmesan. Sett i ovnen ca 10 min. Pynt med sprø bacon.<br/>
      <br/>
      4 stk alminnelig løk<br/>
      200 g Nýr<br/>
      Skall fra en sitron<br/>
      10 nåler rosemarin, hakket<br/>
      100 g reven parmesanost<br/>
      8 skiver bacon, sprøstekt<br/>`,
    },
    {
      name: "Blåbærpai med Nýr",
      image: blaabaerpai,
      details: `Blåbærpaien serveres gjerne med vaniljeis, nyplukka blåbær eller Nýrkrem.

      Du trenger: Paiform, bolle, kjele og sikt.<br/>
      
      Bunn<br/>
      175 g mykt smør<br/>
      4 ss sukker<br/>
      2 eggeplommer<br/>
      4,5 dl hvetemel<br/>
      1 ts bakepulver<br/>
      <br/>
      Rør smør og sukker luftig og tilsett eggeplommer.<br/>
      Sikt inn det tørre og bland godt. 2/3 av bunn presses ut i bunn av smurt rund form. Stekes ved 200 grader i 10 min på nederste rille. Avkjøl bunnen. Skru ovn ned til 175 grader. Trykk resten av deigen rundt kanten av formen.<br/>
      <br/>
      Blåbærfyll<br/>
      1 l blåbær<br/>
      1 1/2 dl sukker<br/>
      4 ss maisenamel<br/>
      1/2 ts revet sitronskall<br/>
      1/2 ts kanel<br/>
      1 klype muskatt<br/>
      <br/>
      Kok opp blåbær, sukker, maisenasmel, stronskall, kanel og muskatt under god omrøring.<br/>
      Avkjøles noe før bærfyllet helles opp i formen.<br/>
      <br/>
      Topping<br/>
      2 eggeplommer<br/>
      4 1/2 dl Nýr<br/>
      1 dl sukker<br/>
      2 ts vaniljesukker<br/>
      <br/>
      Bland sammen eggeplomme, Nýr, sukker og vaniljesukker.<br/>
      Legges forsiktig opp over bærfyllet.<br/>
      Stek paien ved 175 grader i ca 45 min til gylden oppå.<br/>
      Avkjøles før servering.<br/>`
    },
    {
      name: "Bringebær Mousse med Nýr",
      image: bringebaermousse,
      details: `Oppskrift til 10 porsjoner<br/>
      <br/>
      Bringebær, sukker og vanilje kokes og blendes glat med en blender og siles.<br/>
      Den avkjøles pure av bringebær vendes ned i Nýr som vendes sammen med smeltet gelatine og tilslutt kremen.<br/>
      Fylles i former og avkjøles. Vendes ut og serveres med friske bringebær og litt pisket krem.<br/>
      <br/>
      200 g frosne bringebær<br/>
      150 g sukker<br/>
      50 g sukker<br/>
      1/2 st vaniljestang<br/>
      5 pl gelatin<br/>
      3 dl pisket fløte<br/>
      2 dl Nýr<br/>`
    },
    {
      name: "Nýrdressing",
      image: dressing,
      details: `Kremet Nýrog grov sennepsdressing<br/>
      Olje, eddik, Nýrog sennep røres sammen. Smak til med salt og pepper. Ha I gressløken til slutt. Godt til alt kokt eller stekt lyst kjøtt, salater og grønnsaker.<br/>
      <br/>
      1 dl Nyr<br/>
      1 dl fløte<br/>
      2 dl olivenolje<br/>
      1 dl valnøtt olje<br/>
      0,5 dl hvitvinseddik<br/>
      5 ss grov Diljon sennep<br/>
      1 dl hakket gressløk<br/>
      <br/>
      Nýr-“Vierge”<br/>
      Alt blandes og smakes til med salt og svart grovmalt pepper.<br/>
      Veldig god som tilbehør til stekt og grillet fisk<br/>
      <br/>
      1 dl Nýr<br/>
      3 dl olivenlje<br/>
      1 dl Sherry eddik<br/>
      2 ss kapers<br/>
      1/2 pt hakket basilikum<br/>
      2 tomater befriet for skinn og kjerner, skåret i tjern<br/>
      <br/>
      Rask Nýr og hvitløksdressing<br/>
      Alt røres sammen i en bolle. Hvitløken trekker i 10 minutter og dressingen siles.<br/>
      Godt og smaksrikt til salater og grønnsaksretter.<br/>
      <br/>
      1 dl Nýr<br/>
      3 dl god olivenolje<br/>
      1 dl sherry eddik<br/>
      2 stk finhakket hvitløksfed<br/>
      salt og svart grovmalt pepper<br/>`
    },
    {
      name: "Fruktsalat med Nýr",
      image: fruktsalat,
      details: `Rør sammen Nýr, vaniljestang og sukker. Vend forsiktig inn prisket krem. Legg denne over dine sukrete favorittbær. Dryss over knust søt kjeks.<br/>
      <br/>
      200 g Nýr<br/>
      2 dl krem<br/>
      5 ss sukker<br/>
      1/2 vaniljestang (kun margen)<br/>`
    },
    {
      name: "Guacamole med Nýr",
      image: guacamole,
      details: `Nok til 6 porsjoner.<br/>
      <br/>
      Kjøres sammen i foodprosessor.<br/>
      Serveres gjerne sammen med torsk, nachos og salsa, eller til mexikansk mat.<br/>
      <br/>
      5 avocado<br/>
      2 ss Nýr<br/>
      1/2 fedd hvitløk<br/>
      1/2 tomat<br/>
      1/4 paprika<br/>
      Litt rød chili<br/>
      Salt og pepper<br/>`
    },
    {
      name: "Nýr Isparfait",
      image: iskrem,
      details: `Nok til 24 porsjoner.<br/>
      <br/>
      Pisk egg og sukker seig. Pisk eggehviter og 1/2 dl sukker til lett marengs, og ha den i eggemassen. Pisk kremfløte og Nýr lett sammen med vaniljesukker og vend det inn i eggemassen. Hell passende former.<br/>
      <br/>
      8 eggeplommer<br/>
      2 dl sukker<br/>
      3 eggehviter<br/>
      1/2 dl sukker<br/>
      2 dl kremfløte<br/>
      3 dl Nýr<br/>
      1 ts vaniljesukker<br/>`
    },
    {
      name: "Nýr Iskake",
      image: iskake,
      details: `Visp eggedosis av eggeplommer og hele egg sammen med sukker. Bland inn samme mengde Nýr.<br/>
      Fryses i springform ca 4-5 timer. Pyntes med bær etter eget ønske.<br/>
      Om fryst lenger, ta opp ca en time før bruk.<br/>
      <br/>
      3 eggeplommer<br/>
      2 hele egg<br/>
      7 ss sukker<br/>
      Lik mengde Nýr<br/>
      Bær<br/>`
    },
    {
      name: "Nýr Smoothie",
      image: smoothie,
      details: `Holder til 12 personer.<br/>
      <br/>
      Alle ingredienser fylles i en mikser og blendes fint. Serveres i iskalde glass.<br/>
      Serveres som en dessert eller som en afternoon drink.<br/>
      Det kan evt. brukes andre friske bær enn jordbær.<br/>
      <br/>
      3 dl vanilje-yoghurt<br/>
      3 dl Nýr<br/>
      500 g. friske eller frosne jordbær<br/>
      10 isbiter<br/>
      60 g sukker<br/>`
    },
    {
      name: "Kremet rosenkål",
      image: kremet_rosen,
      details: `Nok til 5 porsjoner.<br/>
      <br/>
      Blansjér rosenkålen, og del den i fire. Kok inn fløten til halv mengde. Smak til med Nýr og litt sukker. Nå kan rosenkålen vendes i. Salt og pepper etter smak.<br/>
      <br/>
      350 g rosenkål<br/>
      2 dl fløte<br/>
      Nýr etter smak<br/>
      Litt sukker<br/>
      Salt og pepper<br/>`
    },
    {
      name: "Nýr Smøreost",
      image: smoreost,
      details: `Røkt laks kan byttes ut med annen fisk eller kjøtt etter smak.<br/>
      <br/>
      1 stk skive godt brød<br/>
      50 g god røkt fisk<br/>
      1ss Nýr<br/>
      1 ss gressløk eller rødløk<br/>
      1 klype salt<br/>`
    },
    {
      name: "Suppe topping av Nýr",
      image: suppetopping,
      details: `En spiseskje med Nýr og vårløk-krem gir en god kontrast og løfter retter som supper og gryter noen hakk med sin friske gode smak.<br/>
      <br/>
      1 dl Nýr<br/>
      2 ss olivenolje<br/>
      1 stk vårløk<br/>
      1/2 ts maldonsalt<br/>
      1/2 ts grovmalt svart pepper<br/>`
    },
    {
      name: "Rugbrød med Nýr",
      image: nyrbrod,
      details: `Nok til 4 brød.Bland sammen kjerner av gresskar, linfrø, solsikke, hvete eller lignende, salt og myse av Nýr/vann/øl og la det svelle over natten.<br/>
      Alt blandes med kjernene og kjøres i eltemaskin på lav hastighet i 30 min. Veies så opp i 1000g leiver og legges i en smurt brødform.<br/>
      Her kan man med fordel la brødene stå på kjøl i 4-5 dager. De vil smake bedre grunnet en naturlig syrningsprosess.<br/>
      Bruk økologisk mel om mulig.Brødene heves i dampeskap på 38 grader i ca 1,5 time. Eller til det når kanten på formen.<br/>
      Forvarm ovnen til 240 grader og sett inn brødene. Etter 5 min setter du ned varmen til 190 grader. <br/>
      Etter 30 minutter kan du ta brødet ut av formen og steker videre 5-7min så du får en sprøere skorpe. Avkjøles på rist.<br/>
      <br/>
      1000 g blandede kjerner f.eks gresskarkjerner, linfrø, solsikkekjerner, hvete eller lignende
      45 g salt<br/>
      1000 g Nýr myse, vann, øl eller det du måtte ønske<br/>
      <br/>
      750 g siktet hvetemel<br/>
      300 g siktet rug<br/>
      300 g sammalt rug<br/>
      625 g vann<br/>
      250 g Nýr<br/>
      50 g maltsirup<br/>
      15 g fersk gjær<br/>`
    },
    {
      name: "Nýr Cocktail",
      image: cocktail,
      details: `Holder til 4 porsjoner.<br/>
      Pisk Nýr, fløte, vanilje og sukker sammen. Ta 4 coctailglass og ha litt blåbær i bunnen, så litt Nýrmasse, så jordbærsorbé og så videre lagvis. Pynt med mynte og friske blåbær.<br/>
      <br/>
      200 g frisk blåbær<br/>
      500 g jordbærsorbé, rørt litt porøst<br/>
      400 g Nýr<br/>
      1 dl fløte<br/>
      100 g sukker<br/>
      Margen fra 1 vaniljestang<br/>`
    },
    {
      name: "Nýr eplekake",
      image: nyreplekake,
      details: `Nok til 2 gastrobakker.<br/>
      <br/>
      Kjør smør og melis i kjøkkenmaskin. Tilsett egg og hvetemel og bland det sammen til en glass masse som settes til kjøling i 1 time. Kjevles ut til to gastrobakker. Forstek på 175 grader i 10 minutter.<br/>
      <br/>
      Skrell ca 20 epler og kutt dem i båter. Eplebåtene vendes i kanel og sukker før de fordeles på bunnene.<br/>
      <br/>
      Pisk Nýr, eggeplommer, sukker og vaniljesukker til en glatt masse som legges over eplene. Kakene stekes i ovn på 175 grader til eplene er møre.<br/>
      <br/>
      600 g smør<br/>
      300 g melis<br/>
      3 egg<br/>
      900 g hvetemel<br/>
      <br/>
      15 eggeplommer<br/>
      1,5 kg Nýr<br/>
      650 g sukker<br/>
      3 ts vaniljesukker<br/>`
    },
    {
      name: "Nýrkake",
      image: nyrkake,
      details: `Knus kjeksen og bland inn krydder og smør. Press kjeks/smørblandingen i en kakeform over hele bunnen og opp på kanten av formen. Sett kakeformen kaldt.<br/>
      Bland fyllet sammen med Nýr, melis, vanilje. Visp et egg av gangen inn i blandingen. Hell fyllet over kjeksblandingen i formen. Stekes på 140 grader i ca 30 minutter til blandingen har stivnet, pass på så det ikke stekes for lenge. Ta kakeformen ut av ovnen og legg på lokk av topping etter ønske.<br/>
      <br/>
      Bunn:<br/>
      1 pk bixit el.a. kjeks<br/>
      1 ts krydderblanding av kanel, nellik og allehånde<br/>
      100 gr smeltet meierismør røres inn i kjeksen<br/>
      <br/>
      Fyll:<br/>
      500 g Nýr<br/>
      180 g melis og<br/>
      2 ts god vanilje<br/>
      4 egg<br/>
      <br/>
      Topping:<br/>
      Alternativ 1<br/>
      1 kopp fløte<br/>
      3 ss Nýr<br/>
      1 eggeplomme<br/>
      <br/>
      Visp godt sammen og legges på toppen av kaka. Rasp litt muskatnøtt på toppen. Etterstek ved 170 grader i 7-8 min. Avkjøles og nytes.<br/>
      <br/>
      Alternativ 2<br/>
      Visp Nýr med melis og ekte vanilje etter smak<br/>
      Legges på som lokk når kaka er nedkjølt. Kan røre inn litt bringebær, jordbær i noe av kremen og bruke kakesprut til pynting.<br/>`
    },
    {
      name: "Nýrkrem med egg",
      image: nyrkrem_egg,
      details: `Splitt vaniljestangen på langs og fjern så mange frø du ønsker å bruke.<br/>
      Separer eggeplommen fra eggehviten.<br/>
      Ha Nýr, en rå eggeplomme, sukker og vaniljefrø i en bolle og visp kraftig.<br/>
      <br/>
      Du trenger: Bolle, visp, kniv.<br/>
      <br/>
      Nýrkrem<br/>
      200 gram Nýr<br/>
      1.5 ss sukker<br/>
      1 stk eggeplumme<br/>
      1 stk vaniljestang<br/>`
    },
    {
      name: "Nýrkrem med sitron",
      image: nyrkrem_sitron,
      details: `Kok opp fløte, sukkeret, den bløtlagde gelatinen og den splittede vaniljestangen. Rør inn Nýr og sil den i en espumaflaske. Ikke ha flasken mer en halvfull. Fyll den med to patroner og rist den godt. Sett den på hodet/opp-ned i kjøleskapet. Rist på den hvert 10 minutt til den er kald. Sprøyt kremen ut over bringbærene rett før servering.<br/>
      <br/>
      2 dl fløte<br/>
      350 g Nýr<br/>
      175 g sukker<br/>
      2 pl gelantine<br/>
      1/2 stk vaniljestang<br/>`
    },
    {
      name: "Sveler med Nýr",
      image: pannekaker,
      details: `Pisk egg og sukker til eggedosis. Bland resten inn i eggedosisen. La stå å svelle i 2-3 timer på kjøl. Stekes på takke eller i tørr teflonpanne. Serveres med syltetøy og Nýr<br/>
      <br/>
      Du trenger: Takke eller teflon/keramisk panne, stekespade, bolle og visp.<br/>
      <br/>
      Svelerøre<br/>
      5 stk egg<br/>
      300 g sukker<br/>
      500 g hvetemel<br/>
      900 g Nýr<br/>
      1 ts natron<br/>
      1 ts hornsalt<br/>
      100 g smeltet smør eller nøttesmør<br/>`
    },
    {
      name: "Ostekake med Nýr",
      image: ostekake,
      details: `Pynt ostekaken med friske bær eller frukt, eventuelt legg et lokk med gelé over ostekaken og la lokket stivne.<br/>
      <br/>
      Du trenger:<br/>
      Springform 25 cm, bolle, kjele, visp<br/>
      <br/>
      Bunn<br/>
      1 pakke Bixit kjeks<br/>
      120 gram Smør<br/>
      <br/>
      Knus kjeksen til smuler og bland kjeks og smør.<br/>
      Dekk bunnen av en springform med kjeks/smør-blandingen.<br/>
      <br/>
      Fyll<br/>
      1 pakke gul gelé<br/>
      2,5 dl vann<br/>
      500 gram Nýr<br/>
      3,3 dl fløte<br/>
      130 gram sukker<br/>
      <br/>
      Kok opp vann, rør inn en pakke sitrongele og sukker. Avkjøl litt.<br/>
      Visp Nýr inn i vann/gele/sukker blandingen, rør inn stivpisket kremfløte til slutt.<br/>
      <br/>
      Hell denne ostemassen i springformen over kjeksbunnen.<br/>
      Settes kaldt.<br/>`
    },
    {
      name: "Pannacotta med Nýr",
      image: pannacotta,
      details: `Nok til 4 porsjoner<br/>
      <br/>
      Legg gelatinplatene i kaldt vann.<br/>
      Skrap ut frøene fra vaniljestangen. Varm opp fløte, sukker, vaniljefrøene og vaniljestangen til kokepunktet. Ta ut vaniljestangen. Klem ut vannet fra gelatinen og rør gelatinen inn i fløteblandingen. Avkjøl til fingertemperatur, og ha i Nýr. Sett til kjøing i valgte former og avkjøl i noen timer. Kan gjerne tilberedes dagen før eller på morgenen.<br/>
      <br/>
      1 dl fløte<br/>
      4 dl Nýr<br/>
      1 dl sukker<br/>
      1 stk vaniljestang<br/>
      2 pl gelatin<br/>`
    },
    {
      name: "Potetsalat med Nýr",
      image: potetsalat,
      details: `Nok til 6 porsjoner<br/>
      <br/>
      Kok potetene, og kutt i biter. Ha i majones og Nýr, og snitt purreløken. Alt vendes sammen. Smak til med salt og pepper.<br/>
      <br/>
      500 g potet<br/>
      150 g majones<br/>
      150 g Nýr<br/>
      1⁄2 purreløk<br/>`
    },
    {
      name: "Potetsuppe med Nýr",
      image: potetsuppe,
      details: `Nok til 6-7 porsjoner<br/>
      <br/>
      Bacon, løk og hvitløk freses godt i kjele. Skrell potetene, og del de i biter. Kok potetene møre i kraften. Kjør blandingen glatt med kjøkkenmaskin.<br/>
      Tilsett fløte. Smakes til med salt og pepper.<br/>
      <br/>
      Bruk Nýr som topping på suppen. Det smaker godt, og ser flott ut!<br/>
      <br/>
      700 g pimpernellpotet<br/>
      1 kepaløk<br/>
      2 fedd hvitløk<br/>
      100 g bacon<br/>
      1,5 l hønsekraft<br/>
      4 dl fløte<br/>
      Salt og pepper<br/>`
    },
    {
      name: "Rabarbrapai med Nýr",
      image: rabarbrapai,
      details: `Server paien lunken eller kald med vispet krem, Nýrkrem eller is til.<br/>
      <br/>
      Du trenger: bolle, kjøkkenmaskin, kniv, skjærefjøl<br/>
      <br/>
      Paibunn<br/>
      3 dl hvetemel<br/>
      1 dl sukker<br/>
      1 tskje bakepulver<br/>
      150 gram meierismør<br/>
      <br/>
      Ha ingrediensene i bollen til kjøkkenmaskinen. Kjør til deigen har samlet seg.<br/>
      Trykk ut deigen i en paiform, ca 26cm. Dekk bunnen og godt opp langs kantene på formen med deig.<br/>
      Stek formen i nedre del av ovnen ved 200 grader i ca 10 minutter.<br/>
      <br/>
      Rabarbrafyll<br/>
      300 gram Nýr<br/>
      1,5 tskje vaniljesukker<br/>
      4 dl rabarbra<br/>
      2 dl sukker<br/>
      1 stk egg<br/>
      <br/>
      Bland sammen ingrediensene og hell i den forstekte paibunnen. Stek paien videre i 20 – 25 minutter til fyllet stivner. Ved avkjøling stivner fyllet ytterligere<br/>`
    },
    {
      name: "Rabarbrasuppe med Nýr",
      image: rabarbrasuppe,
      details: `Suppa kan serveres både varm og kald.<br/>
      Legg en skje med Nýr i suppa før servering!<br/>
      <br/>
      Rabarbrasuppe<br/>
      360 gram rabarbra<br/>
      1,5 dl sukker<br/>
      1 liter vann<br/>
      1 stk vaniljestang<br/>
      1 stk kanelstang<br/>
      <br/>
      1,5 ss potetmel<br/>
      0,2 dl kaldt vann<br/>
      <br/>
      Skyll rabarbraen godt og skjær det opp ca 1 cm store biter.<br/>
      <br/>
      Kok opp vann, ha i sukker, vanilje og kanel.<br/>
      Ha i rabarbraen og la suppen småkoke i 10-15 minutter.<br/>
      Pass på så det ikke blir en fin grøt, det skal fortsatt være noen hele biter med rabarbra igjen.<br/>
      <br/>
      Rør potetmelet ut i litt kaldt vann før du heller det i suppa under omrøring.<br/>
      Suppa skal bare varmes opp til kokepunktet etter du har hatt i potetmelet.<br/>
      <br/>
      Nýrtopping<br/>
      1 dl Nýr<br/>
      1 stk vaniljestang<br/>
      150 g melis<br/>
      Bland sammen Nýr, melis og vanilje. Visp godt og legg på toppen av suppa før servering.<br/>`
    },
    {
      name: "Nýr og rømme til laks",
      image: roykelaks,
      details: 'Pisk opp rømmen. Rør honningen inn i Nýr og bland sammen. <br/>100 g seter rømme<br/>150 g nyr<br/>50 g honning<br/>',
    },
    {
      name: "Tilslørt bondepike med Nýr",
      image: bondepike,
      details: `Nok til 5-6 glass.<br/>
      <br/>
      Skrell 6 epler og kutt dem i terninger. Halvparten kokes inn med litt skukker til puré. Ha i resten av eplene som trekkes møre i den varme puréen. Avkjøl.<br/>
      <br/>
      Pisk fløte og sukker. Rør inn Nýr til slutt. Om ønskelig kan du benytte deg av kun Nýr.<br/>
      <br/>
      Legg epler og Nýr-krem lagvis i glass. Strø med kavring og eventuelt hakkede mandler mellom lagene og på toppen.<br/>
      <br/>
      Nýr-krem<br/>
      2 dl fløte<br/>
      2 dl Nyr<br/>
      100 g sukker<br/>`
    },
    {
      name: "Tzatsiki med Nýr",
      image: tzatsiki,
      details: `Nok til 5 porsjoner.<br/>
      <br/>
      Legg Nýr i et klede for avrenning. Ha i revet agurk og fint kuttet hvitløk. Smak til med salt og pepper.<br/>
      <br/>
      3 ss Nýr<br/>
      1 agurk, grovt revet<br/>
      1/2 fedd hvitløk<br/>
      Salt og pepper<br/>`
    },
    {
      name: "Vafler med Nýr",
      image: vafler,
      details: `Nok til 10-15 vaffelplater<br/>
      <br/>
      Blandes til glatt røre. Melk og mel-mengde kan varieres etter ønske.<br/>
      <br/>
      1,5 dl sukker<br/>
      1 ts vaniljesukker<br/>
      4 dl melk<br/>
      4 ss Nýr<br/>
      Mel<br/>
      1 ts bakepulver<br/>
      Kardemomme<br/>
      100 g smør<br/>`
    },
    {
      name: "Nýr dipp",
      image: dipp,
      details:`Alt du trenger er å blande sammen Nýr og krydder i en bolle og vips, så har du dippen klar!<br/>
      <br/>
      2 dl Nýr<br/>
      1,5 tskje sukker<br/>
      0,5 tskje salt<br/>
      0,5 tskje paprikapulver<br/>
      0,25 tskje pepper<br/>
      0,5 tskje gurkemeie<br/>
      0,5 tskje cayennepepper<br/>`
    },
    {
      name:"Stangselleri-Sherry Nýr",
      image: stangselleri,
      details: `120 g demerara sukker<br/>
      2,5 dl sherry<br/>
      40 g sjalottløk<br/>
      150 g stangselleri blader og snittet stangselleri<br/>
      400 g Nýr<br/>
      salt/pepper<br/>
      <br/>
      Fremgangsmåte<br/>
      <br/>
      Sukker karamelliseres lett, pass på at det ikke brenner seg.<br/>
      Sherry helles over den lette karamellen sammen med snittet sjalottløk.<br/>
      Dette reduseres til det er ca 1 dl igjen, avkjøl, så tilsettes stangselleri og Nýr.<br/>
      Kjør dette fint og glatt med en stavmixer, og smakes til med salt og pepper.<br/>
      La den så sette seg litt i kjøleskap (2-4 timer), så smakene får utvikle seg litt.<br/>
      Røres om, og server til f.eks fisk eller spekemat.<br/>`
    },
    {
      name: "Småkaker med Nýr",
      image: smaakaker,
      details: `Bland alt det tørre godt sammen. Rør inn eggehviter og Nýr. Rør inn smøret til slutt. Ha på sprøytepose og fyll i ønskede former.<br/>
      Bakes på 205 grader i 5-­10 min. Alt etter størrelse. Dryss over melis eller yopol. Serveres varme.<br/>
      <br/>
      250 g sukker<br/>
      125 g malte hasselnøtter<br/>
      110 g mel<br/>
      4 g bakepulver<br/>
      12,5 g yopol (kan sløyfes)<br/>
      1 g maldon salt<br/>
      112,5 g Nýr<br/>
      125 g eggehviter<br/>
      9 g eggehvitepulver<br/>
      150 g smeltet nøttesmør (buerre noisette) – evntuelt vanlig smør<br/>`
    }
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <section className="flex-1 flex flex-col min-h-screen mx-auto pb-16">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start gap-5 text-center`}
      >
        <div className="max-w-screen-lg mx-auto">
          <h1
            className={`${styles.heroHeadText} text-[#003b1d] justify-center items-center`}
          >
            Oppskrifter
          </h1>

          <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-5"></div>
          {/* Viser bildet på toppen når man har trykket på ett. */}
          {selectedRecipe && (
            <div className="bg-white bg-opacity-50 p-4 rounded-xl mb-5">
              <h1 className="text-xl font-bold mb-2 text-[#003b1d]">{selectedRecipe.name}</h1>
              <img className="mx-auto d-block rounded-xl mb-2" src={selectedRecipe.image} alt={selectedRecipe.name} style={{ maxWidth: '300px'}}/>
              <div className="text-[#003b1d]"dangerouslySetInnerHTML={{ __html: selectedRecipe.details}}></div>
            </div>
          )}

          {/* Liste av alle oppskriftene */}
          <div className="flex flex-wrap -m-4">
            {oppskrift.map((oppskrift) => (
              <OppskriftsKort
                key={oppskrift.name}
                {...oppskrift}
                onClick={() => {setSelectedRecipe(oppskrift);window.scrollTo(0, 0)}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
