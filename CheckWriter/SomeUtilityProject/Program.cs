﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SomeUtilityProject
{
    class Program
    {
        static void Main(string[] args)
        {
            var isoCodes = getIsoCodes();

            StringBuilder javascriptCodeBuilder = new StringBuilder();
            var results = isoCodes.Split("\n\r".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            foreach (var item in results)
            {
                if (item.Length < 5) continue;
                var currentRecord = item.Split(" ".ToCharArray());

                if (currentRecord.Length == 2 || currentRecord.Length == 3)
                {
                    javascriptCodeBuilder.Append("{ ");
                    javascriptCodeBuilder.Append("\"" + currentRecord[1] + "\"");
                    javascriptCodeBuilder.Append(" : ");
                    javascriptCodeBuilder.Append("\"" + currentRecord[0] + "\"");
                    javascriptCodeBuilder.Append("} ,");
                }
            }


            var outcome = javascriptCodeBuilder.ToString();
        }

        private static string getIsoCodes()
        {
            return 
@"
Abkhazian ab 
Afar aa 
Afrikaans af 
Albanian sq 
Amharic am 
Arabic ar 
Aragonese an 
Armenian hy 
Assamese as 
Aymara ay 
Azerbaijani az 
Bashkir ba 
Basque eu 
Bengali (Bangla) bn 
Bhutani dz 
Bihari bh 
Bislama bi 
Breton br 
Bulgarian bg 
Burmese my 
Byelorussian (Belarusian) be 
Cambodian km 
Catalan ca 
Cherokee   
Chewa   
Chinese zh 
Chinese (Simplified) zh-Hans 
Chinese (Traditional) zh-Hant 
Corsican co 
Croatian hr 
Czech cs 
Danish da 
Divehi   
Dutch nl 
Edo   
English en 
Esperanto eo 
Estonian et 
Faeroese fo 
Farsi fa 
Fiji fj 
Finnish fi 
Flemish   
French fr 
Frisian fy 
Fulfulde   
Galician gl 
Gaelic (Scottish) gd 
Gaelic (Manx) gv 
Georgian ka 
German de 
Greek el 
Greenlandic kl 
Guarani gn 
Gujarati gu 
Haitian Creole ht 
Hausa ha 
Hawaiian   
Hebrew he, iw 
Hindi hi 
Hungarian hu 
Ibibio   
Icelandic is 
Ido io 
Igbo   
Indonesian id, in 
Interlingua ia 
Interlingue ie 
Inuktitut iu 
Inupiak ik 
Irish ga 
Italian it 
Japanese ja 
Javanese jv 
Kannada kn 
Kanuri   
Kashmiri ks 
Kazakh kk 
Kinyarwanda (Ruanda) rw 
Kirghiz ky 
Kirundi (Rundi) rn 
Konkani   
Korean ko 
Kurdish ku 
Laothian lo 
Latin la 
Latvian (Lettish) lv 
Limburgish ( Limburger) li 
Lingala ln 
Lithuanian lt 
Macedonian mk 
Malagasy mg 
Malay ms 
Malayalam ml 
Maltese mt 
Maori mi 
Marathi mr 
Moldavian mo 
Mongolian mn 
Nauru na 
Nepali ne 
Norwegian no 
Occitan oc 
Oriya or 
Oromo (Afaan Oromo) om 
Papiamentu   
Pashto (Pushto) ps 
Polish pl 
Portuguese pt 
Punjabi pa 
Quechua qu 
Rhaeto-Romance rm 
Romanian ro 
Russian ru 
Sami (Lappish)   
Samoan sm 
Sangro sg 
Sanskrit sa 
Serbian sr 
Serbo-Croatian sh 
Sesotho st 
Setswana tn 
Shona sn 
Sichuan Yi ii 
Sindhi sd 
Sinhalese si 
Siswati ss 
Slovak sk 
Slovenian sl 
Somali so 
Spanish es 
Sundanese su 
Swahili (Kiswahili) sw 
Swedish sv 
Syriac   
Tagalog tl 
Tajik tg 
Tamazight   
Tamil ta 
Tatar tt 
Telugu te 
Thai th 
Tibetan bo 
Tigrinya ti 
Tonga to 
Tsonga ts 
Turkish tr 
Turkmen tk 
Twi tw 
Uighur ug 
Ukrainian uk 
Urdu ur 
Uzbek uz 
Venda   
Vietnamese vi 
Volap�k vo 
Wallon wa 
Welsh cy 
Wolof wo 
Xhosa xh 
Yi   
Yiddish yi, ji 
Yoruba yo 
Zulu zu 


";
        }
    }
}
