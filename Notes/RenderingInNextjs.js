// CSR (Client Side Rendering) : In Client-Side Rendering (CSR) with React, the browser downloads a minimal HTML page and the JavaScript needed for the page.
//  The JavaScript is then used to update the DOM and render the page.
// SUMMARY : Javascript Or Empty Html Page load hojata hai or phir Javascript ki
// help sa sari Html Render hoti hai Page render hone ke bad
// React Uses CSR

// SSR (Server Side Rendering) : Is me har dafa request jane par server per hee html
// CSS Javascript ka page ready hokar client par page mil jata hai --- QK server pe
// Higher Computing power as compare to browser tw is se Kafi fast response mil jata ha
// as compare to Client Side Rendering Qk CSR me Mobile browser bh use ho sakta hai
// Or Mobile me itni ram nahi hoti

// SSG (Static Site Generation) : SSG me build time par hee Page generate hojate hain
// OR Server par generated Page rakhe hua hote hain Jese hee request ati hai tw CLient
// ko Page mil jate hain (Is se build time kafi long hota ha qk HTML CSS JS Rendered
// pages compile horahe hote server ko dene ke lye) IS me ya problem hai ke updated content 
// milne me msla hota ha EG: Agar hum ne 3rd day of week revalidate rakha hua hai 
// tw 3rd day of week par build again banegi or phir deploy hogi tw agar 4th day koi data 
// update  hogaya tw woh show nahi hoga (humein forcefully kuch krke build update krni pregi)

// ISR
// ISR Every After some time Build Phase hota hai Build phase Hum design karte hain 
// After an hour or 10 seconds jub bh hum chahein 
