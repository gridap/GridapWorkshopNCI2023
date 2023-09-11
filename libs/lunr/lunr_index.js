const LUNR_DATA = {"version":"2.3.9","fields":["t","b"],"fieldVectors":[["t/0",[0,1.115,1,0.793,2,0.793]],["b/0",[0,1.548,1,1.371,2,1.371,3,0.086,4,0.086,5,0.086,6,0.107,7,0.076,8,0.086,9,0.086,10,0.086,11,0.086,12,0.095,13,0.076,14,0.076,15,0.076,16,0.076,17,0.095,18,0.095,19,0.095,20,0.086,21,0.086,22,0.086,23,0.086,24,0.086,25,0.086,26,0.086,27,0.086,28,0.086,29,0.086,30,0.086,31,0.107,32,0.076,33,0.086,34,0.076,35,0.086,36,0.086,37,0.086,38,0.076,39,0.117,40,0.107,41,0.086,42,0.117,43,0.086,44,0.086,45,2.228,46,2.228,47,1.548,48,0.766,49,1.548,50,2.228,51,0.107,52,0.086,53,0.086,54,0.086,55,0.086,56,0.086,57,0.076,58,0.086,59,0.086,60,0.086,61,0.086]],["t/1",[38,0.077]],["b/1",[3,0.088,4,0.088,5,0.088,6,0.109,7,0.078,8,0.088,9,0.088,10,0.088,11,0.088,12,0.096,13,0.078,14,0.078,15,0.078,16,0.078,17,0.096,18,0.096,19,0.096,20,0.088,21,0.088,22,0.088,23,0.088,24,0.088,25,0.088,26,0.088,27,0.088,28,0.088,29,0.088,30,0.088,31,0.109,32,0.078,33,0.088,34,0.078,35,0.088,36,0.088,37,0.109,38,0.096,39,0.118,40,0.109,41,0.088,42,0.118,43,0.088,44,0.088,51,0.088,52,0.088,53,0.088,54,0.088,55,0.088,56,0.088,57,0.078,58,0.088,59,0.088,60,0.088,61,0.088]],["t/2",[34,0.077]],["b/2",[3,0.075,4,0.075,5,0.075,6,0.116,7,0.067,8,0.075,9,0.075,10,0.075,11,0.075,12,0.087,13,0.067,14,0.067,15,0.067,16,0.067,17,0.087,18,0.087,19,0.087,20,0.075,21,0.075,22,0.075,23,0.075,24,0.075,25,0.075,26,0.075,27,0.075,28,0.075,29,0.075,30,0.075,31,0.098,32,0.067,33,0.098,34,0.103,35,0.11,36,0.11,37,0.075,38,0.067,39,0.11,40,0.098,41,0.075,42,0.11,43,0.075,44,0.075,48,0.671,51,0.075,52,0.075,53,0.075,54,0.075,55,0.075,56,0.075,57,0.067,58,0.075,59,0.075,60,0.075,61,0.075,62,1.774,63,1.357,64,3.129,65,0.965,66,2.553,67,1.953,68,2.553,69,1.953,70,1.357,71,1.953,72,1.774,73,1.953,74,1.953,75,2.553,76,2.553,77,2.553,78,2.095,79,2.553,80,2.553,81,2.844,82,2.553,83,1.953,84,1.357,85,1.953,86,1.953,87,1.953,88,1.357,89,1.953,90,1.953,91,1.953,92,1.953,93,1.953]],["t/3",[12,0.032,13,0.032,14,0.032,15,0.032,16,0.032,17,0.032,18,0.032,19,0.032]],["b/3",[3,0.051,4,0.075,5,0.075,6,0.089,7,0.103,8,0.109,9,0.109,10,0.116,11,0.089,12,0.097,13,0.097,14,0.087,15,0.1,16,0.087,17,0.1,18,0.1,19,0.092,20,0.075,21,0.075,22,0.075,23,0.075,24,0.075,25,0.075,26,0.075,27,0.075,28,0.098,29,0.075,30,0.075,31,0.089,32,0.045,33,0.075,34,0.045,35,0.051,36,0.051,37,0.075,38,0.045,39,0.109,40,0.089,41,0.098,42,0.104,43,0.075,44,0.075,48,0.45,51,0.075,52,0.051,53,0.051,54,0.051,55,0.051,56,0.051,57,0.045,58,0.051,59,0.051,60,0.075,61,0.075,62,0.911,63,1.343,65,0.647,72,0.911,78,1.343,84,0.911,94,1.311,95,1.311,96,1.311,97,3.003,98,1.933,99,1.933,100,1.311,101,1.311,102,1.311,103,1.311,104,1.311,105,1.311,106,1.311,107,1.311,108,0.911,109,1.933,110,1.311,111,1.311,112,1.311,113,1.311,114,1.933,115,1.311,116,1.311,117,1.311,118,1.311,119,0.911,120,2.535,121,2.535,122,2.535,123,1.311,124,0.911,125,1.311,126,2.297,127,1.311,128,1.311,129,1.311,130,1.311,131,1.311,132,1.596,133,1.933,134,1.311,135,1.343,136,2.535,137,1.311,138,1.311,139,1.311,140,1.311,141,0.911,142,1.311,143,0.911,144,0.911,145,1.933,146,1.311,147,1.933,148,1.933,149,1.311,150,1.311,151,1.311,152,1.311,153,1.311,154,1.311,155,1.311,156,1.311,157,1.311,158,0.911,159,1.311,160,1.343,161,1.311,162,0.911,163,1.311,164,1.311,165,1.311,166,1.311,167,1.311,168,1.311,169,1.311,170,1.311,171,1.311,172,1.311,173,1.311,174,0.911,175,1.311,176,1.311,177,1.311,178,1.311,179,1.311,180,1.933,181,1.311,182,1.311,183,1.311,184,1.311,185,1.311,186,1.311,187,1.311,188,0.911,189,1.311,190,1.311,191,0.911,192,1.311,193,2.297,194,2.297,195,2.297,196,2.297,197,0.911,198,1.311,199,1.311,200,1.311,201,1.311,202,1.933,203,1.933,204,1.311,205,1.311,206,1.311,207,1.311,208,1.311]],["t/4",[32,0.077]],["b/4",[3,0.074,4,0.074,5,0.074,6,0.098,7,0.066,8,0.074,9,0.074,10,0.074,11,0.074,12,0.097,13,0.086,14,0.066,15,0.066,16,0.066,17,0.102,18,0.102,19,0.111,20,0.074,21,0.074,22,0.074,23,0.074,24,0.074,25,0.074,26,0.074,27,0.074,28,0.074,29,0.074,30,0.074,31,0.109,32,0.086,33,0.074,34,0.066,35,0.074,36,0.074,37,0.074,38,0.066,39,0.109,40,0.098,41,0.109,42,0.109,43,0.074,44,0.074,51,0.074,52,0.074,53,0.074,54,0.074,55,0.074,56,0.074,57,0.086,58,0.074,59,0.074,60,0.074,61,0.098,124,1.341,132,1.341,135,1.341,141,1.341,158,1.341,197,1.341,209,3.001,210,1.93,211,1.93,212,1.93,213,1.93,214,1.93,215,1.93,216,2.532,217,1.93,218,1.341,219,1.341,220,1.93,221,1.341,222,1.93,223,1.93,224,1.93,225,1.93,226,1.93,227,1.93,228,1.93,229,1.93,230,1.93,231,1.93,232,1.93,233,1.93,234,1.76,235,1.93,236,1.93,237,1.93,238,1.93,239,1.93,240,1.93,241,1.93,242,1.93,243,1.93,244,1.93,245,0.953,246,1.93,247,1.93]],["t/5",[7,0.055,245,0.793,248,1.605]],["b/5",[2,1.125,3,0.088,4,0.088,5,0.088,6,0.109,7,0.078,8,0.088,9,0.088,10,0.088,11,0.088,12,0.096,13,0.078,14,0.078,15,0.078,16,0.078,17,0.096,18,0.096,19,0.096,20,0.088,21,0.088,22,0.088,23,0.088,24,0.088,25,0.088,26,0.088,27,0.088,28,0.088,29,0.088,30,0.088,31,0.109,32,0.078,33,0.088,34,0.078,35,0.088,36,0.088,37,0.088,38,0.078,39,0.118,40,0.109,41,0.088,42,0.118,43,0.088,44,0.088,51,0.088,52,0.088,53,0.088,54,0.088,55,0.088,56,0.088,57,0.078,58,0.088,59,0.088,60,0.088,61,0.088,70,1.584,245,1.125,249,2.279]],["t/6",[57,0.064,250,1.303]],["b/6",[1,1.051,3,0.036,4,0.036,5,0.036,6,0.058,7,0.112,8,0.036,9,0.036,10,0.036,11,0.036,12,0.051,13,0.032,14,0.032,15,0.032,16,0.097,17,0.051,18,0.051,19,0.101,20,0.036,21,0.036,22,0.036,23,0.036,24,0.036,25,0.036,26,0.036,27,0.036,28,0.036,29,0.072,30,0.036,31,0.058,32,0.032,33,0.036,34,0.032,35,0.036,36,0.036,37,0.036,38,0.032,39,0.072,40,0.058,41,0.036,42,0.072,43,0.058,44,0.036,47,0.653,48,0.641,49,0.653,51,0.104,52,0.072,53,0.036,54,0.058,55,0.036,56,0.036,57,0.097,58,0.036,59,0.058,60,0.036,61,0.036,65,0.739,88,1.04,108,0.653,119,0.653,143,1.297,144,1.297,160,0.653,162,1.479,174,0.653,188,1.297,191,0.653,218,1.04,219,1.615,221,1.04,234,0.653,250,0.653,251,0.939,252,0.939,253,0.939,254,0.939,255,0.939,256,2.129,257,0.939,258,1.497,259,0.939,260,1.497,261,0.939,262,0.939,263,1.497,264,0.939,265,0.939,266,2.129,267,1.497,268,0.939,269,0.939,270,0.939,271,1.497,272,1.866,273,2.325,274,1.497,275,0.939,276,1.497,277,0.939,278,0.939,279,3.169,280,1.866,281,0.939,282,0.939,283,0.939,284,0.939,285,0.939,286,0.939,287,0.939,288,0.939,289,0.939,290,1.866,291,0.939,292,1.497,293,0.939,294,0.939,295,0.939,296,1.497,297,0.939,298,3.083,299,2.129,300,2.599,301,1.866,302,1.497,303,0.939,304,1.866,305,1.497,306,1.866,307,0.939,308,1.497,309,2.477,310,0.939,311,0.939,312,0.939,313,1.497,314,0.939,315,0.939,316,2.325,317,0.939,318,2.129,319,1.866,320,0.939,321,1.866,322,1.497,323,0.939,324,0.939,325,0.939,326,2.129,327,2.477,328,2.129,329,0.939,330,2.477,331,0.939,332,0.939,333,2.325,334,0.939,335,0.939,336,0.939,337,0.939,338,0.939,339,0.939,340,1.497,341,2.325,342,1.497,343,1.497,344,0.939,345,0.939,346,1.497,347,1.497,348,2.325,349,0.939,350,1.866,351,0.939,352,0.939,353,1.497,354,1.497,355,0.939,356,0.939,357,0.939,358,0.939,359,1.866,360,0.939,361,0.939,362,0.939,363,0.939,364,1.497,365,1.866,366,0.939,367,0.939,368,0.939,369,0.939,370,0.939,371,0.939,372,0.939,373,0.939,374,1.497,375,1.497,376,1.866,377,0.939,378,0.939,379,0.939,380,0.939,381,0.939,382,0.939,383,0.939,384,1.497,385,1.866,386,0.939,387,0.939,388,0.939,389,1.497,390,0.939,391,0.939,392,0.939,393,0.939,394,0.939,395,0.939,396,1.497,397,0.939,398,0.939,399,0.939,400,0.939,401,0.939,402,1.497,403,0.939,404,0.939,405,0.939,406,0.939,407,0.939,408,0.939,409,1.497,410,2.129,411,0.939,412,2.325,413,0.939,414,0.939,415,0.939,416,0.939,417,0.939,418,0.939,419,1.497,420,0.939,421,1.497,422,1.497,423,1.497,424,1.497,425,1.497,426,1.497,427,1.497,428,1.497,429,0.939,430,0.939,431,0.939,432,0.939,433,0.939,434,0.939,435,2.129,436,1.497,437,1.497,438,1.866,439,1.497,440,1.497,441,0.939,442,1.866,443,1.866,444,0.939,445,0.939,446,0.939,447,1.497,448,0.939,449,0.939,450,0.939,451,0.939,452,0.939,453,1.497,454,1.497,455,0.939,456,0.939,457,0.939,458,0.939,459,1.497,460,0.939,461,0.939,462,0.939,463,0.939,464,0.939,465,0.939]]],"invertedIndex":[["",{"_index":7,"t":{"5":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["04d.png",{"_index":432,"t":{},"b":{"6":{}}}],["1",{"_index":40,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["11",{"_index":56,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["2",{"_index":43,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["2023",{"_index":6,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["26th",{"_index":67,"t":{},"b":{"2":{}}}],["28",{"_index":3,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["28th",{"_index":100,"t":{},"b":{"3":{}}}],["29th",{"_index":4,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["3",{"_index":44,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["30",{"_index":431,"t":{},"b":{"6":{}}}],["404",{"_index":0,"t":{"0":{}},"b":{"0":{}}}],["50rem",{"_index":461,"t":{},"b":{"6":{}}}],["5th",{"_index":87,"t":{},"b":{"2":{}}}],["_layout/head",{"_index":456,"t":{},"b":{"6":{}}}],["_liter",{"_index":329,"t":{},"b":{"6":{}}}],["_web.jl",{"_index":350,"t":{},"b":{"6":{}}}],["abov",{"_index":90,"t":{},"b":{"2":{}}}],["abstract",{"_index":175,"t":{},"b":{"3":{}}}],["access",{"_index":254,"t":{},"b":{"6":{}}}],["accommod",{"_index":82,"t":{},"b":{"2":{}}}],["accomod",{"_index":86,"t":{},"b":{"2":{}}}],["acknowledg",{"_index":101,"t":{},"b":{"3":{}}}],["actual",{"_index":189,"t":{},"b":{"3":{}}}],["add",{"_index":271,"t":{},"b":{"6":{}}}],["address",{"_index":167,"t":{},"b":{"3":{}}}],["advanc",{"_index":408,"t":{},"b":{"6":{}}}],["alberto",{"_index":22,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["allow",{"_index":143,"t":{},"b":{"3":{},"6":{}}}],["allow=\"acceleromet",{"_index":289,"t":{},"b":{"6":{}}}],["allowfullscreen></ifram",{"_index":297,"t":{},"b":{"6":{}}}],["alt",{"_index":404,"t":{},"b":{"6":{}}}],["anim",{"_index":433,"t":{},"b":{"6":{}}}],["anim/anim.mp4",{"_index":440,"t":{},"b":{"6":{}}}],["anu",{"_index":99,"t":{},"b":{"3":{}}}],["appli",{"_index":64,"t":{},"b":{"2":{}}}],["applic",{"_index":78,"t":{},"b":{"2":{},"3":{}}}],["around",{"_index":373,"t":{},"b":{"6":{}}}],["art",{"_index":153,"t":{},"b":{"3":{}}}],["australia",{"_index":125,"t":{},"b":{"3":{}}}],["australian",{"_index":8,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["autoplay",{"_index":290,"t":{},"b":{"6":{}}}],["avail",{"_index":72,"t":{},"b":{"2":{},"3":{}}}],["background",{"_index":170,"t":{},"b":{"3":{}}}],["badia",{"_index":21,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["base",{"_index":160,"t":{},"b":{"3":{},"6":{}}}],["basic",{"_index":253,"t":{},"b":{"6":{}}}],["befor",{"_index":65,"t":{},"b":{"2":{},"3":{},"6":{}}}],["begin",{"_index":377,"t":{},"b":{"6":{}}}],["better",{"_index":74,"t":{},"b":{"2":{}}}],["block",{"_index":281,"t":{},"b":{"6":{}}}],["bodi",{"_index":457,"t":{},"b":{"6":{}}}],["book",{"_index":217,"t":{},"b":{"4":{}}}],["both",{"_index":356,"t":{},"b":{"6":{}}}],["box",{"_index":337,"t":{},"b":{"6":{}}}],["brief",{"_index":166,"t":{},"b":{"3":{}}}],["bring",{"_index":186,"t":{},"b":{"3":{}}}],["build",{"_index":310,"t":{},"b":{"6":{}}}],["built",{"_index":58,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["c",{"_index":421,"t":{},"b":{"6":{}}}],["canberra",{"_index":11,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["cecc",{"_index":207,"t":{},"b":{"3":{}}}],["celebr",{"_index":98,"t":{},"b":{"3":{}}}],["center",{"_index":435,"t":{},"b":{"6":{}}}],["chang",{"_index":352,"t":{},"b":{"6":{}}}],["cheatsheet",{"_index":209,"t":{},"b":{"4":{}}}],["choic",{"_index":181,"t":{},"b":{"3":{}}}],["clae",{"_index":225,"t":{},"b":{"4":{}}}],["click",{"_index":47,"t":{},"b":{"0":{},"6":{}}}],["clipboard",{"_index":291,"t":{},"b":{"6":{}}}],["cluster",{"_index":123,"t":{},"b":{"3":{}}}],["code",{"_index":299,"t":{},"b":{"6":{}}}],["colleg",{"_index":205,"t":{},"b":{"3":{}}}],["color",{"_index":462,"t":{},"b":{"6":{}}}],["combin",{"_index":177,"t":{},"b":{"3":{}}}],["command",{"_index":444,"t":{},"b":{"6":{}}}],["comment",{"_index":307,"t":{},"b":{"6":{}}}],["compar",{"_index":213,"t":{},"b":{"4":{}}}],["complementari",{"_index":233,"t":{},"b":{"4":{}}}],["complex",{"_index":146,"t":{},"b":{"3":{}}}],["comput",{"_index":121,"t":{},"b":{"3":{}}}],["construct",{"_index":95,"t":{},"b":{"3":{}}}],["contain",{"_index":306,"t":{},"b":{"6":{}}}],["content",{"_index":453,"t":{},"b":{"6":{}}}],["continu",{"_index":116,"t":{},"b":{"3":{}}}],["control",{"_index":438,"t":{},"b":{"6":{}}}],["convert",{"_index":418,"t":{},"b":{"6":{}}}],["copi",{"_index":277,"t":{},"b":{"6":{}}}],["correct",{"_index":354,"t":{},"b":{"6":{}}}],["correctli",{"_index":317,"t":{},"b":{"6":{}}}],["correspond",{"_index":378,"t":{},"b":{"6":{}}}],["cours",{"_index":234,"t":{},"b":{"4":{},"6":{}}}],["cover",{"_index":84,"t":{},"b":{"2":{},"3":{}}}],["creat",{"_index":326,"t":{},"b":{"6":{}}}],["css",{"_index":458,"t":{},"b":{"6":{}}}],["cultur",{"_index":114,"t":{},"b":{"3":{}}}],["cybernet",{"_index":206,"t":{},"b":{"3":{}}}],["day",{"_index":129,"t":{},"b":{"3":{}}}],["deadlin",{"_index":66,"t":{},"b":{"2":{}}}],["defin",{"_index":336,"t":{},"b":{"6":{}}}],["deploy",{"_index":162,"t":{},"b":{"3":{},"6":{}}}],["deploy_notebooks.jl",{"_index":343,"t":{},"b":{"6":{}}}],["descript",{"_index":127,"t":{},"b":{"3":{}}}],["detail",{"_index":322,"t":{},"b":{"6":{}}}],["differ",{"_index":179,"t":{},"b":{"3":{}}}],["differenti",{"_index":223,"t":{},"b":{"4":{}}}],["directli",{"_index":441,"t":{},"b":{"6":{}}}],["disabl",{"_index":323,"t":{},"b":{"6":{}}}],["discours",{"_index":241,"t":{},"b":{"4":{}}}],["discuss",{"_index":182,"t":{},"b":{"3":{}}}],["display",{"_index":325,"t":{},"b":{"6":{}}}],["distribut",{"_index":163,"t":{},"b":{"3":{}}}],["document",{"_index":251,"t":{},"b":{"6":{}}}],["done",{"_index":334,"t":{},"b":{"6":{}}}],["dr",{"_index":204,"t":{},"b":{"3":{}}}],["dure",{"_index":185,"t":{},"b":{"3":{}}}],["e.g",{"_index":359,"t":{},"b":{"6":{}}}],["earlier",{"_index":73,"t":{},"b":{"2":{}}}],["ecosystem",{"_index":134,"t":{},"b":{"3":{}}}],["edit",{"_index":52,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["effici",{"_index":154,"t":{},"b":{"3":{}}}],["element",{"_index":18,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["emb",{"_index":274,"t":{},"b":{"6":{}}}],["embed",{"_index":434,"t":{},"b":{"6":{}}}],["emphasi",{"_index":172,"t":{},"b":{"3":{}}}],["encc",{"_index":235,"t":{},"b":{"4":{}}}],["encrypt",{"_index":293,"t":{},"b":{"6":{}}}],["engin",{"_index":180,"t":{},"b":{"3":{}}}],["environ",{"_index":338,"t":{},"b":{"6":{}}}],["equat",{"_index":224,"t":{},"b":{"4":{}}}],["event",{"_index":37,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["execut",{"_index":267,"t":{},"b":{"6":{}}}],["exercis",{"_index":345,"t":{},"b":{"6":{}}}],["expens",{"_index":85,"t":{},"b":{"2":{}}}],["exploit",{"_index":155,"t":{},"b":{"3":{}}}],["export",{"_index":386,"t":{},"b":{"6":{}}}],["express",{"_index":140,"t":{},"b":{"3":{}}}],["extra",{"_index":231,"t":{},"b":{"4":{}}}],["f",{"_index":23,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["faculti",{"_index":203,"t":{},"b":{"3":{}}}],["fastrack",{"_index":210,"t":{},"b":{"4":{}}}],["featur",{"_index":133,"t":{},"b":{"3":{}}}],["ffmpeg",{"_index":416,"t":{},"b":{"6":{}}}],["figur",{"_index":348,"t":{},"b":{"6":{}}}],["file",{"_index":1,"t":{"0":{}},"b":{"0":{},"6":{}}}],["filenam",{"_index":381,"t":{},"b":{"6":{}}}],["fill",{"_index":93,"t":{},"b":{"2":{}}}],["finit",{"_index":17,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["first",{"_index":108,"t":{},"b":{"3":{},"6":{}}}],["flyer",{"_index":38,"t":{"1":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["folder",{"_index":330,"t":{},"b":{"6":{}}}],["follow",{"_index":188,"t":{},"b":{"3":{},"6":{}}}],["form",{"_index":89,"t":{},"b":{"2":{}}}],["found",{"_index":2,"t":{"0":{}},"b":{"0":{},"5":{}}}],["fragment",{"_index":394,"t":{},"b":{"6":{}}}],["frameborder=\"0",{"_index":288,"t":{},"b":{"6":{}}}],["framer",{"_index":430,"t":{},"b":{"6":{}}}],["francisco",{"_index":228,"t":{},"b":{"4":{}}}],["franklin",{"_index":256,"t":{},"b":{"6":{}}}],["franklin.jl",{"_index":59,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["fund",{"_index":83,"t":{},"b":{"2":{}}}],["further",{"_index":79,"t":{},"b":{"2":{}}}],["gadi",{"_index":246,"t":{},"b":{"4":{}}}],["gather",{"_index":184,"t":{},"b":{"3":{}}}],["gener",{"_index":409,"t":{},"b":{"6":{}}}],["gentl",{"_index":227,"t":{},"b":{"4":{}}}],["gif",{"_index":412,"t":{},"b":{"6":{}}}],["gif_loopcount_inf.gif",{"_index":447,"t":{},"b":{"6":{}}}],["gifsicl",{"_index":443,"t":{},"b":{"6":{}}}],["git",{"_index":262,"t":{},"b":{"6":{}}}],["given",{"_index":390,"t":{},"b":{"6":{}}}],["global",{"_index":452,"t":{},"b":{"6":{}}}],["go",{"_index":49,"t":{},"b":{"0":{},"6":{}}}],["govern",{"_index":137,"t":{},"b":{"3":{}}}],["grant",{"_index":34,"t":{"2":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["gridap",{"_index":13,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["gridap.jl",{"_index":237,"t":{},"b":{"4":{}}}],["gridapdistributed.jl",{"_index":238,"t":{},"b":{"4":{}}}],["group",{"_index":215,"t":{},"b":{"4":{}}}],["guid",{"_index":247,"t":{},"b":{"4":{}}}],["gyroscop",{"_index":295,"t":{},"b":{"6":{}}}],["hand",{"_index":130,"t":{},"b":{"3":{}}}],["height=\"315",{"_index":284,"t":{},"b":{"6":{}}}],["help",{"_index":243,"t":{},"b":{"4":{}}}],["here",{"_index":48,"t":{},"b":{"0":{},"2":{},"3":{},"6":{}}}],["highlight",{"_index":339,"t":{},"b":{"6":{}}}],["highlight.j",{"_index":270,"t":{},"b":{"6":{}}}],["hint",{"_index":365,"t":{},"b":{"6":{}}}],["histori",{"_index":118,"t":{},"b":{"3":{}}}],["hljs.inithighlightingonload();hljs.configure({tabreplac",{"_index":465,"t":{},"b":{"6":{}}}],["hold",{"_index":355,"t":{},"b":{"6":{}}}],["home",{"_index":50,"t":{},"b":{"0":{}}}],["hpc",{"_index":158,"t":{},"b":{"3":{},"4":{}}}],["html",{"_index":280,"t":{},"b":{"6":{}}}],["https://github.com/gridap/gridapworkshopnci2023",{"_index":198,"t":{},"b":{"3":{}}}],["https://gridap.github.io/gridapworkshopnci2023",{"_index":255,"t":{},"b":{"6":{}}}],["https://www.w3schools.com/colors/colors_picker.asp",{"_index":464,"t":{},"b":{"6":{}}}],["human",{"_index":117,"t":{},"b":{"3":{}}}],["ifram",{"_index":282,"t":{},"b":{"6":{}}}],["ijulia",{"_index":389,"t":{},"b":{"6":{}}}],["implement",{"_index":151,"t":{},"b":{"3":{}}}],["import",{"_index":362,"t":{},"b":{"6":{}}}],["incl::str",{"_index":357,"t":{},"b":{"6":{}}}],["incl=l2",{"_index":360,"t":{},"b":{"6":{}}}],["incl=lecture2",{"_index":361,"t":{},"b":{"6":{}}}],["includ",{"_index":333,"t":{},"b":{"6":{}}}],["input_anim.gif",{"_index":420,"t":{},"b":{"6":{}}}],["instal",{"_index":29,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["instead",{"_index":415,"t":{},"b":{"6":{}}}],["instruct",{"_index":30,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["integr",{"_index":312,"t":{},"b":{"6":{}}}],["interest",{"_index":62,"t":{},"b":{"2":{},"3":{}}}],["interfac",{"_index":142,"t":{},"b":{"3":{}}}],["introduct",{"_index":12,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["ipynb",{"_index":346,"t":{},"b":{"6":{}}}],["javier",{"_index":229,"t":{},"b":{"4":{}}}],["jl",{"_index":304,"t":{},"b":{"6":{}}}],["johnson",{"_index":226,"t":{},"b":{"4":{}}}],["jordi",{"_index":25,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["julia",{"_index":19,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["juliahub",{"_index":244,"t":{},"b":{"4":{}}}],["keyword",{"_index":366,"t":{},"b":{"6":{}}}],["land",{"_index":111,"t":{},"b":{"3":{}}}],["languag",{"_index":61,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["laptop",{"_index":187,"t":{},"b":{"3":{}}}],["larg",{"_index":156,"t":{},"b":{"3":{}}}],["last",{"_index":53,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["launch",{"_index":384,"t":{},"b":{"6":{}}}],["lectur",{"_index":218,"t":{},"b":{"4":{},"6":{}}}],["libx264",{"_index":422,"t":{},"b":{"6":{}}}],["limit",{"_index":69,"t":{},"b":{"2":{}}}],["line",{"_index":376,"t":{},"b":{"6":{}}}],["link",{"_index":276,"t":{},"b":{"6":{}}}],["list",{"_index":252,"t":{},"b":{"6":{}}}],["liter",{"_index":327,"t":{},"b":{"6":{}}}],["literate.jl",{"_index":301,"t":{},"b":{"6":{}}}],["literate.notebook(\"my_script.jl",{"_index":387,"t":{},"b":{"6":{}}}],["literate_md",{"_index":320,"t":{},"b":{"6":{}}}],["literate{/_literate/my_script.jl",{"_index":331,"t":{},"b":{"6":{}}}],["load",{"_index":385,"t":{},"b":{"6":{}}}],["local",{"_index":259,"t":{},"b":{"6":{}}}],["locat",{"_index":344,"t":{},"b":{"6":{}}}],["loop",{"_index":437,"t":{},"b":{"6":{}}}],["loop=3",{"_index":449,"t":{},"b":{"6":{}}}],["loopcount",{"_index":442,"t":{},"b":{"6":{}}}],["machin",{"_index":165,"t":{},"b":{"3":{}}}],["maco",{"_index":446,"t":{},"b":{"6":{}}}],["main",{"_index":132,"t":{},"b":{"3":{},"4":{}}}],["mainli",{"_index":173,"t":{},"b":{"3":{}}}],["make",{"_index":260,"t":{},"b":{"6":{}}}],["manyer",{"_index":26,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["markdown",{"_index":300,"t":{},"b":{"6":{}}}],["martin",{"_index":24,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["materi",{"_index":232,"t":{},"b":{"4":{}}}],["mathemat",{"_index":202,"t":{},"b":{"3":{}}}],["matlab",{"_index":211,"t":{},"b":{"4":{}}}],["max",{"_index":460,"t":{},"b":{"6":{}}}],["md",{"_index":341,"t":{},"b":{"6":{}}}],["mdstring",{"_index":315,"t":{},"b":{"6":{}}}],["media",{"_index":294,"t":{},"b":{"6":{}}}],["meet",{"_index":112,"t":{},"b":{"3":{}}}],["memo",{"_index":250,"t":{"6":{}},"b":{"6":{}}}],["memori",{"_index":164,"t":{},"b":{"3":{}}}],["method",{"_index":41,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["misc",{"_index":451,"t":{},"b":{"6":{}}}],["modifi",{"_index":54,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["monash",{"_index":126,"t":{},"b":{"3":{}}}],["move",{"_index":347,"t":{},"b":{"6":{}}}],["mp4",{"_index":410,"t":{},"b":{"6":{}}}],["mr",{"_index":208,"t":{},"b":{"3":{}}}],["multipl",{"_index":152,"t":{},"b":{"3":{}}}],["my_script.jl",{"_index":328,"t":{},"b":{"6":{}}}],["nation",{"_index":9,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["nativ",{"_index":311,"t":{},"b":{"6":{}}}],["nb",{"_index":395,"t":{},"b":{"6":{}}}],["nci",{"_index":124,"t":{},"b":{"3":{},"4":{}}}],["need",{"_index":266,"t":{},"b":{"6":{}}}],["new_gif_loopcount_3.gif",{"_index":450,"t":{},"b":{"6":{}}}],["new_gif_no_loopcount.gif",{"_index":448,"t":{},"b":{"6":{}}}],["ngambri",{"_index":105,"t":{},"b":{"3":{}}}],["ngunnaw",{"_index":104,"t":{},"b":{"3":{}}}],["nodej",{"_index":263,"t":{},"b":{"6":{}}}],["noeval",{"_index":324,"t":{},"b":{"6":{}}}],["notat",{"_index":150,"t":{},"b":{"3":{}}}],["note",{"_index":219,"t":{},"b":{"4":{},"6":{}}}],["notebook",{"_index":298,"t":{},"b":{"6":{}}}],["notebook(dir=\"/some/path",{"_index":392,"t":{},"b":{"6":{}}}],["notebook/figur",{"_index":349,"t":{},"b":{"6":{}}}],["nov",{"_index":68,"t":{},"b":{"2":{}}}],["novemb",{"_index":5,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["npm_cmd",{"_index":269,"t":{},"b":{"6":{}}}],["number",{"_index":70,"t":{},"b":{"2":{},"5":{}}}],["numer",{"_index":220,"t":{},"b":{"4":{}}}],["oldest",{"_index":115,"t":{},"b":{"3":{}}}],["on",{"_index":144,"t":{},"b":{"3":{},"6":{}}}],["onc",{"_index":75,"t":{},"b":{"2":{}}}],["open",{"_index":402,"t":{},"b":{"6":{}}}],["option",{"_index":91,"t":{},"b":{"2":{}}}],["otherwis",{"_index":371,"t":{},"b":{"6":{}}}],["out",{"_index":411,"t":{},"b":{"6":{}}}],["outcom",{"_index":77,"t":{},"b":{"2":{}}}],["outlin",{"_index":192,"t":{},"b":{"3":{}}}],["output",{"_index":369,"t":{},"b":{"6":{}}}],["output_anim.mp4",{"_index":428,"t":{},"b":{"6":{}}}],["outputdir=pwd",{"_index":388,"t":{},"b":{"6":{}}}],["packag",{"_index":135,"t":{},"b":{"3":{},"4":{}}}],["pad=ceil(iw/2)*2:ceil(ih/2)*2:color=whit",{"_index":426,"t":{},"b":{"6":{}}}],["page",{"_index":51,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["part",{"_index":39,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["partial",{"_index":222,"t":{},"b":{"4":{}}}],["particip",{"_index":63,"t":{},"b":{"2":{},"3":{}}}],["participant'",{"_index":183,"t":{},"b":{"3":{}}}],["past",{"_index":278,"t":{},"b":{"6":{}}}],["path",{"_index":391,"t":{},"b":{"6":{}}}],["pay",{"_index":102,"t":{},"b":{"3":{}}}],["pde",{"_index":15,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["peopl",{"_index":106,"t":{},"b":{"3":{}}}],["permit",{"_index":302,"t":{},"b":{"6":{}}}],["picker",{"_index":463,"t":{},"b":{"6":{}}}],["pictur",{"_index":296,"t":{},"b":{"6":{}}}],["pix_fmt",{"_index":423,"t":{},"b":{"6":{}}}],["place",{"_index":191,"t":{},"b":{"3":{},"6":{}}}],["player",{"_index":287,"t":{},"b":{"6":{}}}],["pleas",{"_index":46,"t":{},"b":{"0":{}}}],["plots.jl",{"_index":216,"t":{},"b":{"4":{}}}],["plugin",{"_index":401,"t":{},"b":{"6":{}}}],["png",{"_index":429,"t":{},"b":{"6":{}}}],["popul",{"_index":375,"t":{},"b":{"6":{}}}],["possibl",{"_index":363,"t":{},"b":{"6":{}}}],["pre",{"_index":335,"t":{},"b":{"6":{}}}],["prefer",{"_index":414,"t":{},"b":{"6":{}}}],["preprocess",{"_index":364,"t":{},"b":{"6":{}}}],["present",{"_index":174,"t":{},"b":{"3":{},"6":{}}}],["press",{"_index":403,"t":{},"b":{"6":{}}}],["previou",{"_index":169,"t":{},"b":{"3":{}}}],["problem",{"_index":136,"t":{},"b":{"3":{}}}],["process",{"_index":314,"t":{},"b":{"6":{}}}],["produc",{"_index":368,"t":{},"b":{"6":{}}}],["prof",{"_index":201,"t":{},"b":{"3":{}}}],["program",{"_index":60,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["pull",{"_index":261,"t":{},"b":{"6":{}}}],["push",{"_index":383,"t":{},"b":{"6":{}}}],["put",{"_index":455,"t":{},"b":{"6":{}}}],["python",{"_index":212,"t":{},"b":{"4":{}}}],["q&a",{"_index":242,"t":{},"b":{"4":{}}}],["quantecon",{"_index":214,"t":{},"b":{"4":{}}}],["r",{"_index":405,"t":{},"b":{"6":{}}}],["readi",{"_index":313,"t":{},"b":{"6":{}}}],["refer",{"_index":32,"t":{"4":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["region",{"_index":107,"t":{},"b":{"3":{}}}],["registr",{"_index":33,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["remov",{"_index":379,"t":{},"b":{"6":{}}}],["render",{"_index":316,"t":{},"b":{"6":{}}}],["repositori",{"_index":197,"t":{},"b":{"3":{},"4":{}}}],["request",{"_index":45,"t":{},"b":{"0":{}}}],["research",{"_index":35,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["resourc",{"_index":240,"t":{},"b":{"4":{}}}],["respect",{"_index":103,"t":{},"b":{"3":{}}}],["result",{"_index":249,"t":{},"b":{"5":{}}}],["revise.jl",{"_index":239,"t":{},"b":{"4":{}}}],["rise",{"_index":400,"t":{},"b":{"6":{}}}],["run",{"_index":342,"t":{},"b":{"6":{}}}],["run(`ffmpeg",{"_index":419,"t":{},"b":{"6":{}}}],["run(`sudo",{"_index":268,"t":{},"b":{"6":{}}}],["santiago",{"_index":20,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["saya",{"_index":230,"t":{},"b":{"4":{}}}],["scale",{"_index":157,"t":{},"b":{"3":{}}}],["school",{"_index":120,"t":{},"b":{"3":{}}}],["scienc",{"_index":122,"t":{},"b":{"3":{}}}],["script",{"_index":279,"t":{},"b":{"6":{}}}],["search",{"_index":245,"t":{"5":{}},"b":{"4":{},"5":{}}}],["seat",{"_index":71,"t":{},"b":{"2":{}}}],["second",{"_index":413,"t":{},"b":{"6":{}}}],["section",{"_index":92,"t":{},"b":{"2":{}}}],["see",{"_index":88,"t":{},"b":{"2":{},"6":{}}}],["septemb",{"_index":55,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["serve(clear=tru",{"_index":264,"t":{},"b":{"6":{}}}],["set",{"_index":318,"t":{},"b":{"6":{}}}],["sever",{"_index":161,"t":{},"b":{"3":{}}}],["share",{"_index":275,"t":{},"b":{"6":{}}}],["showcas",{"_index":131,"t":{},"b":{"3":{}}}],["simul",{"_index":14,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["singl",{"_index":303,"t":{},"b":{"6":{}}}],["slide",{"_index":309,"t":{},"b":{"6":{}}}],["slide/subslide/frag",{"_index":398,"t":{},"b":{"6":{}}}],["slide_typ",{"_index":397,"t":{},"b":{"6":{}}}],["slideshow",{"_index":396,"t":{},"b":{"6":{}}}],["softwar",{"_index":28,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["sol",{"_index":374,"t":{},"b":{"6":{}}}],["sol=tru",{"_index":367,"t":{},"b":{"6":{}}}],["solut",{"_index":221,"t":{},"b":{"4":{},"6":{}}}],["solv",{"_index":145,"t":{},"b":{"3":{}}}],["sourc",{"_index":305,"t":{},"b":{"6":{}}}],["spacebar",{"_index":407,"t":{},"b":{"6":{}}}],["specif",{"_index":358,"t":{},"b":{"6":{}}}],["src=\"./path",{"_index":439,"t":{},"b":{"6":{}}}],["src=\"https://www.youtube.com/embed/dvlm0w6lyey",{"_index":285,"t":{},"b":{"6":{}}}],["staff",{"_index":200,"t":{},"b":{"3":{}}}],["start",{"_index":406,"t":{},"b":{"6":{}}}],["state",{"_index":148,"t":{},"b":{"3":{}}}],["static",{"_index":257,"t":{},"b":{"6":{}}}],["step",{"_index":80,"t":{},"b":{"2":{}}}],["stript",{"_index":370,"t":{},"b":{"6":{}}}],["student",{"_index":36,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["style",{"_index":459,"t":{},"b":{"6":{}}}],["subslid",{"_index":393,"t":{},"b":{"6":{}}}],["supercomput",{"_index":159,"t":{},"b":{"3":{}}}],["support",{"_index":119,"t":{},"b":{"3":{},"6":{}}}],["sweden",{"_index":236,"t":{},"b":{"4":{}}}],["swiftli",{"_index":417,"t":{},"b":{"6":{}}}],["system",{"_index":147,"t":{},"b":{"3":{}}}],["take",{"_index":190,"t":{},"b":{"3":{}}}],["tba",{"_index":42,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["tba1",{"_index":193,"t":{},"b":{"3":{}}}],["tba2",{"_index":194,"t":{},"b":{"3":{}}}],["tba3",{"_index":195,"t":{},"b":{"3":{}}}],["tba4",{"_index":196,"t":{},"b":{"3":{}}}],["teach",{"_index":199,"t":{},"b":{"3":{}}}],["techniqu",{"_index":171,"t":{},"b":{"3":{}}}],["test",{"_index":258,"t":{},"b":{"6":{}}}],["time",{"_index":265,"t":{},"b":{"6":{}}}],["title=\"youtub",{"_index":286,"t":{},"b":{"6":{}}}],["tool",{"_index":445,"t":{},"b":{"6":{}}}],["tradit",{"_index":110,"t":{},"b":{"3":{}}}],["transform",{"_index":308,"t":{},"b":{"6":{}}}],["travel",{"_index":81,"t":{},"b":{"2":{}}}],["true",{"_index":321,"t":{},"b":{"6":{}}}],["tutori",{"_index":31,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["two",{"_index":128,"t":{},"b":{"3":{}}}],["under",{"_index":94,"t":{},"b":{"3":{}}}],["underli",{"_index":176,"t":{},"b":{"3":{}}}],["univers",{"_index":10,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["upon",{"_index":380,"t":{},"b":{"6":{}}}],["us",{"_index":16,"t":{"3":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["user",{"_index":141,"t":{},"b":{"3":{},"4":{}}}],["variabl",{"_index":319,"t":{},"b":{"6":{}}}],["varieti",{"_index":178,"t":{},"b":{"3":{}}}],["veri",{"_index":139,"t":{},"b":{"3":{}}}],["vf",{"_index":425,"t":{},"b":{"6":{}}}],["video",{"_index":273,"t":{},"b":{"6":{}}}],["view",{"_index":399,"t":{},"b":{"6":{}}}],["wait",{"_index":76,"t":{},"b":{"2":{}}}],["want",{"_index":332,"t":{},"b":{"6":{}}}],["warn",{"_index":340,"t":{},"b":{"6":{}}}],["way",{"_index":372,"t":{},"b":{"6":{}}}],["webpag",{"_index":96,"t":{},"b":{"3":{}}}],["websit",{"_index":57,"t":{"6":{}},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["website/_assets/literate_figur",{"_index":353,"t":{},"b":{"6":{}}}],["website/_liter",{"_index":351,"t":{},"b":{"6":{}}}],["website/lecturexy.md",{"_index":382,"t":{},"b":{"6":{}}}],["welcom",{"_index":27,"t":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}}}],["whiteboard",{"_index":149,"t":{},"b":{"3":{}}}],["whose",{"_index":109,"t":{},"b":{"3":{}}}],["width",{"_index":454,"t":{},"b":{"6":{}}}],["width=\"560",{"_index":283,"t":{},"b":{"6":{}}}],["width=\"80",{"_index":436,"t":{},"b":{"6":{}}}],["without",{"_index":168,"t":{},"b":{"3":{}}}],["work",{"_index":113,"t":{},"b":{"3":{}}}],["workshop",{"_index":97,"t":{},"b":{"3":{}}}],["write",{"_index":292,"t":{},"b":{"6":{}}}],["written",{"_index":138,"t":{},"b":{"3":{}}}],["y",{"_index":427,"t":{},"b":{"6":{}}}],["yourwebsit",{"_index":248,"t":{"5":{}},"b":{}}],["youtub",{"_index":272,"t":{},"b":{"6":{}}}],["yuv420p",{"_index":424,"t":{},"b":{"6":{}}}]],"pipeline":["stemmer"]};
const PREVIEW_LOOKUP = {"0":{"t":"404: File not found","l":"/../404.html"},"1":{"t":"Flyer","l":"/../flyer/index.html"},"2":{"t":"Grants","l":"/../grants/index.html"},"3":{"t":"Introduction to Gridap: Simulating PDEs using finite elements in Julia","l":"/../index.html"},"4":{"t":"References","l":"/../references/index.html"},"5":{"t":"Search ⋅ YourWebsite","l":"/../search/index.html"},"6":{"t":"website-memo","l":"/../website-admin-instructions/index.html"}};