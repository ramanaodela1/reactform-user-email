const appConstants = {
  emptyLat: 'Please Enter Lattitude.',
  emptyLng: 'Please Enter Longitude.',
  latPlaceholder: '78.347837',
  lngPlaceholder: '72.83478',
  passGenerateErr: 'Unable to generate the Wallet Pass.',
  storeName: 'PopcornApps',
  browserSettingErr: 'Please switch on your browser location setting.',
  saveSessionErr: 'Unable to save session.',
  iphone: 'iphone',
  android: 'android',
  cookieName: 'data',
  sessionCookie: 'sessionId',
  storeId: 'storeId',
  wishlistData: 'wishlistData',
  journeyStage: 'journeyStage',
  journeyCompleted: 'journeyCompleted',
  notOnDisplay: 'notOnDisplay',
  busyDevices: 'busyDevices',
  changeStatusId: 'changeStatusId',
  busyToAvailDevices:'busyToAvailDevices',
  timeoutSpan: 60000,
  latKey: 'lat',
  lngKey: 'lng',
  retailer: 'contoso',
  header: {
    "alg": "HS256",
    "typ": "JWT"
  },
  priceRange: {
    min: 500,
    max: 2500,
  },
  features:[
    {id:"hellowindows", value: 'Windows Hello', image: '/images/icons/ic_features_windowshello.svg', selected: false},
    //{id:"cortana", value: 'Cortana', image: '/images/icons/ic_features_cortana.svg', selected: false},
    {id:"windowsInk", value: 'Windows Ink', image: '/images/icons/ic_features_digitalpen.svg', selected: false},
    {id:"cortana", value: 'Cortana', image: '/images/icons/ic_features_cortana.svg', selected: false}
  ],
  ramSizes:[
    {id: '4', size: '4', 'type': 'GB', selected: false},
    {id: '8', size: '8', 'type': 'GB', selected: false},
    {id: '16', size: '16', 'type': 'GB', selected: false},
  ],
  proccersList: [
    {id: 'i5', size: 'i5', 'type': 'Intel Core', selected: false},
    {id: 'i7', size: 'i7', 'type': 'Intel Core', selected: false},
    {id: 'm3', size: 'm3', 'type': 'Intel Core', selected: false},
  ],
  storageSizes: [
    {id: '256', size: '256', 'type': 'GB', selected: false},
    {id: '512', size: '512', 'type': 'GB', selected: false},
    {id: '1000', size: '1', 'type': 'TB', selected: false},
  ],
  secret: "HYb98KLp751He73qA1ZvS",
  visited:"visited",
  dev_instrument_key: 'ddf235d8-8e4d-44cf-a500-532778627103',
  prod_instrument_key: 'b32f73f4-92f0-4e55-a8c5-8d8bc14522e0',
  prod_instrument_key2: '698ed7df-20fe-4884-8906-246f32a234c7',
  ces_instrument_key: 'b32f73f4-92f0-4e55-a8c5-8d8bc14522e0',
  devices: {
    '1':'Acer Orion 9000',
    'CC1AD21D-8D4A-4544-A1E0-D0F4D1BCE427':'Acer Swift 5',
    'D27C6877-2AE1-4E2E-AF59-3A2BCE6315AC':'Acer Swift 7 (Ale)',
    'D2BAA2E2-5906-4EE0-902B-B3A3822A9D59':'Acer Swift 7 (Budlight)',
    '5':'Acer Triton 900',
    '821E3051-7869-42BF-8A1B-117874BDBCC1':'ASUS ROG Zephyrus',
    '2AD1D7E9-B9E0-44EA-A74C-D3D8C7C8FF2C':'ASUS Zenbook Flip 14 UX461',
    '8':'Dell Alienware m15/m17',
    'AB922AE7-4128-4A22-9C5C-9443C06F0F18':'Dell XPS 13 9380',
    '92A77DD8-FBE6-4B7D-B125-E8252DE8F464':'Dell XPS 13 9380',
    '25789306-7124-49D4-9306-8040962BE78B':'HP OMEN by HP 15',
    'D9F59D76-7490-44AA-9075-259007C87952':'HP Spectre Folio',
    'A62C148D-D617-482F-AB66-C9A43AAA48DB':'HP Spectre x360 13',
    '0550C637-503C-40A9-A05C-FA1AE4FD1115':'HP Spectre x360 15',
    '177AD898-CB0C-40CC-A0AD-93B041CBC2A3':'Huawei MateBook 13',
    '15':'IBUYPOWER Revolt 3',
    'F01F1017-9270-4AB7-BA37-3EDD6179E55A':'Lenovo Yoga Book C930',
    '17':'Lenovo Yoga C630',
    '746B4244-AFB0-449B-8CB2-39202FE70144':'Samsung Galaxy Book 2',
    '19':'Samsung Odyssey 2',
    '0F9AE52D-D552-445F-B841-EF5230434FAB':'Acer Aspire 5',
    '06CAB8AC-3AC0-4ABD-8631-3A028B1CB1DA':'Acer Spin 1',
    '507E8CC6-AE32-478A-B568-DE1E5ABA6A8E':'Acer Swift 1',
    '23':'Acer Swift 5',
    '24':'ASUS NovaGo',
    '25':'ASUS Transformer Mini T103',
    '333D30F1-D50E-4D8D-85ED-89F5FCD078F8':'ASUS VivoBook S15 S530',
    '42F29EA0-36ED-413E-9072-3CF54DE446DA':'Dell Inspiron 5481/5482 2-in-1',
    'C1250DE7-6569-49B9-A64E-BD95E4D8C9D1':'Dell Inspiron 7000 series convertible',
    '8EAE49C1-194F-447D-BF2B-1724C00DD88B':'HP Pavilion 13',
    '30':'HP Pavilion AIO 27',
    '9A06CF9A-2BA2-44D8-8105-A210E10EA703':'HP Pavilion x360 14',
    '566EB682-564E-4891-A7D9-8E28F3993A4A':'Lenovo IdeaPad 330S 14',
    '33':'Lenovo Yoga 530',
    '34':'Samsung Notebook 9 Pen/Airforce',
    '35':'Samsung Notebook 9 Pro',
    '730E13C1-5CB9-47BE-90ED-904AFDCB79A9':'Samsung Notebook Flash',
    'BCB1ACAC-3ABB-44E7-B7A0-B64D98C2A3B4':'Acer Aspire 1',
    '38':'Acer Spin 1',
    '39':'Acer Swift 1',
    '78F85AC5-E820-46BD-90AD-58DF88CDAC2D':'ASUS VivoBook 15 X512',
    'A89767AD-82A5-4F53-838A-ADD2A6B27E6C':'ASUS Vivobook E12 E203',
    '6442A989-83E5-4508-8C56-5F473678E92E':'ASUS Vivobook E406',
    'F4368E18-45B5-4432-9CA3-7CF9C225331D':'HP Stream 14',
    '44':'Lenovo D330',
    '45':'Lenovo Yoga 330',
    '46':'Lenovo Yoga S940',
    '47':'Lanit IRBIS MB2383',
    '48':'Lanit IRBIS NB250',
    '49':'Lanit IRBIS NB255',
    '12227A08-CA56-4CCE-8621-95705E50353D':'Lenovo 130S',
    '51':'Lenovo ThinkPad X1 Carbon 7th Gen',
    '9399DC03-BD9E-45F3-B6D5-064BCB635162':'LG Gram Prime',
    '316B5DE7-F8D6-49A4-876B-C487EE8751D0':'MSI P65',
    '57C961B9-61DE-4613-A7E9-F856AACDA8AF':'Nexstgo AVITA',
    '56':'Razer Lynette',
  }
};
export default appConstants;