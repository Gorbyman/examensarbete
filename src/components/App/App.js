import './App.scss';
@observer export default class App extends Component {

  @observable style = {opacity: 0};
  // @observable quizObj = [
  //   {
  //     number: 1,
  //     imgPath: '/images/quiz-images/garbage-can.jpeg',
  //     text: 'Brukar du i möjligaste mån sop-sortera?',
  //     weight: 'medium',
  //     correctAnswer: 'yes',
  //     tip: 'Skapa en enkel rutin för att sopsortera t.ex. genom att ha en plats med flera olika kärl placerade för respektive sop-fraktion. Exempel på fraktioner är "brännbart", "plats", "metall", "komposterbart". Kolla upp vilka som sorteras på just din kommun!'
  //   },
  //   {
  //     number: 2,
  //     imgPath: '/images/quiz-images/train.jpg',
  //     text: 'Brukar du undvika att ta bilen till jobbet?',
  //     weight: 'heavy',
  //     correctAnswer: 'yes',
  //     tip: 'Att åka kollektivt är ett enkelt sätt att minska på utsläppen. Kolla hur möjligheterna ser ut för dig att kunna åka kollektivt. Eller har du möjlighet att ta pedalkusen?'
  //   },
  //   {
  //     number: 3,
  //     imgPath: '/images/quiz-images/solar.jpg',
  //     text: 'Har du tecknat avtal för grön el?',
  //     weight: 'heavy',
  //     correctAnswer: 'yes',
  //     tip: 'Grön el produceras från förnybara energikällor som inte tär på jordens resurser och bidrar inte till koldioxid-utsläpp. Se över om du kan ändra ditt el-avtal.'
  //   },
  //   {
	// 	number: 4,
	// 	imgPath: '/images/quiz-images/kitchen.jpg',
	// 	text: 'Brukar du låta apparatens energiförbrukning styra ditt val vid köp av nya vitvaror?',
	// 	weight: 'medium',
	// 	correctAnswer: 'yes',
	// 	tip: 'Äldre vitvaror eller de med högre energiförbrukning är energibovar som på sikt kostar mer i form av elkostnader. Satsa på så bra energi-klass som möjligt även om det blir en större kostnad vid inköpet.'
	// },
	// {
	// 	number: 5,
	// 	imgPath: '/images/quiz-images/markings.jpg',
	// 	text: 'Är detta märkning för odlade fisk- och skaldjursprodukter och svanen-märket?',
	// 	weight: 'light',
	// 	correctAnswer: 'no',
	// 	tip: 'Det finns en mängd olika märkningar för att guida dina val vid inköp. Kolla upp vad de betyder på miljomarkningar.se så du kan göra dina val därefter.'
	// },
	// {
	// 	number: 6,
	// 	imgPath: '/images/quiz-images/car.jpg',
	// 	text: 'Tar du oftast bilen när du gör dina matvaru-inköp?',
	// 	weight: 'medium',
	// 	correctAnswer: 'no',
	// 	tip: 'Din bilresa till affären kan vara en större miljöbov än din favvomat från andra sidan jordklotet. Försök handla utan bilen så ofta du kan. Kör hårt med dramaten, cykelväskan och armmusklerna istället.'
	// },
	// {
	// 	number: 7,
	// 	imgPath: '/images/quiz-images/airplane.jpg',
	// 	text: 'Du flyger utomlands på semestern?',
	// 	weight: 'heavy',
	// 	correctAnswer: 'no',
	// 	tip: 'Långa flygresor är vansinnigt klimatpåverkande. Välj närmare resmål till den årliga semestern. Klimatsmart är att resa långt mer sällan och att vara borta längre tid istället.'
	// },
	// {
	// 	number: 8,
	// 	imgPath: '/images/quiz-images/field.jpg',
	// 	text: 'Väljer du aktivt att äta mer mat från växtriket och mindre kött?',
	// 	weight: 'medium',
	// 	correctAnswer: 'yes',
	// 	tip: 'Försök äta mer frukt och grönt och ersätt köttet. En bra början är en köttfri dag i veckan.'
	// },
	// {
	// 	number: 9,
	// 	imgPath: '/images/quiz-images/krav-eu-lovet.jpg',
	// 	text: 'Köper du ekologiska varor när det alternativet finns?',
	// 	weight: 'medium',
	// 	correctAnswer: 'yes',
	// 	tip: 'Att handla ekologiska produkter bidrar till friskare vatten, gladare djur, mindre gifter och att fler fåglar och blommor trivs. Butikerna har större och större sortiment av ekologiska varor men ibland visas de inte upp så mycket så det gäller att leta eller fråga.'
	// },
	// {
	// 	number: 10,
	// 	imgPath: '/images/quiz-images/bbq.jpg',
	// 	text: 'Använder du eltändare och tändpapper när du ska starta upp grillen?',
	// 	weight: 'light',
	// 	correctAnswer: 'yes',
	// 	tip: 'Tändvätska görs nästan uteslutande av fossila oljeprodukter. När den förbränns bildas koldioxid som påverkar klimatet. Grillkol märkt med Bra miljöval innehåller inga farliga kemiska tillsatser och kolet kommer från kontrollerade avverkningar som tar hänsyn till djur och natur. '
	// },
	// {
	// 	number: 11,
	// 	imgPath: '/images/quiz-images/clothes.jpg',
	// 	text: 'Köper du alltid nya kläder?',
	// 	weight: 'medium',
	// 	correctAnswer: 'no',
	// 	tip: 'En av de viktigaste sakerna du kan göra för miljön är att återanvända kläder. En bonus är att kläderna troligtvis inte innehåller några rester av kemikalier eftersom de har tvättats så många gånger. Detta är extra vikigt om du köper kläder till barn.'
	// },
	// {
	// 	number: 12,
	// 	imgPath: '/images/quiz-images/mop.jpg',
	// 	text: 'Dammsuger du innan moppning av golven?',
	// 	weight: 'light',
	// 	correctAnswer: 'yes',
	// 	tip: 'Det är alltid bäst att dammsuga innan våttorkning av golven efter som reningsverken har svårt att få bort miljögifter som annars hamnar i avloppet.'
	// },
	// {
	// 	number: 13,
	// 	imgPath: '/images/quiz-images/tap.jpg',
	// 	text: 'Har du energisparande munstycken på dina kranar och dusch?',
	// 	weight: 'light',
	// 	correctAnswer: 'yes',
	// 	tip: 'Att sätta in snålspolande munstycken är en enkel åtgärd som även betalar sig själv snabbt. Dagens snålspolande duschmunstycken förbrukar hälften så mycket vatten som äldre konventionella modeller. Tekniken är så pass bra att du inte märker någon skillnad i duschupplevelsen'
	// },
	// {
	// 	number: 14,
	// 	imgPath: '/images/quiz-images/toilet.jpg',
	// 	text: 'Häller du lösningsmedel, färg eller andra kemikalier i vasken eller toaletten.',
	// 	weight: 'medium',
	// 	correctAnswer: 'no',
	// 	tip: 'Lämna lösningsmedel och andra farliga kemikalier hos närmaste miljöstation för farligt avfall. Reningsverkens filter har svårt att ta hand om dessa så det är stor sannolikhet att de åker ut i naturen istället.'
	// },
	// {
	// 	number: 15,
	// 	imgPath: '/images/quiz-images/bubble.jpg',
	// 	text: 'Har du mestadels miljömärkta artiklar i din städskrubb?',
	// 	weight: 'light',
	// 	correctAnswer: 'yes',
	// 	tip: 'Det finns gott om miljömärkta städ-produkter i butikerna. Håll utkik efter miljömärkningar eller tänk över om du kan klara dig helt utan just denna produkt.'
	// },
	// {
	// 	number: 16,
	// 	imgPath: '/images/quiz-images/tv.jpg',
	// 	text: 'Brukar du låta apparater stå i standby-läge när de inte används?',
	// 	weight: 'light',
	// 	correctAnswer: 'no',
	// 	tip: 'Apparater i standby-läge drar ström, därför är det bäst att stänga av dem helt. Ett tips är att dra alla sladdar till grenkontakter med avstängningsknapp.'
	// },
	// {
	// 	number: 17,
	// 	imgPath: '/images/quiz-images/bottles.jpg',
	// 	text: 'Pantar du flaskor och burkar?',
	// 	weight: 'light',
	// 	correctAnswer: 'yes',
	// 	tip: 'Spara dina pant-burkar och flaskor och passa på att panta dem när du ändå ska handla livsmedel. Pantade burkar och flaskor sparar mycket energi och resurser jämfört med att göra helt nya.'
	// },
	// {
	// 	number: 18,
	// 	imgPath: '/images/quiz-images/plasticbag.jpg',
	// 	text: 'Köper du plastpåsar att ha dina varor i när du handlat?',
	// 	weight: 'light',
	// 	correctAnswer: 'no',
	// 	tip: 'Ta med tygpåsar som går att använda många gånger när du ska handla. På så vis behöver du inte köpa nya i plast eller papper.'
	// },
	// {
	// 	number: 19,
	// 	imgPath: '/images/quiz-images/noflyers.jpg',
	// 	text: 'Har du satt upp "Nej tack till reklam" på brevlådan?',
	// 	weight: 'medium',
	// 	correctAnswer: 'yes',
	// 	tip: 'Skippa reklamen i brevlådan, den använder mycket resurser både vid tillverkningen och distrubitionen. Sök på internet om du vill ta del av en butiks erbjudande istället.'
	// },
	// {
	// 	number: 20,
	// 	imgPath: '/images/quiz-images/lightbulb.jpg',
	// 	text: 'Har du mestadels LED-belysning i hemmet?',
	// 	weight: 'light',
	// 	correctAnswer: 'yes',
	// 	tip: 'Byta till LED-belysing för att spara energi. Det är en större utgift i början men de håller mycket längre än annan belysning så i längden lönar det sig.'
  //   }
  // ]

  async start(){

    // avoid FOUC by waiting for styles to load
    // and then fade in the app
    while(this.style.opacity < 1){
      await sleep(60);
      let ok = $('body').css('font-family').length > 10;
      this.style.opacity += ok ? .1 : 0;
    }

    // no focusing of buttons when you click them
    $(document).on('click', 'button', function(){ $(this).blur(); })
 
    // För att läsa in frågor, behöver bara köras en gång
    // for(let obj of this.quizObj){
    //   fetch('/api/addQuestion',
    //     {
    //       method: 'POST',
    //       body:JSON.stringify({number: obj.number, imgPath: obj.imgPath, text: obj.text, weight: obj.weight, correctAnswer: obj.correctAnswer, tip: obj.tip}),
    //       headers: { 'Content-Type': 'application/json' }
    //     })
    //     .then(res=>res.json())
    //     .catch((err) => {
    //     console.log('error', err);
    //     });
    //     console.log('Frågor inlästa');
    //   }
  }

}