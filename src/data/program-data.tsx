export type ProgramDataT = {
  title: string,
  text: string;
  pieces: PieceDataT[];
};

export type PieceDataT = {
  title: string;
  source: string;
  description: string;
};

export const ProgramData: ProgramDataT = {
  title: "A műsorról",
  text: "A koncerten elhangzó **vokális művek** a szerző korai alkotóperiódusából származnak, annak stílusát, jellegzetes zeneszerzői megoldásait tükrözik. A *Musicalische Andachten* ötkötetes sorozat zeneszerzési stílus és előadói apparátus szempontjából is változatos műveket tartalmaz. Az **1639-ben kiadott első kötet**, amelyből három művet is választottunk, énekes duetteket tartalmaz **continuo** kísérettel, *concertato stílusban*, gyakran szenvedélyes szövegkifejezéssel. A sorozat harmadik és ötödik kötetében az énekszólamhoz – vagy énekszólamokhoz – **szólóhangszerek**, általában hegedűk csatlakoznak. Ezeket a szólamokat a kor gyakorlata szerint más hangszerekkel is elő lehet adni, ahogy azt mi is tesszük. $$ Az **1649-ben kiadott** *Motettae unius et duarum vocum* című kötetből egy énekhangra és continuóra írt darabokat választottunk. Szerény apparátusuk ellenére ezek a kompozíciók változatos zenei eszközökkel és gazdag kifejezőerővel ragadják meg a vallásos szövegek mondanivalóját. $$ Az *„...Ander Theil...”* című művében Hammerschmidt szöveg nélküli, instrumentális darabokat publikált basso continuóra és két canti szólamra. Ez utóbbiak a korszak legnépszerűbb magas szólamú hangszerei – például hegedűk vagy cornettók – lehettek, de szükség esetén más vonós vagy fúvós hangszerekkel is megszólaltathatták őket, ami akkoriban bevett gyakorlat volt. $$ A gyűjteményben található zeneművek bájos, egyszerű és elegáns rövid dallamokból és motívumokból állnak, amelyeket Hammerschmidt hosszabb kompozíciókká fejlesztett. A **canzonák** a szerző életében modernnek számítottak; több, egymástól kontrasztosan elkülönülő részből épülnek fel, ami a műfajt különösen retorikussá és elbeszélő jellegűvé teszi. $$ Hammerschmidt egy **18 variációból álló sorozatot** is hátrahagyott, amely ugyanarra a melodikus és harmonikus témára épül. Ezek közül a legérdekesebbeket és legszebbeket fogjuk előadni. A variációk szorosan kapcsolódnak az improvizációs gyakorlathoz, és támpontokat nyújtanak a megfelelő díszítésekhez, *diminúciókhoz*, valamint kisebb módosításokhoz és átdolgozásokhoz.",
  pieces: [
    {
      title: "Wohl dem der nicht wandelt",
      source: "Musikalische Andachten, vol. 3, 1642",
      description: "Boldog ember az, aki nem jár a bűnösök tanácsa szerint, nem áll a vétkesek útjára, és nem ül a csúfolódók székére, hanem az Úr törvényében gyönyörködik, és az ő törvényéről elmélkedik éjjel-nappal. Olyan lesz, mint a folyóvíz mellé ültetett fa, amely idejében megtermi gyümölcsét, és nem hervad el a lombja. Minden sikerül, amit tesz. Nem így járnak a bűnösök, hanem úgy, mint a pelyva, amelyet szétszór a szél. Ezért nem állhatnak meg a bűnösök az ítélet idején és a vétkesek az igazak közösségében. Mert ismeri az Úr az igazak útját, a bűnösök útja pedig semmibe vész.$$*(Zsoltárok 1)*"
    },
    {
      title: "Ballet",
      source: "Ander Theil, Newer Paduanen, Freiberg, 1639",
      description: ""
    },
    {
      title: "Vulnerasti cor meum",
      source: "Motettae, unius et duarum vocum, 1649",
      description: "Megsebezted szívemet, húgom, menyasszonyom, megsebezted szívemet. Szemed egyetlen pillantásával és nyakad egyetlen fürtjével. Mily szépek a kebleid, húgom, menyasszonyom! Megsebezted szívemet; kebleid szebbek a bornál. Egészen szép vagy, én gyönyörűségem, barátom, és nincs benned semmi folt.$$*(Énekek éneke 4)*"
    },
    {
      title: "Doce me, Domine",
      source: "Motettae, unius et duarum vocum, 1649",
      description: "Taníts engem utaidra, URam, hogy igazságod szerint járjak, és teljes szívvel féljem nevedet. Magasztallak, Uram, Istenem, teljes szívből, és tisztelem nevedet örökké. Mert nagy a te irgalmad irántam, és kimentetted lelkemet a mélységes pokolból. Magasztallak, Uram, Istenem, teljes szívből, és tisztelem nevedet örökké.$$*(Zsoltárok 86:11-12)*"
    },
    {
      title: "Herr, Jesu Christ",
      source: "Musikalische Andachten, vol.1, 1639",
      description: "Uram, Jézus Krisztus, ha csak Téged birtokollak, nem kérdezek semmit mennyről és földről. Ha testem és lelkem el is lankad, Te vagy mégis, ó Isten, mindenkor szívem vigasza és az én osztályrészem!$$*(Zsoltárok 73:25-26)*"
    },
    {
      title: "Confitebor tibi, Domine",
      source: "Motettae, unius et duarum vocum, 1649",
      description: "Hálát adok neked, Uram, teljes szívemből, elbeszélem minden csodádat. Örvendezni és ujjongani fogok tebenned, zengedezem a nevednek, Felséges. Alleluja.$$*(Zsoltárok 9:2-3)*"
    },
    {
      title: "Variationen",
      source: "Ander Theil, Newer Paduanen, Freiberg, 1639",
      description: ""
    },
    {
      title: "Erwecke dich, Herr",
      source: "Musikalische Andachten, vol.1, 1639",
      description: "Ébredj fel, Uram! Miért alszol? Kelj fel, és ne vess el minket örökre! Miért rejted el orcádat, miért feledkezel meg nyomorúságunkról és szorongattatásunkról? Lelkünk a porba hanyatlik. Kelj fel, segíts rajtunk, és válts meg minket!$$*(Zsoltár 44:24-27)*"
    },
    {
      title: "De profundis clamavi",
      source: "Motettae, unius et duarum vocum, 1649",
      description: "A mélységből kiáltok hozzád, Uram! Uram, halld meg szavamat, füled legyen figyelmes könyörgő szavamra! Ha a bűnöket számon tartod, Uram, Uram, ki marad meg akkor? De nálad van a bocsánat, ezért félnek téged. Várom az Urat, várja a lelkem, és bízom ígéretében. Lelkem várja az Urat, jobban, mint az őrök a reggelt, mint az őrök a reggelt. Bízzál, Izráel, az Úrban, mert az Úrnál van a kegyelem, és gazdag ő, meg tud váltani. Meg is váltja Izráelt minden bűnéből.$$*(Zsoltár 130)*"
    },
    {
      title: "Canzon",
      source: "Ander Theil, Newer Paduanen, Freiberg, 1639",
      description: ""
    },
    {
      title: "O frommer Gott",
      source: "Musikalische Andachten, vol.1, 1639",
      description: "Ó, kegyes Isten, Úr Jézus Krisztus, mivel Te irgalmas vagy, alázatosan kérlek, vigasztalj meg engem a Te vigaszoddal. Adj nekem e kereszt és szenvedés után örök örömöt és boldogságot.**$$*(Egy himnusz szövege ismeretlen szerzőtől)*"
    },
    {
      title: "Wohl dem der den Herren fürchtet",
      source: "Musikalische Andachten, vol.3, 1642",
      description: "**Boldog az, aki féli az Urat, aki nagy örömét leli parancsolataiban.**$$Az ő utódai hatalmasak lesznek a földön, az igazak nemzedéke áldott lesz.$$**Boldog az, aki féli az Urat, aki nagy örömét leli parancsolataiban.**$$Gazdagság és bőség lesz házában, és igazsága örökké megmarad.$$**Boldog az, aki féli az Urat, aki nagy örömét leli parancsolataiban.**$$*(Zsoltárok 112. alapján)*"
    }
  ]
  
  
};
