import { TProduct } from '@/lib/type/product';

export const productListConfig: TProduct[] = [
  {
    productName: 'Zebra TC21/26',
    price: 370,
    display: 5,
    weight: 236,
    availableAccesorry:
      'verfügbares Zubehör: Scanner: 1D- und 2D-Barcodes, Austauschbarer 3.100 mAh Akku, extended 5.400 mAh Akku möglich',
    ourAssessment:
      'Das TC21 (WLAN-Variante) bzw. das TC26 (mit Mobilfunkoption) ist das Einsteigergerät mit Imager für einfache Anwendungen in Lager, Produktion oder Auslieferung. Der verbesserte optionale Handgriff ermöglicht jetzt auch Nutzung der Rückseiten-Kamera. TC26 kommuniziert auch über Mobilfunk und ist daher für den Außeneinsatz interessant.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2002200717/2012441964/zebra_tc21@2x.jpg',
    isFavorite: true,
    isRentalAvailable: true,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Casio DT-X450',
    price: 900,
    display: 3,
    weight: 260,
    availableAccesorry:
      'verfügbares Zubehör: Frei belegbare Funktionstasten, 25 Stunden Dauerbetrieb, LTE, Android 11, 3 m Sturzresistent',
    ourAssessment:
      'Mit der DT-X400er Serie bringt Casio seine ersten Android-Geräte auf den Markt. Das Gerät liegt gut in der Hand dank durchdachtem Handgriff und gummierter Oberfläche. Das Touchdisplay ist etwas klein ausgefallen, dafür kommen Freunde tastaturgestützter Eingabe auf ihre Kosten.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2003011650/2012441964/casio_dt-x400@2x.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra MC3300X',
    price: 1100,
    display: 4,
    weight: 445,
    availableAccesorry:
      'verfügbares Zubehör: verschiedene Engines - sehr leistungsfähiger 2D-Imager, Konfiguration mit Pistolengriff, Drehkopf, 0°- oder 45°-Scan',
    ourAssessment:
      'Das Top-Gerät in der mittleren Lagerklasse mit großem Display und vollwertiger Tastatur. Auto-Range Imager ermöglicht multiple Scans und Scans bis 21 m Entfernung.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg',
    isFavorite: true,
    isRentalAvailable: true,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'CAT S53',
    price: 370,
    display: 6,
    weight: 320,
    availableAccesorry:
      'verfügbares Zubehör: 5500 mAh Akku mit Schnellladefunktion, Dual-SIM fähig, 1,8 m Sturzsicher, 48 MP Kamera, IP68, IP69K & MIL-SPEC 810H, extra int. Taschenlampe',
    ourAssessment:
      'Modern und robust: Das Gerät ist leistungsfähiger als seine Vorgänger und verfügt über Android 11, 6 GB RAM und 128 GB Speicher. Anzumerken ist die Bildschirmhelligkeit, welche weiterhin bei direkter Sonneneinstrahlung verbesserungswürdig ist.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2003436729/2012441964/CAT S53.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Beverage logistics'],
  },
  {
    productName: 'Zebra ET40/45',
    price: 620,
    display: 10,
    weight: 690,
    availableAccesorry:
      'verfügbares Zubehör: SE4100, SE4710 oder SE55 1D/2D-Scanmodul mit erweiterter Reichweite, 4 oder 8 GB RAM, Support bis Android 14, Wi-FI 6, 5G (ET45), 8Zoll/10Zoll (optional), IP65, 7600mAh austauschbarer Akku',
    ourAssessment:
      'Das Zebra ET40 und das Zebra ET45 sind moderne rugged Tablets für den Innen- und Außendienst. Beide Tablets sind in 8" oder 10" erhältlich und sind sehr robust. Zudem enthalten beide Modelle die neuste Hard- und Software, mit Scanner und mit dem ET45 auch Mobilfunk bis 5G.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2004413200/2012441964/Zebra ET45_ET40.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Datalogic Memor 11',
    price: 800,
    display: 5,
    weight: 285,
    availableAccesorry:
      'verfügbares Zubehör:  1D-/2D-Imager mit Green Spot Technologie (visuelle Scan-Bestätigung), Kontaktloses Laden möglich - wechselbarer Akku, bis Android 14 aufrüstbar, Mobilfunk optional, IP65',
    ourAssessment:
      'Das Memor 11 von Datalogic ist ein performantes Gerät für Lager- und Field Service-Anwendungen. Die technischen Parameter überzeugen, das Android-System ist aktuell. Das Gerät tritt in seiner Klasse gegen das CT60XP von Honeywell oder das TC52x von Zebra an.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2004895232/2012441964/datalogic_memor10@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Bixolon SPP-R310',
    price: 250,
    display: 3,
    weight: 385,
    availableAccesorry:
      'verfügbares Zubehör: Akkulaufzeit von 24 Stunden, IP54, 1,8m Schutzresistent, Bluetooth, WLAN, NFC, bis zu 72 mm Druckbreite ',
    ourAssessment:
      'Der handliche Etikettendrucker von Bixolon bietet eine preisgünstige Alternative zu dem Zebra ZQ511. Er überzeugt mit seiner Kompaktheit und der langen Akkulaufzeit.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2011864198/2012441964/Bixolon SPP R310.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Point Mobile PM5',
    price: 600,
    display: 0,
    weight: 49,
    availableAccesorry:
      'verfügbares Zubehör: Honeywell N6703 Ultra slim 1D/2D Barcode Scan Engine, 510mAh (Standard), 700mAh (Optional), IP65, Bluetooth, NFC\n',
    ourAssessment:
      'Das Point Mobile PM5 ist ein kompakter und leichter Ringscanner. Er überzeugt mit hoher Scan-Leistung und -Geschwindigkeit. Der Akku hält standardmäßig 9 Stunden; die Einsatzdauer kann mit einem Zusatz-Akku erweitert werden.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2012518994/2012441964/Point Mobile PM5.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra MC2700',
    price: 560,
    display: 4,
    weight: 296,
    availableAccesorry:
      'verfügbares Zubehör: Standard-Range 1D/2D-Scan-Engine und Wechselbarer Akku, auf 4.900 mAh erweiterbar',
    ourAssessment:
      'Die jüngste Geräteklasse von Zebra ist ein vergleichsweise günstiges Gerät mit guten Leistungsmerkmalen - abhängig von der Modellvariante - und einer 34-Tasten-Hardware-Tastatur. Neu ist die „PRZM-Intelligent-Imaging“-Technologie, mit der auch beschädigte Barcodes gelesen werden können. Das MC2700 ist dank Mobilfunkfähigkeit für den Einsatz im Außenbereich geeignet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2012669047/2012441964/ZebraMC2700.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Zebra RS6100',
    price: 700,
    display: 0,
    weight: 70,
    availableAccesorry:
      'verfügbares Zubehör: Leistungsfähiges 1D/2D-Scanmodul SE55, Kopplung mit Zebra-Geräten per NFC oder BT 5.2, austauschbarer Akku',
    ourAssessment:
      'Der Ringscanner RS6100 von Zebra ist ein Werkzeug für scanintensive Prozesse in der Lagerlogistik. Das Wearable kann am Finger, auf einem Handschuh montiert, auf dem Handrücken oder an einem Halsband getragen werden. Mit dem neuen Scanmodul kann eine Reichweite von 12m erreicht werden.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2015395946/2012441964/Zebra RS6100.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Point Mobile PM75',
    price: 550,
    display: 5,
    weight: 246,
    availableAccesorry:
      'verfügbares Zubehör: 5.800mAh extra Akku, Android 11, IP65, LTE, N3601 oder N6603 1D/2D Barcode Scan Engine\n\n',
    ourAssessment:
      'Das PM75 kommt mit neuster Ausstattung und Software. Es ist ein sehr praktikables Gerät welches vielseitig eingesetzt werden kann und das für einen relativ günstigen Preis. Die Auswahl zwischen zwei hochwertigen Honeywell Scan Engins und einem extra Zusatz Akku ist hier ein Vorteil.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2015462482/2012441964/PointMobilePM75.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Cipherlab RS36',
    price: 850,
    display: 5,
    weight: 288,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D midrange/longrange Imager, standard 4000 mAh (12 h+) Akku, 6000 mAh (18 h+) Extended-Akku, aufrüstbar bis Android 14, optionaler Pistolengriff und RFID Reader, IP 68, LTE fähig',
    ourAssessment:
      'Robuster Touchcomputer der Mittelklasse. Angeboten wird das Gerät mit optionalen Scan-Engines für unterschiedliche Einsatzzwecke. Programmierbare Funktionstasten ermöglichen individuelle Optimierungen. Prägnant durch eine starke Akkuleistung und einer Scanreichweite von bis zu 12 m. Eine Alternative zu den etablierten Herstellern.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2016244565/2012441964/Cipherlab RS36.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'Zebra WS50',
    price: 1400,
    display: 2,
    weight: 134,
    availableAccesorry:
      'verfügbares Zubehör: 1.300 mAh Akku, Hot Swap, IP65, SE4770 1D/2D-Imager, WLAN, BT, NFC, Android 11 AOSP, Modular ',
    ourAssessment:
      'Innovationskraft in Sachen mobile Computer zeigt Zebra mit dem robusten Wearable Computer WS50. Das Gerät vereint einen mobilen Handheld Computer und Wearable Scanner in einem Gerät. Flexibel zeigt sich der WS50 in der Tragbarkeit, da es am Finger, auf dem Handrücken oder am Handgelenk getragen werden kann.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2016631942/2012441964/zebra ws50.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'ACD HasciSE',
    price: 350,
    display: 0,
    weight: 45,
    availableAccesorry:
      'verfügbares Zubehör: IP54, 7500 Scans pro Ladung, 1D- und 2D Imager Zebra SE4710, Bluetooth 4.0',
    ourAssessment:
      'Der HasciSE eignet sich ideal für Arbeitsabläufe, bei welchen beide Hände ermüdungsfrei gebraucht werden. Das Scanner-Modul ist ein Leichtgewicht und kann an einer Handmanschette, Handschuh oder einer herausziehbaren Spule befestigt werden. Es ist zudem robust und passt daher hervorragend in industrielle Umgebungen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2017010790/2012441964/ACD HasciSE.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Casio ET-L10',
    price: 700,
    display: 5,
    weight: 240,
    availableAccesorry:
      'verfügbares Zubehör: 1D- und 2D-Imager und NFC, Akku-Wechsel durch Hersteller möglich',
    ourAssessment:
      'Casio liefert mit dem ET-L10 ein leichtes, robustes Handheld mit integriertem Scanner. Das Smartphone-ähnliche Gerät ist sehr performant und das große Display für ein Handheld sehr anwenderfreundlich. Ein Einsatz ist etwa in der Auslieferung denkbar oder für weniger robuste Tätigkeiten in der Lagerlogistik.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2017181285/2012441964/casio_et_l10@2x.jpg',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'Field Service'],
  },
  {
    productName: 'Honeywell ScanPal EDA10A',
    price: 800,
    display: 10,
    weight: 674,
    availableAccesorry:
      'verfügbares Zubehör: WIFI-6, 5G, 1,3 m Sturzresistent, BT, integrierter Barcodescanner (S0703 Slim Imager), IP65, bis Version Android 14 aufrüstbar, Nutzungsdauer von 12 Stunden, Zubehör wie Schulterriemen, Schultertasche, VESA-Befestigungsplatte, Eingabestift, Fahrzeug-Dock verfügbar',
    ourAssessment:
      'Honeywell überzeugt schon länger mit zuverlässigen Handhelds und startet mit dem ScanPal EDA10A bezüglich Tablet Industriegeräten ein überzeugendes Modell. Es ist schlank, modern und das Display mit 550 nits Bildschirmhelligkeit bei Sonneneinstrahlung gut lesbar. Durch zahlreiches Zubehör und einer integrierten Scan-Engine lässt sich das robuste Tablet vielseitig einsetzen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2017246317/2012441964/Honeywell ScanPal EDA10A.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Point Mobile PM30',
    price: 650,
    display: 4,
    weight: 165,
    availableAccesorry:
      'verfügbares Zubehör: extra Akku (optional) 6.500mAh, 2D Imager Honeywell Ultra-Slim Engine, IP67, LTE, WLAN, BT',
    ourAssessment:
      'Das PM30 ist ein kostengünstiges Industrie Smartphone der Marke Point Mobile. Es hat neue Software und Hardware, welche ausreichend für viele Tätigkeiten ist. Positiv ist hier der erweiterbare Akku, wodurch die Laufzeit sehr gut ausfallen kann. Das Gerät ist trotz des eher niedrigeren Preises robust und gut gegen Staub und Wasser geschützt.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2017832970/2012441964/ponit_mobilePM30.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'Field Service'],
  },
  {
    productName: 'Samsung Xcover 5',
    price: 200,
    display: 5,
    weight: 172,
    availableAccesorry:
      'verfügbares Zubehör: Outdoor-Smartphone mit Schutzklasse IP68 und austauschbarem Akku',
    ourAssessment:
      'Wer ein einfaches und ausreichend robustes Mobilgerät sucht, und auf eine Scan-Funktion verzichten kann, ist mit dem Xcover 5 von Samsung gut bedient. Das Gerät bietet ein sehr gutes Preis-Leistungs-Verhältnis.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2018426427/2012441964/Samsung Xcover 5.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Beverage logistics'],
  },
  {
    productName: 'i.Safe Mobile IS530.1 ',
    price: 1600,
    display: 4,
    weight: 325,
    availableAccesorry:
      'verfügbares Zubehör: Explosionsgeschützt, IP68, wechselbarer Akku, zus. erhältlicher Pistolengriff mit Zebra Scan-Engine (1D- und 2D-Barcodes)  im Nahbereich bis 6 Meter oder Entfernungen über 15 Meter',
    ourAssessment:
      'Das leistungsfähige Industrie-Smartphone ist durch die ISM-Schnittstelle vielfältig einsetzbar. Verschiedene Zusatzmodule und die extrem hohe Widerstandsfähigkeit machen es zu einem einzigartigen hochleistungsfähigen Multifunktionsgerät, insbesondere für die Chemieindustrie.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2018904232/2012441964/i.Safe IS530.1 mit Pistolengriff.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Explosion-proof'],
  },
  {
    productName: 'Honeywell ScanPal EDA61K',
    price: 1000,
    display: 4,
    weight: 460,
    availableAccesorry:
      'verfügbares Zubehör: 2 Scan-Engines wählbar für Scannen im Nah- (wenige Zentimeter) oder Fernbereich (bis 15 Metern), 7.000 mAh Akku für bis zu 25 Stunden Betriebszeit',
    ourAssessment:
      'Das EDA61K aus der Scanpal-Reihe – für kleinere und mittelgroße Unternehmen. Neben der leistungsfähigen Long-Range-Scan-Engine EX20 wird LTE unterstützt, so dass es in einem Außenlager ohne WLAN-Ausleuchtung zum Einsatz kommen kann. Das 34- oder 47-Tasten-Keyboard unterstützt die Datenerfassung in rauen Umgebungen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2020025177/2012441964/honeywell_scanpal_eda61k@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Samsung Tab Active 3',
    price: 500,
    display: 8,
    weight: 429,
    availableAccesorry:
      'verfügbares Zubehör: IP68 zertifiziert und Wechselbarer 5.050 mAh Akku',
    ourAssessment:
      'Das Tab Active 3 von Samsung ist ein robustes Tablet in einer Enterprise Edition und für den Einsatz in rauhen, feuchten und schmutzigen Umgebungen konzipiert. Die Bedienung kann außer über den Touchscreen (mit Handschuhen nutzbar) auch mit dem mitgelieferten Stylus Pen erfolgen. Das Gerät ist für eine vertikale App-Bedienung ausgelegt - so sind die physischen Android-Bedientasten vertikal am Gerät angebracht.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2022407552/2012441964/Samsung Tab Active 3.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['maintenance', 'Field Service']
  },
  {
    productName: 'ProGlove MARK 3',
    price: 1000,
    display: 0,
    weight: 40,
    availableAccesorry:
      'verfügbares Zubehör: Multi-Range-Scanner (10 cm - 600 cm Scanbereich), Kommunikation über Bluetooth LE, 12.000 Scans pro Ladung, IP65',
    ourAssessment:
      'Die Münchner Workaround GmbH hat mit der ProGlove-Serie die ersten industrietauglichen Wearables auf den Markt gebracht. Die Handscanner eignen sich insbesondere für Prozesse mit hoher Scan-Frequenz. Ein Laserzielkreuz erleichtert die Erfassung von Barcodes. Der MARK 3 lässt sich separat betreiben bzw. zusammen mit Android- oder iOS-Mobilgeräten nutzen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2023937341/2012441964/ProGlove MARK 3.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Datalogic Memor 20',
    price: 1200,
    display: 5,
    weight: 295,
    availableAccesorry:
      'verfügbares Zubehör: Wechselakku und kabelloses Laden (WPC QI EPP), Chemikalienbeständiges Kunststoffgehäuse',
    ourAssessment:
      'Das Memor 20 ist das robusteste Industrie-Handheld des Herstellers. Es ist IP65 und 67 zertifiziert und eignet sich für den Einsatz unter rauen Bedingungen. Dank LTE-Unterstützung mit 2 Sim-Karten-Slots lässt es sich im Field Service einsetzen. Die Scan-Engine ermöglicht Scannen im Nahbereich. Der Einsatz ist zwischen -20 bis 50° Celsius vorgesehen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2025004846/2012441964/datalogic_memor20@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Datalogic Memor 10 Healthcare',
    price: 950,
    display: 5,
    weight: 285,
    availableAccesorry:
      'verfügbares Zubehör: 1D-/2D-Imager mit Green Spot Technologie (visuelle Scan-Bestätigung), Kontaktloses Laden möglich - wechselbarer Akku',
    ourAssessment:
      'Das Memor 10 in der Healthcare-Variante ist ein performantes Gerät für Anwendungen im Gesundheitswesen. Die technischen Parameter überzeugen, das Gerät wird mit Android 8.1 ausgeliefert. Es ist beständig gegen Desinfektionsmittel und gemäß IP65 zertifiziert.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2028350172/2012441964/datalogic_memor10_healthcare@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Healthcare']
  },
  {
    productName: 'Casio IT-G600 / IT-G650',
    price: 1500,
    display: 5,
    weight: 300,
    availableAccesorry:
      'verfügbares Zubehör: Um 25° geneigte Scaneinheit, LTE, Bluetooth, WLAN, NFC,Wahl zw. 4,7 und 5,5 Zoll',
    ourAssessment:
      'Die IT-G6xx-Geräte bilden die Flaggschiff-Reihe von Casio. Das IT-G600 verfügt über eine physische 10-er Tastatur, das IT-G650 ist die Full-Touch-Alternative. Beide Modellvarianten verfügen über eine performante Ausstattung und Android 9 als Betriebssystem. Die geneigte Scan-Ergonomie unterscheidet das Gerät von anderen Devices seiner Klasse.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2030145514/2012441964/Casio IT G600_650.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Point Mobile PM560',
    price: 1000,
    display: 4,
    weight: 602,
    availableAccesorry:
      'verfügbares Zubehör: 1D-/2D-Imager (3 Optionen) / optional N6803 FR bis zu 10 m Reichweite, Numerische oder alphanumerische Tastatur, aufrüstbar auf Android 14, WIFI-6, 6300 mAh Akku, 1,8 m Sturzresistent, IP65',
    ourAssessment:
      'Ein klassisches Handheld für die Lagerlogistik mit einem guten Preis-Leistungs-Verhältnis. Die Scan-Engine liefert Honeywell, die physische Tastatur ergänzt die Bedienung am Touchscreen. Zahlreiche nützliche Software-Tools werden ab Werk mitgeliefert.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2034482939/2012441964/Point Mobile PM560.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Gigaset GX290 Plus',
    price: 250,
    display: 6,
    weight: 287,
    availableAccesorry:
      'verfügbares Zubehör: IP68, Military Standard 810G, 6200 mAh Akku \n\n',
    ourAssessment:
      'Das Gigaset GX290 ist ein kostengünstiges und robustes Smartphone, was jegliche Einwirkungen von Außen gut wegsteckt und mit einem modernen Design überzeugt. Durch den großen Akku ist es zudem auch sehr gut für längere Schichten und Touren geeignet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2035087401/2012441964/Gigaset GX290 plus.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Beverage logistics'],
  },
  {
    productName: 'Honeywell Dolphin CK65',
    price: 1200,
    display: 4,
    weight: 498,
    availableAccesorry:
      'verfügbares Zubehör: verschiede Scanneroptionen mit bis zu 24m Reichweite , Bis 95%, nicht kondensierend, Sturzresistenz bis zu 3 m, Modelle für Kühl- und Ex-Bereiche, bis Android 12 aufrüstbar ',
    ourAssessment:
      'Das CK65 ist Honeywells leistungsstarkes Allround-Gerät für den Einsatz in der Lagerlogistik. Mit dem EX20 Near/Far-Imager können Mitarbeiter Barcodes aus einer Entfernung von 15 cm bis 15 Meter erfassen. Der 7000-mAh-Akku ermöglicht eine durchgehende Betriebsdauer von circa 28 Stunden pro Ladung.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2035734119/2012441964/Honeywell Dolphin CK65.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Explosion-proof'],
  },
  {
    productName: 'CAT S75',
    price: 480,
    display: 6,
    weight: 268,
    availableAccesorry:
      'verfügbares Zubehör: Android 12 (bis 14), IP69k, fester 5000 mAh Akku, Wasserdicht auf 5 m für 35 min, 1,8 m Sturzresistenz',
    ourAssessment:
      'Das CAT S75 ist ein großes schlankes Outdoor-Smartphone, welches modernes Design und Robustheit vereint. Es ist im Healthcare Sektor durch die Resistenz gegen Desinfektionsmittel und weitere intensive Reinigungen einzusetzen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2036388291/2012441964/CAT S75.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Beverage logistics', 'Healthcare'],
  },
  {
    productName: 'Honeywell ScanPal EDA52 HC',
    price: 600,
    display: 5,
    weight: 257,
    availableAccesorry:
      'verfügbares Zubehör: Scanner: N3601 und N6603 Slim-Imager (1D- und 2D-Barcodes), Nicht kondensierend, bis Android 13 aufrüstbar, LTE, 4500 mAh Akku, IP 67, USB-C',
    ourAssessment:
      'Mit dem schlanken ScanPal EDA52 HC bietet Honeywell ein günstiges Gerät für den Einsatz im Gesundheitswesen. Die Lebensdauer ist auf 3 Jahre ausgelegt. In dieser Zeit besitze das EDA52 laut Hersteller die Desinfektionsbeständigkeit.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2036806814/2012441964/Honeywell EDA52HC.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Healthcare']
  },
  {
    productName: 'ProGlove MARK Display',
    price: 1300,
    display: 1,
    weight: 48,
    availableAccesorry:
      'verfügbares Zubehör: 1D-/2D-Imager, 30 bis 150 cm Scanbereich, kontrastreiches E-Paper-Display, Bluetooth Low Energy 5.0',
    ourAssessment:
      'Arbeitsprozesse in industriellen Umgebungen, in Transport und Logistik oder auch im Handel lassen sich mithilfe der praktischen Datenerfassung deutlich erleichtern. Eine einfache Bedienung mit klarem Feedback und Arbeiten mit freien Händen ermöglichen schnellere Abläufe im Betrieb, z. B. in der Kommissionierung.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2038365215/2012441964/ProGlove Mark Display.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Datalogic Memor K',
    price: 600,
    display: 4,
    weight: 268,
    availableAccesorry:
      'verfügbares Zubehör: Einfache 1D/2D-Scan-Engines und Wechselbarer Akku mit 3.800 mAh',
    ourAssessment:
      'Datalogic bietet mit dem Memor K ein vergleichsweise kleines Industrie-Handheld zur Unterstützung mobiler Prozesse in Lager, Produktion oder Auslieferlogistik. Eine physische Tastatur mit 24 Tasten ergänzt die Bedienung über den Touchscreen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2038742226/2012441964/Datalogic Memor K.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Panasonic Toughbook S1',
    price: 950,
    display: 7,
    weight: 510,
    availableAccesorry:
      'verfügbares Zubehör: Ersatzakku (5580 mAh), flacher Zusatzakku (3200 mAh), 5fach-Akkuladegerät, verschiedene Handschlaufen- und Tragelösungen, Desktop-Ladestation, Fahrzeugdock, passiver Eingabestift etc.\n',
    ourAssessment:
      'Das Toughbook S1 von Panasonic ist ein moderner und extrem robuster Tabletcomputer. Er eignet sich daher gut für industrielle Umgebungen und den Einsatz im Außendienst. Der Akku ist seine klare stärke, da dieser bis zu 14 Stunden hält und schnell durch einen Ersatz Akku ausgetauscht werden kann.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2038944939/2012441964/Panasonic Toughbook S1.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Honeywell Dolphin CT60 XP',
    price: 1200,
    display: 4,
    weight: 360,
    availableAccesorry:
      'verfügbares Zubehör: Imager zum Scannen von 1D- und 2D-Barcodes, Umfangreiches Zubehör, z. B. gut designter Pistolengriff, erhältlich',
    ourAssessment:
      'Sehr gutes Preis-Leistungs-Verhältnis in der Mittelklasse. Das Gerät besticht mit einem präzisen Scanner, einem schnellen Prozessor und einer hochwertigen Verarbeitung.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2039480267/2012441964/honeywell_dolphin_ct60@2x.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Keyence BT-A700',
    price: 0,
    display: 5,
    weight: 487,
    availableAccesorry:
      'verfügbares Zubehör: Full-Range Scanengine: 2,5 cm - 10 m Scan-Reichweite, austauschbarer 6250 mAh Akku, Notstromversorgung, Einhandbedienbarkeit, IP67',
    ourAssessment:
      'Das BT-A700 ist ein sehr hochwertiger mobiler Computer des japanischen Sensorik-Spezialisten Keyence. Das Handheld-Terminal verfügt dementsprechend über eine performante Scan-Engine. Neben seiner Robustheit überzeugt das Gerät mit seinem geringen Gewicht und einem sehr leistungsfähigen Akku.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2041705648/2012441964/Keyence BT-A700.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Feig HyWEAR compact xT',
    price: 600,
    display: 0,
    weight: 70,
    availableAccesorry:
      'verfügbares Zubehör: wechselbarer 1100mAh Akku, BT 5.0, 4-fach Ladestation, 2 konfigurierbare Funktionstasten, unterschiedliche Arbeitshandschuhe, WLAN, 2D Imager extended range',
    ourAssessment:
      'HyWEAR compact ist ein hybrides Barcode & RFID (optional) Wearable, welches durch beidhändiges Arbeiten logistische Prozesse effizienter macht und eine gute Alternative zum Proglove Handscanner bietet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2043918401/2012441964/Feig HyWear compact xT.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Panasonic Toughbook A3',
    price: 1500,
    display: 10,
    weight: 885,
    availableAccesorry:
      'verfügbares Zubehör: Extra lange Betriebszeit von bis zu 15 h mit Zusatz-Akku, LTE, Bluetooth, WLAN, NFC + Gadget-Port',
    ourAssessment:
      'Ein performantes und sehr robustes Tablet für den Außeneinsatz liefert Panasonic mit dem FZ-A3. Der entspiegelte Screen ist im Freien sehr gut lesbar. Der optionale Einsatz von Scanner oder SmartCard-Reader machen das Gerät sehr flexibel. Auch ist es für den Einsatz auf Staplern geeignet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2043949983/2012441964/panasonic_fz-a3@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['maintenance', 'Field Service'],
  },
  {
    productName: 'Zebra TC8300',
    price: 2000,
    display: 4,
    weight: 490,
    availableAccesorry:
      'verfügbares Zubehör: Geneigter Scanwinkel und Formfaktor Pistolengriff, 5 Scan-Engines für Scannen von 7,6 cm bis 21,4 m',
    ourAssessment:
      'Ein innovatives Design mit geneigtem Barcode-Scanner macht das TC8300 von Zebra zu einem außergewöhnlichen Gerät. Die aktuelle Version verfügt über einen schnellen Prozessor sowie einen leistungsstarken Akku mit 7.000 mAh.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2044520301/2012441964/zebra_tc8300@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra MC9300',
    price: 1900,
    display: 4,
    weight: 765,
    availableAccesorry:
      'verfügbares Zubehör: 4 Scan-Engines (omnidirektional, DPM, Long-Range), Leistungsstarker 7.000 mAh Akk',
    ourAssessment:
      'Das MC9300 ist ein sehr robustes Gerät. Verschiedene Konfigurationen ermöglichen einen passgenauen Einsatz in rauen Umgebungen. Leider bietet Zebra keine Mobilfunk-Option, damit wäre das Gerät das ideale Terminal im Außenlager.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2051671743/2012441964/zebra mc9300.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'i.Safe Mobile IS655.2',
    price: 650,
    display: 5,
    weight: 203,
    availableAccesorry:
      'verfügbares Zubehör: IP68, 13MP Front und 8MP Back Kamera, BT 5.0, integrierter 4200mAh Akku, LTE, 5Ghz Wifi',
    ourAssessment:
      'Von dem Spezialisten für Ex-geschützte Industriegeräte i.Safe Mobile gibt es nun auch ein Smartphone-Gerät. Dieses eignet sich etwa für den Einsatz in der Auslieferung, vor allem im Chemiebereich und weist Schutz für die Explosions-Zone 2 auf.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2052054549/2012441964/i.safe IS655.2.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'Explosion-proof'],
  },
  {
    productName: 'Zebra ZQ521',
    price: 650,
    display: 4,
    weight: 790,
    availableAccesorry:
      'verfügbares Zubehör: IP54 zertifiziert - Exoskelett erhältlich und Druckt Labels, Thermodirekt und RFID-Etiketten, BT 4.1 + BT Low Energy.',
    ourAssessment:
      'Der ZQ521 ist das jüngste Modell der ZQ-Reihe von Zebra. Neben klassischem Beleg- und Labeldruck ist der ZQ521 laut Zebra der einzige 4 Zoll Drucker auf dem Markt, der auch RFID-Etiketten drucken kann. Zebra hat einige Leistungsdaten verbessert, darunter Akku- und interne Speicherkapazität. Unterstützt wird daneben der jüngste Bluetooth-Standard.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2052768094/2012441964/Zebra ZQ521.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Point Mobile PM351',
    price: 600,
    display: 4,
    weight: 320,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Imager, LTE optional, auf Android 14 aufrüstbar, Wi-Fi 6, 1.5 m Fallschutz, IP65, 4800 mAh Akku, BT 5.1',
    ourAssessment:
      'Das Point Mobile PM351 ist ein kompakter, preisgünstiger mobil Computer. Scanner, Tastatur und LTE Fähigkeit können passend gewählt werden. Zubehör, wie ein Pistolengriff sind verfügbar.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2053890576/2012441964/PM351.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Point Mobile PM86',
    price: 1200,
    display: 5,
    weight: 287,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Barcodescanner N3603, N6703, N6803 FR (10m Reichweite), IP67, WIFI 6, LTE, Android 11 (bis 14 aufrüstbar), 4080 mAh Akku, optional erweiterter 5800 mAh Akku, 1,5m Sturzresistenz',
    ourAssessment:
      'Das PM86 ist im Vergleich zum Vorgänger dem PM85 von Point Mobile baugleich, mit neuer Hardware und größerem Akku ausgestattet. Hierbei ist die Möglichkeit zwischen 3 Scan-Engines zu wählen mit optional erweiterter Reichweite. Positiv auffällig ist hier, wie auch beim Vorgänger das helle Display.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2053950471/2012441964/Point Mobile Pm86.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Zebra ET60/ET65 Tablet',
    price: 1350,
    display: 10,
    weight: 1074,
    availableAccesorry:
      'verfügbares Zubehör: Tastatur-Option, Fahrzeugdock-Option, Scanner-Option (SE55 Long-Range), LTE (ET65), aufrüstbar bis Android 16, Sturzresistenz bis 1,5 m, Freezer Modell mit integrierter Heizung, IP66, 8920 mAh oder 17840 mAh Akku',
    ourAssessment:
      'Die neue ET60 Reihe von Zebra lässt sich als Fahrzeug-Terminal oder mobiler Computer mit abnehmbarer Tastatur einsetzen. Das ET60 bzw. ET65 (mit LTE) kann in einem Temperaturbereich von -30°C bis +60°C eingesetzt werden. In der Freezer-Version mit beheiztem Bildschirm ist das Arbeiten bei einer Luftfeuchtigkeit von bis zu 95% möglich.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2055003499/2012441964/Zebra ET60.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Getac ZX70',
    price: 1000,
    display: 7,
    weight: 780,
    availableAccesorry:
      'verfügbares Zubehör: Optionale Kommunikationsvarianten und Imager, 8.400 mAh Akku für lange Einsatzdauer',
    ourAssessment:
      'Das Gerät widersteht laut Hersteller extremen Temperaturen und Wassereinfluss. Der Akku zählt zu den stärksten in der Geräteklasse. Eine Zertifizierung für den Einsatz in explosionsgefährdeten Umgebungen ist möglich.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2056126657/2012441964/getac_zx70@2x.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Explosion-proof', 'Field Service'],
  },
  {
    productName: 'Honeywell Dolphin CT40 HC',
    price: 1100,
    display: 5,
    weight: 278,
    availableAccesorry:
      'verfügbares Zubehör: Scanner: N3601 und N6603 Slim-Imager (1D- und 2D-Barcodes), Nicht kondensierend',
    ourAssessment:
      'Smartes, leichtes und leistungsfähiges Gerät mit komfortabler Scan-Engine. Das CT40 HC ist konzipiert für den Einsatz in allen Bereichen des Gesundheitswesens. Gehäuse und Anschlüsse sind beständig gegen die regelmäßige Reinigung mit Desinfektionsmitteln.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2057675010/2012441964/honeywell_dolphin_ct40_hc@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Healthcare'],
  },
  {
    productName: 'Honeywell ScanPal EDA51K',
    price: 600,
    display: 4,
    weight: 300,
    availableAccesorry:
      'verfügbares Zubehör:  Handriemen, Ladestation, 4fach-Akkuladegerät, USB-Wandadapter, 4000 mAh austauschbarer Akku',
    ourAssessment:
      'Das Honeywell ScanPal EDA51K ist ein schickes und anwenderfreundliches Handheld-Terminal, das sich für Anwendungen in den Bereichen Lagerhaltung, Einzelhandel oder Lieferservice optimal eignet. Das ScanPal EDA51K ist sehr robust gebaut, ein ideales Arbeitsgerät für den täglichen Gebrauch.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2057808709/2012441964/Honeywell ScanPal EDA51K.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Field Service']
  },
  {
    productName: 'Honeywell ScanPal EDA57',
    price: 1000,
    display: 5,
    weight: 260,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Honeywell S0703, IP67, wechselbarer 4500mAh Akku, 5G / RFID-Halterung, Pistolengriff und Gummirahmen zus. verfügbar',
    ourAssessment:
      'Das Honeywell ScanPal EDA57 hat einen starken Prozessor und kann mit jeglichem Honeywell Zubehör aufgerüstet werden. Es ist schlank, aber dennoch robust und kann gut in schwierigen Umgebungsbedingungen benutzt werden. Das EDA57 empfehlen wir für den Einzelhandel, Produktionsumgebungen und die Bereiche Transport und Logistik.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2058590904/2012441964/HoneywellEDA57-_.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Point Mobile PM451',
    price: 1000,
    display: 4,
    weight: 400,
    availableAccesorry:
      'verfügbares Zubehör: optional 1D Barcode Scanner, 2D Barcode Imager oder 2D Long range Imager, 2m Sturzschutz, 5.700mAh (standard) Akku, extra 4.000mAh (optional), 60mAh (Back-up/Hotswap), LTE und Pistolengriff (optional)\n\n',
    ourAssessment:
      'Das PM451 ist ein perfekt im Lagerumfeld abgestimmtes Handheld-Terminal. Es ist sehr robust und hat viele verschiedene Konfigurationsmöglichkeiten, wie z.B. die drei verschiedenen Keypads: numerisch, numerisch mit Funktionstasten und alphanumerisch mit Funktionstasten. Mit dem dazu passendem Imager und einem starken Akku-System ist dieses Handheld nur zu empfehlen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2061178735/2012441964/Point Mobile PM451.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Cipherlab RK95',
    price: 1200,
    display: 4,
    weight: 455,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D-Imager-Varianten für Short-/Medium-/Long-Range-Scanning, in Kühlhaus-Variante erhältlich',
    ourAssessment:
      'Die RK95 Serie von Cipherlab tritt in Konkurrenz bietet performante Geräte für Anwender, die Wert auf eine physische Tastatur legen. Das RK95 kann mit einem bis zu 6.000 mAh starken Akku ausgestattet werden; ebenso sind unterschiedliche Tastaturlayouts erhältlich.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2065492285/2012441964/cipherlab_rk95@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Bixolon XM7-40',
    price: 600,
    display: 4,
    weight: 1090,
    availableAccesorry:
      'verfügbares Zubehör: 2,1 M Schutzresistent, IP54, BT 5.0, WLAN, 104 mm (4 Zoll)  Druckbreite, 6800 mAh Akku, TFT-Farbdisplay',
    ourAssessment:
      'Der XM7-40 Etikettendrucker von Bixolon ist eine Alternative zum Zebra ZQ521. Er bietet ein gut lesbares Farbdisplay und das XM7-40R Modell zusätzlich die Funktion RFID-Labels mobil zu drucken.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2066100301/2012441964/bixolon xm7-40.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'maintenance', 'Field Service'],
  },
  {
    productName: 'i.Safe Mobile IS910.1',
    price: 2800,
    display: 8,
    weight: 869,
    availableAccesorry:
      'verfügbares Zubehör: IP68, BT 5.0, LTE, 8.400 mAh, Handschlaufe, Tragegurt\n',
    ourAssessment:
      'Das Tablet IS910.1 von i.Safe Mobile ist für den Einsatz unter jeglichen Bedingungen geschaffen. Das 8“ Tablet ist höchst robust, leistungsstark und bietet technische Vorteile, wie einen 8.400 mAh großen Akku und für die Chemieindustrie angepasste Hardware.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2067313977/2012441964/i.Safe IS910.1.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Explosion-proof', 'Field Service'],
  },
  {
    productName: 'Datalogic Memor 1',
    price: 800,
    display: 4,
    weight: 275,
    availableAccesorry: 'verfügbares Zubehör: Akku nicht wechselbar',
    ourAssessment:
      'Mit dem Memor 1 bietet Datalogic ein Gerät mit Basisausstattung für einfache Scantätigkeiten in Handel, Lager und Produktion. Das Gerät ist in jeder Hinsicht weniger performant als das Memor 10.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2068409388/2012441964/datalogic_memor1@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Point Mobile PM90',
    price: 1100,
    display: 5,
    weight: 272,
    availableAccesorry:
      'verfügbares Zubehör: Magnetkartenleser, 2 SAM Slots, neuer Honeywell Slim Imager N6703 ',
    ourAssessment:
      'Point Mobile preist das PM90 als ideales Gerät für den Außendienst an. Das Gerät ist sehr performant, gleichzeitig robust nach IP67 und wirkt dennoch smart wie ein Consumer Gerät. Durch zwei SAM Slots und den Magnetkartenleser wird die Funktionalität des Geräts noch effizient erweitert.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2069151743/2012441964/Point Mobile PM90.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Zebra MC9400/9450',
    price: 2800,
    display: 4,
    weight: 743,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Imager (SE58, SE4770) mit bis zu 30 m Reichweite, Wi-Fi 6E, Bluetooth 5.3, 5G (MC9450), 7 Tastaturoptionen, IP68, 7000 mAh Akku, 2,4 m Sturzresistent, Android 13 (aufrüstbar bis v17)\n',
    ourAssessment:
      'Das Zebra MC9400 bzw. MC9450 ist der Nachfolger des MC9300. Das Gerät ist wie sein Vorgänger sehr robust und durch die Mobilfunk-Variante (MC9450) noch optimaler im Außenlager einzusetzen. Durch die zahlreichen Tastaturoptionen ist es gut an den individuellen Einsatz anpassbar. Zusätzlich gibt es ein extra Modell für den Kühlbereich.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2069262532/2012441964/Zebra_MC9400u.450.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Honeywell 8675i',
    price: 600,
    display: 0,
    weight: 66,
    availableAccesorry:
      'verfügbares Zubehör: IP65, BT 5.1, 12,000 scans über 10h Schicht, StandardRange (bis 1,5m) und Flexrange (bis 10m) möglich, 1,8m Sturzresistenz ',
    ourAssessment:
      'Der 8675i ist einer der Top Modelle aus dem Honeywell Sortiment von den Wearable-Scannern. Er bietet ein starkes Preis-Leistungs-Verhältnis und die Option auf einen FlexRange-Imager. Der Scanner kann nicht nur per Ring, sondern auch problemlos mit einem Handschuh getragen werden.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2069644062/2012441964/Honeywell 8675i.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra DS3678-SR',
    price: 500,
    display: 0,
    weight: 407,
    availableAccesorry:
      'verfügbares Zubehör:  IP68 + IP65 Ladestation, 3m Sturzresistenz, Kopplung per Bluetooth, 3100 mAh Akku (100 Tsd. Scans pro Ladung)',
    ourAssessment:
      'Der besonders robuste Hand-Scanner der DS3600er Serie von Zebra ist in 9 verschiedenen Ausführungen verfügbar und kann mit jeweiligen Features genau an die Bedingungen angepasst werden. Der DS3678-SR ist ein kabelloser Scanner im Nahbereich und ist somit gut für den Versand, Kommissionierung, Produktion und Wareneingang geeignet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2070060243/2012441964/Zebra DS3678-SR.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Advantech DLT-V72',
    price: 3500,
    display: 12,
    weight: 465,
    availableAccesorry:
      'verfügbares Zubehör: Kapazitiver oder resistiver Touchscreen mit Displayheizung, Integrierte unterbrechungsfreie Stromversorgung.',
    ourAssessment:
      'Advantech ist der Spezialist für äußerst robuste Stapler-Terminals. Das DLT-V72 ist eines der wenigen Geräte in dieser Klasse mit einem (Industrial-)Android-Betriebssystem. Es ist mit 10 oder 12 Zoll Screen erhältlich und für raue Umgebungen mit vielen Stößen und Erschütterungen ausgelegt.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2070900504/2012441964/advantech_dlt-v72@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra ZQ220',
    price: 200,
    display: 3,
    weight: 420,
    availableAccesorry:
      'verfügbares Zubehör: BT 4.1 + BT Low Energy, NFC, OLED-Display, 2550mAh austauschbarer Akku, 50mm-80mm Druckbreite',
    ourAssessment:
      'Der ZQ220 Etikettendrucker von Zebra ist eine günstigere, aber dennoch leistungsstarke Variante der mobilen Drucker. Er ist relativ leicht und nicht so robust wie die ZQ500er Serie, druckt aber dennoch Labels und Etiketten in ähnlich hoher Geschwindigkeit. Mit seinem starken Preis-Leistungs-Verhältnis und der verstellbaren Druckbreite ist der Drucker eine gute Alternative.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2071322289/2012441964/Zebra ZQ220.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Cipherlab RS51',
    price: 1200,
    display: 4,
    weight: 365,
    availableAccesorry:
      'verfügbares Zubehör: 2D Midrange-Imager, bis 16 Stunden Betriebsdauer mit 5.300 mAh Akku',
    ourAssessment:
      'Das Cipherlab bewegt sich in einer Klasse mit Geräten wie dem CT60 von Honeywell und TC52 von Zebra. Es ist ein robuster Allrounder mit Smartphone-Formfaktor, der sowohl für den Innen- und Außenbereich geeignet ist. Das Gerät unterstützt neben 1D- und 2D-Barcodes auch RFID und NFC.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2072297539/2012441964/cipherlab_rs51@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Point Mobile PM3',
    price: 400,
    display: 1,
    weight: 65,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Imager, 910mAh fest verbaut, Bluetooth, NFC',
    ourAssessment:
      'Der Point Mobile PM3 ist ein stilvoller, handlicher und intelligenter Bluetooth-Scanner. Es unterstützt Multi-Plattform, um eine Vielzahl von Benutzern und Anwendungen im Enterprise-Markt zu bedienen. Durch den IP54 Standard und das gut ablesbare OLED-Display ist der Scanner zudem gut für den Außenbereich geeignet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2074536714/2012441964/Point Mobile PM3.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'Keyence DX-A400',
    price: 0,
    display: 4,
    weight: 165,
    availableAccesorry:
      'verfügbares Zubehör: 3030 mAh Akku (6060 mAh erweiterter Akku), 2,7m Sturzresistenz, BT 5.1, LTE, kabelloses- und magnetisches Laden (optional), Android 11',
    ourAssessment:
      'Der Hersteller Keyence hat mit der DX Serie Smartphone ähnliche Modelle mit zu ihrem Sortiment hinzugefügt, welche sich nun auch im Außendienst einsetzen lassen. Außerdem gibt es Zubehör, wie RFID-Reader, Keypads oder Pistolengriffe für jeweilige Szenarien. Softwareseitig ist es zudem möglich Codes trotz unterschiedlichster Beschädigungen zu scannen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2075335800/2012441964/Keyence DX-A400 new.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Newland MT90 Orca III',
    price: 650,
    display: 5,
    weight: 265,
    availableAccesorry:
      'verfügbares Zubehör: Scanner: 1D-/2D-Imager, Starker Akku mit 4.500 mAh, erweiterbarer 6500mAh Akku, Android 11, 4G, IP65',
    ourAssessment:
      'Newland ist ein niederländischer Anbieter von Industrie-Handhelds. Das MT90 III bietet ein interessantes Preis-Leistungs-Verhältnis und ist eine Alternative zu den etablierten Herstellern. Zahlreiches Zubehör und ein eigenes MDM-System komplettieren das Angebot von Newland.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2077544347/2012441964/Newland Orca MT90 III.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Zebra MC2200',
    price: 460,
    display: 4,
    weight: 296,
    availableAccesorry:
      'verfügbares Zubehör: Standard-Range 1D/2D-Scan-Engine und Wechselbarer Akku, auf 4.900 mAh erweiterbar',
    ourAssessment:
      'Die jüngste Geräteklasse von Zebra ist ein vergleichsweise günstiges Gerät mit guten Leistungsmerkmalen - abhängig von der Modellvariante - und einer 34-Tasten-Hardware-Tastatur. Neu ist die „PRZM-Intelligent-Imaging“-Technologie, mit der auch beschädigte Barcodes gelesen werden können.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2077962878/2012441964/Zebra mc 2200.2.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra HC20/50',
    price: 600,
    display: 6,
    weight: 239,
    availableAccesorry:
      'verfügbares Zubehör: Standard-Range 1D/2D-Scan-Engine, Wi-Fi 6 (5Ghz/HC20) und Wi-Fi 6E (6Ghz/HC50), 16 MP Kamera, Notfalltaste, bis Android 16 aufrüstbar, IP68 und IP65, nicht kondensierend, 3.800 mAh Akku',
    ourAssessment:
      'Mit dem HC20 und HC50 bietet Zebra ein neu überarbeitetes Modell für die Medizinbranche. Die beiden Versionen haben durch den speziellen Kunststoff ein desinfektionsmittelbeständiges Material, wobei das HC50 verbesserte Leistungsparameter, eine Hot-Swap-Funktion und Front Kamera gegenüber dem HC20 für einen Aufpreis bietet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2079865932/2012441964/Zebra HC20_50.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Healthcare']
  },
  {
    productName: 'ACD M2Smart',
    price: 800,
    display: 4,
    weight: 430,
    availableAccesorry:
      'verfügbares Zubehör: wechselbarer 6000 mAh Akku, IP65 (optional), Module wie Tastaturen, RFID-Reader, Drucker, Temperatursensor, Griffe, Abstandsensoren, 1D-/2D-Longrange-Scanner, Zahlungsmodul etc.',
    ourAssessment:
      'Das Handheld-Terminal M2Smart von ACD ist ein außergewöhnliches Gerät. Durch einen Schiebemechanismus an Ober- und Unterseite ist es möglich, unterschiedliche Module an dem Gerät anzubringen. Auf diese Weise lässt sich das Terminal spezifisch an verschiedene Anwendungsszenarien in Industrie und Handel anpassen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2080709885/2012441964/ACD M2 smart.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'Advantech AIM-65',
    price: 1000,
    display: 8,
    weight: 600,
    availableAccesorry:
      'verfügbares Zubehör: NFC und RFID-Lesegerät, Verschiedene Halterungen verfügbar',
    ourAssessment:
      'Robustes und leichtes Tablet für stationäres und mobiles Arbeiten - auf einem Kommissionierwagen oder im Außendienstfahrzeug. Das Basis-Tablet kann um optionale Module wie 1D-/2D-Imager erweitert werden.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2080815179/2012441964/advantech_aim65@2x.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Samsung XCover Pro',
    price: 350,
    display: 6,
    weight: 218,
    availableAccesorry:
      'verfügbares Zubehör: Programmierbare Tasten, IP68, 25 MP Front Kamera, austauschbarer 4050 mAh Akku',
    ourAssessment:
      'Das Samsung XCover Pro ist eine weiterentwickelte Variante des XCover 5 und bietet vor allem hochwertigere Komponenten. Punkten tut hier das große scharfe Display und die hochauflösende Kamera auf Vorder- und Rückseite, welche praktisch für detaillierte Fotoaufnahmen von Lieferungen ist. Das präferierte Einsatzgebiet bleibt hier die Getränkelogistik.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2081180166/2012441964/samsung xcover pro.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Beverage logistics']
  },
  {
    productName: 'iData T2',
    price: 1150,
    display: 6,
    weight: 245,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Barcode Scanner (Honeywell N6703/N6803FR) bis 12 m Reichweite, Android 12  (Upgrade-Möglichkeit bis Version 14), 4500 mAh Akku (6700 mAh erweiterbarer Akku), IP67, 1,5 m Sturzesistent',
    ourAssessment:
      'Der Handheld-Scanner iData T2 des chinesischen Herstellers ist für die Industrie und Logistik ein vielseitig einsetzbares Gerät. Er ist optional mit einem fest verbauten Pistolengriff und RFID- und NFC-Funktion erhältlich. Der Hersteller ist über den Händler Rugged IT neu am deutschen Markt.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2082619295/2012441964/iData T2.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Keyence DX-A600',
    price: 0,
    display: 6,
    weight: 220,
    availableAccesorry:
      'verfügbares Zubehör:  3030 mAh Akku (6060 mAh erweiterter Akku), 2,7m Sturzresistenz, BT 5.1, LTE, kabelloses- und magnetisches Laden (optional), Android 11',
    ourAssessment:
      'Der Hersteller Keyence hat mit der DX Serie Smartphone ähnliche Modelle mit zu ihrem Sortiment hinzugefügt, welche sich nun auch im Außendienst einsetzen lassen. Außerdem gibt es Zubehör, wie RFID-Reader, Keypads oder Pistolengriffe für jeweilige Szenarien. Softwareseitig ist es zudem möglich Codes trotz unterschiedlichster Beschädigungen zu scannen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2082806452/2012441964/Keyence DX-A600.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'maintenance'],
  },
  {
    productName: 'ProGlove MARK LEO',
    price: 400,
    display: 0,
    weight: 35,
    availableAccesorry:
      'verfügbares Zubehör: Optisches, haptisches und akustisches Feedback mit LED-Beleuchtung, Akkulaufzeit von bis zu 4.000 Scans,1D/2D Barcode Scanner (Reichweite: 10-70 cm), Bluetooth Low Energy\n',
    ourAssessment:
      'Der Wearable Scanner ProGlove Mark LEO ist zu seinen größeren Brüdern eine etwas abgespeckte Variante. Sein Gewicht ist dafür jedoch das geringste auf dem Markt und der Preis deutlich attraktiver.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2083456343/2012441964/ProGlove Mark LEO.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra TC52ax',
    price: 1400,
    display: 5,
    weight: 266,
    availableAccesorry:
      'verfügbares Zubehör: 1D- und 2D-Barcodes (Imager SE4720), Akku für bis zu 14 h Schichten, Hot-Swap möglich, IP68, BT 5.1, WIFI-6, optional SE5500 Scanner bis zu 12 m Reichweite, bis Android 14 aufrüstbar',
    ourAssessment:
      'Ein robustes und technisch sehr gut ausgestattetes Gerät mit guter Scan-Engine. Ein Plus sind die 6 programmierbaren Tasten an den Seiten des Displays.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2083848334/2012441964/TC52ax.png',
    isFavorite: true,
    isRentalAvailable: true,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'Field Service'],
  },
  {
    productName: 'Honeywell CW45',
    price: 1900,
    display: 4,
    weight: 292,
    availableAccesorry:
      'verfügbares Zubehör: Bis Android 15 aufrüstbar, Standard-Akku 3500 mAh, Extended-Akku 7000 mAh, 6GB RAM, 1,8 m Sturzresistenz, seitliche 13 MP Kamera, Bluetooth 5.1, inkl. Armband',
    ourAssessment:
      'Der Wearable-Computer CW45 von Honeywell wurde speziell für den Freihandbetrieb im Lager oder der Fertigung entwickelt. Das Gerät kommt ohne integrierten Imager; die Kopplung mit einem Handrücken-Scanner ist möglich. Es besteht die Möglichkeit eine Tastatur anzubringen und die Akkuaufzeit mit dem Extended-Akku auf 12h zu bringen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2084530641/2012441964/Honeywell CW45.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'Zebra TC73/78',
    price: 2500,
    display: 6,
    weight: 349,
    availableAccesorry:
      'verfügbares Zubehör: Wi-Fi 6E, 5G (TC78), 3m Sturzresistenz, Upgrade-Möglichkeit auf Android 16, bis zu 12m scannen, IP68',
    ourAssessment:
      'Zebra legt im Bereich High-End Handhelds neue Modelle nach. Diese überzeugen mit großem Display und sehr performanter Hardware, wie der starken Scan-Engine und einem zukunftssicheren Prozessor. Trotz der hohen Robustheit, fällt das Design schlank aus und bietet zudem einen 4400mAh großen Akku.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2087429470/2012441964/Zebra TC73_78.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'Honeywell ScanPal EDA71',
    price: 750,
    display: 7,
    weight: 350,
    availableAccesorry:
      'verfügbares Zubehör: IP68 zertifiziert und Wechselbarer 8.850mAh Extended-Akku',
    ourAssessment:
      'Das EDA71 ist ein flexibles Gerät für mobile Anwendungen, die einen größeren Bildschirm erfordern, z. B. im Außendienst oder in der Instandhaltung. Der robuste mobile Computer ist mit zahlreichem Zubehör verfügbar. Sein leistungsstarker Akku ermöglicht ein autarkes Arbeiten auch über eine reguläre Schicht hinaus.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2087505580/2012441964/Scanpal EDA71.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Beverage logistics', 'maintenance', 'Field Service']
  },
  {
    productName: 'Advantech AIM78S ',
    price: 1200,
    display: 10,
    weight: 980,
    availableAccesorry:
      'verfügbares Zubehör: optional Barcodeleser, RFID-Leser, Magnetstreifenleser und 800 Nits Bildschirmhelligkeit, 1,2 m Sturzresistent, Android 10, IP65, LTE',
    ourAssessment:
      'Das neue Tablet von Advantech ist mit zahlreichen Erweiterungsmodulen und Docking-Möglichkeiten flexibel einsetzbar. Ein minus Punkt wäre hier die Akkulaufzeit von nur circa 6 Stunden.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2088384403/2012441964/Advantech Aim78s.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Panasonic Toughbook N1',
    price: 1200,
    display: 4,
    weight: 274,
    availableAccesorry:
      'verfügbares Zubehör: Scanner: 45° abgewinkelter 1D-/2D-Imager, 3200 mAh standard Akku (Extended mit 6.400 mAh bis zu 24h), IP68, 2,1 Meter Sturzfestigkeit, Android 11',
    ourAssessment:
      'Ein leistungsstarkes Gerät mit einem ungewöhnlichen, laut Hersteller besonders ergonomischen, Scanner-Design bietet Panasonic mit dem Toughbook N1. Das Handheld ist sehr robust und kann mit zahlreichem Zubehör ergänzt werden. Auch gibt es eine "FLAT" Variante, welche durch den Kamera-Scanner für den Außendienst und Service Management geeignet ist.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2089030196/2012441964/panasonic_toughbook_fz-n1@2x.jpg',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Zebra TC53/58',
    price: 1300,
    display: 6,
    weight: 293,
    availableAccesorry:
      'verfügbares Zubehör: Support bis Android 15, 5G (TC58), Wi-Fi 6E, 1D/2D Imager (SE4720/SE5500), 8MP front / 16MP back Kamera, 8gb RAM, standard 4680 mAh Akku, extra 7000 mAh Akku, Scan-Reichweite bis zu 12m',
    ourAssessment:
      'Mit der TC53/TC58-Serie stellt Zebra eine neue Generation von mobilen Computern vor. Ein neuer, noch stärkerer Prozessor und zahlreiche Ausstattungsmerkmale zeichnen die mobilen Terminals aus. Aufgrund Ihrer technischen Eigenschaften und Ihrer Beschaffenheit sind die Geräte in einer Vielzahl von Anwendungen und Einsatzgebieten im Innen- und Außenbereich bestens geeignet.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2093602749/2012441964/Zebra TC58und53.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'KoamTac KDC180H',
    price: 500,
    display: 1,
    weight: 63,
    availableAccesorry:
      'verfügbares Zubehör: wechselbarer Akku mit 1010mAh, IP65, BT 5.0, Scanbereich: 44 mm bis 800 mm',
    ourAssessment:
      'Der kompakte Bluetooth-2D-Scanner ist als Wearable für Finger oder Handrücken konzipiert. Es gibt Varianten mit zusätzlichem UHF-RFID-Reader, alphanum. Tastatur oder Wireless charging.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2093665691/2012441964/KoamTac KDC180H.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production'],
  },
  {
    productName: 'Zebra ZQ511',
    price: 500,
    display: 3,
    weight: 630,
    availableAccesorry:
      'verfügbares Zubehör: IP54 zertifiziert - Exoskelett erhältlich und Druckt Labels, Thermodirekt und RFID-Etiketten, BT 4.1 + BT Low Energy',
    ourAssessment:
      'Der ZQ511 ist das jüngste Modell der ZQ-Reihe von Zebra. Neben klassischem Beleg- und Labeldruck ist der ZQ511 laut Zebra der einzige 3 Zoll Drucker auf dem Markt, der auch RFID-Etiketten drucken kann. Zebra hat einige Leistungsdaten verbessert, darunter Akku- und interne Speicherkapazität. Unterstützt wird daneben der jüngste Bluetooth-Standard.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2093721521/2012441964/Zebra ZQ511.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Zebra TC22/TC27',
    price: 700,
    display: 6,
    weight: 236,
    availableAccesorry:
      'verfügbares Zubehör: 1D/2D Imager, IP68, 5G (TC27), Wi-Fi 6E, Bluetooth 5.2, bis Android 16 möglich,  1,30 m Sturzresistenz, Standard-Akku (3800 mAh), Extended-Akku (5200 mAh)',
    ourAssessment:
      'Das Zebra TC22 bzw. 27 ersetzt die Vorgängermodelle TC21/26. Die neue Gerätegeneration kommt mit leistungsstärkerer Hardware. Das Display hat Zebra auf 6 Zoll vergrößert. Neu ist die Option von 2 Scan-Engines: Zur Wahl stehen das Standard-Scan-Modul SE4710 für die Nah- und Mitteldistanz und der SE55 mit einer Reichweite von bis zu 12 m für anspruchsvolles Scannen im Lager.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2093792001/2012441964/Zebra TC22.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Zebra XSLATE L10',
    price: 1700,
    display: 10,
    weight: 1300,
    availableAccesorry:
      'verfügbares Zubehör: Optionale Anschlüsse für false-Serial, HDMI oder RFID, Stapler-Montage möglich',
    ourAssessment:
      'Die Android-Version des XSLATE L10 ist ideal für den Field Service – Staub, Kälte und Nässe sind kein Problem. Laut Hersteller lassen sich die Tablets auch auf Fahrzeugen installieren – und sind eine Alternative zu klassischen Stapler-Terminals. Der optionale Griff mit integriertem Barcode-Reader ist leider nur in der Windows-Variante verfügbar.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2095159291/2012441964/zebra_xslate_l10@2x.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Honeywell Dolphin CT47',
    price: 2000,
    display: 5,
    weight: 288,
    availableAccesorry:
      'verfügbares Zubehör: FlexRange-Imager bis zu 24m Reichweite (optional), Support bis mindestens Android 15, BT 5.2, 6 GB RAM, LTE/5G, WI-Fi 6, 2,4m Sturzresistenz ',
    ourAssessment:
      'Der Mobilcomputer Honeywell CT47 überzeugen mit hoher Robustheit und ist vielseitig einsetzbar, beispielsweise im Einzelhandel oder in der Logistik. Neueste Prozessor- und Speichertechnologien bieten zusammen mit einem sehr leistungsstarken Scanner zudem die aktuellste Ausstattung.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2096350358/2012441964/HoneywellCT47_-.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Zebra TC57x',
    price: 1250,
    display: 5,
    weight: 249,
    availableAccesorry:
      'verfügbares Zubehör: 1D- und 2D-Barcodes (Imager SE4710), Akku für bis zu 14 h Schichten, Hot-Swap möglich, LTE, IP68, BT 5.0',
    ourAssessment:
      'Das robuste TC57x ergänzt die Funktionalität des TC52x um die Mobilfunk-Fähigkeit. Damit kann das Gerät im Außenlager oder Außendienst eingesetzt werden.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2097486652/2012441964/zebra_tc57@2x.jpg',
    isFavorite: true,
    isRentalAvailable: true,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Newland MT95 Kambur Pro',
    price: 900,
    display: 6,
    weight: 287,
    availableAccesorry:
      'verfügbares Zubehör: Newland 2D-Megapixel-Scantechnologie, 6000 mAh starker Akku, 5G, Android 11, IP67, BT 5.2, 6GB RAM',
    ourAssessment:
      'Das Newland MT95 Kambur Pro ist eine günstigere Alternative zu dem Zebra TC58. Wer Wert auf ein großes Display und modernes Design legt, kriegt hiermit einen guten Allrounder mit starkem Preis-Leistungs-Verhältnis.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2097490841/2012441964/Newland MT95.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance'],
  },
  {
    productName: 'CAT S42',
    price: 190,
    display: 5,
    weight: 220,
    availableAccesorry:
      'verfügbares Zubehör: Android 10, Leistungsstarker Akku mit 4.200 mAh und Bedienbar mit nassen Fingern und Handschuhen.',
    ourAssessment:
      'Das S42 von CAT ist zertifiziert nach IP68 und so ein gewohnt robuster Begleiter im Außendienst, z. B. in der Getränkeauslieferung. Das gummierte Gehäuse ist erfreulich rutschfest, der wechselbare Akku ermöglicht langes Arbeiten.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2097708217/2012441964/CAT S42.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Beverage logistics'],
  },
  {
    productName: 'Samsung Tab A SM-T595',
    price: 300,
    display: 10,
    weight: 534,
    availableAccesorry:
      'verfügbares Zubehör: Optionales Schutzcase erhältlich, Kein Imager, festverbauter 7300 mAh Akku, LTE ',
    ourAssessment:
      'Das Galaxy Tab A SM-T595 von Samsung ist ein klassisches Consumer Tablet, was sich im vergleichsweise günstigen Preis widerspiegelt. Das Gerät ist für einfache Anwendungsszenarien denkbar, die keine besonderen Ansprüche an Robustheit und Hardware-Ausstattung stellen.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2097784761/2012441964/Samsung Tab A SM-T595N.png',
    isFavorite: false,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'maintenance', 'Field Service'],
  },
  {
    productName: 'Point Mobile PM67',
    price: 1100,
    display: 4,
    weight: 300,
    availableAccesorry:
      'verfügbares Zubehör: Physisches Keypad mit Hintergrundbeleuchtung, N3601 1D/2D LED Barcode Scan Engine, fester 4200 mAh Akku',
    ourAssessment:
      'Der PM67 ist ein robuster Mobilcomputer, der in den Bereichen Transportlogistik und Lagerlogistik zum Einsatz kommt.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2098788192/2012441964/Point Mobile PM67.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['Warehouse & Production', 'Field Service'],
  },
  {
    productName: 'Samsung Tab Active 4 Pro',
    price: 500,
    display: 10,
    weight: 674,
    availableAccesorry:
      'verfügbares Zubehör: IP68 zertifiziert und Wechselbarer 7.600mAh Akku, 5G Mobilfunk optional',
    ourAssessment:
      'Das Tab Active 4 Pro von Samsung ist ein robustes Consumer-Tablet und gut geeignet für den Einsatz in rauhen, feuchten und schmutzigen Umgebungen. Der Akku ist leistungsstark und ermöglicht ein autarkes Arbeiten über eine Standard-Schicht hinaus. Das Gerät ist für eine horizontale App-Bedienung ausgelegt - so sind die physischen Android-Bedientasten horizontal am Gerät angebracht.',
    imageUrl:
      'https://skystatic08.atmos.id/11018/2049634327/2099471937/2012441964/Samsung tab active 4 pro.png',
    isFavorite: true,
    isRentalAvailable: false,
    operationArea: ['maintenance', 'Field Service']
  },
];

export const navMenu = [
  {
    menu: 'Products',
    submenu: [
      {
        subMenu: 'Features',
        link: '/features',
        item: [
          { item: 'User Experience', link: '/features/user-experience' },
          { item: 'Template principle', link: '/features/template-principle' },
          { item: 'SAP integration', link: '/features/sap-integration' },
          { item: 'Offline & Sync+', link: '/features/offline-sync' },
          { item: 'ERP extensions', link: '/features/erp-extensions' },
          { item: 'Ontego Designer', link: '/features/ontego-designer' },
        ],
      },
      {
        subMenu: 'Areas of application',
        link: '/areas-of-application',
        item: [
          {
            item: 'Warehouse logistics',
            link: '/areas-of-application/warehouse-logistics',
          },
          { item: 'Production', link: '/areas-of-application/production' },
          { item: 'Inventory', link: '/areas-of-application/inventory' },
          {
            item: 'Service management',
            link: '/areas-of-application/service-management',
          },
          { item: 'Maintenance', link: '/areas-of-application/maintenance' },
          { item: 'Other areas', link: '/areas-of-application/other-areas' },
        ],
      },
      {
        subMenu: 'Mobile Devices',
        link: '/mobile-devices',
        item: [
          {
            item: 'Find mobile hardware for my employees.',
            link: '/mobile-devices/find-mobile-hardware-for-my-employees',
          },
        ],
      },
    ],
  },
  {
    menu: 'Why Ontego?',
    submenu: [
      {
        subMenu: 'Good reasons',
        link: '/good-reasons',
        item: [
          {
            item: 'Why companies rely on Ontego Business Mobility.',
            link: '/good-reasons/why-companies-rely-on-ontego-business-mobility',
          },
        ],
      },
      {
        subMenu: 'In use',
        link: '/in-use',
        item: [{ item: 'credentials', link: '/in-use/credentials' }],
      },
      {
        subMenu: 'this is us',
        link: '/this-is-us',
        item: [
          { item: 'Pursue', link: '/this-is-us/pursue' },
          { item: 'Locations', link: '/this-is-us/locations' },
          { item: 'Career', link: '/this-is-us/career' },
        ],
      },
    ],
  },
  {
    menu: 'Events',
    submenu: [
      {
        subMenu: 'Trade fairs & congresses',
        link: '/trade-fairs-congresses',
        item: [
          {
            item: 'VLB Logistics Congress 2024',
            link: '/trade-fairs-congresses/vlb-logistics-congress-2024',
          },
          {
            item: 'LogiMAT 2024',
            link: '/trade-fairs-congresses/logimat-2024',
          },
        ],
      },
    ],
  },
  {
    menu: 'Resources',
    submenu: [
      {
        subMenu: 'Mobility Blog',
        link: '/mobility-blog',
        item: [
          {
            item: 'Information and tips about MDE for SAP and other ERP systems.',
            link: '/mobility-blog/information-and-tips-about-mde-for-sap-and-other-erp-systems',
          },
        ],
      },
    ],
  },
];
