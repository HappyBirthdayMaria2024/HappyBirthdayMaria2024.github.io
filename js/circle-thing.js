import Circle from './circle.js';

let data500 = [
    [46907.15070237851, 0.002, 2.5392475096073284],
    [16301.223228538258, 0.006, -3.029102700566724],
    [11068.29780225054, 0.004, 2.8611729233220355],
    [10788.388408232371, 0.012, 1.4015830156492102],
    [9364.721337497775, 0.008, -2.246129592130187],
    [8226.12395305788, -0.004, 1.4163751985313011],
    [7711.3419287159295, -0.002, 2.7765809408368347],
    [6866.4524976516395, -0.008, 2.1373962619357263],
    [6558.837965422872, -0.012, -0.8666683800178686],
    [6532.107597433332, 0.01, -2.7866200337070817],
    [5425.2979638389015, -0.006, 2.0295952070098737],
    [3712.3480565971904, -0.014, 2.2020127700830447],
    [3696.881326873199, 0.014, -1.4769489195291858],
    [2717.4268313041694, -0.016, 1.1661352333610462],
    [2685.6879162179416, -0.018000000000000002, -1.4301916656888842],
    [2396.7724289196008, 0.018000000000000002, -1.938258712732489],
    [2173.1745325077245, -0.022, -2.408814763212893],
    [1920.2582702395464, -0.02, 2.5874841891973537],
    [1602.1347373757797, 0.02, -0.7821046713226858],
    [1393.905214965102, 0.026000000000000002, -1.9795502276779917],
    [1333.6464285513343, -0.01, -1.3048133542260647],
    [1155.429701293995, 0.022, 2.6301687240089975],
    [1020.0253796051335, -0.026000000000000002, -1.6346161876418328],
    [870.1051274675666, -0.028, -2.8133115840183973],
    [786.8519383564552, -0.03, 0.8763644990260443],
    [775.2555097476887, 0.03, 1.291031393329353],
    [691.90348968366, -0.024, 0.48371554837891934],
    [644.4436538557993, 0.046, -2.146924261824758],
    [560.4765825778605, 0.034, -2.164310128954773],
    [556.3507898442693, 0.016, -1.237654406727246],
    [554.2968837991153, 0.038, 2.090401508434924],
    [536.9215311854408, 0.052000000000000005, -1.6085755635747983],
    [491.73816248851114, -0.036000000000000004, 2.610045871730714],
    [479.20359029629304, 0.028, 1.0790191141333154],
    [412.54736028859116, -0.04, -2.7115309731859623],
    [399.1047723200872, -0.032, 2.059425816984405],
    [373.1699813494269, 0.032, 0.1617441498250398],
    [350.26981140719903, -0.048, -1.7813511297864402],
    [318.31067435962143, 0.054, 2.333438924715679],
    [294.69878876270127, 0.05, -2.8826699827201283],
    [289.86446062918367, 0.062, -1.2825073494773749],
    [286.765376813422, -0.044, -0.21705180437840965],
    [284.8131512010388, 0.048, 1.3927230981374168],
    [282.4247546073945, 0.042, -2.3696150006863106],
    [272.46062136944494, 0.024, -1.593261430408801],
    [271.9986575129024, -0.034, 2.4988177568859253],
    [258.4943115932245, 0.04, 1.1193483643155797],
    [240.32002354944603, -0.056, 0.5114248434922891],
    [227.31255343487774, -0.058, -2.4589747278269027],
    [224.60430715740318, -0.064, 2.4739355658878126],
    [212.5423024230878, -0.038, 0.2705070771220832],
    [185.25544075634673, 0.056, 0.35980691271986825],
    [176.16671966347482, -0.054, -1.7835244206534278],
    [165.54099040197298, 0.058, 1.4328481134658613],
    [164.63056130340564, 0.07200000000000001, -2.0346826499463315],
    [161.73413219167156, -0.046, 1.2090830388428047],
    [160.49183169537002, 0.074, 1.558828438419231],
    [155.4750434412828, 0.036000000000000004, -1.9134577133482782],
    [150.74156294465243, -0.074, 1.3421528625393055],
    [148.77389380330564, 0.044, 0.5501429519440298],
    [143.28332599968215, 0.07, 2.075189355914331],
    [139.6310506493838, -0.06, 2.063642175367188],
    [138.79436292571262, 0.066, 2.2720107239863143],
    [133.01904094499022, -0.05, 2.8668367528514853],
    [132.18790677345342, 0.078, -3.076884821055131],
    [129.76781002531314, 0.08600000000000001, 1.424811465258173],
    [119.60357085037673, -0.066, -2.1551009712750973],
    [119.51215305781032, 0.088, -1.4435096433631922],
    [112.95315882288168, -0.052000000000000005, -2.6133939533984636],
    [107.65001185149836, -0.1, 1.383774652459546],
    [105.80078935909211, -0.08600000000000001, -1.5244829117953655],
    [97.22705286428638, -0.042, 0.8070667620403219],
    [95.4089883030525, -0.112, -1.4821682065386075],
    [94.1352339908572, 0.096, -2.8537190743425125],
    [91.28124770352012, -0.098, -1.7916821880771379],
    [90.96843873830643, -0.094, 2.275666795351655],
    [90.58087745423272, 0.09, -2.0838850688577124],
    [89.64894782737254, -0.108, -2.942965029263414],
    [88.55251410067964, 0.122, 3.0968411939199334],
    [77.62653890375356, -0.068, -3.0599729426376205],
    [75.24465060216517, 0.092, -0.4642923896325076],
    [74.93005705584937, 0.098, 0.6708725801192154],
    [74.67133472976438, 0.076, -0.06371585104392338],
    [70.41262666290393, -0.07200000000000001, -1.0537898574251854],
    [68.88092481163254, -0.092, -2.8432670074807254],
    [68.82399721697999, -0.076, 0.42251362423062516],
    [68.32980503322362, 0.13, 0.4410999699525029],
    [68.25662077414708, -0.07, -0.33227257403345445],
    [66.29233532518165, -0.088, 1.294144824738236],
    [66.26754683659713, 0.10200000000000001, 0.3096763187386672],
    [64.13198918635067, -0.08, -1.133727838038703],
    [63.49399165208018, -0.10400000000000001, 2.0358967920391002],
    [62.89266714862323, -0.11, 1.3308858079181365],
    [61.83336658435731, -0.078, 2.7413661074381905],
    [61.13840412026524, 0.08, -2.8379798965118685],
    [60.726260095820145, 0.11, 3.081230639448951],
    [56.58062658022927, 0.1, 2.596369544570918],
    [56.49830886018777, 0.068, -0.7764647524804048],
    [55.98388946484871, -0.106, 0.6212811236814328],
    [55.39672701074099, 0.114, -2.7091415474205958],
    [54.38854382272228, 0.082, -2.425887074500422],
    [51.69935125090771, 0.108, -0.9204307479539787],
    [51.00769732584507, -0.082, 2.1815035888702257],
    [48.76230993473804, -0.062, -0.7617800404768663],
    [48.553663574175694, 0.136, -1.898333939944696],
    [48.05109410254169, -0.154, -2.1067855570305807],
    [47.02808917449337, 0.124, -0.6775690766507981],
    [46.96046066091242, -0.09, -1.5721960065787244],
    [46.66198357620065, 0.14, 2.8232340921921053],
    [45.510236429328366, 0.14400000000000002, 0.6186283113073996],
    [44.20721867876503, -0.114, 2.447906998399911],
    [44.20268097368798, 0.168, -2.346392329649515],
    [40.386283551363825, 0.084, -0.9367411234578522],
    [39.9805498305494, 0.132, -2.4244386101974427],
    [39.52388834986413, 0.134, 0.38308808696809526],
    [39.426304662170814, -0.146, 0.6489764973152875],
    [39.39928423282227, 0.12, -0.962559055254391],
    [38.750550028865675, 0.06, -1.5825224382785947],
    [38.13900640201545, -0.134, -2.8326891628485615],
    [37.375830187272655, -0.122, -2.3691139933626726],
    [35.55446394331202, -0.11800000000000001, -0.041186096657782126],
    [35.44311139969532, 0.166, 1.7152750316151248],
    [35.233240130719885, -0.116, -0.09202323618239301],
    [35.084597125544995, 0.17, 0.3598680625513782],
    [34.72550698901998, 0.164, -1.3053273930978766],
    [33.873757631505335, 0.14200000000000002, 2.7298214628105937],
    [33.84787433644754, 0.152, -2.9929731499850964],
    [33.234523598931894, -0.126, 2.8968940603777042],
    [32.963591714406824, 0.128, -1.931706982355626],
    [32.90394480875257, 0.064, -0.009028489985424697],
    [32.41123113522608, -0.132, 1.2937392165082338],
    [32.2911408513418, 0.2, -1.6587834276779658],
    [31.16571226643879, -0.12, 1.7353025531105806],
    [30.267777856422892, 0.138, 0.02345868047596972],
    [30.098607031732712, -0.128, -1.5273665817982383],
    [29.807937697950802, -0.14200000000000002, -0.24777815192763786],
    [29.095661512276276, -0.138, 2.9354095904560173],
    [26.94175228580391, -0.194, 2.857981101738909],
    [26.71200967319392, 0.17200000000000001, 1.8000605351311292],
    [26.517220322096655, -0.192, -0.2543893099265589],
    [26.236987824856413, 0.158, -2.304224110968231],
    [25.97810359860219, 0.154, -1.4598050414704764],
    [25.857056997102205, -0.10200000000000001, -1.876239502161634],
    [25.349683354247606, -0.162, 0.9067584033722129],
    [25.028232977620718, 0.15, -0.49631224109038036],
    [24.96169710738585, 0.126, 1.7566369017738448],
    [23.56944841345149, -0.24, -2.606553465497348],
    [23.327133967362276, -0.14400000000000002, 2.6607301672968475],
    [23.26640008286091, 0.226, -2.3206226178706646],
    [22.363090821479172, -0.136, 1.5342015630084493],
    [22.226652481801995, -0.17, 2.5235866355383645],
    [22.113898125030136, 0.16, 1.2110555504699214],
    [21.834163589469558, 0.146, -2.682547298729719],
    [21.660443945835862, -0.158, -1.3096960442311325],
    [21.32855672189188, 0.182, -2.1962243449988543],
    [21.257438197040504, 0.186, 1.8591788936815878],
    [21.25092806907633, -0.096, -0.8309509386396571],
    [21.07174007329418, -0.178, 1.8501891006858622],
    [20.586695562587497, 0.202, 0.7584190410997556],
    [20.545347320195145, 0.198, 1.6362437937936827],
    [20.396608875985308, 0.196, -0.9734739763067952],
    [20.2394932244031, 0.176, -0.015655431573798947],
    [20.089431685694954, 0.194, -2.1123973704482144],
    [19.811942081771516, 0.252, -2.4315785122042333],
    [19.505421697799612, -0.2, 3.0620215759796805],
    [19.394406117980875, -0.214, -2.0879680614500575],
    [18.95895751678744, 0.184, -2.892949314950828],
    [18.705661008693024, -0.164, -3.1121443833838445],
    [18.67016182499107, -0.13, -2.835467480028931],
    [18.49835277251892, -0.196, 2.4650924915124675],
    [18.441742221271518, 0.192, 0.6385079222916736],
    [18.389430541185558, 0.218, 0.5830797763402109],
    [18.26252199530254, -0.198, -1.2743682441011446],
    [17.468066887353412, -0.212, 0.8116023286124648],
    [17.446236298909454, -0.152, 2.4680723695681026],
    [17.43118053308523, -0.156, 1.5694266076093262],
    [17.27472366306585, 0.10400000000000001, 2.3384668155077697],
    [17.109336491484466, 0.212, 1.7900798651950496],
    [17.04315653760007, -0.16, -2.5876942747749165],
    [17.01601342794025, 0.292, 0.1407757496678064],
    [16.940106635699557, -0.23600000000000002, 2.394211697655626],
    [16.711119427380726, -0.242, 1.5188213574526082],
    [16.657940621634562, 0.268, -1.8687573861416487],
    [16.652669050769084, -0.15, 1.5316280440106418],
    [16.57971602190191, 0.11800000000000001, 0.4139573239943992],
    [16.566775845913426, -0.084, -3.0031823366181882],
    [16.227476148127703, -0.234, -0.7999895371271639],
    [16.015357555081614, 0.162, -0.9384805139771693],
    [15.62542103992904, 0.112, 1.086331963186151],
    [15.584777220106616, -0.17200000000000001, -1.37353973298188],
    [15.403421995728564, 0.22, -2.1033243390073646],
    [15.314737431782683, 0.326, -2.1086394409975022],
    [14.806024952248217, 0.3, -2.1094817179753482],
    [14.58242799518957, -0.268, 1.784128719839911],
    [14.269768896964615, -0.25, 1.7805188764379187],
    [14.265814265057692, -0.28200000000000003, 2.2501175218415024],
    [14.124133932373718, 0.17400000000000002, -1.9887739655136554],
    [14.068815140957955, 0.178, -2.4099822228851053],
    [13.995177107431289, -0.232, 2.1603002226385555],
    [13.857270684219943, -0.186, -0.8806400285868405],
    [13.830478991491484, 0.306, -0.8093670654751545],
    [13.821601630859652, 0.272, 2.2959337663645583],
    [13.573277123703422, 0.156, -0.5489869566825283],
    [13.347614975899308, 0.264, -0.7994920791355725],
    [13.04429371590161, 0.244, 1.276809121836848],
    [13.023609296381998, -0.20600000000000002, 1.1792658184011617],
    [12.899435284558487, -0.17400000000000002, 1.0116281794502726],
    [12.823495290428907, 0.266, 0.8846013641403121],
    [12.812737510205315, -0.21, 1.9302395123893656],
    [12.772494736232536, -0.23800000000000002, 0.9366439923628491],
    [12.262569229237632, 0.258, -2.652206864296608],
    [11.911541020327524, 0.29, -2.690695647708631],
    [11.890920073375986, 0.368, -1.3086126033610372],
    [11.660970297279434, 0.242, -1.300099591700617],
    [11.635065315292909, -0.218, 0.19617773252791504],
    [11.435483210703264, -0.176, 2.8407602128576066],
    [11.31804157557604, 0.294, -2.5002108101381886],
    [11.259765155751115, 0.334, 1.0598577342800806],
    [11.234021963756785, 0.19, -1.442064927811938],
    [11.225197204477789, 0.106, -2.417323372606883],
    [11.159926498967092, 0.26, 0.7673617925024636],
    [11.131861920506857, 0.332, -1.4737014850609196],
    [10.958356880972673, 0.274, -0.9920935885085959],
    [10.930842231842776, 0.20800000000000002, -2.8835996284253294],
    [10.695594550892281, -0.252, -0.2611423493814168],
    [10.624145936064865, -0.124, 1.0538290078666166],
    [10.62174495435024, 0.362, -2.4023951693714234],
    [10.6200992880936, -0.182, -2.9451455409334275],
    [10.61802240405125, -0.278, 0.5292779510009017],
    [10.605596439272665, -0.168, 2.2643561440404847],
    [10.602522412873551, 0.28400000000000003, -2.6936341297821844],
    [10.592410781025425, 0.308, 1.2563564319095073],
    [10.590402796651091, 0.328, 0.5674519621170621],
    [10.582445995499691, 0.302, 0.6069196371592275],
    [10.559587356521162, 0.276, 1.2499450493152795],
    [10.443027705098956, -0.222, 2.7387098437459167],
    [10.318836813037912, 0.47400000000000003, -1.6703857165361808],
    [10.148941972881902, 0.214, -2.5471013690034283],
    [10.13540598262645, -0.226, -2.759147127644095],
    [10.007900725457274, -0.292, -1.0511673475153869],
    [9.88355001632031, 0.36, 1.146399067796783],
    [9.802642997679644, 0.296, -1.4398517261647357],
    [9.787959136839893, 0.246, 2.9554395401197424],
    [9.747768560358463, -0.14, 2.229149773181515],
    [9.734710079113333, -0.19, 2.3710088695341347],
    [9.72680064433604, 0.358, -1.70577445185955],
    [9.680490490508351, 0.338, -0.51694489249507],
    [9.626833349862311, 0.188, -2.123594746306415],
    [9.621868844749786, 0.342, -1.4584576257759991],
    [9.585697837399168, -0.302, -2.0949210615824785],
    [9.296283754537985, -0.26, -1.244558433303913],
    [9.231392488756477, -0.216, 1.815229501526981],
    [9.194557658180216, -0.23, -0.8053640232484965],
    [9.133882794846937, 0.20600000000000002, -0.3125375483610092],
    [8.994391215206829, 0.298, 1.3674341096921654],
    [8.96298671701239, -0.20800000000000002, -2.9357288811151703],
    [8.812846820736361, 0.392, 1.171400505221154],
    [8.79172402485982, 0.222, -1.0500258714380664],
    [8.584224808450825, -0.262, 1.665912101394742],
    [8.580843747576795, -0.266, -1.981021973806216],
    [8.522658380915441, -0.228, -2.2477833239023988],
    [8.454342072539214, 0.28200000000000003, 0.9690782558008666],
    [8.448093839956119, 0.34, 2.0843799985279126],
    [8.446456832236672, 0.366, 1.7509639710451423],
    [8.441492326372842, 0.148, -2.735250036738737],
    [8.256095362850756, 0.21, -1.592501197956974],
    [8.239524760561338, -0.418, 1.5529464931176775],
    [8.183704370393942, -0.294, 2.1146521976104387],
    [8.160013917917922, -0.27, -2.4198626638059464],
    [8.149294950486444, 0.304, 2.3661667147312007],
    [8.030703379481924, 0.248, -0.7377235320425307],
    [7.931832457870448, -0.28400000000000003, -0.34227260387176545],
    [7.902713283235399, 0.318, 0.5828443396632468],
    [7.81370463556628, -0.5, -1.6055909518804719],
    [7.81220451687529, 0.18, 0.45076175988643424],
    [7.4610759240811575, 0.32, 3.041033468434298],
    [7.444038818665853, -0.304, 1.0749373274976568],
    [7.4386945304163055, 0.224, -0.5605492728766731],
    [7.3758417809238646, -0.392, 0.7166149474859227],
    [7.372893051834245, 0.316, -2.366768061469762],
    [7.338474440130283, 0.094, 1.2756221250960802],
    [7.271024357487818, 0.25, 0.8471713382641961],
    [7.246589077804108, 0.494, -2.9031533108255347],
    [7.246505004890941, 0.23600000000000002, 0.22850769051883157],
    [7.206187072494993, -0.248, -0.19232976065612697],
    [7.180204746147821, 0.454, -0.76862396681697],
    [7.151679570541557, 0.28, -0.7379612742306574],
    [7.127268223977705, 0.336, -1.798023178041542],
    [7.028121746451263, 0.27, -0.435904762867191],
    [6.997129956090457, 0.232, -1.8793094297313626],
    [6.97634095559191, 0.388, -2.996757802553761],
    [6.927245865088033, 0.324, 1.155315923670349],
    [6.901993102218537, 0.216, -2.9616905966329408],
    [6.865636385941763, 0.312, -0.6919294281969159],
    [6.825254901184599, 0.314, 2.3313113782514114],
    [6.500750709252352, 0.374, -0.41118474109800335],
    [6.474000382083674, 0.278, -3.096987741967822],
    [6.432241312331033, 0.448, -1.6654292123179533],
    [6.3360800280848135, -0.388, -1.3754460833947728],
    [6.324167692243549, -0.47800000000000004, -0.11475994949103202],
    [6.2897982954522345, 0.488, 1.7904949884703283],
    [6.246399116214145, -0.188, 0.4302336887257249],
    [6.219257250341353, -0.354, 1.3074121114023658],
    [6.210868744928709, 0.364, -0.4823921953918683],
    [6.144495239278641, -0.276, 2.6117261599685766],
    [6.131698018815698, -0.444, 2.094157066183747],
    [6.0862314621818685, -0.308, 2.9479527338435814],
    [6.076707362963102, 0.376, 1.7528971263516129],
    [6.033074686791371, -0.41000000000000003, 1.3585276577366647],
    [6.016048045407306, -0.312, 2.073184186517633],
    [6.010528658416818, -0.38, 1.4009456245882856],
    [5.9617589773827975, -0.20400000000000001, 1.2417174641349376],
    [5.953443782984559, -0.18, -0.035979049767538185],
    [5.927468151460201, -0.374, 2.290631520172579],
    [5.866960143494524, -0.244, -1.0680397237313364],
    [5.852971196851098, 0.468, -2.2855247113394723],
    [5.753245781233218, -0.486, 1.4875907045753118],
    [5.67886057844591, -0.32, -0.6021589041411256],
    [5.674515530717132, 0.458, -2.780024085101856],
    [5.672879065337478, 0.40800000000000003, 1.3451873226559474],
    [5.670095518136501, -0.254, -3.0098040689126093],
    [5.62805672145689, -0.492, 0.4999950064781163],
    [5.528138529634587, 0.34600000000000003, 2.3926531150331147],
    [5.505460509256074, -0.274, -0.23331115863323731],
    [5.497106317435004, 0.436, -0.8024706844691742],
    [5.484966257414633, 0.33, 2.5326081177776207],
    [5.458261729863652, 0.47600000000000003, 1.2302052085043385],
    [5.414599326878921, -0.29, 0.8681012388857803],
    [5.4114441266541276, 0.406, -1.6535968074791434],
    [5.356695392642811, 0.452, 2.3603957377679516],
    [5.334755244677254, 0.47000000000000003, 0.16700331598599258],
    [5.297309889029627, -0.47600000000000003, 2.349484560841735],
    [5.2838563027022545, 0.47800000000000004, 1.9264266626423845],
    [5.2832608338552705, -0.48, 3.0682781494132882],
    [5.220349684030491, 0.394, -2.1991940431628776],
    [5.207936209806022, -0.438, 2.8992395833657114],
    [5.198842460209888, 0.496, 0.03194112362695705],
    [5.185356139715628, 0.466, 1.1272292436509228],
    [5.173731310128793, -0.35000000000000003, 1.5704109158553101],
    [5.155122093680127, -0.386, 1.5511969613051233],
    [5.136621727855052, 0.38, -0.17448629619667502],
    [5.098002185805636, -0.41200000000000003, 2.5320069713639497],
    [5.061882112021998, 0.354, 0.09476195106246987],
    [5.035905031473146, -0.224, 0.1154164824222697],
    [5.028389120862996, 0.47200000000000003, 1.292467370486832],
    [5.024412059490657, -0.34400000000000003, 2.52926684282135],
    [5.006945832340475, -0.362, -0.8698253809430749],
    [4.97371158606798, 0.49, -0.895618890971061],
    [4.973585364062482, 0.35000000000000003, 1.0222430272614418],
    [4.965158893463864, 0.24, 2.3322390185664017],
    [4.952065684569319, -0.4, 1.803478288601391],
    [4.886800867258782, 0.434, 1.4653593315178195],
    [4.876800367131826, 0.4, -1.8331547812814641],
    [4.8683921324525254, 0.23, 0.6014682637050368],
    [4.8590145871829185, -0.166, 2.689514219631569],
    [4.840475851196096, 0.464, -1.3505311913390126],
    [4.812359091933792, 0.446, 1.663120551496429],
    [4.805643245976179, 0.48, -0.7490352346443875],
    [4.763947866564614, -0.338, 2.74357447291524],
    [4.755605166840988, -0.332, -3.0059421059810565],
    [4.684503235758406, -0.372, -0.5289743225272219],
    [4.684225291806065, -0.446, -0.26047111109488313],
    [4.672040420309316, -0.336, 0.354328136557043],
    [4.641263488458092, 0.23800000000000002, -1.1789847392939081],
    [4.6163475630672, 0.426, -2.563081466598402],
    [4.614643964773754, 0.28600000000000003, -0.07646319491830393],
    [4.602469076639851, 0.498, 1.5623436611211605],
    [4.569468539785619, -0.43, 2.8877962843867526],
    [4.53790450178883, 0.31, -1.5531461008589156],
    [4.530373760992701, -0.33, 0.00048163376783087427],
    [4.494343258787191, -0.366, 0.46471095449763594],
    [4.492566943675703, -0.428, 0.8387247777826011],
    [4.4910154920551255, 0.254, 1.9666771555651164],
    [4.448269335001955, 0.424, 0.544399213833112],
    [4.352592746004044, -0.452, -0.3815669916439417],
    [4.32863113294651, 0.46, 0.7322756820881619],
    [4.326289577033418, -0.34800000000000003, 1.0408275279004746],
    [4.3247567227045485, -0.424, 0.1490554079314495],
    [4.322309662742445, 0.45, 0.877271342564586],
    [4.312050325660534, 0.41400000000000003, 2.252180846826927],
    [4.287935987282451, -0.378, -1.157294713284987],
    [4.28672066698252, -0.458, -1.1849494364123714],
    [4.282563620427257, 0.432, -2.0602717133274986],
    [4.2700852168475505, 0.34400000000000003, 1.32980622863743],
    [4.1731648648158854, -0.322, 0.8696382312005733],
    [4.166167119942408, 0.34800000000000003, 0.04084491257126028],
    [4.158280158751655, -0.404, -2.7313045963976195],
    [4.108899223586955, 0.352, -2.1956193542591667],
    [4.092515535248041, 0.428, -0.5082797656312817],
    [4.087538399015721, 0.262, -2.159424563145499],
    [4.083310058374314, -0.28800000000000003, -3.060259500239784],
    [4.063428387563185, 0.444, 0.04076125381241572],
    [4.0380143291410215, 0.442, -1.0031990059204896],
    [3.978926719749461, -0.324, 0.9913299679384596],
    [3.966030577217352, -0.34600000000000003, -0.7582185164286795],
    [3.9454970219185914, -0.148, -1.1478181335979531],
    [3.9066405990115953, -0.436, 0.5544983408036681],
    [3.9064464369513185, 0.382, 2.2806683716453002],
    [3.8991353767780477, -0.394, -2.429698447257421],
    [3.865732653720633, -0.406, 0.7143864338859268],
    [3.856712791331925, 0.322, -1.1952266506641525],
    [3.835998513501081, 0.404, 0.5138367677067226],
    [3.765298276853097, -0.398, -0.07601447926412103],
    [3.7351761466373743, -0.464, -0.7857731857053484],
    [3.6704996698553183, -0.246, -2.9008888791680802],
    [3.6234956427010427, 0.398, 0.6895566760647328],
    [3.579264439806301, 0.228, 2.4714692326909073],
    [3.525370708356332, -0.326, -3.0859832447373554],
    [3.5232765667047614, -0.184, -0.12073009551279044],
    [3.5162868610135782, -0.41600000000000004, -0.48340789126652645],
    [3.4949877024868132, -0.36, 0.2948251673592018],
    [3.4808732202557917, -0.306, 1.5128418118947586],
    [3.4633655740339466, 0.396, -0.3940358662300267],
    [3.430616799575084, -0.432, -1.2677376611208329],
    [3.409120293631234, -0.358, -2.884599988012897],
    [3.3892437031585607, 0.234, 0.8841795817358854],
    [3.379534718517689, -0.382, 0.8723656657110669],
    [3.3687533588510545, 0.356, 2.58515724836702],
    [3.352355008143619, -0.256, 0.5293996350341421],
    [3.3379997489365674, 0.386, 0.6220174975158207],
    [3.31610583251992, -0.298, -2.0260566179670203],
    [3.309195751574333, 0.41200000000000003, -0.2327484762031752],
    [3.2894646552616438, -0.484, -0.5385682913629001],
    [3.281404225195535, -0.456, 1.8500915796141344],
    [3.2631006184378837, 0.418, 0.8955534008389957],
    [3.2473276861597693, 0.492, 0.6322393011286375],
    [3.2334707281433253, -0.3, 2.2710385860172173],
    [3.2057964505437644, -0.498, 1.441303613965232],
    [3.2015074252762115, 0.378, -0.9394390299613027],
    [3.1974811883159946, 0.116, -0.6871523615246413],
    [3.1666507282938143, -0.31, 0.8401634573538429],
    [3.152676767379547, -0.264, 1.7348674490661797],
    [3.1402432424682187, -0.368, 3.034598655561818],
    [3.1344842054604465, 0.37, 1.2470113389452504],
    [3.110706059775874, -0.40800000000000003, -1.1208787310496813],
    [3.092416757199537, -0.47200000000000003, 0.36259002247646005],
    [3.0511942109172914, -0.318, 1.4608110260230256],
    [3.0233400609537524, 0.372, 2.4561398903701392],
    [2.9894116595885447, 0.41000000000000003, -0.7592198745379212],
    [2.9798002857176886, 0.44, 1.7998662740724334],
    [2.974183113263985, -0.37, 2.571278162352844],
    [2.9630107231038134, -0.202, -3.0014195839973157],
    [2.926987254596423, -0.314, 2.5382771428709976],
    [2.91045193892003, -0.352, -1.1974798426419042],
    [2.9096904215333033, 0.422, -0.8799280255598667],
    [2.865634612221004, -0.448, 2.745143296845354],
    [2.8469267594310574, 0.456, 2.0262662699698706],
    [2.7956807664822634, 0.28800000000000003, 1.0357976000180151],
    [2.789181746811964, -0.272, 2.616865943025525],
    [2.7486404356930687, -0.296, 0.8150063019192568],
    [2.733582786519939, -0.316, -0.7756549124226098],
    [2.667261380050648, -0.39, 0.918130629829657],
    [2.6667674432645425, 0.384, -1.5420340418906298],
    [2.657144017988947, -0.45, 2.160123784958223],
    [2.6474898901941737, -0.482, 0.6803560896884868],
    [2.6283689781150965, -0.422, 1.7546253268868242],
    [2.554690430571855, -0.47400000000000003, -1.7905400380457963],
    [2.541836814061943, -0.488, -1.6949708643382027],
    [2.5040214969556467, 0.20400000000000001, 1.6241153038998797],
    [2.4661454715168065, 0.41600000000000004, -0.5511932911710413],
    [2.450994387966624, -0.454, 1.342841223698668],
    [2.4430757314353144, -0.42, -1.5515234368315514],
    [2.4276380032482354, -0.376, 2.2510994781744844],
    [2.4078193820144858, 0.484, 2.3985952167780855],
    [2.398933574660912, -0.466, 1.258136237580244],
    [2.253881698427287, -0.442, -1.7354699458632155],
    [2.2502074741813405, 0.482, 0.7761527484560078],
    [2.191150875231849, -0.28, 2.0458862970311085],
    [2.161619852127543, 0.42, 2.1284716897481477],
    [2.1509015789383747, -0.47000000000000003, 2.984329020081122],
    [2.1373649692616894, 0.402, 0.5243763948622746],
    [2.137327672256816, -0.364, 2.9534603175672247],
    [2.104253552318465, -0.46, 1.247348564815156],
    [2.091373739480286, -0.28600000000000003, 2.2190593873897426],
    [2.070708922464281, -0.44, 0.16024254898167323],
    [1.8842653179604762, 0.39, -1.2354972092666616],
    [1.6993961359481653, -0.384, 3.0879042560414587],
    [1.6373022505374089, -0.496, 1.118178591291593],
    [1.5816334515773336, 0.486, -0.8014002259130226],
    [1.5327272955573334, -0.494, -1.8377472331591371],
    [1.456590982288479, 0.462, 1.9691555430159102],
    [1.4555045321838544, -0.34, 1.2672170063174222],
    [1.3664577904374573, -0.334, -2.2152413150382553],
    [1.35541403717245, -0.402, -1.6840174233029301],
    [1.325820043505718, -0.356, 1.2065279902457209],
    [1.3192478803645662, -0.22, 2.7539287112872852],
    [1.3113948490170262, 0.256, 0.1465957603443097],
    [1.179307862980703, -0.434, -0.8680153091309171],
    [1.1584525233340635, -0.328, -2.8367200211641475],
    [1.1490898969995043, -0.41400000000000003, -1.5532738200472056],
    [1.1441538888184057, -0.468, -1.0055735437172089],
    [1.0562684832409592, -0.342, 1.9041485632436537],
    [0.9580828921364182, -0.258, -1.7600293095180397],
    [0.9216289245863719, 0.438, -0.3481803384188148],
    [0.8104692841217193, -0.426, -2.3968138486410226],
    [0.5698152727979012, -0.49, -0.4804836406019927],
    [0.4410929144166147, -0.396, 0.8949578114409901],
    [0.31360953216485377, 0.43, -2.460741547111953],
    [0.2586490601102764, -0.462, 0.8908666839877156],
];

export let data = data500;
export let dataLength = 500;

export default class CircleThing {

    constructor() {
        this.pathLength = 0;
        this.totalPathLength = 0;
        this.alpha = 1;

        this.circles = [];
        this.drawnPoints = [];

        for (let i = 0; i < data.length; i++) {
            let datum = data[i];
            let newCircle = new Circle(
                /* size= */
                datum[0] / dataLength,
                /* rotation= */
                datum[2],
                /* frequency= */
                datum[1]);
            if (i > 0) {
                newCircle.parent = this.circles[i - 1];
                newCircle.moveToParent();
            }
            this.totalPathLength += newCircle.length;
            this.circles.push(newCircle);
        }
    }

    getDrawPosition() {
        var remainingPathLength = this.pathLength;
        let circle;
        for (let i = 0; i < this.circles.length; i++) {
            circle = this.circles[i];
            remainingPathLength -= circle.length;
            if (remainingPathLength <= 0) {
                return circle.getDrawPosition(remainingPathLength + circle.length);
            }
        }
        return circle.end;
    }

    drawMore(length=5) {
        this.pathLength += length;
    }

    rotateAll(deltaT) {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].update(deltaT);
        }

    }

    // Add a draw point. Ignores how far the circles themselves are in the process of being drawn.
    addDrawPoint() {
        if (this.drawnPoints.length > dataLength) {
            return;
        }
        this.drawnPoints.push({
            x: this.circles[this.circles.length-1].endX,
            y: this.circles[this.circles.length-1].endY,
        });
    }

    reset() {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].reset();
        }
    }

    render(context, xOffset, yOffset, scale) {
        // Draw all the circles
        var remainingPathLength = this.pathLength;
        context.strokeStyle = 'black';
        context.globalAlpha = this.alpha;
        for (let i = 0; i < this.circles.length; i++) {
            var circle = this.circles[i];
            circle.renderAmt(context, xOffset, yOffset, scale, remainingPathLength);

            remainingPathLength -= circle.length;
            if (remainingPathLength < 0) {
                break;
            }
        }
        context.globalAlpha = 1;

        if (this.drawnPoints.length > 0) {
            context.beginPath();
            context.moveTo(
                scale * (this.drawnPoints[0].x + xOffset),
                scale * (this.drawnPoints[0].y + yOffset));
            for (let i = 1; i < this.drawnPoints.length; i++) {
                context.lineTo(
                    scale * (this.drawnPoints[i].x + xOffset),
                    scale * (this.drawnPoints[i].y + yOffset));
            }
            context.stroke();
        }
    }
}