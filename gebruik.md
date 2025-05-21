## Gebruik van het wijzigingsprotocol

Het protocol schrijft een vast stramien voor het wijzigen van de standaard voor. Het protocol benoemt de fasen en de op te leveren resultaten. Belangrijk zijn de randvoorwaarden en uitgangspunten. De gebruikers van DCAT-AP-NL betrekken wij bij het wijzigen van de standaard. We zetten op een rij welke betrokkenen er zijn.

### Protocol versus proces

De titel van dit document geeft aan dat het hier om een protocol gaat. Toch wordt in dit document ook gesproken over processen. Een wijzigingsprotocol beschrijft de manier waarop wijzigingen in de standaard plaatsvindt: het wijzigingsproces. In het protocol zijn basisbegrippen en uitgangspunten uiteengezet voor het wijzigingsproces, bijvoorbeeld wat onder nieuwe en volgende versies verstaan wordt en wanneer deze verwacht mogen worden. De daadwerkelijke planning van een nieuwe versie wordt in overleg met de opdrachtgever en eigenaar van de standaard opgesteld.

Met behulp van een wijzigingsprotocol voor de standaard geeft Geonovum:
- inzicht in het behandel- en besluitproces dat ten grondslag ligt aan het versiebeheer;
- inzicht in de aangeboden wijzigingsvoorstellen;
- stabiliteit aan de standaard;
- continuïteit aan de standaard;
- een eenduidige aanpak.

### Releasebeleid  

#### Nieuwe versie van de standaard

Een release van een standaard is een nieuwe uitgave van de standaard. De nieuwe release kenmerkt zich ten opzichte van de oude versie door een hoger versienummer. Een release betreft 1 product van een standaard of is een bundel van meerdere producten van de betreffende standaard. Bij de release is ieder product is voorzien een nieuw versienummer conform X.Y.Z schrijfwijze (zie hierna) en een status.

Bij een standaard in beheer horen ook afspraken over het versiebeheer. Versies van een standaard zijn er in verschillende gradaties die elk een relatie hebben met een voorgaande versie. De wijzigingen documenteren wij en leggen wij vast in een apart document bij de uitgebrachte versie van de standaard. De gebruiker kan zo nagaan op welke plaatsen de betreffende standaard gewijzigd is.

Elk product van onze standaarden voorzien wij van een versienummer. Dit doen wij conform Semantic Versioning (SemVer). Elk product heeft zijn eigen versienummer conform X.Y.Z schrijfwijze, bijvoorbeeld versie 2.1.0 (=X.Y.Z):
- **X-wijzigingen** Deze wijzigingen veranderen de structuur van de standaard. Hierdoor zijn X-wijzigingen niet backwards compatible. Frequentie: in overleg met de opdrachtgever.
- **Y-wijzigingen** Dit zijn wijzigingen die niet de structuur veranderen. Dit kunnen bijvoorbeeld updates zijn of inhoudelijke aanpassingen aan objecten, attributen of waardelijsten of de reikwijdte van de standaard. Deze wijzigingen zijn backwards compatible. Frequentie: in overleg met de opdrachtgever.
- **Z-wijzigingen** Dit zijn in feite oplossingen van technische fouten of verbeteringen van technische aard. Deze wijzigingen zijn backwards compatible. Frequentie: zo spoedig mogelijk na constatering.

#### Oudere versies van de standaard

Na het uitbrengen van een nieuwe versie blijven oudere versies beschikbaar en zijn vindbaar via de Geonovum website en de registers (de [conceptenbibliotheek](https://definities.geostandaarden.nl/home) , het [technisch register](https://register.geostandaarden.nl/)  en het [documentenregister](https://docs.geostandaarden.nl/) ). Een nieuwe versie dwingt daarmee geen directe overstap af bij de gebruikers, tenzij anders (bijvoorbeeld wettelijk) bepaald. Na het uitbrengen van de nieuwe versie wordt de ontwikkeling van de oude versie stopgezet.

Voor het onderhoud en de ondersteuning van een oude versie gelden de volgende uitgangspunten:

- Aan een oude versie worden geen nieuwe features toegevoegd, geen aanpassingen gedaan op X en Y niveau na het uitbrengen van een nieuwe versie. Verzoeken om aanpassing en wijziging voor nieuwe functionaliteit worden niet meer voor de oude standaard in behandeling genomen maar doorgegeven aan het ontwikkelteam. Correcties (Z-wijzigingen) worden wel uitgevoerd op de vorige versies zolang deze nog ondersteund worden.
- Bij oplevering van een nieuwe versie wordt de voorgaande versie nog een van te voren vastgestelde periode ondersteund. De duur van de overgangsperiode wordt mede bepaald door de omvang van de wijzigingen (X, Y en Z wijzigingen op de vorige versies), de staat van ontwikkeling van de standaard, en of de standaard in voorlopig dan wel permanent beheer is.


### Proces varianten

In paragraaf [Oudere versies van de standaard](#oudere-versies-van-de-standaard) zijn de X, Y en Z wijzigingen uitgelegd. Voor wijzigingen kent Geonovum twee proces varianten. Eén voor X en Y wijzigingen en één voor Z wijzigingen. 

**Proces voor X en Y wijzigingen**

Deze vergen volledige afstemming en het doorlopen van alle in paragraaf [Fasen en resultaten](#fasen-en-resultaten) beschreven fasen: Inhoud, Toetsing, Besluitvorming en Implementatie. Voor de inhoudelijke fase wordt een werkgroep gestart met daarin vertegenwoordiging van belangrijke stakeholders. Het resultaat van de werkgroep wordt in een openbare consultatie getoetst. 

PGDI beoordeelt en beslist over de wijzigingsvoorstellen en stelt een nieuwe (versie) van de standaard vast van DCAT-AP-NL die bij Geonovum in beheer is. Deze wijzigingsvoorstellen worden eerst inhoudelijke behandeld door de Architectuurraad, resulterend in een advies aan de PGDI. De programmeringstafels worden eerder in het ontwikkeltraject van een standaard te betrokken. Indien nodig wordt met softwareleveranciers een convenant afgesloten of een bestaand convenant uitgebreid, waarin wordt afgesproken dat zij (onderdelen van) de standaard gaan ondersteunen.

**Proces voor Z wijzigingen**

Deze dienen zo snel als mogelijk uitgevoerd te worden. De inhoudelijke fase wordt door een medewerker van Geonovum gedaan. Toetsing vindt plaats d.m.v. een (beperkte) consultatie met stakeholders. Besluitvorming vindt plaats door het standaardenteam van Geonovum met een notificatie van de wijziging aan de architectuurraad. Implementatie vindt plaats door het publiceren van de wijziging op de website van Geonovum. 

### Fasen en resultaten

Het volledige wijzigingsproces doorloopt de fasen Inhoud, Toetsing, Besluitvorming en Implementatie, zoals weergegeven in onderstaand figuur. 

**Figuur: Fasen wijzigingsproces**

![Fasen wijzigingsproces](media/fasen_wijzigingsproces.png)

**Inhoud**

In de fase inhoud wordt voor iedere melding bepaald of deze wordt opgenomen in de nieuwe versie van de standaard of niet. Dit wordt vastgelegd in de Github issues van de DCAT-AP-NL repository en is daarmee zichtbaar voor iedere geinteresseerde. Door het gebruik van labels bij de issues is zichtbaar welke issues vragen zijn en welke issues wijzigingsvoorstellen zijn. Voor issues die worden meegenomen in de nieuwe versie van de standaard, worden oplossingen uitgewerkt, op basis waarvan vervolgens de specificatie wordt aangepast. Dit gebeurt door Geonovum in samenwerking met inhoudelijke experts. Afhankelijk van de omvang van de wijziging ten opzichte van de voorgaande versie is de groep van experts evenredig groter of kleiner. 

**Toetsing**

De fase Toetsing vormt een brug tussen de inhoud, besluitvorming en de implementatie. In deze fase wordt eenieder (X, Y wijziging) of een beperkte groep belanghebbenden (Z wijziging) uitgenodigd om zijn visie te geven op de nieuwe versie van de standaard. De reacties uit de consultatie worden verwerkt in de specificatie. 

**Besluitvorming**

Bij Besluitvorming wordt besloten om de gewijzigde specificatie vast te stellen en te publiceren. Afhankelijk van het type wijziging (X, Y of Z, zie paragraaf [Proces varianten](#proces-varianten), besluit PGDI dan wel het standaardenteam van Geonovum. Eenmaal vastgesteld en gepubliceerd, wordt de nieuwe versie van de standaard aangemeld bij het [Forum Standaardisatie](https://forumstandaardisatie.nl/open-standaarden/verplicht?trefwoord=182).

**Implementatie**

Het in gebruik nemen van de standaard in de praktijk staat centraal in deze fase. Hiervoor leveren we verschillende technische bestanden op, zoals implementatiebestanden en voorbeeldbestanden. Deze bestanden ondersteunen softwareleveranciers bij de implementatie van de standaard in hun software. Beheerders van de voorziening/ het register e.d. nemen de standaard over. Onderdeel van de standaard zijn SHACL profielen, waarmee de technische juistheid van de implementatie van standaarden kan worden getoetst. Geonovum ondersteunt de implementatie bovendien door de werking van de standaard toe te lichten op bijvoorbeeld een wiki. Resultaat van deze fase is dat de gebruikers metadata kunnen maken en uitwisselen conform de nieuwe standaard. In hoofdstuk [Implementatie](#Implementatie) lichten we de implementatie verder toe.

### Betrokkenen

De volgende groepen en instanties zijn betrokken bij het wijzigingsproces van de standaard:

-	Werkgroep;
-	Softwareleveranciers;
-	Architectuurraad PGDI;
-   Programmeringstafels PGDI;
-   PGDI;
-	Forum Standaardisatie.


**Werkgroep en softwareleveranciers**

Nieuwe versies van de standaard bereidt Geonovum voor in samenwerking met de werkgroep(en) met daarin gebruikers en/of softwareleveranciers. We streven naar een unanieme instemming met de standaard. Dit versterkt het draagvlak en zorgt voor een betere implementatie van de standaard in het werkveld. 

**PGDI**

Bij het vaststellen van een nieuwe versie (X, Y) van een standaard stelt [PGDI](https://pgdi.nl/) met advies van Geonovum, de PGDI programmeringstafels en de PGDI Architectuurraad vast hoelang een oude versie wordt ondersteund en wanneer een oude versie komt te vervallen. Het vaststellen van Z-wijzigingen (zie paragraaf [Oude versie van een standaard](#oude-versie-van-een-standaard)) wordt door Geonovum zelf uitgevoerd zonder tussenkomst van de PGDI. 

