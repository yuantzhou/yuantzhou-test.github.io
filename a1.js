/* Structure taken form lab10-test05.js */
let map;
 const Companies= 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php';
 const Stocks= 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=';
    document.querySelector("div.b section").style.display = "block";
let long= 41;
let lat = 12;
function averege(arr){
    let sum =0;
    for(let a of arr){
        sum = sum+a;
    }
    return sum/arr.length;
}
function initMap() {
                map = new google.maps.Map(document.querySelector('.d'), {
                    center: {lat: lat, lng: long},
                    mapTypeId: 'satellite',
                    zoom: 18});
            }
  
document.addEventListener("DOMContentLoaded", function() {
  
    document.querySelector('div.loader').style.display= "block";
 fetch(Companies).then((resp)=> resp.json()).then(data => {pop(data)}).catch(error => console.error(error));
    document.querySelector("#Credit").addEventListener("mouseover",function(){
            document.querySelector("#Credit").innerHTML="Author Yuan Tao Zhou, Google map API for the Google map, format currency from accounting.js, sort table from w3school, line chart and bar chart from chart.js, Candle chart from apexChart.js";
    })
    document.querySelector("#Credit").addEventListener("mouseleave",function(){
        setTimeout(() => {
            document.querySelector("#Credit").innerHTML="Credit";
        }, 10000);
    })
    function pop(data){
        document.querySelector('div.loader').style.display= "none";
        console.log(data);
    let liAdded = data.map(function(gallery){
        return gallery.name;
    });
    
    for( let li of liAdded){
        let list= document.querySelector('ul#companyList');
         let listI=document.createElement("li");
            listI.innerHTML =`${li}`;
            listI.classList.add("com");
    listI.addEventListener('click',function(e){
             //display for each garlley
        console.log(e.target.innerHTML);
        let A= document.querySelector('div.a section');
           A.style.display = "inline-block";
           let G =data.find(f);
           function f (search){
               return search.name === `${e.target.innerHTML}`;
           }
            //display B
            document.querySelector('#logo').setAttribute("src","w2021-assign1/logos/"+G.symbol+".svg");
            document.querySelector('#name').innerHTML = `${G.name}<br>`; 
            document.querySelector('#symbol').innerHTML = `${G.symbol}`; 
            document.querySelector('#sector').innerHTML = `${G.sector}`; 
            document.querySelector('#subindustry').innerHTML = `${G.subindustry}`; 
            document.querySelector('#address').innerHTML = `${G.address}`; 
            document.querySelector('#exchange').innerHTML = `${G.exchange}`;
            document.querySelector('#description').innerHTML = `${G.description}`;
            document.querySelector('#website').href = `${G.website}`;
            document.querySelector('#website').innerHTML = `${G.website}`;
            long = G.longitude;
            lat = G.latitude;
            initMap();
        //Chart view    
        let ChartView= document.querySelector("#chart");
        ChartView.addEventListener('click',function(){
        let F = document.querySelector('.f ');
        F.style.display = "block";
        let finList = document.querySelector("#finList")
        document.querySelector('#CInfo').innerHTML = `${G.name} ${G.symbol}`; 
        document.querySelector('#des').innerHTML = `${G.description}`; 
        document.querySelector('#speak').addEventListener('click', 
        (e) => { 
        const utterance = new SpeechSynthesisUtterance 
        (`${G.description}`); 
        speechSynthesis.speak(utterance); 
        }); 
        let Gb = document.querySelector('.g ');
        let B = document.querySelector('.b ');
        let Cb = document.querySelector('.c ');
        let h = document.querySelector('.h ');
        let d = document.querySelector('.d ');
        let A = document.querySelector('.a');
        let I = document.querySelector('.I');
        A.style.display = "none";
        Cb.style.display= "none";
        B.style.display = "none";
        I.style.display = "block";
        Gb.style.display = "block";
        h.style.display = "none";
        d.style.display = "none";
        let rev0= document.createElement('td');
        rev0.innerHTML=accounting.formatNumber(`${G.financials.revenue[0]}`);
        let ern0= document.createElement('td');
        ern0.innerHTML=accounting.formatNumber(`${G.financials.earnings[0]}`);
        let asset0 =document.createElement('td');
        asset0.innerHTML=accounting.formatNumber(`${G.financials.assets[0]}`);
        let lia0 = document.createElement('td');
        lia0.innerHTML=innerHTML=accounting.formatNumber(`${G.financials.liabilities[0]}`);
        document.querySelector("#t19").appendChild(rev0);
        document.querySelector("#t19").appendChild(ern0);
        document.querySelector("#t19").appendChild(asset0);
        document.querySelector("#t19").appendChild(lia0);
        
        let rev1= document.createElement('td');
        rev1.innerHTML=accounting.formatNumber(`${G.financials.revenue[1]}`);
        let ern1= document.createElement('td');
        ern1.innerHTML=accounting.formatNumber(`${G.financials.earnings[1]}`);
        let asset1 =document.createElement('td');
        asset1.innerHTML=accounting.formatNumber(`${G.financials.assets[1]}`);
        let lia1 = document.createElement('td');
        lia1.innerHTML=innerHTML=accounting.formatNumber(`${G.financials.liabilities[1]}`);
        document.querySelector("#t18").appendChild(rev1);
        document.querySelector("#t18").appendChild(ern1);
        document.querySelector("#t18").appendChild(asset1);
        document.querySelector("#t18").appendChild(lia1);
        
        let rev2= document.createElement('td');
        rev2.innerHTML=accounting.formatNumber(`${G.financials.revenue[2]}`);
        let ern2= document.createElement('td');
        ern2.innerHTML=accounting.formatNumber(`${G.financials.earnings[2]}`);
        let asset2 =document.createElement('td');
        asset2.innerHTML=accounting.formatNumber(`${G.financials.assets[2]}`);
        let lia2 = document.createElement('td');
        lia2.innerHTML=innerHTML=accounting.formatNumber(`${G.financials.liabilities[2]}`);
        document.querySelector("#t17").appendChild(rev2);
        document.querySelector("#t17").appendChild(ern2);
        document.querySelector("#t17").appendChild(asset2);
        document.querySelector("#t17").appendChild(lia2);
        let financialsData=[];
        for (let o of G.financials.revenue){ financialsData.push(o);};
        for (let k of G.financials.earnings){financialsData.push(k);};
        for (let a of G.financials.assets){financialsData.push(a);};
        for (let y of G.financials.liabilities){financialsData.push(y);};
        var ctx = document.getElementById('BarChart');
       
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Revenue 2019","2018", "2017",  "Earning2019","2018", "2017",  "Asset2019","2018", "2017", "Liailities2019","2018", "2017"],
                datasets: [{
                    label: 'Finiancial chart',
                    data: financialsData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
        
    
    });
            //display C
            let StockH = `${Stocks}${G.symbol}`
            fetch(StockH).then((resp)=> resp.json()).then(data => {p(data)}).catch(error => console.error(error));
            function p(g){
                
                var line = document.querySelector('#LineChart');
                let statVol= [];
                for(let h of g){
                    statVol.push(h.volume);
                }
                let statClose= [];
                for(let h of g){
                    statClose.push(h.close);
                }
                let dates = [];
                for(let k of g){
                    dates.push(k.date)
                }
                var myChart = new Chart(line, {
                    type: 'line' ,
                    data: {
                        labels: dates,
                        datasets: [{
                            label: 'Finiancial chart',
                            data: statVol,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        }
                    }
                }); 
               
                
                console.log(g);
                let C =document.querySelector('div.c section');
            C.style.display = "block";
            let cP =  document.querySelector('#stockList');
            cP.innerHTML="";
                let header=document.createElement('tr');
                let a = document.createElement('th');
                a.innerHTML="Date";
                let b = document.createElement('th');
                b.innerHTML="Open";
                let c = document.createElement('th');
                c.innerHTML="Close";
                let d = document.createElement('th');
                d.innerHTML="Low";
                let l = document.createElement('th');
                l.innerHTML="High";
                let V = document.createElement('th');
                V.innerHTML="Volume";
                header.appendChild(a);
                header.appendChild(b);
                header.appendChild(c);
                header.appendChild(d);
                header.appendChild(l);
                header.appendChild(V);
                //https://stackoverflow.com/questions/10683712/html-table-sort
                cP.appendChild(header);
                let stat =document.querySelector('div.f section');
                stat.style.display = "block";
                let opn = [];
                let cls = [];
                let lw = [];
                let hih = [];
                let vol = [];

           for(let x of g){
                let p = document.createElement('tr');
                p.classList.add("item");
               let Date= document.createElement('td');
               let Open= document.createElement('td');
               let Close =document.createElement('td');
               let Low = document.createElement('td');
               let High = document.createElement('td');
               let Volume =document.createElement('td');
               Date.innerHTML= `${x.date}`;
               Open.innerHTML=Math.round(x.open*100)/100;
               opn.push(Math.round(x.open*100)/100);
               Close.innerHTML=Math.round(x.close*100)/100;
               cls.push(Math.round(x.open*100)/100)
               Low.innerHTML=Math.round(x.low*100)/100;
               lw.push(Math.round(x.low*100)/100);
               High.innerHTML=Math.round(x.high*100)/100;
               hih.push(Math.round(x.high*100)/100);
               Volume.innerHTML=Math.round(x.volume*100)/100;
               vol.push(Math.round(x.volume*100)/100)
               p.appendChild(Date);
               p.appendChild(Open);
               p.appendChild(Close);
               p.appendChild(Low);
               p.appendChild(High);
               p.appendChild(Volume);
               cP.appendChild(p);
            }
            let Oa= document.createElement('td');
            let Ca =document.createElement('td');
            let La = document.createElement('td');
            let Ha = document.createElement('td');
            let Vla =document.createElement('td');
            Oa.innerHTML = Math.round(averege(opn)*100)/100;
            Ca.innerHTML= Math.round(averege(cls)*100)/100;
            La.innerHTML= Math.round(averege(lw)*100)/100;
            Ha.innerHTML= Math.round(averege(hih)*100)/100;
            Vla.innerHTML= Math.round(averege(vol)*100)/100;
            let av= document.querySelector("#Avg");
            av.appendChild(Oa);
         av.appendChild(Ca);
         av.appendChild(La);
         av.appendChild(Ha);
         av.appendChild(Vla);
         

         let Omi= document.createElement('td');
         let Cmi =document.createElement('td');
         let Lmi = document.createElement('td');
         let Hmi = document.createElement('td');
         let Vlmin =document.createElement('td');
         Omi.innerHTML = Math.round(Math.min(...opn)*100)/100;
         Cmi.innerHTML= Math.round(Math.min(...cls)*100)/100;
         Lmi.innerHTML= Math.round(Math.min(...lw)*100)/100;
         Hmi.innerHTML= Math.round(Math.min(...hih)*100)/100;
         Vlmin.innerHTML= Math.round(Math.min(...vol)*100)/100;
         let MIN= document.querySelector("#Min");
         MIN.appendChild(Omi);
      MIN.appendChild(Cmi);
      MIN.appendChild(Lmi);
      MIN.appendChild(Hmi);
      MIN.appendChild(Vlmin);
     

      let Omx= document.createElement('td');
      let Cmx =document.createElement('td');
      let Lmx = document.createElement('td');
      let Hmx = document.createElement('td');
      let Vlmx =document.createElement('td');
      Omx.innerHTML = Math.round(Math.max(...opn)*100)/100;
      Cmx.innerHTML= Math.round(Math.max(...cls)*100)/100;
      Lmx.innerHTML= Math.round(Math.max(...lw)*100)/100;
      Hmx.innerHTML= Math.round(Math.max(...hih)*100)/100;
      Vlmx.innerHTML= Math.round(Math.max(...vol)*100)/100;
      let MAX= document.querySelector("#Max");
      MAX.appendChild(Omx);
   MAX.appendChild(Cmx);
   MAX.appendChild(Lmx);
   MAX.appendChild(Hmx);
   MAX.appendChild(Vlmx);
   console.log(opn);

   var options = {
    series: [{
    data: [
      {
        x: "Open",
        y: [averege(opn),Math.max(...opn),Math.min(...opn),averege(opn)]
      },
      {
        x: "Close",
        y: [averege(cls),Math.max(...cls),Math.min(...cls),averege(cls)]
      },
      {
        x: "Low",
        y: [averege(lw),Math.max(...lw),Math.min(...lw),averege(lw)]
      },
      {
        x: "High",
        y: [averege(hih),Math.max(...hih),Math.min(...hih),averege(hih)]
      }
    ]
  }],
    chart: {
    type: 'candlestick',
    height: 350
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#candle"), options);
  chart.render();




            let headers= document.querySelectorAll("#stockList th");
                headers.forEach(function(element, i) {
                    element.addEventListener("click", function() {
                      w3.sortHTML(cP, ".item", "td:nth-child(" + (i + 1) + ")");
                    });
                  });}

        });
      
        
        list.appendChild(listI);
        let Search=document.querySelector("#companyX");
        let comps= document.querySelectorAll(".com");
        let cLr= document.querySelector("#Clear");
        function sList(){
            for(let c of comps){
                if(!c.innerHTML.toLowerCase().startsWith(Search.value.toLowerCase())){
                    c.style.display="none";
                }
                else{
                    c.style.display="";
                }}
        }
        cLr.addEventListener("click",function(){
                Search.value="";
                sList();
                
        })
    let GO=document.querySelector("#Go");
    GO.addEventListener('click',function(){
      sList();
    })
        };
    }
  
    let back = document.querySelector("#back");
    back.addEventListener('click',function(){
        let F = document.querySelector('.f ');
        F.style.display = "none";
        let Gb = document.querySelector('.g ');
        let B = document.querySelector('.b ');
        let Cb = document.querySelector('.c ');
        let h = document.querySelector('.h ');
        let d = document.querySelector('.d ');
        let A = document.querySelector('.a');
        let I = document.querySelector('.I');
        A.style.display = "block";
        Cb.style.display= "block";
        B.style.display = "block";
        I.style.display = "none";
        Gb.style.display = "none";
        h.style.display = "block";
        d.style.display = "block";
    });
    
    
})

