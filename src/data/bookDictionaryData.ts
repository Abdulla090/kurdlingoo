/**
 * Book Dictionary Data - 10 Categories of Everyday Words & Sentences
 * Kurdish (Sorani) on the right, English on the left
 */

export interface DictionaryEntry {
    id: string;
    english: string;
    kurdish: string;
    pronunciation?: string;
    example?: {
        english: string;
        kurdish: string;
    };
}

export interface DictionaryCategory {
    id: string;
    name: {
        english: string;
        kurdish: string;
    };
    icon: string;
    color: string;
    gradient: string;
    entries: DictionaryEntry[];
}

export const bookDictionaryData: DictionaryCategory[] = [
    // 1. Greetings & Introductions
    {
        id: 'greetings',
        name: { english: 'Greetings & Introductions', kurdish: 'سڵاو و ناساندن' },
        icon: 'Hand',
        color: '#58cc02',
        gradient: 'linear-gradient(135deg, #58cc02 0%, #46a302 100%)',
        entries: [
            { id: 'g1', english: 'Hello', kurdish: 'سڵاو', pronunciation: 'Slaw' },
            { id: 'g2', english: 'Good morning', kurdish: 'بەیانی باش', pronunciation: 'Bayani bash' },
            { id: 'g3', english: 'Good evening', kurdish: 'ئێوارە باش', pronunciation: 'Ewara bash' },
            { id: 'g4', english: 'Good night', kurdish: 'شەو باش', pronunciation: 'Shaw bash' },
            { id: 'g5', english: 'How are you?', kurdish: 'چۆنی؟', pronunciation: 'Choni?' },
            { id: 'g6', english: "I'm fine, thank you", kurdish: 'باشم، سوپاس', pronunciation: 'Bashim, supas' },
            { id: 'g7', english: 'What is your name?', kurdish: 'ناوت چییە؟', pronunciation: 'Nawt chiya?' },
            { id: 'g8', english: 'My name is...', kurdish: 'ناوم...', pronunciation: 'Nawm...' },
            { id: 'g9', english: 'Nice to meet you', kurdish: 'خۆشحاڵم بە ناسینت', pronunciation: 'Khoshhalm ba nasint' },
            { id: 'g10', english: 'Goodbye', kurdish: 'خوا حافیز', pronunciation: 'Khwa hafiz' },
            { id: 'g11', english: 'See you later', kurdish: 'دواتر دەتبینم', pronunciation: 'Dwatr datbinim' },
            { id: 'g12', english: 'Welcome', kurdish: 'بەخێربێیت', pronunciation: 'Ba kher beit' },
            { id: 'g13', english: 'Please', kurdish: 'تکایە', pronunciation: 'Tikaya' },
            { id: 'g14', english: 'Thank you', kurdish: 'سوپاس', pronunciation: 'Supas' },
            { id: 'g15', english: "You're welcome", kurdish: 'شایانی نییە', pronunciation: 'Shayani niya' },
        ]
    },

    // 2. Food & Dining
    {
        id: 'food',
        name: { english: 'Food & Dining', kurdish: 'خواردن و خواردنگە' },
        icon: 'UtensilsCrossed',
        color: '#ff9600',
        gradient: 'linear-gradient(135deg, #ff9600 0%, #e08600 100%)',
        entries: [
            { id: 'f1', english: 'I am hungry', kurdish: 'برسیمە', pronunciation: 'Brsima' },
            { id: 'f2', english: 'I am thirsty', kurdish: 'تینومە', pronunciation: 'Tinuma' },
            { id: 'f3', english: 'Water', kurdish: 'ئاو', pronunciation: 'Aw' },
            { id: 'f4', english: 'Bread', kurdish: 'نان', pronunciation: 'Nan' },
            { id: 'f5', english: 'Rice', kurdish: 'برنج', pronunciation: 'Birnj' },
            { id: 'f6', english: 'Meat', kurdish: 'گۆشت', pronunciation: 'Gosht' },
            { id: 'f7', english: 'Chicken', kurdish: 'مریشک', pronunciation: 'Mrishk' },
            { id: 'f8', english: 'Fish', kurdish: 'ماسی', pronunciation: 'Masi' },
            { id: 'f9', english: 'Vegetables', kurdish: 'سەوزە', pronunciation: 'Sawza' },
            { id: 'f10', english: 'Fruit', kurdish: 'میوە', pronunciation: 'Miwa' },
            { id: 'f11', english: 'Tea', kurdish: 'چا', pronunciation: 'Cha' },
            { id: 'f12', english: 'Coffee', kurdish: 'قاوە', pronunciation: 'Qawa' },
            { id: 'f13', english: 'The bill, please', kurdish: 'تکایە حیسابەکە', pronunciation: 'Tikaya hisabaka' },
            { id: 'f14', english: 'Delicious!', kurdish: 'بەتام!', pronunciation: 'Batam!' },
            { id: 'f15', english: 'I would like...', kurdish: 'دەمەوێت...', pronunciation: 'Damawet...' },
        ]
    },

    // 3. Shopping & Money
    {
        id: 'shopping',
        name: { english: 'Shopping & Money', kurdish: 'کڕین و پارە' },
        icon: 'ShoppingCart',
        color: '#ce82ff',
        gradient: 'linear-gradient(135deg, #ce82ff 0%, #a562cc 100%)',
        entries: [
            { id: 's1', english: 'How much is this?', kurdish: 'ئەمە چەندە؟', pronunciation: 'Ama chanda?' },
            { id: 's2', english: 'Too expensive', kurdish: 'زۆر گرانە', pronunciation: 'Zor grana' },
            { id: 's3', english: 'Cheap', kurdish: 'هەرزان', pronunciation: 'Harzan' },
            { id: 's4', english: 'Money', kurdish: 'پارە', pronunciation: 'Para' },
            { id: 's5', english: 'Cash', kurdish: 'نەقد', pronunciation: 'Naqd' },
            { id: 's6', english: 'Credit card', kurdish: 'کارتی بانکی', pronunciation: 'Karti banki' },
            { id: 's7', english: 'I want to buy', kurdish: 'دەمەوێت بکڕم', pronunciation: 'Damawet bikrim' },
            { id: 's8', english: 'Do you have...?', kurdish: 'ئایا... هەیە؟', pronunciation: 'Aya... haya?' },
            { id: 's9', english: 'Size', kurdish: 'قەبارە', pronunciation: 'Qabara' },
            { id: 's10', english: 'Color', kurdish: 'ڕەنگ', pronunciation: 'Rang' },
            { id: 's11', english: 'Big', kurdish: 'گەورە', pronunciation: 'Gawra' },
            { id: 's12', english: 'Small', kurdish: 'بچووک', pronunciation: 'Bchuk' },
            { id: 's13', english: 'Shop/Store', kurdish: 'دوکان', pronunciation: 'Dukan' },
            { id: 's14', english: 'Market', kurdish: 'بازاڕ', pronunciation: 'Bazar' },
            { id: 's15', english: 'Receipt', kurdish: 'پسوولە', pronunciation: 'Psula' },
        ]
    },

    // 4. Transportation & Directions
    {
        id: 'transport',
        name: { english: 'Transportation & Directions', kurdish: 'گواستنەوە و ئاراستە' },
        icon: 'Car',
        color: '#1cb0f6',
        gradient: 'linear-gradient(135deg, #1cb0f6 0%, #118cc0 100%)',
        entries: [
            { id: 't1', english: 'Where is...?', kurdish: 'لەکوێیە...؟', pronunciation: 'La kweya...?' },
            { id: 't2', english: 'Turn left', kurdish: 'بچۆ بەر چەپ', pronunciation: 'Bcho bar chap' },
            { id: 't3', english: 'Turn right', kurdish: 'بچۆ بەر ڕاست', pronunciation: 'Bcho bar rast' },
            { id: 't4', english: 'Go straight', kurdish: 'ڕاستەوخۆ بڕۆ', pronunciation: 'Rastawkho bro' },
            { id: 't5', english: 'Stop here', kurdish: 'لێرە وەستە', pronunciation: 'Lera wasta' },
            { id: 't6', english: 'Car', kurdish: 'ئۆتۆمبێل', pronunciation: 'Otombel' },
            { id: 't7', english: 'Taxi', kurdish: 'تاکسی', pronunciation: 'Taksi' },
            { id: 't8', english: 'Bus', kurdish: 'پاس', pronunciation: 'Pas' },
            { id: 't9', english: 'Airport', kurdish: 'فڕۆکەخانە', pronunciation: 'Frokakhana' },
            { id: 't10', english: 'Train station', kurdish: 'وێستگەی شەمەندەفەر', pronunciation: 'Westgay shamandafar' },
            { id: 't11', english: 'Near', kurdish: 'نزیک', pronunciation: 'Nzik' },
            { id: 't12', english: 'Far', kurdish: 'دوور', pronunciation: 'Dur' },
            { id: 't13', english: 'Street', kurdish: 'شەقام', pronunciation: 'Shaqam' },
            { id: 't14', english: 'Address', kurdish: 'ناونیشان', pronunciation: 'Nawnishan' },
            { id: 't15', english: 'Map', kurdish: 'نەخشە', pronunciation: 'Nakhsha' },
        ]
    },

    // 5. Family & Relationships
    {
        id: 'family',
        name: { english: 'Family & Relationships', kurdish: 'خێزان و پەیوەندی' },
        icon: 'Users',
        color: '#ff4b4b',
        gradient: 'linear-gradient(135deg, #ff4b4b 0%, #d52222 100%)',
        entries: [
            { id: 'fam1', english: 'Mother', kurdish: 'دایک', pronunciation: 'Dayk' },
            { id: 'fam2', english: 'Father', kurdish: 'باوک', pronunciation: 'Bawk' },
            { id: 'fam3', english: 'Brother', kurdish: 'برا', pronunciation: 'Bra' },
            { id: 'fam4', english: 'Sister', kurdish: 'خوشک', pronunciation: 'Khushk' },
            { id: 'fam5', english: 'Son', kurdish: 'کوڕ', pronunciation: 'Kur' },
            { id: 'fam6', english: 'Daughter', kurdish: 'کچ', pronunciation: 'Kch' },
            { id: 'fam7', english: 'Grandfather', kurdish: 'باپیر', pronunciation: 'Bapir' },
            { id: 'fam8', english: 'Grandmother', kurdish: 'داپیر', pronunciation: 'Dapir' },
            { id: 'fam9', english: 'Husband', kurdish: 'مێرد', pronunciation: 'Merd' },
            { id: 'fam10', english: 'Wife', kurdish: 'ژن', pronunciation: 'Zhin' },
            { id: 'fam11', english: 'Friend', kurdish: 'هاوڕێ', pronunciation: 'Hawre' },
            { id: 'fam12', english: 'Child', kurdish: 'منداڵ', pronunciation: 'Mindal' },
            { id: 'fam13', english: 'Baby', kurdish: 'ساوا', pronunciation: 'Sawa' },
            { id: 'fam14', english: 'Uncle', kurdish: 'مام/خاڵ', pronunciation: 'Mam/Khal' },
            { id: 'fam15', english: 'Aunt', kurdish: 'پوور/خاڵۆژن', pronunciation: 'Pur/Khalozhin' },
        ]
    },

    // 6. Work & Professions
    {
        id: 'work',
        name: { english: 'Work & Professions', kurdish: 'کار و پیشە' },
        icon: 'Briefcase',
        color: '#4a5568',
        gradient: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
        entries: [
            { id: 'w1', english: 'What is your job?', kurdish: 'کارت چییە؟', pronunciation: 'Kart chiya?' },
            { id: 'w2', english: 'I work as a...', kurdish: 'من کار دەکەم وەک...', pronunciation: 'Min kar dakam wak...' },
            { id: 'w3', english: 'Doctor', kurdish: 'پزیشک', pronunciation: 'Pzishk' },
            { id: 'w4', english: 'Teacher', kurdish: 'مامۆستا', pronunciation: 'Mamosta' },
            { id: 'w5', english: 'Engineer', kurdish: 'ئەندازیار', pronunciation: 'Andazyar' },
            { id: 'w6', english: 'Driver', kurdish: 'شۆفێر', pronunciation: 'Shofer' },
            { id: 'w7', english: 'Lawyer', kurdish: 'پارێزەر', pronunciation: 'Parezar' },
            { id: 'w8', english: 'Student', kurdish: 'خوێندکار', pronunciation: 'Khwendkar' },
            { id: 'w9', english: 'Office', kurdish: 'ئۆفیس', pronunciation: 'Ofis' },
            { id: 'w10', english: 'Company', kurdish: 'کۆمپانیا', pronunciation: 'Kompanya' },
            { id: 'w11', english: 'Salary', kurdish: 'مووچە', pronunciation: 'Mucha' },
            { id: 'w12', english: 'Meeting', kurdish: 'کۆبوونەوە', pronunciation: 'Kobunawa' },
            { id: 'w13', english: 'Boss', kurdish: 'بەڕێوەبەر', pronunciation: 'Barewaber' },
            { id: 'w14', english: 'Employee', kurdish: 'کارمەند', pronunciation: 'Karmand' },
            { id: 'w15', english: 'Business', kurdish: 'بازرگانی', pronunciation: 'Bazrgani' },
        ]
    },

    // 7. Health & Emergencies
    {
        id: 'health',
        name: { english: 'Health & Emergencies', kurdish: 'تەندروستی و فریاکەوتن' },
        icon: 'Heart',
        color: '#e53e3e',
        gradient: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
        entries: [
            { id: 'h1', english: 'Help!', kurdish: 'هاوار!', pronunciation: 'Hawar!' },
            { id: 'h2', english: 'I need a doctor', kurdish: 'پێویستم بە پزیشکە', pronunciation: 'Pewistm ba pzishka' },
            { id: 'h3', english: 'Hospital', kurdish: 'نەخۆشخانە', pronunciation: 'Nakhoshkhana' },
            { id: 'h4', english: 'Pharmacy', kurdish: 'دەرمانخانە', pronunciation: 'Darmankhana' },
            { id: 'h5', english: 'I am sick', kurdish: 'نەخۆشم', pronunciation: 'Nakhoshm' },
            { id: 'h6', english: 'Pain', kurdish: 'ئازار', pronunciation: 'Azar' },
            { id: 'h7', english: 'Headache', kurdish: 'سەرێشە', pronunciation: 'Saresha' },
            { id: 'h8', english: 'Fever', kurdish: 'تا', pronunciation: 'Ta' },
            { id: 'h9', english: 'Medicine', kurdish: 'دەرمان', pronunciation: 'Darman' },
            { id: 'h10', english: 'Ambulance', kurdish: 'ئەمبولانس', pronunciation: 'Ambulans' },
            { id: 'h11', english: 'Emergency', kurdish: 'فریاکەوتن', pronunciation: 'Fryakawtn' },
            { id: 'h12', english: 'Police', kurdish: 'پۆلیس', pronunciation: 'Polis' },
            { id: 'h13', english: 'Fire', kurdish: 'ئاگر', pronunciation: 'Agr' },
            { id: 'h14', english: 'Allergy', kurdish: 'هەستیاری', pronunciation: 'Hastyari' },
            { id: 'h15', english: 'Insurance', kurdish: 'بیمە', pronunciation: 'Bima' },
        ]
    },

    // 8. Home & Daily Life
    {
        id: 'home',
        name: { english: 'Home & Daily Life', kurdish: 'ماڵ و ژیانی ڕۆژانە' },
        icon: 'Home',
        color: '#38b2ac',
        gradient: 'linear-gradient(135deg, #38b2ac 0%, #2c7a7b 100%)',
        entries: [
            { id: 'ho1', english: 'House', kurdish: 'خانوو', pronunciation: 'Khanu' },
            { id: 'ho2', english: 'Room', kurdish: 'ژوور', pronunciation: 'Zhur' },
            { id: 'ho3', english: 'Kitchen', kurdish: 'چێشتخانە', pronunciation: 'Cheshtkhana' },
            { id: 'ho4', english: 'Bathroom', kurdish: 'حەمام', pronunciation: 'Hamam' },
            { id: 'ho5', english: 'Bedroom', kurdish: 'ژووری خەوتن', pronunciation: 'Zhuri khawtn' },
            { id: 'ho6', english: 'Door', kurdish: 'دەرگا', pronunciation: 'Darga' },
            { id: 'ho7', english: 'Window', kurdish: 'پەنجەرە', pronunciation: 'Panjara' },
            { id: 'ho8', english: 'Table', kurdish: 'مێز', pronunciation: 'Mez' },
            { id: 'ho9', english: 'Chair', kurdish: 'کورسی', pronunciation: 'Kursi' },
            { id: 'ho10', english: 'Bed', kurdish: 'جێخەو', pronunciation: 'Jekhaw' },
            { id: 'ho11', english: 'Key', kurdish: 'کلیل', pronunciation: 'Klil' },
            { id: 'ho12', english: 'Clean', kurdish: 'پاک', pronunciation: 'Pak' },
            { id: 'ho13', english: 'Dirty', kurdish: 'پیس', pronunciation: 'Pis' },
            { id: 'ho14', english: 'Sleep', kurdish: 'خەوتن', pronunciation: 'Khawtn' },
            { id: 'ho15', english: 'Wake up', kurdish: 'هەستان', pronunciation: 'Hastan' },
        ]
    },

    // 9. Emotions & Feelings
    {
        id: 'emotions',
        name: { english: 'Emotions & Feelings', kurdish: 'هەست و سۆز' },
        icon: 'Smile',
        color: '#ed8936',
        gradient: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
        entries: [
            { id: 'e1', english: 'Happy', kurdish: 'دڵخۆش', pronunciation: 'Dilkhosh' },
            { id: 'e2', english: 'Sad', kurdish: 'دڵتەنگ', pronunciation: 'Diltang' },
            { id: 'e3', english: 'Angry', kurdish: 'تووڕە', pronunciation: 'Tura' },
            { id: 'e4', english: 'Tired', kurdish: 'ماندوو', pronunciation: 'Mandu' },
            { id: 'e5', english: 'Excited', kurdish: 'بەپەرۆش', pronunciation: 'Baparosh' },
            { id: 'e6', english: 'Scared', kurdish: 'ترسیو', pronunciation: 'Trsiu' },
            { id: 'e7', english: 'Surprised', kurdish: 'سەرسام', pronunciation: 'Sarsam' },
            { id: 'e8', english: 'Love', kurdish: 'خۆشەویستی', pronunciation: 'Khoshawisti' },
            { id: 'e9', english: 'I love you', kurdish: 'خۆشمەوێیت', pronunciation: 'Khoshm awet' },
            { id: 'e10', english: 'Worried', kurdish: 'نیگەران', pronunciation: 'Nigaran' },
            { id: 'e11', english: 'Proud', kurdish: 'شانازی', pronunciation: 'Shanazi' },
            { id: 'e12', english: 'Nervous', kurdish: 'خەمبار', pronunciation: 'Khambar' },
            { id: 'e13', english: 'Calm', kurdish: 'ئارام', pronunciation: 'Aram' },
            { id: 'e14', english: 'Bored', kurdish: 'بێزار', pronunciation: 'Bezar' },
            { id: 'e15', english: 'Grateful', kurdish: 'سوپاسگوزار', pronunciation: 'Supasguzar' },
        ]
    },

    // 10. Time & Weather
    {
        id: 'time',
        name: { english: 'Time & Weather', kurdish: 'کات و کەشوهەوا' },
        icon: 'Clock',
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        entries: [
            { id: 'ti1', english: 'What time is it?', kurdish: 'کاتژمێر چەندە؟', pronunciation: 'Katzhmer chanda?' },
            { id: 'ti2', english: 'Today', kurdish: 'ئەمڕۆ', pronunciation: 'Amro' },
            { id: 'ti3', english: 'Tomorrow', kurdish: 'سبەینێ', pronunciation: 'Sbene' },
            { id: 'ti4', english: 'Yesterday', kurdish: 'دوێنێ', pronunciation: 'Dwene' },
            { id: 'ti5', english: 'Morning', kurdish: 'بەیانی', pronunciation: 'Bayani' },
            { id: 'ti6', english: 'Evening', kurdish: 'ئێوارە', pronunciation: 'Ewara' },
            { id: 'ti7', english: 'Night', kurdish: 'شەو', pronunciation: 'Shaw' },
            { id: 'ti8', english: 'Week', kurdish: 'هەفتە', pronunciation: 'Hafta' },
            { id: 'ti9', english: 'Month', kurdish: 'مانگ', pronunciation: 'Mang' },
            { id: 'ti10', english: 'Year', kurdish: 'ساڵ', pronunciation: 'Sal' },
            { id: 'ti11', english: 'Hot', kurdish: 'گەرم', pronunciation: 'Garm' },
            { id: 'ti12', english: 'Cold', kurdish: 'سارد', pronunciation: 'Sard' },
            { id: 'ti13', english: 'Rain', kurdish: 'باران', pronunciation: 'Baran' },
            { id: 'ti14', english: 'Snow', kurdish: 'بەفر', pronunciation: 'Bafr' },
            { id: 'ti15', english: 'Sunny', kurdish: 'خۆرەتاو', pronunciation: 'Khorataw' },
        ]
    }
];

export default bookDictionaryData;
